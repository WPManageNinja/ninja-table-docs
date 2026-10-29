---
name: ninja-tables-howto-page
description: 'Specialist template for Ninja Tables task and procedural pages, where the reader wants to get one job done in order: docs/getting-started, creating-tables, drag-drop-tables, import-export, table-management (non-settings pages such as tables-list, table-cloning-duplicating, manual row sort), advanced-features (including developer pages with PHP/shortcode code blocks) and ninja-charts. USE FOR: write or edit create-your-first-table.md, onboarding-setup-guide.md, import-table-data-from-a-csv.md, table-cloning-duplicating.md, how-to-create-your-first-drag-and-drop-table-with-ninja-tables.md, hooks-and-filters.md, a chart how-to. DO NOT USE FOR: option-by-option reference of a tab or Settings screen (ninja-tables-settings-page), connected data sources or embedding (ninja-tables-integration-page), one element or column type (ninja-tables-element-page).'
---

# Ninja Tables How-to Page Template

Always pair with `ninja-tables-doc-writer` (voice and universal rules).

A how-to page gets the reader from a starting point to a finished result. It is organised by
phases of the task, each phase a short numbered list, with the edge cases after the main path.
Lengths vary widely, from 30 to 150 lines. Keep each phase short and link out for detail.

## When to use this template

- **Getting started**: `onboarding-setup-guide`, `how-to-install-and-activate-ninja-tables-plugin`,
  `upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key`.
- **Creating tables**: `create-your-first-table`, `working-in-table-rows`, `choose-table-engine`.
- **Drag & Drop**: `how-to-create-your-first-drag-and-drop-table-with-ninja-tables`,
  `drag-drop-templates`, `drag-drop-builder-tour`.
- **Import & export**: `import-table-data-from-a-csv`, `import-csv-file-to-an-existing-table`,
  `import-ninja-tables-json`, `import-table-from-tablepress-plugin`, `export-ninja-tables-csv-json`.
- **Table management**: `tables-list`, `table-cloning-duplicating`,
  `rearrangement-of-rows-in-ninja-tables-manual-row-sort`, `table-title-description-settings`.
- **Advanced features**: `frontend-editing`, `advanced-shortcode`, `shortcode-reference`,
  `hooks-and-filters`, `developer-code-recipes`.
- **Ninja Charts**: every page in `docs/ninja-charts`.

## Required structure

```
---
title: "<Task, e.g. Create Your First Table>"
description: "<What the reader ends up with, and the main steps.>"
---

# <Task>

<1–3 sentences: what the feature is (**bold** on first use, (Pro) if Pro), and what this guide
gets you to. Point to the shorter or longer sibling page if one exists.>

<Optional .video-embed YouTube block.>

## <Phase 1, imperative: Create the table>

1. <Exact path: click **Create Table** in the top bar.>
2. <Action with bold label.>
3. ...

![<What the screen shows>](/images/<category>/<short-slug>/1.-<Label>.webp)

<One line on what happens next: "The table opens in the editor on the **Table Rows** tab.">

## <Phase 2: Add columns>

...

## <Edge case / variant, e.g. Import large files>

## <Tips / Fix ... / What gets copied>

## Next steps            (optional)

- [<Task-first link text>](/<slug>)
```

## Rules

- **H2s are phases, named as actions**: "Create the table", "Add rows", "Save and add it to
  your site", "Duplicate a table". Variants and fixes come after the main path ("Import large
  files", "Fix CSV files from Excel").
- **Numbered lists for the main path; bullets for options, toolbars and "what gets copied".**
  Nest the choices under the step that offers them (sub-bullets under step 4, or an
  `### From scratch` / `### From a template` H3 per branch).
- **`## Step N:` headings** only for a linear quick start (`onboarding-setup-guide`) or when the
  reader must work in two places in order. Otherwise use plain phase H2s.
- **State the result after each phase** in one line, and name the screen it lands on.
- **Exact navigation**: **Create Table** / **Import** / **Tables** in the top bar; **Tables** ›
  your table › **Table Rows**; the row's **More actions** (⋯) › **Duplicate**.
- **One `::: warning` for the trap that breaks the task**, e.g. "Save once before embedding"
  on Drag & Drop tables, or the engine that can't change later.
- **Finish with embedding or next steps.** Link [Add a Table to Your Site](/embed-tables)
  when the task ends with a table that's ready to publish.
- **Developer pages** (`hooks-and-filters`, `developer-code-recipes`, `shortcode-reference`):
  - Say where the code goes ("your child theme's `functions.php` or a code-snippets plugin").
  - Use reference tables (`| Hook | Type | Parameters | Purpose |`) and fenced ```` ```php ````
    examples headed by a bold `**Example: <what it does>**` line.
  - Use `123` as the sample table ID and real column keys.
  - Developer prose is allowed here, but keep sentences short.
- **Ninja Charts pages are not rewritten yet.** They still use "We'll show you how" and
  `> [!Tip]`. Don't copy that voice. When you edit one, bring it to this template.

## Images

- One screenshot per phase, right after the step that opens the screen it shows. The final
  result (table in the editor or on the site) goes last.
- Paths: `/images/<category>/<short-slug>/<n>.-<Label>.webp`, numbered in page order. Reuse the
  existing folder (e.g. `creating-tables/create-first-table/`).
- Screenshots are produced by the `ninja-tables-screenshotter` subagent / the
  `ninja-tables-doc-screenshots` skill, never by hand. Leave
  `<!-- TODO(screenshot): <screen and state to capture> -->` only when a screen can't be
  reached, e.g. a fresh-install welcome screen on a site that already has tables.
- Developer pages normally have no screenshots; code blocks carry them.

## Verbatim model — `docs/table-management/table-cloning-duplicating.md`

```
# Table Cloning / Duplicating

**Duplicate** makes a full copy of a table, so you can reuse its columns, rows and design as the starting point for a new one. It's quicker than building a similar table from scratch.

## Duplicate a table

1. Go to the [Tables list](/tables-list) (**Tables** in the top bar).
2. Find the table and click its **More actions** (⋯) button at the end of the row.
3. Click **Duplicate**.

![Table ](/images/table-management/table-cloning-duplicating/1.-duplicate.webp)

Ninja Tables creates the copy and opens it straight away, in the editor (or in the Drag & Drop builder for a Drag & Drop table). The copy is named after the original with "( Duplicate )" added.

## What gets copied

- The table's columns, settings and design.
- All of its rows, including tables that use the **DataTables** engine.
```

Longer model: `docs/creating-tables/create-your-first-table.md`, which runs Create the table →
Add columns → Add rows → Edit, duplicate and delete rows → … → Preview and embed → Next steps.

## Sidebar entry

```ts
{ text: 'Duplicate a table', link: '/table-cloning-duplicating' }   // Add & Edit Rows
```

Labels are short and task-first ("Import a CSV, Excel or JSON file", "Sort rows manually").
Groups: **Get Started**, **Create a Table** (incl. imports), **Add & Edit Rows** (incl. export,
duplicate), **Drag & Drop Builder**, **Add Tables to Your Site** (shortcode pages),
**Manage Tables & Settings**, **Filters & Frontend Editing**, **Charts**, **For Developers**.

## Common pitfalls

- **Old paths**: "Ninja Tables › Add Table", "Tools › Import". Now **Create Table** and
  **Import** are in the top bar.
- **A wall of options inside the steps.** Move option-by-option detail to the settings page and
  link to it.
- **Numbering every list.** Only the ordered path gets numbers.
- **Missing the result line**, so the reader can't tell whether a step worked.
- **Code blocks on end-user pages.** Shortcodes go in code spans. Fenced blocks are for
  developer pages and short samples (CSV, select items).
