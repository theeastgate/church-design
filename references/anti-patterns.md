# Anti-patterns ("church slop")

Things that make church sites look dated, generic, or AI-generated, and that get in a visitor's way. Treat each as a finding in an audit.

## Visual

- **Clip art and cheesy symbols:** glowing crosses, doves, flames, praying-hands icons, Bible-with-sunbeam graphics.
- **Generic icons on every label:** a stock cross or symbol beside each eyebrow or heading. Use the church's own mark sparingly and typographic devices for structure (see `iconography.md`).
- **Mixed icon styles:** outline and filled icons, or icons from several sets, on one site.
- **Worship stock photos:** raised hands under stage lights, silhouettes against haze, sunrise behind a cross.
- **Script or "Bible" fonts:** Papyrus, Trajan for everything, heavy blackletter, brush scripts for body or headings.
- **Parchment textures, lens flares, and drop-shadowed text.**
- **Too many fonts and colors:** each ministry with its own font; rainbow nav buttons.
- **Mixed shapes:** pill buttons next to square buttons; sharp cards next to rounded cards.
- **Generic AI look:** purple-to-blue gradients, glassmorphism everywhere, emoji as icons, centered everything, identical three-card rows with icons on every page.
- **Generic card grids:** rows of plain white rounded boxes, each with a heading, a paragraph, and a button. They read as a theme default. Use an editorial index, numbered list, typographic list, or photo-led tiles instead (see "Avoid the template look" in `foundations.md`).
- **A homepage that tries to answer everything:** FAQs, full ministry lists, resource rows, and calendars stacked on one page. The homepage introduces and links; inner pages explain.
- **Cramped spacing:** small section padding, actions jammed under text, and gaps that shrink to fit more in. Remove content before reducing space.
- **Low-contrast elegance:** light gray text on white, gray button text on white buttons, white text on light photos.
- **Outline or thin type at small sizes.**

## Content and UX

- **"Welcome to our website!"** or "Welcome to the official website of…" as the headline.
- **Insider jargon without explanation:** "Join us in the narthex," "eGroups," "Rooted," "LIFE groups," "Rite II," "the 11:00."
- **Service times hidden** on an inner page or only in a PDF bulletin.
- **The address only in an embedded map** or image.
- **Giving buried** three or more clicks deep.
- **Stale content:** last year's Easter event on the homepage; "upcoming" events that already happened.
- **Twelve-item navigation** that mirrors the org chart instead of a visitor's questions.
- **PDF-only** bulletins, calendars, or newsletters with no web version.
- **Auto-playing sound.**
- **Popups on arrival** asking for an email before the visitor knows anything.

## Code and build

- Raw hex values and one-off font sizes scattered through components instead of tokens.
- Huge uncompressed hero images and several autoplay videos on one page.
- Images without dimensions (layout jumps).
- Placeholder text left live ("Lorem ipsum," "[Service time]").
- A full-screen mobile menu nested inside a sticky header that uses `backdrop-filter`, `filter`, or `transform`. Those properties make the header the containing block for `position: fixed` children, so the menu is trapped inside the header instead of covering the screen. Put the menu outside the header element.
- Text over a gradient scrim placed in the scrim's light zone (it passes on a dark photo and fails on a bright one).
