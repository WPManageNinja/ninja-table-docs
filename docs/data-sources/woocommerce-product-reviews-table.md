---
title: "WooCommerce Product Reviews Table"
description: "Create a dynamic, searchable, and sortable table of your WooCommerce product reviews with Ninja Tables."
---

# WooCommerce Product Reviews Table

The **WooCommerce Product Reviews Table** (Pro) turns your customer feedback into a searchable, sortable table. Showing reviews this way builds trust and helps new customers buy with confidence. The table reads the reviews live, so a new review appears as soon as WooCommerce publishes it.

You need Ninja Tables Pro and WooCommerce active. The **WooCommerce reviews** tile only appears when WooCommerce is active. On the Free plugin the drawer shows a Pro notice instead of the form, and if Pro is out of date it asks you to update it. See [How connected tables work](/connected-tables-overview).

## Step 1: Create the reviews table

1. Go to **Create Table** and, under **Connect live data**, click **WooCommerce reviews**.
2. Enter a **Table name**, such as "Customer Feedback".
3. Pick the products whose reviews you want to show from the **Product category**, **Product tags** and **Product type** lists. Leave a list empty to use all of its items.
4. Set **Reviews Status** to **All**, **Approved** or **Unapproved**. Unapproved reviews are the ones waiting in **WooCommerce › Reviews**. Choose **Approved** for a public table.
5. Click **Create table**.

<!-- TODO(screenshot): woocommerce-product-reviews-table-1
  screen: Tables › Create a table › Connect live data › WooCommerce reviews
  table: a WooCommerce reviews table
  state: WooCommerce reviews drawer with the three product lists and the Reviews Status switch set to Approved
  highlight: Reviews Status
  view: admin
  alt: WooCommerce reviews drawer with the product lists and Reviews Status
-->

This drawer has no engine line. Reviews tables always use the FooTable engine.

## What the table shows

The new table starts with these columns:

| Column | What each row shows |
|---|---|
| **Image** | The reviewed product's thumbnail, linked to the product page. |
| **Title** | The reviewed product's name, linked to the product page. |
| **Rating** | The review's star rating out of 5, with filled and empty stars. A review without a rating leaves the cell empty. |
| **Review** | The text of the review. Basic formatting such as links and bold text is kept, and scripts are removed. |
| **Reviewer** | The name the reviewer entered, as plain text. |

Each row is one review, and the rows are sorted with the newest review first. Only real product reviews are listed, not other comments on your site. **Reviews Status** works like this:

- **All**: approved reviews and reviews waiting for approval.
- **Approved**: only published reviews.
- **Unapproved**: only reviews waiting for approval.

Spam and trashed reviews are never shown. Reviews on products outside your category, tag and type choices are left out. If you leave all three lists empty, reviews of every product are shown.

## Step 2: Change the review settings

On the **Table Rows** tab, the banner reads **Rows come from WooCommerce reviews**. Click **Source settings** to open the drawer. It has three sections:

- **Query settings**: change the products (**Select Products Reviews By Category**, **By Product Tags**, **By Product Type**) and the **Reviews status** (All, Approved, Unapproved).
- **Appearance**: set the **Filled star color** and **Empty star color** of the rating stars to match your brand. The defaults are gold (`#f2c94c`) and light grey (`#e6e6e6`).
- **Add new column**: add more data about the reviewed product, such as its [average rating](/woocommerce-product-average-rating-column), price, SKU or featured image. See [Dynamic columns reference](/dynamic-columns-reference).

Click **Save settings** in each section to apply your changes.

<!-- TODO(screenshot): woocommerce-product-reviews-table-2
  screen: Tables › DOCTEST reviews › Table Rows › Source settings
  table: a WooCommerce reviews table
  state: Source settings drawer open on Query settings, with Reviews status and the product lists
  highlight: Source settings button
  view: admin
  alt: Source settings drawer for a WooCommerce reviews table
-->

<!-- TODO(screenshot): woocommerce-product-reviews-table-3
  screen: Tables › DOCTEST reviews › Table Rows › Source settings › Appearance
  table: a WooCommerce reviews table
  state: Appearance section with Filled star color and Empty star color
  highlight: Filled star color
  view: admin
  alt: Appearance section with the star color options
-->

Columns you add here describe the product that was reviewed, not the review. You can't add a column for the review's own custom fields.

### Other table settings

The rows are read-only, can't be sorted by dragging and can't be imported, because they come from WooCommerce. Every other tab of the editor works as usual:

- **Appearance**: colors, fonts, search, sorting, pagination and mobile layout. See [Table style settings](/table-style-settings).
- **Custom filters** (Pro): filter controls above the table. See [Custom filters](/custom-filters).
- **Table Configuration**: rendering and caching. The **Disable Caching** and **Display Frontend Loader** switches are not shown for reviews tables. See [Table rendering settings](/table-rendering-settings).
- **Custom CSS/JS**: your own styles and scripts. See [Table styling & CSS selectors](/table-styling-css-selector).

Frontend editing isn't available, because there is nothing to save back to. See [How connected tables work](/connected-tables-overview).

## Step 3: Show the reviews table

Copy the shortcode from the editor header and paste it into any page or post, or use the Ninja Tables block. See [Embed a table](/embed-tables).

<!-- TODO(screenshot): woocommerce-product-reviews-table-4
  screen: Tables › DOCTEST reviews › Preview
  table: a WooCommerce reviews table
  state: Front-end reviews table with product image, title, star rating, review text and reviewer name
  highlight: -
  view: frontend
  alt: WooCommerce reviews table on the page
-->

For product tables rather than review tables, see [WooCommerce Integration](/woocommerce-integration).
