---
name: ninja-tables-take-screenshots
description: Fill the docs' `<!-- TODO(screenshot): … -->` placeholders with clean, natural screenshots that look like a careful person took them, and that make every step obvious with arrows, numbered step badges and highlight boxes. Covers the quality bar, annotation rules, framing, front-end and mobile shots, the placeholder → plan → preview → review → place workflow, batching across Sonnet subagents, blocked shots and orphan cleanup. USE FOR: take the screenshots, fill the screenshot placeholders, screenshot this page, add images to the docs, redo a screenshot, review the screenshots. Builds on ninja-tables-doc-screenshots (runner reference). DO NOT USE FOR: writing doc text (ninja-tables-doc-writer), social cards (ninja-tables-featured-images).
---

# Ninja Tables: Take the Screenshots

The docs carry structured placeholders where an image belongs (293 after the 2026-10-30 overhaul). This skill
turns each one into a real screenshot of the local site that:

1. **looks natural**, like a careful person captured their own screen: real data, light theme, calm state,
   nothing half-open, no debug or admin-only clutter, normal proportions; and
2. **makes the step obvious**: the reader sees at a glance where to click and in which order.

Runner mechanics (plan JSON, step types, clips, selectors) are in `ninja-tables-doc-screenshots` §1–§3 and the
header of `scripts/screenshots/shoot.cjs`. Read both once. This skill adds the quality bar, the annotation rules
and the placeholder workflow on top.

---

## Hard rules

- **Never touch the other PC.** No `mcp__claude-in-chrome__*`, `mcp__remote-devices__*`, `mcp__Claude_Browser__*`,
  `mcp__computer-use__*`, RemoteTrigger, SendMessage, ListAgents, Artifact, `screencapture`. Only the headless runner
  on this Mac. Repeat this rule verbatim to every subagent.
- Plugin folders are read-only. The Vite dev server on port 8881 must be up (`lsof -iTCP:8881 -sTCP:LISTEN`);
  if not, stop and ask the user to start it.
- Shoot the seeded demo tables and pages only (`scripts/screenshots/demo-tables.json`), never `DOCTEST …` items.
  Never **Save** a demo table unless the shot is about the saved result; then restore it in the same plan.
- Never hand-edit an image. Never invent UI: if the screen doesn't match the doc, stop and report the page + line.
- Never bulk-delete images. Old files are removed per page, only after its new shots are placed and the user
  approved the deletion list (§6).
- No commits unless the user asks.

---

## 1. The quality bar ("as if a person took it")

The harness already does these automatically, so don't fight them: light theme forced; welcome banner and
Getting started card dismissed (plan `"onboarding": true` keeps them); WP admin bar/menu, notices and nag dialogs
hidden; animations and transitions off; no scrollbars, text caret or focus rings; fonts loaded; mouse parked
off-screen; on the front end, the admin-only **Edit Table** link hidden and the theme content column widened to
1180 px (`"contentWidth": false` keeps the theme as is).

Your plan must take care of the rest:

| Do | Don't |
|---|---|
| Viewport **1440 × 900** (laptop) for admin and desktop front end; it renders at 2× (2880 px wide) | Giant 1800 px-tall full-page grabs; tiny crops with no context |
| Show the screen **as the reader will see it at that step**: right tab active, section open, dropdown open, value filled | A half-loaded screen, skeleton loaders, a spinner, an empty table |
| Real-looking demo data; type sample values (`Product Catalog`, `Pricing Plans`) into empty fields that the shot is about | "test", "asdf", `DOCTEST`, lorem ipsum, real customer data |
| Keep enough context to orient: the tab bar or section heading stays in frame | Crop so tight the reader can't tell where the control lives |
| Front end on the **real demo page** (`{{page:Our Team}}/` etc.), scrolled so the feature sits in the lower half with rows above it | `?ninjatable_preview=` (it adds an admin-only notice and "Edit" link); a pager cut off at the edge |
| Mobile/responsive shots at **390 × 844** (`{"viewport": {...}}` before the `front` step) | Desktop shots for a mobile feature |
| One idea per image | Two unrelated features in one shot |

Framing by placeholder type:
- **First time a screen appears in the steps** → `"clip": "app"` (whole plugin screen, no WP chrome), viewport 900 high.
  Use `"crop": "auto"` only when the whole screen must be seen and is taller than 900.
- **A settings section explained option by option** → `"clip": "app"` with the section open and scrolled into view,
  OR `{"element": ".nt-ds-sec.is-open", "pad": 24}` when the section alone is self-explanatory. Keep its heading in frame.
- **A dialog, drawer, dropdown or popover** → `{"element": "<dialog sel>", "pad": 32}`; open it first with `click`.
- **Front-end result** → `"clip": "viewport"` on the real page; or `{"element": "<table wrapper>", "pad": 24}` for a short table.
- **WordPress screens** (Plugins page, block editor, admin menu) → a `css` step that un-hides what the shot is about
  (e.g. `#adminmenumain,#adminmenuback,#adminmenuwrap{visibility:visible!important}`), then a `{"x","y","width","height"}` clip.

## 2. Make the steps obvious (annotation rules)

Read the doc text **around** the placeholder first: the numbered steps or the sentence just above it decide what to mark.

| Situation | Annotation |
|---|---|
| The text says "Click / Open / Select / Turn on **X**" (one action) | One **arrow** at X, from the side with empty space (`from`, `len` 120–160). Tabs/top nav → `"bottom"`. Right-panel controls → `"left"`. |
| One image covers **several numbered steps** (e.g. 2. Appearance tab, 3. Features, 4. Pagination) | **Numbered badges** on each control, numbers **matching the step numbers in the text** (`"badges": [{"target": …, "n": 2, "pos": "top-right"}]`). No arrows then. |
| The text then explains **a field or a group of fields** in that image | A **highlight** box around that row/group (`"highlights": [{"row": "Rows Per Page", "part": "row"}]`). |
| A reference image of a whole section, explained option by option below | Highlight the section (or nothing if the clip *is* the section). No arrows. |
| Front-end result of a setting | Highlight the part that changed (pager, search box, button column). |

Limits: at most 1 arrow, or up to 4 badges + 1 highlight per image. Annotations never cover the label or value they
point at (badge `pos` and arrow `from` toward empty space). All annotations use the brand pink `#FF4E6B` with a white
halo (in `annotate.cjs`); never add other colours, text labels or blur.

Proven pattern (pilot, `scripts/screenshots/plans/pagination.json`): shot 1 = Appearance screen with badges 1-2-3 on
**Appearance** › **Features** › **Pagination** and a highlight on **Rows Per Page**; shot 2 = the real "Our Team" page,
scrolled to the pager, pager highlighted.

## 3. Selectors: probe, don't guess

Before writing a plan for a screen, read its Vue file in the plugin (`resources/admin/views/**`, `components/**`) for
class names, and when unsure, probe the live DOM with a 10-line script using `scripts/screenshots/lib/harness.cjs`
(`launch()`, `gotoAdmin()` / `gotoFront()`, `page.evaluate`). Known traps:
- `.footable-paging` is also a class on the `<table>`; the pager is `tr.footable-paging ul.pagination`.
  DataTables pager: `.dataTables_paginate`.
- A comma-separated selector returns the **first match in DOM order**, not the first selector; use one precise selector.
- Settings rows: `.nt-setting-row` (`{"row": "<label>"}` finds them). Appearance sections: `.nt-ds-sec`, header button
  `.nt-ds-sec__btn`, open one `.nt-ds-sec.is-open`. Panel tabs: `{"role": "tab", "name": "^Features$"}`. Editor tabs: `.nt-tab`.
- Hash routes sometimes don't render on the first load: the harness waits for `#data-tables-app > *`; if a tab body is
  empty, add `{"wait": 1500}` or reload with a second `admin` step.

## 4. Workflow per page

1. **List** the page's placeholders and their target files:
   `node scripts/screenshots/placeholders.mjs list <slug>`
   (outDir = the page's old image folder from `page-folders.json`; name = `<n>.-<Short-Label>.webp` from the alt text).
2. **Read** the page around each placeholder; decide clip + annotations per §1–§2.
3. **Write** `scripts/screenshots/plans/<slug>.json` (`"doc"`, `"outDir"` from step 1, `"viewport": {1440×900}`,
   shot `"name"` = the file name from step 1 without `.webp`). One plan per page; keep it as a regression fixture.
4. **Preview**: `npm run shots -- scripts/screenshots/plans/<slug>.json --out=<scratchpad>/<slug>`.
5. **Look at every image** with Read and run the checklist (§5). Fix the plan, re-run with `--only=<name>`. Iterate
   until every image passes. Typical fixes: wrong highlight size → more precise selector; empty band → `"clip": "app"`
   or scroll; cramped table → front-end page not preview; badge on text → change `pos`.
6. **Final run** without `--out` (writes into `public/images/...`).
7. **Place**: `node scripts/screenshots/placeholders.mjs place <slug>` swaps each placeholder whose file exists for
   `![alt](/images/…)`; blocked ones stay.
8. **Verify**: `npm run docs:build`, image checks 1–4 from `CLAUDE.md` (must print nothing for this page).
9. **Orphans**: `node scripts/screenshots/placeholders.mjs orphans <slug>` → collect for §6.

## 5. Checklist for every image (all must pass)

1. Natural: light theme, real demo data, nothing loading or half-animated, no WP chrome / notices / nags / admin-only links,
   no scrollbars, no caret, no dev overlays, nothing cut mid-word at the edges.
2. Right state: the tab, section, dropdown, toggle and values match what the text around the placeholder says.
3. The step is obvious: annotation per §2, numbers match the text's step numbers, nothing covers a label or value.
4. Framing: enough context to orient, the subject not lost in empty space, no empty band > ~10% of the height.
5. Matches the placeholder's `screen`, `table`, `state`, `highlight`, `view`; the alt text describes what is visible
   (if the image shows something else, fix the image, not the alt).

## 6. Old images (orphans)

The 401 pre-redesign files in `public/images/` are now unreferenced. After a page's new shots are placed, list the
page's orphans (step 9) and include them in the batch report. Delete them only after the user approves that list
(`git rm` for tracked files). A new file never reuses an old file's name unless it replaces the same picture.

## 7. Shots that need setup (blocked by default)

Leave the placeholder in place and add one line inside it, `  blocked: <reason>`, then list it in the report:

| Needs | Placeholders | What unblocks it (ask the user first) |
|---|---|---|
| A site with no tables | guided setup wizard, empty states (`onboarding-setup-guide`, `tables-list-1`) | a throwaway Local site, or a temporary move of all tables to Trash and back |
| The free version | Pro badges, lock popups, "Get Pro", plan pill "Free" | deactivate Ninja Tables Pro briefly, reactivate (verify on the Plugins page) |
| ACF / Fluent Forms installed | ACF and Fluent Forms pages, Fluent Forms charts | install the plugin + sample data |
| Approved WooCommerce reviews | reviews table rows | add 3–5 sample reviews |
| A Google Sheet / remote CSV / remote DB | connected-source result shots | a published sample sheet URL; a reachable DB |

`placeholders.mjs place` never touches a blocked placeholder because its file doesn't exist.

## 8. Batching (Sonnet subagents)

Delegate pages to the **`ninja-tables-screenshotter`** subagent (Sonnet). One subagent per category or ~8 pages;
**at most 5 at a time** (bigger bursts tripped the permission check), never two agents on the same page. Each brief:
the page list, "read `.claude/skills/ninja-tables-take-screenshots/SKILL.md` and `ninja-tables-doc-screenshots`",
the other-PC rule verbatim, "preview to `<scratchpad>/<agent>/`, final run only after every image passes §5, then
`place`; do not delete orphans; report blocked shots". Only one agent may run `docs:build` at a time: let the main
session build after each wave.

Review after each wave (main session):
- `node scripts/screenshots/placeholders.mjs sheet <slug …> --out=<scratchpad>/review.html` builds a gallery
  (image next to its placeholder spec). Open it with Read image-by-image, or tell the user its full path so they
  can open it in their browser **on this PC**.
- Spot-check at least one image per page yourself; send failures back with the specific §5 item.

Order: start with 2 pilot pages and show them to the user; only then the rest, in journey order (Get Started →
Create → Rows → Columns → Appearance → Filters → Embed → Speed → Live data → Drag & Drop → Manage → Charts).

## 9. Report (per wave)

```
## Screenshots: <wave>
Pages: <n> · images taken: <n> · placeholders left: <n> (blocked: <n>)
| Page | Taken | Blocked (reason) | Orphans to delete |
Review gallery: <full path>
Build + image checks: <result>
Questions: <UI that didn't match the doc, with page:line>
```

Then update `.claude/SCREENSHOT-TODO.md` (rows per page: done date / blocked) and the image baseline line in
`CLAUDE.md` (refs, files, placeholders, orphans).
