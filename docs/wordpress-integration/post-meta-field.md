---
title: "Post Meta Field"
description: "Show WordPress custom fields (post meta) in a WP Posts, WooCommerce or FluentCart table, including fields made with Meta Box, JetEngine, Toolset and Pods."
---

# Post Meta Field

The **Post Meta** field type shows a post's custom fields (also called post meta) as a table column. Custom fields hold extra details about a post, such as a price, a location, an event date or a rating. Use it in [WP Posts](/create-wp-posts-table) and [WooCommerce](/woocommerce-integration) tables (Pro) and in [FluentCart](/fluentcart-integration) tables (Free).

Custom fields are stored as key/value pairs. To show one in a table, you only need its **meta key**.

## Find the meta key

### WordPress custom fields

1. Open a post in the WordPress editor.
2. Turn on custom fields. In the block editor, open the **⋮** menu › **Preferences** › **Panels** and turn on **Custom fields**. In the classic editor, open **Screen Options** and tick **Custom Fields**.
3. The **Custom Fields** box appears below the post. The **Name** of each field is its meta key.

<!-- TODO(screenshot): post-meta-field-1
  screen: Posts › Edit post › Custom Fields
  table: -
  state: A post editor with the Custom Fields box open below the content and one field listed with its Name
  highlight: Name column of the Custom Fields box
  view: admin
  alt: Custom Fields box under a post showing the meta key in the Name column
-->

### Meta Box, JetEngine, Toolset, Pods and other field plugins

These plugins store their fields as post meta, so the **Post Meta** field type shows them too. There is no separate integration to set up. Use the field's name or ID as the meta key:

- **JetEngine:** go to **JetEngine** › **Post Types**, edit the post type and open **Meta Fields**. The **Name/ID** of each field is its meta key (for example `name` or `date`).
- **Meta Box:** the field's **ID** in the field group.
- **Toolset Types:** the field's slug, with the `wpcf-` prefix (for example `wpcf-price`).
- **Pods:** the field's **Name** in the pod.

Plugins that store complex values (repeaters, galleries, relations) save them in a format that may not read well in a table. For those, use [Shortcode / Computed Value or HTML](/shortcode-computed-value-or-html-in-wp-post-woocommerce-table) with the plugin's own shortcode. For ACF fields, use the dedicated [ACF field type](/acf-field-integration-with-ninja-tables-column).

## Add a Post Meta column

1. Open your table and go to the **Table Rows** tab.
2. On the banner, click **Edit query** (WP Posts tables) or **Source settings** (WooCommerce and FluentCart tables), then open **Add new column**.
3. Enter a **Column name** and a **Column key**.
4. Under **Dynamic post data settings** (or **Dynamic column data settings**), set **Field type** to **Post Meta**.
5. In **Field value**, type the meta key, for example `Ninja-Post`.
6. Click **Add column**.

<!-- TODO(screenshot): post-meta-field-2
  screen: Tables › DOCTEST posts › Table Rows › Edit query › Add new column
  table: a WP Posts table
  state: Add new column section with Field type set to Post Meta and a meta key typed in Field value
  highlight: Field value
  view: admin
  alt: Add new column section with the Post Meta field type and a meta key in Field value
-->

Click **Preview** in the editor header to see the column on the front end. Each row shows that post's value for the meta key. Posts without the field show an empty cell. Basic HTML in a value, such as a link, is kept; scripts are removed.

<!-- TODO(screenshot): post-meta-field-3
  screen: Tables › DOCTEST posts › Preview
  table: a WP Posts table
  state: Front-end table with the new Post Meta column filled for most rows and empty for posts without the field
  highlight: -
  view: frontend
  alt: Posts table on the page with a Post Meta column
-->

## Combine meta values with other content

To show a meta value inside a link, next to other text or as a shortcode parameter, use the **Shortcode / Computed Value or HTML** field type with the `{postmeta.META_KEY}` placeholder, for example `Price: {postmeta.price_note}`. See [Shortcode / computed value or HTML](/shortcode-computed-value-or-html-in-wp-post-woocommerce-table).

## Filter rows by a meta value

To show only posts with a certain meta value, use **Meta query** in **Edit query** › **Query settings**. See [WP Posts table](/create-wp-posts-table#meta-query).

For every other column type, see the [Dynamic columns reference](/dynamic-columns-reference).
