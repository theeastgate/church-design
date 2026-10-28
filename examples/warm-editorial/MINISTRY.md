# MINISTRY.md

Design context for this church's site. Created by the church-design skill (`init`). Every design, refresh, and audit reads this file. Mark unknowns as TODO.

> Riverbend Bible Church and Millbrook are fictional. This file backs a public demo of the Warm Editorial direction.

## Church

- **Name:** Riverbend Bible Church
- **City / neighborhood:** Millbrook
- **Tradition:** Non-denominational Bible church
- **Primary audience:** Families and adults of all ages; the guest we most want to welcome is a young family new to town
- **Bible translation:** NKJV
- **Platform:** Plain HTML/CSS (tokens as CSS custom properties on `:root`)

## Facts (never invent these)

- **Service times:** Sundays at 9:00 AM and 10:45 AM, about 75 minutes each
- **Address and entrance notes:** 412 Mill Street, Millbrook. Enter through the glass doors facing the main parking lot.
- **Giving URL:** https://example.org/give
- **Phone / email:** Phone TODO / hello@example.org
- **Campuses:** One (not multisite)
- **Ministries:** Riverbend Kids (birth to 5th grade), Students (6th to 12th grade), Young Adults (18 to 29), Small Groups, Women's Bible Study, Men's Breakfast
- **Latest sermon:** "When Peace Seems Far Away," series *Psalms for Real Life*, Pastor Daniel Reyes, October 25, 2026. Pull quote: "Peace is not the absence of storms; it is the presence of the Shepherd." Passage: TODO. Video URL: TODO.
- **Upcoming events:** Fall Family Night, Fri Nov 6, 6:00 PM, Fellowship Hall · Community Food Drive, Sat Nov 14, 9:00 AM to noon (location TODO) · Thanksgiving Eve Service, Wed Nov 25, 7:00 PM
- **Homepage Scripture:** "Come to Me, all you who labor and are heavy laden, and I will give you rest." (Matthew 11:28 NKJV)
- **Unknown, do not state until confirmed:** music style, what people wear, kids check-in process, social accounts, statement of faith, pastor photo

## Direction

- **Direction:** warm-editorial
- **Borrowed element (optional, max one):** none
- **Why:** A Bible church with a teaching emphasis and an all-ages audience is the direction's stated fit. Photo supply is moderate: eight free-license stock photos stand in for the church's own, and there is no usable kids photo, so the Kids slot uses the direction's line-art fallback instead of a placeholder. Replace the stock with the congregation's own photos as soon as they exist.

## Brand constants

| Constant | Value |
|---|---|
| Display font | Fraunces 400 and 500, roman and italic, optical size on (Google Fonts, OFL) |
| Body font | Figtree 400, 500, 600 (Google Fonts, OFL) |
| Body size | 18px (1.125rem), line-height 1.6, measure 65ch |
| Ink / ink-muted | `#1b2a41` deep river navy / `#535966` |
| Surface / surface-alt | `#fbf8f3` warm white / `#f2ece2` sand |
| Primary | `#1b2a41` (the one dark band), text on it `#fbf5e6` cream |
| Accent | `#1e6a6e` river teal: buttons, links, eyebrows, rules. On dark grounds only, the same hue lightened to `#cfe7e2` |
| Support (optional) | `#5f6450` olive-taupe for line-art panels, text on it `#fbf5e6` cream. Never used for actions |
| Seasonal accent | none |
| Radius family | 12 / 20 / 28 / pill |
| Button shape | Pill, 48px tall. Solid (accent, or cream on photos and dark) and outline (ink, or white on photos and dark). Third tier: Fraunces italic text link with a drawn underline and arrow |
| Overlay treatment | Bottom scrim anchored to the text block: navy-black `rgb(13 20 34)` at 0.80 to 0.74 behind all text, fading to 0 above it. A 0.62 top scrim keeps the transparent header's white nav legible |
| Photo grade | Warm natural: `saturate(0.94) sepia(0.08) contrast(1.02)` on every photo |
| Photo shape | Leaf corners: `clamp(56px, 2rem + 7vw, 150px)` top-left and bottom-right, 12px on the other two; a mirrored leaf for the overlapping second photo, which gets an 8px ring in the section color |
| Church mark | `mark.svg` (original: a river bending toward the horizon inside a ring, breaking the ring as it opens toward the viewer). Inlined once as `<symbol id="mark">` with `currentColor`. Used in: header and footer logo, the ornament between thin rules above Scripture, a 6% cream watermark on the dark give band, and the favicon |
| Functional icon set | Phosphor Light (MIT): arrow-right, map-pin, play, list, x. Inline SVG, `currentColor` |

Section rhythm: eyebrow (32px by 1.5px accent rule, then 14px caps tracked 0.2em) → 24px → serif headline → 24 to 32px → body → 32 to 40px → action. Section padding `clamp(5rem, 2.5rem + 7vw, 9.5rem)`; container 1140px; gutter `clamp(20px, 6vw, 112px)`; light panels inset `max(8px, 1.5vw)` with 28px corners.

## Ministry colors (optional)

| Ministry | Color | White text contrast |
|---|---|---|
| none yet | Ministries use the site palette | n/a |

## Contrast results

`python3 scripts/contrast.py --pairs riverbend-pairs.txt` (pairs file lines: `<fg> <bg> <min ratio> <label>`). All pass.

```
  #1b2a41 on #fbf8f3          13.63:1  needs 4.5 (body) PASS  AAA  ink on surface
  #535966 on #fbf8f3           6.63:1  needs 4.5 (body) PASS  ink-muted on surface
  #1b2a41 on #f2ece2          12.29:1  needs 4.5 (body) PASS  AAA  ink on surface-alt
  #535966 on #f2ece2           5.98:1  needs 4.5 (body) PASS  ink-muted on surface-alt
  #1b2a41 on #ffffff          14.44:1  needs 4.5 (body) PASS  AAA  ink on white (service card)
  #535966 on #ffffff           7.03:1  needs 4.5 (body) PASS  AAA  ink-muted on white (service card)
  #ffffff on #1e6a6e           6.28:1  needs 4.5 (body) PASS  white on accent (solid button)
  #1e6a6e on #fbf8f3           5.93:1  needs 4.5 (body) PASS  accent eyebrows and links on surface
  #1e6a6e on #f2ece2           5.35:1  needs 4.5 (body) PASS  accent links on surface-alt
  #1e6a6e on #ffffff           6.28:1  needs 4.5 (body) PASS  accent link on white (service card)
  #1e6a6e on #fbf8f3           5.93:1  needs 3 (large/UI) PASS  accent focus ring, rules, circle arrows on surface
  #1b2a41 on #fbf8f3          13.63:1  needs 3 (large/UI) PASS  AAA  outline button border and heavy event rule
  #fbf5e6 on #5f6450           5.64:1  needs 4.5 (body) PASS  cream on support (line-art panel)
  #1b2a41 on #fbf5e6          13.28:1  needs 4.5 (body) PASS  AAA  ink on cream (cream button, Watch pill, captions)
  #fbf5e6 on #1b2a41          13.28:1  needs 4.5 (body) PASS  AAA  cream on ink (dark band text)
  #cfe7e2 on #1b2a41          11.13:1  needs 4.5 (body) PASS  AAA  accent-light eyebrows and inline link on dark band
  #cfe7e2 on #1b2a41          11.13:1  needs 3 (large/UI) PASS  AAA  accent-light focus ring on dark band
  #ffffff on #0d1422@0.74      7.97:1  needs 4.5 (body) PASS  AAA  white text in hero bottom scrim zone
  #cfe7e2 on #0d1422@0.74      6.14:1  needs 3 (large/UI) PASS  accent-light italic headline word in scrim zone
  #ffffff on #0d1422@0.74      7.97:1  needs 3 (large/UI) PASS  AAA  white outline button border in scrim zone
  #fbf5e6 on #0d1422@0.74      7.33:1  needs 3 (large/UI) PASS  AAA  cream button against scrim (UI)
  #ffffff on #0d1422@0.62      5.19:1  needs 4.5 (body) PASS  white nav text in hero top scrim (transparent header)
  #cfe7e2 on #0d1422@0.62      4.00:1  needs 3 (large/UI) PASS  focus ring on transparent header
```

## Words

- **Use:** Riverbend Kids, Students, Young Adults, Small Groups, Women's Bible Study, Men's Breakfast; "Plan your visit" as the one visitor action label; "Next Steps" for the ministries menu; "Give online"
- **Avoid or explain:** "Fellowship Hall" is kept because it is the room's real name; on the Plan a Visit page, say where it is from the main entrance. Avoid "doing life together" and "authentic community"

## Liturgical calendar (traditional-liturgical only)

- **Season colors used by this church:** n/a
