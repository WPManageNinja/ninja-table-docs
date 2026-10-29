---
title: "WooCommerce Product Reviews Table"
description: "Create a dynamic, searchable, and sortable table of your WooCommerce product reviews with Ninja Tables."
---

# WooCommerce Product Reviews Table

The **WooCommerce Product Reviews Table** (Pro) turns your customer feedback into a searchable, sortable table. Showing reviews this way builds trust and helps new customers buy with confidence.

You need Ninja Tables Pro and WooCommerce active. The **WooCommerce reviews** tile only appears when WooCommerce is active.

## Step 1: Create the reviews table

1. Go to **Create Table** and, under **Connect live data**, click **WooCommerce reviews**.
2. Enter a **Table name**, such as "Customer Feedback".
3. Pick the products whose reviews you want to show from the **Product category**, **Product tags** and **Product type** lists. Leave a list empty to use all of its items.
4. Set **Reviews Status** to **All**, **Approved** or **Unapproved**. Unapproved reviews are the ones waiting in **WooCommerce › Reviews**. Choose **Approved** for a public table.
5. Click **Create table**.

![WooCommerce Reviews table option](/images/data-sources/woocommerce-reviews-table/1.-WooCommerce-Reviews-table-option.webp)

The new table starts with these columns: Image, Title, Rating, Review and Reviewer.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/54aIPd2R1RI" title="WooCommerce Product Reviews Table Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Step 2: Change the review settings

On the **Table Rows** tab, the banner reads **Rows come from WooCommerce reviews**. Click **Source settings** to open the drawer. It has three sections:

- **Query settings**: change the products (**Select Products Reviews By Category**, **By Product Tags**, **By Product Type**) and the **Reviews status** (All, Approved, Unapproved).
- **Appearance**: set the **Filled star color** and **Empty star color** of the rating stars to match your brand.
- **Add new column**: add more data about the reviewed product, such as its [average rating](/woocommerce-product-average-rating-column), price or SKU. See [Dynamic columns reference](/dynamic-columns-reference).

Click **Save settings** in each section to apply your changes.

![WooCommerce review query settings](/images/data-sources/woocommerce-reviews-table/2.-WooCommerce-review-query-settings.webp)

### Other table settings

The rows are read-only, because they come from WooCommerce. Every other tab of the editor works as usual:

- **Appearance**: colors, fonts, search, sorting, pagination and mobile layout. See [Table style settings](/table-style-settings).
- **Custom filters** (Pro): filter controls above the table. See [Custom filters](/custom-filters).
- **Table Configuration**: engine, rendering and caching. See [Table rendering settings](/table-rendering-settings).
- **Custom CSS/JS**: your own styles and scripts. See [Table styling & CSS selectors](/table-styling-css-selector).

Frontend editing isn't available, because there is nothing to save back to. See [How connected tables work](/connected-tables-overview).

## Step 3: Show the reviews table

Copy the shortcode from the editor header and paste it into any page or post, or use the Ninja Tables block. See [Embed a table](/embed-tables).

![WooCommerce reviews table on the front end](/images/data-sources/woocommerce-reviews-table/3.-WooCommerce-review-table-frontend.webp)

For product tables rather than review tables, see [WooCommerce Integration](/woocommerce-integration).
