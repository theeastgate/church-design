# Church modules

Reusable sections that show up on most church sites. Each module lists its **job**, required **content**, and **design rules**. Style them with the chosen direction; structure stays the same.

## Header and navigation

**Job:** Get anyone to Visit, Watch, and Give from any page.

- Five to seven top-level items. A common set: About, Visit (or "I'm New"), Next Steps, Watch, Give, Events, plus a "More" menu if needed.
- **Give is always visible** in the header (as a nav item or a small button). This meets the 2-click rule.
- One primary header button at most (usually "Plan a Visit"). Login or app links are secondary.
- Mobile: a full-screen or sheet menu with large tap targets (at least 48px tall), Give and Visit pinned at the top.
- Sticky headers shrink on scroll and never cover more than about 15% of a phone screen.

## Hero

**Job:** Say who you are and offer one practical next step.

**Homepage default: full-bleed photo or video.** Visitors expect the homepage to open on the church itself.
- The image or muted video loop fills the width and most of the first screen (about 80 to 92% of the viewport height, capped near 920px).
- The headline, one-line subhead, and one or two actions sit bottom-left over a scrim anchored to them (see "Text on photos" in `foundations.md`).
- The header is transparent over the hero, with white type, and turns solid as soon as the page scrolls (about 24px) so white navigation never sits over white text.
- A **when-and-where element** attached to the hero answers "when and where" on the first screen and ties the hero to the page. Use the one the direction names: a floating service card overlapping the hero's bottom edge (Warm Editorial, Traditional / Liturgical), a times bar on the hero's lower edge (Classic Confident), times set large in the hero or a black band right below it (Bold Contemporary), or a black info strip (Playful Modern).
- Choose a wide photo with a dark, quiet area where the text will sit. Crop or position it so faces and the cross are not under the headline.
- **Phones:** the hero crop turns portrait, so art-direct it (`<picture>` with a separate crop, or a different `object-position`) so faces sit outside the text zone. The text may sit at the top or the bottom, whichever is clearer for that photo.

A split hero (text beside a photo) is for inner pages, or for a homepage when the church has no strong wide photo. A direction may also name a **type-led homepage hero** as its alternative (Playful Modern does); it still shows real photos on the first screen.

Variants:
- **Photo hero:** full-bleed photo, overlay per the brand constant, headline, one-line subhead, one or two actions.
- **Type hero:** large headline (lowercase heavy sans, letterspaced serif caps, etc.) beside or above a photo or carousel.
- **Finder hero:** headline plus a location select or "Find your closest location" link (multisite).
- **Video hero:** muted background loop with a poster image, a pause control, and a static fallback for reduced motion.

Rules: headline under about 10 words; service times or "Plan your visit" within the hero or immediately below it; no more than two buttons.

## Service times and location

**Job:** Answer "when and where" in plain words.

- Day, time, and length ("Sundays at 9:00 and 11:00 AM · about 75 minutes").
- Address as text (not only an image or map), cross streets or landmark, parking note, "Get directions" link to a map app.
- Multisite: a **location card** per campus: photo of the building, campus name, address, and a clear arrow or button. Same card size for every campus.
- Mark up with schema.org `Church` (or `PlaceOfWorship`) and `Event` data where the platform allows.

## Welcome / What to expect

**Job:** Lower the nerves of a first-time guest.

- Short headline ("You're welcome here"), two to four sentences, a pastor photo or a short welcome video.
- Answers: how long, what the music is like, what people wear, what happens with kids, where to park and enter.
- Actions: "Plan a visit" (primary), "Learn about kids" (secondary).
- **On the homepage:** a warm headline, three short numbered promises (length and music, what to wear, kids), and one action to the Plan a Visit page, beside one or two overlapping photos. The full Q&A does not belong here.
- **On the Plan a Visit page:** the full set of answers. Put the intro and photo side by side, then the answers in a grid underneath, with a "Still have a question?" contact item last. Style the answers with the direction's own devices (a serif question and rule in Warm Editorial, a caps label and small icon in Classic Confident, a sticker card in Playful Modern) rather than as plain white boxes. Do not run the answers down one column beside a single photo (see "Balance in split sections" in `foundations.md`).

## Next steps / Ministry cards

**Job:** Show the ways to belong.

- **Homepage:** an index of up to 5 life stages (large name in the display face, one-line description, arrow), beside a short intro and an "All ministries" link. Each direction styles it its own way (thin rules and serif names, hairlines and heavy sans, caps rows with a ministry-color bar, black cards with round arrows). Group small ministries ("Women & Men") rather than listing every one.
- **Ministries page card:** eyebrow (ministry name), short purpose headline, one action ("Learn more").
- Grid of 2 to 4 columns; all cards share radius, padding, type, and button style.
- Solid color, photo with scrim, or watermark mark (see `layers/ministry-hub.md`).
- Group by life stage when there are many: Kids, Students, Young Adults, Adults, Seniors, Families.

## Sermon feature

**Job:** Let people watch the latest message and find more.

- Latest sermon: video or player, title, series, speaker, date, a one-paragraph summary, and actions (Watch or Play, Notes, Listen).
- **Homepage layout:** one feature. Video or thumbnail beside the title, passage, speaker, date, and a one-line pull quote from the message, with one link to the sermon archive. A "Watch" pill on the image replaces a generic play button.
- **Sermons page layout:** the same feature, then series, live stream, and podcast links beneath. A tall details column beside a short link list is unbalanced.
- The image must match the sermon: never use a photo whose on-screen slide shows a different series title. Use the sermon's own thumbnail or crop to the speaker.
- Archive: series grid with artwork; filter by series, speaker, book of the Bible, date.
- Captions on video. A transcript or notes link helps hearing-impaired and searching visitors.

## Scripture block

**Job:** Present the Word with care.

- Verse text in the display face or a readable serif, reference and translation in the body face ("Matthew 28:19–20 NKJV").
- Quote mark, rule, or quiet panel as framing. No textured parchment or script fonts.
- Use the translation from `MINISTRY.md`. Quote exactly; never paraphrase inside quotation marks. Respect the translation publisher's quotation guidelines.

## Events

**Job:** Help people find something for their stage of life.

- **Homepage:** up to 3 events, typographic rather than boxed: a large date (numeral, tile, or round badge, per the direction), the title, one line of time and place, plus "All events."
- **Events page:** event card or row with date (large), title, time, place, audience tag, one action. Date and time visible without clicking.
- Filters by audience or ministry; "Browse all events" as a quiet secondary link.
- A photo collage of different ages beside an "every stage of life" headline works well as the section intro.

## Give

**Job:** Make generosity simple and trustworthy.

- One primary action that opens the giving platform. Show other ways (text, mail, in person, stock) below.
- Short "why we give" with optional Scripture; a giving FAQ (tax receipts, recurring gifts, security).
- A give CTA card on the homepage: a meaningful photo, a short line ("Generosity is the way of those who follow Christ"), and one button.

## Stay connected

- Newsletter signup, app download, and social icons as circular outline buttons with accessible labels.

## Footer

- Logo, service times, address, phone, email, Give link, main links, social, and statement of faith or "What we believe" link.
- Counts toward the "service times and address on the homepage" rule.
- Same colors and type as the header; generous size (body text still 16px minimum in the footer).

## Forms (connect card, prayer request, volunteer)

- Labels above fields, never placeholder-only. Fields 48px tall. Ask only what is needed.
- Prayer requests: say who will see the request and offer a private option. If `MINISTRY.md` doesn't say who reads them, don't name a person or role ("a pastor will pray"); write "We'd be glad to pray with you" and mark it `TODO` in `MINISTRY.md`.
- Clear success message that says what happens next ("A pastor will reach out this week").
