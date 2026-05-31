# AGENTS Guide

This repository is a static personal portfolio for GitHub Pages.

## Scope

- Runtime: browser only (no Node.js, no backend, no build step).
- Hosting target: GitHub Pages.
- Stack: plain HTML, CSS, and JavaScript.

## Project Rules

- Keep all personal content in `assets/js/content.js`.
- Keep `index.html` focused on structure and placeholders.
- Keep `assets/js/script.js` focused on behavior and rendering.
- Keep `assets/css/style.css` focused on presentation only.
- Do not introduce frameworks, bundlers, or server dependencies.

## HTML Guidelines

- Use semantic sections (`header`, `main`, `section`, `footer`).
- Preserve existing class names unless a style update requires a coordinated change in CSS.
- For dynamic content, use stable IDs and let JavaScript populate the content.
- Keep accessibility attributes meaningful (`alt`, `aria-label`, form labels).

## CSS Guidelines

- Reuse existing CSS custom properties (`:root` variables) before adding new values.
- Avoid inline styles and style changes in JavaScript.
- Keep responsive behavior mobile-first and verify at common breakpoints.
- Avoid unused selectors and duplicated declarations.

## JavaScript Guidelines

- Use plain JavaScript only.
- Read all editable content from `window.PORTFOLIO_CONTENT` in `assets/js/content.js`.
- Guard DOM operations with null checks to avoid runtime errors.
- Keep rendering functions small and section-specific.
- Do not add fetch calls, API dependencies, or Node.js-only code.

## Content Editing Workflow

1. Update personal data in `assets/js/content.js`.
2. Verify the page locally by opening `index.html` in a browser.
3. Confirm links, project cards, and contact details render correctly.
4. Push to GitHub Pages.

## Deployment Notes (GitHub Pages)

- Use relative paths for assets.
- Keep files static and committed to the repository.
- Ensure external links include full HTTPS URLs.
