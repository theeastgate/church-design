# Classic Confident

**Fits:** Teaching-centered churches (Calvary Chapel, Bible church, many Baptist churches), churches with a strong pulpit ministry and broadcast. Audiences of all ages, often older. Needs a good set of sanctuary and building photos.

**Feel:** Steady, direct, trustworthy. Strong uppercase headlines, deep navy, a warm accent, and plain-spoken practical information.

## Signatures

- **Homepage hero:** full-bleed navy-tinted photo with an uppercase headline and a times bar attached to its lower edge (see Custom details).
- Geometric sans headlines in **uppercase**, bold (700), moderate letter-spacing (0.02 to 0.04em). Body in a neutral humanist sans, sentence case.
- **Full-color tint overlay:** photos washed in navy (multiply or 85% overlay) so white type always reads.
- One warm accent (terracotta, amber, rust) for primary actions and highlighted words ("View *Service Times*").
- Buttons with **small radius** (4 to 6px), uppercase labels, an arrow or icon. Solid white on navy, solid accent, or white outline.
- Sermon hero: a wide rounded panel with a dark photo, eyebrow ("ALL SERMONS · LATEST TEACHING"), title in caps, speaker name, then Play and Notes buttons.
- Location block written in plain words: cross streets, full address, "Get directions."

## Tokens (starting point)

```css
--font-display: "Montserrat", system-ui, sans-serif;  /* 700, uppercase */
--font-body: "Roboto", system-ui, sans-serif;         /* 400–500 */
--color-ink: #14213d;
--color-ink-muted: #5a6170;
--color-surface: #ffffff;
--color-surface-alt: #f3f5f8;
--color-primary: #24406e;      /* navy, also the overlay tint */
--color-accent: #a9573a;       /* terracotta; 5.1:1 with white, do not lighten */
--radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px;
--scale-ratio: 1.25;
```

Alternatives: display "Raleway" 700, "Archivo" 700; body "Inter", "Source Sans 3".

- **Overlay:** navy tint, `rgb(30 58 104 / .82)` over the photo. On wide heroes, ease it to about 0.5 on the side away from the text so the sanctuary still reads (see "Text on photos" in `foundations.md`).
- **Buttons:** 4 to 6px radius, 52px tall, uppercase 600 with 0.08em tracking (three words max).

## Custom details

This direction is made by clarity and steadiness: strong caps, deep navy, one warm accent, teaching front and center. Use these instead of editorial devices (no leaf corners, no italic accent words):

- **Homepage hero:** a full-bleed sanctuary, teaching, or building photo under the navy tint, a short uppercase headline with one word in the accent color, and a **times bar** attached to the hero's bottom edge: a full-width deep navy strip with service times, the address in plain words, and "Get directions."
- **Short accent bar** (about 40 by 3px) above section headings instead of an eyebrow rule.
- **Teaching first.** A latest-message hero panel (dark photo, eyebrow, caps title, speaker, Play and Notes) and a series grid with consistent artwork. Book-of-the-Bible chips ("ACTS", "JAMES") label series.
- **Verse band.** A full-width navy band with one verse in large sentence-case type and the reference in caps.
- **Duotone photos.** Secondary photos in a navy duotone so mixed photo quality reads as one set; keep one or two untinted for warmth.
- **Index rows with a ministry bar.** "Find your place" rows with caps names, one line of detail, a square outline arrow, and a 4px left bar in each ministry's color. The row fills with that color on hover.
- **Date tiles.** Events with a small navy square holding the month and day, the title in sentence case, and a ministry-color dot for the audience.
- **Plain-spoken practical blocks.** Cross streets, parking, entrances, and times set in clear rows with small 2px-stroke icons.
- **Photo shape:** crisp corners (4 to 8px) everywhere; no pills except tags.

## Imagery

Sanctuary wide shots, the pastor teaching, Bible and notes close-ups, the building exterior. Tint makes uneven photos feel consistent.

**Few photos?** One good building or sanctuary photo under the navy tint can carry the hero; use solid navy and white panels everywhere else rather than repeating the same photo.

**Icons:** the church's mark in the logo and footer; functional icons from Tabler or Lucide at a 2px stroke, in the accent color on buttons.

## Misses to avoid

- Uppercase headlines longer than about 6 words become hard to read. Shorten or switch that one to sentence case; event titles and other long labels can stay sentence case beside caps section headings.
- Warm accents lose contrast fast when lightened. Keep white-on-accent at 4.5:1 or better.
- Navy tint on every photo gets heavy; leave some photos untinted in cards and collages.
