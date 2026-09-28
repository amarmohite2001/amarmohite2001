# Deployment Strategy

## Target: GitHub Pages

Served at `amarmohite2001.github.io/amarmohite2001/`.

## Static Export Configuration

```ts
// next.config.ts
{
  output: 'export',
  distDir: 'docs',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}
```

- `output: 'export'` produces a fully static site — no Node server required at runtime.
- `distDir: 'docs'` writes the build directly into `docs/`, which GitHub Pages can serve
  from the repository's `main` branch, `/docs` folder. **This is why project documentation
  lives in `project-docs/` instead — see the naming note in [`README.md`](../README.md).**
- `basePath` / `assetPrefix` are driven by `NEXT_PUBLIC_BASE_PATH` so the app works
  correctly when served from the `/amarmohite2001` subpath rather than domain root.

## Automated Deployment

[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml):

1. Triggers on every push to `main` (or manual `workflow_dispatch`).
2. Installs deps with `npm ci`, then runs `npm run build` with
   `NEXT_PUBLIC_BASE_PATH=/amarmohite2001`.
3. Uploads the generated `docs/` directory as a Pages artifact.
4. Deploys it via `actions/deploy-pages`.

Because `docs/` is also committed to the repo (not git-ignored), the built output is
available in-repo between deploys as well — but the live site is served via the GitHub
Actions Pages deployment, not by GitHub Pages reading the committed folder directly.

No environment variables or secrets are required beyond `NEXT_PUBLIC_BASE_PATH`, which the
workflow sets automatically.

## What Would Change This

This deployment model assumes the site stays fully static (no backend). If a backend is
ever added (see [`roadmap/README.md`](../roadmap/README.md)), static export on GitHub Pages can no longer
serve it — GitHub Pages only serves static files, with no server-side execution. That would
require either: (a) keeping the site static but pointing it at an externally-hosted API, or
(b) moving hosting off GitHub Pages entirely. Nothing about this is decided; it's noted
here so the constraint is visible before any such work starts.
