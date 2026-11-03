---
title: "Pagination"
description: "Split a table into pages, choose how many rows each page shows, let visitors change the page size, and place the page numbers left, center or right."
---

# Pagination

**Pagination** splits a long table into pages, so visitors see a set number of rows at a time and move between pages with a page bar under the table. It is on by default.

- The **switch** in the **Pagination** heading turns pagination on or off. Turn it off to show every row on one page.
- **Rows Per Page** sets how many rows each page holds.
- **Let Visitors Change Page Size** and **Scroll To The Table Top On Page Change** are Pro options.
- **Look** › **Position** places the page bar.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Table Design** tab.
3. In the settings panel, click the **Features** tab, then open **Pagination**.

![Pagination section with Rows Per Page, the two Pro switches and the Position choices](/images/styling-design/pagination/1.-Pagination-Section-With-Rows-Per-Page.webp)

Every change shows in the live preview straight away. Click **Save** at the top of the editor to keep it.

## Rows Per Page

**Rows Per Page** is a number. It sets how many rows show on each page. New tables start with 20. The lowest value is 1.

A table with 95 rows and 20 rows per page has 5 pages. The last page holds the remaining 15 rows.

## Let Visitors Change Page Size (Pro)

Turn this on to add a dropdown to the table so visitors can choose how many rows they see. Your **Rows Per Page** number is the starting size.

When it is on, a **Page Sizes** field appears:

- Type the choices as numbers separated by commas, for example `10,20,50,100`. That list is the default.
- Choose sizes that make sense for your table. If you leave the field empty, the default list is used.

On the free version, the switch opens the upgrade popup and changes nothing.

## Scroll To The Table Top On Page Change (Pro)

Turn this on and the page scrolls back to the top of the table every time a visitor moves to another page. It helps on long pages, where the page bar sits far below the first row. Without it, the visitor stays at the bottom and must scroll up to read the new rows.

## Look: Position

**Position** places the page numbers: **Left**, **Center** or **Right**. It is **Right** by default and it is free.

## Pagination colors

The colors of the page bar live in the **Colors** tab, in the **Pagination Colors** section: **Background**, **Active Page** and **Border**. Custom colors are Pro. See [Table Colors](/table-color-settings).

## What visitors see

With pagination on, the page bar sits under the rows, at the position you chose.

![A table on the site with the pagination bar under the rows](/images/styling-design/pagination/2.-Table-On-The-Site.webp)

::: tip
To set the starting rows per page for every new table, use the gear icon › **Settings** › **Global appearance**. See [Default Design for New Tables](/use-design-as-default). To override the rows per page for one embed, use the `per_page` shortcode attribute (Pro). See [Advanced Shortcode](/advanced-shortcode).
:::

## Common questions

::: faq
== All my rows show on one page.
Check that the switch in the **Pagination** heading is on. With it off, the table shows every row at once. Also check that **Rows Per Page** is lower than your total number of rows.
== The page-size dropdown does not show.
**Let Visitors Change Page Size** is a Pro option. Turn it on, and make sure you clicked **Save**. On the free version the switch opens the upgrade popup.
== The page bar is on the wrong side.
Use **Look** › **Position** and pick **Left**, **Center** or **Right**.
== How do I change the color of the page numbers?
Colors are in the **Colors** tab, under **Pagination Colors**. See [Table Colors](/table-color-settings).
:::

## Related

- Set the page bar colors: [Table Colors](/table-color-settings).
- Order the rows before they are split into pages: [Sorting](/sorting).
- Set rows per page for every new table: [Default Design for New Tables](/use-design-as-default).
- Show a limited number of rows in one embed: [Advanced Shortcode](/advanced-shortcode).
