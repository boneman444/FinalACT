# FinalACT

A guardrailed ACT math tutor (Algebra and Functions) for CS 6460. Static site: HTML, CSS and plain JavaScript, no server.

## Milestone 1 build (Oct 23, 2026)

1. 22-minute, 20-question diagnostic (Form A) with a question grid and auto-submit at 0:00.
2. Time on each item is logged in the background (paused when the student leaves the item or the tab).
3. Missed questions are shown without the correct answers or the score.
4. For each miss, the student writes why they picked their answer and chooses a cause: concept gap, misconception, careless slip, or ran out of time. Questions left blank when time ran out, or answered in the last minute in under 25% of the pace, are flagged by the timer.
5. The score and per-skill breakdown appear after the review.
6. A rule-based training program picks practice items of the same question type as each miss (two for concept gaps and misconceptions, one otherwise), ordered by skill and from easier to harder.
7. "My data" shows time per question and the full event log, with JSON download.

Add `#demo` to the URL, or tick the box on the start page, to show demo shortcuts (a repeatable sample student and sample reflections).

## Milestone 2 build (Nov 14, 2026)

1. **Guarded practice.** The training program is now live. One question at a time, untimed.
   - The student rates confidence (1 to 4) before checking. Every rating is logged.
   - After a first wrong choice, a three-step hint ladder opens one hint at a time: a pointing question, the idea, then the first step.
   - After a second wrong choice the choices lock. The student explains why they picked them, then sees a response to that explanation and the worked solution.
   - A question answered right is followed by a twin (same type, new numbers). The twin counts only if it is right on the first try.
   - Two wrong choices, or a missed twin, send the question type to the back of the line. It comes back with new numbers. When no new version is left, it is marked "not fixed yet".
2. **AI tutor (optional).** `tutor.js` sends structured requests to a Cloudflare Worker relay (`worker/`), which calls Claude Haiku 5.5. The tutor tailors hints, responds to the locked-question explanation, and checks each diagnostic cause against the student's explanation.
   - An answer-leak filter regenerates any pre-solution reply that names the correct letter or value, and drops it if it happens again.
   - With no relay, or on any error or an 8-second timeout, the written content from the item bank is shown.
   - The tutor is on: `RELAY_URL` in `tutor.js` points at the deployed Worker. Set it to `""` to switch the tutor off. See `worker/README.md`.
3. **Post-test (Form B)**, then results with per-skill mastery: 4 of 5 or better on two tests in a row.
4. **Optional second loop:** review Form B misses, get a follow-up program from practice items not used yet, practice, then take the final test (Form C) and see the final results.
5. My data shows every test, the practice confidence ratings and the raw log, and exports all cycles as JSON.

Demo shortcuts now also include "finish practice", so the whole loop can be shown on camera in a few minutes.

## Files

- `index.html`, `style.css`, `app.js`: the app
- `tutor.js`: AI tutor client, answer-leak filter and fallback
- `worker/`: the Cloudflare Worker relay and its setup steps
- `items.js`: the item bank (`proposal/item-bank/item_bank.json` wrapped as `window.ITEM_BANK`)
- `vendor/katex/`: KaTeX 0.16.9 for math (MIT license)

Run locally with `python3 -m http.server` in this folder and open http://localhost:8000.
