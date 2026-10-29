---
title: "Rowspan/Merge Rows"
description: "Merge cells with the same value in neighboring rows into one tall cell, using a Custom JS snippet and the combine column class (Pro)."
---

# Rowspan/Merge Rows

**Rowspan** merges cells that sit on top of each other into one tall cell. With this method, neighboring rows that have the same value in a column are merged automatically, for example a *Gender* or *Category* column with repeated values.

Unlike [Colspan](/colspan-cell-merge), there is no `#rowspan#` keyword. Rowspan uses a short script in **Custom JS** and the **Extra classes** column option, both Pro features.

## Merge table rows

1. Go to **Tables** › your table › **Custom CSS/JS** and open **Custom JS**.
2. Copy the code from this [GitHub gist](https://gist.github.com/reachkamrul/e8c1818cbe88daa1da9502d440b0d0c9) and paste it into the editor.
3. Click **Save Custom JS**.

![Custom JS tab](/images/table-formatting/rowspan/1.-customcssJS.webp)

4. Open the **Table Rows** tab. Click the gear icon on the column whose repeated values you want to merge, and choose **Column settings**.

![Column settings in the column header](/images/table-formatting/rowspan/2.-gender.webp)

5. Open the **Advanced** tab and type `combine` in **Extra classes**.
6. Click **Save column**.

![combine in Extra classes](/images/table-formatting/rowspan/3.-Combine.webp)

Preview the table. Neighboring rows with the same value in that column now share one merged cell.

![Merged rows](/images/table-formatting/rowspan/4.-Combine-result.webp)
