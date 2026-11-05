---
title: Manage Your Charts
description: View, edit, duplicate, export, delete and import Ninja Charts from the All Charts list.
---

# Manage Your Charts

The **All Charts** list is where you find, preview, edit, copy, export, delete and import your charts. Open it from **Ninja Tables** › **Charts**. It needs [Ninja Charts](/guide/ninja-charts/how-to-install-ninja-charts) to be active, and only users who are allowed to manage Ninja Tables (administrators by default; see [Define Permission for Table Users](/guide/table-management/define-permission-for-table-users)) can see charts. Without Ninja Tables, only administrators can.

![All Charts list with Import CSV, Add New and the bulk action dropdown](/images/ninja-charts/manage-charts/1.-All-Charts-List-With-Import-CSV.webp)

## The chart list

Each chart is one row:

- **ID**: the number used in the shortcode.
- **Title**: the chart name.
- **Render Engine**: **Chart Js** or **Google Charts**.
- **Data Source**: Manual, Ninja Table or Fluent Forms.
- **Chart Type**: for example Bar or Pie.
- **ShortCode**: the `[ninja_charts id="N"]` shortcode to paste into a page. See [Add a Chart to a Page](/guide/ninja-charts/embed-ninja-charts).
- **Actions**: preview, edit and the row menu.

Above the list, the **Search** box finds a chart by name.

The list shows 10 charts per page. With no charts yet, you see a welcome screen with **Create a new chart** and **Import CSV**.

## Preview and edit a chart

- Click the eye icon in **Actions** to preview the chart on your site.
- Click the pencil icon to edit it. The **Edit Chart** screen is the same creator you used to build the chart, filled with its current settings. See [Customize a Chart](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts).

## Duplicate a chart

1. Click the row menu in **Actions**.
2. Click **Duplicate**.

A copy with the same source, type and design is added to the list. Use it as a starting point for a similar chart.

## Export a chart

The row menu has three export options:

- **Export CSV**: downloads the chart's data as a CSV file.
- **Export PNG**: opens the chart in a new tab and downloads it as a PNG image.
- **Export PDF**: opens the chart in a new tab and downloads it as a PDF. It isn't available for Google Charts, which shows "PDF export is not available for Google Charts."

![Chart row menu with Duplicate, three export options and Delete](/images/ninja-charts/manage-charts/2.-Chart-Row-Menu-With-Duplicate-Three.webp)

## Delete charts

- To delete one chart, open its row menu, click **Delete** and confirm "Are you sure to delete this?" with **Yes**.
- To delete several, tick their rows, choose **Delete Entries** in the bulk action dropdown and click **Bulk Action**.

::: warning
Deleting a chart can't be undone. A page that still uses the chart's shortcode shows "Invalid ShortCode...!" instead of the chart.
:::

## Import a chart from a CSV file

**Import CSV** creates a new manual chart from a CSV file, with no typing.

1. On the chart list, click **Import CSV**.
2. On **Engine & Type**, choose the **Chart Renderer** and a chart type, then click **Next**.
3. On **Upload CSV**, enter a **Chart Name** (the default is "Ninja Charts"), then click or drag a CSV file onto the upload area.
4. Check the preview ("3 rows parsed", for example), then click **Import Chart**.
5. The **Done** step shows "Import Successful!" with the chart's shortcode. Click **View All Charts**, or **Import Another**.

The first row of the file must be a header row, followed by at least one data row. The columns you need depend on the chart type, and the upload step shows the expected columns and an example:

| Chart types | Columns |
| --- | --- |
| Line, Bar, Horizontal Bar, Area, Combo, Radar (Chart Js); all Google Charts types except Pie and Doughnut | `label, series1, series2, ...` (a text label, then one or more numeric columns) |
| Pie, Doughnut, Polar, Funnel (Chart Js); Pie and Doughnut (Google Charts) | `label, value` (exactly two columns) |
| Scatter (Chart Js) | `x, y` (both numeric) |
| Bubble (Chart Js) | `x, y, r` (all numeric) |

![Import CSV upload step with a parsed preview](/images/ninja-charts/manage-charts/3.-Import-CSV-Upload-Step.webp)

Limits:

- The file can be up to 1 MB.
- Only the first 500 data rows (below the header row) are imported. The upload step warns you when a file has more.
- The imported data must stay under 60 KB once saved.

The upload step shows an error when the file doesn't fit the chart type, for example a bubble chart without exactly three columns or a value that isn't a number.

An imported chart is a manual chart, so you can edit it like any other from the list.
