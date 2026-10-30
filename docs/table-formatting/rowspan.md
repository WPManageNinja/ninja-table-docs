---
title: "Rowspan/Merge Rows"
description: "Merge cells with the same value in neighboring rows into one tall cell, using a Custom JS snippet and the combine column class (Pro)."
---

# Rowspan/Merge Rows

**Rowspan** merges cells that sit on top of each other into one tall cell. With this method, neighboring rows that have the same value in a column are merged automatically, for example a *Gender* or *Category* column with repeated values.

Unlike [Colspan](/colspan-cell-merge), there is no `#rowspan#` keyword. Rowspan uses a short script in **Custom JS** and the **Extra classes** column option, both Pro features.

## Merge table rows

1. Go to **Ninja Tables** › **Tables** › your table › **Custom CSS/JS** and open the Custom JS editor.
2. Copy the code from this [GitHub gist](https://gist.github.com/reachkamrul/e8c1818cbe88daa1da9502d440b0d0c9) and paste it into the editor.
3. Click **Save Custom JS**.
4. Open the **Table Rows** tab. Click the gear icon on the column whose repeated values you want to merge, and choose **Column settings**.
5. Open the **Advanced** tab and type `combine` in **Extra classes**.
6. Click **Save column**.

![combine typed in the Extra classes field](/images/table-formatting/rowspan/1.-Combine-Typed-In-The-Extra-Classes.webp)

Preview the table. Neighboring rows with the same value in that column now share one merged cell. Only neighboring rows are merged, so equal values must sit next to each other.

<!-- TODO(screenshot): rowspan-2
  blocked: needs saved Custom JS and saved combine class on the Employee Directory demo table
  screen: Preview of Employee Directory
  table: Employee Directory
  state: Department column with repeated values merged into tall cells
  highlight: merged cells
  view: frontend
  alt: Neighboring rows with the same value merged into one cell
-->

For the field itself, see [Advanced settings](/advanced-settings).
