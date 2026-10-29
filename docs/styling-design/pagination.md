---
title: "Pagination"
description: "Split a table into pages, choose how many rows each page shows, and let visitors change the page size."
---

# Pagination

**Pagination** splits a long table into pages, so visitors see a set number of rows at a time.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Pagination**.

![Pagination settings](/images/styling-design/pagination/1.-New-Ui-pagination.webp)

The switch in the **Pagination** heading turns pagination on or off. Turn it off to show all rows at once.

## Settings

- **Rows per page**: how many rows each page shows. The default is 10.
- **Let visitors change page size** (Pro): adds a dropdown so visitors can pick how many rows they see. When it's on, **Page sizes** sets the choices, as numbers separated by commas (default: `10,20,50,100`).
- **Scroll to the table top on page change** (Pro): when a visitor moves to another page, the page scrolls back to the top of the table.

### Look

- **Position**: place the page numbers on the **Left**, **Center** or **Right**.
- **Colors** (Pro): background, active page and border of the pagination bar.

Click **Save** to keep your changes.

This is how pagination looks on the site:

![Pagination in preview](/images/styling-design/pagination/2.-New-Ui-pagination-in-preview.webp)

::: tip
You can override the rows per page for one embed with the `per_page` shortcode attribute (Pro). See [Advanced Shortcode](/advanced-shortcode).
:::
