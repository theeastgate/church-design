# refresh: redesign an existing church site

A refresh keeps what the church has earned (name recognition, logo, content, URLs, platform) and fixes how it looks and works.

## 1. Read the current site

- Inventory: pages, navigation, logo, colors, fonts, imagery, service-times and address placement, giving path.
- Identify the platform. For WordPress, note whether it is a **block theme** (has `theme.json` and templates), a **classic theme**, or a **page builder** (Elementor, Divi, Beaver Builder, etc.). This decides where changes go (see `references/platforms.md`).
- Run the full audit in `commands/audit.md` and keep the findings.

## 2. Decide what stays

Ask the user (or infer and state your assumptions):

- Logo and brand colors: keep, refine, or replace?
- Content: keep as is, or rewrite for visitors?
- Platform and theme: stay on it, or migrate?

Default: keep the logo, keep the platform, keep URLs, refine colors only as needed for contrast, rewrite only headlines and button labels.

## 3. Choose the direction

If `MINISTRY.md` exists, use it. Otherwise run `commands/init.md`, seeded with what you found in step 1. Show the user the current site's problems and two candidate directions.

## 4. Apply in layers

Change in this order so each layer is reviewable on its own:

1. **Tokens:** colors, type, spacing, radius as variables (`theme.json` for block themes; a CSS variables layer for classic themes and page builders).
2. **Global elements:** header, navigation, footer, buttons.
3. **Homepage.**
4. **Template pages:** sermon, event, ministry, give, plan a visit.
5. **Copy:** headlines, button labels, jargon fixes (see `references/writing.md`).

## 5. Protect what works

- Do not change URLs or slugs without a redirect plan.
- Do not remove content the church may need (statements of faith, policies, staff) without asking.
- Keep embeds working (giving platforms, ChMS forms, sermon players, livestream).

## Finish

Re-run the audit and give a short before/after list of what was fixed.
