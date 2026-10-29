---
title: "Onboarding & Setup Guide"
description: "A five-minute quick start: create a Default table, add columns and rows, style it in Appearance and put it on a page."
---

# Onboarding & Setup Guide

This quick start takes you from a fresh install to a published table in about five minutes. You'll create a **Default table**, add a column and a few rows, pick a style and paste the shortcode into a page. For more detail on each step, see [Create your first table](/create-your-first-table).

## Step 1: Open Ninja Tables

Click **Ninja Tables** in the WordPress admin menu. With no tables yet, you'll see the **Welcome to Ninja Tables** screen. Click **Create your first table**. If your data is already in a spreadsheet, click **Import table** instead and follow [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).

![Ninja Tables welcome screen](/images/getting-started/onboarding-setup-guide/1.-Welcome-Screen.webp)

Once you have tables, Ninja Tables opens on the [Tables list](/tables-list). You can start a new table any time from **Create Table** in the top bar, or the **New table** button on the list.

## Step 2: Choose Default table

The **Create a table** screen shows every kind of table you can build, in two groups: **Start from scratch** and **Connect live data**. For this walkthrough, click **Default table** under **Start from scratch**. To compare the other options, see [All table types at a glance](/table-types-overview).

A panel opens on the right:

1. Enter a **Table name**, for example "Pricing plans". It's required.
2. Optionally add a **Description**.
3. Leave the engine on **FooTable**, the usual choice. If you expect thousands of rows, click **Change** and pick **DataTables**. You can't change the engine of a Default table later, so see [choose an engine](/choose-table-engine) if you're unsure.
4. Click **Create table**.

![Choose your table creation method](/images/getting-started/onboarding-setup-guide/2.-Choose-Table-Creation-Method.webp)

## Step 3: Add your first column

The table opens in the editor on the **Table Rows** tab. Your table's shortcode, for example `[ninja_tables id="158"]`, is shown at the top. The table has no columns yet, so click **Add column**.

![Table editor with no columns yet](/images/getting-started/onboarding-setup-guide/3.-Add-First-Column.webp)

## Step 4: Set up the column

The column dialog opens on its **Basic** tab:

- **Column name**: the header visitors see, for example "Plan".
- **Column key**: filled in from the name. It's used by shortcodes, imports and filters, and can't be changed later.
- **Type**: what the column holds, such as Single line text field, Numeric value or Date field.
- **Responsive visibility**: whether the column is shown or hidden on smaller screens.

Click **Add column** to save it. Repeat for each column you need, for example "Price" and "Features". The **Advanced**, **Conditions** and **Transform** tabs hold extra options you can come back to later; see [column basic settings](/basic-settings).

![Add Table Column settings popup](/images/getting-started/onboarding-setup-guide/4.-Add-Table-Column-Settings.webp)

## Step 5: Add your rows

Click **Add data**. A panel opens with one field per column. Fill them in and click **Add row**. Tick **Add another after this** to keep the panel open for the next row.

Your rows appear in the grid. To change a row later, open its row actions to edit, duplicate or delete it.

![Add Data button on the Table Rows tab](/images/getting-started/onboarding-setup-guide/5.-Add-Data-Button.webp)

## Step 6: Style your table

Click the **Appearance** tab. The left side shows a live preview of your table; switch it between Desktop, Tablet and Mobile to check each size. In the side panel:

- Pick a **Quick style**: Minimal, Lined, Striped, Bordered or Compact.
- Open **Title & header** to show the table title above the table.
- Open **Search**, **Sorting** and **Pagination** to set how visitors find their way around the table.

Click **Save** at the top when you're happy. See the [Appearance overview](/table-style-settings) for every option.

![Table Configuration tab showing available columns](/images/getting-started/onboarding-setup-guide/6.-Table-Configuration-Columns.webp)

## Step 7: Put the table on a page

1. Click **Preview** at the top of the editor to see the table on its own page.
2. Click the shortcode at the top of the editor to copy it.
3. Open the post or page where the table should appear, paste the shortcode (or add the **Ninja Tables** block and pick your table), and publish.

See [Embed a table](/embed-tables) for the block, the classic editor and page builders.

## Where to go next

- Add more column types and options: [column basic settings](/basic-settings)
- Show live data instead of typed rows: [How connected tables work](/connected-tables-overview)
- Change site-wide defaults, permissions and caches: [Settings](/tools-and-settings)
