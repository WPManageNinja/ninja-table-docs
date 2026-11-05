---
title: "Sorting"
description: "Let visitors sort a table by clicking a column heading, and choose the order rows appear in when the page loads: by created date, by a column, or by a manual order."
---

# Sorting

**Sorting** controls two separate things: whether visitors can sort the table by clicking a column heading, and the order the rows appear in when the page first loads.

- The **switch** in the **Sorting** heading turns visitor sorting on or off.
- **Default Order** sets the starting order, before a visitor clicks anything.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Table Design** tab.
3. In the settings panel, click the **Features** tab, then open **Sorting**.

![Sorting section with Default Order set to Created Date and the Order choices](/images/styling-design/sorting/1.-Sorting-Section-With-Default-Order-Column.webp)

Every change shows in the live preview straight away. Click **Save** at the top of the editor to keep it.

## Let visitors sort

The switch in the **Sorting** heading is on by default. While it is on, visitors can click a column heading on your site to sort the table by that column, and click again to flip the direction.

Turn the switch off and no column heading sorts. The rows stay in your default order.

To stop only one column from being sortable, turn off **Sortable** in that column's **Advanced** settings (Pro). See [Advanced Column Options](/guide/column-settings/advanced-settings).

## Default Order

**Default Order** is the order everyone sees when the page loads. A visitor who clicks a heading changes the order for themselves only. Reloading the page brings back your default order.

Pick one of three choices.

### Created Date

Rows are ordered by when they were added. This is the default for new tables. Under **Order**, choose:

- **Oldest First** (default): the first row you added is at the top.
- **Newest First**: the last row you added is at the top.

Some data sources have no created date for their rows, such as WP Posts or Google Sheets. For those tables, **Created Date** is greyed out and the rows keep the order of their source.

### By Column

Sort the rows by one column's values. Two controls appear:

![Sorting section with By Column selected, showing the Column list and the Direction choices](/images/styling-design/sorting/2.-Sorting-By-Column-Options.webp)

- **Column**: the column to sort by. The list shows every column in the table. When you choose **By Column**, the first column is picked for you.
- **Direction**: **A → Z** (ascending, the default) or **Z → A** (descending). For numbers and dates this means smallest to largest, or oldest to newest, and the reverse.

On your site, the table loads sorted by that column. Visitors can still click any heading to sort differently.

### Manual (Pro)

Use the order you set by dragging rows. This is the choice for a ranking or a hand-picked order that no column can describe.

![Sorting section with Manual selected and the hint to open Table Rows](/images/styling-design/sorting/3.-Sorting-Manual-Order.webp)

1. Click **Manual**. A hint says "Drag rows into order in Table Rows → Sort manually."
2. Click **Open Table Rows** in the hint.
3. Drag the rows into the order you want. See [Sort Rows Manually](/guide/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort).

On the free version, clicking **Manual** opens the upgrade popup and nothing changes. On Pro, **Manual** is greyed out if the table's data source cannot be ordered by hand. If your Pro plugin is out of date, an upgrade notice shows instead.

::: tip
Visitor sorting and default order work together. With sorting on, a visitor starts from your default order and can re-sort. With sorting off, the table always stays in your default order.
:::

## Common questions

::: faq
== Visitors can't click the column headings to sort.
Check that the switch in the **Sorting** heading is on, and that you clicked **Save**. A column with **Sortable** turned off (Pro) will not sort either. See [Advanced Column Options](/guide/column-settings/advanced-settings).
== I picked a default order but visitors see a different one.
A visitor who clicks a heading overrides the default for their own view. Reload the page to see your default order again. Also check that you clicked **Save**.
== Why is Created Date greyed out?
Some data sources, such as WP Posts or Google Sheets, do not store a created date for each row. Use **By Column** for those tables.
== Why is Manual greyed out or locked?
**Manual** is a Pro feature, so on the free version it opens the upgrade popup. On Pro it is greyed out when the table's data source does not support dragging rows into order.
== Can I sort by two columns at once?
No. **By Column** sorts by one column. Visitors sort by one column at a time as well.
:::

## Related

- Drag rows into your own order: [Sort Rows Manually](/guide/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort).
- Stop one column from sorting, or tune a column: [Advanced Column Options](/guide/column-settings/advanced-settings).
- Let visitors search the table: [Search Box](/guide/styling-design/add-or-remove-search-or-filter-functionality).
- Split long tables into pages: [Pagination](/guide/styling-design/pagination).
