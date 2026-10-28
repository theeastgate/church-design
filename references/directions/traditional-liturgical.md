# Traditional / Liturgical

**Fits:** Anglican, Episcopal, Lutheran, Catholic, Orthodox, and Presbyterian congregations; historic downtown churches; any church whose worship follows the church year. Audiences of all ages, often older. Works with few people photos (architecture and type carry it), though people should still appear.

**Feel:** Reverent, quiet, timeless. Like a well-set prayer book: classic serifs, generous margins, restrained color, and the church year marked with care.

## Signatures

- **Homepage hero:** full-bleed photo of the sanctuary, building, or a candid moment with a uniform dark wash, a centered or bottom-left headline in letterspaced caps or a book serif, and worship times directly beneath (in the hero or a solid panel overlapping its lower edge).
- **Classic book serif** headlines, often in **letterspaced capitals** (0.08 to 0.14em) for short headings ("WHAT WE BELIEVE," "LET'S CONNECT"). Mixed weights in one heading are allowed ("OUR **MISSION**").
- Body in a quiet humanist sans for screen reading, or the serif for longer devotional and liturgical text.
- **Centered compositions** for statements (mission, beliefs, Scripture), left-aligned for practical information.
- A restrained palette: deep ink, warm paper white, stone, and one muted slate or blue-gray panel color.
- **Rubric red** (from prayer books) as the accent: small labels, rules, drop caps, and links.
- **Seasonal accent:** an optional `--color-season` that follows the church year (see below).
- Thin rules, small caps, and occasional fleurons as ornament. Never clip art.
- Photos with a soft, slightly desaturated, film-like grade: baptisms outdoors, candid fellowship, architecture, stained glass, candles.
- Low-contrast architectural photos behind statements are allowed only if the photo is washed to near-white (90%+ surface overlay) so text contrast stays AA.

## Tokens (starting point)

```css
--font-display: "Libre Baskerville", Georgia, serif;   /* 400/700, caps headings */
--font-body: "Libre Franklin", system-ui, sans-serif;  /* or "EB Garamond" for liturgical text */
--color-ink: #1d2433;
--color-ink-muted: #4f5563;
--color-surface: #fbfaf7;
--color-surface-alt: #ece8df;   /* stone */
--color-support: #5d6676;       /* slate panels */
--color-on-support: #ffffff;
--color-primary: #1d2433;
--color-accent: #8f1d21;        /* rubric red */

/* Church year (all pass AA as text on surface and surface-alt) */
--season-advent: #1f3a6e;       /* or #4b2a6b if the church uses violet */
--season-gaudete: #8c3a5c;      /* rose, third Sunday of Advent, optional */
--season-feast: #7a5c1a;        /* white and gold feasts, shown as gold */
--season-ordinary: #2f5d3a;
--season-lent: #4b2a6b;
--season-holyweek: #a3201c;
--season-goodfriday: #111111;
--season-pentecost: #a3201c;
--color-season: var(--season-ordinary);  /* static default */
--radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px;
--scale-ratio: 1.25;
```

Alternatives: display "EB Garamond", "Cormorant Garamond" (display sizes only; too thin for body), "Crimson Pro"; body "Source Sans 3", "Source Serif 4".

- **Buttons:** crisp (2 to 4px radius) or square; solid ink, outline ink, or white on slate. Labels in sentence case or short letterspaced caps. Button text must still pass 4.5:1.
- **Overlay:** solid panels beside photos rather than text on photos; when text sits on a photo, use a uniform dark wash of at least `rgb(20 24 33 / .65)`.
- **Headings:** short one-line headings may be letterspaced caps (`WHAT WE BELIEVE`, `OUR MISSION`); longer headings stay in sentence or title case. Use caps headings for statement sections, not for every heading.

## The church year (seasonal accent)

Set `--color-season` by season. Use it only in small places: an eyebrow, a rule, a calendar badge, the current-season label. Colors vary by tradition; let the church confirm theirs in `MINISTRY.md`.

| Season | Common color | Token |
|---|---|---|
| Advent | Violet or blue (rose on the third Sunday in some traditions) | `--season-advent`, `--season-gaudete` |
| Christmas, The Epiphany (Jan 6) | White and gold | `--season-feast` |
| Season after Epiphany, Season after Pentecost (Ordinary Time) | Green | `--season-ordinary` |
| Lent | Violet | `--season-lent` |
| Holy Week, Palm Sunday | Red (violet in some traditions) | `--season-holyweek` |
| Good Friday, Holy Saturday | Black or none | `--season-goodfriday` |
| Easter (through the Saturday before Pentecost) | White and gold | `--season-feast` |
| Day of Pentecost | Red | `--season-pentecost` |

White feasts need a visible stand-in on a light page, so the token uses gold.

**Feast days inside a season.** Principal feasts such as Trinity Sunday, the Transfiguration, All Saints' Day, and Christ the King take white or gold while the season stays green. Show the feast in its own badge (for example "This Sunday · All Saints' Day" in `--season-feast`) and leave the season label and accent alone.

**Switching seasons.**
- **Static or JavaScript sites:** include `assets/church-year.js`. It sets `data-season` (and `data-feast`, `data-gaudete`) on `<html>` and fills `[data-season-label]` and `[data-feast-label]`. Map the keys in CSS:
  ```css
  html[data-season="advent"]   { --color-season: var(--season-advent); }
  html[data-season="lent"]     { --color-season: var(--season-lent); }
  html[data-season="feast"]    { --color-season: var(--season-feast); }
  /* …and so on; [data-gaudete] { --color-season: var(--season-gaudete); } */
  ```
  Always ship a sensible static default in the HTML for visitors without JavaScript.
- **This Sunday:** add `data-sunday-label` and `data-sunday-date` to the "This Sunday" heading and date; the script fills in the coming Sunday's feast or season (including "All Saints' Sunday" when November 1 is a weekday).
- **WordPress:** set the season in a theme option or the Site Editor's global styles, or compute it in PHP from the date with the same rules.
- The script follows the Western calendar. Eastern Orthodox churches need their own calendar logic.

## Modules that matter here

- **Worship times as a table:** day, time, service name (for example, "Holy Eucharist, Rite II"), and a short plain-language note ("about 60 minutes, with organ and choir").
- **This Sunday:** the day in the church year, the appointed readings, and a link to the bulletin or order of worship.
- **Sacraments and life events:** baptism, confirmation, weddings, funerals, with a contact for each.
- **History:** the congregation's story and building, with dates set in old-style numerals if the font supports them.

**Icons:** the church's mark or seal, thin rules, and occasional fleurons; functional icons from Phosphor Thin or Light, kept small and few.

## Misses to avoid

- Light gray text on white or on slate panels looks elegant and fails contrast. Check every pair.
- Very thin serifs (Cormorant at 300) are unreadable at body sizes and on low-quality screens.
- Letterspaced caps beyond one or two lines become a wall. Keep caps for short headings.
- Do not let reverence become distance: a warm, plain-language welcome still belongs near the top.
- Explain liturgical words for newcomers (Eucharist, Rite II, Compline, narthex) in a short line or tooltip.
