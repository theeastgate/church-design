# Warm Editorial

**Fits:** Established evangelical, Bible, Baptist, and Reformed churches that want warmth, depth, and a teaching emphasis. Audiences of all ages. Works with moderate photography.

**Feel:** Like a well-designed magazine or book. Thoughtful, warm, and grounded. Serif headlines signal depth; a clean sans keeps it readable.

## Signatures

- **Homepage hero:** full-bleed photo of the congregation or lobby with a deep ink scrim, a large serif headline bottom-left (one italic word in the accent, or a light tint of it on dark photos), a cream solid button and a white outline button, and a floating white service card overlapping the hero's bottom edge.
- Serif display headlines (regular to semibold, not heavy) paired with a friendly sans for body and UI.
- Deep navy ink on warm off-white, with earthy supporting colors (taupe, olive, clay) and one clear blue or green accent.
- Rounded photo cards with the headline set over a bottom gradient, centered or bottom-left.
- **Photo collages:** three or four rounded photos at different sizes, staggered, next to a headline. Show every life stage: kids, students, adults, seniors.
- Fine **line-art illustration** (single-weight strokes in cream on an earthy panel) for capital campaigns, buildings, and abstract ideas.
- **Scripture block:** a circular quote mark, the verse in the serif, and the reference in the sans.
- Sermon feature: video beside the title and a pull quote from the message, with a thin rule beside the quote in the accent or the support color (a rule is not a second accent).
- **Editorial details that make it feel custom:** an offset color frame behind the hero photo, a ministry index with large serif names and circular arrows, numbered promises in italic accent numerals, typographic event lists with heavy top rules, serif text links with drawn underlines, a thin-rule ornament above Scripture, and one italic accent word per headline (at most two per page).
- **Space:** this direction depends on generous white space. Use the upper end of the section padding range and wide column gaps.

## Tokens (starting point)

```css
--font-display: "Fraunces", Georgia, serif;          /* 400–600, opsz on */
--font-body: "Figtree", system-ui, sans-serif;       /* 400–600 */
--color-ink: #1e2b4a;          /* navy */
--color-ink-muted: #545a66;
--color-surface: #fbf8f3;      /* warm white */
--color-surface-alt: #f1ece3;
--color-support: #6e6857;      /* taupe panels and line-art backgrounds */
--color-on-support: #fbf5e6;   /* cream */
--color-primary: #1e2b4a;
--color-accent: #2456c7;
--radius-sm: 12px; --radius-md: 20px; --radius-lg: 28px; --radius-pill: 999px;
--scale-ratio: 1.25;
```

Alternatives: display "Newsreader", "Source Serif 4", "Young Serif"; body "DM Sans", "Instrument Sans".

- **Overlay:** bottom gradient anchored to the text block: `rgb(10 14 25 / .78)` behind the text, fading to transparent above it. White serif text sits only in the dark zone.
- **Buttons:** pill. Solid accent for primary actions; outline navy for secondary; white outline on photos.

## Imagery

Candid, natural light, slightly warm grade. Mix tight portraits with group moments. Line art fills gaps where photos are weak.

**Few photos?** Lean on line-art panels in `support`, the Scripture block, and solid surface-alt cards; drop the collage until real photos exist rather than filling it with placeholders.

**Icons:** the church's mark in the logo, as the ornament above Scripture, and as a faint watermark on one dark band; functional icons from Phosphor Light or Iconoir at a 1.25 to 1.5px stroke. Eyebrows use a short accent rule, not an icon.

## Misses to avoid

- Heavy serif weights at large sizes look dated; stay at 400 to 600.
- Do not use the serif for buttons, labels, or long body text on screen.
- Earth tones are supporting colors. If everything is taupe, the page loses its warmth and reads as muddy.
