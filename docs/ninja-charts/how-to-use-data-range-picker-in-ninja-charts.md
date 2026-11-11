---
title: "Choose Your Chart Data"
description: "Pick the columns and rows a chart uses, check them with View data, and know where manual data lives, in the Data panel of the chart builder."
---

# Choose Your Chart Data

The **Data** panel of the chart builder decides which parts of your data end up in the chart. What it shows depends on the data source you chose on the create screen.

## Charts from Ninja Tables or Fluent Forms

The panel starts with the **Data source** card. **Change source** opens the **Change data source** window. Pick **Ninja Tables** or **Fluent Forms** and then the table or form from the list (the placeholder says **Select one**). The window says "Your design settings are kept. The columns are chosen again." **Use this source** applies it, and **Cancel** closes the window. **Use this source** stays off until you have picked a source. Below it, **Selected table** or **Selected form** names the source, and **Edit table** or **Edit form** opens it in a new tab. The data is read-only here, so change it in the source.

![Data source card with the selected table and Edit table link](/images/ninja-charts/data-range-picker-ninja/1.-Data-Source-Card-With-The-Selected.webp)

### Pick the columns

**What should the chart show?** is where you pick the fields. For most chart types there are two goals:

- **Count rows by choice** (tables) or **Count answers** (forms): how many rows or people chose each option. A table needs a column with the Select data type. A form needs a choice field.
- **Show numbers**: a number from each row or entry, named by a text or date column or field. Pie-like charts take one number, scatter and bubble charts take X, Y (and size) numbers, and combo charts need two or more.

The **Columns for this chart** (or **Fields for this chart**) list says how many you need and how many your source has, with "ready" or "add N" beside each. If your source can't fill the chart, a message tells you what to add, for example "To count answers, add a choice field to the form." Scatter, bubble, combo and histogram charts can't count, so they only offer **Show numbers**.

Choose each column or field from its list. A short sample of the values under the list helps you check that you picked the right one. Fields that don't fit a slot are explained, for example "Stored as text. To measure it, set the column type to Number in Ninja Tables."

### Limit the rows

Under **Rows in chart**, choose which source rows the chart uses:

- **All rows**: every source row.
- **Limit rows**: set **Number of rows**, and only that many are included.
- **Choose rows**: click **Choose rows** (or **Change selected rows**) and select individual rows. With none selected, "No rows selected. All rows appear until you choose some."
- **Date range**: pick a **Start date** and **End date**. Only rows added between those dates are included.

#### Choose rows

**Choose rows** opens the **Pick rows** window: "Choose the rows to show in this chart." It lists the source's rows with the source's columns. Tick the rows you want. The checkbox in the header row ticks every loaded row. The button at the bottom reads **Use N rows** and stays off until you tick at least one. **Cancel** closes the window without changing anything. Rows you picked before are ticked when you reopen it, and the Data panel then says "N rows selected".

#### Date range shortcuts

Open the date picker and use the list on its left to fill both dates at once:

- **Last week**, **Last month**, **Last 3 months** and **Last year**: the last 7, 30, 90 or 365 days up to today.
- **This month**: from the 1st of this month until today.
- **This year**: from 1 January until today.

For a Ninja Tables table, **Row order** (**Ascending** or **Descending**) sets which rows come first. A Fluent Forms chart has no row order.

![Rows in chart options with Limit rows and Row order](/images/ninja-charts/data-range-picker-ninja/2.-Rows-In-Chart-Options-With-Limit.webp)

### Check the data

When the chart has data, a line such as "12 items in the chart" appears with a **View data** button. It opens **Data in the chart**, a read-only table of "the data as the chart receives it, after the row filter". Use it to check that a row limit, a row choice or a date range gave you the rows you expect. If the chart has no data, the preview shows **No data yet**, and "This source has no rows to chart yet." when the source itself is empty.

## Manual charts

A manual chart has no source to pick from. The Data panel shows a summary and a data sheet instead, opened with **Edit data** and closed with **Show chart**. See [Create a Chart Manually](/guide/ninja-charts/how-to-create-chart-manually-in-ninja-charts).

Next, style the chart in [Customize a Chart](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts).
