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

![WooCommerce product average rating column](/images/data-sources/woocommerce-average-rating/1.-WooCommerce-product-average-rating.webp)

## Rating options

- **Filled star color**: the color of the filled (active) stars.
- **Empty star color**: the color of the empty (inactive) stars.
- **No review text**: the text shown for a product with no reviews. The placeholder is "No reviews yet".
- **Show rating value**: shows the number next to the stars.

To change these later, open the column header › **Column settings**.

You can also sort products by rating: set **Initial order by** to **Average Rating** in **Source settings** › **Query settings**.
