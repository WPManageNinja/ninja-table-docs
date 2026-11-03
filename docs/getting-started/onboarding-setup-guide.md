---
title: "Quick Start: Build and Publish Your First Table"
description: "Build a Default table by hand, add columns and rows, style it and put it on a page, in about five minutes."
---

# Quick Start: Build and Publish Your First Table

This quick start takes you from a new table to a published one in about five minutes, with every screen shown. If you see a guided setup when you open Ninja Tables, [Onboarding](/ninja-tables-onboarding) explains it. You can also skip it and follow the steps below.

## Build a Default table by hand

For more detail on each step, see [Create your first table](/create-your-first-table).

### Open Create Table

Click **Create Table** in the top bar, or **New table** on the [Tables list](/tables-list). The **Create a table** screen shows every kind of table in two groups: **Start from scratch** and **Connect live data**. Click **Default table** under **Start from scratch**.

A panel opens on the right:

1. Enter a **Table name**, for example "Pricing plans". It's required.
2. Optionally add a **Description**.
3. Leave the engine on **DataTables** (recommended). Click **Change** and pick **FooTable** if you want the lighter classic engine for a small table. You can't change the engine of a Default table later, so see [choose an engine](/choose-table-engine) if you're unsure.
4. Click **Create table**.

![Default table panel with Table name, Description and the engine line](/images/getting-started/onboarding-setup-guide/6.-Default-Table-Panel-With-Table-Name.webp)

### Add your first column

The table opens on the **Table Rows** tab. Its shortcode, for example `[ninja_tables id="158"]`, is shown at the top. The table has no columns yet, so click **Add column**.

The column dialog opens on its **Basic** tab:

- **Column name**: the header visitors see, for example "Plan".
- **Column key**: filled in from the name. It's used by shortcodes, imports and filters, and can't be changed later.
- **Type**: what the column holds, such as Single line text, Numeric value or Date field.
- **Responsive visibility**: whether the column is shown or hidden on smaller screens.

Click **Add column** to save it. Repeat for each column you need, for example "Price" and "Features". See [column basic settings](/basic-settings) for every option.

### Add your rows

Click **Add data**. A panel opens with one field per column. Fill them in and click **Add row**. Tick **Add another after this** to keep the panel open for the next row.

Your rows appear in the grid. To change a row later, open its row actions to edit, duplicate or delete it.

![Table Rows grid with columns and rows added](/images/getting-started/onboarding-setup-guide/6.-Table-Rows-Grid-With-Columns.webp)

### Style your table

Click the **Table Design** tab. The left side shows a live preview of your table; switch it between Desktop, Tablet and Mobile to check each size. The side panel has three tabs:

- **Styling**: open **Style** for stripes, hover and borders, and **Title & Header** to show the table title above the table.
- **Features**: open **Search**, **Sorting** and **Pagination** to set how visitors find their way around the table.
- **Colors**: pick a preset color scheme.

Click **Save** at the top when you're happy. See the [Table Design overview](/table-style-settings) for every option.

### Put the table on a page

1. Click **Preview** at the top of the editor to see the table on its own page.
2. Click the shortcode at the top of the editor to copy it.
3. Open the post or page where the table should appear, paste the shortcode (or add the **Ninja Tables** block and pick your table), and publish.

See [Embed a table](/embed-tables) for the block, the classic editor and page builders.

![A published page showing a Ninja Tables table](/images/getting-started/onboarding-setup-guide/8.-Published-Page-Showing-A-Ninja-Tables.webp)

## Where to go next

- Add more column types and options: [column basic settings](/basic-settings)
- Show live data instead of typed rows: [How connected tables work](/connected-tables-overview)
- Change site-wide defaults, permissions and caches: [Settings](/tools-and-settings)
