---
name: church-design
description: Front-end design guidance for church websites and ministry UI. Use when designing, building, restyling, refreshing, or reviewing any church or ministry web page, section, or component (homepage, plan-a-visit, sermons, events, giving, ministry pages, location pages) in any stack, including WordPress, Tailwind, React, or plain HTML/CSS. Provides six style directions (Bold Contemporary, Warm Editorial, Playful Modern, Classic Confident, Ministry Hub, Traditional/Liturgical), brand-cohesion rules, church-specific modules, accessibility for all ages, and anti-patterns to avoid.
---

# Church Design

A design skill for church websites. It shapes the visual and UX decisions (direction, type, color, spacing, imagery, modules, copy) and leaves the code stack to the project. It is a design skill, not a site generator.

## Core beliefs

1. **A church site is a front door.** The first job is helping a stranger feel welcome and know what to do next. Beauty serves that job.
2. **Cohesion beats variety.** Every page follows the same small set of brand constants. Ministries get personality inside those constants, never outside them.
3. **Real people over stock.** The congregation's own photos are the primary imagery. Stock is a last resort.
4. **Everyone can read it.** Visitors range from teenagers to great-grandparents. Body text is 18px or larger and contrast meets WCAG AA at minimum.
5. **Direction is chosen, not defaulted.** Different churches need different looks. Never default every project to one style.

## Workflow

Pick the mode from the request, then follow its command file. Read only the references a mode tells you to.

| Mode | When | File |
|---|---|---|
| **init** | No `MINISTRY.md` exists yet, or the user wants to set up or change brand and direction | `commands/init.md` |
| **design** | Build new pages, sections, or components | `commands/design.md` |
| **refresh** | Restyle or redesign an existing site or theme (WordPress or otherwise) | `commands/refresh.md` |
| **audit** | Review, critique, or check a page or site | `commands/audit.md` |

Before **design**, **refresh**, or **audit**, look for `MINISTRY.md` in the project root. If it exists, it is the source of truth for direction, brand constants, Bible translation, and church facts. If it does not exist, run a short **init** first (it can be quick: 5 questions), unless the user only wants a one-off component, in which case ask which direction and proceed.

## Rules that always apply

These hold in every direction and every mode. Details are in `references/foundations.md`.

- **Brand constants are locked per site:** one radius family, one button shape, at most two typefaces, one accent color (plus an optional seasonal accent for liturgical churches), one photo-overlay treatment, one section rhythm.
- **Body text is at least 18px** (1.125rem) with line-height 1.5 to 1.7 and a measure of 60 to 75 characters.
- **No all-caps body text.** All-caps is allowed only for eyebrows and labels (one line, about five words), buttons (three words or fewer), and short one-line headings in directions that call for them (Classic Confident, Traditional/Liturgical), always with added letter-spacing.
- **Give is reachable within 2 clicks from every page.** A "Give" item in the persistent header counts as one click.
- **Service times and address appear on the homepage.** The footer counts, but above the fold is better for visitors.
- **Original photos are primary.** No stock photos of raised hands under stage lights, generic praying hands, or sunrise-over-cross imagery.
- **The church's own mark replaces generic icons.** Use the logo mark in a few meaningful places, typographic devices for structure, and one consistent open-license icon set for functional icons only. No clip-art crosses beside headings.
- **Contrast meets WCAG AA:** 4.5:1 for body text, 3:1 for large text and UI elements. Check text on photos too.
- **Scripture uses the translation set in `MINISTRY.md`.** Always include the reference and translation abbreviation (for example, "Matthew 28:19 NKJV"). If none is set, ask.
- **Carousels and background video are allowed** with visible controls, no auto-advance faster than 6 seconds, pause on hover and focus, and a static fallback under `prefers-reduced-motion`.

## Reference map

| Need | Read |
|---|---|
| Tokens, type scale, spacing, radius, cohesion rules | `references/foundations.md` |
| A specific style direction | `references/directions/<direction>.md` |
| Heroes, sermon blocks, location cards, ministry cards, Scripture blocks, give CTAs, events, nav, footer | `references/modules.md` |
| What each page type is for, its hero, section order, and depth; what is sitewide vs per page | `references/page-types.md` |
| Photography and illustration | `references/imagery.md` |
| The church's mark, icon sets, custom icons | `references/iconography.md` |
| Accessibility for all ages | `references/accessibility.md` |
| What to avoid ("church slop") | `references/anti-patterns.md` |
| Headlines, button labels, visitor-friendly language | `references/writing.md` |
| Turning tokens into CSS variables, Tailwind, or WordPress `theme.json` | `references/platforms.md` |
| Templates: `MINISTRY.md`, tokens, Tailwind theme, `theme.json`, church-year script | `assets/` |
| Contrast checking (including text over scrims) | `scripts/contrast.py` |

## Directions at a glance

| Direction | Feel | Fits |
|---|---|---|
| `bold-contemporary` | Heavy sans, black and white, big air, black pills | Large and multisite churches, plants with strong video |
| `warm-editorial` | Serif headlines, navy and earth tones, line art, collage photos | Established evangelical, Bible, and Reformed churches wanting warmth and depth |
| `playful-modern` | Very heavy lowercase sans, outline type, hand-drawn accents, bright accent | Young, energetic, family-heavy churches |
| `classic-confident` | Uppercase geometric sans, tinted photo overlays, warm accent | Teaching-focused churches, Calvary Chapel and Bible church traditions |
| `ministry-hub` | Solid-color and photo cards per ministry, watermark marks | Churches with many ministries that each need a sub-brand |
| `traditional-liturgical` | Classic book serifs, letterspaced caps, quiet palette, seasonal accent | Anglican, Lutheran, Catholic, Orthodox, Presbyterian, historic congregations |

## Output standard

When you deliver design work, state the direction and brand constants you applied in one or two lines, list any rule you could not meet and why, and note any placeholder content (photos, times, addresses) the church must replace.
