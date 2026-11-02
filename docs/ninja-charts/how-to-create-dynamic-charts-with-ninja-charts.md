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

![Chart Title & Type step with chart type cards](/images/ninja-charts/create-dynamic-charts-ninja/1.-Chart-Title-Type-Step-With-Chart.webp)

## Step 2: Choose the data source

Choose **Ninja Tables** or **Fluent Forms**, then pick the table or form in the **Data** field. (**Manual Input** is for [typed-in charts](/how-to-create-chart-manually-in-ninja-charts).)

![Data Source step with a Ninja Tables table selected](/images/ninja-charts/create-dynamic-charts-ninja/2.-Data-Source-Step-With-A-Ninja.webp)

For source-specific tips, see [Ninja Tables data](/create-ninja-charts-with-ninja-tables-data) and [Fluent Forms entries](/create-ninja-charts-with-fluent-forms-entries).

## Step 3: Choose the data range

Move the columns you want from **Columns in the data source** to the columns used in the chart, and set how many items to show. See [Use the Data Range Picker](/how-to-use-data-range-picker-in-ninja-charts).

## Step 4: Format and preview

Adjust colors, axes, title, tooltip and legend while the preview updates. See [Customize a Chart](/how-to-customize-charts-in-ninja-charts).

![Formatting & Preview step showing a bar chart preview and option tabs](/images/ninja-charts/create-dynamic-charts-ninja/3.-Formatting-Preview-Step-Showing-A-Bar.webp)

## Step 5: Save and get the shortcode

Click **Save**. The last step, **Save & Get Shortcode**, shows `[ninja_charts id="N"]`, where N is the chart's ID. Copy it and [add it to a page](/embed-ninja-charts). Use **Back** to change an earlier step, or **Finish** to close the creator.

The chart now appears in your [chart list](/manage-ninja-charts).
