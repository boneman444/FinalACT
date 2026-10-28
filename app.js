/* FinalACT, Milestone 1 build.
   Flow: start -> timed diagnostic (Form A) -> review misses (explain + cause) -> score -> training program.
   Everything is saved in this browser (localStorage) and can be downloaded as JSON from "My data". */
(function () {
  "use strict";

  const BANK = window.ITEM_BANK;
  const SKILLS = BANK.meta.skills;
  const SKILL_SHORT = { S1: "Linear", S2: "Quadratic & exponential", S3: "Function concepts", S4: "Function families" };
  const FORM = "A";
  const FORM_MS = 22 * 60 * 1000;
  const PACE_MS = FORM_MS / BANK.meta.form_items; // 66 s per item
  const LATE_WINDOW_MS = 60 * 1000;
  const RUSHED_MS = PACE_MS * 0.25;
  const MIN_EXPLAIN = 15;
  const STORE_KEY = "finalact.m1";
  const VERSION = "m1-2026-10-23";

  const CAUSES = {
    concept: { label: "Concept gap", hint: "I didn't know how to start or what rule to use." },
    misconception: { label: "Misconception", hint: "I used a method I thought was right." },
    careless: { label: "Careless slip", hint: "I knew how, but made a small mistake." },
    time: { label: "Ran out of time", hint: "I guessed, rushed, or didn't get to it." }
  };
  const STAGES = [
    ["start", "Start"],
    ["diagnostic", "Diagnostic"],
    ["review", "Review misses"],
    ["score", "Score"],
    ["plan", "Training program"]
  ];

  const formItems = BANK.forms[FORM].slice().sort((a, b) => a.position - b.position);
  const byId = {};
  formItems.forEach((it) => (byId[it.id] = it));
  BANK.practice.forEach((it) => (byId[it.id] = it));

  /* ---------- state ---------- */

  function fresh() {
    return {
      version: VERSION,
      sessionId: Math.random().toString(36).slice(2, 10),
      createdAt: new Date().toISOString(),
      stage: "start",
      viewData: false,
      demo: false,
      diag: null,
      review: {},
      plan: null,
      events: []
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      return s && s.version === VERSION ? s : null;
    } catch (e) {
      return null;
    }
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(S));
    } catch (e) {
      /* storage blocked: the app still runs for this visit */
    }
  }

  let S = load() || fresh();
  if (location.hash === "#demo") S.demo = true;

  function log(type, data) {
    const ev = Object.assign({ type: type, at: new Date().toISOString() }, data || {});
    if (S.diag && S.diag.startedAt && !S.diag.submittedAt) {
      ev.t_ms = Date.now() - S.diag.startedAt;
      ev.clock_left_ms = Math.max(0, S.diag.deadline - Date.now());
    }
    S.events.push(ev);
    save();
  }

  /* ---------- helpers ---------- */

  const $ = (sel, root) => (root || document).querySelector(sel);
  const app = $("#app");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function tex(src, display) {
    try {
      return window.katex.renderToString(src, { throwOnError: false, displayMode: !!display });
    } catch (e) {
      return esc(src);
    }
  }

  // Item text uses $...$ for math and \n between lines; a line that is only math is set as display math.
  function rich(text) {
    return text
      .split("\n")
      .map((line) => {
        const whole = line.match(/^\s*\$([^$]+)\$\s*$/);
        if (whole && line.indexOf("$") === line.lastIndexOf("$") - whole[1].length - 1) {
          return '<span class="display">' + tex(whole[1], true) + "</span>";
        }
        const parts = line.split(/\$([^$]+)\$/);
        return '<span class="line">' + parts.map((p, i) => (i % 2 ? tex(p) : esc(p))).join("") + "</span>";
      })
      .join("");
  }

  function fmtClock(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }

  function fmtSec(ms) {
    return Math.round(ms / 1000) + "s";
  }

  function qnum(id) {
    return byId[id].position;
  }

  function humanize(tag) {
    if (!tag) return "";
    const s = tag.replace(/-/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* ---------- confirm dialog (window.confirm is not available everywhere) ---------- */

  function ask(text, yesLabel) {
    return new Promise((resolve) => {
      const box = $("#confirm");
      $("#confirmText").textContent = text;
      $("#confirmYes").textContent = yesLabel || "Yes";
      box.hidden = false;
      $("#confirmYes").focus();
      const done = (v) => {
        box.hidden = true;
        $("#confirmYes").onclick = $("#confirmNo").onclick = null;
        resolve(v);
      };
      $("#confirmYes").onclick = () => done(true);
      $("#confirmNo").onclick = () => done(false);
    });
  }

  /* ---------- top bar ---------- */

  function renderChrome() {
    const idx = STAGES.findIndex((s) => s[0] === S.stage);
    $("#steps").innerHTML = STAGES.map((s, i) => {
      const cls = S.viewData ? (i <= idx ? "done" : "") : i < idx ? "done" : i === idx ? "now" : "";
      return '<span class="' + cls + '">' + s[1] + "</span>";
    }).join("");
    $("#demoPill").hidden = !S.demo;
    $("#progressBtn").textContent = S.viewData ? "Back" : "My data";
  }

  function render() {
    stopTicker();
    renderChrome();
    if (S.viewData) return renderData();
    ({ start: renderStart, diagnostic: renderDiagnostic, review: renderReview, score: renderScore, plan: renderPlan }[S.stage])();
  }

  function go(stage) {
    S.stage = stage;
    save();
    render();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  /* ---------- start ---------- */

  function renderStart() {
    app.innerHTML =
      '<section class="stack">' +
      '<p class="eyebrow">ACT Math · Algebra and Functions</p>' +
      "<h1>Find out why you miss questions, not just which ones.</h1>" +
      '<p class="lede">You will take a 20-question diagnostic in 22 minutes, the same pace as the real ACT math section. Afterward FinalACT shows which questions you missed, asks you to explain each one, and builds a training program around the causes.</p>' +
      "</section>" +
      '<section class="panel">' +
      "<h2>How this works</h2>" +
      '<div class="rules">' +
      rule("Timed like the real test", "22 minutes for 20 questions, about 66 seconds each. Skip around with the question grid. The test submits itself at 0:00.") +
      rule("Answers stay hidden", "You will see which questions you missed, but not the correct answers. Seeing the answer early makes it feel learned when it isn't.") +
      rule("You explain first", "For each miss you write why you picked your answer and say what went wrong. Your score appears after that.") +
      rule("A program built on your misses", "Your training program targets the same question types you missed, ordered from easier to harder.") +
      "</div></section>" +
      '<section class="panel">' +
      "<h2>The four skills</h2>" +
      '<ul class="skills-list">' +
      Object.keys(SKILLS).map((k) => '<li><span class="tag">' + k + "</span><span>" + esc(SKILLS[k]) + "</span></li>").join("") +
      "</ul>" +
      '<p class="muted">Five questions per skill, from easier to harder. These are original ACT-style questions, not official ACT items.</p>' +
      "</section>" +
      '<section class="panel">' +
      '<label class="check"><input type="checkbox" id="demoToggle"' + (S.demo ? " checked" : "") + "> Show demo shortcuts (for recording and reviewers)</label>" +
      '<div class="row"><button class="primary" id="beginBtn" type="button">Start the 22-minute diagnostic</button>' +
      '<span class="muted">Find a quiet spot. The clock keeps running if you close the tab.</span></div>' +
      "</section>";
    $("#demoToggle").onchange = (e) => {
      S.demo = e.target.checked;
      save();
      renderChrome();
    };
    $("#beginBtn").onclick = startDiagnostic;
  }

  function rule(title, body) {
    return '<div class="rule"><h3>' + esc(title) + "</h3><p>" + esc(body) + "</p></div>";
  }

  /* ---------- diagnostic ---------- */

  function startDiagnostic() {
    const now = Date.now();
    S.diag = {
      form: FORM,
      startedAt: now,
      deadline: now + FORM_MS,
      cur: 0,
      answers: {},
      submittedAt: null,
      submitReason: null
    };
    formItems.forEach((it) => (S.diag.answers[it.id] = { choice: null, active_ms: 0, visits: 0, changes: 0, last_set_left_ms: null }));
    log("diagnostic_start", { form: FORM, items: formItems.length, limit_ms: FORM_MS });
    S.stage = "diagnostic";
    save();
    render();
  }

  // Per-item active time: the clock for an item runs only while it is on screen and the tab is visible.
  let shownAt = null;
  function openItemClock() {
    if (document.visibilityState === "visible" && S.diag && !S.diag.submittedAt) shownAt = performance.now();
  }
  function closeItemClock() {
    if (shownAt == null || !S.diag) return;
    const id = formItems[S.diag.cur].id;
    S.diag.answers[id].active_ms += Math.round(performance.now() - shownAt);
    shownAt = null;
    save();
  }

  document.addEventListener("visibilitychange", () => {
    if (S.stage !== "diagnostic" || !S.diag || S.diag.submittedAt) return;
    if (document.visibilityState === "hidden") {
      closeItemClock();
      log("tab_hidden", { item: formItems[S.diag.cur].id });
    } else {
      log("tab_visible", { item: formItems[S.diag.cur].id });
      openItemClock();
      checkDeadline();
    }
  });

  let ticker = null;
  function stopTicker() {
    if (ticker) clearInterval(ticker);
    ticker = null;
  }
  function checkDeadline() {
    if (S.diag && !S.diag.submittedAt && Date.now() >= S.diag.deadline) submitDiagnostic("time");
  }

  function renderDiagnostic() {
    stopTicker();
    const d = S.diag;
    if (d.submittedAt) return go("review");
    if (Date.now() >= d.deadline) return submitDiagnostic("time");
    const it = formItems[d.cur];
    const a = d.answers[it.id];
    if (shownAt == null) {
      a.visits += 1;
      log("item_show", { item: it.id });
      openItemClock();
    }
    const answered = formItems.filter((x) => d.answers[x.id].choice).length;
    app.innerHTML =
      '<div class="testbar">' +
      '<div><p class="eyebrow">Diagnostic · Form ' + FORM + "</p><p class=\"muted\">" + answered + " of 20 answered</p></div>" +
      '<div class="row">' +
      (S.demo ? '<button class="demo small" id="simBtn" type="button">Demo: fill with a sample student</button>' : "") +
      '<span class="timer" id="timer" role="timer" aria-label="Time left">' + fmtClock(d.deadline - Date.now()) + "</span></div></div>" +
      '<nav class="grid20" aria-label="Questions">' +
      formItems.map((x, i) => {
        const cls = [d.answers[x.id].choice ? "answered" : "", i === d.cur ? "current" : ""].join(" ");
        return '<button type="button" class="' + cls + '" data-go="' + i + '" aria-label="Question ' + (i + 1) + (d.answers[x.id].choice ? ", answered" : "") + '">' + (i + 1) + "</button>";
      }).join("") +
      "</nav>" +
      '<article class="panel item">' +
      '<div class="item-head"><span class="qnum">' + (d.cur + 1) + "</span></div>" +
      '<div class="stem">' + rich(it.stem) + "</div>" +
      '<div class="choices" role="radiogroup">' +
      it.choices.map((c) => {
        const sel = a.choice === c.label;
        return '<button type="button" role="radio" aria-checked="' + sel + '" class="choice' + (sel ? " sel" : "") + '" data-choice="' + c.label + '">' +
          '<span class="bubble">' + c.label + '</span><span class="choice-body">' + tex(c.text) + "</span></button>";
      }).join("") +
      "</div>" +
      '<div class="row between">' +
      '<button class="ghost" id="prevBtn" type="button"' + (d.cur === 0 ? " disabled" : "") + ">Previous</button>" +
      '<div class="row">' +
      (d.cur < formItems.length - 1 ? '<button class="primary" id="nextBtn" type="button">Next</button>' : "") +
      '<button class="' + (d.cur === formItems.length - 1 ? "primary" : "ghost") + '" id="submitBtn" type="button">Submit test</button>' +
      "</div></div></article>";

    app.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => moveTo(+b.dataset.go)));
    app.querySelectorAll("[data-choice]").forEach((b) => (b.onclick = () => choose(it.id, b.dataset.choice)));
    $("#prevBtn").onclick = () => moveTo(d.cur - 1);
    if ($("#nextBtn")) $("#nextBtn").onclick = () => moveTo(d.cur + 1);
    $("#submitBtn").onclick = async () => {
      const left = formItems.filter((x) => !d.answers[x.id].choice).length;
      const msg = left
        ? "You have " + left + " unanswered question" + (left > 1 ? "s" : "") + " and " + fmtClock(d.deadline - Date.now()) + " left. Submit anyway?"
        : "Submit your test? You can't change answers after this.";
      if (await ask(msg, "Submit test")) submitDiagnostic("student");
    };
    if ($("#simBtn")) $("#simBtn").onclick = simulateStudent;

    ticker = setInterval(() => {
      const t = $("#timer");
      if (!t) return;
      const left = d.deadline - Date.now();
      t.textContent = fmtClock(left);
      t.classList.toggle("low", left <= 2 * 60 * 1000);
      checkDeadline();
    }, 250);
  }

  function choose(id, label) {
    const a = S.diag.answers[id];
    const prev = a.choice;
    a.choice = prev === label ? null : label; // tapping the filled bubble again clears it
    a.changes += 1;
    a.last_set_left_ms = S.diag.deadline - Date.now();
    log(a.choice ? "answer_set" : "answer_clear", { item: id, choice: a.choice, previous: prev });
    renderDiagnostic();
  }

  function moveTo(i) {
    if (i < 0 || i >= formItems.length || i === S.diag.cur) return;
    closeItemClock();
    log("navigate", { from: formItems[S.diag.cur].id, to: formItems[i].id });
    S.diag.cur = i;
    save();
    renderDiagnostic();
  }

  function submitDiagnostic(reason) {
    closeItemClock();
    stopTicker();
    const d = S.diag;
    log("diagnostic_submit", { reason: reason });
    d.submittedAt = Math.min(Date.now(), d.deadline);
    d.submitReason = reason;
    score();
    go("review");
  }

  // Scores the test and sets the ran-out-of-time flag on each item.
  function score() {
    const d = S.diag;
    d.results = formItems.map((it) => {
      const a = d.answers[it.id];
      const correct = a.choice === it.answer;
      const unansweredAtTime = !a.choice && d.submitReason === "time";
      const rushedLate = !!a.choice && a.last_set_left_ms != null && a.last_set_left_ms <= LATE_WINDOW_MS && a.active_ms < RUSHED_MS;
      const picked = a.choice ? it.choices.find((c) => c.label === a.choice) : null;
      return {
        id: it.id,
        q: it.position,
        skill: it.skill,
        template: it.template,
        difficulty: it.difficulty,
        choice: a.choice,
        correct: correct,
        misconception_tag: picked ? picked.misconception : null,
        active_ms: a.active_ms,
        time_flag: unansweredAtTime ? "unanswered_at_time" : rushedLate ? "rushed_at_end" : null
      };
    });
    save();
  }

  /* ---------- demo: sample student ---------- */

  function rng(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // A repeatable student who is solid on linear equations and weak on function families,
  // runs low on time, rushes question 18 and leaves 19 and 20 blank.
  function simulateStudent() {
    closeItemClock();
    stopTicker();
    const r = rng(6460);
    const skill = { S1: 0.95, S2: 0.8, S3: 0.75, S4: 0.45 };
    const d = S.diag;
    let used = 0;
    formItems.forEach((it, i) => {
      const a = d.answers[it.id];
      const n = i + 1;
      if (n >= 19) {
        a.active_ms = n === 19 ? 6000 : 0;
        a.visits = n === 19 ? 1 : 0;
        return;
      }
      const time = n === 18 ? 9000 : Math.round(45000 + r() * 50000);
      used += time;
      const pRight = skill[it.skill] - 0.08 * (it.difficulty - 1);
      const right = n !== 18 && r() < pRight;
      const wrongs = it.choices.filter((c) => !c.correct);
      a.choice = right ? it.answer : wrongs[Math.floor(r() * wrongs.length)].label;
      a.active_ms = time;
      a.visits = 1;
      a.changes = r() < 0.2 ? 2 : 1;
      a.last_set_left_ms = n === 18 ? 40000 : Math.max(61000, FORM_MS - used);
      S.events.push({ type: "answer_set", at: new Date().toISOString(), item: it.id, choice: a.choice, simulated: true, t_ms: used, clock_left_ms: FORM_MS - used });
    });
    d.deadline = Date.now();
    log("demo_sample_student", { seed: 6460 });
    submitDiagnostic("time");
  }

  /* ---------- review misses ---------- */

  function misses() {
    return S.diag.results.filter((r) => !r.correct);
  }

  function reviewEntry(r) {
    if (!S.review[r.id]) S.review[r.id] = { explanation: "", cause: r.time_flag === "unanswered_at_time" ? "time" : null };
    return S.review[r.id];
  }

  function reviewDone(r) {
    const e = reviewEntry(r);
    return e.cause && e.explanation.trim().length >= MIN_EXPLAIN;
  }

  function renderReview() {
    const list = misses();
    if (!list.length) {
      app.innerHTML =
        '<section class="panel"><h2>No misses on this diagnostic.</h2><p>Every question was answered correctly, so there is nothing to review.</p>' +
        '<div class="row"><button class="primary" id="toScore" type="button">See my score</button></div></section>';
      $("#toScore").onclick = () => go("score");
      return;
    }
    const doneCount = list.filter(reviewDone).length;
    app.innerHTML =
      '<section class="stack">' +
      '<p class="eyebrow">Step 2 · Review your misses</p>' +
      "<h1>You missed " + list.length + " question" + (list.length > 1 ? "s" : "") + ". Let's find out why.</h1>" +
      '<p class="lede">The correct answers and your score stay hidden for now. For each question below, write why you chose your answer, then pick what you think went wrong. Your score appears when all of them are done.</p>' +
      (S.diag.submitReason === "time" ? '<div class="callout warn"><strong>Time ran out.</strong><p>Questions you hadn\'t answered are marked "Ran out of time" for you. Change it if something else happened.</p></div>' : "") +
      '<div class="row between"><span class="muted" id="reviewCount">' + doneCount + " of " + list.length + " done</span>" +
      (S.demo ? '<button class="demo small" id="fillReview" type="button">Demo: fill sample reflections</button>' : "") +
      "</div></section>" +
      list.map(missCard).join("") +
      '<section class="panel"><div class="row between"><span class="muted" id="reviewCount2"></span>' +
      '<button class="primary" id="toScore" type="button">See my score</button></div></section>';

    list.forEach((r) => {
      const card = $('[data-miss="' + r.id + '"]');
      const ta = card.querySelector("textarea");
      ta.oninput = () => {
        reviewEntry(r).explanation = ta.value;
        save();
        updateReviewState();
      };
      ta.onchange = () => log("explanation_saved", { item: r.id, chars: ta.value.trim().length });
      card.querySelectorAll("[data-cause]").forEach((b) => {
        b.onclick = () => {
          reviewEntry(r).cause = b.dataset.cause;
          log("cause_set", { item: r.id, cause: b.dataset.cause });
          card.querySelectorAll("[data-cause]").forEach((x) => {
            x.classList.toggle("sel", x === b);
            x.setAttribute("aria-pressed", x === b);
          });
          updateReviewState();
        };
      });
    });
    $("#toScore").onclick = () => {
      log("review_complete", { misses: list.length });
      go("score");
    };
    if ($("#fillReview")) $("#fillReview").onclick = fillSampleReview;
    updateReviewState();
  }

  function missCard(r) {
    const it = byId[r.id];
    const e = reviewEntry(r);
    const flagNote =
      r.time_flag === "unanswered_at_time"
        ? '<p class="sysread muted">The clock ran out before you answered this one.</p>'
        : r.time_flag === "rushed_at_end"
        ? '<p class="sysread muted">You answered this in the last minute after ' + fmtSec(r.active_ms) + " on it, well under the 66-second pace.</p>"
        : "";
    return (
      '<article class="panel miss" data-miss="' + r.id + '">' +
      '<div class="item-head"><span class="qnum">' + r.q + '</span><span class="tag">' + r.skill + "</span><span class=\"muted\">" + esc(SKILL_SHORT[r.skill]) + "</span></div>" +
      '<div class="stem">' + rich(it.stem) + "</div>" +
      '<div class="choices">' +
      it.choices.map((c) => {
        const mine = r.choice === c.label;
        return '<div class="choice' + (mine ? " sel wrongpick" : "") + '"><span class="bubble">' + c.label + '</span><span class="choice-body">' + tex(c.text) + "</span>" +
          (mine ? '<span class="pill bad">Your answer</span>' : "") + "</div>";
      }).join("") +
      "</div>" +
      (r.choice ? "" : '<p class="picked"><span class="pill warn">Not answered</span></p>') +
      flagNote +
      '<label class="field" for="ex-' + r.id + '">' +
      (r.choice ? "Why did you pick " + r.choice + "?" : "What happened with this question?") +
      " <small>Walk through what you did or were thinking. At least " + MIN_EXPLAIN + " characters.</small></label>" +
      '<textarea id="ex-' + r.id + '">' + esc(e.explanation) + "</textarea>" +
      '<div class="stack"><strong>What best describes this miss?</strong>' +
      '<div class="causes">' +
      Object.keys(CAUSES).map((k) =>
        '<button type="button" data-cause="' + k + '" aria-pressed="' + (e.cause === k) + '" class="' + (e.cause === k ? "sel" : "") + '"><b>' + CAUSES[k].label + "</b><span class=\"muted\">" + CAUSES[k].hint + "</span></button>"
      ).join("") +
      "</div></div></article>"
    );
  }

  function updateReviewState() {
    const list = misses();
    const done = list.filter(reviewDone).length;
    const txt = done + " of " + list.length + " done";
    $("#reviewCount").textContent = txt;
    $("#reviewCount2").textContent = done === list.length ? "All done." : txt + ". Each one needs an explanation and a cause.";
    $("#toScore").disabled = done !== list.length;
  }

  function fillSampleReview() {
    const samples = {
      concept: "I wasn't sure which rule applied here so I picked the one that looked closest to what I remembered.",
      misconception: "I moved the term to the other side and kept the sign the same, I thought that was how it works.",
      careless: "I knew the steps but I think I messed up the arithmetic near the end and didn't check it.",
      time: "I was running out of time so I guessed without really working it out."
    };
    const order = ["misconception", "concept", "careless", "misconception", "concept"];
    misses().forEach((r, i) => {
      const e = reviewEntry(r);
      if (!e.cause) e.cause = r.time_flag ? "time" : order[i % order.length];
      if (e.explanation.trim().length < MIN_EXPLAIN) e.explanation = samples[e.cause];
    });
    log("demo_sample_reflections");
    save();
    renderReview();
  }

  /* ---------- score ---------- */

  function skillRows() {
    return Object.keys(SKILLS).map((k) => {
      const rs = S.diag.results.filter((r) => r.skill === k).sort((a, b) => a.q - b.q);
      return { skill: k, rs: rs, right: rs.filter((r) => r.correct).length };
    });
  }

  function renderScore() {
    const res = S.diag.results;
    const right = res.filter((r) => r.correct).length;
    const pct = Math.round((100 * right) / res.length);
    const usedMs = Math.min(FORM_MS, S.diag.submittedAt - S.diag.startedAt);
    const causeCounts = {};
    misses().forEach((r) => {
      const c = S.review[r.id].cause;
      causeCounts[c] = (causeCounts[c] || 0) + 1;
    });
    const flagged = res.filter((r) => r.time_flag).length;
    log("score_view", { correct: right, pct: pct });

    app.innerHTML =
      '<section class="stack"><p class="eyebrow">Step 3 · Your diagnostic score</p>' +
      '<div class="row" style="gap:24px;align-items:flex-end"><span class="big">' + pct + '%</span><span class="lede">' + right + " of 20 correct · " + fmtClock(usedMs) + " used of 22:00</span></div>" +
      '<p class="muted">The correct answers stay hidden. You will work through these skills in your training program.</p></section>' +
      '<section class="panel"><h2>By skill</h2><div class="tablewrap"><table>' +
      '<thead><tr><th>Skill</th><th>Questions, easier to harder</th><th class="num">Correct</th><th>Status</th></tr></thead><tbody>' +
      skillRows().map((s) =>
        "<tr><td><span class=\"tag\">" + s.skill + "</span> " + esc(SKILLS[s.skill]) + "</td>" +
        '<td><span class="dots" aria-label="' + s.right + ' of 5 correct">' + s.rs.map((r) => '<i class="' + (r.correct ? "on" : "") + '" title="Question ' + r.q + '"></i>').join("") + "</span></td>" +
        '<td class="num">' + s.right + " / 5</td>" +
        "<td>" + (s.right >= 4 ? '<span class="pill ok">At target (4 of 5)</span>' : '<span class="pill bad">Below target</span>') + "</td></tr>"
      ).join("") +
      "</tbody></table></div>" +
      '<p class="muted">Filled dots are correct answers. The target for each skill is 4 of 5, the mastery bar you will need on two tests in a row.</p></section>' +
      '<section class="panel"><h2>Why you missed them</h2>' +
      (misses().length
        ? '<div class="row">' + Object.keys(CAUSES).filter((k) => causeCounts[k]).map((k) => '<span class="pill info">' + CAUSES[k].label + ": " + causeCounts[k] + "</span>").join("") + "</div>" +
          (flagged ? '<p class="muted">The timer flagged ' + flagged + " question" + (flagged > 1 ? "s" : "") + " as unanswered or rushed at the end.</p>" : "")
        : "<p>No misses.</p>") +
      "</section>" +
      '<section class="row end"><button class="primary" id="toPlan" type="button">Build my training program</button></section>';
    $("#toPlan").onclick = () => {
      S.plan = buildPlan();
      log("plan_generated", { items: S.plan.items.length });
      go("plan");
    };
  }

  /* ---------- training program ---------- */

  const CAUSE_COACHING = {
    concept: "Start with the concept reminder before each question. The first items are the easiest of their type.",
    misconception: "These questions use the same setup as the ones you missed. Watch for the rule you used before and check it against the worked steps.",
    careless: "Before you check an answer, reread the question and redo the step you're least sure of.",
    time: "Practice is untimed. Work these carefully first, then you'll practice pace on the post-test."
  };

  // Rule-based program: for each missed diagnostic question, pick practice items of the same template
  // (same question type), add extra items for concept gaps and misconceptions, then order each skill easier to harder.
  function buildPlan() {
    const used = new Set();
    const bySkill = {};
    const pool = BANK.practice;

    function take(pred, sortFn) {
      const c = pool.filter((p) => !used.has(p.id) && pred(p)).sort(sortFn || ((a, b) => a.difficulty - b.difficulty));
      if (!c.length) return null;
      used.add(c[0].id);
      return c[0];
    }

    misses().forEach((r) => {
      const cause = S.review[r.id].cause;
      const list = (bySkill[r.skill] = bySkill[r.skill] || []);
      const want = cause === "concept" || cause === "misconception" ? 2 : 1;
      for (let n = 0; n < want && list.length < 8; n++) {
        let p = take((p) => p.skill === r.skill && p.template === r.template);
        let why;
        if (p) {
          why = "Same question type as #" + r.q;
        } else {
          p = take((p) => p.skill === r.skill, (a, b) => Math.abs(a.difficulty - r.difficulty) - Math.abs(b.difficulty - r.difficulty));
          why = "Same skill as #" + r.q + ", similar difficulty";
        }
        if (!p) break;
        list.push({ id: p.id, skill: p.skill, difficulty: p.difficulty, template: p.template, from: r.id, from_q: r.q, cause: cause, reason: why });
      }
    });

    const order = Object.keys(bySkill).sort((a, b) => {
      const ma = misses().filter((r) => r.skill === a).length;
      const mb = misses().filter((r) => r.skill === b).length;
      return mb - ma || a.localeCompare(b);
    });
    const skills = order.map((k) => {
      const causes = {};
      misses().filter((r) => r.skill === k).forEach((r) => {
        const c = S.review[r.id].cause;
        causes[c] = (causes[c] || 0) + 1;
      });
      const main = Object.keys(causes).sort((a, b) => causes[b] - causes[a])[0];
      return {
        skill: k,
        missed: misses().filter((r) => r.skill === k).map((r) => r.q),
        causes: causes,
        coaching: CAUSE_COACHING[main],
        items: bySkill[k].sort((a, b) => a.difficulty - b.difficulty)
      };
    });
    const onTarget = Object.keys(SKILLS).filter((k) => !bySkill[k]);
    return {
      createdAt: new Date().toISOString(),
      rule: "same-template practice per miss; 2 items for concept gap or misconception, 1 for careless slip or time; max 8 per skill; skills ordered by number of misses; items ordered easier to harder",
      skills: skills,
      noMisses: onTarget,
      items: skills.reduce((all, s) => all.concat(s.items), [])
    };
  }

  function renderPlan() {
    const p = S.plan || (S.plan = buildPlan());
    const total = p.items.length;
    app.innerHTML =
      '<section class="stack"><p class="eyebrow">Step 4 · Your training program</p>' +
      "<h1>" + total + " practice question" + (total === 1 ? "" : "s") + " across " + p.skills.length + " skill" + (p.skills.length === 1 ? "" : "s") + ".</h1>" +
      '<p class="lede">Built from the questions you missed and the causes you gave. Skills with the most misses come first, and each skill goes from easier to harder.</p>' +
      '<div class="callout info"><strong>Practice opens in the next build.</strong><p>Practice will be untimed. You will rate your confidence on every question, get hints one step at a time, and solve a matching twin question after any miss.</p></div>' +
      "</section>" +
      p.skills.map((s, i) =>
        '<section class="panel plan-skill">' +
        '<div class="row between"><h2><span class="muted">' + (i + 1) + ".</span> " + esc(SKILLS[s.skill]) + '</h2><span class="tag">' + s.skill + "</span></div>" +
        '<div class="row">' +
        '<span class="muted">Missed: ' + s.missed.map((q) => "#" + q).join(", ") + "</span>" +
        Object.keys(s.causes).map((c) => '<span class="pill info">' + CAUSES[c].label + (s.causes[c] > 1 ? " ×" + s.causes[c] : "") + "</span>").join("") +
        "</div>" +
        "<p>" + esc(s.coaching) + "</p>" +
        '<ol class="plan-items">' +
        s.items.map((x) =>
          "<li><details><summary><span class=\"mono\">" + x.id + "</span> · " + ["", "Easier", "Medium", "Harder"][x.difficulty] + " · " + esc(x.reason) + " (" + CAUSES[x.cause].label.toLowerCase() + ")</summary>" +
          '<div class="stem" style="font-size:1rem;padding-top:8px">' + rich(byId[x.id].stem) + "</div></details></li>"
        ).join("") +
        "</ol></section>"
      ).join("") +
      (p.noMisses.length
        ? '<section class="panel"><h2>No practice assigned</h2><p>' + p.noMisses.map((k) => esc(SKILLS[k])).join("; ") + ": no misses on the diagnostic, so these will be checked again on the post-test.</p></section>"
        : "") +
      '<section class="row end"><button class="ghost" id="seeData" type="button">See my data</button></section>';
    $("#seeData").onclick = () => {
      S.viewData = true;
      save();
      render();
    };
  }

  /* ---------- my data ---------- */

  function exportData() {
    return {
      app: "FinalACT",
      build: VERSION,
      session: S.sessionId,
      exported_at: new Date().toISOString(),
      diagnostic: S.diag
        ? {
            form: S.diag.form,
            started_at: new Date(S.diag.startedAt).toISOString(),
            submitted_at: S.diag.submittedAt ? new Date(S.diag.submittedAt).toISOString() : null,
            submit_reason: S.diag.submitReason,
            items: S.diag.results || null
          }
        : null,
      review: S.review,
      plan: S.plan,
      events: S.events
    };
  }

  function renderData() {
    const data = exportData();
    const json = JSON.stringify(data, null, 2);
    const res = S.diag && S.diag.results;
    app.innerHTML =
      '<section class="stack"><p class="eyebrow">My data</p><h1>Everything FinalACT has recorded</h1>' +
      '<p class="lede">This stays in your browser. Nothing is sent anywhere. Download it to share with the researcher.</p></section>' +
      (res
        ? '<section class="panel"><h2>Time per question</h2><div class="tablewrap"><table><thead><tr><th class="num">#</th><th>Skill</th><th>Answer</th><th class="num">Time on item</th><th>Timer flag</th><th>Cause given</th></tr></thead><tbody>' +
          res.map((r) =>
            '<tr><td class="num">' + r.q + "</td><td>" + r.skill + "</td><td>" + (r.choice || "–") + " " + (r.correct ? '<span class="pill ok">right</span>' : '<span class="pill bad">missed</span>') + "</td>" +
            '<td class="num">' + fmtSec(r.active_ms) + "</td><td>" + (r.time_flag ? '<span class="pill warn">' + r.time_flag.replace(/_/g, " ") + "</span>" : "") + "</td>" +
            "<td>" + (S.review[r.id] && S.review[r.id].cause ? CAUSES[S.review[r.id].cause].label : "") + "</td></tr>"
          ).join("") +
          "</tbody></table></div></section>"
        : '<section class="panel"><p>No diagnostic yet.</p></section>') +
      '<section class="panel"><div class="row between"><h2>Raw log</h2><span class="muted">' + S.events.length + " events</span></div>" +
      '<div class="row"><button class="primary" id="dlBtn" type="button">Download JSON</button><button class="ghost" id="copyBtn" type="button">Copy JSON</button><span class="muted" id="copyMsg" role="status"></span></div>' +
      '<pre class="data" id="rawData">' + esc(json) + "</pre></section>";
    $("#dlBtn").onclick = () => {
      const blob = new Blob([json], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "finalact-" + S.sessionId + ".json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      log("data_download");
    };
    $("#copyBtn").onclick = () => {
      const msg = $("#copyMsg");
      const fallback = () => {
        const range = document.createRange();
        range.selectNodeContents($("#rawData"));
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        msg.textContent = "Selected. Press Ctrl+C or Cmd+C to copy.";
      };
      try {
        navigator.clipboard.writeText(json).then(() => (msg.textContent = "Copied."), fallback);
      } catch (e) {
        fallback();
      }
    };
  }

  /* ---------- chrome buttons ---------- */

  $("#progressBtn").onclick = () => {
    if (S.stage === "diagnostic" && S.diag && !S.diag.submittedAt && !S.viewData) closeItemClock();
    S.viewData = !S.viewData;
    save();
    render();
  };
  $("#resetBtn").onclick = async () => {
    if (!(await ask("Start over? This erases your test, reflections and program from this browser.", "Erase and start over"))) return;
    const demo = S.demo;
    closeItemClock();
    shownAt = null;
    S = fresh();
    S.demo = demo;
    save();
    render();
  };
  $("#brand").onclick = (e) => {
    e.preventDefault();
    if (S.viewData) {
      S.viewData = false;
      save();
      render();
    }
  };

  // Expose read-only hooks for automated tests.
  window.FinalACT = { state: () => S, buildPlan: buildPlan, constants: { FORM_MS: FORM_MS, PACE_MS: PACE_MS, RUSHED_MS: RUSHED_MS } };

  render();
})();
