# AGENTS Guide

This repository is Amar Mohite's personal portfolio: a Next.js (App Router) app,
statically exported and deployed to GitHub Pages. Full architecture, deployment, and
roadmap details live in [`project-docs/`](./project-docs/README.md) — add new
documentation there, not at the repo root or in `docs/` (see the naming note in
`project-docs/README.md` for why).

## Scope

- Framework: Next.js 15.3 (App Router), React 19, TypeScript.
- Build: static export (`output: 'export'`) — no server runtime in production.
- Hosting target: GitHub Pages, served from `/amarmohite2001` (see `basePath`/`assetPrefix`
  in `next.config.ts`).
- No API routes, Server Actions, database, or backend of any kind.

## Project Rules

- Keep all resume/experience/project/blog/social content in `data/content.ts`. Do not
  hardcode copy inside components.
- Keep `app/` focused on route composition; put presentation in `components/`.
- Any static asset path (images, PDFs) referenced in code or `data/content.ts` must go
  through the `asset()` helper in `lib/asset.ts`, or be an absolute URL — plain
  root-relative paths break once deployed under the `/amarmohite2001` subpath.
- Do not hand-edit `docs/` — it is generated build output (`npm run build`).
- Do not introduce a backend, database, or server-only Next.js feature (API routes,
  Server Actions, `cookies()`/`headers()`) — the app must remain fully static-exportable.
- Minimal dependencies: prefer plain React/Next.js features over adding new libraries.

## Component & File Guidelines

- Components: `PascalCase.tsx` in `components/` (shared shell) or `components/sections/`
  (home-page sections).
- Keep each home section (`Hero`, `About`, `Skills`, `Experience`, `Certifications`,
  `Projects`, `Contact`, `Stats`) as its own component reading from `data/content.ts`.
- Theme state (light/dark) is managed by `context/ThemeContext` and persisted to
  `localStorage`; the inline script in `app/layout.tsx` prevents a flash of the wrong theme
  on load — do not remove it without replacing that behavior.
- Preserve accessibility attributes (`alt`, `aria-label`, semantic landmarks) on any
  component you touch.

## Content Editing Workflow

1. Update content in `data/content.ts` (bio, experience, certifications, projects, blog
   posts, social links).
2. Run `npm run dev` and verify locally at `http://localhost:3000`.
3. Run `npm run build` to confirm the static export succeeds and `docs/` is regenerated.
4. Push to `main` — GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys
   automatically.

## Deployment Notes (GitHub Pages)

- Production builds must set `NEXT_PUBLIC_BASE_PATH=/amarmohite2001` (the CI workflow does
  this automatically); local `npm run dev` does not need it.
- Keep asset references relative to `basePath` via `lib/asset.ts`, not hardcoded absolute
  root paths.
- `trailingSlash: true` and `images.unoptimized: true` are required for correct static
  hosting on GitHub Pages — do not remove without re-verifying route behavior.
