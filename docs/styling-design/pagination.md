---
title: "Pagination"
description: "Split a table into pages, choose how many rows each page shows, and let visitors change the page size."
---

# Pagination

**Pagination** splits a long table into pages, so visitors see a set number of rows at a time. It is on by default.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Pagination**.

![Pagination section with Rows Per Page, page-size options and Look settings](/images/styling-design/pagination/1.-Pagination-Section-With-Rows-Per-Page.webp)

The switch in the **Pagination** heading turns pagination on or off. Turn it off to show all rows at once.

## Settings

- **Rows Per Page**: how many rows each page shows. New tables start with 20. The field must be at least 1.
- **Let Visitors Change Page Size** (Pro): adds a dropdown so visitors can pick how many rows they see. When it's on, **Page Sizes** sets the choices, as numbers separated by commas (default: `10,20,50,100`).
- **Scroll To The Table Top On Page Change** (Pro): when a visitor moves to another page, the page scrolls back to the top of the table.

## Look

- **Position**: place the page numbers on the **Left**, **Center** or **Right**. The default is the right. This is free.
- **Colors** (Pro): **Background**, **Active Page** and **Border** of the pagination bar. They are the same colors as **Footer Colors** in [Table Colors](/table-color-settings).

Click **Save** to keep your changes.

This is how pagination looks on the site:

![A table on the site with the pagination bar under the rows](/images/styling-design/pagination/2.-Table-On-The-Site.webp)

::: tip
To set the starting rows per page for every new table, use the gear icon › **Settings** › **Global appearance**, see [Default Design for New Tables](/use-design-as-default). To override the rows per page for one embed, use the `per_page` shortcode attribute (Pro), see [Advanced Shortcode](/advanced-shortcode).
:::
