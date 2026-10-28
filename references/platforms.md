# Platforms

This skill is stack-agnostic. The brand constants are expressed as tokens, and tokens are written in whatever format the project uses. Templates live in `assets/`.

## Plain CSS (any stack)

Use `assets/tokens.template.css`. Define tokens on `:root`, reference them everywhere with `var(--…)`. Components never contain raw hex values or pixel font sizes.

## Tailwind CSS (v4)

Use `assets/tailwind-theme.template.css`. Tokens go in an `@theme` block, which generates utilities such as `bg-surface`, `text-ink`, `font-display`, and `rounded-card`.

- Prefer token utilities over arbitrary values (`text-ink`, not `text-[#1e2b4a]`).
- Extract repeated patterns (button, card, eyebrow) into components rather than long class strings copied across pages.
- For Tailwind v3 projects, put the same values in `theme.extend` in `tailwind.config.js`.

## WordPress

Identify the theme type first.

**Block themes (Full Site Editing):** use `assets/theme.template.json` as `theme.json`.
- Colors go in `settings.color.palette`, fonts in `settings.typography.fontFamilies` (with `fontFace` for self-hosted files), sizes in `settings.typography.fontSizes`, spacing in `settings.spacing.spacingSizes`.
- Global button, link, and heading styles go in `styles.elements`. Block-specific styles go in `styles.blocks`.
- Turn off custom colors and custom font sizes (`"custom": false`, `"customFontSize": false`) so editors stay inside the brand constants.
- Build modules as **block patterns** (`/patterns/*.php`) so church staff can insert a sermon feature or ministry card without breaking the design.
- WordPress turns each preset into a CSS variable (`--wp--preset--color--accent`), which custom CSS can reference.

**Classic themes:** add the CSS variables file to the child theme, enqueue it, and restyle templates against the variables. Do not edit a parent theme directly.

**Page builders (Elementor, Divi, Beaver Builder):** set the builder's global colors and global fonts to match the tokens, then add the CSS variables file for anything the globals do not cover. Save modules as reusable templates or global sections.

## Church platforms and embeds

Many church sites embed tools from church management and giving platforms (giving forms, event registration, group finders, sermon players). Style what you can through their theming options and keep the surrounding layout consistent with the brand constants. When an embed cannot be styled, frame it in a plain card so it does not clash.

## Fonts

All direction defaults are open-license Google Fonts. Self-host them when possible (performance and privacy), load only the weights used, and use `font-display: swap`.
