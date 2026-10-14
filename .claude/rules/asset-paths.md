---
paths:
  - "components/**/*.tsx"
  - "app/**/*.tsx"
  - "data/**/*.ts"
---

# Asset paths go through asset()

- Local paths for images, PDFs, and the resume must go through `asset()` from `lib/asset.ts`.
- Absolute `http(s)://` URLs do not need the helper.
- Root-relative paths such as `/images/x.png` break once the site is served from the `/amarmohite2001` subpath on GitHub Pages.
