---
title: "Dynamic Columns Reference: Every Field Type for Posts and Product Tables"
description: "A reference of every field type you can use for extra columns in WP Posts, WooCommerce and FluentCart tables, with the options each one offers."
---

# Dynamic Columns Reference: Every Field Type for Posts and Product Tables

A **dynamic column** is a column that Ninja Tables fills from each row's post or product, such as a custom field, a featured image, a price or a shortcode. This page lists every field type for each source and the options each type has. For a step-by-step walkthrough, see [Create custom columns](/create-custom-column-in-wp-post-cpt-woocommerce-table).

## Where to add a dynamic column

| Table | Path | Settings block |
|---|---|---|
| WP Posts/CPTs (Pro) | **Table Rows** › **Edit query** › **Add new column** | **Dynamic post data settings** |
| WooCommerce products (Pro) | **Table Rows** › **Source settings** › **Add new column** | **Dynamic column data settings** |
| WooCommerce reviews (Pro) | **Table Rows** › **Source settings** › **Add new column** | **Dynamic column data settings** |
| FluentCart products (Free) | **Table Rows** › **Source settings** › **Add new column** | **Dynamic column data settings** |

Every dynamic column has the usual column fields (**Column name**, **Column key**, **Type**, **Responsive visibility**) plus two settings:

- **Field type**: where the value comes from.
- **Field value**: which field, key, size or template to use. What you enter here depends on the field type.

Click **Add column** to save it. To change a dynamic column later, open the column header › **Column settings** on the **Table Rows** tab.

## Field types by source

| Field type | WP Posts | WooCommerce products & reviews | FluentCart |
|---|:-:|:-:|:-:|
| Advanced Custom Fields (ACF) | ✅ (when ACF is active) | ✅ (when ACF is active) | – |
| Post Meta | ✅ | ✅ | ✅ |
| Shortcode / Computed Value or HTML | ✅ | ✅ | ✅ (simpler, see below) |
| Featured Image | ✅ | ✅ | ✅ |
| Product Data | – | ✅ | ✅ |
| Post Data | – | ✅ | ✅ |
| Product Taxonomy | – | ✅ | ✅ |

On WooCommerce reviews tables, the product field types refer to the product that was reviewed.

## Advanced Custom Fields (ACF)

Shows the value of an ACF field. This type only appears in the list when the Advanced Custom Fields plugin is active.

- **Field value**: the ACF field's **Name** (selector), for example `book_author`. It is shown in the **Name** column of your ACF field group.

See [ACF field integration](/acf-field-integration-with-ninja-tables-column).

## Post Meta

Shows any custom field (post meta) stored with the post or product.

- **Field value**: the meta key, for example `price_note`.

This also works for fields made with Meta Box, JetEngine, Toolset, Pods and similar plugins, because they store their values as post meta. See [Post meta field](/post-meta-field).

## Shortcode / Computed Value or HTML

Builds the cell from a template. You can mix HTML, placeholders and shortcodes.

- **Field value**: the template, for example `<a href="{post.permalink}">Read {post.post_title}</a>`.

Placeholders you can use:

| Placeholder | Value |
|---|---|
| `{post.ID}`, `{post.post_title}`, `{post.post_date}` and any other field of the post | The post's field |
| `{post.permalink}` | The post's URL |
| `{post.featured_image_url}` | The URL of the post's featured image |
| `{postmeta.META_KEY}` | A post meta value |
| `{acf.FIELD_NAME}` | An ACF field value (when ACF is active) |
| `[yourshortcode param="{post.ID}"]` | A shortcode, with placeholders as its parameters |

On **FluentCart** tables, a placeholder only works when it is the whole field value, for example just `{post.post_title}` or `{postmeta.my_key}`. To mix text, HTML and shortcodes, write them without placeholders.

See [Shortcode / computed value or HTML](/shortcode-computed-value-or-html-in-wp-post-woocommerce-table).

## Featured Image

Shows the post's or product's featured image.

- **Field value**: the image size. WordPress offers thumbnail, medium, medium_large, large, 1536x1536 and 2048x2048. Your theme and plugins (such as WooCommerce) can add more.
- **WP Posts tables**: **Link** › **Link to post permalink**, and **Open link to new tab**.
- **WooCommerce and FluentCart tables**: choose **Make image as lightbox**, **Link to product page** or **None**, and **Open link in new tab**.

See [Featured image](/featured-image).

## Product Data

Store data for each product. The **Field value** list depends on the store:

| Field value | WooCommerce | FluentCart |
|---|:-:|:-:|
| Product Price | ✅ | ✅ |
| Product Price Range | – | ✅ |
| Product Variations | – | ✅ |
| Product Stock Status | ✅ | – |
| Product Stock | – | ✅ |
| Stock Availability | – | ✅ |
| Product Quantity input field | ✅ | ✅ |
| Buy Now Button | ✅ | ✅ |
| Product SKU | ✅ | – |
| Product Average Rating | ✅ | – |

- **Buy Now Button** adds a **Buy now button text** field.
- **Product Average Rating** adds **Filled star color**, **Empty star color**, **No review text** and **Show rating value**. See [Product average rating column](/woocommerce-product-average-rating-column).

## Post Data

Standard post fields of the product: Post Author, Post Date, Product Title, Product Short Description, Product Long Description and Post Status. WooCommerce tables also offer Post Comment Count.

## Product Taxonomy

Shows the product's terms in a taxonomy, such as categories, tags, product type, shipping class or brand. The **Field value** list shows the taxonomies registered for products on your site.

Options:

- **Link to taxonomy**: links each term to its archive page.
- **Taxonomy separator**: the text between terms when a product has several.
- **Permalink action**: **Make taxonomies as table filter**. Clicking a term then filters the table to that term instead of opening its page.
- **Open link to new tab**.

## Options on query columns (WP Posts)

The columns you pick when you create a WP Posts table also have link options, set from the column header › **Column settings**:

- **Title**: **Link to post permalink** and **Open link to new tab**.
- **Author**: **Link to author permalink**, and a **Permalink action** that makes the author a table filter.
- **Taxonomies**: **Link to taxonomy**, **Taxonomy separator**, a **Permalink action** that makes the terms table filters, and **Open link to new tab**.

See [WP Posts table](/create-wp-posts-table).
