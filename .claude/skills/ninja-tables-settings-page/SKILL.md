---
name: ninja-tables-settings-page
description: 'Specialist template for Ninja Tables settings-reference pages: one table-editor tab, panel or dialog tab documented option by option (docs/table-settings, column-settings, styling-design, responsive-design, table-formatting, drag-drop-settings) and the global gear-icon Settings pages in table-management (tools-and-settings, define-permission-for-table-users, clear-table-cache). USE FOR: write or edit a page that explains what each option on a settings screen does, e.g. pagination.md, table-rendering-settings.md, basic-settings.md, ninja-tables-drag-and-drop-table-settings.md, tools-and-settings.md. DO NOT USE FOR: connected data sources (ninja-tables-integration-page), one element or column type (ninja-tables-element-page), step-by-step tasks (ninja-tables-howto-page).'
---

# Ninja Tables Settings Page Template

Always pair with `ninja-tables-doc-writer` (voice and universal rules).

A settings page explains one screen of options: where to open it, then what each option does, in
the order the UI shows them. It is reference, not narrative. Most are 25–75 lines.

## When to use this template

- **Table editor tabs and panels**: `table-rendering-settings`, `csv-and-print-button`,
  `custom-filters` (table-settings); `pagination`, `sorting`, `table-color-settings`,
  `table-font-settings`, `other-design-settings` (styling-design); `stackable-table`,
  `column-responsive-breakpoints` (responsive-design).
- **Column dialog tabs**: `basic-settings`, `advanced-settings`, `conditional-formatting`,
  `transform-value` (column-settings); `colspan-cell-merge`, `rowspan` (table-formatting).
- **Drag & Drop builder panels**: `ninja-tables-drag-and-drop-table-settings`,
  `drag-drop-cell-settings`, `responsive-table-design`, `spacing` (drag-drop-settings).
- **Global Settings (gear icon)**: `tools-and-settings`, `define-permission-for-table-users`,
  `clear-table-cache` (table-management).

Not for the 8-line "moved" pointer pages (e.g. `column-rearrangement`, `language-settings`).
Leave those as they are.

## Required structure

```
---
title: "<Feature Name>"
description: "<One real sentence: what the user can change here and why.>"
---

# <Feature Name>

**<Feature Name>** (Pro if Pro-only) <does what, 1–2 sentences>. <When you would change it.>

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **<Tab>** tab<, then the **<Sub-tab>** tab in the settings panel>.
3. Open **<Section>**.

![<Section> settings](/images/<category>/<short-slug>/1.-<Label>.webp)

<One line on the master switch, if the section has one.>

## <First UI group, exact label>

- **<Option label>**: <what it does, lowercase start>. <Default if known.>
- **<Option label>** (Pro): <what it does>. When it's on, **<Dependent option>** sets <...>.

### <Sub-group, only if the UI nests one>

- **<Option>**: <...>

## <Next UI group>

...

Click **Save** to keep your changes.

::: tip
<One related setting or shortcode override, with a link: see [Text](/<slug>).>
:::
```

## Rules

- **Open with the path, not a heading.** The numbered "how to open" list sits straight under the
  intro, with no `## Accessing` H2. Use the exact UI path with `›` and bold labels:
  - Table editor: **Ninja Tables** › **Tables** › open a table › **Appearance** › **Features**.
  - Column dialog: **Table Rows** › gear icon on the column header › **Column settings** ›
    **Basic** / **Advanced** / **Conditions** (Pro) / **Transform** (Pro).
  - Drag & Drop: click outside the table (table settings) or a cell (cell settings), then the
    **Settings** tab of the right panel.
  - Global: the **gear** icon in the top bar › **Settings** › **General** / **Global
    appearance** / **Permissions** / **Performance** / **License**.
- **H2s mirror the UI groups, in UI order, unnumbered.** Use the exact group label from the
  screen (`## Caching Configuration`, `## Border`, `## Sticky (Pro)`). No `### 1.` numbering.
- **Option bullets**: `- **Label**: lowercase description.` The colon sits outside the bold.
  Give ranges and defaults in brackets when the code confirms them: `(0–50, default 10)`.
- **Choice lists**: list each choice as its own bullet in bold, mark the default with
  `(default)`, and say when to pick it.
- **Mark Pro per option**, after the label: `- **Colors** (Pro): ...`. A whole Pro H2 gets
  `(Pro)` in the heading.
- **Close with** `Click **Save** to keep your changes.` For global Settings sections, the button
  is **Save settings**; for a column dialog, **Add column** / **Save column**.
- **One callout at most**, `::: tip` or `::: warning`, usually a cross-link to a related
  setting, a shortcode override or [Clear caches](/clear-table-cache).
- **Removed UI**: name the old location (Table Design tab, Tools page, Columns tab) only in one
  short line or tip saying where the option moved, as `tools-and-settings` does.

## Images

- One overview shot of the panel straight after the "how to open" list, then one per H2 group
  only where the group is visually distinct. Place it after that group's bullets.
- A preview shot of the result on the front end is welcome at the end
  (`pagination` ends with "This is how pagination looks on the site:").
- Paths: `/images/<category>/<short-slug>/<n>.-<Label>.webp`, numbered in page order. Reuse
  the page's existing short-slug folder under `public/images/<category>/`.
- Screenshots are produced by the `ninja-tables-screenshotter` subagent / the
  `ninja-tables-doc-screenshots` skill, never by hand. Leave
  `<!-- TODO(screenshot): <screen and state to capture> -->` only when a screen can't be
  reached.

## Verbatim model — `docs/styling-design/pagination.md`

```
# Pagination

**Pagination** splits a long table into pages, so visitors see a set number of rows at a time.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Pagination**.

![Pagination settings](/images/styling-design/pagination/1.-New-Ui-pagination.webp)

The switch in the **Pagination** heading turns pagination on or off. Turn it off to show all rows at once.

## Settings

- **Rows per page**: how many rows each page shows. The default is 10.
- **Let visitors change page size** (Pro): adds a dropdown so visitors can pick how many rows they see. When it's on, **Page sizes** sets the choices, as numbers separated by commas (default: `10,20,50,100`).
- **Scroll to the table top on page change** (Pro): when a visitor moves to another page, the page scrolls back to the top of the table.

### Look

- **Position**: place the page numbers on the **Left**, **Center** or **Right**.
- **Colors** (Pro): background, active page and border of the pagination bar.

Click **Save** to keep your changes.
```

Global Settings variant: see `docs/table-management/tools-and-settings.md`. It opens with "Open
it with the **gear** icon in the top bar", lists the sections as bullets, then gives one H2 per
section in the left-menu order.

## Sidebar entry

Add to `.vitepress/config.mts`. The sidebar `text` is a short task-first label, not the H1:

```ts
{ text: 'Pagination', link: '/pagination' }   // group: Appearance
```

Groups: column-settings and table-formatting go in **Columns**. styling-design and
responsive-design go in **Appearance** (`column-responsive-breakpoints` is in Columns).
`custom-filters` goes in **Filters & Frontend Editing**. `table-rendering-settings` and
`table-styling-css-selector` go in **Performance & Custom Code**. drag-drop-settings go in
**Drag & Drop Builder**, and global Settings in **Manage Tables & Settings**.

## Common pitfalls

- **Inventing labels.** Copy them from `.claude/redesign-audit/00-editor-ui-labels.md` or the
  plugin's `resources/admin/` code (read-only). Never reuse labels from the old UI.
- **Documenting options out of UI order**, or grouping them by theme instead of by the
  screen's own sections.
- **Adding a `## How to access` heading** or FluentCart-style `### 1.` numbered subsections.
- **Writing `**Label:**` with the colon inside the bold.** That style belongs to field-type
  pages, not settings pages.
- **Forgetting the Pro marks** per option, or promising behaviour the plugin doesn't have today.
- **Missing the save line** at the end.
