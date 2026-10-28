# Accessibility for every age

Church visitors include older adults with lower vision, people with hearing loss, people using screen readers, and parents holding a phone in one hand and a toddler in the other. Target **WCAG 2.2 AA** as the floor.

## Reading

- Body text 18px minimum (20px when the audience skews older). Footer and captions 16px minimum.
- Line-height 1.5 or more; paragraph spacing at least 1em; measure 60 to 75 characters.
- No all-caps body text. No justified text. No light weights (under 400) for body.
- Text must reflow at 200% zoom without horizontal scrolling.

## Color and contrast

- 4.5:1 for body text, 3:1 for large text (24px, or 19px bold) and for UI parts like borders and icons.
- Check text on photos at its worst spot, not its best.
- Never use color alone to signal meaning (required fields, the current season, errors).
- Run `scripts/contrast.py` for token pairs.

## Interaction

- Tap targets at least 44x44px (48px preferred), with 8px between them.
- Visible focus style on every interactive element (a 2 to 3px outline in a color that passes 3:1).
- Logical heading order (one `h1` per page), landmarks (`header`, `nav`, `main`, `footer`), and a skip link.
- Links say where they go ("Plan your visit," not "Click here"). Multiple "Learn more" buttons need distinct accessible names (`aria-label="Learn more about Youth Ministry"`).
- Forms: visible labels, clear errors next to the field, no time limits.

## Media and motion

- Captions for every sermon and video; transcripts or notes where possible.
- Carousels: pause, previous, next controls; keyboard operable; pause on hover and focus; no auto-advance under `prefers-reduced-motion`.
- Background video: muted, with a visible pause button and a poster image; disabled under reduced motion.
- Nothing flashes more than three times per second.

## Plain language

- Write at about an 8th-grade reading level for practical pages.
- Explain church words the first time (see `writing.md`).
