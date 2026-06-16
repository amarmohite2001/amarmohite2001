AGENTS Configuration

Scope
- Static site for GitHub Pages
- No Node.js runtime, no backend, no build step
- Stack: HTML, CSS, JavaScript

Rules
- Keep editable profile content in assets/js/content.js
- Keep index.html as structure/template only
- Keep assets/js/script.js for dynamic rendering and UI behavior
- Keep assets/css/style.css for visual styling only

HTML Guideline
- Use semantic sections and accessible labels/alt text
- Use stable IDs for dynamic content targets

CSS Guideline
- Reuse existing CSS variables before adding new styles
- Avoid inline styles and JS-based style overrides

JS Guideline
- Use plain JavaScript only
- Render from window.PORTFOLIO_CONTENT
- Guard DOM access with null checks
- Do not add Node.js-only features
