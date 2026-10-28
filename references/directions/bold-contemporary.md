# Bold Contemporary

**Fits:** Large and multisite churches, church plants with strong photo and video, audiences 18 to 45. Needs good photography.

**Feel:** Confident, clean, and simple. Huge headlines, lots of white space, almost no decoration. The photos and the words carry everything.

## Signatures

- Very large, heavy geometric or grotesque sans headlines (weight 800 to 900), sentence case, tight tracking.
- Black and white base with one strong accent used rarely.
- Solid black pill buttons on light backgrounds; white outline pills on photos.
- Full-bleed photo hero with a soft dark gradient (stronger on the text side) and left-aligned white type.
- A practical action inside the hero: "Find a location" select, "Plan your visit," or service times.
- Split sections: text left, video or photo right, generous padding.

## Tokens (starting point)

```css
--font-display: "Inter Tight", system-ui, sans-serif; /* 800 */
--font-body: "Inter", system-ui, sans-serif;          /* 400–500 */
--color-ink: #111111;
--color-ink-muted: #5c5c5c;
--color-surface: #ffffff;
--color-surface-alt: #f5f5f4;
--color-primary: #111111;     /* buttons */
--color-accent: #1d4ed8;      /* swap for the church's brand color */
--radius-sm: 8px; --radius-md: 16px; --radius-lg: 24px; --radius-pill: 999px;
--scale-ratio: 1.333;
```

Alternatives: "Figtree", "Manrope", "Plus Jakarta Sans" (check its punctuation spacing at 800 before using it for big headlines).

- **Overlay:** linear gradient from `rgb(0 0 0 / .65)` on the text side to `rgb(0 0 0 / .15)`.
- **Buttons:** pill, 48px tall minimum, 600 weight, sentence case.

## Custom details

This direction is made by scale and restraint, not ornament. Use these instead of editorial devices (no leaf corners, no italic accent words, no serif text links):

- **Type as the image.** The hero headline runs very large (about 7 to 9vw on desktop, 3 to 5 lines), tight tracking, solid white or black. One oversized word can act as a section divider ("welcome." at 15vw, cropped by the section edge).
- **Video-first hero.** A muted, looping clip of the church on a Sunday (8 to 15 seconds), with a poster image and a visible pause button, under a two-stop black gradient. A full-bleed photo is the fallback.
- **Service times as a statement.** Times set large and plain ("Sundays 9 & 11"), in the hero or in a black band right below it, with the address and a location finder for multisite churches.
- **Photo bento.** An asymmetric grid of 4 or 5 photos at different sizes with tight 8 to 12px gaps and one shared small radius. Strong, candid photos only.
- **Hard contrast bands.** Alternate pure white and near-black sections; no tinted mid-tones. Hairline rules (1px, 10% opacity) instead of cards.
- **Motion with purpose.** One moment: headline lines rise in on load, or the arrow in a black pill slides on hover. Respect reduced motion.
- **Hairline index.** Ministries and events as rows split by 1px rules: a heavy name, one line of detail, a circular outline arrow.
- **Typographic series art.** When there is no sermon thumbnail, set the series title huge on a plain panel rather than using a stock photo.
- **Photo shape:** crisp rectangles with one small radius (8 to 12px), or none.

## Imagery

Wide, high-quality photos of the building exterior at golden hour, crowded lobbies, and candid moments. Video embeds feel at home here.

**Icons:** the church's mark in the logo and one watermark; functional icons from Lucide or Phosphor Bold at a 2px stroke.

## Misses to avoid

- Headlines this heavy need short copy: keep hero headlines under about 8 words.
- Without strong photos, this direction looks empty. Pick another direction if photos are thin.
- Do not add a second accent color "for energy." Contrast comes from scale, not color.
- Bright accents (orange, electric blue) often fail as focus rings over photos. Use white or ink focus rings there.
