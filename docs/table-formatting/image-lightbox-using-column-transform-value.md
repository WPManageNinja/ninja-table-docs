---
title: "Image Lightbox Using Column Transform Value"
description: "Turn a column of image URLs, for example from Google Sheets, into images that open in a lightbox, using Transform value (Pro)."
---

# Image Lightbox Using Column Transform Value

If your table has a column of image URLs, for example from a connected Google Sheet, the cells show the links as plain text. With [Transform value](/transform-value) (Pro) you can show each URL as an image and open it in a lightbox when clicked.

For tables that keep their own rows, the [Image/File/Lightbox](/image-file-lightbox) column type does this without any code.

## Example table

This example uses a Google Sheet about car models with two columns: **Name** and **Image**. The Image column holds image URLs. When you [connect the Google Sheet](/google-sheets-integration), the columns come in automatically, but the image links show as text.

<!-- TODO(screenshot): image-lightbox-using-column-transform-value-1
  blocked: no Google Sheets demo table with an image URL column
  screen: Tables › a Google Sheets table › Table Rows
  table: a Google Sheets table with an Image column of image URLs
  state: Grid showing the Image column as plain URL text
  highlight: Image column
  view: admin
  alt: Image column showing URLs as text
-->

## Show the URLs as images

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**.
2. Click the gear icon on the **Image** column, choose **Column settings**, and open the **Transform** tab.
3. In the Transform value box, enter an image tag with the column's reference shortcode as the source. For a column with the key `image`:

```html
<img src="{{row.image}}">
```

4. Click **Save column**. Every image URL in the column now shows as an image.

Each column's reference shortcode is in the **Reference values** list under the Transform value box. Click a row in the list to insert it.

## Open the images in a lightbox

1. In the same Transform value box, wrap the image in a link with the `nt_lightbox` class:

```html
<a href="{{row.image}}" class="nt_lightbox"><img src="{{row.image}}"></a>
```

2. Click **Save column**.
3. Open the **Custom CSS/JS** tab. Under **Table targeting**, type `nt_has_lightbox` in **Custom CSS class**, then click **Save Custom CSS**. This class tells the table to load the lightbox.

![Custom CSS class field set to nt_has_lightbox](/images/table-formatting/image-lightbox-column/2.-Custom-CSS-Class-Field-Set.webp)

Preview the table. The images now open in a lightbox when clicked.

<!-- TODO(screenshot): image-lightbox-using-column-transform-value-3
  blocked: no Google Sheets demo table or demo page; needs saved transform and class
  screen: Preview of a Google Sheets table
  table: a Google Sheets table with an Image column of image URLs
  state: An image opened in the lightbox over the table
  highlight: -
  view: frontend
  alt: Image from the table open in a lightbox
-->

::: tip Use FooTable for this method
The `nt_has_lightbox` class loads the lightbox on **FooTable** tables. On **DataTables** tables the class doesn't load the lightbox by itself, so the images show but may not open in a lightbox. See [FooTable or DataTables](/choose-table-engine).
:::
