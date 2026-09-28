# Documentation Index

This folder is the foundation for all project documentation going forward — architecture,
deployment strategy, and roadmap/future-planning docs. Add new documents here as the
project grows.

**Naming note:** this folder is called `project-docs/`, not `docs/`, on purpose. This repo
already has a `docs/` directory, but it is **generated build output** — `next.config.ts`
sets `distDir: 'docs'`, and `npm run build` runs `rm -rf .next docs` before rebuilding.
Anything placed in `docs/` would be deleted on the next build and would also get published
into the live GitHub Pages site alongside the compiled app. Do not move this documentation
into `docs/`.

## What This Project Is

Amar Mohite's personal portfolio site: a statically-exported Next.js application showing
a resume/experience summary, skills, certifications, featured projects, a blog, and a
downloadable resume. Static, client-only — no backend, API routes, or database.

| Route          | Purpose                                  |
| --------------- | ----------------------------------------- |
| `/`              | Home — hero, about, skills, experience, certifications, projects, stats, contact |
| `/blog`          | Blog index                                |
| `/blog/[slug]`   | Individual blog post (statically generated at build time) |
| `/resume`        | Resume page                               |

## Docs In This Folder

| Topic | Start here |
| --- | --- |
| Architecture | [`architecture/README.md`](./architecture/README.md) — tech stack, codebase map, content model |
| Deployment | [`deployment/README.md`](./deployment/README.md) — GitHub Pages deployment strategy, static export config |
| Roadmap | [`roadmap/README.md`](./roadmap/README.md) — speculative future work, nothing scheduled |

Each topic folder gets its own `README.md` as the entry point; add more files inside the
relevant folder (not new top-level files) as each topic grows.

## Quick Links

- Site content (bio, experience, projects, blog): [`data/content.ts`](../data/content.ts)
- Contributor / agent conventions: [`AGENTS.md`](../AGENTS.md)
- Personal branding / GitHub profile README: [`Readme.md`](../Readme.md)
