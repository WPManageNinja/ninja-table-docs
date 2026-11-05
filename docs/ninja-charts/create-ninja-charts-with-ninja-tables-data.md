---
title: "How to Create Ninja Charts with Ninja Tables Data"
description: "Turn the data in a Ninja Tables table into a bar, line, pie or other chart with the free Ninja Charts plugin."
---

# How to Create Ninja Charts with Ninja Tables Data

A chart built from a Ninja Tables table is a **dynamic chart**: it reads the table when the chart loads, so edits to the table show up in the chart. You only need Ninja Tables and [Ninja Charts](/guide/ninja-charts/how-to-install-ninja-charts).

## Create the chart

1. Go to **Ninja Tables** › **Charts**, then click **Add New**.
2. Enter a **Chart Name**, choose the **Chart Renderer** (**Chart Js** or **Google Charts**), then pick a chart type. Click **Next**.
3. On the **Data Source** step, choose **Ninja Tables**.
4. In the **Data** field that appears, pick the table.
5. Click **Next** and choose what to plot in [Data Range](/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts).

![Data Source step with Ninja Tables selected and a table chosen](/images/ninja-charts/create-ninja-charts-ninja/1.-Data-Source-Step-With-Ninja-Tables.webp)

If you click **Next** on step 1 without a chart type, the creator shows "Chart type is required". Pick a type first.

## Choose a table and chart type that fit

Ninja Charts plots numbers, so match the table to the chart. Only columns of the type Single line text, Number, Date or Select (dropdown) are offered in the Data Range step; other column types, such as HTML or Button, are not listed. [Drag & Drop](/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables) tables don't appear in the **Data** list.

- Columns with numbers (prices, counts, totals) work in every chart type.
- A [Select field](/guide/field-types/select-field) column (the dropdown column type) is counted into categories instead of plotted as raw values, so a pie chart shows how many rows picked each option.
- Text columns with mostly unique values don't suit pie, doughnut or radar charts. If the data can't be charted, the Data Range step asks you to update the table's column data type.

::: tip
Tables connected to a Google Sheet are read from the sheet's CSV, up to 2,000 rows.
:::

## Finish the chart

Style it in [Formatting & Preview](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts), then save it and copy the shortcode. See [Add a Chart to a Page](/guide/ninja-charts/embed-ninja-charts).
