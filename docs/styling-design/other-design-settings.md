---
title: "Sticky Header & First Column"
description: "Keep a table's header row and first column in view while visitors scroll through long or wide tables, from the Features tab in Appearance (Pro)."
---

# Sticky Header & First Column

**Sticky Header & Column** (Pro) keeps the header row at the top of the table while visitors scroll down a long table, and keeps the first column in place while they scroll sideways through a wide one. Visitors never lose track of what a column or a row is.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Sticky Header & Column**. The section has a Pro badge, and the switches inside it open the upgrade popup on the free version.

![Sticky Header & Column section with Sticky Header on and the Top Offset, Turn Off On Mobile and Sticky First Column options](/images/styling-design/other-design-settings/2.-Sticky-Header-Column-Options.webp)

Every change shows in the live preview. Click **Save** at the top of the editor to keep it.

## Sticky Header

**Sticky Header** is off by default. Turn it on and the table sits in its own scroll box, up to 70% of the screen height. The header row stays pinned to the top of that box while the rows scroll under it. The search bar and pagination stay outside the box, so they don't scroll away.

- The header gets a solid background, so rows never show through it. If you chose a color scheme in [Table Colors](/table-color-settings), the header keeps that color.
- The scroll box can be reached with the keyboard. Visitors tab to it, then scroll with the arrow keys.
- A table with only a few rows doesn't scroll, so there is nothing to pin.
- It works with both table engines, and keeps working after the visitor sorts, searches or changes page.

When you turn on **Sticky Header**, two more options appear.

### Top Offset

The field says "Positive Or Negative Number". Its hint reads: "A positive or negative number, or a jQuery element. Use this if your theme has a fixed header."

It is meant for themes whose own menu stays fixed at the top of the screen. You would enter the menu's height, such as `80`, or a selector such as `#masthead`, so the table header doesn't hide behind the menu. Leave it empty, or `0`, for no offset.

::: tip
In the current plugin version the header is pinned inside the table's own scroll box, not against the browser window. That is why it never slides under a fixed theme menu, and why the offset is saved but has no visible effect on the table.
:::

### Turn Off On Mobile

Off by default. Turn it on to switch the sticky header off on screens 767 px wide or narrower. On phones the table then flows normally with the page instead of scrolling in a small box. This is handy when a scroll box inside a scrolling page feels awkward on a small screen.

## Sticky First Column

**Sticky First Column** is off by default and works on its own, without **Sticky Header**. While a visitor scrolls a wide table sideways, the first column stays in place, so the row label stays visible next to the data.

- Once the table has scrolled sideways, the pinned cells get an opaque background so the passing columns don't show through. With a color scheme, it uses the scheme's row color.
- Put the most useful column first, such as a name or product, and use [Column Settings](/basic-settings) to reorder.
- On the DataTables engine, a row-expand toggle or edit button that sits before the first column is pinned too, ahead of the first data column.

## Use both together

Turn on **Sticky Header** and **Sticky First Column** for a big grid, such as a price list with many columns and hundreds of rows. The header stays at the top, the first column stays at the left, and the top-left cell stays in front of both.

## Common questions

::: faq
== The header isn't sticking.
Check that **Sticky Header** is on, that you clicked **Save**, and that the table is long enough to scroll. Sticky needs Pro, and it can be off for phones if **Turn Off On Mobile** is on.
== Why does my table now scroll inside a box?
That is how the sticky header works. The table scrolls inside a box (70% of the screen height), and the header is pinned to the top of that box. Turn **Sticky Header** off to let the table grow to its full height.
== Top Offset does nothing.
In the current version the header is pinned inside the table's own box, so the offset isn't needed for a fixed theme menu and has no visible effect. See the tip above.
== The first column isn't staying put.
The table must be wider than its container so it can scroll sideways. If every column fits, there is nothing to pin. Check also [Responsive & Stackable Table](/stackable-table): a stacked table has no sideways scroll.
:::

## Related

- Show fewer rows at once: [Pagination](/pagination).
- Make a table work on phones: [Responsive & Stackable Table](/stackable-table).
- Choose the header color: [Table Colors](/table-color-settings).
- Other Features settings: [Search Box](/add-or-remove-search-or-filter-functionality) and [Sorting](/sorting).
