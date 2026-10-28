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

## Files

- `index.html`, `style.css`, `app.js`: the app
- `items.js`: the item bank (`proposal/item-bank/item_bank.json` wrapped as `window.ITEM_BANK`)
- `vendor/katex/`: KaTeX 0.16.9 for math (MIT license)

Run locally with `python3 -m http.server` in this folder and open http://localhost:8000.
