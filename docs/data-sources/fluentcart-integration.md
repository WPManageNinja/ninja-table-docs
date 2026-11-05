---
title: "FluentCart Integration"
description: "Build a product table from your FluentCart store with add to cart, subscription Buy Now buttons, stock handling, variations and bulk buying."
---

# FluentCart Integration

**FluentCart Integration** builds a product table from your FluentCart store. Customers can pick variations, add items to the cart, and buy or compare several products at once without leaving the table. It's free: every feature on this page, including bulk add to cart and product comparison, works without Ninja Tables Pro.

You need FluentCart active. If it isn't, the **FluentCart products** drawer tells you to install or activate it.

## Step 1: Create a FluentCart table

1. Go to **Create Table** and, under **Connect live data**, click **FluentCart products**.
2. Enter a **Table name**, such as "Men's Shoes". It starts as "FluentCart products".
3. Pick the products to show from the **Product category** and **Product brands** lists. Leave a list empty to show products from all of its items.
4. Turn on **Hide out of stock items** to leave out products with no stock.
5. Set **Initial Order By**. It starts on **Default order**. Choose Product Title, Date, Price or Stock to sort, then pick **A → Z** or **Z → A** (**Z → A** is preselected). Visitors can still sort the table by any column.
6. Check the engine line. **DataTables** (recommended) is the default. Click **Change** to use FooTable. See [Choose a table engine](/guide/creating-tables/choose-table-engine).
7. Click **Create table**.

![FluentCart products drawer with category, stock and order options](/images/data-sources/fluentcart-integration/1.-FluentCart-Products-Drawer-With-Category-Stock.webp)

The new table starts with these columns: Image, Name, Category, Price, Total Stock, Variations, Quantity and Buy. Sale prices show the old price struck through.

### What the Buy column does

- **Simple products:** the button reads **Add To Cart** and adds the product to the cart without leaving the page. Guests can use it too.
- **Subscriptions and licensed products:** when the product's first variation is a subscription, or the product has licensing turned on, the button reads **Buy Now** instead. It opens FluentCart's instant checkout for that variation in a new tab.
- **Out of stock:** the Buy and Quantity cells show "Out Of Stock" instead of a button. To leave out-of-stock products out of the table altogether, turn on **Hide out of stock items**.

To change the **Add To Cart** wording, add a column with **Field type** set to **Product Data** › **Buy Now Button** and fill in **Buy now button text** (see Add new column below). The **Buy Now** button for subscriptions always keeps its own wording.

## Step 2: Change the settings

On the **Table Rows** tab, the banner reads **Rows come from FluentCart products**. Click **Source settings** to open the drawer. It has three sections: **Query settings**, **Appearance** and **Add new column**.

### Query settings

The same choices as on the Create screen: **Select Products By Category**, **Select Products By Product Brands**, **Hide out of stocks items**, and **Initial order by** (Product Title, Date, Price, Stock) with **Ascending way** or **Descending way** (shown once an order is chosen). Click **Save settings**.

<!-- TODO(screenshot): fluentcart-integration-2
  screen: Tables › a FluentCart table › Table Rows › Source settings › Query settings
  table: Store Products
  state: Query settings section open
  highlight: Save settings button
  view: admin
  alt: Query settings section of the FluentCart source settings drawer
-->

### Appearance

- **Show cart details before table** / **Show cart details after table**: a cart summary above or below the table. It only shows when the visitor's cart isn't empty. A new table has both on.
- **Show bulk actions**: adds checkboxes and a **Bulk Actions** menu (**Add to Cart**, **Compare Products**). See [Bulk add to cart & product comparison](/guide/table-management/woocommerce-product-comparison-bulk-add-to-cart).
- **Show go to cart button** and **Show checkout button**: buttons that take the customer to the cart or checkout. A new table has both on, and **Show bulk actions** off.
- **Cart text** and **Checkout text**: the wording on those buttons.

Click **Save settings**.

<!-- TODO(screenshot): fluentcart-integration-3
  screen: Tables › a FluentCart table › Table Rows › Source settings › Appearance
  table: Store Products
  state: Appearance section open with cart details and bulk actions on
  highlight: Show bulk actions switch
  view: admin
  alt: Appearance section of the FluentCart source settings drawer
-->

### Add new column

Add a column filled from your product data. For example, to show the short description:

1. Open **Add new column**.
2. Enter a **Column name**, such as "Description", and a **Column key**.
3. Under **Dynamic column data**, set **Field type** to **Post Data** and **Field value** to **Product Short Description**.
4. Click **Add column**.

<!-- TODO(screenshot): fluentcart-integration-4
  screen: Tables › a FluentCart table › Table Rows › Source settings › Add new column
  table: Store Products
  state: Add new column form with Post Data and Product Short Description chosen
  highlight: Field value dropdown
  view: admin
  alt: Add new column section with a Post Data field type
-->

The **Product Data** field type offers Product Price, Product Price Range, Product Variations, Product Stock, Product Quantity input field, Buy Now Button and Stock Availability. You can also use Post Meta, Shortcode / Computed Value or HTML, Featured Image and Product Taxonomy. See [Dynamic columns reference](/guide/wordpress-integration/dynamic-columns-reference).

### Other table settings

The rows are read-only, because they come from FluentCart. The other tabs work as usual:

- **Styling**: colors, fonts, search, sorting, pagination and mobile layout. See [Table style settings](/guide/styling-design/table-style-settings).
- **Table Configuration**: engine, rendering and caching. See [Table rendering settings](/guide/table-settings/table-rendering-settings).
- **Custom CSS/JS**: your own styles. See [Table styling & CSS selectors](/guide/table-management/table-styling-css-selector).

Some general table features, such as custom colors and custom filters, are Pro. See [Free vs Pro](/guide/getting-started/free-vs-pro).

## Step 3: Show the table

Copy the shortcode from the editor header and paste it into any page or post, or use the Ninja Tables block. See [Embed a table](/guide/wordpress-integration/embed-tables).

<!-- TODO(screenshot): fluentcart-integration-5
  screen: A page with the FluentCart table shortcode
  table: Store Products
  state: Front end table with Add To Cart buttons and a cart summary
  highlight: -
  view: frontend
  alt: FluentCart product table on a page with add to cart buttons
-->
