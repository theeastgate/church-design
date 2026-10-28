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

**Any agent, one command** (uses the open [skills CLI](https://github.com/vercel-labs/skills); works with Claude Code, Codex, Cursor, and others):

```bash
npx skills add joshblevins/church-design -g
```

Leave off `-g` to install into the current project only.

**Claude Code with git:**

```bash
# All projects
git clone https://github.com/joshblevins/church-design.git ~/.claude/skills/church-design

# One project (run from the project root)
git clone https://github.com/joshblevins/church-design.git .claude/skills/church-design
```

**Codex with git:** clone into `~/.agents/skills/church-design` (all projects) or `.agents/skills/church-design` (one project), then restart Codex.

**Or ask your agent:** "Install the skill at https://github.com/joshblevins/church-design globally."

**Update:** run `git pull` in the skill folder, or `npx skills update`.

## Getting started

Once installed, the skill loads on its own when you ask for church design work. You can also call it by name: `/church-design` in Claude Code.

### A new church site

1. **Set up the church.** "Use the church design skill to set up Grace Fellowship." Claude asks one short batch of questions (tradition, audience, logo and colors, Bible translation, photos, Sunday details for guests, platform) and skips anything you already answered.
2. **Pick a direction.** If you name one, Claude checks that it fits your tradition and photos. If not, it recommends two. Churches with many ministries are offered the Ministry Hub layer.
3. **Lock the brand.** Claude sets fonts, color roles, corners, buttons, photo overlay, and section rhythm, checks contrast, and writes it all to `MINISTRY.md` in your project root. Unknown facts are marked `TODO`, never invented.
4. **Design pages.** "Design our homepage." "Now the Plan a Visit page." Each page follows its page type and the same brand constants.
5. **Check it.** "Audit the homepage" reviews contrast, text size, the path to Give, balance, white space, and generic patterns at phone, tablet, and large-monitor widths.

### A site that already exists

1. **Point Claude at it.** "Refresh our WordPress theme's homepage with the church design skill." Claude reads the current pages, navigation, logo, colors, fonts, photos, and giving path. For WordPress it notes block theme, classic theme, or page builder, which decides where changes go. It runs a full audit first.
2. **Decide what stays.** By default it keeps your logo, platform, URLs, and content, adjusts colors only as far as contrast requires, and rewrites only headlines and button labels.
3. **Set up from what's there.** If there's no `MINISTRY.md`, Claude writes one from your existing brand and shows the current problems beside two candidate directions.
4. **Change in layers,** each reviewable on its own: tokens (`theme.json` or a CSS variables file), then header, footer, and buttons, then the homepage, then template pages, then copy.
5. **Protect what works.** No URL changes without redirects, no removed content without asking, and giving, sermon, and livestream embeds keep working. It finishes with a before-and-after list.

### After setup

`MINISTRY.md` is the source of truth. Come back weeks later and ask for an events page or a new ministry section, and it will match. When something changes (new times, a new ministry, a new direction), update that file or ask Claude to. One-off components work without setup; Claude asks which direction to use.

**Example prompts:**

- "Set up the church design skill for Grace Fellowship" → **init**
- "Design a plan-a-visit page" → **design**
- "Refresh our WordPress site's homepage" → **refresh**
- "Audit our homepage" → **audit**

## Contributing

Issues and pull requests are welcome, especially new direction examples, module patterns, and accessibility improvements. Please contribute only original work or openly licensed material; do not submit screenshots or assets from other churches' sites.

## License

MIT. See `LICENSE`.
