# Foundations

Shared rules for every direction. Direction files set the values; this file sets the structure.

## Brand constants (the cohesion contract)

Lock these once per site and record them in `MINISTRY.md`. Every page and every ministry uses them.

| Constant | Rule |
|---|---|
| **Typefaces** | One or two families. A third is allowed only for a logo wordmark that is never set as text. |
| **Color roles** | `ink`, `ink-muted`, `surface`, `surface-alt`, `primary`, `accent`, plus optional `support` and `season`. Ministries may add one `ministry` color each, used only on that ministry's cards and hero. |
| **Radius family** | One base radius plus derived sizes (for example 8 / 16 / 24 / pill). Do not mix sharp and rounded cards on one site. |
| **Button shape** | One shape sitewide (pill, rounded, or square). Two styles: solid and outline. A text link with arrow is the third tier. |
| **Overlay treatment** | One way to put text on photos: dark gradient scrim, full-color tint, or solid panel. Pick one. Text must sit only where the overlay is strong enough to pass contrast over a white photo (see "Text on photos" below). |
| **Section rhythm** | Eyebrow (optional), headline, body, action. Same order and spacing in every section. |

**Ministry sub-brands live inside the constants.** A youth ministry may get its own color, a watermark mark, and bolder photography, but it keeps the site's fonts, radius, button shape, and overlay style. This is what makes a large site feel like one church.

## Typography

**Body:** 18px minimum (1.125rem). Use 20px (1.25rem) when the audience skews older; record the choice in `MINISTRY.md`. Line-height 1.5 to 1.7. Measure 60 to 75 characters (`max-width: 65ch`).

**Scale:** Use a modular scale. Default ratio 1.25 (major third) for calm directions, 1.333 (perfect fourth) for bold ones. Use `clamp()` for fluid heading sizes.

| Token | 18px base | 20px base | Use |
|---|---|---|---|
| `--text-sm` | 0.875rem | 0.9375rem | Letterspaced eyebrows and captions only. Never body, buttons, or links. |
| `--text-ui` | 1rem | 1.0625rem | Buttons, nav, form labels, small links. 16px is the floor for anything people tap. |
| `--text-base` | 1.125rem | 1.25rem | Body |
| `--text-lg` | 1.375rem | 1.5rem | Lead paragraphs, card titles |
| `--text-xl` | clamp(1.5rem, 1.2rem + 1.2vw, 1.75rem) | clamp(1.625rem, 1.3rem + 1.3vw, 1.875rem) | h4 |
| `--text-2xl` | clamp(1.875rem, 1.4rem + 2vw, 2.25rem) | clamp(2rem, 1.5rem + 2.2vw, 2.5rem) | h3 |
| `--text-3xl` | clamp(2.25rem, 1.5rem + 3.2vw, 3rem) | clamp(2.5rem, 1.6rem + 3.5vw, 3.25rem) | h2 |
| `--text-4xl` | clamp(2.75rem, 1.6rem + 5vw, 4.5rem) | clamp(3rem, 1.8rem + 5vw, 4.75rem) | h1, hero |

**Headlines:** tight line-height (1.0 to 1.15), slight negative tracking for heavy sans (-0.01 to -0.03em), none for serifs. At display sizes, check the gaps between words: heavy faces with tight tracking can run words together, so add a little `word-spacing` (about 0.05 to 0.08em) or ease the tracking. Check punctuation too; some faces space apostrophes and commas badly at 800 and up, so test the real headline before choosing a font.

**Logo lockups:** text inside the logo (a small "Bible Fellowship" line under the name) is part of the logo, not body text. It may be smaller than the type scale, but keep it at least 11px, and give the logo link an accessible name.

**All-caps:** eyebrows and labels (one line, about five words), buttons (three words or fewer), and, in Classic Confident and Traditional/Liturgical only, short headings of about six words or fewer, up to two lines at desktop width. Add 0.06 to 0.14em letter-spacing. Never paragraphs, never body text, never more than two lines on a phone.

**Pairings:** Each direction file names open-license Google Fonts so the skill can be used and shared freely. If the church owns a licensed brand font, map it to the same role.

## Color

- Build a neutral ramp for `ink` and `surface` first, then add `primary` and `accent`.
- `accent` is for actions and highlights. Keep it under roughly 10% of any screen.
- `support` (optional) is a quiet supporting color for panels, illustration backgrounds, and section breaks, such as Warm Editorial's taupe or Traditional's slate. It never marks actions, so it does not compete with the single accent.
- Pair every fill color with an `on-` color for text on it (`--color-on-accent`, `--color-on-support`) and check the pair.
- Never put body text in `accent` unless it passes 4.5:1.
- Dark sections are allowed; keep at most one dark section between light ones on long pages so the page breathes.
- Every text and background pair must pass WCAG AA. Check with `scripts/contrast.py`.

**Seasonal accent (optional, mainly for liturgical churches):** a `--color-season` token that changes with the church year (see `directions/traditional-liturgical.md`). It replaces `accent` only in small places: a rule, an eyebrow, an icon, a calendar badge. It never changes the base palette.

## Text on photos

Assume the worst photo: a bright white area right behind the text.

- **Scrim:** the text block must sit entirely in the zone where the scrim is at least about 0.65 black (or the dark ink color). Anchor the gradient to the text, not to the card: put the darkest stop where the text is and let it fade away from the text.
- **Tint:** either an even tint that passes on its own over white (navy at 0.82, for example), or a **directional tint** that is at least that strong behind the text and eases to about 0.5 away from it, so the photo still reads. An even 0.85 tint over a whole hero turns the photo to murk; on wide screens, prefer the directional version and check only the text zone. On phones, where text spans the width, use the even tint.
- **Panel:** text on a solid panel always works and is the safest choice for older audiences.

Check with `scripts/contrast.py "#ffffff" "#0a0e19@0.72"`, which composites the overlay over white.

## Spacing and layout

- 4px base unit. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section padding: 64 to 96px vertical on desktop, 48 to 64px on mobile.
- Content width: about 1120 to 1200px max for layouts, 65ch for reading text. Wide margins read as calm and premium; edge-to-edge content reads as cramped.
- Side gutter: fluid, about `clamp(20px, 6vw, 112px)`. On a 1440px screen content should fill roughly 75 to 80% of the width; on a 1920px screen, roughly 60%.
- Full-bleed elements (hero, dark bands) span the viewport while their content stays in the container. Light-colored section panels can be **inset** from the viewport edges by about 1.5vw with large rounded corners, so they read as placed objects.
- Design and check at 1920, 1440, 1024, and 375px. Many pastors and staff view on large monitors; many visitors view on phones.
- Grid: 12 columns desktop, 4 columns mobile, 24px gutters (16px mobile).
- Text on the left of a split section reads best; alternate sides down a page only when each section has its own photo.

### White space

Space is what makes a church site feel calm and cared for instead of cramped. Be generous, especially on the homepage.

- **Section padding:** about 80 to 150px top and bottom on desktop (`clamp(5rem, 2.5rem + 7vw, 9.5rem)`), 64 to 80px on phones.
- **Column gaps:** 64 to 128px between the two halves of a split section; 24 to 48px between items in a row.
- **Inside a section:** eyebrow → 24px → headline → 24 to 32px → body → 32 to 40px → action. Never crowd an action against the text above it.
- **One idea per section.** If a section needs a second heading, it is two sections, or the second half belongs on an inner page.
- **Density limits on the homepage:** at most 3 events, 5 ministry links, 3 "what to expect" points, 1 sermon, and about 40 words of body copy per section.
- **When it feels crowded, remove before you resize.** Cut an item, move detail to an inner page, or drop a section before shrinking type or padding.

### Avoid the template look

Generic layouts make a church look like every other site built on the same theme. The principles hold in every direction:

- Replace plain card grids with indexes, rows, or lists that have character.
- Number only real sequences, and make the numbers part of the design.
- Give photos one signature shape or treatment, used sitewide.
- Let one element bridge two sections (a card, a times bar, a cropped word).
- Reach for type devices before icons.
- Use one recurring detail that comes from the church's mark or name.

Each direction file's **Custom details** list says how it does these; use that set, not another direction's. The devices below are the editorial versions, for Warm Editorial and Traditional / Liturgical:

- **Editorial index lists** instead of card grids for ministries or next steps: large serif names, a one-line description, thin rules between rows, a circular arrow that fills on hover.
- **Numbered promises** (`01 02 03` in the accent italic) for "what to expect" points.
- **Offset color frames** behind a key photo, or two overlapping photos at different sizes.
- **Typographic event lists:** a heavy top rule, a large date numeral, the title, one line of detail. No boxes.
- **Serif text links** with a drawn underline and arrow for secondary actions, so not every action is a button.
- **One italic accent word** in a headline, in the accent color. Use it once or twice per page, no more, or it becomes a gimmick.
- **Small ornament rules** (thin line, small cross or mark, thin line) above Scripture or statements.
- **A signature photo shape.** Give photos one recognizable shape used across the site, for example "leaf" corners: a large radius on two opposite corners and a small one on the other two (`border-radius: 150px 14px 150px 14px`, scaled with the viewport). Mirror it on a second photo. Record the shape in the brand constants.
- **Overlapping photos with a ring.** A smaller photo overlaps the corner of a larger one, with a soft shadow and a border in the section's background color so it reads as layered.
- **Floating cards that bridge sections**, such as the service card overlapping the bottom of the hero.
- **Eyebrows with a rule:** a short accent rule before wide-tracked caps (about 0.2em). Save the church's mark for a few meaningful placements (see `iconography.md`).
- **Photos that respond:** beside a ministry index, a single photo can change to match the row being hovered or focused. Never put information only in the hover state: on touch screens (`@media (hover: none)`) show one fixed photo or hide it, and keep every row a plain link.

Keep text clear of shaped corners: labels and buttons on a photo go in a corner with a small radius.

Cards are fine when the content really is a set of comparable things (campuses, sermon series), and even then they should be styled with photos, color, or a watermark. A repeated plain white box with a heading, a paragraph, and a button is never the default.

### Balance in split sections

Two-column sections must feel balanced: both columns should end at roughly the same height.

- **Measure it.** If one column is more than about 1.25 times the height of the other, restructure.
- **Keep the intro beside the media; move lists below.** The eyebrow, headline, lead, and actions sit beside the photo or video. FAQs, schedules, resource links, and other lists go in a full-width row beneath, as a 2 or 3 column card grid. Never stack five FAQs next to one photo.
- **Center, don't top-align.** Use `align-items: center` for intro-plus-media rows so short content does not leave a hole at the bottom.
- **Size media to the text.** Choose the photo's aspect ratio so its height matches the text block (5:4 or 4:3 beside a short intro; 4:5 beside a taller one).
- **Fill collages completely.** Every cell of a photo collage is filled; staggered edges are fine, empty corners are not.
- **Short lists may sit beside media.** Up to three short items (a line or two each) can stay in the intro column; anything longer moves below.
- **Stack rather than force it at tablet widths.** If a split cannot balance between about 900 and 1280px, stack it to one column at that width instead of shrinking type or hiding content.
- **Stack in reading order on phones.** Text first, then media, then the card row, unless the media is the point of the section.

## Radius

Pick one family per direction, for example:

- Soft: 12 / 20 / 28 / pill
- Medium: 8 / 16 / 24 / pill
- Crisp: 2 / 4 / 8 (no pill)

Images inside cards use the card radius. Photos in collages use the same radius as cards.

## Motion

- Subtle and purposeful: 150 to 250ms for UI, 400 to 600ms for reveals.
- Ease-out for entering, ease-in for leaving.
- Respect `prefers-reduced-motion`: disable parallax, auto-playing video, and carousel auto-advance.
- No motion on body text.

## Elevation

Prefer flat surfaces with color contrast over shadows. If you use shadows, use one soft shadow token for cards and one for menus. No hard drop shadows.
