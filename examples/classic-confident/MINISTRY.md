# MINISTRY.md

Design context for this church's site. Created by the church-design skill (`init`). Every design, refresh, and audit reads this file. Mark unknowns as TODO.

> Cornerstone Bible Fellowship and Westfield are fictional. This file backs a public demo of the Classic Confident direction.

## Church

- **Name:** Cornerstone Bible Fellowship
- **City / neighborhood:** Westfield
- **Tradition:** Non-denominational Bible church; teaches verse by verse through whole books of the Bible
- **Primary audience:** All ages, with many older adults and families. The guest we most want to welcome: an older adult or a family looking for steady Bible teaching, who needs the practical details (times, parking, kids) in plain words
- **Bible translation:** NKJV
- **Platform:** Plain HTML/CSS now (tokens as CSS custom properties on `:root`). Later: a WordPress **classic** theme; move the `:root` token block into the child theme's stylesheet, enqueue it, and restyle templates against the variables (see `references/platforms.md`)

## Facts (never invent these)

- **Service times:** Sundays at 8:30 AM and 10:30 AM, about 75 minutes each. Wednesdays at 7:00 PM, midweek Bible study
- **Address and entrance notes:** 2100 Ridge Road, Westfield, between Oak Street and Highway 9. The main entrance faces the north parking lot; accessible parking is by the front doors
- **Giving URL:** https://example.org/give
- **Phone / email:** Phone TODO / office@example.org
- **Campuses:** One (not multisite)
- **Sunday details for guests:** Hymns and modern worship. Casual or dressy, whatever you are comfortable in. Kids ministry (Cornerstone Kids) for nursery through 5th grade at both Sunday services. Kids check-in process: TODO. Coffee and greeters on Sundays (Hospitality team); where coffee is served: TODO
- **Pastor:** Pastor Tom Becker (photo TODO)
- **Latest message:** "Faith That Works" (James 2:14-26), series *James: Faith in Action*, Pastor Tom Becker, October 25, 2026. Video URL, notes URL, and a pull quote: TODO
- **Upcoming events:** Men's Breakfast, Sat Nov 7, 8:00 AM · Food Bank Saturday, Sat Nov 14, 9:00 AM · Thanksgiving Eve Service, Wed Nov 25, 7:00 PM. Locations for the Saturday events: TODO
- **Homepage Scripture:** "But be doers of the word, and not hearers only, deceiving yourselves." (James 1:22 NKJV)
- **Ministry facts (confirmed for the Ministries page):** Cornerstone Kids: nursery through 5th grade, Sundays 8:30 and 10:30 AM · Youth (6th to 12th grade): Wednesdays 7:00 PM · Young Adults: ages 18 to 29 · Women's Bible Study: Tuesdays 9:30 AM and Thursdays 7:00 PM · Men's Fellowship: breakfast the first Saturday of each month, 8:00 AM · Life Groups: small groups in homes across Westfield, most weeknights · Prime Timers: our seniors' fellowship · Prayer Ministry: prayer team after each Sunday service · Grief Care: a 13-week support group · Food Bank Outreach: second Saturday of each month, 9:00 AM · Worship and Tech: serve on Sundays · Hospitality: greeters, coffee, and welcome team on Sundays
- **Unknown, do not state until confirmed:** phone, social accounts, kids check-in steps, meeting times for Young Adults and Prime Timers, Grief Care dates, which nights and homes each Life Group uses, leaders and contacts for every ministry, locations for the Saturday ministries, statement of faith, who reads prayer requests

## Direction

- **Direction:** classic-confident
- **Layer:** ministry-hub (active). The Ministries page (`ministries.html`) is the layer's main page. The homepage keeps the base direction; ministry colors appear there only as the hover fill on the "Find your place" rows and as event dots. Future ministry pages open with the ministry color, its mark small in the header, its name, who it is for, and when it meets
- **Borrowed element (optional, max one):** none
- **Why:** A verse-by-verse Bible church with an older, all-ages audience is the direction's stated fit: strong caps, deep navy, one warm accent, teaching front and center, and plain-spoken practical information. Photo supply is thin (eight free-license stock photos, none of children or students), which this direction tolerates because the navy tint and duotone make uneven photos read as one set, and solid navy panels carry the rest. Replace stock with the congregation's own photos, starting with families and kids

## Brand constants

| Constant | Value |
|---|---|
| Display font | Archivo 700 (Google Fonts, OFL), uppercase, width 108%, tracking 0.03em for headings; 600 at 0.08em for buttons, nav, and eyebrows. The Scripture band uses Archivo 500 in sentence case |
| Body font | Source Sans 3 400 and 600 (Google Fonts, OFL), sentence case |
| Body size | **20px** (1.25rem), line-height 1.6, measure 65ch. Older audience, so the 20px column of the type scale is used throughout |
| Ink / ink-muted | `#13213a` / `#525b69` |
| Surface / surface-alt | `#ffffff` / `#f3f1ec` "stone" (warm light gray, a nod to the name) |
| Primary | `#1c3559` Ridge navy (verse band, date tiles, tint base). Deep end of the ramp `#0f1c31` for the times bar and footer. Text on both: white; secondary text `#c3cad6` |
| Accent | `#a14a1f` kiln rust: solid buttons, links, accent bars, the one accent word. On dark grounds only, the same hue lightened to `#f2b88e`. Do not lighten `#a14a1f` further (white on it is 5.97:1) |
| Support (optional) | none |
| Seasonal accent | none |
| Radius family | Crisp: 2 / 4 / 8 (no pill). 2px chips and tags, 4px buttons and fields, 8px photos and panels |
| Button shape | Square-cornered (4px), 52px tall, uppercase Archivo 600, 0.08em tracking, three words or fewer, with a Tabler icon. Solid accent; outline (ink on light, white on dark and tint). Third tier: accent text link in caps with an arrow |
| Overlay treatment | Full-color navy tint: photo in grayscale under `rgb(22 43 74 / 0.84)` (`#162b4a@0.84`). The same tint everywhere text sits on a photo (hero, header over hero, sermon panel) |
| Photo grade | Two grades from one palette: (1) the navy tint above, for photos carrying text; (2) a navy-to-stone duotone (SVG filter, shadows `#1c3559`, highlights `#f3f1ec`) for secondary photos. One or two photos per page stay untinted for warmth (people greeting, laughing) |
| Photo shape | Crisp 8px corners on every photo and panel. No pills, no leaf corners |
| Church mark | `mark.svg` (original: a squared letter C laid in dressed stone, resting on a larger cornerstone). Inlined once as `<symbol id="mark">` with `currentColor`. Used in: header logo, footer logo, a 6% white watermark bleeding off the navy Scripture band (set `fill: currentColor` on the watermark; the symbol has no fill of its own and renders as a dark shape without it), the favicon, and on the Ministries page the cornerstone of the ministry wall. Never beside headings |
| Functional icon set | Tabler Icons (MIT), outline, 2px stroke, round caps: arrow-right, clock, calendar, map-pin, player-play, file-text, music, shirt, baby-carriage, mail, menu-2, x. Inline SVG, `currentColor`, `aria-hidden`; accent color beside text on light grounds |

**Section rhythm:** short accent bar (40 by 3px, accent; accent-light on dark) → 24px → uppercase headline (one line at desktop) → 24 to 32px → body (40 words or fewer on the homepage) → 32 to 40px → action. Optional eyebrow (caps, 0.14em, ink-muted) sits above the headline only in the hero and inside panels. Section padding `clamp(5rem, 2.5rem + 7vw, 9.5rem)`; container 1160px; gutter `clamp(20px, 6vw, 112px)`.

**Signature devices in use:** times bar attached to the hero; accent bar above headings; latest-message panel with a book chip ("JAMES"); verse band; duotone secondary photos; practical rows with 2px icons; date tiles for events.

## Ministry Hub: colors, marks, and groups

Final list for the ministry-hub layer. All twelve colors were checked with `scripts/contrast.py` and pass with white text, including where the 9% watermark sits behind the text, so **none needed adjusting**; the values are unchanged from init. Use a ministry's color only on its cards, its page hero, and as small dots or chips in event lists. Add a new ministry by choosing from this list, never by inventing a new color.

| Group | Ministry | Color | Token | White text | Mark (24px grid, 2px stroke) | Card on the Ministries page |
|---|---|---|---|---|---|---|
| Kids and Students | Cornerstone Kids (nursery to 5th grade) | `#17706f` teal | `--mc-kids` | 5.86:1 | Blocks: a small stone beside a large one | Feature, photo (untinted) |
| Kids and Students | Youth (6th to 12th grade) | `#5b3d91` violet | `--mc-youth` | 8.33:1 | Steps: three stones rising | Solid |
| Adults | Women's Bible Study | `#8e3560` berry | `--mc-women` | 7.42:1 | Pillar: capital, shaft, base (Psalm 144:12) | Feature, photo (untinted) |
| Adults | Life Groups | `#2e6a43` forest | `--mc-life-groups` | 6.44:1 | House: a stone home under one roof | Solid |
| Adults | Young Adults (18 to 29) | `#2b5a9e` cobalt | `--mc-young-adults` | 6.87:1 | Arch: three stones opening a way | Solid |
| Adults | Men's Fellowship | `#3e4c5e` slate | `--mc-men` | 8.75:1 | Table: a slab on two stones | Solid |
| Adults | Prime Timers (seniors) | `#7f501a` bronze | `--mc-prime-timers` | 6.85:1 | Cairn: stacked stones marking the road so far (1 Samuel 7:12) | Solid |
| Care | Prayer Ministry | `#3b3f86` indigo | `--mc-prayer` | 9.37:1 | Altar: one stone with prayer rising (Psalm 141:2) | Solid |
| Care | Grief Care | `#64476e` dusk | `--mc-grief` | 7.87:1 | Shelter: a small stone under a covering stone | Solid |
| Serve | Food Bank Outreach | `#596320` olive | `--mc-food-bank` | 6.50:1 | Bowl: a loaf-shaped stone over a bowl | Feature, photo (navy duotone) |
| Serve | Worship and Tech | `#1f4e6b` petrol | `--mc-worship-tech` | 8.90:1 | Sound: a stone speaker with two waves | Solid |
| Serve | Hospitality | `#9a2f3d` cranberry | `--mc-hospitality` | 7.37:1 | Cup: a stone mug | Solid |
| n/a | Everyone (churchwide events), the cornerstone | `#1c3559` primary | `--mc-everyone` | 12.33:1 | The church mark | n/a |

**Groups (in page order):** Kids and Students, Adults, Care, Serve. Group by who you are first, then by what you need or want to give. The hero's group bar lists every ministry under its group so a visitor can scan for a name and jump.

**Marks.** An original family drawn for this site, not clip art. Each is built from the dressed-stone block of the church mark (rounded 1-unit corners, visible mortar gaps), on a 24px grid with a 2px round stroke to match Tabler. Defined once as `<symbol id="m-<ministry>">` in `ministries.html` with `stroke="currentColor"`; copy the symbols to new pages unchanged. Uses: (1) a 9% white watermark bleeding off the bottom-right corner of each ministry card; (2) at full strength in white, carved into that ministry's stone in the Ministries hero wall, the way masons cut a mark into the stones they set; (3) small in each future ministry page header. Never as bullets, never beside headings, never at more than 12% as a watermark. If a ministry adopts its own logo, use the logo instead.

**Cards.** One shape for all twelve: ministry color panel, 8px corners, caps name as the card heading (eyebrow style), a short caps purpose line, a one-line description with who and when, and one action (caps text link with arrow; the whole panel is the tap target). One feature card per group (where a photo exists) puts a photo beside the color panel; text never sits on the photo, so no new overlay is introduced. Photos on feature cards follow the photo grade constant: untinted for warmth, or the navy duotone.

**Signature devices added by the layer:** the ministry wall (twelve colored stones laid on the navy cornerstone, which carries the church mark) in the Ministries hero; the group bar attached to the hero's lower edge in primary-deep, echoing the homepage times bar; the 1 Peter 2:5 verse band ("living stones").

## Contrast results

`python3 scripts/contrast.py --pairs cornerstone-pairs.txt` (pairs file lines: `<fg> <bg> <min ratio> <label>`; overlay pairs composite the tint over white, the worst case). All pass.

```
  #13213a on #ffffff          16.08:1  needs 4.5 (body) PASS  AAA  ink on surface
  #525b69 on #ffffff           6.86:1  needs 4.5 (body) PASS  ink-muted on surface
  #13213a on #f3f1ec          14.24:1  needs 4.5 (body) PASS  AAA  ink on surface-alt (stone)
  #525b69 on #f3f1ec           6.08:1  needs 4.5 (body) PASS  ink-muted on surface-alt (stone)
  #a14a1f on #ffffff           5.97:1  needs 4.5 (body) PASS  accent links and eyebrows on surface
  #a14a1f on #f3f1ec           5.29:1  needs 4.5 (body) PASS  accent links on surface-alt
  #ffffff on #a14a1f           5.97:1  needs 4.5 (body) PASS  white on accent (solid button)
  #13213a on #ffffff          16.08:1  needs 3 (large/UI) PASS  AAA  ink outline button border and focus on surface
  #a14a1f on #ffffff           5.97:1  needs 3 (large/UI) PASS  accent focus ring and accent bar on surface
  #a14a1f on #f3f1ec           5.29:1  needs 3 (large/UI) PASS  accent focus ring and accent bar on surface-alt
  #ffffff on #1c3559          12.33:1  needs 4.5 (body) PASS  AAA  white on primary navy (verse band, date tiles)
  #f2b88e on #1c3559           7.06:1  needs 4.5 (body) PASS  AAA  accent-light on primary (verse reference, month)
  #ffffff on #0f1c31          17.06:1  needs 4.5 (body) PASS  AAA  white on primary-deep (times bar, footer)
  #c3cad6 on #0f1c31          10.35:1  needs 4.5 (body) PASS  AAA  on-dark-muted on primary-deep (footer detail)
  #c3cad6 on #1c3559           7.48:1  needs 4.5 (body) PASS  AAA  on-dark-muted on primary (mobile menu detail)
  #f2b88e on #0f1c31           9.77:1  needs 4.5 (body) PASS  AAA  accent-light links on primary-deep
  #f2b88e on #0f1c31           9.77:1  needs 3 (large/UI) PASS  AAA  accent-light focus ring on primary-deep
  #ffffff on #0f1c31          17.06:1  needs 3 (large/UI) PASS  AAA  white outline button border on primary-deep
  #ffffff on #162b4a@0.84      8.59:1  needs 4.5 (body) PASS  AAA  white text on navy tint (hero, header over hero, sermon panel)
  #c3cad6 on #162b4a@0.84      5.21:1  needs 4.5 (body) PASS  on-dark-muted on navy tint (sermon meta)
  #f2b88e on #162b4a@0.84      4.92:1  needs 3 (large/UI) PASS  accent-light headline word on tint (large text)
  #f2b88e on #162b4a@0.84      4.92:1  needs 4.5 (body) PASS  accent-light eyebrow on tint
  #ffffff on #162b4a@0.84      8.59:1  needs 3 (large/UI) PASS  AAA  white outline button border and focus on tint
  #ffffff on #17706f           5.86:1  needs 4.5 (body) PASS  Cornerstone Kids teal
  #ffffff on #5b3d91           8.33:1  needs 4.5 (body) PASS  AAA  Youth violet
  #ffffff on #2b5a9e           6.87:1  needs 4.5 (body) PASS  Young Adults cobalt
  #ffffff on #8e3560           7.42:1  needs 4.5 (body) PASS  AAA  Women's Bible Study berry
  #ffffff on #3e4c5e           8.75:1  needs 4.5 (body) PASS  AAA  Men's Fellowship slate
  #ffffff on #2e6a43           6.44:1  needs 4.5 (body) PASS  Life Groups forest
  #ffffff on #7f501a           6.85:1  needs 4.5 (body) PASS  Prime Timers bronze
  #ffffff on #3b3f86           9.37:1  needs 4.5 (body) PASS  AAA  Prayer Ministry indigo
  #ffffff on #64476e           7.87:1  needs 4.5 (body) PASS  AAA  Grief Care dusk
  #ffffff on #596320           6.50:1  needs 4.5 (body) PASS  Food Bank Outreach olive
  #ffffff on #1f4e6b           8.90:1  needs 4.5 (body) PASS  AAA  Worship and Tech petrol
  #ffffff on #9a2f3d           7.37:1  needs 4.5 (body) PASS  AAA  Hospitality cranberry
  #17706f on #ffffff           5.86:1  needs 3 (large/UI) PASS  Kids dot on surface
  #596320 on #ffffff           6.50:1  needs 3 (large/UI) PASS  Food Bank dot on surface
  #3e4c5e on #ffffff           8.75:1  needs 3 (large/UI) PASS  AAA  Men's dot on surface
  #1c3559 on #ffffff          12.33:1  needs 3 (large/UI) PASS  AAA  Everyone (primary) dot on surface
```

Ministry Hub layer checks (`python3 scripts/contrast.py --pairs ministry-pairs.txt`, run for `ministries.html`; all pass, no color changed). Worst cases shown; every one of the twelve colors was also checked for its 3:1 edge on surface and surface-alt (lowest: teal on stone, 5.19:1).

```
  #ffffff on #ffffff@0.09/#17706f  4.85:1  needs 4.5 (body) PASS  Kids teal: white text over the 9% watermark (lowest of the twelve)
  #ffffff on #ffffff@0.09/#596320  5.25:1  needs 4.5 (body) PASS  Food Bank olive: white text over the watermark
  #ffffff on #ffffff@0.09/#2e6a43  5.26:1  needs 4.5 (body) PASS  Life Groups forest: white text over the watermark
  #ffffff on #ffffff@0.09/#7f501a  5.51:1  needs 4.5 (body) PASS  Prime Timers bronze: white text over the watermark
  #ffffff on #ffffff@0.09/#2b5a9e  5.55:1  needs 4.5 (body) PASS  Young Adults cobalt: white text over the watermark
  #ffffff on #ffffff@0.09/#8e3560  6.07:1  needs 4.5 (body) PASS  Women berry: white text over the watermark
  #ffffff on #ffffff@0.09/#9a2f3d  6.09:1  needs 4.5 (body) PASS  Hospitality cranberry: white text over the watermark
  #ffffff on #ffffff@0.09/#64476e  6.18:1  needs 4.5 (body) PASS  Grief dusk: white text over the watermark
  #ffffff on #ffffff@0.09/#5b3d91  6.61:1  needs 4.5 (body) PASS  Youth violet: white text over the watermark
  #ffffff on #ffffff@0.09/#3e4c5e  6.82:1  needs 4.5 (body) PASS  Men slate: white text over the watermark
  #ffffff on #ffffff@0.09/#1f4e6b  6.97:1  needs 4.5 (body) PASS  Worship and Tech petrol: white text over the watermark
  #ffffff on #ffffff@0.09/#3b3f86  7.31:1  needs 4.5 (body) PASS  AAA  Prayer indigo: white text over the watermark
  #17706f on #f3f1ec           5.19:1  needs 3 (large/UI) PASS  Kids teal: card and stone edge on surface-alt (lowest edge)
  #ffffff on #1c3559          12.33:1  needs 3 (large/UI) PASS  AAA  white church mark on the cornerstone
  #c3cad6 on #0f1c31          10.35:1  needs 4.5 (body) PASS  AAA  group bar ministry list on primary-deep
  #f2b88e on #0f1c31           9.77:1  needs 3 (large/UI) PASS  AAA  group bar arrow on primary-deep
  #ffffff on #ffffff@0.06/#1c3559 10.32:1  needs 4.5 (body) PASS  AAA  verse text over the 6% mark watermark
```

## Words

- **Use:** Cornerstone Kids, Youth, Young Adults, Women's Bible Study, Men's Fellowship, Life Groups, Prime Timers, Prayer Ministry, Grief Care, Food Bank Outreach, Worship and Tech, Hospitality. "Plan your visit" as the one visitor action label. "Midweek Bible study" for Wednesday. "Give online"
- **Avoid or explain:** "Life Groups" (explain once as small groups that meet in homes or at church, once the details are confirmed); "Prime Timers" (explain as our seniors' fellowship); avoid "doing life together" and "authentic community"

## Liturgical calendar (traditional-liturgical only)

- **Season colors used by this church:** n/a
