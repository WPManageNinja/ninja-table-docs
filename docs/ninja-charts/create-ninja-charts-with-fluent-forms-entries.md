---
title: "How to Create Ninja Charts with Fluent Forms Entries"
description: "Turn Fluent Forms submissions into a chart with Ninja Charts, for example to show survey or poll results."
---

# How to Create Ninja Charts with Fluent Forms Entries

A chart built from **Fluent Forms** entries is a dynamic chart: it updates as new submissions arrive. It's a good fit for polls, surveys and ratings. You need Fluent Forms and [Ninja Charts](/how-to-install-ninja-charts) active.

## Create the chart

1. Go to **Ninja Tables** › **Add Chart**.
2. Enter a **Chart Name**, choose the **Chart Renderer** and a chart type. Click **Next**.
3. On the **Data Source** step, choose **Fluent Forms**.
4. In the **Data** field that appears, pick the form.
5. Click **Next** and choose what to plot in [Data Range](/how-to-use-data-range-picker-in-ninja-charts).

<!-- TODO(screenshot): create-ninja-charts-with-fluent-forms-entries-1
  screen: Ninja Tables › Add Chart › Data Source
  table: -
  state: Fluent Forms selected as the data source and the Data dropdown showing a form
  highlight: Data field
  view: admin
  alt: Data Source step with Fluent Forms selected and a form chosen
-->

The **Fluent Forms** option is always listed, but it only has forms to pick when Fluent Forms is installed.

## Pick fields that fit the chart

Some form fields are counted into categories instead of plotted as raw values, so the chart shows how many people chose each answer:

- Radio, Checkbox, Select and Multiple select fields
- Country fields
- Ratings, Score and Net promoter score fields
- The `method` and `agreement` field types

Free-text fields (names, messages) don't suit pie or radar charts. Choose a field type that matches the chart, or the chart can't be built.

## Filter by date

When the form has entries with dates, the **Date Range Picker** in [Data Range](/how-to-use-data-range-picker-in-ninja-charts) lets the chart show only entries from a period.

## Finish the chart

Style it in [Formatting & Preview](/how-to-customize-charts-in-ninja-charts), then save it and copy the shortcode. See [Add a Chart to a Page](/embed-ninja-charts).
