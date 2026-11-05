---
title: "Drag & Drop Builder Tour"
description: "A guide to the Drag & Drop builder screen: the header, the canvas toolbar, the table canvas and the Elements, Settings and Responsive panel."
---

# Drag & Drop Builder Tour

The **Drag & Drop builder** is where you design a Drag & Drop table. This page walks through each part of the screen so you know where everything is.

Open it by [creating a Drag & Drop table](/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables), or by clicking **Edit** on a Drag & Drop table in the **Tables** list (use the **Drag & Drop** tab there to find them). If a table can't be opened, for example because it was deleted, you see "That table could not be loaded. It may have been deleted." and return to the list.

![The Drag & Drop builder with the header, canvas toolbar, table canvas and right panel](/images/drag-drop-tables/drag-drop-builder-tour/1.-Drag-Drop-Builder-With-The-Header.webp)

## The header

From left to right:

- **Back arrow**: return to all tables.
- **Table name** with a **pencil icon**: opens the **Rename Table** box. The name is only shown in the admin, and is saved with the next **Save**.
- **#ID** and the **shortcode chip**, for example `[ninja_table_builder id="123"]`. Click the chip to copy it.
- **Full Screen**: collapse the WordPress admin menu to give the builder more room, and bring it back with **Leave Full Screen**.
- **Preview**: open the saved table on its own page in a new tab. Unsaved changes are not shown.
- **⋯ More Actions**: under **Export Table**, **Export As CSV** and **Export As JSON**. Both export the last saved version of the table, so click **Save** first.
- **Save**: save your changes. The table on your site only updates when you save.

### Export as CSV or JSON

- **Export As CSV** downloads the text of each cell. It has no colors, settings or layout; if a cell holds several elements, their text is joined.
- **Export As JSON** downloads the full design: elements, settings, responsive layout and the saved table. You can import it again on this or another site from the Drag & Drop drawer, and the whole design comes back. See [Create a Drag & Drop Table](/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables).

### What Save does

**Save** writes the table, its settings and the HTML that visitors see. The preview stays on the **Tablet** or **Mobile** view you were in. If your WordPress user can't post unfiltered HTML, Ninja Tables cleans the saved HTML: tags and attributes outside a safe list, which can include custom **HTML** and **Shortcode** elements and some inline styles, may be removed. Script tags are removed for everyone.

If you move to another Ninja Tables screen after making edits, you are asked to confirm that "Changes that you made may not be saved". Saving clears the warning. Closing or reloading the browser tab is not guarded. There is no undo or redo in the builder.

## The canvas toolbar

- **Selection**: shows what is selected, such as "Click A Cell To Edit It", "Cell C1", "Column B", "Row 3", "2 Cells Selected" or "Previewing On Mobile".
- **Merge** and **Split**: **Merge** starts merge mode, where you click the cells to join, or merges cells you already selected. **Split** separates a merged cell. They work in **Desktop** view only. See [Rows & Columns](/guide/drag-drop-settings/drag-drop-rows-columns).
- **Zoom**: 50%, 75%, 100% (default), 125% or 150%.
- **Preview Width**: **Desktop**, **Tablet** or **Mobile**. In tablet and mobile view you can only look at the responsive result; editing is done in desktop view.

### Preview Width

When **Tablet** or **Mobile** is active and the responsive layout is on for that device, a **Preview Width** row above the table lets you drag the slider or type a width in px to test how the table behaves: mobile from 300 to 699 px (it starts at 400 px) and tablet from 700 to 1023 px.

The slider is a test tool. On your live site the layout switches at fixed widths: mobile at 700 px or narrower, tablet from 701 to 1023 px, and desktop at 1024 px or wider. See [Mobile & Tablet Layout](/guide/drag-drop-settings/responsive-table-design).

![Canvas toolbar with the Desktop, Tablet and Mobile preview buttons, Mobile selected](/images/drag-drop-tables/drag-drop-builder-tour/2.-Canvas-Toolbar-With-The-Desktop-Tablet.webp)

## The canvas

The table is shown on a sheet, with column letters (**A**, **B**, **C**…) above it and row numbers (**1**, **2**, **3**…) beside it.

- **Click a cell** to select it. The toolbar then reads "Cell C1". **Shift-click** another cell to select more than one, or use **Merge** and click the cells. Click outside the table to clear the selection.
- **Click an element** inside a cell to select the element. A small chip appears above it with a grip to **drag** it to another cell, plus **Duplicate** and **Delete** buttons. **Double-click** a text element to type in it (the toolbar reads "Typing. Esc To Finish"). With an element selected, press <kbd>Esc</kbd> to go back to its cell, <kbd>Delete</kbd> to remove it, or <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>D</kbd> to duplicate it.
- A cell can hold several elements, stacked from top to bottom.
- **Text** can be edited right in the cell. The small toolbar has bold, italic, underline, strikethrough, link and unlink. Button labels have bold, italic, underline and strikethrough only.
- Click a **column letter** or **row number** to select the whole column or row. The **chevron** beside it opens its menu, and you can drag the letter or number to move the whole column or row.
- Below the table, **Add Row** and **Add Column** add rows and columns. See [Rows & Columns](/guide/drag-drop-settings/drag-drop-rows-columns).

Names differ slightly by place: the Elements tab says **Text Icon**, the chip in a cell says "Text With Icon", and the settings panel says "Text Icon"; **HTML** shows as "Custom HTML" in its settings, **Rating** as "Star Rating" and **Styled List** as "Stylist List".

## The right panel

The panel has three tabs: **Elements**, **Settings** and **Responsive**.

### Elements tab

At the top, a hint reads "Select A Cell First, Or Drag An Element Onto Any Cell". Below it are all the elements you can place in a cell, in two groups:

- **General**: Text, Button, Icon (Pro), Rating, List, HTML, Shortcode, Image (Pro)
- **Advanced**: Styled List (Pro), Ribbon (Pro), Progress, Text Icon (Pro)

**Click** an element to add it to the selected cell, or **drag** it onto any cell. If no single cell is selected, a clicked element goes to the last cell (bottom right). Pro elements show a **PRO** badge; on the free version, clicking one shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

![Elements tab with the General and Advanced element groups](/images/drag-drop-tables/drag-drop-builder-tour/3.-Elements-Tab-With-The-General.webp)

### Settings tab

What it shows depends on what you selected. A breadcrumb (**Table › Cell › Element**) lets you move up a level.

- **Nothing selected**: the table settings. See [Drag & Drop Table Settings](/guide/drag-drop-settings/ninja-tables-drag-and-drop-table-settings).
- **A cell, several cells, a column or a row**: colors, plus column highlight and width for a column, or row height for a row. See [Cell Settings](/guide/drag-drop-settings/drag-drop-cell-settings).
- **An element**: that element's options under **Content & Style**, such as its text, colors and size, plus [spacing](/guide/drag-drop-settings/spacing).

![Settings tab with the Table, Cell and Element breadcrumb above the element options](/images/drag-drop-tables/drag-drop-builder-tour/4.-Settings-Tab-With-The-Table-Cell.webp)

### Responsive tab

Turn on **Enable Responsive Table** to show a **Desktop** / **Tablet** / **Mobile** switch (the same one as in the canvas toolbar) and the layout and spacing options of the device you pick, which control how the table looks on tablets and phones. When it is off, the tab only shows a hint: "Enable Responsive Table To Show Mode Options And Responsive Settings. Existing Settings Are Retained." See [Mobile & Tablet Layout](/guide/drag-drop-settings/responsive-table-design).

![Responsive tab with Enable Responsive Table on and the device switch with its options](/images/drag-drop-tables/drag-drop-builder-tour/5.-Responsive-Tab-With-Enable-Responsive-Table.webp)

## On your site

Embed the table with its shortcode or the Ninja Tables block. Logged-in admins also see an **Edit Table** link under each table that jumps back to the builder. See [Add a Table to Your Site](/guide/wordpress-integration/embed-tables).

::: faq
== Why can't I edit in Tablet or Mobile preview?
Those previews are for checking the responsive result only. Switch **Preview Width** back to **Desktop** to edit.
== Where did the Search elements box and the Show panel button go?
The builder has neither. The right panel is always visible, and the Elements tab lists every element in two short groups.
== Why is a Pro element not added when I click it?
You are on the free version. Pro elements carry a **PRO** badge and need Ninja Tables Pro.
:::
