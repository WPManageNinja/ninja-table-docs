---
title: "The Tables List"
description: "Find, open, filter and manage your tables from the Tables list: search, source and engine filters, Used on, bulk actions and the Trash."
---

# The Tables List

The **Tables list** is the home screen of Ninja Tables. It shows every table on your site with its source, engine, shortcode and the pages it's embedded on, and it's where you search, duplicate, trash and delete tables. Open it with **Tables** in the top bar, or by clicking **Ninja Tables** in the WordPress admin menu.

## Before you have a table

On a fresh install the list shows the guided setup, a short wizard that helps you create your first table. See [Guided setup](/onboarding-setup-guide). If you click **Skip setup**, the list shows **You don't have any tables yet** with two buttons:

- **Create a table** opens the Create a table screen. See [Choose a table type](/table-types-overview).
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

## Getting started checklist and welcome banner

While your site has only one or two tables, a **Getting started** card sits above the list. It tracks three steps: **Create your first table**, **Pick a design** and **Add it to a page**, with a count such as "1 of 3 done". Use **Start** or **Open** on a step to jump to it, and the **×** to hide the card. A **Welcome to the new Ninja Tables** banner can also appear for upgraders, with **What moved?** (a map from the old screens to the new ones), **Find a setting** and **Dismiss**. Both are remembered per browser.

<!-- TODO(screenshot): tables-list-2
  screen: Tables
  table: Employee Directory
  state: Getting started card visible above the list
  highlight: Getting started card
  view: admin
  alt: Tables list with the Getting started checklist above it
  blocked: card only shows while the site has 1-2 tables; demo site has 17
-->

## What each column shows

| Column | What it shows |
|---|---|
| **ID** | The table's number, used in its shortcode. Click it to open the table. |
| **Table** | The table's name, with its description underneath (one line of plain text) and a status badge if the table isn't published. Click the name to open the table. The eye icon next to the name opens a **Preview** in a new tab. |
| **Source** | Where the rows come from: a badge such as **Default**, **Drag & Drop**, **Fluent Forms**, **FluentCart**, **WP Posts**, **WooCommerce**, **Woo Reviews**, **Google Sheets**, **Remote CSV** or **SQL Query**. |
| **Engine** | **FooTable** or **DataTables**. Hover the badge for a short explanation. See [choose an engine](/choose-table-engine). |
| **Used on** | How many posts and pages embed the table, for example **On 2 pages**, or **Not embedded**. |
| **Shortcode** | The table's shortcode. Click it to copy it. |

Clicking an **ID** or a table name opens the table in the editor. A Drag & Drop table opens in the [Drag & Drop builder](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables) instead. A Fluent Forms table can't be opened while Fluent Forms is inactive, and its name is greyed out.

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

You can also press **⌘K** (Mac) or **Ctrl+K** (Windows) anywhere in Ninja Tables to open the command palette, which lists your recent tables and lets you jump to any table or settings screen by name.

### Rows per page

The footer shows **Showing a-b of N tables**, a page jumper and a per-page menu with **10**, **15**, **20**, **50** and **100**. The default is 20. Ninja Tables remembers your choice.

## Actions for a table

Each row ends with two buttons:

- **Edit** (pencil) opens the table in the editor, or a Drag & Drop table in the builder.
- **More actions** (⋯) opens a menu with:
  - **Duplicate**: copies the table and opens the copy. See [Duplicate a table](/table-cloning-duplicating). Fluent Forms tables show a **Fluent Forms entries** link here instead.
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

Click **Tables** at the top of the Trash to go back to the list.

Two empty screens can appear:

- **Trash is empty**: nothing is in the Trash. Click **Back to tables**.
- **No tables**: every table is in the Trash. Click **View trash** to restore one, or **Create a table** to start a new one.

::: warning
**Delete permanently** can't be undone. If you might need the table again, [export it as JSON](/export-ninja-tables-csv-json) first.
:::

## Promotions in the free version

The free version can show a banner below the list: a Fluent Forms banner when Fluent Forms isn't installed and you have more than two tables, or an upgrade strip reading **Love Ninja Tables? Upgrade to Pro and get more exciting features!** once you have more than three. Neither appears with Ninja Tables Pro.
