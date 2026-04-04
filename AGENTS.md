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

## SEO
- Always pass `canonicalUrl` and `ogImage` as absolute HTTPS URLs from page files to BaseLayout
- JSON-LD BeautySalon schema is defined once in BaseLayout.astro — do not duplicate in section components
- The canonical URL for the home page is `https://carosweetmua.com/`
- `og:image` MUST point to a 1200x630 image

## Fonts
- Fonts are self-hosted via @fontsource packages — do not add Google Fonts CDN links
- All font weights are imported in global.css via `@import '@fontsource/...'`
- Fontsource packages already include `font-display: swap` — no override needed

## Scroll Animations
- Use the `reveal` CSS class pattern for scroll-triggered animations; do not use third-party animation libraries
- Never apply `reveal` to above-the-fold elements (Navbar, HeroSection)
- Never apply `reveal` to Footer
- The `prefers-reduced-motion: reduce` guard in global.css is mandatory — do not remove it
- The IntersectionObserver is registered via ScrollReveal.astro — include it once in BaseLayout.astro

## Performance
- Cal.com script lives at bottom of `<body>` in BaseLayout.astro — do not move it back to `<head>`
- Hero images must include `fetchpriority="high"` and `loading="eager"`
- New third-party scripts must be evaluated for render-blocking impact before adding to `<head>`
