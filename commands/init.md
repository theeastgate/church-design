# init: set up the church's design context

Goal: produce `MINISTRY.md` in the project root, using `assets/MINISTRY.template.md`. Every other mode reads it.

## 1. Gather what already exists

Before asking anything, look for answers yourself:

- An existing site, theme, or codebase: pull colors, fonts, logo, service times, address, giving link, navigation.
- A brand guide, logo files, or `theme.json`.
- Anything the user already said in the conversation.

Only ask about what you could not find.

## 2. Ask (keep it short)

Ask in one batch. Skip any question already answered.

1. **Church name, city, and tradition** (for example: non-denominational, Baptist, Calvary Chapel, Reformed, Anglican, Lutheran, Catholic).
2. **Who are you trying to reach?** Age range and the one visitor you most want to welcome.
3. **Existing brand:** logo (ideally the mark as an SVG), colors, fonts to keep? Anything you dislike about the current site?
4. **Bible translation** for Scripture on the site.
5. **Photography:** do you have recent original photos of people, the building, and ministries? (This changes which direction will work.)
6. **Sunday details for guests:** music style, what people usually wear, kids check-in, parking and entrance, coffee or hospitality. (Without these, the first-Sunday section has little to say.)
7. **Platform:** WordPress (block theme, classic theme, page builder), Tailwind, another framework, or plain HTML/CSS.

## 3. Choose a direction

**If the user already chose one,** read its "Fits" line and confirm it fits their tradition, audience, and photo supply. If something does not fit (for example, a photo-heavy direction with no photos), say so in one or two sentences and suggest the adjustment, then proceed with their choice.

**If not,** read the short "Fits" line in each file under `references/directions/`. Recommend **two** directions with one sentence each on why, based on tradition, audience, brand, and photo supply. Let the user choose.

If the user wants a blend, pick one as the base and borrow at most one signature element from the other.

**Layers:** if the church has more than about six ministries that each want their own identity, offer the `ministry-hub` layer (`references/layers/ministry-hub.md`) on top of the chosen direction.

Photo supply matters:

- Few or no good photos: favor `traditional-liturgical` or `playful-modern` (type-led directions), and consider the `ministry-hub` layer, which carries ministries with color and marks instead of photos.
- Strong photos and video: any direction works; `bold-contemporary` and `classic-confident` need them most.

## 4. Lock the brand constants

From the chosen direction file and any existing brand, fill in the brand constants (see `references/foundations.md`):

- Two typefaces (or one), with weights, and the body size (18px, or 20px for older audiences)
- Color roles: ink, surface, surface-alt, primary, accent, and optional support and seasonal accent
- Radius family
- Button shape and two button styles (solid, outline)
- Photo overlay treatment
- Section rhythm (eyebrow, headline, body, action)

If the church has existing brand colors, keep them and map them to roles. Adjust lightness only as far as needed to pass contrast, and tell the user what changed.

Run `scripts/contrast.py` on the color pairs you chose and record the results. Use a pairs file with the required ratio per line (4.5 for text, 3 for large text and UI) and include text-over-overlay pairs (for example `#ffffff #0a0e19@0.72`). See `scripts/starter-palettes.txt` for the format.

## 5. Write MINISTRY.md

Fill in the template. Mark anything unknown as `TODO` rather than inventing it. Never invent service times, addresses, staff names, or Scripture quotations.
