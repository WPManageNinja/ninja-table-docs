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
4. Tick **Show bulk action** (on FluentCart tables, **Show bulk actions**).
5. Click **Save settings**.

The table now has a checkbox column at the start, with a checkbox in the header to select all rows, and a **Bulk Actions** menu with an **Apply** button above the table.

## How customers use it

### Add several products to the cart

1. Tick the products to buy.
2. In the **Bulk Actions** menu, choose **Add to Cart**.
3. Click **Apply**. All selected products are added to the cart.

![NinjaTable frontend compare_bulk](/images/table-management/woocommerce-product/1.-NinjaTable-frontend-compare-bulk-1.webp)

### Compare products

1. Tick two or more products.
2. In the **Bulk Actions** menu, choose **Compare Products**.
3. Click **Apply**.

![NinjaTable frontend compare_bulk](/images/table-management/woocommerce-product/2.-NinjaTable-frontend-compare-bulk-2.webp)

A pop-up shows the selected products side by side. Click **Close** to return to the table.

![NinjaTable frontend compare_bulk](/images/table-management/woocommerce-product/3.-NinjaTable-frontend-compare-bulk-3.webp)

## Good to know

- Pair bulk actions with **Show go to cart button** and **Show checkout button** in the same **Appearance** section, so shoppers can go straight to checkout after adding products.
- A WooCommerce bulk add to cart takes up to 100 products at a time. Developers can change this limit with the `ninja_tables_woo_add_to_cart_max_products` filter. See [Hooks and filters](/hooks-and-filters).
