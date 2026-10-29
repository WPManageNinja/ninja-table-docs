---
title: "Create Custom Column in WP Post/CPT/WooCommerce Table"
description: "Add, edit and remove extra columns in WP Posts, custom post type, WooCommerce and FluentCart tables, filled from custom fields, images, product data or shortcodes."
---

# Create Custom Column in WP Post/CPT/WooCommerce Table

A **custom column** adds information that isn't one of the standard post fields: a custom field, an ACF field, the featured image, a product's SKU or a shortcode. You can add custom columns to [WP Posts and custom post type](/create-wp-posts-table) tables (Pro), [WooCommerce](/woocommerce-integration) tables (Pro) and [FluentCart](/fluentcart-integration) tables (Free).

## Add a custom column

1. Open the table and go to the **Table Rows** tab.
2. On the banner, click **Edit query** (WP Posts tables) or **Source settings** (WooCommerce and FluentCart tables).
3. Open **Add new column**.
4. Enter a **Column name** and a **Column key**. The key can't be changed later.
5. Choose the column **Type** and, if needed, its **Responsive visibility**.
6. Scroll to **Dynamic post data settings** (WP Posts) or **Dynamic column data settings** (WooCommerce and FluentCart).
7. Choose a **Field type**, then fill in the **Field value**.
8. Click **Add column**.

![Dynamic Post Data Settings](/images/wordpress-integration/create-custom-column-wp/1.-Add-Post-Table.webp)

The new column appears in the rows grid. Click **Preview** in the editor header to see it on the front end.

## Which field type to choose

| You want to show | Field type | Guide |
|---|---|---|
| A custom field (including Meta Box, JetEngine, Toolset or Pods fields) | **Post Meta** | [Post meta field](/post-meta-field) |
| An ACF field | **Advanced Custom Fields (ACF)** | [ACF field integration](/acf-field-integration-with-ninja-tables-column) |
| The featured image | **Featured Image** | [Featured image](/featured-image) |
| A link, a button, HTML or a shortcode built from the post's data | **Shortcode / Computed Value or HTML** | [Shortcode / computed value or HTML](/shortcode-computed-value-or-html-in-wp-post-woocommerce-table) |
| Price, SKU, stock, quantity box, Buy Now button or average rating | **Product Data** | [Dynamic columns reference](/dynamic-columns-reference#product-data) |
| Author, date, short or long description of a product | **Post Data** | [Dynamic columns reference](/dynamic-columns-reference#post-data) |
| Product categories, tags, brands or other terms | **Product Taxonomy** | [Dynamic columns reference](/dynamic-columns-reference#product-taxonomy) |

Product Data, Post Data and Product Taxonomy are only offered on WooCommerce and FluentCart tables. See the [Dynamic columns reference](/dynamic-columns-reference) for every option.

## Edit or remove a custom column

- **Edit:** on the **Table Rows** tab, open the column header menu and choose **Column settings**. Change the field type, value or any other column option, then click **Save column**.
- **Remove:** choose **Delete column** from the column header menu, or click **Delete column** in the column settings drawer.
