# audit: review a church page or site

Rate each finding **Blocker** (fails a core rule or locks people out), **Major** (hurts visitors noticeably), or **Polish**. Give each finding a specific fix, not a general principle.

If you can render the page (browser, Playwright, screenshots), look at it at 375px, 1440px, and 1920px. Do not audit from code alone when you can see it.

## Quick check (run on your own output too)

- [ ] Service times and address on the homepage (footer counts)
- [ ] Give reachable within 2 clicks from every page
- [ ] Body text 18px or larger; no all-caps body text
- [ ] Text contrast at least 4.5:1 (3:1 for large text and UI), including text over photos
- [ ] Brand constants consistent: one radius family, one button shape, at most two typefaces, one accent
- [ ] Original photos used where available; no clichéd worship stock
- [ ] A first-time visitor can find "what to expect" within one click of the homepage
- [ ] Scripture uses the configured translation with reference and abbreviation
- [ ] Carousels and video have controls and respect reduced motion
- [ ] Works at 375px with no horizontal scrolling and tap targets of at least 44x44px
- [ ] Split sections are balanced: no column more than about 1.25 times the height of its neighbor at desktop width; collages have no empty cells
- [ ] Readable text inside photos (slides, banners) matches the content beside it
- [ ] Homepage is a front door: 6 to 8 sections, one idea and one primary link each, about 40 words of body copy or less per section, depth moved to inner pages
- [ ] No plain repeated card grids (white box + heading + paragraph + button); editorial devices used instead
- [ ] Generous white space: section padding in the recommended range, nothing crowded against the text above it
- [ ] Wide margins: content container about 1120 to 1200px with a fluid gutter; content does not run near the screen edges at 1440px or 1920px
- [ ] Icons: the church's mark used in a few meaningful places (not every heading); one functional icon set with stroke matched to the type; no clip-art symbols
- [ ] Homepage opens with a full-bleed photo or video hero (or the direction's named type-led alternative, or a split hero when the church lacks a strong wide photo), with times and address on the first screen

## Full audit

Work through each area. Read the linked reference for the detailed standard.

0. **Page job** (`references/page-types.md`): Does each page do the one job its type calls for, with the right hero and depth? Is any topic covered in full on more than one page?
1. **Visitor path** (`references/modules.md`, `references/writing.md`): Can a stranger learn when, where, what to expect, and what to do with kids in under 30 seconds? Is there one clear next step per page?
2. **Cohesion** (`references/foundations.md`): Count distinct radii, button styles, font families, accent colors, and overlay treatments across pages. Anything beyond the constants is a finding.
3. **Direction fidelity** (`references/directions/<direction>.md`): Does the page follow the direction's signatures and avoid its listed misses?
4. **Typography:** Scale, measure, hierarchy, line-height, all-caps usage.
5. **Color and contrast:** Run `scripts/contrast.py` on token pairs. Spot-check text on photos.
6. **Imagery** (`references/imagery.md`): Real people, age range represented, consistent treatment, alt text.
7. **Accessibility** (`references/accessibility.md`): Keyboard, focus, headings, landmarks, forms, captions, motion.
8. **Anti-patterns** (`references/anti-patterns.md`): List any you find.
9. **Spacing and balance** (`references/foundations.md`): Measure column heights in every split section at 1440px and 1024px. Check section padding is consistent, gaps between cards match, and nothing feels crowded against an edge. Unbalanced splits are a **Major** finding.
10. **Mobile and performance:** Layout at 375px, image weight, hero load, embeds.

## Report format

1. One-paragraph summary: overall impression and the three changes that would help visitors most.
2. Findings table: severity, area, what is wrong, where, fix.
3. What is working (short; name specifics worth keeping).
