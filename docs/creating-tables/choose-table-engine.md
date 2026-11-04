---
title: "FooTable or DataTables: Choose an Engine"
description: "What the FooTable and DataTables engines do differently, which one to pick for a new table, and when you can switch later."
---

# FooTable or DataTables: Choose an Engine

Every Ninja Tables table is drawn on your site by an **engine**: **FooTable** or **DataTables**. You choose it when you create the table. DataTables is the recommended default and holds up well even for thousands of rows; FooTable is a lighter choice for small tables. This page helps you decide, because some tables can't change engine later.

## The short answer

- **Pick DataTables** (the default) for most tables, especially anything that may grow, or when you'll import a very large CSV or Excel file. It loads one page of rows at a time from the server, so big tables stay fast.
- **Pick FooTable** for small tables, or when you want the Semantic UI or Bootstrap style library. It's light and responsive out of the box, and the engine most older tables use.

If you're not sure, keep DataTables. To make a FooTable, follow [Create a FooTable](/create-a-footable-table).

## How the two engines differ

| | FooTable | DataTables |
|---|---|---|
| Best for | Small tables | Most tables, and large ones (thousands of rows) |
| How rows load | The whole table loads in the browser | Rows are paged on the server |
| Style library (Semantic UI, Bootstrap 4, Bootstrap 3) | ✅ Choose one in **Table Design** › **Styling** › **Style** | Uses its own built-in styles |
| Import very large CSV or Excel files from the Media Library | | ✅ |
| Google Sheets and Remote CSV | Reads the source live, and keeps links and images | Keeps a synced copy that updates on a schedule |
| Custom CSS selector | `#footable_parent_<ID>` | `#ninja_dt_parent_<ID>` |

Both engines support search, sorting, pagination, custom filters and the filtering shortcode attributes.

## Which engine each table type can use

| Table type | Engine choice at creation | Switch later |
|---|---|---|
| Default table, Upload a file, Import screen | DataTables (default) or FooTable | No, it is locked |
| Fluent Forms entries, FluentCart products, Custom SQL query (Pro) | DataTables (default) or FooTable | Yes, in **Table Configuration** |
| WP Posts/CPTs (Pro) | FooTable (no engine line in the panel) | Yes, in **Table Configuration** |
| Google Sheets (Pro), Remote CSV / JSON (Pro) | DataTables when your Pro version supports synced copies (the default then), otherwise FooTable | No, it is locked |
| WooCommerce products and reviews (Pro) | FooTable only | No |
| Drag & Drop table | Not applicable, it uses its own builder | No |

## Choose the engine when you create a table

On the [Create a table](/table-types-overview) screen, most panels show an engine line, for example **Engine: DataTables (recommended) · Change**:

1. Click **Change**.
2. Pick **DataTables** or **FooTable** under **Rendering engine**.
3. Finish the panel and click **Create table**.

![Rendering engine cards on the Default table panel](/images/creating-tables/choose-engine/1.-Rendering-Engine-Cards-On-The-Default.webp)

The **Import** screen shows the same **Rendering engine** choice after you pick the file, except for a **Exported from Drag & Drop**. WooCommerce products and reviews tables always use FooTable, and Drag & Drop tables use their own builder, so their panels don't show an engine choice.

## Can I switch later?

It depends on where the table's rows are stored. Open the table, go to **Table Configuration** and look at **Table engine**.

- **Tables that store their own rows** keep the engine they were created with, and the engine can't be changed after the table is created. This includes Default tables, tables created from an uploaded file, and Google Sheets or Remote CSV tables. **Table engine** shows "Drawn by the FooTable engine" (or DataTables) with a note that the engine is locked.
- **Connected tables that read their rows from elsewhere** can switch at any time: WP Posts/CPTs, Fluent Forms entries, FluentCart products and Custom SQL query tables. Pick the other engine under **Table engine** and click **Save**. The two cards read "DataTables: Faster with large tables, server-side paging and all new features. Best for new tables." and "FooTable: The engine most existing tables use. Fully supported - keep it if your table works well."

<!-- TODO(screenshot): choose-table-engine-2
  screen: Tables › a Fluent Forms table › Table Configuration
  table: -
  state: Table engine cards with the engine switch warning visible
  highlight: Table engine
  view: admin
  alt: Table Configuration tab with the FooTable and DataTables engine cards
  blocked: no Fluent Forms table on the demo site (Fluent Forms not installed)
-->

::: warning
Switching engine only moves your data. Rows and columns are kept, but the table's design (colors, styling and layout settings) doesn't carry over. Set it up again in **Table Design** after you switch.
:::

### Move a locked table to the other engine

To move a Default or uploaded table to the other engine, rebuild it from an export:

1. Open the table and go to **Table Rows** › **Import / Export** › **Export**. Export it as **CSV**. See [Export a table](/export-ninja-tables-csv-json).
2. Go to **Import** in the top bar, choose **CSV**, pick the other engine and import the file. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).
3. Set up the columns and **Table Design** of the new table, then replace the old shortcode on your pages with the new one.

## See which engine a table uses

The [Tables list](/tables-list) has an **Engine** column, and a filter to show only FooTable or only DataTables tables. Inside a table, **Table Configuration** › **Table engine** shows the current engine.

![Tables list with the Engine filter and Engine badges](/images/creating-tables/choose-engine/3.-Tables-List-With-The-Engine-Filter.webp)

## Related

- [Engine, rendering and caching](/table-rendering-settings)
- [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync)
- [Custom CSS & JS and CSS selectors](/table-styling-css-selector)
