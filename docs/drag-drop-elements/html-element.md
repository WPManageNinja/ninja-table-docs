---
title: "HTML Element"
description: "Add your own HTML to a Drag & Drop table cell for content no other element covers."
---

# HTML Element

The **HTML** element lets you write your own HTML in a Drag & Drop table cell, for content no other element covers, such as an embedded video, a custom badge or a small form. It is free. In the Settings tab it is titled **Custom HTML**.

To add one, click a cell and click **HTML** in the **Elements** tab. If no single cell is selected, it goes into the last (bottom-right) cell. It starts with a centered "custom html" placeholder. Click it and type your HTML in the **HTML** box in the **Settings** tab (the box hint reads "Type HTML for this cell"), or edit it on the canvas.

![Custom HTML settings with the HTML box](/images/drag-drop-elements/html-element/1.-Custom-HTML-Settings-With-The-HTML.webp)

The element only has the **HTML** box and [spacing](/spacing). HTML is rendered in the table cell. Style the content with inline styles or classes in your HTML, or with the table's **Custom CSS** in the [table settings](/ninja-tables-drag-and-drop-table-settings). `<script>` tags are always removed when you click **Save**. If your WordPress user does not have the unfiltered HTML permission, the rest is filtered like normal post content too (for example, a form loses its `action`), so check the result in **Preview**.

Click **Save** to keep your changes.

::: tip
To show the output of a shortcode, use the [Shortcode element](/shortcode-element) instead.
:::
