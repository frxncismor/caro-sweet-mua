# Code Review Rules

## Astro
- Use Astro components (.astro) for all UI — avoid plain HTML files
- Keep components single-responsibility; one section per component
- Import images from src/assets for Astro optimization, use public/ for static assets
- Do not inline large blocks of CSS; use Tailwind classes or global.css

## Tailwind
- Use utility classes directly in markup
- Avoid arbitrary values unless strictly necessary
- Keep responsive variants consistent (mobile-first)

## General
- No hardcoded secrets or API keys
- All images must have meaningful alt text for accessibility
- Use semantic HTML elements (section, nav, footer, article, etc.)
