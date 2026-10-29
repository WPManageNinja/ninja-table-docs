---
title: "Featured Image"
description: "Show each post's or product's featured image in a WP Posts, WooCommerce or FluentCart table, pick the image size and link it to the post or a lightbox."
---

# Featured Image

The **Featured Image** field type shows each post's or product's featured image as a table column. Use it in [WP Posts](/create-wp-posts-table) and [WooCommerce](/woocommerce-integration) tables (Pro) and in [FluentCart](/fluentcart-integration) tables (Free). WooCommerce and FluentCart tables already include an Image column when you create them, so you only need this for extra image columns or other sizes.

## Add a featured image column

1. Open your table and go to the **Table Rows** tab.
2. On the banner, click **Edit query** (WP Posts tables) or **Source settings** (WooCommerce and FluentCart tables), then open **Add new column**.
3. Enter a **Column name** (for example "Image") and a **Column key**.
4. Under **Dynamic post data settings** (or **Dynamic column data settings**), set **Field type** to **Featured Image**.
5. In **Field value**, choose the image size (see below).
6. Choose the link options (see below).
7. Click **Add column**.

![Dynamic Post Data Settings](/images/wordpress-integration/featured-image/1.-featured-image-3.webp)

## Image sizes

The **Field value** list shows the image sizes on your site. WordPress includes thumbnail, medium, medium_large, large, 1536x1536 and 2048x2048. Your theme and plugins, such as WooCommerce, can add more. A small size, such as thumbnail, keeps the table light and fast.

![Field Value](/images/wordpress-integration/featured-image/2.-featured-image-4.webp)

## Link options

The options depend on the table:

- **WP Posts tables:** tick **Link** › **Link to post permalink** to make the image open the post. Tick **Open link to new tab** to open it in a new tab.
- **WooCommerce and FluentCart tables:** choose **Make image as lightbox** (the image opens larger on top of the page), **Link to product page** or **None**. Tick **Open link in new tab** if you link to the product page.

![Link to post Permalink](/images/wordpress-integration/featured-image/3.-featured-image-5.webp)

## Check the result

Click **Preview** in the editor header. Each row shows its post's featured image. Posts without a featured image show an empty cell. Set a featured image on the post in WordPress and it appears in the table.

![Example](/images/wordpress-integration/featured-image/4.-featured-image-6.webp)

![post featured image](/images/wordpress-integration/featured-image/5.-featured-image-7.webp)

![post featured image in posts table](/images/wordpress-integration/featured-image/6.-featured-image-8.webp)

## Use the image URL in your own HTML

On WP Posts and WooCommerce tables, the `{post.featured_image_url}` placeholder gives the image's URL. Use it with the **Shortcode / Computed Value or HTML** field type to build your own markup, for example `<img src="{post.featured_image_url}" alt="{post.post_title}" width="80">`. See [Shortcode / computed value or HTML](/shortcode-computed-value-or-html-in-wp-post-woocommerce-table).

To change the image size or link later, open the column header › **Column settings**.
