---
title: "Conditional Formatting"
description: "Conditional Formatting"
---

# Conditional Formatting

Conditions in table cells can change the column's data or highlight the specific cells you want your audience to focus on. Conditional formatting in Ninja Tables lets you add multiple conditions to table cells and the column/row the cell is in.

>[!Note]
> Conditional Formatting is a Pro Feature!

The cell value of the table changes in response to the conditions.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/navdcAmy7KU" title="Conditional Formatting Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## **Applying Conditional Formatting in Ninja Tables**

Read this simple guide to learn how to apply this feature.

- Firstly, you need to have a table designed beforehand.
- There are two methods to configure **Conditional Formatting**.

Go to the **Table Configuration** tab **→** Click on the **Edit** icon (Pencil Icon) on the right side of the tables columns and you will notice a drop-down.

![New Ui conditional formatting tab](/images/column-settings/conditional-formatting/1.-New-Ui-conditional-formatting-tab.webp)

- Or you can do it by going over any column name and pressing the **Edit** icon from the **Table** **Rows** tab.

![New Ui All tables configuration icon](/images/column-settings/conditional-formatting/2.-New-Ui-All-tables-configuration-icon.webp)

- After that, a pop-up window will appear with various interactive options. Go to the top bar for **Conditional Formatting**.

- Click on the **Conditional Formatting** tab. When you click the **Add** **Condition** button, multiple options to set conditions will appear with-

**If Cell Value** [Select] [Enter Value] **Then** [Select] [Enter Value].

![Ninja Tables Add Condition](/images/column-settings/conditional-formatting/3.-Ninja-Tables-Add-Condition.webp)

- Let’s set the conditions differently as **Equal, Not Equal, Contains, **and** Does not Contain**. Then, you need to set some trigger values and then set options for which conditions will be applied.

![Ninja Tables Conditions](/images/column-settings/conditional-formatting/4.-Ninja-Tables-Conditions.webp)

- From the 3rd box, you can set **Cell Options, Row Options,** and **Column Options** and apply the desired condition.

- If you select Cell Options, the condition will only apply to cells
- If you select Row Options, the condition will apply to the corresponding row
- And if you select Column Options, the conditions will change the corresponding column

![Set-cell-css-class](/images/column-settings/conditional-formatting/5.-Set-cell-css-class.webp)

![Ninja Tables column and row options](/images/column-settings/conditional-formatting/6.-Ninja-Tables-column-and-row-options.webp)

![Conditional formatting column options](/images/column-settings/conditional-formatting/7.-Conditional-formatting-column-options.webp)

Let's see how the conditions work.

- In this case, **If Cell Value** is Equal to **Male,** Then the **Set cell color** to red.
- Also, If **Cell Value** is **Equal** to Female, Then the **Set cell background** **color** to brown.
- Lastly, click on the **Update** button when the configuration is done.

![Ninja Tables added Conditions](/images/column-settings/conditional-formatting/8.-Ninja-Tables-added-Conditions.webp)

- After applying Conditional Formatting, the table will look like the below screenshot –

![Table Preview- conditional formatting added](/images/column-settings/conditional-formatting/9.-Table-Preview-conditional-formatting-add.webp)

### Highlight Table Cells With Conditions

Say you want your customers to pay attention to a specific product price. You can highlight the cell where the price is mentioned.

![highlighted cell](/images/column-settings/conditional-formatting/10.-highlighted-cell.webp)

### **Set Cell CSS class**

Let’s discuss another cell option, the Set Cell CSS class.

- First, set the Cell option as **Set cell CSS class** and enter a value name as **abc** (it will be a CSS class name).

![Ninja Tables cell CSS class](/images/column-settings/conditional-formatting/11.-Ninja-Tables-cell-CSS-class.webp)

- Then, navigate to the table’s **Custom CSS/JS** tab and write your CSS style. (It will apply to all of the Male values since it's the gender column)

- Click on the **Save Custom CSS** button after you are done.

![Ninja Tables Custom CSS](/images/column-settings/conditional-formatting/12.-Ninja-Tables-Custom-CSS.webp)

- See the preview of the table after adding the CSS.

![Preview Table](/images/column-settings/conditional-formatting/13.-Preview-Table.webp)

### **Conditional Formatting for Numeric Value** Data

When you select **Numeric Value** as a Data Type in column settings, there will be more options in **Cell** **Value**.

![COnditional formatting in data field](/images/column-settings/conditional-formatting/14.-Conditional-formatting-in-Numeric-value.webp)

- In the Age **Column**, if the Cell Value is Less Than **Or** Equal To **25**, Then **the** Set cell color (cell options) to maroon.

![Add numeric value condition](/images/column-settings/conditional-formatting/15.-Add-numeric-value-condition.webp)

- See how the conditions work in a column with numeric data. All cell data with a value less than or equal to 25 are colored in maroon.

![Numeric data types](/images/column-settings/conditional-formatting/16.-Numeric-data-types.webp)

### **Conditional Formatting in Date Field**

When you select Date Field as a Data Type in column settings, there will be more options in **Cell** **Value**.

Also, you need to take care of your **Date** **Format** in column settings because you will get the list of **Example Usage** in Conditional Formatting according to your chosen Date Format.

![Conditional formatting in data field](/images/column-settings/conditional-formatting/17.-COnditional-formatting-in-data-field.webp)

- Here is the list of Example Usage according to the chosen Date Format.

![Date format condition add](/images/column-settings/conditional-formatting/18.-Date-format-condition-add.webp)

- Here, if the Cell Value is **Less** **Than** Today’s Date **{date: MM/DD/YY}** (this date format is taken from the below Example usage list), Then the **Set** **cell** **color** will be changed to Blue.

![Add numeric condition](/images/column-settings/conditional-formatting/19.-Add-numeric-condition.webp)

- See the preview. The data with less than today's date are blue.

![Table preview numeric formatting](/images/column-settings/conditional-formatting/20.-Table-preview-numeric-formatting.webp)

### **Set Row CSS class**

Let’s talk about another row option, the Set row CSS class, and how it works.

- First, set the Row option as **Set row CSS class** and enter a value name as **hide** (it will be a CSS class name).

![Ninja Tables row css class](/images/column-settings/conditional-formatting/21.-Ninja-Tables-row-css-class.webp)

- Then, navigate to the table’s **Custom CSS/JS** tab and write your CSS style; it will apply to all of the dates which are less than Today’s Date values.

- At last, click on the **Save Custom CSS** button after you are done.

![Add Custom CSS for tables](/images/column-settings/conditional-formatting/22.-Add-Custom-CSS-for-tables.webp)

- Here in the preview, you can see the rest of the dates that are **less** **than** **today’s date** have been hidden here.

![Preview-Table-with custom css](/images/column-settings/conditional-formatting/23.-Preview-Table-with-custom-css.webp)

That’s how to set up **Conditional** **Column** **Formatting** in Tables!
