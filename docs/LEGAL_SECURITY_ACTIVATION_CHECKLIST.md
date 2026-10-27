# Legal and Security Activation Checklist

This file records implementation gates for services that are visible in the interface but currently offline. It is a technical checklist, not legal advice. Re-check the public Impressum and privacy policy whenever hosting, storage, AI, analytics, or submission behavior changes.

## Current verified state — 27 October 2026

- Hosting: static GitHub Pages site.
- Footer: every HTML page loads `scripts/legal-footer.js`, which links to `/impressum/` and `/datenschutz/`.
- Analytics/advertising: none found.
- First-party cookies: none found.
- Browser storage: Mission Log progress persists locally under `attian-mission-log-v1`; the fictional Archive Court stores only its active case/verdict, score, and safe return path in session storage. Neither is transmitted.
- Recommendation Engine: interaction counts are memory-only and disappear on reload.
- Visitor Terminal: disabled; no Supabase client or request is loaded.
- LILI: visual shell only; input disabled; no AI provider or prompt transmission.
- Restricted pages: client-side JavaScript gate only. This is not confidential storage.
- Restricted pages ask compliant search engines not to index, follow, or archive them. This reduces discovery but is not security.

## Before reactivating the Visitor Terminal

Do not enable the form until every item below is complete:

- Identify the exact Supabase contracting entity, project region, table, data fields, subprocessors, retention period, and international-transfer mechanism.
- Update `/datenschutz/` before collection begins.
- Display a concise notice immediately beside the submit control stating that accepted entries may become public.
- Require an affirmative acknowledgement before submission. Do not preselect it.
- Collect the minimum fields. Prefer an optional alias; do not require a legal name or email for a public fragment.
- Enforce maximum lengths and validate content on the server or trusted backend, not only in browser JavaScript.
- Reject secrets, contact details, special-category data, third-party personal data, unlawful content, spam, and unsupported file types.
- Add moderation before publication. New rows should default to a non-public state.
- Enable Row Level Security on every exposed table and verify it with the anonymous key.
- Anonymous users may insert only the permitted fields. They must not freely select, update, or delete arbitrary rows.
- Keep the Supabase service-role key and all other secrets off GitHub and out of browser code.
- Add rate limiting and abuse protection. If a third-party CAPTCHA is added, review its privacy and consent consequences first.
- Define and implement deletion and retention procedures, including how a visitor can identify an entry without exposing more personal data.
- Review any dormant legacy/test rows before reconnecting the public archive.

## Before activating LILI

- Select and document the AI provider, model, endpoint region, data retention, training/model-improvement terms, subprocessors, and transfer safeguards.
- Update `/datenschutz/` before accepting a prompt.
- Label the interface clearly as AI-powered and explain that outputs may be inaccurate.
- Send requests through a controlled server-side endpoint. Never place provider secrets in client-side JavaScript.
- Minimize prompt data and warn visitors not to submit personal, confidential, medical, legal, financial, or third-party information.
- Keep public and restricted retrieval sources physically separated. A system prompt is not an access-control boundary.
- Use a strict tool allowlist. LILI must not gain write access, secret access, arbitrary URL fetching, or direct database administration through visitor prompts.
- Treat retrieved content and user prompts as untrusted input; test prompt injection and data-exfiltration attempts.
- Add authentication and authorization before any non-public capability.
- Set input/output limits, rate limits, abuse monitoring, deletion procedures, and a documented log-retention period.

## Before claiming restricted content is private

GitHub Pages publishes static files. The current password and content are delivered to the browser, so the gate can be bypassed.

Choose one real protection model:

1. Remove private content from the public repository and public build entirely.
2. Move it behind server-side authentication with authorization checked on every request.
3. Publish only encrypted files and use a carefully reviewed key-management design that does not expose the decryption key with the site.

Do not rely on hidden navigation, robots.txt, obfuscated paths, or client-side password comparison as security.

## Content and image rights

- Keep provenance/license notes for non-original assets.
- Obtain permission before publishing identifiable private individuals unless a valid legal basis or exception applies.
- Remove unnecessary metadata from public images when it could reveal location or identity.
- Maintain a working rights/removal contact in the Impressum.

## Manual confirmations still required

- Confirm that the published legal name and postal address are current and suitable for the legal notice.
- Confirm that `atillacanbasran@gmail.com` is intentionally spelled that way and is actively monitored.
- Obtain a one-time professional review before enabling public submissions or AI processing.
