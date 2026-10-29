---
title: "The Tables List"
description: "Find, filter and manage your tables from the Tables list: search, source and engine filters, Used on, shortcodes, bulk actions and the Trash."
---

# The Tables List

The **Tables list** is the home screen of Ninja Tables. It shows every table on your site with its source, engine, shortcode and the pages it's embedded on, and it's where you search, duplicate and delete tables. Open it with **Tables** in the top bar, or by clicking **Ninja Tables** in the WordPress admin menu.

If you haven't created a table yet, you'll see the **Welcome to Ninja Tables** screen instead, with **Create your first table** and **Import table** buttons.

## What each column shows

| Column | What it shows |
|---|---|
| **ID** | The table's number, used in its shortcode. Click it to open the table. |
| **Table** | The table's name, with its description underneath. Click the name to open the table. The eye icon next to the name opens a **Preview** in a new tab. |
| **Source** | Where the rows come from, such as Default, Drag & Drop, WooCommerce or Google Sheets. |
| **Engine** | **FooTable** or **DataTables**. See [choose an engine](/choose-table-engine). |
| **Used on** | How many posts and pages embed the table, for example **On 2 pages**, or **Not embedded**. |
| **Shortcode** | The table's shortcode. Click it to copy it. |

Click the **ID** or **Table** column header to sort the list.

### Used on

Hover over **Used on** to see the list of posts and pages that embed the table, with links to edit each one. Unpublished pages show their status, such as draft. Check this before you delete a table, so you know which pages it would leave empty.

**Used on** finds tables added with the `[ninja_tables]` or `[ninja_table_builder]` shortcode, or the Ninja Tables block, in the content of any post, page or custom post type. Tables shown in places outside the post content, such as widgets or theme templates, aren't counted. You only see the pages you're allowed to read.

## Find a table

- **Filter by source**: the pills at the top switch between **All**, **Default**, **Connected sources** and **Drag & Drop**, with a count for each.
- **Filter by engine**: the dropdown shows **All engines**, **DataTables** or **FooTable** tables.
- **Search**: click the search icon, or press **/** on your keyboard, and type part of a table's name, its shortcode or its **#ID**.

If nothing matches, click **Clear filters** to start again.

You can also press **⌘K** (Mac) or **Ctrl+K** (Windows) anywhere in Ninja Tables to open the command palette, which lists your recent tables and lets you jump to any table by name.

The list shows 20 tables per page by default. Change it at the bottom of the list; Ninja Tables remembers your choice.

## Actions for a table

Each row ends with two buttons:

- **Edit** (pencil) opens the table in the editor, or a Drag & Drop table in the builder.
- **More actions** (⋯) opens a menu with:
  - **Duplicate**: copies the table and opens the copy. See [Duplicate a table](/table-cloning-duplicating). Fluent Forms tables show a **Fluent Forms entries** link here instead.
  - **Move to trash**: hides the table from your site and moves it to the Trash.
  - **Delete permanently**: deletes the table straight away.

Ninja Tables asks you to confirm before it trashes or deletes a table.

To create a table, click **New table**. To import one from a file, click **Import**.

## Work with several tables at once

1. Tick the checkbox at the start of each table's row. Tick the box in the header to select every table on the page.
2. Use the buttons that appear at the top: **Move to trash** or **Delete permanently**.
3. Click the **×** to clear the selection.

## The Trash

Tables you move to trash aren't deleted yet. They're hidden on your site, so the pages that embed them don't show them, until you restore them or delete them for good.

When the Trash has tables in it, a **Trash** button with a count appears next to the filters. Click it to open the Trash. There you can:

- **Restore** a table, from its **More actions** menu or as a bulk action. It goes back to the list and shows on your site again.
- **Delete permanently**, from its **More actions** menu or as a bulk action.

Click **Tables** at the top of the Trash to go back to the list.

::: warning
**Delete permanently** can't be undone. If you might need the table again, [export it as JSON](/export-ninja-tables-csv-json) first.
:::
