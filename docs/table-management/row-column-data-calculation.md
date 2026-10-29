---
title: "Row and Column Calculation"
description: "Add up values across a row with a Transform value formula, or total a column with a custom JavaScript snippet."
---

# Row and Column Calculation

You can calculate numbers in a Ninja Tables table in two ways. A **row calculation** adds up values across each row and shows the result in its own column. A **column calculation** adds up a whole column and shows the total under it.

## Calculate Tabular Data in Rows/Columns

In this example, the table has three **Numeric value** columns: Number One, Number Two and Number Three.

![Calculate Tabular Data](/images/table-management/row-column-data-calculation/1.-01-5.webp)

### Row Calculation (Pro)

A fourth column, **Result**, shows the sum of the three numbers in each row. This uses [Transform value](/transform-value), a Pro feature.

1. Go to **Tables** › your table › **Table Rows**. Click the gear icon on the **Result** column and choose **Column settings**.
2. Open the **Transform** tab and turn on **Excel formula support**. This switch applies to every column in the table.
3. In the Transform value box, write a `SUM` formula with the reference shortcode of each column. Click a column in the **Reference values** list to insert its shortcode. The final formula looks like this:

```
=SUM({{row.numberone}}, {{row.numbertwo}}, {{row.numberthree}})
```

4. Click **Save column**. In the preview, the **Result** column now shows the sum of each row, like the example below.

![Result](/images/table-management/row-column-data-calculation/2.-row-column-calculation-3.webp)

### Column Calculation (Pro)

Column totals use a small script in the table's **Custom JS**, a Pro feature.

1. Copy the JavaScript from this [GitHub gist](https://gist.github.com/reachkamrul/11e6e60d4aa113abe81586367cc27b77).
2. Go to **Tables** › your table › **Custom CSS/JS** and open **Custom JS**. Paste the code.
3. On the first line of the code, `var myClasses=""`, enter the **Column key** of the column you want to total. To total several columns, separate their keys with commas. You can find a column's key in **Table Rows** › column header › **Column settings** › **Basic**.

![Example: using three columns](/images/table-management/row-column-data-calculation/3.-03-4.webp)

4. Click **Save Custom JS**.

Preview the table. Each column you listed now shows its total at the bottom.

![Preview](/images/table-management/row-column-data-calculation/4.-row-column-calculation-6.webp)
