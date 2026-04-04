# Caro Sweet Mua — Landing Page

Professional MUA landing page built for a client in Monterrey, NL, Mexico.

![Astro](https://img.shields.io/badge/Astro-6-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)

**Live Site**: [https://carosweetmua.com](https://carosweetmua.com)

---

## About

Caro Sweet Mua is a professional makeup artist landing page built for Carolina, a MUA based in Monterrey, Nuevo León, Mexico. The site showcases her services — bridal, quinceañera, social events, and everyday looks — and lets clients book appointments directly through an integrated scheduling widget. It was built as a client project with a strong focus on performance, SEO, and accessibility.

---

## Tech Stack

| Technology | Version / Notes |
|---|---|
| Astro | 6.1 — SSG, zero runtime JS by default |
| Tailwind CSS | v4 — `@theme` tokens, no config file needed |
| TypeScript | Strict mode enabled |
| Playwright | E2E tests |
| Vercel | Deployment |

---

## Features

- SEO-optimized — canonical URLs, Open Graph meta, JSON-LD `BeautySalon` structured data
- LLM-ready — `llms.txt` following the [llmstxt.org](https://llmstxt.org) spec
- Self-hosted fonts via `@fontsource` packages — no Google Fonts CDN dependency
- Intersection Observer scroll animations with `prefers-reduced-motion` support
- Responsive gallery with lightbox
- Before/after drag slider
- Cal.com booking integration — no backend required
- Lighthouse-optimized — target score of 100 across all categories

---

## Project Structure

```
web/src/
├── assets/          # Optimized images (processed by Astro)
├── components/      # Single-responsibility Astro components (one section each)
│   ├── Navbar.astro
│   ├── HeroSection.astro
│   ├── ServicesSection.astro
│   ├── ServiceCard.astro
│   ├── GallerySection.astro
│   ├── BeforeAfterSection.astro
│   ├── TestimonialsSection.astro
│   ├── AboutSection.astro
│   ├── SocialProofStrip.astro
│   ├── BookingSection.astro
│   ├── DomicilioSection.astro
│   ├── CtaBanner.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro  # HTML shell, SEO meta, JSON-LD, global scripts
├── pages/
│   └── index.astro       # Composes all section components
└── styles/
    └── global.css        # @theme tokens, font imports, reveal animation
```

---

## Getting Started

```bash
git clone https://github.com/frxncismor/caro-sweet-mua.git
cd caro-sweet-mua/web
npm install
npm run dev
```

> Note: the project lives in the `web/` subdirectory. All Astro commands must be run from there.

---

## Build & Deploy

```bash
npm run build
```

Output is written to `web/dist/`. The project is deployed on Vercel. The `vercel.json` at the repo root configures the build command and output directory so Vercel points to the `web/` subdirectory correctly.

---

## Credits

Built by [@frxncismor](https://github.com/frxncismor) for Caro Sweet Mua.
