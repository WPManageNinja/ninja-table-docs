---
title: "WooCommerce: Bulk Add to Cart &amp; Product Comparison"
description: "Let shoppers tick several products in a WooCommerce or FluentCart table, add them all to the cart at once, or compare them side by side."
---

# WooCommerce: Bulk Add to Cart &amp; Product Comparison

**Bulk Add to Cart** and **Product Comparison** let shoppers tick several products in a product table and act on all of them at once. Bulk Add to Cart saves wholesale buyers and repeat customers from visiting each product page. Product Comparison shows the selected products side by side in a pop-up, which helps when choosing between similar items.

Both features work in:

- **WooCommerce products** tables (Pro). See [WooCommerce integration](/woocommerce-integration).
- **FluentCart products** tables (Free). See [FluentCart integration](/fluentcart-integration).

## Turn on bulk actions

1. Open your WooCommerce or FluentCart products table.
2. On the **Table Rows** tab, click **Source settings** on the banner.
3. Open **Appearance**.
4. Tick **Show bulk action** (on FluentCart tables, **Show bulk actions**). It is off by default.
5. Click **Save settings**.

<!-- TODO(screenshot): woocommerce-product-comparison-bulk-add-to-cart-1
  screen: Tables › DOCTEST woo › Table Rows › Source settings › Appearance
  table: a WooCommerce products table
  state: Appearance section with Show bulk action ticked
  highlight: Show bulk action
  view: admin
  alt: Appearance section of the Source settings drawer with Show bulk action ticked
-->

The table now has a checkbox column at the start, with a checkbox in the header to select all rows, and a **Bulk Actions** menu with an **Apply** button above the table. The menu has two choices: **Add to Cart** and **Compare Products**.

<!-- TODO(screenshot): woocommerce-product-comparison-bulk-add-to-cart-2
  screen: Tables › DOCTEST woo › Preview
  table: a WooCommerce products table
  state: Front-end product table with the checkbox column, two products ticked and the Bulk Actions menu above the table
  highlight: Bulk Actions menu
  view: frontend
  alt: Product table on the page with checkboxes and the Bulk Actions menu
-->

## How customers use it

### Add several products to the cart

1. Tick the products to buy.
2. In the **Bulk Actions** menu, choose **Add to Cart**.
3. Click **Apply**. All selected products are added to the cart.

The cart summary around the table updates, if you turned on the cart details in **Appearance**. If some products can't be added, for example because one is out of stock, the shopper sees a message such as "2 of 3 products added to cart. Could not add: Product name", and the others are still added.

### Compare products

1. Tick two to five products.
2. In the **Bulk Actions** menu, choose **Compare Products**.
3. Click **Apply**.

A pop-up shows the selected products side by side: one column per product, with the product title at the top and one row for each table column that has a value. Add to cart buttons stay available inside the pop-up. Click **Close**, click outside the pop-up or press Esc to return to the table.

If a shopper picks fewer than two products, they see "Please select at least 2 products to compare". With more than five, they see "You can compare up to 5 products at a time".

<!-- TODO(screenshot): woocommerce-product-comparison-bulk-add-to-cart-3
  screen: Tables › DOCTEST woo › Preview › Compare Products
  table: a WooCommerce products table
  state: Compare Products pop-up open with three products side by side
  highlight: Close button
  view: frontend
  alt: Compare Products pop-up showing three products side by side
-->

## Good to know

- Pair bulk actions with the cart summary, **Show go to cart button** and **Show checkout button** in the same **Appearance** section, so shoppers can go straight to checkout after adding products.
- A WooCommerce bulk add to cart takes up to 100 products at a time. Above that, the shopper sees "You can add at most 100 products to the cart at once." Developers can change this limit with the `ninja_tables_woo_add_to_cart_max_products` filter. See [Hooks and filters](/hooks-and-filters).
