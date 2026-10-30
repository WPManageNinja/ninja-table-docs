---
title: "ACF Field Integration: Advanced Custom Fields in Ninja Tables"
description: "Show Advanced Custom Fields (ACF) values as columns in a WP Posts or WooCommerce table, using the ACF field type or ACF placeholders."
---

# ACF Field Integration: Advanced Custom Fields in Ninja Tables

The **Advanced Custom Fields (ACF)** field type (Pro) shows the value of an ACF field as a table column. Use it in [WP Posts](/create-wp-posts-table) and [WooCommerce](/woocommerce-integration) tables to display extra details you store with ACF, such as a book's author, an event's venue or a product's warranty.

The ACF field type only appears in the **Field type** list when the Advanced Custom Fields plugin is active.

## What is ACF

Advanced Custom Fields is a WordPress plugin that adds your own fields to posts, pages, custom post types and more. Each field has a **Name** (also called the selector), which Ninja Tables uses to read its value.

## Step 1: Create the ACF field

1. Install and activate **Advanced Custom Fields** from the WordPress plugin directory.
2. In ACF, add a new field group and give it a title.
3. Click **Add Field** and enter a **Field Label** and a **Field Name**. Note the field name: you'll need it in Ninja Tables.
4. Set where the field group shows (for example, on Posts) and publish it.

<!-- TODO(screenshot): acf-field-integration-with-ninja-tables-column-1
  screen: ACF › Field Groups › Edit field group
  table: -
  state: An ACF field group with one text field whose Field Name is visible and the location rule set to Post
  highlight: Field Name
  view: admin
  alt: ACF field group with a field and its Field Name
-->

## Step 2: Fill in the field on your posts

Open a post. The ACF field appears below the content. Enter a value and click **Update**.

<!-- TODO(screenshot): acf-field-integration-with-ninja-tables-column-2
  screen: Posts › Edit post
  table: -
  state: A post with the ACF field below the content and a value typed in
  highlight: ACF field
  view: admin
  alt: Post editor with an ACF field filled in
-->

## Step 3: Add the ACF column to your table

1. Open your WP Posts or WooCommerce table and go to the **Table Rows** tab.
2. On the banner, click **Edit query** (WP Posts tables) or **Source settings** (WooCommerce tables), then open **Add new column**.
3. Enter a **Column name** and a **Column key**.
4. Under **Dynamic post data settings** (or **Dynamic column data settings**), set **Field type** to **Advanced Custom Fields (ACF)**.
5. In **Field value**, type the ACF field's name exactly as it appears in the **Name** column of your field group.
6. Click **Add column**.

<!-- TODO(screenshot): acf-field-integration-with-ninja-tables-column-3
  screen: Tables › DOCTEST posts › Table Rows › Edit query › Add new column
  table: a WP Posts table
  state: Add new column section with Field type set to Advanced Custom Fields (ACF) and the field name in Field value
  highlight: Field value
  view: admin
  alt: Add new column section with the ACF field type and an ACF field name
-->

Click **Preview** in the editor header. The new column shows each post's ACF value.

<!-- TODO(screenshot): acf-field-integration-with-ninja-tables-column-4
  screen: Tables › DOCTEST posts › Preview
  table: a WP Posts table
  state: Front-end table with an ACF column filled for each post
  highlight: -
  view: frontend
  alt: Posts table on the page with an ACF column
-->

## Use ACF values inside other content

To put an ACF value inside a link, next to other text or in a shortcode, use the **Shortcode / Computed Value or HTML** field type with the `{acf.FIELD_NAME}` placeholder, for example `<a href="{post.permalink}">{acf.book_author}</a>`. See [Shortcode / computed value or HTML](/shortcode-computed-value-or-html-in-wp-post-woocommerce-table).

## Good to know

- If **Advanced Custom Fields (ACF)** is missing from the **Field type** list, check that the ACF plugin is active.
- ACF fields can also be read with the **Post Meta** field type, using the field name as the meta key. The ACF field type is better for fields that hold choices, images or other structured values, because it reads them the way ACF formats them.
- ACF isn't offered on FluentCart tables. Use **Post Meta** there.
- A field with several values, such as a checkbox or select with multiple choices, shows as comma-separated text. A repeating group shows one group after another, separated by semicolons.
- ACF values keep basic HTML (links, bold text) and lose scripts.
- On a WooCommerce reviews table, the ACF field is read from the product that was reviewed.

For other custom field plugins, see [Post meta field](/post-meta-field). For every column type, see the [Dynamic columns reference](/dynamic-columns-reference).
