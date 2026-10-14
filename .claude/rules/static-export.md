# Static export: keep the deployment model intact

- `next.config.ts` sets `output: 'export'`, `distDir: 'docs'`, `trailingSlash: true`, and `images.unoptimized: true`. These are required for GitHub Pages.
- Do not add API routes, Server Actions, or server-only APIs (`cookies()`, `headers()`). The site must stay fully static.
- `docs/` is generated. `npm run build` deletes it. Never edit it, and never put documentation there.
- The inline theme script in `app/layout.tsx` prevents a flash of the wrong theme. Do not remove it without replacing that behavior.
