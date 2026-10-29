---
title: "Image/File/Lightbox"
description: "Use the Image/File/Lightbox column type (Pro) to add images that open in a lightbox, open a page or video, or link to a URL."
---

# Image/File/Lightbox

The **Image/File/Lightbox** column type (Pro) adds an image to each cell. You choose what happens when a visitor clicks it: nothing, a full-size lightbox, a page or video in a lightbox, or a link. A lightbox opens the content over a dark background, so it stands out.

This type is available on tables that keep their own rows. It doesn't appear in the type list for connected tables.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3zM3RD57UBA" title="Media-Rich Tables Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Set a column to Image/File/Lightbox

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Image/File/Lightbox**.
4. Under **When visitors click the image**, choose one of the options below.
5. Click **Add column** or **Save column**.

![Image/File/Lightbox column settings](/images/field-types/image-file-lightbox/1.-media-lightbox.webp)

Without Pro, a new Image/File/Lightbox column is saved as a Single line text field.

## When visitors click the image

### Image only - nothing happens

The image shows in the cell and clicking it does nothing.

### Image lightbox - opens the full image

Clicking the image opens the full-size image in a lightbox.

![Image lightbox](/images/field-types/image-file-lightbox/2.-Image-Lightbox.webp)

### Iframe lightbox - opens a page or video

Clicking the image opens a web page or video (such as a YouTube link) in a lightbox. For each row, you add the image and an **Iframe URL (the URL only)**.

![Iframe lightbox](/images/field-types/image-file-lightbox/3.-Image-iframe.webp)

### Link to URL - goes to a link

Clicking the image takes the visitor to a link. For each row, you add the image and a **Target URL**. Tick **Open link in a new window** to open the link in a new tab.

![Link to URL](/images/field-types/image-file-lightbox/link-to-url-4.webp)

::: tip Columns saved with File download
Older columns saved with the **File download** option keep it. It shows a download link with your own **Download button text / HTML**. New columns can't choose this option. To offer downloads, use a [Button/Link](/actionable-button-link) column with **Force download** instead.
:::

## Add the images

Open the row drawer (**Add data**, or the pencil icon on a row). In the image column's field, click **Image upload** and choose an image from the Media Library. Use **Change** or **Remove** to swap it later. For the Iframe lightbox and Link to URL options, also fill in the URL field that appears after you pick the image.

Click **Add row** or **Update** to save.

To show images from a column of plain image URLs, such as a Google Sheet, see [Image lightbox using Transform value](/image-lightbox-using-column-transform-value).
