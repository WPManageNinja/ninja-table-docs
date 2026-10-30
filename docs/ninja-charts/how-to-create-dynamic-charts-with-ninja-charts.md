---
title: "How to Create Dynamic Charts with Ninja Charts"
description: "Create a chart that updates automatically from a Ninja Tables table or Fluent Forms entries with Ninja Charts."
---

# How to Create Dynamic Charts with Ninja Charts

A **dynamic chart** reads its numbers from a Ninja Tables table or Fluent Forms entries, so it stays current as the data changes. This page walks through the whole creator once. Install [Ninja Charts](/how-to-install-ninja-charts) first.

## Step 1: Name the chart and pick a type

1. Go to **Ninja Tables** › **Add Chart** (or **Ninja Tables** › **Charts** › **Add New**).
2. Enter a **Chart Name**.
3. Choose a **Chart Renderer**, then pick a chart type.
4. Click **Next**.

The renderer decides which chart types you can pick:

- **Chart Js** (12): Line, Pie, Bar, Horizontal Bar, Bubble, Doughnut, Scatter, Area, Combo, Radar, Polar and Funnel.
- **Google Charts** (10): Line, Pie, Bar, Horizontal Bar, Bubble, Doughnut, Scatter, Area, Combo and Histogram.

If you skip the type, the creator shows "Chart type is required".

<!-- TODO(screenshot): how-to-create-dynamic-charts-with-ninja-charts-1
  screen: Ninja Tables › Add Chart › Chart Title & Type
  table: -
  state: Chart Js selected with the Horizontal Bar card highlighted
  highlight: Chart Renderer field
  view: admin
  alt: Chart Title & Type step with chart type cards
-->

## Step 2: Choose the data source

Choose **Ninja Tables** or **Fluent Forms**, then pick the table or form in the **Data** field. (**Manual Input** is for [typed-in charts](/how-to-create-chart-manually-in-ninja-charts).)

<!-- TODO(screenshot): how-to-create-dynamic-charts-with-ninja-charts-2
  screen: Ninja Tables › Add Chart › Data Source
  table: Product Price List
  state: Ninja Tables selected and the table picked in the Data dropdown
  highlight: Data field
  view: admin
  alt: Data Source step with a Ninja Tables table selected
-->

For source-specific tips, see [Ninja Tables data](/create-ninja-charts-with-ninja-tables-data) and [Fluent Forms entries](/create-ninja-charts-with-fluent-forms-entries).

## Step 3: Choose the data range

Move the columns you want from **Columns in the data source** to the columns used in the chart, and set how many items to show. See [Use the Data Range Picker](/how-to-use-data-range-picker-in-ninja-charts).

## Step 4: Format and preview

Adjust colors, axes, title, tooltip and legend while the preview updates. See [Customize a Chart](/how-to-customize-charts-in-ninja-charts).

<!-- TODO(screenshot): how-to-create-dynamic-charts-with-ninja-charts-3
  screen: Ninja Tables › Add Chart › Formatting & Preview
  table: Product Price List
  state: Horizontal bar chart preview with the options tabs visible
  highlight: -
  view: admin
  alt: Formatting & Preview step showing a bar chart preview and option tabs
-->

## Step 5: Save and get the shortcode

Click **Save**. The last step, **Save & Get Shortcode**, shows `[ninja_charts id="N"]`, where N is the chart's ID. Copy it and [add it to a page](/embed-ninja-charts). Use **Back** to change an earlier step, or **Finish** to close the creator.

The chart now appears in your [chart list](/manage-ninja-charts).
