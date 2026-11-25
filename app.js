/* FinalACT, Milestone 2 build.
   Flow: start -> timed diagnostic (Form A) -> review misses (explain + cause) -> score -> training program
         -> guarded practice -> timed post-test (Form B) -> results and mastery
         -> optional second loop (review B misses -> program -> practice -> Form C) -> final results.
   Everything is saved in this browser (localStorage) and can be downloaded as JSON from "My data".
   The AI tutor is optional: tutor.js talks to a relay, and every tutor message has a pre-written fallback. */
(function () {
  "use strict";

  const BANK = window.ITEM_BANK;
  const TUTOR = window.FinalACTTutor;
  const SKILLS = BANK.meta.skills;
  const SKILL_SHORT = { S1: "Linear equations", S2: "Quadratics & exponentials", S3: "Function concepts", S4: "Function families" };
  const FORMS = ["A", "B", "C"];
  const TEST_NAME = { A: "Diagnostic", B: "Post-test", C: "Final test" };
  const FORM_MS = 22 * 60 * 1000;
  const PACE_MS = FORM_MS / BANK.meta.form_items; // 66 s per item
  const LATE_WINDOW_MS = 60 * 1000;
  const RUSHED_MS = PACE_MS * 0.25;
  const MIN_EXPLAIN = 15;
  const MASTERY = 4; // of 5 per skill, on two forms in a row
  const STORE_KEY = "finalact.m2";
  const OLD_KEY = "finalact.m1";
  const VERSION = "m2-2026-11-14";

  const CAUSES = {
    concept: { label: "Concept gap", hint: "I didn't know how to start or what rule to use." },
    misconception: { label: "Misconception", hint: "I used a method I thought was right." },
    careless: { label: "Careless slip", hint: "I knew how, but made a small mistake." },
    time: { label: "Ran out of time", hint: "I guessed, rushed, or didn't get to it." }
  };
  const CONF = [
    [1, "Guessing"],
    [2, "Unsure"],
    [3, "Fairly sure"],
    [4, "Certain"]
  ];

  const formItemsOf = {};
  const byId = {};
  FORMS.forEach((f) => {
    formItemsOf[f] = BANK.forms[f].slice().sort((a, b) => a.position - b.position);
    formItemsOf[f].forEach((it) => (byId[it.id] = it));
  });
  BANK.practice.forEach((it) => {
    byId[it.id] = it;
    (it.twins || []).forEach((t) => (byId[t.id] = t));
  });

  /* ---------- state ---------- */

  function newCycle(form) {
    return { form: form, diag: null, review: {}, plan: null, practice: null, loopChoice: null };
  }

  function fresh() {
    return {
      version: VERSION,
      sessionId: Math.random().toString(36).slice(2, 10),
      createdAt: new Date().toISOString(),
      stage: "start",
      viewData: false,
      demo: false,
      cycle: 0,
      cycles: [newCycle("A")],
      finished: false,
      events: []
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && s.version === VERSION) return s;
      }
      // Carry a Milestone 1 session forward: its diagnostic, review and program become cycle 1.
      const old = localStorage.getItem(OLD_KEY);
      if (old) {
        const o = JSON.parse(old);
        if (o && o.diag) {
          const s = fresh();
          Object.assign(s, { sessionId: o.sessionId, createdAt: o.createdAt, demo: !!o.demo, events: o.events || [] });
          Object.assign(s.cycles[0], { diag: o.diag, review: o.review || {}, plan: o.plan || null });
          s.stage = o.stage === "start" ? "start" : o.stage;
          if (s.stage === "diagnostic") s.stage = "test";
          return s;
        }
      }
    } catch (e) {
      /* unreadable storage: start fresh */
    }
    return null;
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

  const cyc = () => S.cycles[S.cycle];
  const formItems = () => formItemsOf[cyc().form];

  function log(type, data) {
    const ev = Object.assign({ type: type, at: new Date().toISOString(), cycle: S.cycle, form: cyc().form }, data || {});
    const d = cyc().diag;
    if (d && d.startedAt && !d.submittedAt) {
      ev.t_ms = Date.now() - d.startedAt;
      ev.clock_left_ms = Math.max(0, d.deadline - Date.now());
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
    return String(text)
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

  function humanize(tag) {
    if (!tag) return "";
    const s = tag.replace(/-/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function choiceOf(it, label) {
    return it.choices.find((c) => c.label === label);
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

  // Progress steps shown in the top bar. The second loop adds its own steps once the student opts in.
  function stepList() {
    const steps = [
      ["start", "Start"],
      ["0:test", "Diagnostic"],
      ["0:review", "Review"],
      ["0:score", "Score"],
      ["0:practice", "Training"],
      ["1:test", "Post-test"],
      ["1:results", "Results"]
    ];
    if (S.cycles[1] && S.cycles[1].loopChoice === "loop") {
      steps.push(["1:practice", "Second loop"], ["2:test", "Final test"], ["2:results", "Final results"]);
    }
    return steps;
  }

  function stepKey() {
    if (S.stage === "start") return "start";
    let st = S.stage;
    if (st === "plan") st = "practice";
    if (S.cycle === 1 && (st === "review" || st === "practice")) st = "practice";
    if (S.cycle === 0 && st === "results") st = "score";
    return S.cycle + ":" + st;
  }

  function renderChrome() {
    const steps = stepList();
    const idx = steps.findIndex((s) => s[0] === stepKey());
    $("#steps").innerHTML = steps.map((s, i) => {
      const cls = i < idx ? "done" : i === idx ? "now" : "";
      return '<span class="' + cls + '">' + s[1] + "</span>";
    }).join("");
    $("#demoPill").hidden = !S.demo;
    $("#progressBtn").textContent = S.viewData ? "Back" : "My data";
  }

  function render() {
    stopTicker();
    renderChrome();
    if (S.viewData) return renderData();
    ({ start: renderStart, test: renderTest, review: renderReview, score: renderScore, plan: renderPlan, practice: renderPractice, results: renderResults }[S.stage])();
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
      '<p class="lede">You will take a 20-question diagnostic in 22 minutes, the same pace as the real ACT math section. Afterward FinalACT shows which questions you missed, asks you to explain each one, and builds a training program around the causes. Then a second timed test shows whether the fixes held.</p>' +
      "</section>" +
      '<section class="panel">' +
      "<h2>How this works</h2>" +
      '<div class="rules">' +
      rule("Timed like the real test", "22 minutes for 20 questions, about 66 seconds each. Skip around with the question grid. The test submits itself at 0:00.") +
      rule("Answers stay hidden", "You will see which questions you missed, but not the correct answers. Seeing the answer early makes it feel learned when it isn't.") +
      rule("You explain first", "For each miss you write why you picked your answer and say what went wrong. Your score appears after that.") +
      rule("Practice that checks itself", "In training, hints come one step at a time, and a question you get right is followed by a twin with new numbers. Misses come back later in the line.") +
      "</div></section>" +
      '<section class="panel">' +
      "<h2>The four skills</h2>" +
      '<ul class="skills-list">' +
      Object.keys(SKILLS).map((k) => "<li><span>" + esc(SKILLS[k]) + "</span></li>").join("") +
      "</ul>" +
      '<p class="muted">Five questions per skill, from easier to harder. These are original ACT-style questions, not official ACT items. A skill counts as mastered at 4 of 5 on two tests in a row.</p>' +
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
    $("#beginBtn").onclick = startTest;
  }

  function rule(title, body) {
    return '<div class="rule"><h3>' + esc(title) + "</h3><p>" + esc(body) + "</p></div>";
  }

  /* ---------- timed test (diagnostic, post-test, final test) ---------- */

  function startTest() {
    const now = Date.now();
    const c = cyc();
    c.diag = {
      form: c.form,
      startedAt: now,
      deadline: now + FORM_MS,
      cur: 0,
      answers: {},
      submittedAt: null,
      submitReason: null
    };
    formItems().forEach((it) => (c.diag.answers[it.id] = { choice: null, active_ms: 0, visits: 0, changes: 0, last_set_left_ms: null }));
    log("test_start", { items: formItems().length, limit_ms: FORM_MS });
    go("test");
  }

  // Per-item active time: the clock for an item runs only while it is on screen and the tab is visible.
  let shownAt = null;
  function testLive() {
    const d = cyc().diag;
    return S.stage === "test" && d && !d.submittedAt;
  }
  function openItemClock() {
    if (document.visibilityState === "visible" && testLive()) shownAt = performance.now();
  }
  function closeItemClock() {
    const d = cyc().diag;
    if (shownAt == null || !d) return;
    const id = formItems()[d.cur].id;
    d.answers[id].active_ms += Math.round(performance.now() - shownAt);
    shownAt = null;
    save();
  }

  document.addEventListener("visibilitychange", () => {
    if (!testLive() || S.viewData) return;
    const d = cyc().diag;
    if (document.visibilityState === "hidden") {
      closeItemClock();
      log("tab_hidden", { item: formItems()[d.cur].id });
    } else {
      log("tab_visible", { item: formItems()[d.cur].id });
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
    const d = cyc().diag;
    if (d && !d.submittedAt && Date.now() >= d.deadline) submitTest("time");
  }

  function renderTest() {
    stopTicker();
    const d = cyc().diag;
    const items = formItems();
    if (d.submittedAt) return afterTest();
    if (Date.now() >= d.deadline) return submitTest("time");
    const it = items[d.cur];
    const a = d.answers[it.id];
    if (shownAt == null) {
      a.visits += 1;
      log("item_show", { item: it.id });
      openItemClock();
    }
    const answered = items.filter((x) => d.answers[x.id].choice).length;
    app.innerHTML =
      '<div class="testbar">' +
      '<div><p class="eyebrow">' + TEST_NAME[cyc().form] + " · Form " + cyc().form + '</p><p class="muted">' + answered + " of 20 answered</p></div>" +
      '<div class="row">' +
      (S.demo ? '<button class="demo small" id="simBtn" type="button">Demo: fill with a sample student</button>' : "") +
      '<span class="timer" id="timer" role="timer" aria-label="Time left">' + fmtClock(d.deadline - Date.now()) + "</span></div></div>" +
      '<nav class="grid20" aria-label="Questions">' +
      items.map((x, i) => {
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
      (d.cur < items.length - 1 ? '<button class="primary" id="nextBtn" type="button">Next</button>' : "") +
      '<button class="' + (d.cur === items.length - 1 ? "primary" : "ghost") + '" id="submitBtn" type="button">Submit test</button>' +
      "</div></div></article>";

    app.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => moveTo(+b.dataset.go)));
    app.querySelectorAll("[data-choice]").forEach((b) => (b.onclick = () => chooseTest(it.id, b.dataset.choice)));
    $("#prevBtn").onclick = () => moveTo(d.cur - 1);
    if ($("#nextBtn")) $("#nextBtn").onclick = () => moveTo(d.cur + 1);
    $("#submitBtn").onclick = async () => {
      const left = items.filter((x) => !d.answers[x.id].choice).length;
      const msg = left
        ? "You have " + left + " unanswered question" + (left > 1 ? "s" : "") + " and " + fmtClock(d.deadline - Date.now()) + " left. Submit anyway?"
        : "Submit your test? You can't change answers after this.";
      if (await ask(msg, "Submit test")) submitTest("student");
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

  function chooseTest(id, label) {
    const d = cyc().diag;
    const a = d.answers[id];
    const prev = a.choice;
    a.choice = prev === label ? null : label; // tapping the filled bubble again clears it
    a.changes += 1;
    a.last_set_left_ms = d.deadline - Date.now();
    log(a.choice ? "answer_set" : "answer_clear", { item: id, choice: a.choice, previous: prev });
    renderTest();
  }

  function moveTo(i) {
    const d = cyc().diag;
    if (i < 0 || i >= formItems().length || i === d.cur) return;
    closeItemClock();
    log("navigate", { from: formItems()[d.cur].id, to: formItems()[i].id });
    d.cur = i;
    save();
    renderTest();
  }

  function submitTest(reason) {
    closeItemClock();
    stopTicker();
    const d = cyc().diag;
    log("test_submit", { reason: reason });
    d.submittedAt = Math.min(Date.now(), d.deadline);
    d.submitReason = reason;
    scoreTest();
    afterTest();
  }

  // The diagnostic goes to the reflection step; the post-test and final test go straight to results.
  function afterTest() {
    go(S.cycle === 0 ? "review" : "results");
  }

  // Scores the test and sets the ran-out-of-time flag on each item.
  function scoreTest() {
    const d = cyc().diag;
    d.results = formItems().map((it) => {
      const a = d.answers[it.id];
      const correct = a.choice === it.answer;
      const unansweredAtTime = !a.choice && d.submitReason === "time";
      const rushedLate = !!a.choice && a.last_set_left_ms != null && a.last_set_left_ms <= LATE_WINDOW_MS && a.active_ms < RUSHED_MS;
      const picked = a.choice ? choiceOf(it, a.choice) : null;
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

  // A repeatable student who is solid on linear equations and weak on function families. On the diagnostic
  // they run low on time, rush question 18 and leave 19 and 20 blank; on later forms they improve and finish.
  function simulateStudent() {
    closeItemClock();
    stopTicker();
    const seed = 6460 + S.cycle;
    const r = rng(seed);
    const lift = [0, 0.15, 0.22][S.cycle];
    const skill = { S1: 0.95, S2: 0.8 + lift, S3: 0.75 + lift, S4: 0.45 + lift };
    const d = cyc().diag;
    const first = S.cycle === 0;
    let used = 0;
    formItems().forEach((it, i) => {
      const a = d.answers[it.id];
      const n = i + 1;
      if (first && n >= 19) {
        a.active_ms = n === 19 ? 6000 : 0;
        a.visits = n === 19 ? 1 : 0;
        return;
      }
      const rushed = first && n === 18;
      const time = rushed ? 9000 : Math.round(40000 + r() * 40000);
      used += time;
      const pRight = skill[it.skill] - 0.08 * (it.difficulty - 1);
      const right = !rushed && r() < pRight;
      const wrongs = it.choices.filter((c) => !c.correct);
      a.choice = right ? it.answer : wrongs[Math.floor(r() * wrongs.length)].label;
      a.active_ms = time;
      a.visits = 1;
      a.changes = r() < 0.2 ? 2 : 1;
      a.last_set_left_ms = rushed ? 40000 : Math.max(61000, FORM_MS - used);
      S.events.push({ type: "answer_set", at: new Date().toISOString(), cycle: S.cycle, form: cyc().form, item: it.id, choice: a.choice, simulated: true, t_ms: used, clock_left_ms: FORM_MS - used });
    });
    d.deadline = Date.now();
    log("demo_sample_student", { seed: seed });
    submitTest(first ? "time" : "student");
  }

  /* ---------- review misses ---------- */

  function misses() {
    return cyc().diag.results.filter((r) => !r.correct);
  }

  function reviewEntry(r) {
    const rv = cyc().review;
    if (!rv[r.id]) rv[r.id] = { explanation: "", cause: r.time_flag === "unanswered_at_time" ? "time" : null };
    return rv[r.id];
  }

  function reviewDone(r) {
    const e = reviewEntry(r);
    return e.cause && e.explanation.trim().length >= MIN_EXPLAIN;
  }

  function renderReview() {
    const list = misses();
    const nextLabel = S.cycle === 0 ? "See my score" : "Build my follow-up program";
    if (!list.length) {
      app.innerHTML =
        '<section class="panel"><h2>No misses on this test.</h2><p>Every question was answered correctly, so there is nothing to review.</p>' +
        '<div class="row"><button class="primary" id="toScore" type="button">' + nextLabel + "</button></div></section>";
      $("#toScore").onclick = finishReview;
      return;
    }
    const doneCount = list.filter(reviewDone).length;
    const d = cyc().diag;
    app.innerHTML =
      '<section class="stack">' +
      '<p class="eyebrow">' + (S.cycle === 0 ? "Step 2" : "Second loop") + " · Review your misses on Form " + cyc().form + "</p>" +
      "<h1>You missed " + list.length + " question" + (list.length > 1 ? "s" : "") + ". Let's find out why.</h1>" +
      '<p class="lede">' + (S.cycle === 0 ? "The correct answers and your score stay hidden for now. " : "The correct answers stay hidden. ") +
      "For each question below, write why you chose your answer, then pick what you think went wrong." + (S.cycle === 0 ? " Your score appears when all of them are done." : "") + "</p>" +
      (d.submitReason === "time" ? '<div class="callout warn"><strong>Time ran out.</strong><p>Questions you hadn\'t answered are marked "Ran out of time" for you. Change it if something else happened.</p></div>' : "") +
      '<div class="row between"><span class="muted" id="reviewCount">' + doneCount + " of " + list.length + " done</span>" +
      (S.demo ? '<button class="demo small" id="fillReview" type="button">Demo: fill sample reflections</button>' : "") +
      "</div></section>" +
      list.map(missCard).join("") +
      '<section class="panel"><div class="row between"><span class="muted" id="reviewCount2"></span>' +
      '<button class="primary" id="toScore" type="button">' + nextLabel + "</button></div></section>";

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
    $("#toScore").onclick = finishReview;
    if ($("#fillReview")) $("#fillReview").onclick = fillSampleReview;
    updateReviewState();
  }

  function finishReview() {
    log("review_complete", { misses: misses().length });
    if (S.cycle === 0) return go("score");
    makePlan();
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
      '<div class="item-head"><span class="qnum">' + r.q + '</span><span class="tag">' + esc(SKILL_SHORT[r.skill]) + "</span></div>" +
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
        '<button type="button" data-cause="' + k + '" aria-pressed="' + (e.cause === k) + '" class="' + (e.cause === k ? "sel" : "") + '"><b>' + CAUSES[k].label + '</b><span class="muted">' + CAUSES[k].hint + "</span></button>"
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

  /* ---------- score (diagnostic only) ---------- */

  function skillRowsFor(diag) {
    return Object.keys(SKILLS).map((k) => {
      const rs = diag.results.filter((r) => r.skill === k).sort((a, b) => a.q - b.q);
      return { skill: k, rs: rs, right: rs.filter((r) => r.correct).length };
    });
  }

  function dots(s) {
    return '<span class="dots" aria-label="' + s.right + ' of 5 correct">' + s.rs.map((r) => '<i class="' + (r.correct ? "on" : "") + '" title="Question ' + r.q + '"></i>').join("") + "</span>";
  }

  function renderScore() {
    const d = cyc().diag;
    const res = d.results;
    const right = res.filter((r) => r.correct).length;
    const pct = Math.round((100 * right) / res.length);
    const usedMs = Math.min(FORM_MS, d.submittedAt - d.startedAt);
    const causeCounts = {};
    misses().forEach((r) => {
      const c = cyc().review[r.id].cause;
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
      skillRowsFor(d).map((s) =>
        '<tr><td>' + esc(SKILLS[s.skill]) + "</td>" +
        "<td>" + dots(s) + "</td>" +
        '<td class="num">' + s.right + " / 5</td>" +
        "<td>" + (s.right >= MASTERY ? '<span class="pill ok">At target (4 of 5)</span>' : '<span class="pill bad">Below target</span>') + "</td></tr>"
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
    $("#toPlan").onclick = makePlan;
  }

  /* ---------- training program ---------- */

  const CAUSE_COACHING = {
    concept: "Start with the concept reminder before each question. The first items are the easiest of their type.",
    misconception: "These questions use the same setup as the ones you missed. Watch for the rule you used before and check it against the worked steps.",
    careless: "Before you check an answer, reread the question and redo the step you're least sure of.",
    time: "Practice is untimed. Work these carefully first, then you'll practice pace on the next timed test."
  };

  // Practice items already given in an earlier cycle are not reused.
  function usedPracticeIds() {
    const used = new Set();
    S.cycles.forEach((c, i) => {
      if (i !== S.cycle && c.plan) c.plan.items.forEach((x) => used.add(x.id));
    });
    return used;
  }

  // Practice question types left "not fixed yet" in earlier cycles (Dylan, Nov 13: they lead the second loop).
  function carriedOver() {
    const out = [];
    S.cycles.forEach((c, i) => {
      if (i >= S.cycle || !c.practice || !c.plan) return;
      Object.values(c.practice.bases).forEach((b) => {
        if (b.status !== "not_fixed") return;
        const x = c.plan.items.find((y) => y.id === b.id) || {};
        out.push({ base: b.id, skill: b.skill, template: x.template, difficulty: x.difficulty || 2, from: x.from, from_q: x.from_q, form: c.form, cause: x.cause || "concept" });
      });
    });
    return out;
  }

  // Rule-based program: for each missed question, pick practice items of the same template
  // (same question type), add extra items for concept gaps and misconceptions, then order each skill easier to harder.
  function buildPlan() {
    const used = usedPracticeIds();
    const bySkill = {};
    const pool = BANK.practice;
    const rv = cyc().review;

    function take(pred, sortFn) {
      const c = pool.filter((p) => !used.has(p.id) && pred(p)).sort(sortFn || ((a, b) => a.difficulty - b.difficulty));
      if (!c.length) return null;
      used.add(c[0].id);
      return c[0];
    }

    // Question types still "not fixed yet" after earlier practice come first, with a fresh item of the same type.
    const carry = carriedOver();
    carry.forEach((c) => {
      const list = (bySkill[c.skill] = bySkill[c.skill] || []);
      let p = take((p) => p.skill === c.skill && p.template === c.template);
      let why = "Not fixed in training (" + c.base + "), same question type";
      if (!p) {
        p = take((p) => p.skill === c.skill, (a, b) => Math.abs(a.difficulty - c.difficulty) - Math.abs(b.difficulty - c.difficulty));
        why = "Not fixed in training (" + c.base + "), same skill";
      }
      if (p) list.push({ id: p.id, skill: p.skill, difficulty: p.difficulty, template: p.template, from: c.from, from_q: c.from_q, from_form: c.form, cause: c.cause, carry: true, reason: why });
    });

    misses().forEach((r) => {
      const cause = rv[r.id].cause;
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

    const carried = (k) => bySkill[k].filter((x) => x.carry).length;
    const order = Object.keys(bySkill).filter((k) => bySkill[k].length).sort((a, b) => {
      const ma = misses().filter((r) => r.skill === a).length;
      const mb = misses().filter((r) => r.skill === b).length;
      return carried(b) - carried(a) || mb - ma || a.localeCompare(b);
    });
    const skills = order.map((k) => {
      const causes = {};
      misses().filter((r) => r.skill === k).forEach((r) => {
        const c = rv[r.id].cause;
        causes[c] = (causes[c] || 0) + 1;
      });
      const firstCarry = bySkill[k].find((x) => x.carry);
      const main = Object.keys(causes).sort((a, b) => causes[b] - causes[a])[0] || (firstCarry && firstCarry.cause) || "concept";
      return {
        skill: k,
        missed: misses().filter((r) => r.skill === k).map((r) => r.q),
        causes: causes,
        coaching: CAUSE_COACHING[main],
        carried: bySkill[k].filter((x) => x.carry).map((x) => x.reason.match(/\((.*?)\)/)[1]),
        items: bySkill[k].sort((a, b) => (b.carry ? 1 : 0) - (a.carry ? 1 : 0) || a.difficulty - b.difficulty)
      };
    });
    const onTarget = Object.keys(SKILLS).filter((k) => !bySkill[k]);
    return {
      createdAt: new Date().toISOString(),
      rule: "question types not fixed in earlier practice first; same-template practice per miss; 2 items for concept gap or misconception, 1 for careless slip or time; max 8 per skill; practice items from earlier cycles are not reused; skills ordered by number of misses; items ordered easier to harder",
      skills: skills,
      noMisses: onTarget,
      items: skills.reduce((all, s) => all.concat(s.items), []),
      notes: {}
    };
  }

  function makePlan() {
    cyc().plan = buildPlan();
    log("plan_generated", { items: cyc().plan.items.length });
    go("plan");
  }

  // Option C: the tutor reads each explanation and chosen cause and adds a one-line check on the cause.
  // Without the relay, a rule-based note appears when the picked choice carries a known misconception.
  function fallbackCauseNote(r, entry) {
    if (!r.misconception_tag) return null;
    const tag = humanize(r.misconception_tag).toLowerCase();
    if (entry.cause === "careless" || entry.cause === "time") {
      return "Your answer matches a common mistake (" + tag + "). If that was the method you meant to use, this may be a misconception rather than a " + (entry.cause === "time" ? "time problem" : "slip") + ".";
    }
    return "Your answer matches a common mistake: " + tag + ".";
  }

  // The tutor's cause check starts with "VERDICT: fits" or "VERDICT: <better cause>" (see worker/tutor-worker.js).
  // Returns { verdict: "fits" | cause key | null, text }. A reply without a readable verdict keeps its text and gets no badge.
  function parseCauseCheck(raw, chosen) {
    const m = String(raw).match(/^\s*\**\s*VERDICT\s*:\s*([^\n*]+?)\s*\**\s*(?:\n|$)/i);
    if (!m) return { verdict: null, text: String(raw).trim() };
    const v = m[1].toLowerCase().replace(/[.\s]+$/, "");
    const text = String(raw).slice(m[0].length).trim();
    if (/^fits?\b/.test(v)) return { verdict: "fits", text: text };
    const key = Object.keys(CAUSES).find((k) => CAUSES[k].label.toLowerCase() === v || (k === "time" && /time/.test(v)) || (k === "careless" && /careless|slip/.test(v)));
    if (!key) return { verdict: null, text: text };
    return { verdict: key === chosen ? "fits" : key, text: text };
  }

  function loadCauseNotes() {
    const p = cyc().plan;
    misses().forEach((r) => {
      const entry = cyc().review[r.id];
      const key = r.id;
      if (p.notes[key]) return;
      p.notes[key] = { text: fallbackCauseNote(r, entry), source: "written" };
      if (!TUTOR.enabled()) return;
      const it = byId[r.id];
      TUTOR.ask("cause_check", {
        item: TUTOR.itemContext(it),
        student_choice: r.choice,
        student_choice_tag: r.misconception_tag,
        explanation: entry.explanation,
        chosen_cause: CAUSES[entry.cause].label,
        time_flag: r.time_flag
      }, it, true).then((res) => {
        const parsed = res.ok ? parseCauseCheck(res.text, entry.cause) : null;
        log(res.ok ? "tutor_reply" : "tutor_fallback", { task: "cause_check", item: r.id, reason: res.reason || null, ms: res.ms, verdict: parsed ? parsed.verdict : null });
        if (!res.ok || !parsed.text) return;
        p.notes[key] = { text: parsed.text, source: "tutor", verdict: parsed.verdict };
        save();
        const el = $('[data-note="' + key + '"]');
        if (el) el.outerHTML = noteHtml(r);
        const sum = $("#causeSummary");
        if (sum) sum.outerHTML = causeSummaryHtml();
      });
    });
    save();
  }

  // Layout (Module 3, Mayer): verdict badge first (signaling), a few sentences only (coherence),
  // the student's own answer one click away beside the feedback (spatial contiguity, learner-paced segmenting).
  function noteHtml(r) {
    const n = cyc().plan.notes[r.id] || {};
    const entry = cyc().review[r.id];
    const badge = n.verdict === "fits"
      ? '<span class="pill ok">✓ Fits</span>'
      : n.verdict && CAUSES[n.verdict] ? '<span class="pill warn">Better fit: ' + CAUSES[n.verdict].label + "</span>" : "";
    const said = r.choice ? "Chose <b>" + esc(r.choice) + "</b>." : "Left blank.";
    const why = entry.explanation && entry.explanation.trim() ? " “" + esc(entry.explanation.trim()) + "”" : ' <span class="muted">No explanation written.</span>';
    return '<li class="cause-note" data-note="' + r.id + '">' +
      '<div class="cause-head"><span class="cause-num">#' + r.q + '</span><span class="muted">You said <b class="cause-said">' + CAUSES[entry.cause].label + "</b></span>" + badge + "</div>" +
      (n.text ? '<div class="cause-body">' + rich(n.text) + "</div>" : "") +
      '<details class="cause-body cause-answer"><summary>Your answer</summary><p>' + said + why + "</p></details>" +
      "</li>";
  }

  function causeSummaryHtml() {
    const judged = misses().map((r) => cyc().plan.notes[r.id] || {}).filter((n) => n.verdict);
    if (!judged.length) return '<p id="causeSummary" hidden></p>';
    const fit = judged.filter((n) => n.verdict === "fits").length;
    const other = judged.length - fit;
    return '<p id="causeSummary" class="cause-summary"><b>' + fit + " of " + judged.length + "</b> " + (judged.length === 1 ? "cause fits" : "causes fit") + " what you described." +
      (other ? " <b>" + other + "</b> might be something else." : "") + "</p>";
  }

  function renderPlan() {
    const p = cyc().plan || (cyc().plan = buildPlan());
    const total = p.items.length;
    if (!p.notes) p.notes = {};
    loadCauseNotes();
    app.innerHTML =
      '<section class="stack"><p class="eyebrow">' + (S.cycle === 0 ? "Step 4 · Your training program" : "Second loop · Follow-up program") + "</p>" +
      "<h1>" + total + " practice question" + (total === 1 ? "" : "s") + " across " + p.skills.length + " skill" + (p.skills.length === 1 ? "" : "s") + ".</h1>" +
      '<p class="lede">Built from the questions you missed and the causes you gave. Skills with the most misses come first, and each skill goes from easier to harder.</p>' +
      tutorBadge() +
      "</section>" +
      (misses().length
        ? '<section class="panel"><div class="row between"><h2>A second look at your causes</h2>' +
          (TUTOR.enabled() ? '<span class="pill info">Checked by the AI tutor</span>' : "") + "</div>" +
          causeSummaryHtml() + '<ul class="cause-notes">' + misses().map(noteHtml).join("") + "</ul></section>"
        : "") +
      p.skills.map((s, i) =>
        '<section class="panel plan-skill">' +
        '<div class="row between"><h2><span class="muted">' + (i + 1) + ".</span> " + esc(SKILLS[s.skill]) + "</h2></div>" +
        '<div class="row">' +
        '<span class="muted">' + [s.missed.length ? "Missed: " + s.missed.map((q) => "#" + q).join(", ") : "", s.carried && s.carried.length ? "Not fixed in training: " + s.carried.join(", ") : ""].filter(Boolean).join(" · ") + "</span>" +
        Object.keys(s.causes).map((c) => '<span class="pill info">' + CAUSES[c].label + (s.causes[c] > 1 ? " ×" + s.causes[c] : "") + "</span>").join("") +
        "</div>" +
        "<p>" + esc(s.coaching) + "</p>" +
        '<ol class="plan-items">' +
        s.items.map((x) =>
          '<li><span class="mono">' + x.id + "</span> · " + ["", "Easier", "Medium", "Harder"][x.difficulty] + " · " + esc(x.reason) + " (" + CAUSES[x.cause].label.toLowerCase() + ")</li>"
        ).join("") +
        "</ol></section>"
      ).join("") +
      (p.noMisses.length
        ? '<section class="panel"><h2>No practice assigned</h2><p>' + p.noMisses.map((k) => esc(SKILLS[k])).join("; ") + ": no misses, so these will be checked again on the next test.</p></section>"
        : "") +
      '<section class="panel"><h2>How practice works</h2><div class="rules">' +
      rule("Answer, then rate", "Pick an answer, then say how sure you are before you check it. There is no clock.") +
      rule("Hints after a miss", "A wrong first try opens three hints, one at a time: a question to point you, the idea, then the first step.") +
      rule("Two misses locks it", "After a second wrong choice the choices lock. Explain why you picked them, then see the tutor's response and the worked solution.") +
      rule("Twins check the fix", "Get one right and a twin with new numbers follows. It counts only if you get it on the first try. A miss sends the question type to the back of the line.") +
      "</div></section>" +
      '<section class="row end">' +
      (total ? '<button class="primary" id="toPractice" type="button">Start practice</button>' : '<button class="primary" id="toNext" type="button">' + nextTestLabel() + "</button>") +
      "</section>";
    if ($("#toPractice")) $("#toPractice").onclick = startPractice;
    if ($("#toNext")) $("#toNext").onclick = startNextTest;
  }

  function tutorBadge() {
    return TUTOR.enabled()
      ? '<p class="muted"><span class="pill info">AI tutor on</span> Tutor messages are checked so they never give away an answer you haven\'t earned.</p>'
      : '<p class="muted"><span class="pill warn">AI tutor off</span> Using the written hints and feedback.</p>';
  }

  /* ---------- guarded practice ---------- */

  // Each plan item is a "question type" with up to three versions: the practice item and its two twins.
  // Line rules (Dylan, Nov 13):
  //  - right on the first or second try -> the next version follows at once as a twin;
  //  - twin right on the first try, no hints -> fixed;
  //  - two wrong choices (on an item or a twin), or a twin missed on the first try -> back of the line;
  //  - a revisit uses the next unused version; when none is left the type is marked "not fixed yet".
  function startPractice() {
    const p = cyc().plan;
    const pr = { startedAt: Date.now(), queue: [], bases: {}, cur: null, done: [], finishedAt: null };
    p.items.forEach((x) => {
      const it = byId[x.id];
      pr.bases[x.id] = {
        id: x.id,
        skill: x.skill,
        from_q: x.from_q,
        versions: [x.id].concat((it.twins || []).map((t) => t.id)),
        next: 0,
        status: "open",
        presentations: 0
      };
      pr.queue.push(x.id);
    });
    cyc().practice = pr;
    log("practice_start", { items: p.items.length });
    nextEntry();
    go("practice");
  }

  function newEntry(base, kind) {
    const b = cyc().practice.bases[base];
    const id = b.versions[b.next++];
    b.presentations += 1;
    pendingChoice = null;
    pendingConf = null;
    return { base: base, id: id, kind: kind, conf: null, confs: [], attempts: [], hints: 0, explanation: "", revealed: false, outcome: null, shownAt: Date.now(), tutor: { hints: {}, explain: null } };
  }

  function nextEntry() {
    const pr = cyc().practice;
    if (pr.cur) pr.done.push(pr.cur);
    pr.cur = null;
    while (pr.queue.length) {
      const base = pr.queue.shift();
      const b = pr.bases[base];
      if (b.next < b.versions.length) {
        pr.cur = newEntry(base, b.next === 0 ? "item" : "revisit");
        log("practice_show", { item: pr.cur.id, base: base, kind: pr.cur.kind });
        break;
      }
      b.status = "not_fixed";
    }
    if (!pr.cur && !pr.finishedAt) {
      pr.finishedAt = Date.now();
      log("practice_done", summary());
    }
    save();
  }

  function pushBack(base, why) {
    const pr = cyc().practice;
    const b = pr.bases[base];
    if (b.next < b.versions.length) {
      pr.queue.push(base);
      log("practice_push_back", { base: base, why: why, versions_left: b.versions.length - b.next });
    } else {
      b.status = "not_fixed";
      log("practice_not_fixed", { base: base, why: why });
    }
  }

  function summary() {
    const bs = Object.values(cyc().practice.bases);
    return { fixed: bs.filter((b) => b.status === "fixed").length, not_fixed: bs.filter((b) => b.status === "not_fixed").length, open: bs.filter((b) => b.status === "open").length };
  }

  function practiceCheck() {
    const pr = cyc().practice;
    const e = pr.cur;
    const it = byId[e.id];
    const label = pendingChoice;
    const conf = pendingConf;
    if (!label || conf == null || e.outcome) return;
    pendingChoice = null;
    pendingConf = null;
    e.attempts.push(label);
    e.confs.push(conf);
    if (e.conf == null) e.conf = conf;
    const right = label === it.answer;
    const pick = choiceOf(it, label);
    log("practice_attempt", { item: e.id, base: e.base, kind: e.kind, attempt: e.attempts.length, choice: label, correct: right, confidence: conf, hints_used: e.hints, misconception_tag: pick.misconception });
    if (right) {
      if (e.kind === "twin") {
        if (e.attempts.length === 1 && e.hints === 0) {
          e.outcome = "twin_right";
          pr.bases[e.base].status = "fixed";
          log("practice_fixed", { base: e.base, twin: e.id });
        } else {
          e.outcome = "twin_missed";
          pushBack(e.base, "twin_missed_first_try");
        }
      } else {
        e.outcome = "right";
        const b = pr.bases[e.base];
        if (b.next >= b.versions.length) {
          // No version left for a twin: count the right answer itself.
          b.status = "fixed";
          log("practice_fixed", { base: e.base, no_twin_left: true });
        }
      }
    } else if (e.attempts.length >= 2) {
      log("practice_lock", { item: e.id, base: e.base, choices: e.attempts.slice() });
    }
    save();
    renderPractice();
  }

  function practiceReveal() {
    const e = cyc().practice.cur;
    const it = byId[e.id];
    e.explanation = ($("#lockText") || {}).value || e.explanation;
    if (e.explanation.trim().length < MIN_EXPLAIN || e.revealed) return;
    e.revealed = true;
    e.outcome = e.kind === "twin" ? "twin_missed" : "wrong";
    log("practice_reveal", { item: e.id, base: e.base, kind: e.kind, chars: e.explanation.trim().length, explanation: e.explanation });
    pushBack(e.base, e.kind === "twin" ? "twin_missed_first_try" : "two_wrong");
    e.tutor.explain = { text: fallbackExplain(it, e), source: "written", pending: tutorOn() };
    save();
    renderPractice();
    if (!tutorOn()) return;
    TUTOR.ask("explain", {
      item: TUTOR.itemContext(it),
      wrong_choices: e.attempts.map((l) => ({ label: l, text: choiceOf(it, l).text, tag: choiceOf(it, l).misconception })),
      explanation: e.explanation,
      diagnostic_context: diagContext(e.base)
    }, it, false).then((res) => {
      log(res.ok ? "tutor_reply" : "tutor_fallback", { task: "explain", item: e.id, reason: res.reason || null, ms: res.ms });
      e.tutor.explain = res.ok ? { text: res.text, source: "tutor" } : Object.assign(e.tutor.explain, { pending: false });
      save();
      if (cyc().practice.cur === e && S.stage === "practice" && !S.viewData) renderPractice();
    });
  }

  function fallbackExplain(it, e) {
    const parts = e.attempts.map((l) => {
      const c = choiceOf(it, l);
      return c.misconception ? "Choice " + l + " is what you get from a common mistake: " + humanize(c.misconception).toLowerCase() + "." : "Choice " + l + " doesn't follow from the steps.";
    });
    return parts.join(" ") + " Compare your reasoning with the worked solution below and find the step where it splits off.";
  }

  // The student's own words from the test that led to this practice item: option C feeds them to the tutor.
  function diagContext(base) {
    const x = cyc().plan.items.find((i) => i.id === base);
    if (!x) return null;
    const rv = cyc().review[x.from] || {};
    const r = cyc().diag.results.find((q) => q.id === x.from) || {};
    return { cause: rv.cause ? CAUSES[rv.cause].label : null, explanation: rv.explanation || null, picked_tag: r.misconception_tag || null };
  }

  function practiceHint() {
    const e = cyc().practice.cur;
    const it = byId[e.id];
    if (e.attempts.length !== 1 || e.outcome || e.hints >= 3) return;
    const level = ++e.hints;
    log("practice_hint", { item: e.id, base: e.base, level: level });
    e.tutor.hints[level] = { text: it.hints[level - 1], source: "written", pending: tutorOn() };
    save();
    renderPractice();
    if (!tutorOn()) return;
    const wrong = choiceOf(it, e.attempts[0]);
    TUTOR.ask("hint", {
      item: TUTOR.itemContext(it),
      level: level,
      written_hint: it.hints[level - 1],
      earlier_hints: it.hints.slice(0, level - 1),
      wrong_choice: { label: wrong.label, text: wrong.text, tag: wrong.misconception },
      diagnostic_context: diagContext(e.base)
    }, it, true).then((res) => {
      log(res.ok ? "tutor_reply" : "tutor_fallback", { task: "hint", item: e.id, level: level, reason: res.reason || null, ms: res.ms });
      e.tutor.hints[level] = res.ok ? { text: res.text, source: "tutor" } : Object.assign(e.tutor.hints[level], { pending: false });
      save();
      if (cyc().practice.cur === e && S.stage === "practice" && !S.viewData) renderPractice();
    });
  }

  function practiceNext() {
    const pr = cyc().practice;
    const e = pr.cur;
    if (!e || !e.outcome) return;
    log("practice_resolved", { item: e.id, base: e.base, kind: e.kind, outcome: e.outcome, attempts: e.attempts.length, hints: e.hints, confidence: e.conf, ms: Date.now() - e.shownAt });
    if (e.outcome === "right" && pr.bases[e.base].status !== "fixed") {
      pr.done.push(e);
      pr.cur = newEntry(e.base, "twin");
      log("practice_show", { item: pr.cur.id, base: e.base, kind: "twin" });
      save();
      renderPractice();
      window.scrollTo(0, 0);
      return;
    }
    nextEntry();
    renderPractice();
    window.scrollTo(0, 0);
  }

  let pendingChoice = null;
  let pendingConf = null;
  let quiet = false; // demo autoplay: no tutor calls
  const tutorOn = () => TUTOR.enabled() && !quiet;

  function renderPractice() {
    const pr = cyc().practice;
    if (!pr) return startPractice();
    if (!pr.cur) return renderPracticeDone();
    const e = pr.cur;
    const it = byId[e.id];
    const b = pr.bases[e.base];
    const bs = Object.values(pr.bases);
    const closed = bs.filter((x) => x.status !== "open").length;
    const tries = e.attempts.length;
    const right = e.attempts.includes(it.answer);
    const locked = !right && tries >= 2;
    const canAnswer = !e.outcome && !locked;
    const kindLabel = { item: "Practice", revisit: "Back again · new numbers", twin: "Twin · first try counts" }[e.kind];

    let feedback = "";
    if (e.outcome === "right") {
      feedback = '<div class="callout ok"><strong>Right' + (tries > 1 ? " on your second try" : "") + ".</strong><p>" +
        (b.status === "fixed" ? "No twin is left for this type, so this one counts." : "Next is a twin: same type, new numbers. It counts only if you get it on the first try with no hints.") + "</p></div>";
    } else if (e.outcome === "twin_right") {
      feedback = '<div class="callout ok"><strong>Fixed.</strong><p>You solved the twin on the first try with no hints, so this question type is done.</p></div>';
    } else if (e.outcome === "twin_missed" && right) {
      feedback = '<div class="callout warn"><strong>Right, but not on the first try.</strong><p>A twin only counts on the first try, so this question type goes to the back of the line' + (b.status === "not_fixed" ? ". No new versions are left, so it's marked not fixed yet." : " and comes back with new numbers.") + "</p></div>";
    } else if (tries === 1 && !right) {
      feedback = '<div class="callout bad"><strong>Not quite.</strong><p>' + (e.kind === "twin" ? "Twins count on the first try, so this type will come back later. " : "") +
        "Open a hint if you want one, then try again. A second wrong choice locks the question.</p></div>";
    }

    const hintsHtml = tries >= 1 && !right
      ? '<div class="ladder">' +
        [1, 2, 3].filter((l) => l <= e.hints).map((l) => {
          const h = e.tutor.hints[l] || { text: it.hints[l - 1], source: "written" };
          return '<div class="hint"><span class="eyebrow">Hint ' + l + " of 3 · " + ["", "Pointing question", "The idea", "First step"][l] + (h.source === "tutor" ? " · Tutor" : "") + "</span><div>" + rich(h.text) + "</div>" +
            (h.pending ? '<span class="muted small-note">The tutor is tailoring this hint…</span>' : "") + "</div>";
        }).join("") +
        (tries === 1 && e.hints < 3 && !e.outcome ? '<div><button class="ghost small" id="hintBtn" type="button">Show hint ' + (e.hints + 1) + " of 3</button></div>" : "") +
        "</div>"
      : "";

    let lockHtml = "";
    if (locked) {
      if (!e.revealed) {
        lockHtml = '<div class="lockbox"><strong>Choices locked after two wrong answers.</strong>' +
          '<label class="field" for="lockText">Why did you pick ' + e.attempts.join(" and then ") + '? <small>Walk through what you did. At least ' + MIN_EXPLAIN + " characters. Then you'll see the tutor's response and the worked solution.</small></label>" +
          '<textarea id="lockText">' + esc(e.explanation) + "</textarea>" +
          (S.demo ? '<div><button class="demo small" id="fillLock" type="button">Demo: fill an explanation</button></div>' : "") +
          '<div class="row end"><button class="primary" id="revealBtn" type="button" disabled>Show me the solution</button></div></div>';
      } else {
        const t = e.tutor.explain || { text: fallbackExplain(it, e), source: "written" };
        lockHtml = '<div class="tutor-box"><span class="eyebrow">' + (t.source === "tutor" ? "Tutor · responding to your explanation" : "About your choices") + "</span><div>" + rich(t.text) + "</div>" +
          (t.pending ? '<span class="muted small-note">The tutor is reading your explanation…</span>' : "") + "</div>" +
          '<div class="solution"><strong>Worked solution · the answer is ' + it.answer + "</strong><ol>" + it.solution.map((s) => "<li>" + rich(s) + "</li>").join("") + "</ol></div>" +
          '<div class="callout warn"><strong>Back of the line.</strong><p>' + (b.status === "not_fixed" ? "No new versions of this question are left, so it's marked not fixed yet. It will show up on the next timed test." : "This question type will come back later with new numbers.") + "</p></div>";
      }
    }

    app.innerHTML =
      '<div class="testbar"><div><p class="eyebrow">' + (S.cycle === 0 ? "Training" : "Second loop") + " · " + closed + " of " + bs.length + ' question types closed</p>' +
      '<p class="muted">' + pr.queue.length + " waiting in line</p></div>" +
      '<div class="row">' + (S.demo ? '<button class="demo small" id="autoBtn" type="button">Demo: finish practice</button>' : "") +
      (TUTOR.enabled() ? '<span class="pill info">AI tutor on</span>' : '<span class="pill warn">AI tutor off</span>') + "</div></div>" +
      '<div class="progressline"><i style="width:' + Math.round((100 * closed) / Math.max(1, bs.length)) + '%"></i></div>' +
      '<article class="panel item">' +
      '<div class="item-head"><span class="tag">' + esc(SKILL_SHORT[it.skill]) + '</span><span class="pill ' + (e.kind === "twin" ? "warn" : "info") + '">' + kindLabel + "</span>" +
      '<span class="muted mono">From #' + b.from_q + " on Form " + cyc().form + "</span></div>" +
      '<div class="stem">' + rich(it.stem) + "</div>" +
      '<div class="choices" role="radiogroup">' +
      it.choices.map((c) => {
        const tried = e.attempts.includes(c.label);
        const isRight = c.label === it.answer && (right || e.revealed);
        const sel = pendingChoice === c.label;
        const cls = ["choice", tried && !isRight ? "wrongpick out" : "", isRight ? "right" : "", sel ? "sel" : ""].join(" ");
        const dis = !canAnswer || tried;
        return '<button type="button" role="radio" aria-checked="' + sel + '" class="' + cls + '" data-choice="' + c.label + '"' + (dis ? " disabled" : "") + ">" +
          '<span class="bubble">' + c.label + '</span><span class="choice-body">' + tex(c.text) + "</span>" +
          (tried && !isRight ? '<span class="pill bad">Tried</span>' : "") + "</button>";
      }).join("") +
      "</div>" +
      (canAnswer && pendingChoice ? confHtml(pendingChoice) : "") +
      (canAnswer ? '<div class="row between"><span class="muted">' + (!pendingChoice ? (tries === 1 ? "Second try. A wrong choice locks the question." : "Pick an answer.") : pendingConf == null ? "Rate how sure you are to check your answer." : "Check your answer when you're ready.") + "</span>" +
        '<button class="primary" id="checkBtn" type="button" disabled>Check answer</button></div>' : "") +
      feedback +
      hintsHtml +
      lockHtml +
      (e.outcome ? '<div class="row end"><button class="primary" id="nextBtn" type="button">' + (e.outcome === "right" && b.status !== "fixed" ? "Go to the twin" : pr.queue.length ? "Next question" : "Finish practice") + "</button></div>" : "") +
      "</article>";

    app.querySelectorAll("[data-conf]").forEach((x) => {
      x.onclick = () => {
        pendingConf = +x.dataset.conf;
        log("practice_confidence", { item: e.id, base: e.base, kind: e.kind, attempt: e.attempts.length + 1, choice: pendingChoice, confidence: pendingConf });
        renderPractice();
      };
    });
    app.querySelectorAll("[data-choice]").forEach((x) => {
      x.onclick = () => {
        if (pendingChoice !== x.dataset.choice) pendingConf = null; // the rating is about this answer
        pendingChoice = x.dataset.choice;
        renderPractice();
      };
    });
    if ($("#checkBtn")) {
      $("#checkBtn").disabled = !pendingChoice || pendingConf == null;
      $("#checkBtn").onclick = practiceCheck;
    }
    if ($("#hintBtn")) $("#hintBtn").onclick = practiceHint;
    if ($("#nextBtn")) $("#nextBtn").onclick = practiceNext;
    if ($("#autoBtn")) $("#autoBtn").onclick = autoPractice;
    const lt = $("#lockText");
    if (lt) {
      const upd = () => {
        e.explanation = lt.value;
        $("#revealBtn").disabled = lt.value.trim().length < MIN_EXPLAIN;
      };
      lt.oninput = () => {
        upd();
        save();
      };
      upd();
      $("#revealBtn").onclick = practiceReveal;
      if ($("#fillLock")) $("#fillLock").onclick = () => {
        lt.value = "I thought I had to move the number over first and I kept the sign the same, then I tried the other one that looked close.";
        upd();
        save();
      };
    }
  }

  function confHtml(label) {
    return '<div class="conf"><strong>How sure are you that ' + label + ' is right?</strong><div class="conf-scale" role="group" aria-label="Confidence">' +
      CONF.map((c) => '<button type="button" data-conf="' + c[0] + '" aria-pressed="' + (pendingConf === c[0]) + '" class="' + (pendingConf === c[0] ? "sel" : "") + '"><b>' + c[0] + "</b><span>" + c[1] + "</span></button>").join("") +
      "</div></div>";
  }

  // Demo: plays the rest of practice as a sample student, so the post-test can be shown on camera.
  function autoPractice() {
    const r = rng(99 + S.cycle);
    let guard = 0;
    quiet = true;
    while (cyc().practice.cur && guard++ < 400) {
      const e = cyc().practice.cur;
      const it = byId[e.id];
      if (!e.outcome) {
        const wrongs = it.choices.filter((c) => !c.correct && !e.attempts.includes(c.label));
        pendingChoice = r() < 0.7 ? it.answer : wrongs[0].label;
        pendingConf = 1 + Math.floor(r() * 4);
        practiceCheck();
        if (!e.outcome && e.attempts.length >= 2) {
          e.explanation = "Demo student: I set it up the way I remembered and picked what came out.";
          practiceReveal();
        }
      }
      practiceNext();
    }
    quiet = false;
    log("demo_auto_practice");
    renderPractice();
  }

  function renderPracticeDone() {
    const pr = cyc().practice;
    const bs = Object.values(pr.bases);
    const done = pr.done.filter((x) => x.outcome);
    const twins = done.filter((x) => x.kind === "twin");
    app.innerHTML =
      '<section class="stack"><p class="eyebrow">' + (S.cycle === 0 ? "Training" : "Second loop") + " · Done</p>" +
      "<h1>Practice finished.</h1>" +
      '<p class="lede">' + bs.filter((b) => b.status === "fixed").length + " of " + bs.length + " question types fixed. Next is a timed test on new questions, the real check of whether the fixes held.</p>" +
      (bs.some((b) => b.status === "not_fixed")
        ? '<div class="callout warn"><strong>Some types are not fixed yet.</strong><p>' + (S.cycle === 0 ? "These question types will appear first in your second loop. They are also checked again on the post-test." : "They will be checked again on the final test.") + "</p></div>"
        : "") +
      "</section>" +
      '<section class="panel"><h2>Question types</h2><div class="tablewrap"><table><thead><tr><th>Type</th><th>Skill</th><th class="num">Times shown</th><th>Status</th></tr></thead><tbody>' +
      bs.map((b) => '<tr><td class="mono">' + b.id + "</td><td>" + esc(SKILL_SHORT[b.skill]) + '</td><td class="num">' + b.presentations + "</td><td>" +
        (b.status === "fixed" ? '<span class="pill ok">Fixed</span>' : '<span class="pill bad">Not fixed yet</span>' + (S.cycle === 0 ? ' <span class="muted">First in the second loop</span>' : "")) + "</td></tr>").join("") +
      "</tbody></table></div>" +
      '<p class="muted">' + done.length + " questions answered · " + twins.filter((x) => x.outcome === "twin_right").length + " of " + twins.length + " twins right on the first try. Your confidence ratings are saved in My data.</p></section>" +
      '<section class="row end"><button class="primary" id="toNext" type="button">' + nextTestLabel() + "</button></section>";
    $("#toNext").onclick = startNextTest;
  }

  function nextTestLabel() {
    return S.cycle === 0 ? "Start the 22-minute post-test" : "Start the 22-minute final test";
  }

  function startNextTest() {
    const nextForm = FORMS[S.cycle + 1];
    if (!S.cycles[S.cycle + 1]) S.cycles.push(newCycle(nextForm));
    S.cycle += 1;
    shownAt = null;
    log("cycle_start", {});
    startTest();
  }

  /* ---------- results and mastery ---------- */

  // Per-skill scores on each completed form, and mastery: at least 4 of 5 on two forms in a row.
  function masteryTable() {
    const forms = S.cycles.filter((c) => c.diag && c.diag.results);
    return Object.keys(SKILLS).map((k) => {
      const scores = forms.map((c) => c.diag.results.filter((r) => r.skill === k && r.correct).length);
      let mastered = false;
      for (let i = 1; i < scores.length; i++) if (scores[i - 1] >= MASTERY && scores[i] >= MASTERY) mastered = true;
      return { skill: k, scores: scores, mastered: mastered };
    });
  }

  function renderResults() {
    const d = cyc().diag;
    const right = d.results.filter((r) => r.correct).length;
    const forms = S.cycles.filter((c) => c.diag && c.diag.results);
    const rows = masteryTable();
    const allMastered = rows.every((r) => r.mastered);
    const canLoop = S.cycle === 1 && !allMastered;
    const choice = S.cycle === 1 ? cyc().loopChoice : "end";
    log("results_view", { correct: right, mastered: rows.filter((r) => r.mastered).map((r) => r.skill) });

    app.innerHTML =
      '<section class="stack"><p class="eyebrow">' + TEST_NAME[cyc().form] + " · Form " + cyc().form + " results</p>" +
      '<div class="row" style="gap:24px;align-items:flex-end"><span class="big">' + Math.round((100 * right) / 20) + '%</span><span class="lede">' + right + " of 20 correct" +
      forms.slice(0, -1).map((c) => " · Form " + c.form + ": " + c.diag.results.filter((r) => r.correct).length + " of 20").join("") + "</span></div></section>" +
      '<section class="panel"><h2>Mastery by skill</h2><div class="tablewrap"><table><thead><tr><th>Skill</th>' +
      forms.map((c) => '<th class="num">Form ' + c.form + "</th>").join("") + "<th>Status</th></tr></thead><tbody>" +
      rows.map((r) => '<tr><td>' + esc(SKILLS[r.skill]) + "</td>" +
        r.scores.map((s) => '<td class="num">' + s + " / 5</td>").join("") +
        "<td>" + (r.mastered ? '<span class="pill ok">Mastered</span>' : r.scores[r.scores.length - 1] >= MASTERY ? '<span class="pill info">At target once</span>' : '<span class="pill bad">Not yet</span>') + "</td></tr>").join("") +
      "</tbody></table></div>" +
      '<p class="muted">A skill is mastered at 4 of 5 or better on two tests in a row.</p></section>' +
      (canLoop && !choice
        ? '<section class="panel"><h2>Want a second loop?</h2><p>You would review your misses on this test, get a follow-up program for the skills not yet mastered, then take a final 22-minute test (Form C). This is optional.</p>' +
          (carriedOver().length ? "<p>The program starts with the question types not fixed in training: " + carriedOver().map((c) => esc(SKILL_SHORT[c.skill]) + " (" + c.base + ")").join(", ") + ".</p>" : "") +
          '<div class="row end"><button class="ghost" id="endBtn" type="button">Finish here</button><button class="primary" id="loopBtn" type="button">Start the second loop</button></div></section>'
        : '<section class="panel"><h2>' + (allMastered ? "All four skills mastered." : "You're done for this cycle.") + "</h2><p>" +
          (allMastered ? "Review these skills again in a few days to keep them fresh." : "Keep practicing the skills marked not yet, and review mastered skills in a few days.") +
          " Your full record is under My data.</p></section>");
    if ($("#loopBtn")) $("#loopBtn").onclick = () => {
      cyc().loopChoice = "loop";
      log("second_loop_start");
      go("review");
    };
    if ($("#endBtn")) $("#endBtn").onclick = () => {
      cyc().loopChoice = "end";
      S.finished = true;
      log("finished", { after_form: cyc().form });
      save();
      render();
    };
    if (S.cycle === 2 && !S.finished) {
      S.finished = true;
      save();
    }
  }

  /* ---------- my data ---------- */

  function exportData() {
    return {
      app: "FinalACT",
      build: VERSION,
      session: S.sessionId,
      exported_at: new Date().toISOString(),
      tutor: { enabled: TUTOR.enabled(), model: TUTOR.model },
      cycles: S.cycles.map((c) => ({
        form: c.form,
        test: c.diag
          ? {
              started_at: new Date(c.diag.startedAt).toISOString(),
              submitted_at: c.diag.submittedAt ? new Date(c.diag.submittedAt).toISOString() : null,
              submit_reason: c.diag.submitReason,
              items: c.diag.results || null
            }
          : null,
        review: c.review,
        plan: c.plan,
        practice: c.practice
          ? {
              bases: c.practice.bases,
              presentations: c.practice.done.concat(c.practice.cur ? [c.practice.cur] : []).map((e) => ({
                item: e.id, base: e.base, kind: e.kind, confidence: e.confs || [e.conf], attempts: e.attempts, hints: e.hints, explanation: e.explanation || null, outcome: e.outcome
              }))
            }
          : null,
        second_loop: c.loopChoice
      })),
      mastery: masteryTable(),
      events: S.events
    };
  }

  function renderData() {
    const data = exportData();
    const json = JSON.stringify(data, null, 2);
    const conf = [];
    S.cycles.forEach((c) => {
      if (!c.practice) return;
      c.practice.done.concat(c.practice.cur ? [c.practice.cur] : []).forEach((e) => {
        if (e.conf != null) conf.push({ form: c.form, e: e, right: e.attempts[0] === byId[e.id].answer });
      });
    });
    app.innerHTML =
      '<section class="stack"><p class="eyebrow">My data</p><h1>Everything FinalACT has recorded</h1>' +
      '<p class="lede">This stays in your browser. Nothing is sent anywhere except tutor requests, which carry the question and what you wrote about it, never your name. Download it to share with the researcher.</p></section>' +
      S.cycles.filter((c) => c.diag && c.diag.results).map((c) =>
        '<section class="panel"><h2>' + TEST_NAME[c.form] + " · Form " + c.form + '</h2><div class="tablewrap"><table><thead><tr><th class="num">#</th><th>Skill</th><th>Answer</th><th class="num">Time on item</th><th>Timer flag</th><th>Cause given</th></tr></thead><tbody>' +
        c.diag.results.map((r) =>
          '<tr><td class="num">' + r.q + "</td><td>" + esc(SKILL_SHORT[r.skill]) + "</td><td>" + (r.choice || "–") + " " + (r.correct ? '<span class="pill ok">right</span>' : '<span class="pill bad">missed</span>') + "</td>" +
          '<td class="num">' + fmtSec(r.active_ms) + "</td><td>" + (r.time_flag ? '<span class="pill warn">' + r.time_flag.replace(/_/g, " ") + "</span>" : "") + "</td>" +
          "<td>" + (c.review[r.id] && c.review[r.id].cause ? CAUSES[c.review[r.id].cause].label : "") + "</td></tr>"
        ).join("") +
        "</tbody></table></div></section>"
      ).join("") +
      (conf.length
        ? '<section class="panel"><h2>Practice confidence ratings</h2><div class="tablewrap"><table><thead><tr><th>Form</th><th>Question</th><th>Kind</th><th class="num">Confidence (each try)</th><th>First try</th><th class="num">Hints</th><th>Outcome</th></tr></thead><tbody>' +
          conf.map((x) => "<tr><td>" + x.form + '</td><td class="mono">' + x.e.id + "</td><td>" + x.e.kind + '</td><td class="num">' + (x.e.confs || [x.e.conf]).join(" → ") + "</td><td>" +
            (x.e.attempts.length ? (x.right ? '<span class="pill ok">right</span>' : '<span class="pill bad">wrong</span>') : "–") + '</td><td class="num">' + x.e.hints + "</td><td>" + (x.e.outcome || "in progress").replace(/_/g, " ") + "</td></tr>").join("") +
          "</tbody></table></div></section>"
        : "") +
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
    if (testLive() && !S.viewData) closeItemClock();
    S.viewData = !S.viewData;
    save();
    render();
  };
  $("#resetBtn").onclick = async () => {
    if (!(await ask("Start over? This erases your tests, reflections, programs and practice from this browser.", "Erase and start over"))) return;
    const demo = S.demo;
    closeItemClock();
    shownAt = null;
    pendingChoice = null;
    pendingConf = null;
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

  // Read-only hooks for automated tests.
  window.FinalACT = { state: () => S, buildPlan: buildPlan, masteryTable: masteryTable, constants: { FORM_MS: FORM_MS, PACE_MS: PACE_MS, RUSHED_MS: RUSHED_MS } };

  render();
})();
