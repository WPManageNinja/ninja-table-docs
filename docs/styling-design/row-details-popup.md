---
title: "Row Details Popup"
description: "Let visitors click a row to see all of its details in a pop-up, from the Features tab in Appearance."
---

# Row Details Popup

**Row Details Popup** opens a pop-up with all the details of a row when a visitor clicks it. It is useful for wide tables, where a visitor would otherwise scroll sideways to read one row, and for tables with long text or many columns.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Row Details**.
4. Turn on **Row Details Popup**. Its hint reads: "Clicking a row on the site opens its details in a pop-up."

![Row Details section with the Row Details Popup switch on](/images/styling-design/row-details-popup/2.-Row-Details-Popup-On.webp)

The switch is off by default. This is the only option in the section, and it works on the free version. Click **Save** at the top of the editor to keep it.

## What the visitor sees

When the switch is on, the rows of the table can be clicked.

- **A pop-up opens** over a dark backdrop, titled **Row Details**. It lists the row as label and value pairs, one per column, using the column titles as labels.
- **Empty cells are skipped.** A column with no value in that row doesn't appear.
- **Hidden columns are skipped.** Columns you hid on all devices stay out of the pop-up, as do the edit and compare columns.
- **Formatting is kept.** Links, images, buttons, colors and lightbox images look as they do in the table.
- **Close it** with the **×** button, by clicking the dark area outside, or with <kbd>Esc</kbd>.

Clicking a link, button, form field or the row's expand toggle does what that item normally does and does not open the pop-up.

## Keyboard and screen readers

Rows can be reached with <kbd>Tab</kbd> and opened with <kbd>Enter</kbd> or <kbd>Space</kbd>. Screen readers hear the hint "Press Enter to view the details of this row in a dialog." While the pop-up is open, focus stays inside it. When it closes, focus returns to the row.

## Works with both table engines

The pop-up works the same on the FooTable and DataTables engines, including rows loaded by AJAX and rows that redraw after sorting, searching or paging.

## Common questions

::: faq
== Clicking a row does nothing.
Check that **Row Details Popup** is on and you clicked **Save**. Click on plain cell text. A click on a link or button runs that link or button instead.
== A column is missing from the pop-up.
Columns that are hidden on all devices, and columns with an empty value in that row, are left out.
== What is the difference from the expand toggle on mobile?
The expand toggle of a [Responsive & Stackable Table](/stackable-table) shows the hidden columns inside the table. The pop-up shows the whole row in a window on any screen size.
== Can I change the pop-up's title or colors?
The title is **Row Details**. The pop-up takes the table's own cell styling. For more control, use [Custom CSS & JS](/table-styling-css-selector).
:::

## Related

- Hide columns on small screens: [Column Responsive Breakpoints](/column-responsive-breakpoints).
- Stack columns on phones: [Responsive & Stackable Table](/stackable-table).
- Add an extra CSS class or your own CSS: [Custom CSS & JS](/table-styling-css-selector).
