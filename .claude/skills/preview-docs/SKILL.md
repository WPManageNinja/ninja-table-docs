---
name: preview-docs
description: Run and verify this VitePress documentation site locally — start the dev server to eyeball rendered pages, or run a production build to confirm content changes don't break the site. Use after editing guide/** Markdown, the theme, or .vitepress/config.mts, or whenever asked to preview/run/build the docs.
---

# Preview & verify the docs

The only deps are `vitepress` and `vue` — no other build tooling in this repo.

## Setup

```
npm install
```

## Live preview

```
npm run docs:dev
```

Hot-reloading dev server, default `http://localhost:5173`. Best for checking rendering, sidebar
placement, image resolution, and internal links while iterating.

## Production build

```
npm run docs:build
```

Outputs to `.vitepress/dist` (gitignored — never commit it). Confirms the whole site compiles
cleanly; a broken internal link, a malformed frontmatter block, or invalid markdown (e.g. an
unclosed HTML tag) will fail the build here even if `docs:dev` looked fine. Follow with:

```
npm run docs:preview
```

to serve the production build locally if you want to double-check the built output specifically.

## What to check

- The new/edited page shows up in the correct **nested** sidebar group (see `add-doc-page` for the
  group layout) — not just floating unreachable.
- Images resolve — whichever pattern this page uses (external `ninjatables.com` URL or local
  `/guide/public/images/...` path).
- Internal links resolve (relative, no `.md` extension).
- `docs:build` completes with no errors.

## Tips

- There's no headless browser installed in this environment by default — verify visually via
  `docs:dev` rather than assuming a screenshot tool is available.
- For checking many pages at once, prefer targeted `grep`/`find` over reading whole files — keeps
  large sweeps fast and cheap.
