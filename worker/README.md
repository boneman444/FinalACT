# FinalACT tutor relay (Cloudflare Worker)

The site works without this. Until the relay is set up, every hint and tutor message comes from the item bank.

## Set it up (about 15 minutes)

1. **Anthropic Console** (console.anthropic.com)
   - Make an account and add about $10 of credit.
   - Under Limits, set a monthly spend limit (for example $10).
   - Under API keys, create a key. Copy it somewhere safe for step 3. Never paste it into chat or into the repo.
2. **Cloudflare** (dash.cloudflare.com)
   - Make a free account.
   - Go to Workers & Pages, then Create, then Worker. Name it `finalact-tutor` and deploy the starter.
   - Click Edit code, replace everything with the contents of `tutor-worker.js`, and deploy.
3. **Add the key.** In the Worker, go to Settings, then Variables and Secrets. Add a **Secret** named `ANTHROPIC_API_KEY` and paste the key as its value.
4. **Send Claude the Worker's URL** (it looks like `https://finalact-tutor.<your-subdomain>.workers.dev`). It goes into `RELAY_URL` at the top of `tutor.js`.

## Settings in `tutor-worker.js`

- `MODEL`: `claude-haiku-5-5` (cheapest). Change it to `claude-sonnet-5-5` or `claude-opus-5-5` for better tutoring at a higher cost.
- `ALLOWED_ORIGINS`: the sites allowed to call the relay.
- `LIMIT`: requests per visitor per 10 minutes.

## Cost

Each tutor reply is roughly 1,000 tokens in and 300 out, so Haiku 5.5 ($0.10 / $0.50 per million tokens) costs about $0.25 per 1,000 replies.
