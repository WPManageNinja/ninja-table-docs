---
title: "All Table Types at a Glance"
description: "Compare the eleven ways to create a table in Ninja Tables, from a Default table to Google Sheets and Custom SQL, and pick the right one."
---

# All Table Types at a Glance

The **Create a table** screen lists every kind of table you can build in Ninja Tables. Open it from **Create Table** in the top bar, or the **New table** button on the [Tables list](/tables-list). This page explains what each option does, so you can pick the right one before you start.

## How the Create a table screen works

The options are grouped into two sections:

- **Start from scratch**: you type, upload or design the content yourself. Ninja Tables stores the rows.
- **Connect live data**: the rows come from somewhere else, such as WordPress posts, a WooCommerce store or a Google Sheet. The table updates when the source changes, and its rows are read-only in Ninja Tables. See [How connected tables work](/connected-tables-overview).

Click a tile to open its panel on the right. Fill in the panel and click **Create table** (or **Next** for options with two steps). The new table opens in the editor.

You can also drag a CSV, Excel or JSON file anywhere onto the Create a table screen. Ninja Tables opens the **Upload a file** panel with your file already picked.

## Start from scratch

| Option | What it's for | Engine | Learn more |
|---|---|---|---|
| **Default table** | Type or paste your own rows into a spreadsheet-style grid. | FooTable or DataTables, chosen at creation | [Create your first table](/create-your-first-table) |
| **Upload a file** | Start from a CSV, Excel (.xlsx), JSON or Ninja Tables JSON file. The columns and rows come from the file. | FooTable or DataTables, chosen at creation | [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv) |
| **Drag & Drop table** | Design a layout cell by cell, such as a pricing or comparison table. Start from an empty grid, a CSV/JSON file, or a template. | Its own builder | [Create a Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables) |

All three are free.

::: tip
A Drag & Drop table uses its own shortcode, `[ninja_table_builder id="..."]`, and must be saved once in the builder before it shows on a page.
:::

## Connect live data

| Option | What it's for | Engine | Learn more |
|---|---|---|---|
| **WP Posts/CPTs** (Pro) | Posts, pages and custom post types, with columns for titles, authors, dates, taxonomies, custom fields and more. | FooTable or DataTables, can be changed later | [WordPress posts table](/create-wp-posts-table) |
| **WooCommerce products** (Pro) | A product catalog with prices, stock and add-to-cart buttons. | FooTable | [WooCommerce products table](/woocommerce-integration) |
| **WooCommerce reviews** (Pro) | Product reviews and ratings. | FooTable | [WooCommerce reviews table](/woocommerce-product-reviews-table) |
| **Fluent Forms entries** | Live entries from a Fluent Forms form. | FooTable or DataTables, can be changed later | [Fluent Forms entries table](/fluent-forms-integration) |
| **FluentCart products** | FluentCart products with add-to-cart buttons. | FooTable or DataTables, can be changed later | [FluentCart products table](/fluentcart-integration) |
| **Google Sheets** (Pro) | Rows from a Google Sheet published to the web as CSV. | FooTable (reads the sheet live) or DataTables (keeps a synced copy) | [Google Sheets table](/google-sheets-integration) |
| **Remote CSV / JSON** (Pro) | Rows from a CSV file at a public URL. | FooTable (reads the file live) or DataTables (keeps a synced copy) | [Remote CSV table](/construct-table-from-csv) |
| **Custom SQL query** (Pro) | Rows from a read-only SQL query on your WordPress database or a remote database. | FooTable or DataTables, can be changed later | [Custom SQL table](/create-table-from-custom-sql) |

Some tiles depend on other plugins:

- **WooCommerce products** and **WooCommerce reviews** only appear when WooCommerce is active.
- **FluentCart products** only appears when FluentCart is active.
- **Fluent Forms entries** always appears. If Fluent Forms isn't installed, the panel offers an **Install Fluent Forms now** button.

::: warning
Despite its name, the **Remote CSV / JSON** tile currently reads CSV files only. A JSON URL is rejected. To show JSON data, [upload the JSON file](/import-table-data-from-a-csv) instead.
:::

## Which one should I pick?

- **You have the data in a spreadsheet** and it won't change often: **Upload a file**.
- **You have a spreadsheet that keeps changing**: **Google Sheets** (Pro), so the table follows the sheet.
- **You want a pricing, comparison or feature table** with buttons, icons and ratings in the cells: **Drag & Drop table**.
- **You want to list products** with add-to-cart buttons: **WooCommerce products** (Pro) or **FluentCart products**.
- **You want to list blog posts, events or any custom post type**: **WP Posts/CPTs** (Pro).
- **You'll type the data in yourself**: **Default table**.

## Choosing an engine

Most panels end with an engine line, for example **FooTable (the usual choice) · Change**. Leave it on FooTable for most tables. Pick DataTables when a table will run to thousands of rows. For tables that store their own rows (Default and Upload a file), the engine can't be changed after the table is created. See [FooTable or DataTables: choose an engine](/choose-table-engine).
