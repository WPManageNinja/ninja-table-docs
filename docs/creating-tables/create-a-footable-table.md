---
title: "Create a FooTable"
description: "Step-by-step: make a table that uses the FooTable engine, with the guided setup, the Create Table screen or by switching a connected table. Includes how to check the engine and what is different."
---

# Create a FooTable

**FooTable** is the lighter, classic table engine in Ninja Tables. It is a good fit for small tables, and it is the engine that lets you pick the **Semantic UI**, **Bootstrap 4** or **Bootstrap 3** style library. New tables start on **DataTables**, so to get a FooTable you pick it yourself. This page shows every way to do that.

Not sure which engine you need? Read [FooTable or DataTables: Choose an Engine](/guide/creating-tables/choose-table-engine) first. If you keep the default, DataTables, you don't need this page.

## Pick the way that matches your table

| You want to make | Do this |
|---|---|
| A new table you type or paste into | [Create a Default table with FooTable](#create-a-default-table-with-footable) |
| A table from a CSV, Excel or JSON file | [Choose FooTable after you pick the file](#create-a-footable-from-a-file) |
| Your very first table, on a site with no tables | [Use the guided setup](#use-the-guided-setup), which always makes a FooTable |
| A table from WP Posts, WooCommerce, Google Sheets or another source | [Connected tables](#connected-tables) |
| An existing connected table, switched to FooTable | [Switch a connected table](#switch-a-connected-table-to-footable) |

## Create a Default table with FooTable

1. Go to **Ninja Tables** and click **Create Table** in the top bar.
2. Under **Start from scratch**, click **Default table**. A panel opens on the right.
3. Type a **Table name**. It's required.
4. Find the engine line near the bottom of the panel. It reads **Engine: DataTables (recommended) · Change**. Click **Change**.
5. Under **Rendering engine**, click the **FooTable** card. Its description reads "Light, and responsive out of the box. Good for small tables."
6. Click **Create table**.

![Rendering engine cards on the Default table panel](/images/creating-tables/choose-engine/1.-Rendering-Engine-Cards-On-The-Default.webp)

The table opens on the **Table Rows** tab. Add your columns and rows next; the steps are in [Create your first table](/guide/creating-tables/create-your-first-table).

::: warning
You can't change the engine of a Default table after you create it. If you pick the wrong one, you have to rebuild the table from an export. See [Move a locked table to the other engine](/guide/creating-tables/choose-table-engine#move-a-locked-table-to-the-other-engine).
:::

## Create a FooTable from a file

1. Click **Import** in the top bar, or choose **Upload a file** on the **Create Table** screen.
2. Choose your CSV, Excel or JSON file.
3. Under **Rendering engine**, pick **FooTable**.
4. Finish the import.

A **Exported from Drag & Drop** has no engine choice, because Drag & Drop tables use their own builder. Full steps are in [Import a CSV, Excel or JSON file](/guide/import-export/import-table-data-from-a-csv).

## Use the guided setup

On a site with no tables, the guided setup creates your first table for you, and a table made with the **Start blank** card is always a **FooTable**, even though the **Create Table** screen defaults to DataTables. That card has no engine choice. See [Guided Setup and Quick Start](/guide/getting-started/onboarding-setup-guide).

If you want a DataTables table instead, click **Skip setup** and use the **Create Table** screen.

## Connected tables

Tables that read their rows from another place do not all offer a choice:

- **WP Posts/CPTs** (Pro) and **WooCommerce products and reviews** (Pro) are created as FooTables. The panel has no engine line.
- **Fluent Forms entries**, **FluentCart products** and **Custom SQL query** (Pro) show the engine line. Click **Change** and pick **FooTable** before you create the table.
- **Google Sheets** (Pro) and **Remote CSV / JSON** (Pro) show the engine line only when your Pro version supports synced copies. If it doesn't, the table reads the source live and uses FooTable.

The full list is in [Which engine each table type can use](/guide/creating-tables/choose-table-engine#which-engine-each-table-type-can-use).

## Switch a connected table to FooTable

Tables from WP Posts, Fluent Forms, FluentCart and Custom SQL can change engine at any time:

1. Open the table and click the **Table Configuration** tab.
2. Under **Table engine**, click the **FooTable** card: "The engine most existing tables use. Fully supported - keep it if your table works well."
3. Read the warning, **Switching engine only moves your data**. Your rows and columns stay, but the colors, styling and layout of the old engine don't carry over.
4. Click **Save**, then set up the look again in the **Table Design** tab.

## Check which engine a table uses

- Open the table, go to **Table Configuration** and look at **Table engine**. A locked table says "Drawn by the FooTable engine".
- On the [Tables list](/guide/table-management/tables-list), the **Engine** column shows the engine of every table, and the engine filter lists only FooTable or only DataTables tables.

## What is different on a FooTable

You build, fill and publish a FooTable exactly like any other table. These options differ:

- **Style library.** In **Table Design** › **Styling** › **Style**, a FooTable starts with the **Style Library** choice: **Semantic UI**, **Bootstrap 4** or **Bootstrap 3**. DataTables tables have no library choice. See [Rows & Borders](/guide/styling-design/table-rows-borders).
- **Borders.** FooTable has **Hide Horizontal Borders** and **Hide Vertical Borders** switches in **Style**.
- **Mobile view.** In the stackable table settings, a ticked screen size on FooTable means that size only, not that size and everything narrower. See [Stackable table](/guide/responsive-design/stackable-table).
- **Custom CSS.** The selector for your CSS is `#footable_parent_<ID>`, where `<ID>` is the table's ID. See [Custom CSS & JS](/guide/table-management/table-styling-css-selector).
- **Large tables.** The whole table loads in the browser, so FooTable suits small tables best. For thousands of rows, choose DataTables.

## Common questions

::: faq
== I can't find where to choose FooTable.
On the **Create Table** screen, open a panel and look for the engine line at the bottom: **Engine: DataTables (recommended) · Change**. Click **Change** to see the two cards. The line is hidden for WP Posts, WooCommerce and Drag & Drop tables.
== My first table came out as FooTable and I wanted DataTables.
The guided setup always creates a FooTable. A table that keeps its own rows can't change engine afterwards. Create the table again from the **Create Table** screen, or rebuild it from an export. See [Choose an Engine](/guide/creating-tables/choose-table-engine).
== Does the Style Library choice show for every table?
No. It only shows for FooTable tables. If you don't see it, the table uses DataTables. Check **Table Configuration** › **Table engine**.
== Can I turn a FooTable into a DataTables table?
Only if its rows come from somewhere else, such as Fluent Forms, WP Posts, FluentCart or Custom SQL. Default and uploaded tables are locked.
:::

## Related

- [FooTable or DataTables: Choose an Engine](/guide/creating-tables/choose-table-engine)
- [Create your first table](/guide/creating-tables/create-your-first-table)
- [All table types at a glance](/guide/creating-tables/table-types-overview)
- [Engine, Rendering & Caching](/guide/table-settings/table-rendering-settings)
