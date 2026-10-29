---
title: "How Connected Tables Work: Source Banner, Source Settings and Read-only Rows"
description: "Learn how tables that read live data from WordPress, WooCommerce, FluentCart, Fluent Forms, Google Sheets, a CSV URL or SQL get their rows, and where to change their source settings."
---

# How Connected Tables Work: Source Banner, Source Settings and Read-only Rows

A **connected table** is a table whose rows come from somewhere else: your posts, your store, form entries, a Google Sheet, a CSV file on the web or a database query. Ninja Tables reads the rows from that source, so you never type them in. This page explains what every connected table has in common.

## Connected table types

You create a connected table from **Create Table** › **Connect live data**. Each tile opens a drawer on the right.

| Tile | Rows come from | Plan |
|---|---|---|
| **WP Posts/CPTs** | Posts, pages and custom post types | Pro |
| **WooCommerce products** | Your WooCommerce product catalog | Pro |
| **WooCommerce reviews** | Reviews left on your WooCommerce products | Pro |
| **Fluent Forms entries** | Submissions to a Fluent Forms form | Free |
| **FluentCart products** | Your FluentCart product catalog | Free |
| **Google Sheets** | A published Google Sheet | Pro |
| **Remote CSV / JSON** | A CSV file at a public URL | Pro |
| **Custom SQL query** | A read-only SQL query on this or another database | Pro |

The WooCommerce tiles appear only when WooCommerce is active, and the FluentCart tile only when FluentCart is active. Most drawers also let you pick the table engine (FooTable or DataTables). See [Choose a table engine](/choose-table-engine).

Each source has its own guide:

- [WP Posts and custom post types](/create-wp-posts-table)
- [WooCommerce products](/woocommerce-integration) and [WooCommerce reviews](/woocommerce-product-reviews-table)
- [FluentCart products](/fluentcart-integration)
- [Fluent Forms entries](/fluent-forms-integration)
- [Google Sheets](/google-sheets-integration) and [Remote CSV](/construct-table-from-csv)
- [Custom SQL query](/create-table-from-custom-sql)

## The source banner

Open a connected table and go to the **Table Rows** tab. At the top is the **source banner**. It shows:

- **Rows come from** and the source name, for example "Rows come from WooCommerce products".
- One line that describes the source.
- A button that opens the source's settings: **Edit query** for WP Posts tables, **Source settings** for every other source.

If the source hasn't been set up yet, the banner says "Nothing is set up yet. Open the source settings and choose what this table shows." and the button is highlighted.

::: tip
Google Sheets and Remote CSV tables that use the **DataTables** engine show a sync panel instead of the banner. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).
:::

## The Source settings drawer

The button on the banner opens a large drawer. It always starts with this note: "These settings decide which rows come into the table. Columns, design and features are set in the other tabs."

What you see inside depends on the source:

| Source | Sections in the drawer |
|---|---|
| WP Posts/CPTs | **Query settings** · **Add new column** |
| WooCommerce products, WooCommerce reviews, FluentCart products | **Query settings** · **Appearance** · **Add new column** |
| Fluent Forms, Google Sheets, Remote CSV, Custom SQL | A single form |

- **Query settings** decides which rows the table shows (post types, categories, filters, order).
- **Appearance** holds source-specific display options, such as the cart buttons on product tables or the star colors on review tables. The table's general design lives in the **Appearance** tab of the editor.
- **Add new column** adds a column filled from the source, such as a post meta value, a product SKU or a featured image. See [Dynamic columns reference](/dynamic-columns-reference).

Save your changes with the button at the bottom of each section (**Save settings**, **Update** or **Save and run**, depending on the source).

## Rows are read-only

The rows grid of a connected table shows a **Read-only** badge. You can't add, edit or delete rows here, because the data lives in its source. To change a row, change it at the source (edit the post, the product, the sheet or the database), and the table follows.

You can still:

- Rename columns, change their type and set column options from the column header › **Column settings**.
- Design the table in the **Appearance** tab.
- Add [Custom filters](/custom-filters) (Pro), Custom CSS/JS and performance settings in **Table Configuration**.

The **Frontend editing** tab isn't available for connected tables. It explains: "Only tables that store their own rows can be edited from the front end. This one reads its rows from somewhere else, so there is nothing here to save back to."

## Keeping the data fresh

How quickly a connected table picks up changes depends on the source:

- **WP Posts, WooCommerce, FluentCart, Fluent Forms and Custom SQL** read from your database when the table loads, subject to the table's cache. See [Table rendering settings](/table-rendering-settings) and [Clear table cache](/clear-table-cache).
- **Google Sheets and Remote CSV on FooTable** are fetched from the URL and cached for the **Caching interval (in minutes)** set in **Table Configuration** (5 minutes by default).
- **Google Sheets and Remote CSV on DataTables** are copied into your database on a schedule. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).

## Show the table on your site

Copy the shortcode from the editor header, or use the Ninja Tables block. Both work the same for connected tables. See [Embed a table](/embed-tables).
