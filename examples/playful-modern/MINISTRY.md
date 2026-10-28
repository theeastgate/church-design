# MINISTRY.md

Design context for this church's site. Created by the church-design skill (`init`). Every design, refresh, and audit reads this file. Mark unknowns as TODO.

> Sunnyside Community Church and Brookfield are fictional. This file backs a public demo of the Playful Modern direction.

## Church

- **Name:** Sunnyside Community Church
- **City / neighborhood:** Brookfield
- **Tradition:** Non-denominational church plant (young)
- **Primary audience:** Young families with kids, and neighbors who have never been to church. The guest we most want to welcome is a parent who has never visited a church and wants to know their kids will be safe and happy.
- **Bible translation:** NKJV
- **Platform:** Plain HTML/CSS (tokens as CSS custom properties on `:root`)

## Facts (never invent these)

- **Service times:** Sundays at 10:00 AM, about 65 minutes
- **Address and entrance notes:** Brookfield Elementary School gym, 1400 Maple Drive, Brookfield. Use the front entrance by the flagpole; greeters in yellow shirts will meet you.
- **Kids:** Sunnyside Kids, babies through 5th grade. Check-in opens at 9:40 AM in the school library.
- **Sunday details:** Music is acoustic and upbeat. Dress is totally casual. Donuts and coffee every week.
- **Giving URL:** https://example.org/give
- **Phone / email:** Phone TODO / hi@example.org
- **Campuses:** One (not multisite). The church meets in a rented school, so there is no building photo.
- **Ministries:** Sunnyside Kids (babies through 5th grade, Sundays) · Middle and High School hangout (Wednesdays 6:30 PM, location TODO, grade range TODO) · Neighborhood Groups (meeting days TODO) · Serve Team
- **Latest message:** "Room at the Table," series *Love Your Neighbor*, Pastor Jess Morales, October 25, 2026. Passage TODO. Video URL TODO. Pull quote TODO (do not invent one).
- **Upcoming events:** Trunk or Treat, Sat Oct 31, 5:00 PM, school parking lot · Neighborhood Clean-Up, Sat Nov 7, 9:00 AM (meeting spot TODO) · Thanksgiving Potluck, Sun Nov 22, after the service (room TODO)
- **Homepage Scripture:** "Let the little children come to Me, and do not forbid them; for of such is the kingdom of God." (Mark 10:14 NKJV)
- **Prayer requests:** sent by email to hi@example.org. Who reads them is TODO; the homepage copy assumes "a pastor will pray for you this week" and must be confirmed.
- **Unknown, do not state until confirmed:** phone, social accounts, statement of faith, pastor photo, parking details beyond the front entrance, kids safety and check-in process details

## Direction

- **Direction:** playful-modern
- **Layers:** none (four ministries; the site palette carries them)
- **Borrowed element (optional, max one):** none
- **Why:** A young plant reaching young families and first-time guests is the direction's stated fit. The church has no photos of its own yet; seven free-license stock photos stand in. Playful Modern is type-led, so big lowercase type, the sun mark, and yellow color blocks carry the page, and the student ministry card uses a color block instead of a photo. The homepage uses the direction's type-led hero (headline beside a sticker-photo carousel) rather than a full-bleed photo: the stock wide shot is not the church's own people, and the church meets in a rented gym with no building to show. Replace the stock with the congregation's own photos (with a photo-consent policy for children) as soon as they exist.

## Brand constants

| Constant | Value |
|---|---|
| Display font | Outfit 800 and 900, lowercase headlines, tracking -0.04em on the hero and -0.03em on section headlines (Google Fonts, OFL) |
| Body font | Outfit 400, 500, 600, 700 (same family; one typeface sitewide) |
| Body size | 18px (1.125rem), line-height 1.6, measure 60ch |
| Ink / ink-muted | `#161616` near-black / `#55585e` |
| Surface / surface-alt | `#ffffff` white / `#fff3cc` butter (soft tint of the accent) |
| Primary | `#161616` (ministry cards, service card, the one dark band), text on it `#ffffff`, muted text on it `#c9c9c9` |
| Accent | `#ffc933` sunny yellow, the color of the greeters' shirts. Fills only (solid buttons, badges, date circles, the Scripture panel, round arrows), always with `#161616` text. Used as text only on the dark ink ground. Never as text or icons on white |
| Support (optional) | none |
| Seasonal accent | none |
| Radius family | 12 / 20 / 28 / pill |
| Button shape | Pill, 48px tall, 2px ink border, weight 600, lowercase, Phosphor arrow. Solid: yellow fill with ink text and ink border. Outline: transparent with ink border (white border and text on dark). Third tier: ink text link with a 3px yellow underline and arrow |
| Overlay treatment | Solid panel. No scrims: text sits beside photos or on the black base of a card. Photo labels (the "watch" pill) are solid ink pills |
| Photo grade | Bright natural: `saturate(1.06) contrast(1.03)` on every photo |
| Photo shape | Sticker: 28px corners, a 10px white border, a slight rotation (-3 to 3 degrees), one soft shadow. Card photos use the 20px card-inner radius and no border |
| Church mark | `mark.svg` (original: a half sun rising over a wide smiling arc, with five short rays). Inlined once as `<symbol id="mark">` with `currentColor`. Used in: header and footer logo (ink mark in a yellow disc beside the lowercase wordmark), a 7% yellow watermark bleeding off the dark give band, and the favicon |
| Functional icon set | Phosphor Bold (MIT): arrow-right, arrow-left, arrow-up-right, clock, map-pin, door-open, play, pause, list, x, envelope-simple. Inline SVG, `currentColor` |

Section rhythm: eyebrow (lowercase, 16px weight 700, after a 12px yellow sun dot ringed in ink) → 24px → lowercase heavy headline → 24 to 32px → body → 32 to 40px → action. Section padding `clamp(5rem, 2.5rem + 7vw, 9.5rem)`; container 1140px; gutter `clamp(20px, 6vw, 112px)`; light panels (Scripture, latest message) inset `max(8px, 1.5vw)` with 28px corners. Hand-drawn accents (inline SVG strokes, round caps): an oval around "kids" in the hero, a sparkle on the Scripture panel, a scribble underline in the events headline. One per screen.

## Ministry colors (optional)

| Ministry | Color | White text contrast |
|---|---|---|
| none | Ministries use the site palette (black cards, yellow accents) | n/a |

## Contrast results

`python3 scripts/contrast.py --pairs sunnyside-pairs.txt` (pairs file lines: `<fg> <bg> <min ratio> <label>`). All pass. There are no text-over-photo pairs because the overlay treatment is a solid panel.

```
  #161616 on #ffffff          18.10:1  needs 4.5 (body) PASS  AAA  ink on surface
  #55585e on #ffffff           7.13:1  needs 4.5 (body) PASS  AAA  ink-muted on surface
  #161616 on #fff3cc          16.32:1  needs 4.5 (body) PASS  AAA  ink on surface-alt (butter tint)
  #55585e on #fff3cc           6.44:1  needs 4.5 (body) PASS  ink-muted on surface-alt
  #161616 on #ffc933          11.77:1  needs 4.5 (body) PASS  AAA  ink on accent (solid sun button, Scripture panel, badges, date circles)
  #ffffff on #161616          18.10:1  needs 4.5 (body) PASS  AAA  white on ink (dark band, ministry cards, service card)
  #c9c9c9 on #161616          10.93:1  needs 4.5 (body) PASS  AAA  muted-on-dark on ink
  #ffc933 on #161616          11.77:1  needs 4.5 (body) PASS  AAA  accent text on ink (eyebrows and highlights on dark)
  #161616 on #ffffff          18.10:1  needs 3 (large/UI) PASS  AAA  2px outline button border and outline type stroke on surface
  #161616 on #fff3cc          16.32:1  needs 3 (large/UI) PASS  AAA  outline type stroke, borders, focus ring on surface-alt
  #161616 on #ffc933          11.77:1  needs 3 (large/UI) PASS  AAA  focus ring and 2px border on accent
  #ffc933 on #161616          11.77:1  needs 3 (large/UI) PASS  AAA  round arrow buttons and focus ring on ink
  #ffffff on #161616          18.10:1  needs 3 (large/UI) PASS  AAA  white outline button border on ink
```

Pairs file used:

```
#161616 #ffffff 4.5 ink on surface
#55585e #ffffff 4.5 ink-muted on surface
#161616 #fff3cc 4.5 ink on surface-alt (butter tint)
#55585e #fff3cc 4.5 ink-muted on surface-alt
#161616 #ffc933 4.5 ink on accent (solid sun button, Scripture panel, badges, date circles)
#ffffff #161616 4.5 white on ink (dark band, ministry cards, service card)
#c9c9c9 #161616 4.5 muted-on-dark on ink
#ffc933 #161616 4.5 accent text on ink (eyebrows and highlights on dark)
#161616 #ffffff 3 2px outline button border and outline type stroke on surface
#161616 #fff3cc 3 outline type stroke, borders, focus ring on surface-alt
#161616 #ffc933 3 focus ring and 2px border on accent
#ffc933 #161616 3 round arrow buttons and focus ring on ink
#ffffff #161616 3 white outline button border on ink
```

## Words

- **Use:** Sunnyside Kids, Middle & High School hangout, Neighborhood Groups, Serve Team; "plan your visit" as the one visitor action label; "give online"; "messages" (not "sermons") in navigation; "the gym" and "the school library" for rooms, because guests can find them
- **Avoid or explain:** "worship experience," "doing life together," "authentic community." Say "service" or "Sunday" plainly. Explain "check-in" the first time on the Plan a Visit page (a parent signs a child in and gets a matching pickup tag; confirm the process first)

## Liturgical calendar (traditional-liturgical only)

- **Season colors used by this church:** n/a
