---
title: "WooCommerce Integration"
description: "Build a WooCommerce product table with add to cart, variations, cart and checkout buttons, and custom product columns."
---

# WooCommerce Integration

A **WooCommerce products table** (Pro) lists your store's products in a searchable, sortable table with an **Add To Cart** button on every row. It suits wholesale order forms, product catalogs and quick-order pages. The table reads your products live, so prices and stock stay current.

You need WooCommerce active. The **WooCommerce products** tile only appears when it is.

## Create a WooCommerce products table

1. Go to **Create Table** and, under **Connect live data**, click **WooCommerce products**.
2. Enter a **Table name**.
3. Pick the products to show from the **Product category**, **Product tags** and **Product type** lists (simple, variable, grouped and so on). Leave a list empty to use all of its items.
4. Turn on **Hide out of stock items** to leave out products with no stock.
5. Set **Initial Order By**: Product Title, Date, Menu Order, Average Rating, Price, Popularity (Sales) or Random, then choose **A → Z** or **Z → A**. Visitors can still sort the table by any column.
6. Click **Create table**.

![WooCommerce Table](/images/data-sources/woocommerce-integration/1.-WooCommerce-Table-1.webp)

The new table starts with these columns: Image, Name, Category, Price, Quantity and Buy. The Buy column shows an **Add To Cart** button. Out-of-stock products show "Out of stock", and variable products show a variation selector, so customers can pick a size or color (the price follows the chosen variation).

## Change the settings later

On the **Table Rows** tab, the banner reads **Rows come from WooCommerce products**. Click **Source settings** to open the drawer. It has three sections: **Query settings**, **Appearance** and **Add new column**.

### Query settings

These are the same choices as on the Create screen:

- **Select Products By Category**, **Select Products By Product Tags** and **Select Products By Product Type**. Leave a list empty to show products from all of them.
- **Hide out of stocks items**: leave out products with no stock.
- **Initial order by**: Product Title, Date, Menu Order, Average Rating, Price, Popularity (Sales) or Random, then **Ascending way** or **Descending way**.

Click **Save settings**.

![Query Settings](/images/data-sources/woocommerce-integration/3.-WooCommerce-Table-3.webp)

### Appearance

These options add cart features around the table:

- **Show cart details before table** / **Show cart details after table**: a cart summary above or below the table. It only shows when the visitor's cart isn't empty.
- **Show bulk action**: adds checkboxes and a **Bulk Actions** menu so customers can add several products to the cart at once or compare them. See [Bulk add to cart & product comparison](/woocommerce-product-comparison-bulk-add-to-cart).
- **Show go to cart button** and **Show checkout button**: buttons that take the customer to the cart or checkout.
- **Cart text** and **Checkout text**: the wording on those buttons.

Click **Save settings**.

![Appearance](/images/data-sources/woocommerce-integration/2.-WooCommerce-Table-2.webp)

### Add new column

Add a column filled from your product data, for example the product SKU:

1. Open **Add new column**.
2. Enter a **Column name** (for example "SKU") and a **Column key**.
3. Under **Dynamic column data settings**, set **Field type** to **Product Data** and **Field value** to **Product SKU**.
4. Click **Add column**.

![Add New Colume](/images/data-sources/woocommerce-integration/4.-WooCommerce-Table-Dynamic-Field.webp)

![product sku column in woocommerce table](/images/data-sources/woocommerce-integration/5.-Woocommerce-Integration-10.webp)

Other field types include Post Meta, Shortcode / Computed Value or HTML, Featured Image, Post Data and Product Taxonomy. Product Data also offers Product Price, Product Stock Status, Product Quantity input field, Buy Now Button and [Product Average Rating](/woocommerce-product-average-rating-column). See [Dynamic columns reference](/dynamic-columns-reference) for the full list.

## Customize the table

The rows are read-only, but the rest of the editor works like any other table:

- Column options (name, type, alignment, conditional formatting) from the column header › **Column settings**. See [Basic column settings](/basic-settings).
- Colors, fonts, search, pagination and mobile layout in the **Appearance** tab. See [Table style settings](/table-style-settings).
- [Custom filters](/custom-filters) (Pro), for example a price range or category filter.
- Your own styles in **Custom CSS/JS**. See [Table styling & CSS selectors](/table-styling-css-selector).

Copy the shortcode from the editor header and paste it into a page, or use the Ninja Tables block. See [Embed a table](/embed-tables).

For a table of product reviews instead of products, see [WooCommerce product reviews table](/woocommerce-product-reviews-table). For FluentCart stores, see [FluentCart integration](/fluentcart-integration).
