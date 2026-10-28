# design: build new pages, sections, or components

## Before you start

1. Read `MINISTRY.md`. If missing, run `commands/init.md` (or, for a one-off component, ask which direction).
2. Read `references/foundations.md` and the chosen `references/directions/<direction>.md`.
3. Read `references/page-types.md` for the page you are building (its job, hero, section order, and depth), and `references/modules.md` for its sections.
4. Read `references/accessibility.md`, `references/anti-patterns.md`, and `references/iconography.md`. They are short and apply to every build.
5. Check fit: if the chosen direction depends on photos and the church has few, say so to the user and use the direction's "few photos" fallback (type, line art, color cards) instead of filling the page with photo placeholders.

## Steps

1. **Name the visitor and the next step.** For each page, write one line: who lands here, and what single action you want them to take. Design toward that action.
2. **Set tokens first.** Define the brand constants as tokens (CSS custom properties, Tailwind theme, or `theme.json`, per `references/platforms.md`) before writing components. No raw hex values or one-off font sizes inside components.
3. **Build with modules.** Compose pages from the modules in `references/modules.md`, styled per the direction file. Keep the section rhythm (eyebrow, headline, body, action) consistent.
4. **Write real copy.** Follow `references/writing.md`. Use facts from `MINISTRY.md`. Where facts are missing, use clearly marked placeholders like `[Service time]`, never invented details.
   - **A whole section with no facts** (no events yet, no sermon archive): do not ship a grid of bracketed cards. Either omit the section and tell the user, or show a small honest version ("Events are posted here each month. Email us to hear first."). Ask which they prefer when you can.
   - Placeholders must stay visible on every background: on `surface-alt` sections, draw placeholder blocks in `surface` with a dashed `ink-muted` border.
5. **Handle imagery.** Follow `references/imagery.md`. If no photos are provided, use labeled placeholder blocks that describe the photo needed ("Greeters at the front door, morning light"). Do not hotlink other churches' images.
6. **Design mobile first.** Most church traffic is on phones. Check every section at 375px wide before finishing.

## Page defaults

Follow `references/page-types.md`. In short:

- **Homepage:** a front door, not a directory. It introduces and points; inner pages explain. Use 6 to 8 sections, each with one idea and one primary link deeper: full-bleed hero with the direction's when-and-where element (service card, times bar, or times band) → first Sunday promises → Scripture or mission moment (optional) → find your place index → latest message → coming up (up to 3) → one community or mission feature (optional) → give and prayer → footer. Keep each section's body copy under about 40 words.
- **Inner pages** use a shorter hero and carry the depth: the full Sunday Q&A lives on Plan a Visit, the full archive on Sermons, every ministry on the Ministries index.
- Brand constants, spacing, icons, header, and footer are identical on every page.

## Finish

Run the checklist in `commands/audit.md` (the quick version) on your own output before delivering. Report the direction, the brand constants, any rule you could not meet, and the placeholders to replace.
