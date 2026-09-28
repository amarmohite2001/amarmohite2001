# Roadmap / Future Strategies

Nothing in this document is scheduled or committed — it exists so future work has context
instead of starting from zero. Update it as real plans form.

## Current Constraint

This site is fully static (GitHub Pages, `output: 'export'`, no server runtime — see
[`deployment/README.md`](../deployment/README.md)). Any idea below that needs server-side code (accepting
form submissions, reading/writing a database, etc.) cannot run on the current hosting as-is
and would need either an external API or a hosting change first.

## Possible Future Direction: Contact Form Backend

The `Contact` section currently exposes static contact info only. If that becomes an
actual submittable form, the same pattern being considered for the Big-Security-force
project applies here too:

- **API layer:** a small serverless endpoint (`POST /api/contact`) to accept submissions —
  since this repo can't host server code itself while static-exported, this would need to
  live externally (e.g. a Cloudflare Worker, a Vercel/Netlify function, or similar) rather
  than inside this Next.js app.
- **"Database":** a **Google Sheet** as a lightweight store for submissions, via either the
  Google Sheets API (service account) or a Sheets-bound Apps Script Web App acting as the
  API. Same trade-offs as noted for Big-Security-force: low setup cost, familiar review
  interface, but not a real database — treat as a stepping stone, not a permanent choice.

## Explicitly Not Decided Yet

- Whether a contact form is even wanted here (the personal-brand `Readme.md` already
  surfaces email/LinkedIn directly)
- Where any backend code would actually run, given this repo stays static
- Whether Sheets-as-database is worth the integration cost for a low-traffic personal site

When any of this is actually picked up, replace this speculative section with a concrete
plan.
