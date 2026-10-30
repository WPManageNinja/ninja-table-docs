---
title: "Image/File/Lightbox"
description: "Use the Image/File/Lightbox column type (Pro) to add images that open in a lightbox, open a page or video, or link to a URL."
---

# Image/File/Lightbox

The **Image/File/Lightbox** column type (Pro) adds an image to each cell. You choose what happens when a visitor clicks it: nothing, a full-size lightbox, a page or video in a lightbox, or a link. A lightbox opens the content over a dark background, so it stands out.

This type is available only on tables that keep their own rows. It does not appear in the type list for connected tables. On the free version you can still choose it, but a note says **Image upload with lightbox and links is a Pro feature**, the click option is disabled, and a new Image column is saved as a Single line text field.

## Set a column to Image/File/Lightbox

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Image/File/Lightbox**. The image settings appear below it.
4. Click **Add column** or **Save column**.

![Column dialog with Type set to Image/File/Lightbox](/images/field-types/image-file-lightbox/1.-Column-Dialog-With-Type-Set.webp)

## When visitors click the image

Choose one option in **When visitors click the image**. The default is **Image only - nothing happens**.

### Image only - nothing happens

The image shows in the cell and clicking it does nothing.

### Image lightbox - opens the full image

Clicking the image opens the full-size image in a lightbox.

### Iframe lightbox - opens a page or video

Clicking the image opens a web page or video (such as a YouTube link) in a lightbox. For each row, you add the image and an **Iframe URL (the URL only)**.

### Link to URL - goes to a link

Clicking the image takes the visitor to a link. For each row, you add the image and a **Target URL**. Tick **Open link in a new window** to open the link in a new tab.

::: tip Columns saved with File download
Older columns saved with the **File download** option keep it, with its own **Download button text / HTML** and **Open link in a new window** options. New columns cannot choose it. To offer downloads, use a [Button/Link](/actionable-button-link) column with **Force download** instead.
:::

![Click behavior options for an Image column](/images/field-types/image-file-lightbox/2.-Click-Behavior-Options-For-An-Image.webp)

## Add the images

Open the row drawer (**Add data**, or the pencil icon on a row). In the image column's field, click **Image upload** and choose an image from the Media Library. A 100 x 100 preview appears; use **Change** or **Remove** to swap it later. The table uses the Medium image size as the thumbnail by default. For the Iframe lightbox and Link to URL options, also fill in the URL field that appears after you pick the image. Click **Add row** or **Update** to save.

Image cells are not edited inside the grid.

<!-- TODO(screenshot): image-file-lightbox-3
  screen: Tables › table › Table Rows › row drawer
  table: Product Price List
  state: Row drawer with an image chosen and the Target URL field shown
  highlight: Image upload
  view: admin
  alt: Row drawer with an image uploaded in an Image column
  blocked: no demo table has an Image/File/Lightbox column or media-library image
-->

## How it looks on your site

Visitors see the thumbnail in the cell. With **Image lightbox** or **Iframe lightbox**, the thumbnail opens the lightbox; with **Link to URL**, it opens your link. To show images from a column of plain image URLs, such as a Google Sheet, see [Image lightbox using Transform value](/image-lightbox-using-column-transform-value).

<!-- TODO(screenshot): image-file-lightbox-4
  screen: Tables › table › Preview
  table: Product Price List
  state: An Image column with an open image lightbox
  highlight: -
  view: frontend
  alt: Table with an Image column and an open lightbox
  blocked: no demo table has an Image/File/Lightbox column with images
-->
