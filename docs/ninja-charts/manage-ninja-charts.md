---
title: Manage Your Charts
description: Find, preview, edit, duplicate, export, delete and import Ninja Charts from the Charts list.
---

# Manage Your Charts

The **Charts** list is where you find, preview, edit, copy, export, delete and import your charts. Open it from **Ninja Tables** › **Charts**. It needs [Ninja Charts](/guide/ninja-charts/how-to-install-ninja-charts) to be active, and only users who are allowed to manage Ninja Tables (administrators by default; see [Define Permission for Table Users](/guide/table-management/define-permission-for-table-users)) can see charts. Without Ninja Tables, only administrators can, and the plugin adds its own **Ninja Charts** menu with **Charts**, **Add Chart** and **Get help**.

![Charts list with engine pills, chart type filter, search and chart rows](/images/ninja-charts/manage-charts/1.-Charts-List-With-Engine-Pills-Chart.webp)

## The top bar

Every Ninja Charts screen has a top bar with three sections: **Charts**, **Create Chart** and **Support**. The icon at the right of the bar sets the look of the admin: **Light**, **Dark** or **System** (follows your device). It is saved in your browser and shared with Ninja Tables and the other Fluent plugins, so changing it in one changes it in all.

### The Support page

The **Support** page has these parts:

- **User Guide** and **Popular Searches**: lists of links to the Ninja Charts documentation and articles. They open in a new tab.
- **Need expert support?**: "Our experts would like to assist you with your query and any customization." Click **Contact Support** to open a support ticket.
- **Love this plugin?**: click **Write a Review** to leave a review in the WordPress.org plugin repository.
- **Our products**: cards for other plugins from the same team, such as Ninja Tables and Fluent Forms. Each has a **Try ...** button that opens the plugin's page.

## The chart list

Above the list, **Import CSV** and **New Chart** sit at the top right. Each chart is one row:

- **ID**: the number used in the shortcode.
- **Chart**: the chart's name with its type icon and type (for example "Bar chart"). The eye icon next to the name previews the chart on your site.
- **Source**: **Manual**, **Ninja Tables** or **Fluent Forms**.
- **Engine**: **Chart.js** or **Google Charts**.
- **Shortcode**: the `[ninja_charts id="N"]` shortcode to paste into a page. Hover over it to see **Click to copy**, then click it. A **Shortcode copied** message confirms it. See [Add a Chart to a Page](/guide/ninja-charts/embed-ninja-charts).
- **Actions**: the pencil (edit) and a **More actions** menu.

Click anywhere on a row (except its buttons) to open the chart in the builder.

### Search and filter

The toolbar above the list narrows what you see:

- **Engine pills**: **All**, **Chart.js** and **Google Charts**, each with the number of charts it holds. The counts always cover every chart, whatever you search for.
- **Filter by chart type**: choose **All chart types** or one type, such as Bar or Pie. The type matches in either engine.
- **Search charts**: finds a chart by name as you type. Click the **x** in the box to clear it.

The engine pills and the chart type filter work together with the search. When nothing matches, the list says "No charts match these filters" (or "No charts match" followed by your search word) and "Try another search, or clear the filters." Click **Clear filters** to start again.

### Select several charts

Each row has a checkbox. Tick one or more rows and the filter and search boxes are replaced by a bar that shows how many charts are selected (for example "3 selected") with a **Delete** button. Click the **x** (**Clear selection**) at the end of the bar to untick them all. See [Delete charts](#delete-charts).

### Page size and pages

The footer shows the total ("Total 24"), a page size menu ("10 / page"), and **Previous page** and **Next page** arrows with numbered pages between them. You can show 10, 20, 50 or 100 charts per page; 10 is the default. Changing the page size returns you to page 1.

### First chart

Until you have a chart, the list shows a **Welcome to Ninja Charts** screen with **Create a new chart**, **Import CSV** and links to the documentation.

## Preview and edit a chart

- Click the eye icon next to the name to preview the chart on your site in a new tab.
- Click the pencil icon, the chart name or the row to edit it. The builder opens with the chart's current settings. See [Customize a Chart](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts).

## Duplicate a chart

1. Click **More actions** (⋯) at the end of the row.
2. Click **Duplicate**.

A copy with the same source, type and design is added to the list ("Chart duplicated"). Use it as a starting point for a similar chart.

## Export a chart

The **More actions** menu has three export options:

- **Export CSV**: downloads the chart's data as a CSV file.
- **Export PNG**: opens the chart in a new tab and downloads it as a PNG image.
- **Export PDF**: opens the chart in a new tab and downloads it as a PDF. It isn't in the menu for Google Charts charts.

<!-- TODO(screenshot): manage-ninja-charts-2
  screen: Ninja Tables › Charts, row More actions menu open
  table: -
  state: Menu showing Duplicate, Export CSV, Export PNG, Export PDF and Delete on a Chart.js chart
  highlight: More actions menu
  view: admin
  alt: Chart row menu with Duplicate, three export options and Delete
  blocked: not in this task; existing file is a stale old-UI image
-->

## Delete charts

- To delete one chart, open **More actions** and click **Delete**. A "Delete this chart?" window asks you to confirm.
- To delete several, tick their rows. The bar shows how many are selected with a **Delete** button. Click **Delete** and confirm "Delete N charts?".

::: warning
Deleting a chart can't be undone. A page that still uses the chart's shortcode shows "Invalid ShortCode...!" instead of the chart.
:::

## Import a chart from a CSV file

**Import CSV** creates a new manual chart from a CSV file, with no typing. It is one page, so you set everything up and import in one go.

1. On the chart list, click **Import CSV** (or **Import CSV** on the welcome screen).
2. Enter a **Chart name**, for example "Monthly revenue". If you leave it empty, it's filled in from the file name when you choose a file.
3. Under **Chart type**, choose the render engine (**Chart.js** or **Google Charts**), then a chart type.
4. Under **Upload CSV**, click the area that says **Click or drag a CSV file here** ("Up to 1 MB and 500 rows"), or drag a CSV file onto it.
5. Check the **Preview** table, then click **Import chart**.
6. The **Chart imported** screen shows the chart's shortcode. Click **Open in builder** to keep editing, **All charts** to go back to the list, or **Import another** to start a fresh import with an empty form.

![Import CSV page with a parsed preview](/images/ninja-charts/manage-charts/3.-Import-CSV-Page-With-A-Parsed.webp)

Once a file is chosen, the upload area shows its name, the number of rows and **Ready**. Click **Replace** to pick a different file, or the **x** (**Remove file**) to start over. **Import chart** stays off until the file is read and the chart has a name. A hint beside it says what is missing, for example "Choose a CSV file to continue" or "Enter a chart name to continue".

### CSV format

The first row must be a header row, followed by at least one data row. The **CSV format** box beside the upload area shows the columns the chosen chart type needs, with an example, and changes when you pick another type.

| Chart types | Columns |
| --- | --- |
| Line, Bar, Horizontal bar, Area, Combo, Radar (Chart.js); every Google Charts type except Pie and Doughnut | `label, value1, value2, ...`: a text label, then one or more numeric columns (at least 2 columns) |
| Pie, Doughnut, Polar area, Funnel (Chart.js); Pie and Doughnut (Google Charts) | `label, value`: exactly 2 columns |
| Scatter (Chart.js) | `x, y`: exactly 2 numeric columns |
| Bubble (Chart.js) | `x, y, r`: exactly 3 numeric columns (r is the bubble size) |

### Limits

- The file can be up to 1 MB.
- Only the first 500 data rows (below the header row) are imported. If a file has more, a yellow notice says "This file has more than 500 rows. Only the first 500 will be imported."; you can still import.
- The imported data must stay under 60 KB once saved. If it's bigger, you're asked to reduce the rows or columns.

If the file doesn't fit the chart type, for example a bubble chart without exactly three columns or a value that isn't a number, a red message says what to fix and **Import chart** stays off. Pick another chart type and the same file is checked again.

An imported chart is a manual chart, so you can edit it like any other from the list.
