---
name: ninja-tables-featured-images
description: Generate or debug the auto-generated 1200x630 social-share (og:image / twitter:image) cards for Ninja Tables doc pages. Use after adding a page, renaming a slug, changing a page title, when a link preview shows the wrong or generic card, or when touching featuredImageFor() / cardNameFor(). Covers scripts/generate-featured-images.mjs, the flat-slug naming rule, orphans, and the PNG exception to the webp rule.
---

# Ninja Tables Featured Images

Every page gets a branded 1200×630 PNG with its title and section, used as `og:image` and
`twitter:image`. Pages without a card fall back to `default.png`.

```
public/images/featured/<card>.png      served at /images/featured/<card>.png
```

## Commands

```bash
npm run featured:generate     # cards for pages that don't have one yet (idempotent, skips existing)
npm run featured:regenerate   # re-render every card (only after changing the generator's design)
```

## Naming rule (must match in two places)

`card = <served page path without .md, "/" replaced by "--"> + ".png"`

The served path is the path **after** `rewrites`. This site flattens `docs/<category>/<slug>.md` to
`<slug>.md`, so the card is simply `<slug>.png` (e.g. `docs/table-settings/pagination.md` →
`pagination.png`). The home page is `index.png`.

The rule lives in `cardNameFor()` / `servedPath()` in `scripts/generate-featured-images.mjs` and in
`featuredImageFor()` in `.vitepress/config.mts`. Change one, change the other. The script fails loudly if
two pages would produce the same card name.

## When to run

| Change | Do |
|---|---|
| New page | `npm run featured:generate`, commit the new PNG with the page |
| Slug rename | delete the old `<old-slug>.png`, then generate |
| Title (H1/`title`) change | delete `<slug>.png`, then generate (the script never overwrites) |
| Page deleted | delete its card; the script only **reports** orphans, it never deletes |

## Exclusions

Not carded: `README.md`, `CLAUDE.md`, `REDESIGN-PLAN.md` and other internal files, anything under
`.vitepress/`, `.claude/`, `node_modules/`, `public/` and `docs/public/`.

## Gotchas

- These PNGs are the deliberate exception to the "images must be .webp" rule: social scrapers expect
  PNG/JPEG. The image checks in CLAUDE.md look only at `/images/...` references in markdown, so cards never
  show as orphans there.
- `featuredImageFor()` checks the file exists **at build time**: generate the card before
  `npm run docs:build`, or the page ships with `default.png`.
- Social platforms cache previews. After deploy, re-scrape (e.g. LinkedIn Post Inspector, Facebook
  Sharing Debugger) to see a changed card.
