---
title: "Table Title, Caption and Description"
description: "Set a table's title, caption and description when you create it or later in Table details, and choose whether visitors see them."
---

# Table Title, Caption and Description

Every table has a **title**, and can also have a **caption** and a **description**. The title identifies the table in the admin and can be shown above it on your site. The caption is a short accessible label that is always output when it has text. This page explains where to set each one and how to show or hide them.

## Set the title and description when you create a table

On the [Create a table](/table-types-overview) screen, every panel starts with a **Table name** field. For a Default table it's required. When you upload a file you can leave it empty, and the file name is used.

The Default table and Upload a file panels also have a **Description** field. Its editor lets you add bold and italic text, colors, lists, links and media.

<!-- TODO(screenshot): table-title-description-settings-1
  screen: Tables › New table › Default table
  table: -
  state: Default table panel with Table name filled and the Description editor visible
  highlight: Description field
  view: admin
  alt: Default table panel showing the Table name and Description fields
-->

## Change them later in Table details

1. Open the table from the [Tables list](/tables-list).
2. Click the pencil icon next to the table's name at the top of the editor. The **Table details** dialog opens.
3. Edit the fields:
   - **Table title**: required. It identifies your table in the admin. If you leave it empty, Ninja Tables shows **Title is required**.
   - **Table caption**: optional. A short line that Ninja Tables adds to the table as an HTML caption, which screen readers announce.
   - **Table description**: optional. Extra information about the table, with the same formatting editor.
4. Click **Update**, or **Cancel** to close the dialog without saving.

<!-- TODO(screenshot): table-title-description-settings-2
  screen: Tables › Product Price List › Table details dialog
  table: Product Price List
  state: Table details dialog open with all three fields visible
  highlight: Table caption field
  view: admin
  alt: Table details dialog with the title, caption and description fields
-->

The description also appears under the table's name in the Tables list, as one line of plain text.

### How the caption works

The caption is saved with the table and added to the table's HTML as a `<caption>` element on your site, for both the FooTable and DataTables engines. There is no switch to turn it on: it is output whenever the field has text, and not output when the field is empty. The hint in the dialog ("Shown above the table if you enable it") is misleading; to remove the caption, clear the field and click **Update**.

## Show the title and description on your site

You choose per table whether visitors see the title and description:

1. Open the table and click the **Appearance** tab.
2. Open **Title & header**.
3. Turn on **Show table title** and/or **Show table description**.
4. Click **Save**.

The same section has **Show header row**, which shows or hides the row of column names. To make the title or description show by default on new tables, turn on **Table title** or **Table description** under **Show** in **Settings** › **Global appearance**; see [Settings](/tools-and-settings).

<!-- TODO(screenshot): table-title-description-settings-3
  screen: Tables › Product Price List › Appearance › Title & header
  table: Product Price List
  state: Title & header section expanded with Show table title and Show table description on
  highlight: Show table title switch
  view: admin
  alt: Title and header options in the Appearance tab
-->

See the [Appearance overview](/table-style-settings) for the other design options.
