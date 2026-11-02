---
title: "Row and Column Calculation"
description: "Add up values across a row with a Transform value formula, or total a column with a custom JavaScript snippet."
---

# Row and Column Calculation

You can calculate numbers in a Ninja Tables table in two ways. A **row calculation** adds up values across each row and shows the result in its own column. A **column calculation** adds up a whole column and shows the total under it. Both are Pro.

In this example, a sales table has three **Numeric value** columns, **Q1**, **Q2** and **Q3**, with the column keys `q1`, `q2` and `q3`.

## Row calculation (Pro)

A fourth column, **Total**, shows the sum of the three quarters in each row. This uses [Transform value](/transform-value) with an Excel formula.

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**. Click the gear icon on the **Total** column and choose **Column settings**.
2. Open the **Transform** tab and turn on **Excel formula support** (marked experimental). This switch applies to every column in the table and saves immediately.
3. In the Transform value box, write a formula that starts with `=` and has the reference shortcode of each column. Click a column in the **Reference values** list to insert its shortcode. The final formula looks like this:

```
=SUM({{row.q1}}, {{row.q2}}, {{row.q3}})
```

4. Click **Save column**.

![Transform tab with a SUM formula](/images/table-management/row-column-data-calculation/1.-Transform-Tab-With-A-SUM-Formula.webp)

The **Total** column now shows the sum of each row, in the grid and on your site.

![Total column showing the sum of each row](/images/table-management/row-column-data-calculation/2.-Total-Column-Showing-The-Sum.webp)

Other functions work the same way, such as `AVERAGE`, `ROUND` and `IF`. Use `NUMVAL` to turn text such as `$1,200.50` into a number first. See [Transform value](/transform-value) for the formula rules and the list of functions.

## Column calculation (Pro)

Column totals use a small script in the table's **Custom JS**, a Pro feature. It adds a total row at the bottom of the table.

1. Copy the JavaScript from this [GitHub gist](https://gist.github.com/reachkamrul/11e6e60d4aa113abe81586367cc27b77).
2. Go to **Ninja Tables** › **Tables** › your table › **Custom CSS/JS** and switch to **JavaScript**. Paste the code.
3. Near the top of the code, in the line `var myClasses= "..."`, enter the **Column key** of the column you want to total. To total several columns, separate their keys with commas. You can find a column's key in **Table Rows** › column header gear › **Column settings** › **Basic**.
4. Click **Save** at the top right.

![Custom JS editor with the column total script](/images/table-management/row-column-data-calculation/3.-Custom-JS-Editor-With-The-Column.webp)

Preview the table. Each column you listed now shows its total at the bottom.

![Table with a total row under the numeric columns](/images/table-management/row-column-data-calculation/4.-Table-With-A-Total-Row-Under.webp)
