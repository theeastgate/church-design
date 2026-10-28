# Imagery

## Priority order

1. **The church's own recent photos** of real people: greeters, families, kids, students, seniors, worship, baptisms, serving, the building.
2. **The church's own video** stills and clips.
3. **Illustration or type-led design** (line art, watermarks, color cards) when photos are thin.
4. **Stock, as a last resort,** chosen to look like the church's own photos (local setting, natural light, real ages).

## Never

- Stock "hands raised under stage lights," generic praying hands, sunrise over a cross, doves, open Bible with a coffee cup and a sunbeam.
- Photos taken from other churches' sites, their people, or their logos.
- Hotlinking images from sites that do not allow it. Licensed stock from Unsplash or Pexels may be hotlinked under their terms, with credit; self-host images for production sites.
- Children's photos without the church's photo-consent policy in place. For kids' ministry pages, favor shots where faces are not the focus.

## Direction

- **Candid over posed.** People looking at each other, laughing, serving, talking.
- **Every life stage.** Across a page, show kids, students, adults, and seniors. Visitors look for people like them.
- **One grade per site.** Pick a treatment (warm natural, soft film-like, or tinted) and apply it to every photo so different photographers' work feels unified.
- **Real context.** The church's front door, lobby, neighborhood, and city.
- **Check what's in the frame.** Worship and sermon photos often show screens, slides, or event banners. Make sure any readable text matches the content beside the photo (a different series title, a past event date, or a misspelled slide reads as an error). Crop it out or choose another photo.

## Treatments

- **Scrim:** gradient behind text, anchored to the text block so the text sits where the scrim is darkest (about 0.65 or more). See "Text on photos" in `foundations.md`.
- **Tint:** the whole photo washed in the primary color (Classic Confident).
- **Panel:** text on a solid panel beside the photo (Traditional, editorial splits).
- **Collage:** three or four rounded photos, staggered, same radius as cards.

Use only the overlay treatment recorded in the brand constants.

## Placeholders

When building without photos, use a neutral block with a dashed `ink-muted` border and a short label describing the photo needed, for example: "Photo: family checking in a child at kids' check-in." Use `surface-alt` for the block on `surface` sections and `surface` on `surface-alt` sections so it never disappears. On dark bands, use a transparent block with a dashed border in the light text color at about 40% opacity. Never leave an empty gray box, and never hotlink an image you do not have the right to use.

If most of a page would be placeholders, the direction is probably wrong for the church's current photo supply; see the direction's "few photos" guidance.

## Technical

- Serve modern formats (AVIF or WebP) with `srcset` and `sizes`.
- Hero images: about 2400px wide at most, compressed to roughly 300 KB or less.
- Always set `width` and `height` (or `aspect-ratio`) to avoid layout shift.
- Alt text describes what matters ("Two greeters smiling at the main entrance"), not "image" or the filename. Decorative images get `alt=""`.
