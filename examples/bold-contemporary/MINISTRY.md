# MINISTRY.md

Design context for this church's site. Created by the church-design skill (`init`). Every design, refresh, and audit reads this file. Mark unknowns as TODO.

> Harbor City Church and Lakeport are fictional. This file backs a public demo of the Bold Contemporary direction.

## Church

- **Name:** Harbor City Church
- **City / neighborhood:** Lakeport (two campuses: Downtown and Northside)
- **Tradition:** TODO (not stated; the site avoids denominational language until confirmed)
- **Primary audience:** Ages 18 to 45, many young families and young adults, many with no church background. The guest we most want to welcome: a young couple or parent who has never been to church and is nervous about not knowing what to do.
- **Bible translation:** NKJV
- **Platform:** Plain HTML/CSS (tokens as CSS custom properties on `:root`)

## Facts (never invent these)

- **Service times:** Downtown: Sundays at 9:00 AM and 11:00 AM. Northside: Sundays at 10:00 AM. Each service is about 70 minutes.
- **Address and entrance notes:** Downtown: 220 Water Street, Lakeport; free parking in the Water Street garage. Northside: 88 Cedar Avenue, Lakeport; free parking in the Cedar Ave lot. Entrance doors: TODO.
- **Giving URL:** https://example.org/give
- **Phone / email:** Phone TODO / hello@example.org
- **Campuses:** Downtown (220 Water Street) and Northside (88 Cedar Avenue)
- **Sunday details:** full band, modern worship; come as you are; coffee bar in the lobby; kids check-in opens 15 minutes before each service
- **Ministries:** Harbor Kids (birth to 5th grade), Harbor Students (6th to 12th grade), Young Adults (18 to 29), Groups, Serve Team
- **Latest message:** "Start Where You Are," series *Unfinished*, Pastor Marcus Allen, October 25, 2026. Passage: TODO. Video URL: TODO. Pull quote: TODO (none supplied, so the homepage shows none). Thumbnail: none supplied; the homepage uses typographic series art.
- **Upcoming events:** Baptism Sunday, Sun Nov 8, at all services · Serve Lakeport Day, Sat Nov 14, 9:00 AM (meeting place TODO) · Christmas at Harbor, tickets open Tue Dec 1 (service dates TODO)
- **Homepage Scripture:** "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new." (2 Corinthians 5:17 NKJV)
- **Unknown, do not state until confirmed:** campus pastors, statement of faith, social accounts, who reads prayer requests, baptism sign-up process, Christmas service times, livestream

## Direction

- **Direction:** bold-contemporary
- **Layers:** none (five ministries; they share the site palette)
- **Borrowed element (optional, max one):** none
- **Why:** A multisite church reaching 18 to 45 year olds, many new to church, is the direction's stated fit. Photo supply is good for a demo: eight free-license Unsplash photos of young adults, baptisms, a church entrance, and live music stand in for the church's own. No video exists yet, so the hero uses the direction's full-bleed photo fallback. There is no sermon thumbnail or pastor photo, so the latest-message block uses typographic series art instead of an unrelated photo. Replace the stock with the congregation's own photos and a Sunday video loop as soon as they exist.

## Brand constants

| Constant | Value |
|---|---|
| Display font | Inter Tight 800, sentence case, tracking -0.035em at hero size, -0.02em for h2 (Google Fonts, OFL). Chosen over Plus Jakarta Sans after a render test: Jakarta's loose punctuation spacing ("in . Grab") looked broken at 100px |
| Body font | Inter 400, 500, 600, 700 (Google Fonts, OFL; the text cut of the same superfamily) |
| Body size | 18px (1.125rem), line-height 1.6, measure 60ch |
| Ink / ink-muted | `#111111` / `#5c5c5c`. On dark bands: `#ffffff` / `#a6a6a6` |
| Surface / surface-alt | `#ffffff` / `#f4f4f2` (surface-alt only for index-row hover and image loading fills, never for whole sections) |
| Primary | `#111111` near-black: buttons, dark bands, footer. Text on it `#ffffff` |
| Accent | `#ff5b14` "Beacon" orange, from the lighthouse in the mark. Used rarely: eyebrow dots, the active campus tab (ink text on it), arrow-circle hover fill, the cursor bar in series art, accent eyebrow text on dark bands. Never body text on white |
| Support (optional) | none (contrast comes from black and white bands, not tints) |
| Seasonal accent | none |
| Radius family | 8 / 16 / pill. Photos 8px, floating card 16px, buttons and tabs pill |
| Button shape | Pill, 52px tall, 600 weight, sentence case. Solid black (on white), solid white (on photos and dark), outline 2px (black on white, white on photos and dark). Third tier: bold text link with an arrow |
| Overlay treatment | Dark scrim only. Hero: left-to-right black gradient that holds at 0.66 or more from the viewport edge to the end of the text column (container offset + 60% of the container) and fades to 0.15 on the far side; on phones, a top-down gradient that holds at 0.66 through 76% of the hero (the text sits over the arch, the faces on the steps stay clear below), plus a 0.6 top scrim behind the transparent header. No text is placed on any other photo |
| Photo grade | Crisp and clean: `contrast(1.05) saturate(0.92)` on every photo |
| Photo shape | Crisp rectangles, 8px radius, tight 10px gaps in the photo bento |
| Church mark | `mark.svg` (original: a lighthouse rising from a wave inside a circle, its beam cutting the circle open to the right, so the circle also reads as a "C" for City). Inlined once as `<symbol id="mark">` with `currentColor`. Used in: header logo, footer logo, one 6% white watermark bleeding off the Scripture band, and the favicon. Nowhere else |
| Functional icon set | Lucide (ISC), 2px stroke: arrow-right, map-pin, car, play, menu, x. Inline SVG, `currentColor` |

Section rhythm: eyebrow (8px accent dot, then 14px caps tracked 0.14em, ink-muted on white, accent on dark) → 24px → heavy headline → 24 to 32px → body → 32 to 40px → action. Section padding `clamp(5rem, 2.5rem + 7vw, 9.5rem)`; container 1180px; gutter `clamp(20px, 6vw, 112px)`. Sections alternate pure white and near-black; hairline rules (1px, about 12% opacity) separate rows instead of cards. One motion moment: hero headline lines rise in on load (off under reduced motion).

## Ministry colors (optional)

| Ministry | Color | White text contrast |
|---|---|---|
| none | Ministries use the site palette | n/a |

## Contrast results

`python3 scripts/contrast.py --pairs harbor-pairs.txt` (pairs file lines: `<fg> <bg> <min ratio> <label>`). All pass. A first run failed the orange focus ring over the hero scrim (2.33:1), so focus rings are ink on light surfaces and white on photos and dark bands; orange is never the only focus indicator.

```
  #111111 on #ffffff          18.88:1  needs 4.5 (body) PASS  AAA  ink on surface
  #5c5c5c on #ffffff           6.69:1  needs 4.5 (body) PASS  ink-muted on surface
  #111111 on #f4f4f2          17.15:1  needs 4.5 (body) PASS  AAA  ink on surface-alt (index-row hover)
  #5c5c5c on #f4f4f2           6.07:1  needs 4.5 (body) PASS  ink-muted on surface-alt
  #ffffff on #111111          18.88:1  needs 4.5 (body) PASS  AAA  white on primary (black pill text, dark band text)
  #a6a6a6 on #111111           7.76:1  needs 4.5 (body) PASS  AAA  muted-on-dark (dark band body, footer)
  #111111 on #ff5b14           6.08:1  needs 4.5 (body) PASS  ink on accent (active campus tab, arrow circle hover)
  #ff5b14 on #111111           6.08:1  needs 4.5 (body) PASS  accent eyebrow text on dark band
  #ff5b14 on #ffffff           3.11:1  needs 3 (large/UI) PASS  accent dot, active-row marker on white (UI)
  #ff5b14 on #111111           6.08:1  needs 3 (large/UI) PASS  accent dot and cursor bar on dark band (UI)
  #111111 on #ffffff          18.88:1  needs 3 (large/UI) PASS  AAA  outline pill border on white (UI)
  #ffffff on #111111          18.88:1  needs 3 (large/UI) PASS  AAA  white outline pill border on dark (UI)
  #ffffff on #000000@0.66      7.23:1  needs 4.5 (body) PASS  AAA  white text in hero scrim zone (worst case: white photo)
  #ffffff on #000000@0.66      7.23:1  needs 3 (large/UI) PASS  AAA  white outline pill border in hero scrim zone
  #ffffff on #000000@0.66      7.23:1  needs 3 (large/UI) PASS  AAA  white focus ring in hero scrim zone and transparent header
  #ffffff on #000000@0.6       5.74:1  needs 4.5 (body) PASS  white nav on transparent header (top scrim)
  #111111 on #ffffff          18.88:1  needs 3 (large/UI) PASS  AAA  ink focus ring on light surfaces
  #ffffff on #111111          18.88:1  needs 3 (large/UI) PASS  AAA  white focus ring on dark bands
```

## Words

- **Use:** Harbor Kids, Harbor Students, Young Adults, Groups, Serve Team; "Downtown" and "Northside" for the campuses; "Plan your visit" as the one visitor action label; "Next steps" for the ministries menu; "Give online"; "message" rather than "sermon" in headings (plainer for guests)
- **Avoid or explain:** "campus" is explained by pairing it with a street address every time; avoid "doing life together," "authentic community," "worship experience"; say "the 11 AM service," not "the 11"

## Liturgical calendar (traditional-liturgical only)

- **Season colors used by this church:** n/a
