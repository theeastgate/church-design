# Playful Modern

**Fits:** Young, energetic, family-heavy churches; plants; churches with a fun, informal culture. Works with modest photography because type carries the design.

**Feel:** Joyful and handmade, but tidy. Big lowercase type, a hand-drawn mark here and there, one bright color.

## Signatures

- **Homepage hero:** this direction has two. The type-led hero (see Custom details) is its signature and fits most young churches. A full-bleed photo or muted video with the lowercase headline over a scrim is the skill's default and fits when the church has a great wide shot. Pick one with the church; either way, real photos are on the first screen.
- Very heavy geometric sans (800 to 900), **lowercase** headlines, very tight tracking (-0.04em), stacked lines with staggered indents.
- **Mixed outline and solid type** in one headline to emphasize a word ("a relationship *with Jesus*").
- **Hand-drawn accents:** a loose oval around a key word, a scribble underline, a small sparkle. One per screen.
- One bright accent (sky blue, sunny yellow, coral) plus black and white. Soft tint of the accent as a section background or gradient.
- Black location or ministry cards: photo on top, black base with white text, a large circular arrow button.
- Small outline pill buttons with an arrow ("about us →").

## Tokens (starting point)

```css
--font-display: "Poppins", system-ui, sans-serif;   /* 800–900 */
--font-body: "Poppins", system-ui, sans-serif;      /* 400–500 */
--color-ink: #0b0b0c;
--color-ink-muted: #555b63;
--color-surface: #ffffff;
--color-surface-alt: #dff1fb;   /* accent tint */
--color-primary: #0b0b0c;
--color-accent: #4fb3e8;        /* fills only, with black text; fails as text or icon on white */
--color-accent-ink: #1f78ad;    /* deeper sky for links and icons on white (4.8:1) */
--radius-sm: 12px; --radius-md: 20px; --radius-lg: 28px; --radius-pill: 999px;
--scale-ratio: 1.333;
```

Alternatives: "Outfit", "Lexend", "Sora". Hand-drawn marks are inline SVG strokes, not a script font.

- **Overlay:** none with the type-led hero (text sits beside photos); a black gradient scrim with the full-bleed hero; a solid black panel at the bottom of a card.
- **Buttons:** pill, 2px black outline, weight 600, lowercase allowed, arrow icon.

## Custom details

This direction is made by personality: big type, friendly shapes, one bright color. Use these instead of editorial devices (no serif text links, no thin ornament rules):

- **Type-led hero.** A giant lowercase headline (about 6 to 8vw) on white or the accent tint, with one outlined word and one hand-drawn oval or underline, beside a photo stack or carousel with visible controls. Pair it with a black info strip below (time, place, entrance, directions).
- **Sticker photos.** Photos with a thick white border and a slight rotation (-3 to 3 degrees), overlapping like a scrapbook, with a soft shadow. Two or three per section at most.
- **Capsule and squircle shapes.** The signature photo shape is a capsule (fully rounded ends) or a squircle; buttons are pills; cards have large radii.
- **Color blocks.** Sections alternate white and a soft tint of the accent; one section may use the full accent with black text.
- **Badges.** A circular "new here?" or "kids welcome!" badge in the accent, set at a slight angle near the hero action. Static, not spinning.
- **Big round arrow buttons** on location and ministry cards.
- **Date stickers.** Events get a round accent badge with the month and day.
- **Hand-drawn accents stay rare:** one per screen, drawn as inline SVG strokes.

## Imagery

Bright, sunny, smiling, people looking at each other or the camera. Signage and props ("we're glad you're here!") fit this direction.

**Icons:** the church's mark plus hand-drawn accents; functional icons from Phosphor Bold or Fill, or Iconoir, to match the heavy type.

## Misses to avoid

- Outline type fails contrast at small sizes. Use it only at 48px and up, with a 2px or heavier stroke, and never for the only copy of important words.
- Outline type drawn with `-webkit-text-stroke` alone shows the overlapping contours inside heavy glyphs. Give the text a solid fill in the background color and add `paint-order: stroke fill`, then check it in the real font.
- Light accent colors (sky, yellow) fail contrast with white text. Use black text on them.
- More than one hand-drawn accent per screen turns playful into messy.
- Keep lowercase to headlines and buttons; body copy stays in sentence case.
