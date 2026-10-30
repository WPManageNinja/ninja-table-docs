---
title: "WooCommerce Product Average Rating Column"
description: "Add a column to a WooCommerce products or reviews table that shows each product's average star rating."
---

# WooCommerce Product Average Rating Column

The **Product Average Rating** column (Pro) shows a product's overall average score as stars. In a [reviews table](/woocommerce-product-reviews-table), customers see the single review (for example, 5 stars) next to the product's average (for example, 4.5). In a [products table](/woocommerce-integration), it shows how well each product is rated.

## Add the average rating column

1. Open your WooCommerce products or reviews table and go to the **Table Rows** tab.
2. Click **Source settings** on the banner, then open **Add new column**.
3. Enter a **Column name** (for example "Avg. rating") and a **Column key**.
4. Under **Dynamic column data settings**, set **Field type** to **Product Data** and **Field value** to **Product Average Rating**.
5. Set the rating options (below).
6. Click **Add column**.

<!-- TODO(screenshot): woocommerce-product-average-rating-column-1
  screen: Tables › DOCTEST woo › Table Rows › Source settings › Add new column
  table: a WooCommerce products table
  state: Add new column section with Product Data and Product Average Rating chosen and the four rating options visible
  highlight: Field value
  view: admin
  alt: Add new column section with the Product Average Rating options
-->

## Rating options

- **Filled star color**: the color of the filled (active) stars. The default is gold (`#ffd700`).
- **Empty star color**: the color of the empty (inactive) stars. The default is light grey (`#e0e0e0`).
- **No review text**: the text shown for a product with no reviews. The placeholder is "No reviews yet". If you leave it empty, the cell shows "No rating".
- **Show rating value**: shows the number next to the stars, for example "4.5/5". It is on by default.

The stars are whole stars. A product rated 4.5 shows 4 filled stars and 1 empty star, and the number shows 4.5/5.

<!-- TODO(screenshot): woocommerce-product-average-rating-column-2
  screen: Tables › DOCTEST woo › Preview
  table: a WooCommerce products table
  state: Front-end product table with the average rating column showing stars and the x.x/5 value, and one product with no reviews
  highlight: Avg. rating column
  view: frontend
  alt: Product table on the page with an average rating column
-->

To change these later, open the column header › **Column settings**.

You can also sort products by rating: set **Initial order by** to **Average Rating** in **Source settings** › **Query settings**.

The reviews table's own **Rating** column uses different default colors (gold `#f2c94c` and light grey `#e6e6e6`), set in **Source settings** › **Appearance**. See [WooCommerce product reviews table](/woocommerce-product-reviews-table).
