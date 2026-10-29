---
title: "FluentCart Integration"
description: "Connect Ninja Tables with FluentCart to build responsive, sortable product tables with add-to-cart, variations, and bulk buying."
---

# FluentCart Integration

**FluentCart Integration** builds a product table from your FluentCart store. Customers can pick variations, add items to the cart, and buy or compare several products at once without leaving the table. It's free: every feature on this page, including bulk add to cart and product comparison, works without Ninja Tables Pro.

You need FluentCart active. The **FluentCart products** tile only appears when it is.

## Step 1: Create a FluentCart table

1. Go to **Create Table** and, under **Connect live data**, click **FluentCart products**.
2. Enter a **Table name**, such as "Men's Shoes".
3. Pick the products to show from the **Product category** and **Product brands** lists. Leave a list empty to show products from all of its items.
4. Turn on **Hide out of stock items** to leave out products with no stock.
5. Set **Initial Order By**: Product Title, Date, Price or Stock, then choose **A → Z** or **Z → A**. Visitors can still sort the table by any column.
6. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
7. Click **Create table**.

![FluentCart in the table creation menu](/images/data-sources/fluentcart-integration/1.-FluentCart-in-table-creation-menu.webp)

![FluentCart table creation settings](/images/data-sources/fluentcart-integration/2.-FluentCart-table-creation.webp)

The new table starts with these columns: Image, Name, Category, Price, Total Stock, Variations, Quantity and Buy. Sale prices show the old price struck through, and the Buy column has an **Add To Cart** button.

## Step 2: Change the settings

On the **Table Rows** tab, the banner reads **Rows come from FluentCart products**. Click **Source settings** to open the drawer. It has three sections: **Query settings**, **Appearance** and **Add new column**.

![FluentCart table settings in the editor](/images/data-sources/fluentcart-integration/3.-FluentCart-table-backend.webp)

### Query settings

The same choices as on the Create screen: **Select Products By Category**, **Select Products By Product Brands**, **Hide out of stocks items**, and **Initial order by** (Product Title, Date, Price, Stock) with **Ascending way** or **Descending way**. Click **Save settings**.

![FluentCart query settings](/images/data-sources/fluentcart-integration/4.-FluentCart-query-settings.webp)

### Appearance

- **Show cart details before table** / **Show cart details after table**: a cart summary above or below the table. It only shows when the visitor's cart isn't empty.
- **Show bulk actions**: adds checkboxes and a **Bulk Actions** menu (**Add to Cart**, **Compare Products**). See [Bulk add to cart & product comparison](/woocommerce-product-comparison-bulk-add-to-cart).
- **Show go to cart button** and **Show checkout button**: buttons that take the customer to the cart or checkout.
- **Cart text** and **Checkout text**: the wording on those buttons.

Click **Save settings**.

### Add new column

Add a column filled from your product data. For example, to show the short description:

1. Open **Add new column**.
2. Enter a **Column name**, such as "Description", and a **Column key**.
3. Under **Dynamic column data settings**, set **Field type** to **Post Data** and **Field value** to **Product Short Description**.
4. Click **Add column**.

![Adding a new column to a FluentCart table](/images/data-sources/fluentcart-integration/5.-FluentCart-table-add-new-column.webp)

The **Product Data** field type offers Product Price, Product Price Range, Product Variations, Product Stock, Product Quantity input field, Buy Now Button and Stock Availability. You can also use Post Meta, Shortcode / Computed Value or HTML, Featured Image and Product Taxonomy. See [Dynamic columns reference](/dynamic-columns-reference).

### Other table settings

The rows are read-only, because they come from FluentCart. The other tabs work as usual:

- **Appearance**: colors, fonts, search, sorting, pagination and mobile layout. See [Table style settings](/table-style-settings).
- **Table Configuration**: engine, rendering and caching. See [Table rendering settings](/table-rendering-settings).
- **Custom CSS/JS**: your own styles. See [Table styling & CSS selectors](/table-styling-css-selector).

Some general table features, such as custom colors and custom filters, are Pro. See [Free vs Pro](/free-vs-pro).

## Step 3: Show the table

Copy the shortcode from the editor header and paste it into any page or post, or use the Ninja Tables block. See [Embed a table](/embed-tables).

![FluentCart product table on the front end](/images/data-sources/fluentcart-integration/6.-FluentCart-table-frontend.webp)
