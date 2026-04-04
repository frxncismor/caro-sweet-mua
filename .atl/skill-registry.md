# Skill Registry — caro-angel-beauty

Generated: 2026-04-03

## Project Context

Astro 6 landing page for a makeup artist (MUA) business — "Caro Sweet Mua", Monterrey NL.
Single-page site with 13 components, TailwindCSS v4 installed but barely used (168 inline style= vs 46 class=).
TypeScript strict mode. No testing infrastructure. Cal.com embedded for bookings.

**Primary tech debt**: inline `style=` attributes everywhere instead of Tailwind utility classes.
Design tokens exist in `global.css` via `@theme {}` but are NOT used in components (hex values hardcoded).

## Compact Rules

### frontend-design
- **Triggers**: building web components, pages, landing pages, HTML/CSS layouts, styling/beautifying UI
- **Rule**: Create distinctive production-grade UI. Avoid generic AI aesthetics. Commit to a bold aesthetic direction before coding.

### seo / seo-*
- **Triggers**: SEO audit, schema, Core Web Vitals, sitemap, E-E-A-T, structured data, GEO, page speed
- **Rule**: Run full audit (technical + content + local + schema). This is a local service business — local SEO signals are critical.

### ui-designer
- **Triggers**: user provides screenshots/mockups, wants to extract design system, build MVP matching reference aesthetics
- **Rule**: Extract color palette, typography, spacing from `.pen` or image references before implementing.

### sdd-explore / sdd-propose / sdd-spec / sdd-design / sdd-tasks / sdd-apply / sdd-verify / sdd-archive
- **Triggers**: SDD workflow commands `/sdd-*`
- **Rule**: Always follow dependency graph: proposal → specs → tasks → apply → verify → archive

### branch-pr
- **Triggers**: creating PRs, branching work for review
- **Rule**: Clean PR branch from filtered commits only.

### web-design-guidelines / web-design-reviewer
- **Triggers**: reviewing frontend code for design quality, visual inspection of rendered pages
- **Rule**: Review against 6 Web Interface Guidelines pillars.

## User Skills

| Skill | Triggers |
|-------|----------|
| `frontend-design` | landing page, component, UI, styling, page layout |
| `seo` | SEO, audit, schema, sitemap, GEO, structured data |
| `seo-local` | local SEO, Google Business Profile, local search |
| `ui-designer` | design system, reference image, mockup extraction |
| `sdd-*` | `/sdd-` commands, spec-driven development workflow |
| `branch-pr` | PR creation, branch management |
| `web-design-guidelines` | design review, UI quality check |
| `judgment-day` | adversarial review of implementation |
