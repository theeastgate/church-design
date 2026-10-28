# Iconography

Icons are where many church sites start to look generic: the same small cross, dove, or praying-hands glyph next to every heading. Use this order of preference.

## 1. The church's own mark first

Most churches already have a logo mark (a monogram, symbol, or emblem). It is the most custom "icon" a site can have.

**Where it goes (pick three to five, not every place):**
- The header and footer logo
- One ornament between thin rules above Scripture or a mission statement
- A large watermark on one dark band, at about 4 to 8% opacity, bleeding off the edge
- The favicon and social share image
- Optionally, a loading or empty state

**Where it does not go:** beside every eyebrow or heading. Repeating the mark everywhere turns it back into a bullet point.

**Making it usable:**
- Ask for the SVG. If only a PNG exists, trace it to a vector (for example with potrace), check it at 24px and 200px, and simplify the path.
- Define it once as an SVG `<symbol>` with `fill="currentColor"` and reuse it with `<use href="#mark">`, so its color follows the section (teal on light, cream or gold on dark).
- Keep the mark's proportions. Do not outline, stretch, rotate, or add effects to it.

## 2. Typographic devices instead of decorative icons

For section labels and structure, type usually does the job better than an icon:
- A short rule before an eyebrow (`32px` by `1.5px`, in the accent color)
- Numerals for real sequences (`01`, or `i. ii. iii.` in italic)
- Wide-tracked small caps
- Thin rules between list rows

If an icon would only decorate a heading, leave it out.

## 3. One functional icon set

Use icons where they help people act or scan: arrows, play, map pin, calendar, clock, phone, email, search, menu, close, and social links. Choose **one** open-license set per site and use it everywhere:

| Set | License | Character | Good for |
|---|---|---|---|
| **Phosphor** | MIT | Six weights (thin, light, regular, bold, fill, duotone) | Any direction; light or thin for Warm Editorial and Traditional, bold or fill for Bold Contemporary and Playful |
| **Lucide** | ISC | Clean 2px stroke, rounded | Bold Contemporary, Ministry Hub |
| **Tabler Icons** | MIT | Large catalog, 2px stroke | Classic Confident, Ministry Hub |
| **Iconoir** | MIT | Thin, friendly stroke | Warm Editorial, Playful Modern |
| **Heroicons** | MIT | Outline and solid pairs | Bold Contemporary, app-like hubs |

**Rules:**
- Match the icon stroke to the type: light serifs pair with 1.25 to 1.5px strokes, heavy sans with 2 to 2.5px strokes or filled icons.
- Inline the SVGs you use (or use the set's WordPress or npm package). Avoid icon fonts: they blur, fail to load, and hurt accessibility.
- Icons inherit `currentColor`. Decorative icons get `aria-hidden="true"`; icon-only buttons get an accessible label.
- Size icons to the text beside them (about 1 to 1.25em), and keep tap targets at 44px even when the icon is small.
- Social icons are the platforms' own simple marks, drawn in one color, inside circular outline buttons.

## 4. Custom icons, when a church wants them

Ministries sometimes want their own symbols (kids, youth, groups, outreach). Draw them as a small family:
- A 24px grid with 2px padding, one stroke width matching the functional set, round caps and joins.
- Borrow one motif from the church's mark (a curve, a leaf, a circle) so the family feels related to the logo.
- Keep each icon to a few strokes, and test it at 20px.
- Use ministry icons as card watermarks or in ministry headers, not as bullets.
- If a ministry already has a logo, use that logo instead.

## Never

- Generic clip-art crosses, doves, flames, praying hands, or open-Bible glyphs as decoration
- Emoji as icons
- Mixing icon sets, or mixing outline and filled styles, on one site
- An icon beside every heading
- Icons that carry meaning on their own without a text label (except universal ones: play, close, menu, search, arrows)
