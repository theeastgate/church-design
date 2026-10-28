# MINISTRY.md

Design context for this church's site. Created by the church-design skill (`init`). Every design, refresh, and audit reads this file. Mark unknowns as TODO.

> St. Aidan's and Millbrook are fictional. This file belongs to a public demo of the skill.

## Church

- **Name:** St. Aidan's Anglican Church
- **City / neighborhood:** Millbrook
- **Tradition:** Anglican (liturgical; follows the church year)
- **Primary audience:** All ages, with many older members. The guest we most want to welcome: someone who has never attended a liturgical service and is unsure what to do.
- **Bible translation:** NKJV
- **Platform:** Plain HTML/CSS now; WordPress block theme later (move the tokens below into `theme.json` per `references/platforms.md`).

## Facts (never invent these)

- **Service times:**
  - Sunday 8:00 AM, Holy Eucharist (traditional language, spoken, about 45 minutes)
  - Sunday 10:30 AM, Holy Eucharist (contemporary language, organ and choir, about 70 minutes)
  - Wednesday 6:00 PM, Evening Prayer (about 30 minutes)
- **Address and entrance notes:** 18 Church Lane, Millbrook. Parking behind the parish hall. The accessible entrance is the side door on Elm Street.
- **Giving URL:** https://example.org/give
- **Phone / email:** Phone TODO / office@example.org
- **Campuses:** Single parish
- **Rector:** The Rev. Margaret Hale
- **Ministries:** Children's Chapel, Youth Group, Choir, Altar Guild, Food Pantry, Bible Study (meeting days, times, ages, and leaders: TODO)
- **This Sunday:** All Saints' Sunday, November 1, 2026. Appointed readings: TODO (do not invent).
- **Upcoming:** All Souls' Evening Prayer, Mon Nov 2, 6:00 PM; Food Pantry Saturday, Nov 7, 9:00 to 11:00 AM; Advent Lessons and Carols, Sun Nov 29, 4:00 PM.
- **Prayer requests:** who reads them and whether they stay private: TODO
- **Social accounts, sermon audio, bulletin/order of worship URL:** TODO

## Direction

- **Direction:** traditional-liturgical
- **Borrowed element (optional, max one):** none
- **Why:** Chosen by the parish, and it fits: an Anglican congregation that follows the church year, an older audience that needs calm, large type, and a photo supply that is mostly architecture and worship (the direction is built to carry itself on type and buildings). Fit note: the photos are licensed stock standing in for the parish's own; replace them with St. Aidan's people and building before launch, and add at least one photo of children or youth.

## Brand constants

| Constant | Value |
|---|---|
| Display font | EB Garamond 400/500, italic 400 (Google Fonts). Old-style numerals for dates. Letterspaced caps (0.1em) for short statement headings only. |
| Body font | Source Sans 3 400/600 (Google Fonts) |
| Body size | 20px (1.25rem), line-height 1.65, measure 65ch (older audience) |
| Ink / ink-muted | `#1c2230` / `#4d5360` |
| Surface / surface-alt | `#fbf9f4` (prayer-book paper) / `#ede8dd` (stone) |
| Primary | `#1c2230` (ink): solid buttons, header text |
| Accent | `#8c1c22` rubric red: eyebrow text, links, numerals, small rules |
| Support (optional) | `#3e5560` tidal slate (the North Sea off Lindisfarne), with `#ffffff` / `#dfe5e8` text. Panels only, never actions. |
| Seasonal accent | Follows the church year via `church-year.js` (`--color-season`): eyebrow rules, the season label, calendar tags. Feasts inside a season get their own gold badge. |
| Radius family | Crisp: 2 / 4 / 8px (no pill) |
| Button shape | Square-cornered (2px). Solid ink and outline ink; on dark bands, solid white and outline white. Sentence-case labels. |
| Overlay treatment | Uniform ink wash `rgb(20 24 33 / 0.68)` over the homepage hero only. Everywhere else text sits on solid panels beside photos. |
| Photo grade | Soft, slightly desaturated, film-like: `saturate(0.82) sepia(0.08) contrast(0.97)` |
| Photo shape | Romanesque arch: semicircular top, square foot, after the round arches of Lindisfarne Priory. Used on every photo except the full-bleed hero. |
| Church mark | `mark.svg`: a ringed Celtic high cross standing above two lines of tide, in a double-ring seal (St. Aidan, Lindisfarne). Inlined once as `<symbol id="mark">` with `currentColor`. Used in: header logo, footer logo, ornament between rules above Scripture, 6% watermark on the one dark band (Give), favicon. Not beside headings. |
| Functional icon set | Phosphor Light (MIT), inline SVG, about 1.2em: arrow-right, map-pin, car, wheelchair, envelope-simple, list, x |

## Ministry colors (optional)

| Ministry | Color | White text contrast |
|---|---|---|
| none yet | - | - |

## Contrast results

Pairs file:

```
# St. Aidan's: text pairs (4.5)
#1c2230 #fbf9f4 4.5 ink/surface
#4d5360 #fbf9f4 4.5 ink-muted/surface
#1c2230 #ede8dd 4.5 ink/surface-alt
#4d5360 #ede8dd 4.5 ink-muted/surface-alt
#8c1c22 #fbf9f4 4.5 accent (rubric red) labels and links on surface
#8c1c22 #ede8dd 4.5 accent on surface-alt
#fbf9f4 #1c2230 4.5 surface text on ink (buttons, footer)
#d6d9df #1c2230 4.5 on-dark-muted on ink (footer)
#ffffff #3e5560 4.5 white on support slate
#dfe5e8 #3e5560 4.5 on-support-muted on slate
#1c2230 #ffffff 4.5 ink on white button (on dark bands)
# seasons as small text on surface and surface-alt (4.5)
#2f5d3a #fbf9f4 4.5 season ordinary (green)
#2f5d3a #ede8dd 4.5 season ordinary on stone
#7a5c1a #fbf9f4 4.5 season feast (gold)
#7a5c1a #ede8dd 4.5 season feast on stone
#1f3a6e #fbf9f4 4.5 season advent (blue)
#8c3a5c #fbf9f4 4.5 season gaudete (rose)
#4b2a6b #fbf9f4 4.5 season lent (violet)
#a3201c #fbf9f4 4.5 season holy week / pentecost (red)
#a3201c #ede8dd 4.5 season red on stone
#111111 #fbf9f4 4.5 season good friday (black)
# text over the hero wash, worst case (bright photo under it)
#ffffff #141821@0.68 4.5 white text on hero wash
#d6d9df #141821@0.68 4.5 on-dark-muted on hero wash
# large text and UI (3)
#8c1c22 #fbf9f4 3 focus ring on surface
#ffffff #141821@0.68 3 focus ring on hero wash
#ffffff #3e5560 3 focus ring on slate
#4d5360 #ede8dd 3 dashed placeholder border on stone
#1c2230 #fbf9f4 3 outline button border on surface
```

`python3 scripts/contrast.py --pairs pairs.txt`:

```
  #1c2230 on #fbf9f4          15.11:1  needs 4.5 (body) PASS  AAA  ink/surface
  #4d5360 on #fbf9f4           7.33:1  needs 4.5 (body) PASS  AAA  ink-muted/surface
  #1c2230 on #ede8dd          13.01:1  needs 4.5 (body) PASS  AAA  ink/surface-alt
  #4d5360 on #ede8dd           6.31:1  needs 4.5 (body) PASS  ink-muted/surface-alt
  #8c1c22 on #fbf9f4           8.66:1  needs 4.5 (body) PASS  AAA  accent (rubric red) labels and links on surface
  #8c1c22 on #ede8dd           7.46:1  needs 4.5 (body) PASS  AAA  accent on surface-alt
  #fbf9f4 on #1c2230          15.11:1  needs 4.5 (body) PASS  AAA  surface text on ink (buttons, footer)
  #d6d9df on #1c2230          11.24:1  needs 4.5 (body) PASS  AAA  on-dark-muted on ink (footer)
  #ffffff on #3e5560           7.86:1  needs 4.5 (body) PASS  AAA  white on support slate
  #dfe5e8 on #3e5560           6.18:1  needs 4.5 (body) PASS  on-support-muted on slate
  #1c2230 on #ffffff          15.90:1  needs 4.5 (body) PASS  AAA  ink on white button (on dark bands)
  #2f5d3a on #fbf9f4           7.26:1  needs 4.5 (body) PASS  AAA  season ordinary (green)
  #2f5d3a on #ede8dd           6.26:1  needs 4.5 (body) PASS  season ordinary on stone
  #7a5c1a on #fbf9f4           5.92:1  needs 4.5 (body) PASS  season feast (gold)
  #7a5c1a on #ede8dd           5.10:1  needs 4.5 (body) PASS  season feast on stone
  #1f3a6e on #fbf9f4          10.57:1  needs 4.5 (body) PASS  AAA  season advent (blue)
  #8c3a5c on #fbf9f4           6.94:1  needs 4.5 (body) PASS  season gaudete (rose)
  #4b2a6b on #fbf9f4          10.83:1  needs 4.5 (body) PASS  AAA  season lent (violet)
  #a3201c on #fbf9f4           7.18:1  needs 4.5 (body) PASS  AAA  season holy week / pentecost (red)
  #a3201c on #ede8dd           6.18:1  needs 4.5 (body) PASS  season red on stone
  #111111 on #fbf9f4          17.95:1  needs 4.5 (body) PASS  AAA  season good friday (black)
  #ffffff on #141821@0.68      6.12:1  needs 4.5 (body) PASS  white text on hero wash
  #d6d9df on #141821@0.68      4.32:1  needs 4.5 (body) FAIL  on-dark-muted on hero wash
  #8c1c22 on #fbf9f4           8.66:1  needs 3 (large/UI) PASS  AAA  focus ring on surface
  #ffffff on #141821@0.68      6.12:1  needs 3 (large/UI) PASS  focus ring on hero wash
  #ffffff on #3e5560           7.86:1  needs 3 (large/UI) PASS  AAA  focus ring on slate
  #4d5360 on #ede8dd           6.31:1  needs 3 (large/UI) PASS  dashed placeholder border on stone
  #1c2230 on #fbf9f4          15.11:1  needs 3 (large/UI) PASS  AAA  outline button border on surface
```

One pair fails: the muted light gray (`#d6d9df`) on the hero wash, at 4.32:1. Decision: all hero text is pure white (6.12:1); `#d6d9df` is used only on solid ink.

## Words

- **Use:** Holy Eucharist (with a short note: "Holy Communion: Scripture, prayers, and the shared bread and wine"), Evening Prayer, the Rector (our parish priest), parish hall, Children's Chapel, "the 10:30 AM service"
- **Avoid or explain:** Rite I / Rite II (say "traditional language" / "contemporary language"), narthex (say "entrance"), nave, sacristy, lectionary ("the appointed readings"), "the 8:00" without "AM"

## Liturgical calendar (traditional-liturgical only)

- **Season colors used by this church:** skill defaults, pending the Rector's confirmation (TODO): Advent blue `#1f3a6e` (rose `#8c3a5c` on the third Sunday), Christmas, Epiphany and Easter gold `#7a5c1a` as the stand-in for white, Ordinary Time green `#2f5d3a`, Lent violet `#4b2a6b`, Holy Week and Pentecost red `#a3201c`, Good Friday black `#111111`.
- **Feasts shown with their own badge:** Trinity Sunday, the Transfiguration, All Saints', Christ the King (the script's list). All Saints' is kept on the Sunday (November 1 in 2026); set the "This Sunday" badge by hand when the feast is transferred.
