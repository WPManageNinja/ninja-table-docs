---
title: "How to Use Data Range Picker in Ninja Charts"
description: "Choose which columns, rows and date range a Ninja Charts chart shows with the Data Range step."
---

# How to Use Data Range Picker in Ninja Charts

The **Data Range** step of the chart creator decides which parts of your data end up in the chart. It comes after you choose the chart type and the data source, and the options depend on that source.

## Charts from Ninja Tables or Fluent Forms

1. In **Columns in the data source**, click the columns you want to chart. They move to the columns used in the chart. Click one again to deselect it.
2. Use **Select All** to move every column at once, or **Deselect All** to clear them.
3. Set **Number of Items**: how many rows the chart shows. The default is 10, which means the first 10 rows in the chosen **Data order**. Enter `0` to show all items.
4. Choose **Data order**: **Ascending** (the default) or **Descending**. Ascending follows the table's own row order (its manual sort order if it has one, otherwise the date each row was added). Descending reverses it.
5. Turn on **Pick Items** to choose individual rows instead of a count.
6. Turn on **Date range picker** to show only rows from a date range, then choose the dates. For a Ninja Tables table it filters by the date each row was added to the table, not by a Date column. For Fluent Forms it filters by the date of the entry (trashed entries are left out). Pick Items and the date range read the rows stored in Ninja Tables, so use them with tables that store their own rows.
7. Click **Next**.

![Data Range step with column lists, Number of Items, Data order and Pick Items](/images/ninja-charts/data-range-picker-ninja/1.-Data-Range-Step-With-Column-Lists.webp)

Some columns can't be charted as they are. If the creator says "Please update your table column data type", change that column's type in the table or choose another column. Column types that are counted into categories (such as Select fields and radio buttons) are described in [Ninja Tables data](/create-ninja-charts-with-ninja-tables-data) and [Fluent Forms entries](/create-ninja-charts-with-fluent-forms-entries).

## Manual charts

A manual chart has no columns to pick. Add the data yourself with **Add New Column** and **Add Data**. See [Create a Chart Manually](/how-to-create-chart-manually-in-ninja-charts).

You land on **Formatting & Preview** after **Next**. See [Customize a Chart](/how-to-customize-charts-in-ninja-charts).
