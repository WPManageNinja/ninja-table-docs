---
title: "FooTable or DataTables: Choose an Engine"
description: "What the FooTable and DataTables engines do differently, which one to pick for a new table, and when you can switch later."
---

# FooTable or DataTables: Choose an Engine

Every Ninja Tables table is drawn on your site by an **engine**: **FooTable** or **DataTables**. You choose it when you create the table. For most tables FooTable is the right choice; DataTables is built for tables that run to thousands of rows. This page helps you decide, because some tables can't change engine later.

## The short answer

- **Pick FooTable** for most tables: price lists, schedules, directories and anything up to a few thousand rows. It's light, responsive out of the box, and the engine most existing tables use.
- **Pick DataTables** when the table will hold thousands of rows, or when you'll import a very large CSV or Excel file. It loads one page of rows at a time from the server, so big tables stay fast.

If you're not sure, keep FooTable.

## How the two engines differ

| | FooTable | DataTables |
|---|---|---|
| Best for | Most tables | Large tables (thousands of rows) |
| How rows load | The whole table loads in the browser | Rows are paged on the server |
| Style library (Semantic UI, Bootstrap 4, Bootstrap 3) | ✅ Choose one in **Appearance** › **Rows & borders** | Uses its own built-in styles |
| Import very large CSV or Excel files from the Media Library | | ✅ |
| Google Sheets and Remote CSV | Reads the source live, and keeps links and images | Keeps a synced copy that updates on a schedule |
| Custom CSS selector | `#footable_parent_<ID>` | `#ninja_dt_parent_<ID>` |

Both engines support search, sorting, pagination, custom filters and the filtering shortcode attributes.

## Choose the engine when you create a table

On the [Create a table](/table-types-overview) screen, most panels show an engine line, for example **FooTable (the usual choice) · Change**:

1. Click **Change**.
2. Pick **FooTable** or **DataTables** under **Rendering engine**.
3. Finish the panel and click **Create table**.

The **Import** screen shows the same **Rendering engine** choice when you import a file. WooCommerce products and reviews tables always use FooTable, and Drag & Drop tables use their own builder, so their panels don't show an engine choice.

## Can I switch later?

It depends on where the table's rows are stored. Open the table, go to **Table Configuration** and look at **Table engine**.

- **Tables that store their own rows** keep the engine they were created with. This includes Default tables, tables created from an uploaded file, and Google Sheets or Remote CSV tables. **Table engine** shows "Drawn by the FooTable engine" (or DataTables) with a note that the engine is locked.
- **Connected tables that read their rows from elsewhere** can switch at any time: WP Posts/CPTs, Fluent Forms entries, FluentCart products and Custom SQL query tables. Pick the other engine under **Table engine** and click **Save**.

::: warning
Switching engine only moves your data. Rows and columns are kept, but the table's design (colors, styling and layout settings) doesn't carry over. Set it up again in **Appearance** after you switch.
:::

### Move a locked table to the other engine

To move a Default or uploaded table to the other engine, rebuild it from an export:

1. Open the table and go to **Table Rows** › **Import / export** › **Export**. Export it as **CSV**. See [Export a table](/export-ninja-tables-csv-json).
2. Go to **Import** in the top bar, choose **CSV**, pick the other engine and import the file. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).
3. Set up the columns and **Appearance** of the new table, then replace the old shortcode on your pages with the new one.

## See which engine a table uses

The [Tables list](/tables-list) has an **Engine** column, and a filter to show only FooTable or only DataTables tables. Inside a table, **Table Configuration** › **Table engine** shows the current engine.

## Related

- [Engine, rendering and caching](/table-rendering-settings)
- [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync)
- [Custom CSS & JS and CSS selectors](/table-styling-css-selector)
