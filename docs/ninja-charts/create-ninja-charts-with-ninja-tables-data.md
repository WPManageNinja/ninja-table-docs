---
title: "How to Create Ninja Charts with Ninja Tables Data"
description: "Turn the data in a Ninja Tables table into a bar, line, pie or other chart that updates when the table does."
---

# How to Create Ninja Charts with Ninja Tables Data

A chart built from a Ninja Tables table is a **dynamic chart**: it reads the table when the chart loads, so edits to the table show up in the chart. You only need Ninja Tables and [Ninja Charts](/guide/ninja-charts/how-to-install-ninja-charts).

## Create the chart

1. Go to **Ninja Tables** › **Charts** and click **New Chart**.
2. Enter a **Chart name**.
3. Under **Where is your data?**, choose **Ninja Tables**, then pick the table in the list.
4. Check the **Data needed** guide for your chart type (below).
5. Choose the render engine and a chart type, then click **Continue to builder**.

If you have no tables, the screen says "Please create a table in Ninja Tables first."

![Create a chart screen with Ninja Tables selected and the Data needed guide](/images/ninja-charts/create-ninja-charts-ninja/1.-Create-A-Chart-Screen-With-Ninja.webp)

## Choose a table that fits the chart

The **Data needed** guide shows what each chart type reads from the table's columns:

- **Bar, line, area, pie and similar types**: a Label column (text or date) plus a Number column, **or** a Choice column that counts each choice.
- **Scatter**: two Number columns (X and Y). **Bubble**: three (X, Y and size).
- **Combo**: a Label column plus two or more Number columns.
- **Histogram** (Google Charts): a Label column plus a Number column.

Only Single line text, Number, Date and Select columns can be used. Counting needs a column with the **Select** data type, so a pie chart can show how many rows picked each option. A text column that holds numbers has to be changed to the Number type in the table first. [Drag & Drop](/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables) tables don't appear in the list.

Tables that use the **DataTables** engine can be charted too, and the Data panel's row settings work on them the same way. This needs Ninja Tables 5.5 or later.

## Edit the table from the builder

In the builder's **Data** tab, **Selected table** names your table. The data is read-only in Ninja Charts, so click **Edit table** to open the table in a new tab. Change the rows or column types there, then come back to the chart. **Change source** switches to another table.

![Data panel showing the selected Ninja Tables table and Edit table button](/images/ninja-charts/create-ninja-charts-ninja/2.-Data-Panel-Showing-The-Selected-Ninja.webp)

Choose the columns and rows in [Choose Your Chart Data](/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts).

::: tip
Tables connected to a Google Sheet are read from the sheet's CSV, up to 2,000 rows.
:::

## Finish the chart

Style it in [Customize a Chart](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts), click **Save**, and copy the shortcode. See [Add a Chart to a Page](/guide/ninja-charts/embed-ninja-charts).
