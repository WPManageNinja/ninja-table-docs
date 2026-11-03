# House style: the "layer" grammar

Measured from `fluentcart-layer.mp4` (the WPManageNinja Fluent Player × FluentCart promo) and adapted to the
Ninja Tables brand in `.claude/video/promo-layer/`. Keep these tokens unless the user asks for a new look.

## 1. Rhythm

- **120 BPM, a change every 2 s bar.** Beat starts in promo-layer (absolute): 3.3, 5.03, 7.03, 9.03, 11.03,
  13.03, 15.03, 17.03, 19.03 … Inside a bar: headline in on the bar, cursor arrives ~0.4 s later, click
  ~0.9 s in, result lands by ~1.4 s, hold.
- Stillness before the climax: 0.3–0.75 s between the big click and its result.
- Pause test: at any second something meaningful is mid-flight. No idle wobble loops (the slow blob drift on
  the ground is the only ambient motion).

## 2. Ground (constant through the whole film: one place)

- Cream `#FEF6EF` (reference `#FEF5ED`), never white, never dark.
- Three big blurred blobs (`filter: blur(90px)`, 760–900 px): pink `#FFC9D3` top-left, teal-mint `#B9F0EA`
  right, peach `#FFE0A8` bottom-centre. They drift once across the film (`sine.inOut`, full duration).
- The ground lives in the root `index.html`; scenes are transparent over it.

## 3. Type

- Font: **Inter** (the plugin admin font). Headline 900 weight, 84 px, letter-spacing −0.025em, centred at
  `top: 70px`, ink `#2E3148`.
- Word reveal: each word appears light grey `#C9CCD6` and settles to ink, 0.09 s stagger (`reveal()` helper).
  Exit: words blur out 0.15 s (`hide()`).
- Eyebrow: small spaced caps, ≥ 28 px (`text_below_floor` fires under ~2.6% of 1080 = 28 px).
- Subline: 34 px, 400 weight, `#6B7080`.
- Accent: coral `#E8344F` (brand coral `#FF4E6B` darkened for contrast on cream). Teal `#01D5C6` for brand marks.

## 4. The product

- **One big rebuilt card**, 1360 × 730 at (280, 232), white, radius 22 px, shadow
  `0 40px 90px rgba(46,49,72,.13)`. UI text inside ≥ 26 px. The product stays put across demo beats; it changes,
  it doesn't leave.
- Rebuild only what the beat uses, with real labels and values. Table colours are the real presets:
  - Default: header `#454545`, rows `#636E72` / `#6B7579`, text white.
  - Teal: header `#0C5551`, rows `#1CB5AD` / `#27B9B1`, text `#2D2D2D`.
  - FluentCart product table: header `#F9FAFB`, Add To Cart button `#39434D`.
- Side panels (style swatches, settings) slide in at the right edge of the card and leave after the beat.
- Pro features get a small "Pro" pill in the headline or the tile.

## 5. The cursor

- 👆 hand emoji (Apple Color Emoji via `@font-face { local('Apple Color Emoji') }`), 76 px in a 90 px box,
  drop shadow. Fingertip offset inside the box: (34, 6). Use `H(X, Y)` to aim the fingertip.
- Enters from off-screen on one continuous glide (`power3.out`, 0.4–0.9 s); never fades in at rest.
- Click = `tap()`: press 0.86 for 0.09 s, release 0.2 s, pivot `38% 8%`, plus a coral ring (70 px, 4 px border)
  scaling 0.35 → 1.5 while fading. **The click causes the next thing on the same frame.**
- Leaves physically (off the nearest edge, `power2.in`) or hands off to the next scene's first target.
- Drag: the hand carries the object (file chip) as one unit, drop lands on the target, target reacts.

## 6. Transitions

- Between worlds: **warm light leak** (radial gradient yellow → orange from the top-right, full frame, z 50):
  in 0.2 s `power2.out` from (500, −300, scale 1.4), out 0.3 s `power2.in`. Place it so its peak covers the cut.
  Used twice per film: after the hook and before the end card.
- Inside the demo: no cut. The headline swaps on the bar while the product changes underneath.
- Rows that move (search, sort): leavers out first, survivors move with a stagger, newcomers in last, with an
  opacity dip so rows never collide mid-flight.
- 2–3 transition kinds per film, repeated. Never a crossfade between scenes.

## 7. Proof grid and end card

- Grid: one headline ("Files. Posts. Products. Sheets."), 4 tiles that appear one by one, each a tiny real UI or
  icon + label + one-line fact + Pro mark if Pro; then a "Works with" row of real logos
  (`assets/img/fluentcart.svg`, `fluentforms.svg`, `woocommerce.png`). Not a static three-card row: tiles
  arrive on the beat and each shows something different.
- End card (last ~4 s): eyebrow (`THE ALL-NEW NINJA TABLES`), Ninja logo lockup (`ninja-logo.svg`, coral
  `#FF4E6B` + teal `#01D5C6`), giant URL `ninjatables.com`, coral pill CTA "Get it Now" (`back.out(1.8)`),
  outlined offer pill "FREE on WordPress.org · Pro for live data". Everything landed by −2 s, then hold.

## 8. Eases and timings

- Entries `expo.out` / `power3.out`, ≤ 0.8 s; exits ≈ 75% of the entry, `power2.in`.
- Pops `back.out(1.4–1.8)`. Never `bounce` or `elastic`.
- Stagger total ≤ 0.5 s. Similar elements share one ease and duration.
