---
name: ninja-tables-integration-page
description: 'Specialist template for Ninja Tables connected-data and WordPress-integration pages: a table whose rows come from somewhere else (Google Sheets, Remote CSV, WP Posts/CPTs, WooCommerce, FluentCart, Fluent Forms, Custom SQL) in docs/data-sources, plus the docs/wordpress-integration pages (embed-tables, dynamic columns, post meta, ACF, featured image). USE FOR: write or edit google-sheets-integration.md, fluent-forms-integration.md, create-wp-posts-table.md, woocommerce-integration.md, embed-tables.md, a new "connect X" page. DO NOT USE FOR: editor tab option pages (ninja-tables-settings-page), single column types or Drag & Drop elements (ninja-tables-element-page), import/export or general tasks (ninja-tables-howto-page).'
---

# Ninja Tables Integration Page Template

Always pair with `ninja-tables-doc-writer` (voice and universal rules).

An integration page shows how to build a table from a live source, or how to connect a table to
WordPress. It moves in a fixed order: what it is, what you need, create it, change it later, then
the source-specific extras. Most pages are 50–115 lines.

## When to use this template

- **Connected tables (docs/data-sources)**: `google-sheets-integration`,
  `construct-table-from-csv`, `create-wp-posts-table`, `woocommerce-integration`,
  `woocommerce-product-reviews-table`, `fluentcart-integration`, `fluent-forms-integration`,
  `create-table-from-custom-sql`, `custom-sql-remote-database`.
- **Hub pages**: `connected-tables-overview`, `google-sheets-csv-auto-sync`.
- **WordPress integration (docs/wordpress-integration)**: `embed-tables`,
  `dynamic-columns-reference`, `post-meta-field`, `acf-field-integration-with-ninja-tables-column`,
  `featured-image`, `shortcode-computed-value-or-html-in-wp-post-woocommerce-table`.

## Required structure

```
---
title: "<Source> Integration"
description: "<What the table shows, what stays in sync, and the key options.>"
---

# <Source> Integration

**<Source> Integration** (Pro if Pro-only) shows <data> as a table on your site. <How it stays
current.> <Who it suits: 1 sentence of use cases.>

<Optional comparison table, e.g. FooTable vs DataTables behaviour for this source.>

## Before you start

You need <plugin/account/published sheet>. <What the tile or drawer shows if it's missing.>

## Create a <Source> table

1. Go to **Create Table** and, under **Connect live data**, click **<Tile label>**.
2. Enter a **Table name**.
3. <Source-specific fields, each with its exact bold label.>
4. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
5. Click **Create table**.

![<Drawer name>](/images/data-sources/<short-slug>/1.-<Label>.webp)

Ninja Tables opens the new table on the **Table Rows** tab. The rows are read-only, because they
come from <source>. <Where to edit the data instead.>

## Change the settings later

On the **Table Rows** tab, the banner reads **Rows come from <source>**. Click **Source
settings** (or **Edit query**) to open the drawer. <It has N sections.>

### <Drawer section>

- **<Option>**: <...>

Click **Update** (or **Save settings**).

## <Source-specific feature, e.g. Show each visitor only their own submissions>

## Show the table

Copy the shortcode from the editor header and paste it into any page or post, or use the
Ninja Tables block. See [Embed a table](/embed-tables).

<One line pointing to the closest related page.>
```

## Rules

- **Start from the Create screen.** Step 1 is always "Go to **Create Table** and, under
  **Connect live data**, click **<tile>**." Use the tile label exactly (**WP Posts/CPTs**,
  **WooCommerce products**, **Fluent Forms entries**, **Google Sheets**).
- **External setup comes first, as `## Step 1:`.** When the user must do something outside
  WordPress first (publish a Google Sheet), use `## Step 1: <action>` / `## Step 2: Create the
  table`, as `google-sheets-integration` does. Otherwise use plain task H2s. Don't mix both styles
  on one page.
- **Always state the read-only rule** and where to edit the data instead.
- **"Change later" uses the banner phrase**: `the banner reads **Rows come from <source>**`.
  Name the button (**Source settings** or **Edit query**) and the drawer's sections as H3s.
- **Engine differences matter.** If FooTable and DataTables behave differently for this source
  (sync, links, images), say so with a small comparison table or a `::: warning`, and link
  [Choose a table engine](/choose-table-engine).
- **Requirements**: in a `## Before you start` H2 or a single line right after the intro, as
  `woocommerce-integration` does ("You need WooCommerce active...").
- **Sensitive values**: use placeholders such as `<your-db-password>`, never real credentials.
- **End with embedding plus one related link.** No "How to verify" section and no support
  boilerplate.
- **Embedding pages** (`embed-tables`) have one H2 per method (**Block editor (Gutenberg)**,
  **Classic editor**, **Page builders**), and shortcodes in code spans:
  `[ninja_tables id="123"]`, `[ninja_table_builder id="123"]`.
- **External links**: link the third-party product once (e.g. Fluent Forms) on first mention.

## Images

- Screenshot each drawer or screen right after the step that opens it, then the resulting table.
- Paths: `/images/data-sources/<short-slug>/<n>.-<Label>.webp` (or `wordpress-integration/`),
  numbered in page order. Check the page's existing folder before naming a new one.
- Shots of third-party screens (Google Sheets publish dialog, Fluent Forms entries) are allowed
  if they show the step the reader must do there.
- Screenshots are produced by the `ninja-tables-screenshotter` subagent / the
  `ninja-tables-doc-screenshots` skill, never by hand. Leave
  `<!-- TODO(screenshot): <screen and state to capture> -->` only when a screen can't be
  reached, for example a third-party account the dev site doesn't have.
- Videos: YouTube embeds in the `.video-embed` wrapper only (see CLAUDE.md → Videos), placed after
  the intro or under a `## Tutorial video` H2 near the end.

## Verbatim model — `docs/data-sources/fluent-forms-integration.md`

```
## Create a Fluent Forms table

1. Go to **Create Table** and, under **Connect live data**, click **Fluent Forms entries**.
2. Enter a **Table name**.
3. Under **Choose form**, select your form.
4. Under **Select form fields**, tick the fields you want. Each ticked field becomes a column, in this order.
5. Set **Entry Status** to **All**, **Read** or **Unread**. Read entries are the ones opened in **Fluent Forms › Entries**.
6. Set **Max records** to limit how many entries the table shows. Leave it empty to show all.
7. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
8. Click **Create table**.

## Change the form settings

On the **Table Rows** tab, the banner reads **Rows come from Fluent Forms entries**. Click **Source settings** to open the drawer.
```

## Sidebar entry

```ts
{ text: 'Fluent Forms entries', link: '/fluent-forms-integration' }   // group: Show Live Data
```

data-sources pages go in **Show Live Data**. Dynamic-column pages go in its nested **Custom
columns for posts & products** group. `embed-tables` goes in **Add Tables to Your Site**. The
label names the data source, not "X Integration".

## Common pitfalls

- **Old navigation**: "Ninja Tables › Add Table › Connect External Data" is gone. Use **Create
  Table** › **Connect live data**.
- **Calling Pro sources free.** WP Posts, WooCommerce, Google Sheets, Remote CSV and Custom SQL
  are Pro. Fluent Forms is free. Check `free-vs-pro` before marking any other source.
- **Promising more than the plugin does today**, e.g. Remote CSV reads CSV only, and DataTables
  Google Sheets tables lose links and images.
- **Forgetting the read-only note** or the "Change the settings later" section.
- **Linking to the old `ninja-charts-integration` or ACF pointer stubs.** Those are 8-line "moved"
  pages, so link their targets instead.
