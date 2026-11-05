---
title: "The Tables List"
description: "Find, open, filter and manage your tables from the Tables list: search, source and engine filters, Used on, bulk actions and the Trash."
---

# The Tables List

The **Tables list** is the home screen of Ninja Tables. It shows every table on your site with its source, engine, shortcode and the pages it's embedded on, and it's where you search, duplicate, trash and delete tables. Open it with **Tables** in the top bar, or by clicking **Ninja Tables** in the WordPress admin menu.

## Before you have a table

On a fresh install the list shows the guided setup, a short wizard that helps you create your first table. See [Onboarding](/guide/getting-started/ninja-tables-onboarding). If you click **Skip setup**, the list shows **You don't have any tables yet** with two buttons:

- **Create a table** opens the Create a table screen. See [Choose a table type](/guide/creating-tables/table-types-overview).
- **Import** opens the Import screen.

**Use the guided setup instead** brings the wizard back. Ninja Tables remembers that you skipped it in your browser only, so clearing your browser data shows the wizard again.

<!-- TODO(screenshot): tables-list-1
  screen: Tables (no tables yet, setup skipped)
  table: -
  state: Empty state with the Create a table and Import buttons
  highlight: Create a table button
  view: admin
  alt: Tables list empty state reading You don't have any tables yet
  blocked: needs a site with no tables (setup skipped)
-->

## Help us make Ninja Tables better

The list can show an optional card, also on the **Help** page. On free sites it offers tips by email: enter your name and email and click **Count me in**, then confirm by email. **Share anonymous usage data** is a separate choice. **What we collect** lists exactly what's sent; it never includes the data inside your tables. Click **No thanks** to close the card.

## Welcome banner

A **Welcome to the new Ninja Tables** banner can appear above the list for upgraders. It says your tables, shortcodes and front end are unchanged, and **What moved?** shows where each old screen lives now. Click the **×** to dismiss it. Once anyone dismisses it, it stays closed for the whole site. See [Onboarding](/guide/getting-started/ninja-tables-onboarding).

## What each column shows

| Column | What it shows |
|---|---|
| **ID** | The table's number, used in its shortcode. Click it to open the table. |
| **Table** | The table's name, with its description underneath (one line of plain text) and a status badge if the table isn't published. Click the name to open the table. The eye icon next to the name opens a **Preview** in a new tab. |
| **Source** | Where the rows come from: a badge such as **Default**, **Drag & Drop**, **Fluent Forms**, **FluentCart**, **WP Posts**, **WooCommerce**, **Woo Reviews**, **Google Sheets**, **Remote CSV** or **SQL Query**. |
| **Engine** | **FooTable** or **DataTables**. Hover the badge for a short explanation. See [choose an engine](/guide/creating-tables/choose-table-engine). |
| **Used on** | How many posts and pages embed the table, for example **On 2 pages**, or **Not embedded**. |
| **Shortcode** | The table's shortcode. Click it to copy it. |

On screens up to 1280 px wide, the list hides **Source** and **Engine** so that **Shortcode** and the row buttons stay visible. The icon by each title still shows the source.

Clicking a row (the **ID**, the table name or any blank part of the row) opens the table in the editor; hold <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> to open it in a new tab. The row's buttons and a table whose source plugin is missing keep their own behavior. A Drag & Drop table opens in the [Drag & Drop builder](/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables) instead. A Fluent Forms table can't be opened while Fluent Forms is inactive, and its name is greyed out.

Click the **ID** or **Table** column header to sort the list. The first click sorts from highest to lowest.

![Tables list showing the source, engine, used on and shortcode columns](/images/table-management/list/3.-Tables-List-Showing-The-Source-Engine.webp)

### Used on

Hover over **Used on** to see the list of posts and pages that embed the table, with links to edit each one. Unpublished pages show their status, such as draft. Check this before you delete a table, so you know which pages it would leave empty.

**Used on** finds tables added with the `[ninja_tables]` or `[ninja_table_builder]` shortcode, or the Ninja Tables block, in the content of any post, page or custom post type. Tables shown in places outside the post content, such as widgets or theme templates, aren't counted. You only see the pages you're allowed to read.

## Find a table

- **Filter by source**: the pills at the top switch between **All**, **Default**, **Connected sources** and **Drag & Drop**, with a count for each.
- **Filter by engine**: the dropdown shows **All engines**, **DataTables** or **FooTable** tables.
- **Search**: click the search icon, or press **/** on your keyboard, and type part of a table's name, its shortcode or its **#ID**. Press **Esc** to close the search.

If nothing matches, the list says **No tables match these filters**. Click **Clear filters** to start again.

### Rows per page

The footer shows **Showing a-b of N tables**, a page jumper and a per-page menu with **10**, **15**, **20**, **50** and **100**. The default is 20. Ninja Tables remembers your choice.

## Actions for a table

Each row ends with two buttons:

- **Edit** (pencil) opens the table in the editor, or a Drag & Drop table in the builder.
- **More actions** (⋯) opens a menu with:
  - **Duplicate**: copies the table and opens the copy. See [Duplicate a table](/guide/table-management/table-cloning-duplicating). Fluent Forms tables show a **Fluent Forms entries** link here instead.
  - **Move to trash**: hides the table from your site and moves it to the Trash.
  - **Delete permanently**: deletes the table straight away.

To create a table, click **New table**. To import one from a file, click **Import**.

![More actions menu of a table in the Tables list](/images/table-management/list/4.-More-Actions-Menu-Of-A-Table.webp)

### Confirmation dialogs

Ninja Tables asks before it changes anything. The dialog is titled **Move to trash?**, **Delete permanently?** or **Restore?**, with **Yes, proceed** and **Cancel** buttons. Click **Cancel** and you see **Action canceled**; nothing changes.

## Work with several tables at once

1. Tick the checkbox at the start of each table's row. Tick the box in the header to select every table on the page.
2. Use the buttons that appear at the top: **Move to trash** or **Delete permanently**.
3. Click the **×** to clear the selection.

Bulk actions apply to the tables selected on the current page only. The search and engine filter are hidden while rows are selected.

## The Trash

Tables you move to trash aren't deleted yet. They're hidden on your site, so the pages that embed them don't show them, until you restore them or delete them for good.

When the Trash has tables in it, a **Trash** button with a count appears next to the filters. Click it to open the Trash, which notes that tables in the trash are hidden on your site. There you can:

- **Restore** a table, from its **More actions** menu or as a bulk action. It goes back to the list and shows on your site again.
- **Delete permanently**, from its **More actions** menu or as a bulk action.

Click the back arrow (**Back to tables**) beside the title to go back to the list.

Two empty screens can appear:

- **Trash is empty**: nothing is in the Trash. Click **Back to tables**.
- **No tables**: every table is in the Trash. Click **View trash** to restore one, or **Create a table** to start a new one.

::: warning
**Delete permanently** can't be undone. If you might need the table again, [export it as JSON](/guide/import-export/export-ninja-tables-csv-json) first.
:::

## Promotions in the free version

The free version can show a banner below the list: a Fluent Forms card ("Collect data in forms, show it in tables", with a **Try It Free** button) when Fluent Forms isn't installed and you have more than two tables, or an upgrade strip reading **Love Ninja Tables? Upgrade to Pro and get more exciting features!** once you have more than three. Neither appears with Ninja Tables Pro.
