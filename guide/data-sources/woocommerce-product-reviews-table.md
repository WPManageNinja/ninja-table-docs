---
title: "WooCommerce Product Reviews Table"
description: "Create a dynamic, searchable, and sortable table of your WooCommerce product reviews with Ninja Tables."
---

# WooCommerce Product Reviews Table

The **WooCommerce Product Reviews Table** (Pro) turns your customer feedback into a dynamic, searchable, and sortable table. Showing reviews this way builds trust and helps new customers make confident buying decisions.

This is a built-in integration with no extra settings to configure. The **WooCommerce Reviews** option appears as long as both Ninja Tables Pro and WooCommerce are installed and activated.

## Step 1: Create the WooCommerce Reviews Table

- From your WordPress dashboard, go to **Ninja Tables Pro → Tables**.
- Click **Create Your First Table** (or **Create New Table** if you already have tables).
- In the pop-up, select **WooCommerce Reviews** from the list on the left.

![WooCommerce Reviews table option](/images/data-sources/woocommerce-reviews-table/1.-WooCommerce-Reviews-table-option.webp)

In the configuration panel, choose which reviews to pull into the table:

- **Table Title:** Give the table a descriptive name, such as "Customer Feedback".
- **Select Products Reviews By Category:** Show reviews only for products in the categories you pick. Leave it empty to include all categories.
- **Select Products Reviews By Product Tags:** Filter reviews by product tag.
- **Select Products Reviews By Product Type:** Filter reviews for Simple, Variable, or Grouped products.
- **Reviews Status:** Show **All**, **Approved**, or **Unapproved** reviews. Choose **Approved** for a public-facing table.

Click **Create Reviews Table** to generate the table.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/54aIPd2R1RI" title="WooCommerce Product Reviews Table Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Step 2: Customize Your Review Table Settings

In the table editor, the **Table Rows** tab holds the settings specific to your WooCommerce reviews. Click the banner that reads **You may update the query settings here** to open three sub-tabs:

- **Appearance:** Set the **Filled Star Color** and **Empty Star Color** so the star ratings match your branding.
- **Query Settings:** Change the filters you chose in Step 1 — categories, product type, or review status.
- **Add New Column:** Add more data to the table, such as the [product average rating](/guide/data-sources/woocommerce-product-average-rating-column).

![WooCommerce review query settings](/images/data-sources/woocommerce-reviews-table/2.-WooCommerce-review-query-settings.webp)

### Standard Table Settings

Settings specific to your review data live under the **Table Rows** tab. The table also has access to every standard Ninja Tables setting from the other tabs in the editor:

- **Table Configuration:** Core rendering settings such as pagination, sorting, and search — see [Table Rendering Settings](/guide/table-settings/table-rendering-settings).
- **Table Design:** Colors, borders, and layout to match your branding — see [Table Style Settings](/guide/styling-design/table-style-settings).
- **Frontend Editing:** Let specified users edit table data — see [Frontend Editing](/guide/advanced-features/frontend-editing).
- **Custom CSS/JS:** Add your own CSS or JavaScript — see [Table Styling & CSS Selector](/guide/table-management/table-styling-css-selector).
- **Import/Export:** Move table data in and out as CSV or JSON — see [Export Ninja Tables (CSV/JSON)](/guide/import-export/export-ninja-tables-csv-json).

## Step 3: Display Your Review Table

- Copy the table's **shortcode** from the top of the editor.
- Paste it into a shortcode block or the text editor on any WordPress page or post.

![WooCommerce reviews table on the front end](/images/data-sources/woocommerce-reviews-table/3.-WooCommerce-review-table-frontend.webp)

The reviews table now appears on the front end with every review and custom column you configured, including the product's average rating alongside each individual review.

For product tables rather than review tables, see [WooCommerce Integration](/guide/data-sources/woocommerce-integration).
