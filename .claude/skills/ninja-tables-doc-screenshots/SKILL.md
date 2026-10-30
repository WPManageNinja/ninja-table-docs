---
name: ninja-tables-doc-screenshots
description: Take, annotate, and place pixel-consistent screenshots of the Ninja Tables admin and front end for the docs. Use whenever the user asks to "take screenshots", "capture the UI", "update the screenshot", "refresh images", or when a doc page needs an image of a Ninja Tables screen. Covers the headless-Chrome runner (scripts/screenshots/shoot.cjs), JSON shot plans, crop/arrow/naming rules, placing images in markdown, and verification. Usually delegated to the `ninja-tables-screenshotter` subagent (cheaper model). Never use the Claude-in-Chrome extension or macOS screencapture for this.
---

# Ninja Tables Doc Screenshots

> **Filling the docs' `TODO(screenshot)` placeholders?** Use `ninja-tables-take-screenshots` first: it sets the
> quality bar (natural look, 1440×900 viewport, real front-end pages), the arrow / numbered-badge / highlight rules
> and the placeholder workflow. This file stays the runner reference.

Every screenshot is taken by a script, never by hand, so it is reproducible and every image on the
site has the same framing, scale and arrow style. You write a small JSON **plan**; the runner logs in,
navigates, clips, draws arrows and writes `.webp`. Ported from the FluentCart docs runner.

Read this whole file before taking a screenshot, then follow §2 in order.

**Never** use `mcp__claude-in-chrome__*`, `mcp__Claude_Browser__*`, `mcp__computer-use__*`,
`mcp__remote-devices__*` or `screencapture`. The browser extension is on a different PC and must not
be touched. The runner uses headless Chrome on this Mac only.

---

## 1. Facts you must not rediscover

| Thing | Value |
|---|---|
| Dev site | `http://localhost:10013` (Local by Flywheel site "cart"). Login `admin` / `admin`. |
| Plugin code the site runs | `~/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev` (git clone, branch `redesign` = the new UI) + `ninja-tables-pro`. Runs with `env => 'dev'`, so the Vite dev server on port **8881** must be running (`lsof -iTCP:8881 -sTCP:LISTEN`). If it is not, stop and tell the user; do not edit the plugin. |
| Admin URL | `http://localhost:10013/wp-admin/admin.php?page=ninja_tables#<route>` |
| Routes | `/` Tables list · `/create` · `/tools` (Import) · `/tools/global_settings` · `/tools/default_table_appearance` · `/tools/permission` · `/tools/performance` · `/tools/licensing` · `/charts` · `/help` · `/tables/<id>` (Table Rows) · `/tables/<id>/columns` · `/filters` · `/design_studio` · `/configuration` · `/additional_css` · `/import-export` · `/table_editing` · `/table_builder_edit_table/<id>` (Drag & Drop). Source: `resources/admin/routes.js` in the plugin. |
| Demo data | Realistic seeded tables (Product Price List 41 rows, Employee Directory 150, World Countries, Monthly Sales by Region 2026, Conference Schedule, Course Catalog with buttons, Hosting Plans Comparison, Order History 1,200 rows on FooTable **and** DataTables) plus 5 pages embedding them. Created by `./scripts/demo-data/seed.sh` (see `scripts/demo-data/README.md`). **Always shoot demo tables, never the `DOCTEST …` tables** (empty or test-named). |
| Table ids | Change on every re-seed. Refer to tables by title: `{"admin": "/tables/{{Employee Directory}}/configuration"}`, pages by `{{page:Our Team}}`. Map: `scripts/screenshots/demo-tables.json`. Missing map/title → run `./scripts/demo-data/seed.sh`. |
| App root | `#data-tables-app`, laid out 160 px from the left (WP menu) and 32 px from the top (admin bar). `"clip": "app"` cuts exactly that. |
| Front end | Table preview: `/?ninjatable_preview={{Product Price List}}`; a real page: `{{page:Shop Price List}}/`. Visit logged in (the site is in "coming soon" mode). |
| Auto-hidden | WP admin bar + menu, notices, the "Welcome to the new Ninja Tables" banner (`.nt-welcome`), the telemetry opt-in dialog. Never click its Skip/Opt-in. |
| Row classes | Settings rows on the table editor are `.nt-config__row`; option cards `.nt-radio-card`; editor tabs `.nt-tab`; top nav `.nt-topbar__nav`; cards `.nt-card`. |
| Runner | `npm run shots -- scripts/screenshots/plans/<plan>.json [--only=a,b] [--out=<dir>]` |
| Output | `public/images/<category>/<short-slug>/<n>.-<Short-Label>.webp`; raw PNGs in `scripts/screenshots/raw/` (gitignored). |
| Scale | Viewport 1600 CSS px, device scale 2 → ~2880 px wide, same as the existing library. Never resize. |
| Arrow colour | Ninja Tables accent pink `#FF4E6B` with a white halo (`scripts/screenshots/lib/annotate.cjs`). |

---

## 2. Workflow

### Step 1 — Shot list from the doc, not from the UI
Read the `.md` page. For each image write one row:

```
file name | what it must show | clip | arrow target (if any) | line in the .md it sits under
```

- One image per step that involves a click, right after that step. Reference sections get one image per section.
- Arrows only where the text says click/select/open/enable. Field-reference images get no arrow.
- **Replacing** a stale image: reuse its exact file name so the markdown does not change.
- **New** image: continue the numbering, name `<n>.-<Short-Label>.webp` (Title-Case-Hyphenated).
- **`outDir` always comes from the page's existing image paths** in the markdown (e.g. `tools-and-settings.md` uses `public/images/table-management/tools-settings`, not a folder derived from the slug). Only invent a folder when the page has no images yet.
- **Arrow or not:** an arrow only when the image sits directly under a step that says click/select/open/enable, and it points at that exact control. An overview of a whole screen gets no arrow even if a nearby sentence mentions how to open it.

### Step 2 — Confirm the UI matches the doc
Do a preview run (Step 4 with `--out`) and look at it. If a label or control the doc mentions does
not exist on the site, **stop and report it**. Never shoot something "similar".

### Step 3 — Write the plan
`scripts/screenshots/plans/<page-slug>.json`. Copy `table-rendering-settings.json` and edit. Full step
vocabulary is in the header of `scripts/screenshots/shoot.cjs`.

```json
{
  "doc": "docs/table-settings/table-rendering-settings.md",
  "outDir": "public/images/table-settings/table-rendering-settings",
  "viewport": { "width": 1600, "height": 1100 },
  "steps": [
    { "admin": "/tables/895/configuration" },
    { "shot": { "name": "1.-New-Ui-table-rendering-settings", "clip": "app", "crop": "auto",
        "arrows": [ { "target": { "selector": ".nt-tab", "hasText": "Table Configuration" }, "from": "bottom", "len": 140 } ] } },
    { "shot": { "name": "2.-Rendering-Setting", "clip": { "rows": ["Rendering Setting"], "pad": 6 },
        "arrows": [ { "target": { "selector": ".nt-radio-card", "hasText": "Legacy" }, "from": "right", "len": 130 } ] } }
  ]
}
```

Selectors (`<sel>`):
- CSS string: `".nt-card"`, `".nt-topbar__nav a:has-text(\"Import\")"`
- `{ "text": "New table" }` exact visible text
- `{ "role": "button", "name": "^save$" }` role + name regex (use for **Save**)
- `{ "selector": ".nt-radio-card", "hasText": "Legacy" }` CSS narrowed by text
- `{ "row": "Rendering Setting", "part": "control" | "label" | "row" }` a settings row by its label text (arrow targets only)

Clips:
- `"app"` the whole plugin screen without WP chrome. **Always add `"crop": "auto"`**: it grows the viewport until the whole screen fits (tall settings pages need ~1800 CSS px) and ends the image 24 px under the last content. No manual heights.
- `{ "rows": ["Label A", "Label B"], "pad": 6 }` one or more settings rows. Keep `pad` small (6–12); rows touch each other.
- `{ "element": "<sel>", "pad": 24 }` a dialog, card, dropdown, table.
- Manual alternative only if `auto` frames badly: `{ "viewport": {...} }` applies to every later step, so put it before the `admin` step it is for, and `"crop": { "height": N }` is in image px (CSS px × 2).
- Plan field `"doc"` is informational (which page the plan feeds); the runner ignores it.

Arrows: `from` = side the arrow comes from, the side with empty space. Tabs/top nav → `"bottom"`. Right-column controls → `"right"`. `len` 120–160. One arrow per image, no labels.

Data: `fillByLabel` / `fill` only to make empty fields look real; never click **Save** unless the doc's
point is the saved result, and then restore the original value in the same plan. Sample values only
(`Product Catalog`, `Pricing Plans`), never real customer data.

### Step 4 — Run
```bash
# preview: writes to a temp folder, leaves public/images untouched
npm run shots -- scripts/screenshots/plans/<slug>.json --out=<scratchpad>/shots
# final
npm run shots -- scripts/screenshots/plans/<slug>.json
npm run shots -- scripts/screenshots/plans/<slug>.json --only=2.-Rendering-Setting   # redo one
```
~10 s login, ~2 s per shot. "login attempt N did not redirect" is normal on a slow site; it retries.
Selector not found: read the Vue file for that screen in the plugin's `resources/admin/` for class
names. Do not guess.

### Step 5 — Verify every image (mandatory)
Open each `.webp` with the Read tool and check:
1. No WP admin bar/menu, no browser chrome, no welcome banner, no opt-in dialog, no notices.
2. The control is fully in frame with breathing room; nothing cut mid-word.
3. Arrow tip just outside the control; it covers no text and crosses no other control.
4. State is right (correct tab active, option selected, dialog open, fields filled).
5. No large empty band at the bottom (use `"crop": "auto"`).
Read shrinks tall images for display. For a tall shot, also check the top and bottom edges closely; if in doubt, add a temporary `{ "rows": [...] }` or `{ "element": ... }` close-up shot to the preview run.
Anything wrong → fix the plan, re-run with `--only=`. Never hand-edit images. Edit plan JSON with the Edit tool, not `sed` (BSD sed on macOS differs).

### Step 6 — Place in markdown (only if the image is new)
- `![Descriptive alt text](/images/<category>/<short-slug>/<n>.-<Short-Label>.webp)` on its own line, blank line above and below, right after the step it shows.
- Then run the five image checks in `CLAUDE.md` → *Images → Verifying images* and `npm run docs:build`.

### Step 7 — Leave things as found
Restore any saved setting. Never change the plugin clone's branch or files. Keep the plan JSON in
`scripts/screenshots/plans/` as the regression fixture. Do not commit unless asked.

---

## 3. Hard rules
- If the runner cannot do something, extend `scripts/screenshots/lib/harness.cjs` and keep plans declarative.
- Never crop part of a control to fit an arrow; move the arrow.
- Never show other plugins' UI or WordPress chrome.
- Never invent UI. Missing label/control → stop and report.
