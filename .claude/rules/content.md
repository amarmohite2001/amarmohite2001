---
paths:
  - "components/**/*.tsx"
  - "app/**/*.tsx"
  - "data/**/*.ts"
---

# Content lives in data/content.ts

- Bio, experience, certifications, projects, blog posts, and social links come from `data/content.ts`. Do not hardcode them in components.
- `app/` composes routes. Presentation belongs in `components/`.
- Each home section (`Hero`, `About`, `Skills`, `Experience`, `Certifications`, `Projects`, `Contact`, `Stats`) stays a separate component that reads from `data/content.ts`.
- Keep `alt`, `aria-label`, and semantic landmarks on anything you touch.
