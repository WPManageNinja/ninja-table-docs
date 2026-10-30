---
title: "Row and Column Calculation"
description: "Add up values across a row with a Transform value formula, or total a column with a custom JavaScript snippet."
---

# Row and Column Calculation

You can calculate numbers in a Ninja Tables table in two ways. A **row calculation** adds up values across each row and shows the result in its own column. A **column calculation** adds up a whole column and shows the total under it. Both are Pro.

In this example, the table has three **Numeric value** columns: Number One, Number Two and Number Three.

## Row calculation (Pro)

A fourth column, **Result**, shows the sum of the three numbers in each row. This uses [Transform value](/transform-value) with an Excel formula.

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**. Click the gear icon on the **Result** column and choose **Column settings**.
2. Open the **Transform** tab and turn on **Excel formula support**. This switch applies to every column in the table and saves immediately.
3. In the Transform value box, write a formula that starts with `=` and has the reference shortcode of each column. Click a column in the **Reference values** list to insert its shortcode. The final formula looks like this:

```
=SUM({{row.numberone}}, {{row.numbertwo}}, {{row.numberthree}})
```

4. Click **Save column**.

<!-- TODO(screenshot): row-column-data-calculation-1
  blocked: Excel formula support switch saves immediately for the whole table and no demo column has a formula
  screen: Tables › Monthly Sales by Region 2026 › Table Rows › Column settings › Transform
  table: Monthly Sales by Region 2026
  state: Transform tab of a total column with Excel formula support on and a SUM formula in the box
  highlight: Transform value box
  view: admin
  alt: Transform tab with a SUM formula
-->

The **Result** column now shows the sum of each row, in the grid and on your site.

<!-- TODO(screenshot): row-column-data-calculation-2
  blocked: needs a saved formula column and a real demo page; Monthly Sales by Region 2026 has no demo page
  screen: Preview of Monthly Sales by Region 2026
  table: Monthly Sales by Region 2026
  state: Total column showing the row sums
  highlight: -
  view: frontend
  alt: Result column showing the sum of each row
-->

Other functions work the same way, such as `AVERAGE`, `ROUND` and `IF`. Use `NUMVAL` to turn text such as `$1,200.50` into a number first. See [Transform value](/transform-value) for the formula rules and the list of functions.

## Column calculation (Pro)

Column totals use a small script in the table's **Custom JS**, a Pro feature. It adds a total row at the bottom of the table.

1. Copy the JavaScript from this [GitHub gist](https://gist.github.com/reachkamrul/11e6e60d4aa113abe81586367cc27b77).
2. Go to **Ninja Tables** › **Tables** › your table › **Custom CSS/JS** and open the Custom JS editor. Paste the code.
3. On the first line of the code, `var myClasses= "..."`, enter the **Column key** of the column you want to total. To total several columns, separate their keys with commas. You can find a column's key in **Table Rows** › column header gear › **Column settings** › **Basic**.
4. Click **Save Custom JS**.

<!-- TODO(screenshot): row-column-data-calculation-3
  blocked: the gist script is not available locally and the total row needs saved Custom JS
  screen: Tables › Monthly Sales by Region 2026 › Custom CSS/JS › Custom JS
  table: Monthly Sales by Region 2026
  state: Custom JS editor with the column total script pasted and the column keys set on the first line
  highlight: first line of the script
  view: admin
  alt: Custom JS editor with the column total script
-->

Preview the table. Each column you listed now shows its total at the bottom.

<!-- TODO(screenshot): row-column-data-calculation-4
  blocked: needs saved Custom JS and a real demo page for Monthly Sales by Region 2026
  screen: Preview of Monthly Sales by Region 2026
  table: Monthly Sales by Region 2026
  state: Total row at the bottom of the table
  highlight: Total row
  view: frontend
  alt: Table with a total row under the numeric columns
-->
