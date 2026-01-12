---
title: "Row and Column Calculation"
description: "Row and Column Calculation"
---

# Row and Column Calculation

Row / Column Calculation is a feature that many Ninja Tables plugin users would like to implement in their tables. Calculate tabular data in a numeric table easily in this table plugin.
You may perform data calculation in Ninja Tables just by following a few easy steps. We have 2 different methods for row data calculation and column data calculation.
## Calculate Tabular Data in Rows/Columns
Follow this simple guide to discover how to calculate data in table rows and columns.
Suppose we have a table that contains 3 numeric data columns- Number One, Number Two, and Number Three.
![](https://ninjatables.com/wp-content/uploads/2022/09/01-5-scaled.webp)
### Row Calculation
We have another column named **Result **that will display the calculated results of all the numbers in a row.
- If you want to calculate the sum of a row containing numeric data, navigate to the **Table Configuration **->> **Transform Value**.
- Here you need to add a shortcode to find the sum of the rows. Ninja Tables has a feature to **"Enable Excel Formula support for Transform Value**." Enable this option to get the Excel summation formula.
- This is a basic single-line shortcode: ` =SUM({{Column 1}}+{{Column 2}}+{{Column 3}}) `. Inside the curly brackets place the **Shortcode Value **off all three columns.
To learn more about this feature, read this [documentation](https://ninjatables.com/docs/transform-value/).
- So the final code would look like this: `=SUM( {{row.numberone}} + {{row.numbertwo}} + {{row.numberthree}})`.
- Then click on the **Update **button to save the code. In the preview mode, the **Result **column of the table will now display the sum of the rows. Like the example given below -
![Result](https://ninjatables.com/wp-content/uploads/2023/01/row-column-calculation-3.png)
### Column Calculation
Calculating column data is different.
- First, go to this GitHub [link](https://gist.github.com/reachkamrul/11e6e60d4aa113abe81586367cc27b77) to get the JS code. Copy the code.
- Now go to the **Custom CSS/JS **tab & click on the **Custom Javascript **button. Paste the code that you copied and hit the save button.
- If you wish to calculate the total sum of all the numbers in the 1st column, you need to give the **Column key **of that specific column, on the first line of the code, which is `var myClasses=""`
- If you want to show the results of one single column, you need to put the key to that column only. If you want to apply calculations to multiple columns, put their columns key by using commas in between each column key.
![Example: using three column](https://ninjatables.com/wp-content/uploads/2022/09/03-4-scaled.webp)
- After that, click on the **Save Custom Javascript **button to save the code.
- When you click on the preview mode, all three columns will display the sum at the bottom. See the example given below.
![Preview](https://ninjatables.com/wp-content/uploads/2023/01/row-column-calculation-6.png)
This is how we can **calculate rows and columns** in Ninja Tables by following some easy steps!
