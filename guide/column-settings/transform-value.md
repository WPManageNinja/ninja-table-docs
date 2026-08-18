---
title: "Transform Value"
description: "Transform Value"
---

# Transform Value

A WordPress table is engaging when the data is dynamic. Using the Transform Value feature in Ninja Tables you can concat any column value easily into any valid HTML and show it as a computed value.

Let's dive into this simple guide that’ll teach you how to **Transform** **Values** easily in any specific table’s column.

Transform Value is HTML, CSS & Excel supported!

- Go to the **Table Configuration** tab **→** Click on the **Edit** icon (Pencil Icon) on the right side of the column and you will notice a drop-down.

![transform value in ninja tables](/images/column-settings/transform-value/1.-transform-value-1.webp)

- 
Let's go over the **Transform** **Value** functionality step by step.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JFno71QQjok" title="Transform Value Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## **Transform Value Box**

This box is where you will type your HTML code or use the Excel formula to transform the data value of the corresponding column.

You can use any HTML, CSS & Excel formula in the transform value box.

## **Show Formulas**

When you click on the **Enable Excel Formula Support for Transform Value**, you will get a **Show** **Formulas** button, which you may click to acquire the formulas you want.

![use Excel formula for value transformation](/images/column-settings/transform-value/2.-transform-value-3.webp)

## **Reference Shortcode**

There will be a **Column** **Title** and a **Reference** **Shortcode**. Reference shortcodes will generate automatically based on the **Column** **name**.

You can use the following Reference Shortcode Values to transform your cell value.

- Here, there are three steps to complete. Look at the example below to learn about these steps.

![reference shortcode in transform value](/images/column-settings/transform-value/3.-transform-value-4.webp)

## Turn Text Into Hyperlink

- Write the HTML code (< a href= ……….) on the transform value box.

![HTML in transform value](/images/column-settings/transform-value/4.-transform-value-5.webp)

- You don’t have to modify the first piece of the code. But the 2nd part can be changed to whatever suits your needs.

- Custom words can also be written for the second part. Copy & paste the email shortcode inside the anchor tag, and do the same for the email shortcode.

![email in transform value](/images/column-settings/transform-value/5.-transform-value-6.webp)

See the example below for viewing the output of the transform value.

- In this case, the **Email Name** has been used before the closing tag of the HTML. You can also transform values for all the other columns similarly. In the example below, Contact No. is used to call people directly by clicking on the link -

![HTML in transform value](/images/column-settings/transform-value/6.-transform-value-7.webp)

Let's go with another example for better understanding.

- If you want to replace the cell value **Female** from the **gender** column with a link (for example, https://google.com), you can follow the formula -

```
=IF("&#123;&#123;row.gender&#125;&#125;"="Female","<a href='https://google.com'>&#123;&#123;row.gender&#125;&#125;</a>","&#123;&#123;row.gender&#125;&#125;")
```

where **reference** **shortcode** for the **gender** column is - `&#123;&#123;row.gender&#125;&#125;`
Note that you can use as many IF Formulas as you want in the transform value box.

![Excel If formula in transform value](/images/column-settings/transform-value/7.-transform-value-8.webp)

- See the below screenshot to get how it works-

![add link to cell value](/images/column-settings/transform-value/8.-transform-value-9.webp)

## **Number Calculation**

- To execute number calculations, we must pick the number fields for each column, and the Data Type for each column must be a **Numeric** **Value**.

- See the screenshot below, where Product 1 and Product 2 are numeric fields, and the third column is utilized to display their results.

![sum total of data](/images/column-settings/transform-value/9.-transform-value-10.webp)

- Now, go to the **Transform** **Value** of the third column if you want to add column 1 and column 2 together and display the result in the third column (Data type must have a Numeric Value).

- Give this below formula to the transform value box to add the cell value of column 1 and column 2.

```
=SUM(&#123;&#123;row.product_1&#125;&#125;,&#123;&#123;row.product_2&#125;&#125;)
```

where **reference** **shortcode** for the **product 1 and product 2** columns is - `&#123;&#123;row.product_1&#125;&#125;` and `&#123;&#123;row.product_2&#125;&#125;`
- Lastly, click on the **Update** button when you are done with your configuration.

![use excel sum formula](/images/column-settings/transform-value/10.-transform-value-11.webp)

- Below is a screenshot of the Preview Table that will show how it works -

![sum total of 2 columns](/images/column-settings/transform-value/11.-transform-value-12.webp)

By following this easy and simple guide, anyone can work with **Transform Value**!
