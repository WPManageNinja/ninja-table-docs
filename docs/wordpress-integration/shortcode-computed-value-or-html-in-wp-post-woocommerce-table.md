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

![Shortcode](/images/wordpress-integration/shortcode-computed-value/1.-Shortcode-Table-1.webp)

![Add Column](/images/wordpress-integration/shortcode-computed-value/2.-Shortcode-Table-2.webp)

![Shortcode / Computed Value or HTML](/images/wordpress-integration/shortcode-computed-value/3.-Shortcode-Table-3.webp)

![Shortcode](/images/wordpress-integration/shortcode-computed-value/4.-Shortcode-Table-4.webp)

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

![new column with shortcode](/images/wordpress-integration/shortcode-computed-value/5.-shortcode-computed-value-9.webp)

Click **Preview** in the editor header to see the result.

![add to cart button with shortcode](/images/wordpress-integration/shortcode-computed-value/6.-preview-table-after-creating-a-column-fr.webp)

## FluentCart tables

FluentCart tables support `{post.FIELD}`, `{post.permalink}` and `{postmeta.META_KEY}`, with one limit: a placeholder only works when it is the whole field value, for example just `{postmeta.color}`. A template that mixes text or HTML with placeholders isn't filled in. HTML and shortcodes without placeholders work as usual.

## Good to know

- You can find ready-made shortcodes in the documentation of WooCommerce and other plugins.
- To change the template later, open the column header › **Column settings**.

For every other column type, see the [Dynamic columns reference](/dynamic-columns-reference).
