/* FinalACT AI tutor client.
   The page never holds an API key. It sends a small, structured request to the relay (a Cloudflare Worker,
   see worker/), which builds the prompt, calls Claude and returns plain text.
   Guardrails that live here, in code:
   - every request has a time limit; any failure returns { ok: false } and the app shows the written content;
   - before the student has earned the solution, a reply that names the correct letter or value is
     regenerated once and then dropped (the "answer-leak filter").
   The app, not the model, grades every answer. */
(function () {
  "use strict";

  // Set this to the Worker's URL once the relay is deployed, e.g. "https://finalact-tutor.<you>.workers.dev".
  // Until then the tutor is off and every hint and message comes from the item bank.
  const RELAY_URL = "https://finalact-tutor.dylanmichaelbona.workers.dev";
  const OVERRIDE_KEY = "finalact.tutorUrl"; // for testing: localStorage.setItem("finalact.tutorUrl", "<url>")
  const TIMEOUT_MS = 15000; // cause checks run ~10 at once and can take 8s+ under that load
  const MAX_WORDS = 60; // prompt asks for 45; replies over this get one rewrite

  function relayUrl() {
    try {
      const o = localStorage.getItem(OVERRIDE_KEY);
      if (o && /^https?:\/\//.test(o)) return o;
    } catch (e) {
      /* storage blocked */
    }
    return RELAY_URL;
  }

  // What the model sees about an item. It gets the key and the worked solution as hidden context,
  // so it explains the bank's verified math instead of working the problem out itself.
  function itemContext(it) {
    return {
      skill: it.skill,
      stem: it.stem,
      choices: it.choices.map((c) => ({ label: c.label, text: c.text, misconception: c.misconception })),
      correct_label: it.answer,
      correct_value: it.choices.find((c) => c.label === it.answer).text,
      worked_solution: it.solution
    };
  }

  /* ---------- answer-leak filter ---------- */

  function norm(s) {
    return String(s)
      .replace(/\$/g, "")
      .replace(/\\left|\\right/g, "")
      .replace(/\\[dt]frac/g, "\\frac")
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
      .replace(/[{}\s]/g, "")
      .replace(/\\cdot|\\times/g, "*")
      .replace(/−/g, "-")
      .toLowerCase();
  }

  function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // True when the text gives away the correct choice: its letter ("answer is C", "choice (C)", "(C)")
  // or its value (the correct choice's expression, or "= 5" style for short numbers).
  function leaks(text, it) {
    const L = it.answer;
    const letter = new RegExp("(?:[Aa]nswer|[Cc]hoice|[Oo]ption)\\s*(?:is|would be|:)?\\s*\\(?\\s*" + L + "\\b|\\(" + L + "\\)|\\b" + L + "\\s+is\\s+(?:correct|right)");
    if (letter.test(text)) return "letter";
    const value = norm(it.choices.find((c) => c.label === L).text);
    const flat = norm(text);
    const plain = value.replace(/^\((.*)\)\/\((.*)\)$/, "$1/$2").replace(/\(([^()]+)\)/g, "$1");
    if (/^-?\d+(\.\d+)?$/.test(value)) {
      const n = new RegExp("(?:=|is|equals|be|get|gives)\\s*\\$?\\s*" + escRe(value) + "(?![\\d.])", "i");
      if (n.test(String(text).replace(/−/g, "-"))) return "value";
    } else if (value.length >= 3 && (flat.includes(value) || flat.replace(/[()]/g, "").includes(plain.replace(/[()]/g, "")))) {
      return "value";
    }
    return null;
  }

  /* ---------- requests ---------- */

  async function once(task, payload) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(relayUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task, payload: payload }),
        signal: ctrl.signal
      });
      if (!res.ok) return { ok: false, reason: "http_" + res.status };
      const data = await res.json();
      if (!data || typeof data.text !== "string" || !data.text.trim()) return { ok: false, reason: "empty" };
      if (data.model) api.model = data.model;
      // The prompt asks the model to count words; drop it if it reports the count ("Word count: 44").
      const text = data.text.replace(/^\s*\(?word count:?\s*\d+\)?\.?\s*$/gim, "").trim();
      if (!text) return { ok: false, reason: "empty" };
      return { ok: true, text: text };
    } catch (e) {
      return { ok: false, reason: e && e.name === "AbortError" ? "timeout" : "network" };
    } finally {
      clearTimeout(timer);
    }
  }

  // guard = true when the student has not earned the solution yet.
  async function ask(task, payload, item, guard) {
    const t0 = Date.now();
    if (!relayUrl()) return { ok: false, reason: "off", ms: 0 };
    let r = await once(task, payload);
    // One retry for a passing failure (server error, timeout, network, empty reply).
    if (!r.ok) r = await once(task, payload);
    // Length backstop: one rewrite when a reply runs well past the ~45-word limit (the VERDICT line doesn't count).
    const words = (t) => t.replace(/^VERDICT:.*$/m, "").trim().split(/\s+/).filter(Boolean).length;
    if (r.ok && words(r.text) > MAX_WORDS) {
      const short = await once(task, Object.assign({}, payload, { retry_note: "Your last reply was " + words(r.text) + " words. Write it again in 45 words or fewer, same format." }));
      if (short.ok && words(short.text) < words(r.text)) r = Object.assign(short, { shortened: true });
    }
    if (r.ok && guard && leaks(r.text, item)) {
      const why = leaks(r.text, item);
      r = await once(task, Object.assign({}, payload, { retry_note: "Your last reply revealed the answer (" + why + "). Do not name the correct choice or its value." }));
      if (r.ok && leaks(r.text, item)) r = { ok: false, reason: "leak_blocked" };
      else if (r.ok) r.retried = true;
    }
    r.ms = Date.now() - t0;
    return r;
  }

  const api = {
    enabled: () => !!relayUrl(),
    ask: ask,
    itemContext: itemContext,
    leaks: leaks,
    model: null
  };
  window.FinalACTTutor = api;
})();
