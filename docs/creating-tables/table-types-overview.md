---
title: "All Table Types at a Glance"
description: "Compare the eleven ways to create a table in Ninja Tables, from a Default table to Google Sheets and Custom SQL, and pick the right one."
---

# All Table Types at a Glance

The **Create a table** screen lists every kind of table you can build in Ninja Tables. Open it from **Create Table** in the top bar, or the **New table** button on the [Tables list](/tables-list). This page explains what each option does and what its panel asks for, so you can pick the right one before you start.

## How the Create a table screen works

The options are grouped into two sections:

- **Start from scratch**: you type, upload or design the content yourself. Ninja Tables stores the rows.
- **Connect live data**: the rows come from somewhere else, such as WordPress posts, a WooCommerce store or a Google Sheet. The table updates when the source changes, and its rows are read-only in Ninja Tables. See [How connected tables work](/connected-tables-overview).

Click a tile to open its panel on the right. Fill in the panel and click **Create table** (or **Next** for options with two steps). The new table opens in the editor. Click **Cancel** to close a panel without creating anything.

You can also drag a CSV, Excel or JSON file anywhere onto the Create a table screen. A "Drop to import" overlay appears, and Ninja Tables opens the **Upload a file** panel with your file already picked.

![Create a table screen with Start from scratch and Connect live data tiles](/images/creating-tables/types-overview/1.-Create-A-Table-Screen-With-Start.webp)

## Start from scratch

| Option | What it's for | Engine | Learn more |
|---|---|---|---|
| **Default table** | "Manually create a table." Type or paste your own rows into a spreadsheet-style grid. | FooTable or DataTables, chosen at creation | [Create your first table](/create-your-first-table) |
| **Upload a file** | "CSV, Excel (.xlsx) or JSON." The columns and rows come from the file. | FooTable or DataTables, chosen at creation | [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv) |
| **Drag & Drop table** | "Free layout or a ready-made template." Design a layout cell by cell, such as a pricing or comparison table. | Its own builder | [Create a Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables) |

All three are free. Here is what each panel asks for:

- **Default table**: a **Table name** (required), a **Description** and the engine line. The table is created empty and opens on **Table Rows**.
- **Upload a file**: an optional **Table name** (the file name is used if you leave it empty), a **Description**, the file, a **File type** (CSV, Excel, JSON or Ninja Tables JSON, picked from the file name) and the engine line.
- **Drag & Drop table**: a **Table name**, then **Start with**: **Create From Scratch** (choose 1 to 30 columns and rows; the default is 3 columns and 6 rows), **Import from CSV/JSON**, or **Choose a template**. Click **Next** to continue.

::: tip
A Drag & Drop table uses its own shortcode, `[ninja_table_builder id="..."]`, and must be saved once in the builder before it shows on a page.
:::

## Connect live data

| Option | What it's for | Engine | Learn more |
|---|---|---|---|
| **WP Posts/CPTs** (Pro) | "Posts, pages and custom types." Columns for titles, authors, dates, taxonomies, custom fields and more. | FooTable or DataTables, can be changed later | [WordPress posts table](/create-wp-posts-table) |
| **WooCommerce products** (Pro) | "Product catalog with add to cart." Prices, stock and add-to-cart buttons. | FooTable | [WooCommerce products table](/woocommerce-integration) |
| **WooCommerce reviews** (Pro) | "Product reviews and ratings." | FooTable | [WooCommerce reviews table](/woocommerce-product-reviews-table) |
| **Fluent Forms entries** | "Live form entries." | FooTable or DataTables, can be changed later | [Fluent Forms entries table](/fluent-forms-integration) |
| **FluentCart products** | "Products with add to cart." | FooTable or DataTables, can be changed later | [FluentCart products table](/fluentcart-integration) |
| **Google Sheets** (Pro) | "Synced from a Google Sheet." Rows from a Google Sheet published to the web as CSV. | FooTable (reads the sheet live) or DataTables (keeps a synced copy) | [Google Sheets table](/google-sheets-integration) |
| **Remote CSV / JSON** (Pro) | "Rows from a CSV or JSON URL." Rows from a CSV file at a public URL. | FooTable (reads the file live) or DataTables (keeps a synced copy) | [Remote CSV table](/construct-table-from-csv) |
| **Custom SQL query** (Pro) | "Rows from a database query." A read-only SQL query on your WordPress database or a remote database. | FooTable or DataTables, can be changed later | [Custom SQL table](/create-table-from-custom-sql) |

Every connected panel starts with a required **Table name**. The rest of each panel:

- **WP Posts/CPTs**: **Post types**, the **Columns** to show, **Conditions** (post status, the logged-in user's posts, and rules), the order, and a query limit.
- **WooCommerce products**: product categories, tags and types, **Hide out of stock items**, and the initial order.
- **WooCommerce reviews**: **Reviews Status** (All, Approved or Unapproved) and the products whose reviews you want to show.
- **Fluent Forms entries**: the form, the fields to show, **Entry Status** and **Max records**. The box is filled with 1000, so clear it to show every entry.
- **FluentCart products**: categories and brands (leave a list empty for all), **Hide out of stock items**, and the initial order.
- **Google Sheets** and **Remote CSV / JSON**: a two-step panel. Step 1 takes the URL (and, on DataTables, a **Sync Interval**); step 2, **Select entry fields**, lists the columns read from the URL.
- **Custom SQL query**: the query, and a **SQL Connection Type** of your own database or a remote one.

Some tiles depend on other plugins:

- **WooCommerce products** and **WooCommerce reviews** only appear when WooCommerce is active.
- **FluentCart products** only appears when FluentCart is active.
- **Fluent Forms entries** always appears. If Fluent Forms isn't installed, the panel offers an **Install Fluent Forms now** button.

On the free version, the Pro tiles carry a **PRO** badge. They still open, but the panel shows a "Pro feature" note with **Upgrade to Pro**, and you can't create the table. See [Free vs Pro](/free-vs-pro).

![WP Posts/CPTs panel on the Create a table screen](/images/creating-tables/types-overview/2.-WP-Posts-CPTs-Panel.webp)

::: warning
Despite its name, the **Remote CSV / JSON** tile currently reads CSV files only. A JSON URL is rejected. To show JSON data, [upload the JSON file](/import-table-data-from-a-csv) instead.
:::

## Which one should I pick?

- **You have the data in a spreadsheet** and it won't change often: **Upload a file**.
- **You have a spreadsheet that keeps changing**: **Google Sheets** (Pro), so the table follows the sheet.
- **You want a pricing, comparison or feature table** with buttons, icons and ratings in the cells: **Drag & Drop table**.
- **You want to list products** with add-to-cart buttons: **WooCommerce products** (Pro) or **FluentCart products**.
- **You want to list blog posts, events or any custom post type**: **WP Posts/CPTs** (Pro).
- **You want to show form submissions**: **Fluent Forms entries**.
- **You'll type the data in yourself**: **Default table**.

## Choosing an engine

Most panels end with an engine line, for example **FooTable (the usual choice) · Change**. Click **Change** to pick between **FooTable** ("Light, and responsive out of the box. The usual choice.") and **DataTables** ("Holds up better once a table runs to thousands of rows."). Leave it on FooTable for most tables.

For tables that store their own rows (Default and Upload a file), the engine can't be changed after the table is created. Google Sheets and Remote CSV show the engine line only when your Pro version supports synced copies. See [FooTable or DataTables: choose an engine](/choose-table-engine).

## Open a panel from a link

A link to `#/create?source=` plus a tile's key opens that tile's panel directly, for example `#/create?source=upload`. The keys are `default`, `upload`, `drag_and_drop`, `wp_posts`, `woo_table`, `woo_reviews`, `fluent_form`, `fluent_cart`, `google_spread_sheet`, `csv` and `raw_sql`. A tile that isn't available on your site, such as WooCommerce without WooCommerce, doesn't open.
