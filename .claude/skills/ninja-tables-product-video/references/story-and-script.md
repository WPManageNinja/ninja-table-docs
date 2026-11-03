# Story and script

Most weak product films are good motion around no story: a feature list, three cards in a row, a logo, a URL.
Write the story before any HTML.

## 1. The one thing

Write three lines at the top of `SPEC.md`:

- **What it is**: "You can now …" (a whole release is not one thing; take its headline, e.g. "Turn a file into a
  table your visitors can search, sort and buy from").
- **What the viewer remembers**, in their words, not a slogan.
- **One viewer, one real task, one piece of real data** that travels from the hook to the payoff. In both our
  films that is the *Product Price List* CSV (41 real rows from the demo site): it is dropped in, styled,
  searched, sorted, highlighted and finally shown on a phone. Same rows on every beat.

Facts (labels, options, prices, Free vs Pro) come from the plugin. Creative choices (angle, tone, look) are ours.
What the source does not say stays unsaid.

## 2. Three storylines, then one

Three different films, not three titles. Each has a **world**, a **device** and a **form**:

| Device | Ninja Tables example |
|---|---|
| The feature as the hook | the table already sorting/searching in frame 0 |
| Life before and after | a raw CSV wall of text → a styled, searchable table |
| One object across apps | the CSV travels from Finder into Ninja Tables, then onto a phone |
| The result first | the finished shop table plays, then pull back to the admin that made it |
| A character does the work | the 👆 hand drags, clicks and drops; every cut has a cause |
| Type carries the argument | giant kinetic headlines cut on the beat |

| Form | Example |
|---|---|
| One frame that rebuilds | the promo: one big table card keeps changing under new headlines |
| Object-to-object chain | button → card → phone |
| Cut on the beat | 2 s bars, light-leak seams |
| Split screen to one | old UI vs new UI collapsing into the new one (needs an old-UI capture) |

Per storyline write: name, device + form, two sentences of what the viewer sees, the first 2 seconds exactly,
beats in one line, look in one line, sound in one line. Recommend one first with a one-clause reason. Save all
three in `STORYLINES.md` so a later turn can switch.

Our past picks (reuse or vary them): A "From file to phone" (built as `launch-film`), B "Same table, new home",
C "⌘K", and the layer promo "Drop in a file → Sell right from the table" (built as `promo-layer`).

## 3. Beats (promo, ~28 s on a 2 s grid)

| Beat | Time | Job | promo-layer did |
|---|---|---|---|
| Hook | 0–3.3 | the need or the result, readable in frame 0 (the thumbnail) | "Your data, as tables people love." + coral line "Built right inside WordPress." words grey → ink |
| Seam | 2.83 | light leak | warm leak from top right |
| Demo verbs | 3.3–15 | 4–6 verbs, one headline each, the product stays put and changes | Drop in a file · Pick a style · Let visitors search · Sort with one click · Highlight what matters (Pro) · Stacks on phones |
| Second world | 15–19 | the same data doing a job somewhere else | "Sell right from the table." FluentCart rows + Add To Cart |
| Proof grid | 19–24.3 | breadth: sources / integrations, 4 tiles + real logos | "Files. Posts. Products. Sheets." |
| Seam | 23.83 | light leak | |
| End card | 24.3–28.5 | eyebrow, logo, giant URL, CTA pill, offer pill; held ≥ 2 s | THE ALL-NEW NINJA TABLES · ninjatables.com · Get it Now · FREE on WordPress.org |

Scale it: a 15 s cut keeps hook, 2–3 verbs, end card. A 40 s film adds a "payoff" beat (phone or front end at
normal speed) 60–80% in. Process runs fast; the payoff plays at normal speed.

## 4. Copy rules

- One line on screen at a time, ≤ 6 words, sentence case. Verb first in demo beats ("Pick a style.").
- Read time: about 0.3 s per word + 0.5 s; the last line holds ≥ 2 s. `check` flags `line_unread`.
- The first line is never "Introducing", "Meet …" or the logo. After the pain, "The all-new Ninja Tables" is fine.
- Banned words: unlock, seamless, supercharge, game-changer, revolutionize, effortless, "in seconds" (unless measured).
- Accent colour is rationed: one word per headline at most, the Pro mark, the CTA.
- Read the lines alone: a stranger gets the pitch. Watch the pictures alone: same story.
- No voiceover unless asked. Without one, headlines and the product's own text carry the words.

## 5. Tells of a generated film (avoid, and list in `SPEC.md` under BANNED)

Dark void with small floating UI · glow and particles · everything fading and sliding up the same way · three
cards in a row as a "feature list" · the logo docked in a corner · typing into a prompt box as the opener ·
an invented dashboard · idle breathing/floating loops on titles or UI · a small window in an empty canvas ·
product UI tilted in 3D.
