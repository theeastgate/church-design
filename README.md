# Church Design Skill

**Front-end design guidance for church websites, for AI coding agents.**

Church Design gives Claude Code, Codex, and other agents that read `SKILL.md` files a designer's judgment for church sites: five style directions, brand-cohesion rules, church-specific modules, accessibility for every age, and a list of "church slop" to avoid. It shapes design decisions and works in any stack, including WordPress block themes, classic themes, page builders, Tailwind, React, and plain HTML/CSS.

It is a design skill, not a site generator. Use it to build new pages, refresh an existing church site, or audit one.

## What's inside

| Path | What it does |
|---|---|
| `SKILL.md` | Core beliefs, always-on rules, and routing to the four modes |
| `commands/init.md` | Interview the church and write `MINISTRY.md` (direction, brand constants, Bible translation, facts) |
| `commands/design.md` | Build new pages, sections, and components |
| `commands/refresh.md` | Redesign an existing site without breaking what works |
| `commands/audit.md` | Review a page or site, with severity-rated findings |
| `references/directions/` | Five style directions with tokens, signatures, custom details, and misses |
| `references/layers/` | The optional Ministry Hub layer |
| `references/foundations.md` | Brand constants, type scale, color roles, spacing, radius, motion |
| `references/modules.md` | Header, hero, service times, location cards, ministry cards, sermon feature, Scripture block, events, give, footer, forms |
| `references/page-types.md` | Each page type's job, hero, section order, and depth, and what stays the same sitewide |
| `references/imagery.md` | Photography priorities, treatments, placeholders, alt text |
| `references/iconography.md` | Using the church's own mark, choosing one open-license icon set, drawing custom ministry icons |
| `references/accessibility.md` | WCAG 2.2 AA for all ages |
| `references/anti-patterns.md` | What makes church sites look dated or generic |
| `references/writing.md` | Headlines, buttons, and plain-language replacements for church jargon |
| `references/platforms.md` | Tokens for CSS, Tailwind v4, and WordPress `theme.json` |
| `assets/` | `MINISTRY.md` template, CSS tokens, Tailwind theme, `theme.json`, `church-year.js` (seasonal accent for liturgical churches) |
| `scripts/contrast.py` | WCAG contrast checker, including text over scrims (no dependencies) |
| `examples/` | Pages built with the skill for fictional churches, one per direction, each with its `MINISTRY.md`, original mark, and photo credits: Harbor City Church (Bold Contemporary), Riverbend Bible Church (Warm Editorial), Sunnyside Community Church (Playful Modern), Cornerstone Bible Fellowship (Classic Confident, plus a Ministries page using the Ministry Hub layer), and St. Aidan's Anglican (Traditional/Liturgical) |

## The five directions

| Direction | Feel |
|---|---|
| **Bold Contemporary** | Heavy sans, black and white, big air, black pill buttons |
| **Warm Editorial** | Serif headlines, navy and earth tones, line art, photo collages |
| **Playful Modern** | Heavy lowercase sans, outline type, hand-drawn accents, one bright color |
| **Classic Confident** | Uppercase geometric sans, navy-tinted photos, warm accent |
| **Traditional / Liturgical** | Book serifs, letterspaced caps, quiet palette, accents that follow the church year |

Plus an optional **Ministry Hub layer** that works with any direction: a color, mark, and card for each ministry, and a grouped ministry directory.

## Rules it always follows

- One set of brand constants per site (fonts, radius, button shape, accent, overlay) so every page feels like one church
- Body text 18px or larger, and no all-caps paragraphs
- Give reachable within two clicks from every page
- Service times and address on the homepage (the footer counts)
- The church's own photos first; no stock worship clichés
- WCAG AA contrast, including text on photos
- Scripture in the translation the church chooses, always with reference

## Install

**Claude Code (one project):** copy this folder to `.claude/skills/church-design/` in your project.

**Claude Code (all projects):** copy it to `~/.claude/skills/church-design/`.

**Other agents:** place the folder wherever your agent loads skills (Codex, Cursor, and others support the `SKILL.md` format).

## Use

Just ask. The skill triggers on church design work:

- "Set up the church design skill for Grace Fellowship" → runs **init** and writes `MINISTRY.md`
- "Design a plan-a-visit page" → **design**
- "Refresh our WordPress site's homepage" → **refresh**
- "Audit our homepage" → **audit**

## Contributing

Issues are welcome for bugs, questions, and ideas, such as new direction examples, module patterns, or accessibility improvements. This project doesn't accept outside pull requests; changes are made by the maintainer. Please share only original work or openly licensed material in issues, and no screenshots or assets from other churches' sites.

## License

MIT. See `LICENSE`.
