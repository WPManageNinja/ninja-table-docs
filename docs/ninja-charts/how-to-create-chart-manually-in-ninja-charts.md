---
title: "How to Create Chart Manually in Ninja Charts"
description: "Build a chart in Ninja Charts by typing or pasting the data into a spreadsheet-style sheet, without a table or form."
---

# How to Create Chart Manually in Ninja Charts

A **manual chart** uses data you type or paste into a data sheet inside the chart builder, so it needs no table or form. It's the right choice for a one-off figure, such as survey results from a report. The chart doesn't change unless you edit it. To chart data that changes, use [Ninja Tables or Fluent Forms](/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts) instead.

## Start the chart

1. Go to **Ninja Tables** › **Charts** and click **New Chart**.
2. Enter a **Chart name**, for example "Monthly revenue". It is required.
3. Under **Where is your data?**, choose **Manual** ("Enter values in a spreadsheet").
4. Under **What do you want to show?**, pick the **Render engine** (**Chart.js** or **Google Charts**) and a chart type. The type list depends on the engine (see [Getting Started](/guide/ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin)).
5. Click **Continue to builder**.

![Create a chart screen with Manual selected as the data source](/images/ninja-charts/create-chart-manually-ninja/1.-Create-A-Chart-Screen-With-Manual.webp)

The builder opens with the live preview and the **Data**, **Design** and **Responsive** tabs in the sidebar. In the header you see the chart name, its `#ID`, whether changes are saved, the shortcode chip, **Preview** and **Save**.

## Open the data sheet

On the **Data** tab, a card shows how many rows the chart has and the names of its columns. Click **Edit data** to open the data sheet in place of the chart, and **Show chart** to go back to the chart. A new chart with no rows shows "Add a row to see your chart." in the preview, with an **Open data sheet** button that does the same as **Edit data**.

![Data tab of a manual chart with the Edit data button](/images/ninja-charts/create-chart-manually-ninja/2.-Data-Tab-Of-A-Manual-Chart.webp)

## The data sheet

The sheet works like a small spreadsheet. Click a cell and type. Paste cells copied from Excel or Google Sheets into any cell, and they spread across the sheet from that cell, adding rows and series as needed. Press <kbd>Enter</kbd> to move down a row; on the last row it adds a new one.

The bar above the sheet counts the rows and series (for example "12 rows · 2 series"). While you search it reads "3 of 12 rows".

Above the sheet:

- **Search rows**: filters the rows, useful on long sheets. **Clear search** shows all rows again.
- **Import**: opens the import window (see below).
- **Series**: adds a series column. It shows only on charts that can have several series.
- **Row**: adds a row.

Each row has a checkbox, and the checkbox in the header (**Select all rows**) ticks every row that is showing. Select rows and the count bar turns into a bar such as "3 selected" with **Delete row** (or **Delete rows**). Click the **x** (**Clear selection**) to untick them. A message tells you how many rows were deleted. The **x** at the end of a row deletes that row on its own. A series column has an **x** in its header (**Remove series**), shown while the chart has more than one series. A chart holds up to 500 rows.

If a search finds nothing, the sheet says "No rows match your search" with a **Clear search** button. A sheet with no rows says "No rows yet", with **Import** and **Row** buttons.

Value cells that aren't numbers are marked as invalid. The text column accepts anything.

![Manual data sheet with series columns and selected rows](/images/ninja-charts/create-chart-manually-ninja/3.-Manual-Data-Sheet-With-Series-Columns.webp)

### What the columns are

The columns depend on the chart type:

- **Label and series** (line, bar, horizontal bar, area, radar, combo, and Google histogram): a **Label** column, then one column per series. Combo charts need two or more series. Add series with **Series**, and rename one by clicking its name in the column header (**Series name**) and typing. The color swatch next to the name shows the series color.
- **Slices** (Chart.js pie, doughnut, polar and funnel, and Google pie and doughnut): a **Label** column and a **Value** column. Each row is one slice.
- **Scatter** (Chart.js): **X value** and **Y value** columns.
- **Bubble** (Chart.js): **X value**, **Y value** and **Radius** columns.

Google Charts scatter and bubble charts use the label and series layout instead.

Pie, scatter and bubble sheets have fixed columns, so they can't add series.

When you change the chart type, the builder keeps as much of your data as the new layout can hold and tells you what it changed, with an **Undo** button.

## Series and slices

Back on the **Data** tab, the **Series** list (or **Slices** list on slice charts) shows one row per series or slice. Each row has:

- a color swatch. Click it to change the color. Colors are also in the **Design** tab.
- the name. Click it and type to rename it. Pressing <kbd>Enter</kbd> saves it. A slice's name is its row's label.
- on series, the lowest and highest value of the column.
- a remove button (**Remove series** or **Remove slice**). A series can only be removed while another one remains.

Use **Add** to add a series or slice.

![Slices list for a manual pie chart with color swatches](/images/ninja-charts/create-chart-manually-ninja/4.-Slices-List-For-A-Manual-Pie.webp)

## Import data

Import saves typing when the data already exists in a spreadsheet or file.

1. Open the data sheet and click **Import**. The window is called **Import data**: "Paste cells from Excel or Google Sheets, or choose a CSV file." (On an empty sheet, **Import** is also in the "No rows yet" message.)
2. Paste cells from Excel or Google Sheets into the box, or click **Choose CSV file**, or drop a file onto it. Files up to 1 MB and 500 rows work. The file can be `.csv`, `.tsv` or `.txt`.
3. Check the preview. It shows the number of rows and columns found and the first rows.
4. Turn **First row has column names** on or off. It is guessed for you: a first row of names above rows of numbers counts as a header. When on, the names become the series names.
5. If the chart already has rows, choose **Where the data goes**:
   - **Replace the current data**
   - **Add below the current data**
6. Click **Replace data** (or **Add rows** when adding below). A message confirms how many rows were imported.

Numbers copied as shown, such as `1,200`, `$1,200` or `45%`, are cleaned to plain numbers. A notice appears if the chart can't take everything: more than 500 rows, or more columns than the chart type uses (the extra columns are left out). Pasted cells can be separated by tabs, commas or semicolons.

The shape each chart expects:

- **Label and series**: first column text, the others numbers. Example: `label,sales,profit` then `Jan,1200,400`.
- **Slices**: exactly two columns, `label,value`.
- **Scatter**: two number columns, `x,y`.
- **Bubble**: three number columns, `x,y,r`.

![Import data window with pasted cells and the replace or add below options](/images/ninja-charts/create-chart-manually-ninja/5.-Import-Data-Window-With-Pasted-Cells.webp)

## Save and use the chart

Click **Save** in the header. The header then shows **All changes saved**, and the shortcode chip appears with your chart's shortcode, for example `[ninja_charts id="12"]`. Copy it, or see [Embed Ninja Charts](/guide/ninja-charts/embed-ninja-charts) for the block and the other ways to place it. To style the chart, see [How to Customize Charts](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts). Your charts are listed in [Manage Ninja Charts](/guide/ninja-charts/manage-ninja-charts).
