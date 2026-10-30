---
title: "Shortcode / Computed Value or HTML in WP Post / Woocommerce Table"
description: "Build table cells from HTML, post placeholders and shortcodes in WP Posts, WooCommerce and FluentCart tables, for buttons, links and computed values."
---

# Shortcode / Computed Value or HTML in WP Post / Woocommerce Table

The **Shortcode / Computed Value or HTML** field type builds each cell from a template. The template can mix HTML, placeholders for the row's post data and any WordPress shortcode. Use it for buttons, custom links, formatted values or output from other plugins. It works in [WP Posts](/create-wp-posts-table) and [WooCommerce](/woocommerce-integration) tables (Pro), and in a simpler form in [FluentCart](/fluentcart-integration) tables (Free).

## Add the column

1. Open your table and go to the **Table Rows** tab. If you don't have a table yet, create one from **Create Table** › **WP Posts/CPTs** (or **WooCommerce products**).
2. On the banner, click **Edit query** (WP Posts tables) or **Source settings** (WooCommerce and FluentCart tables), then open **Add new column**.
3. Enter a **Column name**, such as "Buy Now", and a **Column key**.
4. Under **Dynamic post data settings** (or **Dynamic column data settings**), set **Field type** to **Shortcode / Computed Value or HTML**.
5. Write your template in **Field value**. The instructions under the field list the placeholders.
6. Click **Add column**.

<!-- TODO(screenshot): shortcode-computed-value-or-html-in-wp-post-woocommerce-table-1
  screen: Tables › DOCTEST posts › Table Rows › Edit query › Add new column
  table: a WP Posts table
  state: Add new column section with Field type set to Shortcode / Computed Value or HTML and the placeholder instructions visible under Field value
  highlight: Field value
  view: admin
  alt: Add new column section with the Shortcode / Computed Value or HTML field type and its placeholder help
-->

## Placeholders

| Placeholder | Replaced with |
|---|---|
| `{post.ID}` | The post ID |
| `{post.post_title}` | The post title |
| `{post.permalink}` | The post's URL |
| `{post.featured_image_url}` | The URL of the featured image |
| `{post.FIELD}` | Any other post field, such as `{post.post_date}` or `{post.post_excerpt}` |
| `{postmeta.META_KEY}` | A custom field (post meta) value |
| `{acf.FIELD_NAME}` | An ACF field value (when ACF is active) |

Placeholders also work inside shortcode parameters: `[yourshortcode YourParam="{post.ID}"]`.

Placeholder values are cleaned before they go into the template. URLs (`{post.permalink}` and `{post.featured_image_url}`) are made safe as URLs, other values keep basic HTML and lose scripts, and values placed inside a shortcode parameter are escaped for attributes. A placeholder with no value, such as a missing custom field, leaves an empty spot. After the placeholders are filled, WordPress runs every shortcode in the result.

On a WooCommerce reviews table, the placeholders read the product that was reviewed.

## Examples

A link to the post:

```html
<a href="{post.permalink}">Read {post.post_title}</a>
```

A thumbnail from the featured image:

```html
<img src="{post.featured_image_url}" alt="{post.post_title}" width="80">
```

A WooCommerce add-to-cart button, using the WooCommerce `add_to_cart` shortcode:

```
[add_to_cart id="{post.ID}" show_price="false"]
```

A value from a custom field with a label:

```html
<strong>Location:</strong> {postmeta.event_location}
```

<!-- TODO(screenshot): shortcode-computed-value-or-html-in-wp-post-woocommerce-table-2
  screen: Tables › DOCTEST posts › Table Rows
  table: a WP Posts table
  state: Rows grid with a Read more column built from a post link template
  highlight: Read more column
  view: admin
  alt: Rows grid with a column built from a Shortcode / Computed Value or HTML template
-->

Click **Preview** in the editor header to see the result.

<!-- TODO(screenshot): shortcode-computed-value-or-html-in-wp-post-woocommerce-table-3
  screen: Tables › DOCTEST woo › Preview
  table: a WooCommerce products table
  state: Front-end table with a column of Add to cart buttons made with the add_to_cart shortcode
  highlight: -
  view: frontend
  alt: Product table on the page with add to cart buttons from a shortcode column
-->

## FluentCart tables

FluentCart tables support `{post.FIELD}`, `{post.permalink}` and `{postmeta.META_KEY}`, with one limit: a placeholder only works when it is the whole field value, for example just `{postmeta.color}`. A template that mixes text or HTML with placeholders isn't filled in. HTML and shortcodes without placeholders work as usual.

## Good to know

- You can find ready-made shortcodes in the documentation of WooCommerce and other plugins.
- A product table already has an **Add To Cart** button in its Buy column. Use a shortcode column only when you want a second button or different markup.
- To change the template later, open the column header › **Column settings**.

For every other column type, see the [Dynamic columns reference](/dynamic-columns-reference).
