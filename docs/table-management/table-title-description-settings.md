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

You choose per table what visitors see above and inside the table. These switches are in the **Title & Header** section of the **Styling** tab.

1. Open the table and click the **Appearance** tab.
2. In the settings panel, click the **Styling** tab, then open **Title & Header**.
3. Set the three switches, then click **Save**.

![Title & Header section with Show Table Title, Show Table Description and Show Header Row all turned on](/images/table-management/table-title-description/1.-Title-And-Header-Section.webp)

- **Show Table Title**: shows the table's title as a heading above the table. The text is the **Table title** from Table details. When the switch is off, no heading is shown and the title stays visible only in the admin. It is off for a new table.
- **Show Table Description**: shows the table's description in a block above the table, under the title if that is on. The text is the **Table description** from Table details, with its formatting, links and shortcodes. When the switch is off, the description is not shown on your site. It is off for a new table.
- **Show Header Row**: shows the row of column names at the top of the table. It is on by default. When you turn it off, the column names are hidden and the table starts straight with the data. Use that for a plain list. Without the header row, visitors can't see what each column is, so be sure the data explains itself. Header colors from [Table Colors](/table-color-settings) have nothing to paint while the header row is hidden.

Every change shows in the live preview straight away. The title and description are two separate switches, so you can show one without the other.

To make the title or description show by default on new tables, turn on **Table title** or **Table description** under **Show** in **Settings** › **Global appearance**; see [Settings](/tools-and-settings).

## Common questions

::: faq
== I turned on Show Table Title but nothing shows.
Click **Save** and reload the page that holds the table. If the heading is still missing, check that the table has a title in **Table details**.
== Where do I change the text of the title or description?
In **Table details**: click the pencil icon next to the table's name at the top of the editor. The **Appearance** tab only switches them on or off.
== Why are my column names gone?
**Show Header Row** is off. Turn it on in **Title & Header** under the **Styling** tab and save.
== Does the caption have a switch?
No. The caption is output whenever the **Table caption** field has text. See "How the caption works" above.
:::

## Related

- The other design options: [Appearance overview](/table-style-settings).
- Color the header row: [Table Colors](/table-color-settings).
- Font and size of the text: [Table Fonts](/table-font-settings).
