---
title: "WooCommerce Integration"
description: "Build a WooCommerce product table with add to cart, variations, cart and checkout buttons, and custom product columns."
---

# WooCommerce Integration

A **WooCommerce products table** (Pro) lists your store's products in a searchable, sortable table with an **Add To Cart** button on every row. It suits wholesale order forms, product catalogs and quick-order pages. The table reads your products live, so prices and stock stay current.

You need WooCommerce active. The **WooCommerce products** tile only appears when it is. On the Free plugin the drawer shows a Pro notice instead of the form, and if Pro is out of date it asks you to update it. See [How connected tables work](/connected-tables-overview).

## Create a WooCommerce products table

1. Go to **Create Table** and, under **Connect live data**, click **WooCommerce products**.
2. Enter a **Table name**.
3. Pick the products to show from the **Product category**, **Product tags** and **Product type** lists. Each entry shows how many products it holds, for example "Uncategorized (2)". Product types are Simple product, Variable product, Grouped product and External/Affiliate product. Leave a list empty to use all of its items. A list reads "None in your store yet." when your store has no entries for it.
4. Turn on **Hide out of stock items** to leave out products with no stock. It is off by default.
5. Set **Initial Order By**: Product Title, Date, Menu Order, Average Rating, Price, Popularity (Sales) or Random. Then choose **A → Z** or **Z → A** (Random has no direction). Leave it unset to keep the default order. Visitors can still sort the table by any column.
6. Click **Create table**.

<!-- TODO(screenshot): woocommerce-integration-1
  screen: Tables › Create a table › Connect live data › WooCommerce products
  table: a WooCommerce products table
  state: WooCommerce products drawer with the three product lists, the Hide out of stock items switch and Initial Order By visible
  highlight: Product category list
  view: admin
  alt: WooCommerce products drawer with the product lists and ordering options
-->

This drawer has no engine line. WooCommerce tables always use the FooTable engine.

The new table starts with these columns: Image, Name, Category, Price, Quantity and Buy. Its **Appearance** options start with the cart summary before and after the table, **Show go to cart button** and **Show checkout button** turned on, and **Show bulk action** turned off.

## The Buy column

The **Buy** column shows a different button depending on the product:

- **Simple product:** an **Add To Cart** button that adds the product without leaving the page. Guests can use it too.
- **Simple product that can't be bought** (no price, or not published): a plain link to the product page.
- **Variable product:** a selector for each variation attribute, so customers can pick a size or color. The price follows the chosen variation.
- **External/Affiliate product:** a link button that opens the product's own link in a new tab. The button shows the text you set in WooCommerce for that product.
- **Grouped product:** a link to the product page, opening in a new tab.
- **Out of stock** (any type): the text "Out of stock" instead of a button.

The **Quantity** column shows a number box with plus and minus buttons. It follows each product's minimum, maximum and step, and it is empty for external and grouped products, for products that can't be bought and for products that are out of stock.

To change a button's wording on a new column, use a **Buy Now Button** column. See [Add new column](#add-new-column).

Developers can show the add to cart button for out-of-stock products, change the cart button text or URL, and change the term lists. See [Hooks and filters](/hooks-and-filters).

## Change the settings later

On the **Table Rows** tab, the banner reads **Rows come from WooCommerce products**. Click **Source settings** to open the drawer. It has three sections: **Query settings**, **Appearance** and **Add new column**.

<!-- TODO(screenshot): woocommerce-integration-2
  screen: Tables › DOCTEST woo › Table Rows › Source settings
  table: a WooCommerce products table
  state: Source settings drawer open on Query settings with the three product lists, Hide out of stocks items and Initial order by
  highlight: Source settings button
  view: admin
  alt: Source settings drawer for a WooCommerce products table
-->

### Query settings

These are the same choices as on the Create screen:

- **Select Products By Category**, **Select Products By Product Tags** and **Select Products By Product Type**. Leave a list empty to show products from all of them.
- **Hide out of stocks items**: leave out products with no stock.
- **Initial order by**: Product Title, Date, Menu Order, Average Rating, Price, Popularity (Sales) or Random, then **Ascending way** or **Descending way**.

Click **Save settings**.

### Appearance

These options add cart features around the table. Click **Save settings** to keep them.

- **Show cart details before table** / **Show cart details after table**: a cart summary above or below the table, for example "2 Items | $45.00". It stays hidden until the visitor's cart has something in it.
- **Show go to cart button** and **Show checkout button**: buttons inside that cart summary that take the customer to the cart or to checkout. They only appear together with the summary, so keep at least one of the two cart details options on.
- **Cart text** and **Checkout text**: the wording on those buttons. The defaults are "View cart" and "Checkout".
- **Show bulk action**: adds checkboxes and a **Bulk Actions** menu so customers can add several products to the cart at once or compare them. See [Bulk add to cart & product comparison](/woocommerce-product-comparison-bulk-add-to-cart).

<!-- TODO(screenshot): woocommerce-integration-3
  screen: Tables › DOCTEST woo › Table Rows › Source settings › Appearance
  table: a WooCommerce products table
  state: Appearance section showing the cart details switches, the cart and checkout buttons and their text fields, and Show bulk action
  highlight: Show bulk action
  view: admin
  alt: Appearance section of the WooCommerce Source settings drawer
-->

### Add new column

Add a column filled from your product data, for example the product SKU:

1. Open **Add new column**.
2. Enter a **Column name** (for example "SKU") and a **Column key**.
3. Under **Dynamic column data settings**, set **Field type** to **Product Data** and **Field value** to **Product SKU**.
4. Click **Add column**.

<!-- TODO(screenshot): woocommerce-integration-4
  screen: Tables › DOCTEST woo › Table Rows › Source settings › Add new column
  table: a WooCommerce products table
  state: Add new column section with Field type set to Product Data and Field value set to Product SKU
  highlight: Field value
  view: admin
  alt: Add new column section with Product Data and Product SKU chosen
-->

Other field types include Post Meta, Shortcode / Computed Value or HTML, Featured Image, Post Data and Product Taxonomy. Product Data also offers Product Price, Product Stock Status, Product Quantity input field, Buy Now Button and [Product Average Rating](/woocommerce-product-average-rating-column). See [Dynamic columns reference](/dynamic-columns-reference) for the full list.

## Customize the table

The rows are read-only, can't be sorted by dragging and can't be imported, because they come from WooCommerce. The rest of the editor works like any other table:

- Column options (name, type, alignment, conditional formatting) from the column header › **Column settings**. See [Basic column settings](/basic-settings).
- Colors, fonts, search, pagination and mobile layout in the **Appearance** tab. See [Table style settings](/table-style-settings).
- [Custom filters](/custom-filters) (Pro), for example a price range or category filter.
- Your own styles in **Custom CSS/JS**. See [Table styling & CSS selectors](/table-styling-css-selector).

In **Table Configuration**, the **Disable Caching** and **Display Frontend Loader** switches are not shown for WooCommerce tables.

Copy the shortcode from the editor header and paste it into a page, or use the Ninja Tables block. See [Embed a table](/embed-tables).

For a table of product reviews instead of products, see [WooCommerce product reviews table](/woocommerce-product-reviews-table). For FluentCart stores, see [FluentCart integration](/fluentcart-integration).
