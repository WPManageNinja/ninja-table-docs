---
title: "How to Create Chart Manually in Ninja Charts"
description: "Build a chart in Ninja Charts by typing the data in yourself, without a table or form."
---

# How to Create Chart Manually in Ninja Charts

A **manual chart** uses data you type into the chart creator, so it needs no table or form. It's the right choice for a one-off figure, such as survey results from a report. The chart doesn't change unless you edit it. To chart data that changes, use [Ninja Tables](/create-ninja-charts-with-ninja-tables-data) or [Fluent Forms](/create-ninja-charts-with-fluent-forms-entries) instead.

## Start the chart

1. Go to **Ninja Tables** › **Add Chart** (or **Ninja Tables** › **Charts** › **Add New**).
2. Enter a **Chart Name** and choose the **Chart Renderer**: **Chart Js** or **Google Charts**.
3. Pick a chart type and click **Next**. The type list depends on the renderer (see [Getting Started](/getting-started-with-ninja-charts-free-wordpress-chart-plugin)).
4. On the **Data Source** step, choose **Manual Input** and click **Next**.

<!-- TODO(screenshot): how-to-create-chart-manually-in-ninja-charts-1
  screen: Ninja Tables › Add Chart › Data Source
  table: -
  state: Manual Input selected as the data source
  highlight: Manual Input option
  view: admin
  alt: Data Source step with Manual Input selected
-->

## Add the data

The **Data Range** step starts empty and says "Please input some data."

1. Click **Add New Column** to add a data column to the chart.
2. Click **Add Data** to add a row.
3. In the row form, fill in the two fields:
   - **Text input**: the label for that row. It becomes the chart label.
   - **Number input**: the value. It becomes the chart data.
4. Save the row. Repeat for as many rows as you need.
5. Use the edit and delete icons in the **Actions** column to fix or remove a row.
6. Click **Next**.

<!-- TODO(screenshot): how-to-create-chart-manually-in-ninja-charts-2
  screen: Ninja Tables › Add Chart › Data Range (Manual Input)
  table: -
  state: Add row data dialog open over a manual data list with two rows already added
  highlight: Add Data button
  view: admin
  alt: Manual Input data range with the Add row data dialog
-->

You land on **Formatting & Preview**, where the chart already shows your data.

## Bubble and scatter charts

Chart Js bubble and scatter charts plot points, so the **Add row data** form asks for numbers instead of a label:

- **Number input for X Axis** and **Number input for Y Axis** for scatter charts.
- The same two fields plus **Number input for radius R** (the bubble size) for bubble charts.

## Combo charts

In a Chart Js combo chart, the last dataset is drawn as a line and all earlier ones as bars. Add the series you want as a line last.

## Finish the chart

[Customize it](/how-to-customize-charts-in-ninja-charts), then save and copy the shortcode. See [Add a Chart to a Page](/embed-ninja-charts).

::: tip
Already have the numbers in a spreadsheet? Use **Import CSV** on the chart list to create a manual chart from a file. See [Manage Your Charts](/manage-ninja-charts).
:::
