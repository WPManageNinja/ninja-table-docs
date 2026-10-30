---
title: "How to Customize Charts in Ninja Charts"
description: "Change a chart's size, colors, series, axes, title, tooltip, legend, layout and animation in the Formatting & Preview step."
---

# How to Customize Charts in Ninja Charts

The **Formatting & Preview** step of the chart creator shows your chart and a set of option tabs. Changes show in the preview as you make them. Reopen a saved chart with the pencil icon in the [chart list](/manage-ninja-charts) to change it later.

The tabs depend on the renderer:

- **Chart Js**: CHART, SERIES, AXES, TITLE, TOOLTIP, LEGEND, LAYOUT, ANIMATIONS.
- **Google Charts**: CHART, SERIES, LEGEND, AXES, TITLE, TOOLTIP. There are no Layout or Animations tabs.

<!-- TODO(screenshot): how-to-customize-charts-in-ninja-charts-1
  screen: Ninja Tables › Add Chart › Formatting & Preview
  table: Product Price List
  state: Chart Js bar chart preview with the CHART tab open
  highlight: CHART tab
  view: admin
  alt: Formatting & Preview step with the CHART tab open
-->

## CHART

Size, position, colors and the default font.

- **Responsive chart**: the chart resizes to fit its container. Turn it off to use a fixed size.
- **Chart Position**: **Left**, **Center** or **Right**. It only applies when the chart has a custom width and height, so it is unavailable while **Responsive chart** is on.
- **Chart width** and **Chart height**: the size in pixels. The width is used when **Responsive chart** is off.
- **Background color**: the chart background.
- **Border width**, **Border color** and **Border radius**: the chart border.
- **Font size** and **Font color**: the default text for the whole chart.
- **Font style** (Chart Js): the default style for all chart text, for example Normal.

## SERIES

One block per data column. Change each series' **Label** and **Color**.

<!-- TODO(screenshot): how-to-customize-charts-in-ninja-charts-2
  screen: Ninja Tables › Add Chart › Formatting & Preview › SERIES
  table: Monthly Sales by Region 2026
  state: SERIES tab with two series blocks showing Label and Color
  highlight: Color field
  view: admin
  alt: SERIES tab with a label and color for each series
-->

## AXES

Grid, stacking and axis labels. Which fields appear depends on the chart type: charts without axes, such as Pie, show fewer.

- **Show grid**: turn on to draw grid lines in the chart background.
- **Show stacked chart**: turn on to stack the series on top of each other instead of side by side. It doesn't appear for charts like Pie.
- **Horizontal axis label** and **Vertical axis label**: titles for the axes.
- **Vertical axis min** and **Vertical axis max**: the lowest and highest values on the vertical axis.

## TITLE

- **Show title**: turn on to show the chart title.
- **Title position**: Top, Bottom, Left or Right. Google Charts also offers **Out**.
- **Title font style**: Normal, Italic or Bold.
- **Title font color**: the title color.
- **Font size**: the title size.

## TOOLTIP

The box that appears when a visitor hovers a data point.

- **Show tooltip**: turn on to show tooltips.
- **Background color** and **Border color**: the tooltip box colors.
- **Title font color** and **Body font color**: the text colors.
- **Border width**: the tooltip border in pixels.
- **Shared tooltip**: turn on so one tooltip covers the whole plot area instead of a single point.

## LEGEND

- **Show legend**: turn on to display the legend.
- **Legend position**: Top, Bottom, Left or Right.
- **Font color**: the legend text color.
- **Legend alignment** and **Font size** (Google Charts only): align the legend to start, center or end, and set its text size.

## LAYOUT (Chart Js only)

**Padding left**, **Padding right**, **Padding top** and **Padding bottom**: space around the chart inside its container.

## ANIMATIONS (Chart Js only)

**Easing**: the animation curve used when the chart first draws. The default is linear.

Click **Save** when you're done, then [add the chart to a page](/embed-ninja-charts).
