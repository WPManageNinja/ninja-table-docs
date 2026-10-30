---
title: "Drag & Drop Builder Tour"
description: "A guide to the Drag & Drop builder screen: the header, the canvas toolbar, the table canvas and the Elements and Settings panel."
---

# Drag & Drop Builder Tour

The **Drag & Drop builder** is where you design a Drag & Drop table. This page walks through each part of the screen so you know where everything is.

Open it by [creating a Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables), or by clicking **Edit** on a Drag & Drop table in the **Tables** list (use the **Drag & Drop** tab there to find them). If a table can't be opened, for example because it was deleted, you see "That table could not be loaded. It may have been deleted." and return to the list.

<!-- TODO(screenshot): drag-drop-builder-tour-1
  screen: Drag & Drop builder, whole screen
  table: a Drag & Drop pricing table
  state: Nothing selected, Elements tab open
  highlight: -
  view: admin
  alt: The Drag & Drop builder with the header, canvas toolbar, table canvas and right panel
-->

## The header

From left to right:

- **Back arrow**: return to all tables.
- **Table name** with a **pencil icon**: opens the **Rename table** box. The name is only shown in the admin, and is saved with the next **Save**.
- **#ID** and the **shortcode chip**, for example `[ninja_table_builder id="123"]`. Click the chip to copy it.
- **Full screen**: hide the WordPress menus while you work, and bring them back with **Leave full screen**.
- **Preview**: open the saved table on its own page in a new tab. Unsaved changes are not shown.
- **⋯ More actions**: **Export as CSV** and **Export as JSON**.
- **Save**: save your changes. The table on your site only updates when you save.

### Export as CSV or JSON

- **Export as CSV** downloads the text of each cell. It has no colors, settings or layout; if a cell holds several elements, their text is joined.
- **Export as JSON** downloads the full design: elements, settings, responsive layout and the saved table. You can import it again on this or another site from the Drag & Drop drawer, and the whole design comes back. See [Create a Drag & Drop Table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables).

### What Save does

**Save** writes the table, its settings and the HTML that visitors see. It also returns the preview width to **Desktop**. If your WordPress user can't post unfiltered HTML, Ninja Tables cleans the saved HTML: tags and attributes outside a safe list, which can include custom **HTML** and **Shortcode** elements and some inline styles, may be removed. Script tags are escaped for everyone.

If you try to leave the builder after making edits, the browser asks you to confirm that "Changes that you made may not be saved". Saving clears the warning. There is no undo or redo in the builder.

## The canvas toolbar

- **Selection**: shows what is selected, such as "Click a cell to edit it", "Cell C1", "2 cells selected" or "Previewing on mobile".
- **Merge** and **Split**: merge selected cells, or split a merged cell. They work in **Desktop** view only. See [Rows & Columns](/drag-drop-rows-columns).
- **Zoom**: 50%, 75%, 100% (default), 125% or 150%.
- **Preview width**: **Desktop**, **Tablet** or **Mobile**. In tablet and mobile view you can only look at the responsive result; editing is done in desktop view.

### Preview width

When **Tablet** or **Mobile** is active and the responsive layout is on for that device, a slider above the table lets you drag the preview width to test how the table behaves: mobile from 300 to 699 px (it starts at 400 px) and tablet from 700 to 1023 px.

The slider is a test tool. On your live site the layout switches at fixed widths: mobile at 700 px or narrower, tablet from 701 to 1023 px, and desktop at 1024 px or wider. See [Mobile & Tablet Layout](/responsive-table-design).

<!-- TODO(screenshot): drag-drop-builder-tour-2
  screen: Drag & Drop builder, canvas toolbar
  table: a Drag & Drop pricing table
  state: Mobile preview selected with the width slider showing
  highlight: Preview width buttons
  view: admin
  alt: Canvas toolbar with the Desktop, Tablet and Mobile buttons and the width slider
-->

## The canvas

The table is shown on a sheet, with column letters (**A**, **B**, **C**…) above it and row numbers (**1**, **2**, **3**…) beside it.

- **Click a cell** to select it. **Shift-click** another cell to select more than one. Click outside the table to clear the selection.
- **Click an element** inside a cell to select the element. A small chip appears with a grip to **drag** it to another cell, plus **Duplicate** and **Delete** buttons.
- A cell can hold several elements, stacked from top to bottom.
- **Text** can be edited right in the cell. The small toolbar has bold, italic, a highlight (background) color, underline, strikethrough, link and unlink. Button labels have bold, italic, underline and strikethrough only.
- Click a **column letter** or **row number** for its menu, or drag it to move the whole column or row.
- Below the table, **+ Add row** and **+ Add column** add rows and columns.

Names differ slightly by place: the Elements tab says **Text Icon**, the chip in a cell says "Text with icon", and the settings panel says "Text icon"; **HTML** shows as "Custom HTML" in its settings and **Rating** as "Star rating".

## The right panel

Hide it with the arrow to give the canvas more room, and bring it back with **Show panel**, the button in the canvas corner.

### Elements tab

All the elements you can place in a cell, in two groups:

- **General**: Text, Button, Icon (Pro), Rating, List, HTML, Shortcode, Image (Pro)
- **Advanced**: Styled List (Pro), Ribbon (Pro), Progress, Text Icon (Pro)

Use **Search elements** to find one. **Click** an element to add it to the selected cell, or **drag** it onto any cell. If no single cell is selected, a clicked element goes to the last cell (bottom right). Pro elements show a **PRO** badge; on the free version, clicking one shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

<!-- TODO(screenshot): drag-drop-builder-tour-3
  screen: Drag & Drop builder › Elements tab
  table: a Drag & Drop pricing table
  state: Elements tab open, Search elements empty
  highlight: Search elements field
  view: admin
  alt: Elements tab with the General and Advanced element groups
-->

### Settings tab

What it shows depends on what you selected. A breadcrumb (**Table › Cell › Element**) lets you move up a level.

- **Nothing selected**: the table settings. See [Drag & Drop Table Settings](/ninja-tables-drag-and-drop-table-settings).
- **A cell**: colors, column highlight, row height and column width. See [Cell Settings](/drag-drop-cell-settings).
- **An element**: that element's options under **Content & style**, such as its text, colors and size, plus [spacing](/spacing).

<!-- TODO(screenshot): drag-drop-builder-tour-4
  screen: Drag & Drop builder › Settings tab
  table: a Drag & Drop pricing table
  state: One element selected, breadcrumb Table › Cell › Element visible
  highlight: breadcrumb
  view: admin
  alt: Settings tab with the Table, Cell and Element breadcrumb above the element options
-->

## On your site

Embed the table with its shortcode or the Ninja Tables block. Logged-in admins also see an **Edit Table** link under each table that jumps back to the builder. See [Add a Table to Your Site](/embed-tables).
