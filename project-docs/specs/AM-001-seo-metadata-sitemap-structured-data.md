# AM-001: SEO metadata, sitemap, robots, and structured data

| Field        | Value                                                        |
| ------------ | ------------------------------------------------------------ |
| Key          | AM-001                                                       |
| Type         | Task                                                         |
| Epic         | None                                                          |
| Status       | In Review                                                     |
| Priority     | P2                                                            |
| Estimate     | S                                                             |
| Owner        | amarmohite2001                                                |
| Created      | 2026-11-13                                                    |

## User story

As the site owner, I want every page to carry complete SEO metadata and the site to expose a
sitemap, robots file, and Person structured data, so that Google can index each page distinctly
and show a richer preview/knowledge panel for the portfolio.

## Context

Home, `/blog`, `/blog/[slug]`, and `/resume` already had per-page `title`, but several were
missing a `description`, and nothing had Open Graph/Twitter preview tags, a canonical URL, a
sitemap, a robots file, or structured data. Raised while reviewing why static HTML wasn't
translating into stronger SEO beyond basic crawlability.

## Acceptance criteria

- [x] **AC1** — Given `/resume/` and any `/blog/<slug>/` page, when the HTML is inspected, then
      each has its own non-empty `<meta name="description">`.
- [x] **AC2** — Given a production build, when `docs/sitemap.xml` is opened, then it lists
      `/`, `/blog/`, `/resume/`, and every blog post slug under the
      `https://amarmohite2001.github.io/amarmohite2001` base path, each with a trailing slash.
- [x] **AC3** — Given a production build, when `docs/robots.txt` is opened, then it allows all
      crawlers and points at the sitemap above.
- [x] **AC4** — Given the home page HTML, when inspected, then it contains a single
      `application/ld+json` script describing a `Person` with name, job title, URL, and
      `sameAs` links to the LinkedIn/GitHub profiles already in `data/content.ts`.
- [x] **AC5** — Given any page, when its `<head>` is inspected, then it has Open Graph
      (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter card tags, and
      a canonical `<link>` pointing at its own absolute URL under the GitHub Pages base path.

## Out of scope

- `BlogPosting` structured data per post (would need a canonical "author"/publish-date model
  not currently in `BlogPost`; worth a follow-up spec).
- Sitemap submission to Google Search Console (owner action, not a code change).

## Technical notes

- **Files likely touched:** `data/content.ts`, `app/layout.tsx`, `app/resume/page.tsx`,
  `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, new `app/sitemap.ts`, new `app/robots.ts`.
- **Content changes:** add `site.url` (the GitHub Pages base URL,
  `https://amarmohite2001.github.io/amarmohite2001`, per the project's stated deployment
  target) to `data/content.ts`.
- **Rules that apply:** `content.md` (SEO copy lives in `data/content.ts`), `asset-paths.md`
  (OG image path must resolve correctly under the `/amarmohite2001` base path — uses `asset()`),
  `static-export.md` (`sitemap.ts`/`robots.ts` are build-time static generation, compatible with
  `output: 'export'`, and `distDir: 'docs'` stays generated-only).
- **Dependencies:** None.
- **Deployment impact:** None — `sitemap.ts`/`robots.ts` compile to static files in `docs/` at
  build time, like any other static asset. `NEXT_PUBLIC_BASE_PATH` must be set at build time
  (as CI already does) for the generated URLs to be correct.

## Validation

- [x] `npx tsc --noEmit` passes
- [x] `npm run build` passes and the output in `docs/` looks right
- [x] Checked at 375px width and at desktop width, in light and dark theme (no UI change —
      metadata/head only)
- [x] Keyboard-only walkthrough of the changed UI (no UI change)
- [x] Other validation specific to this story: inspected `docs/sitemap.xml`, `docs/robots.txt`,
      and the built HTML's `<head>` for the JSON-LD block and OG tags, built with
      `NEXT_PUBLIC_BASE_PATH=/amarmohite2001` to match production.

## Definition of Done

- [x] All acceptance criteria ticked
- [x] Validation checklist complete
- [ ] Docs updated where behavior or structure changed (N/A — no deployment/doc changes needed)
- [ ] Reviewed by a human before merge

## Open questions

- None.

## Activity log

- 2026-11-13 — Created as Draft, implemented, and moved to In Review in the same session per
  owner's request to fix SEO gaps and open a PR for later merge.
