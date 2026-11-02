---
title: "How to Create Chart Manually in Ninja Charts"
description: "Build a chart in Ninja Charts by typing the data in yourself, without a table or form."
---

# How to Create Chart Manually in Ninja Charts

A **manual chart** uses data you type into the chart creator, so it needs no table or form. It's the right choice for a one-off figure, such as survey results from a report. The chart doesn't change unless you edit it. To chart data that changes, use [Ninja Tables](/create-ninja-charts-with-ninja-tables-data) or [Fluent Forms](/create-ninja-charts-with-fluent-forms-entries) instead.

## Start the chart

1. Go to **Ninja Tables** › **Charts**, then click **Add New**.
2. Enter a **Chart Name** and choose the **Chart Renderer**: **Chart Js** or **Google Charts**.
3. Pick a chart type and click **Next**. The type list depends on the renderer (see [Getting Started](/getting-started-with-ninja-charts-free-wordpress-chart-plugin)).
4. On the **Data Source** step, choose **Manual Input** and click **Next**.

![Data Source step with Manual Input selected](/images/ninja-charts/create-chart-manually-ninja/1.-Data-Source-Step-With-Manual-Input.webp)

## Add the data

The **Data Range** step starts empty and says "Please input some data."

1. Click **Add column** to add a data column to the chart. The **Add New Column** dialog opens.
2. Click **Add data** to add a row.
3. In the row form, fill in the two fields:
   - **Text input**: the label for that row. It becomes the chart label.
   - **Number input**: the value. It becomes the chart data.
4. Save the row. Repeat for as many rows as you need.
5. Use the edit and delete icons in the **Actions** column to fix or remove a row.
6. Click **Next**.

![Manual Input data range with the Add row data dialog](/images/ninja-charts/create-chart-manually-ninja/2.-Manual-Input-Data-Range.webp)

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
