---
title: "Conditional Formatting"
description: "Conditional Formatting"
---

# Conditional Formatting

Conditions in table cells can change the column's data or highlight the specific cells you want your audience to focus on. Conditional formatting in Ninja Tables lets you add multiple conditions to table cells and the column/row the cell is in.
Conditional Formatting is a Pro Feature!
The cell value of the table changes in response to the conditions.
## **Applying Conditional Formatting in Ninja Tables**
Read this simple guide to learn how to apply this feature.
- Firstly, you need to have a table designed beforehand.
- There are two methods to configure **Conditional Formatting**.

Go to the **Table Configuration** tab **→** Click on the **Edit** icon (Pencil Icon) on the right side of the tables columns and you will notice a drop-down.
![New Ui conditional formatting tab](https://ninjatables.com/wp-content/uploads/2025/05/New-Ui-conditional-formatting-tab-1024x712.webp)
- Or you can do it by going over any column name and pressing the **Edit** icon from the **Table** **Rows** tab.
![New Ui All tables configuration icon](https://ninjatables.com/wp-content/uploads/2025/05/New-Ui-All-tables-configuration-icon-1024x467.webp)
- After that, a pop-up window will appear with various interactive options. Go to the top bar for **Conditional Formatting**.
- Click on the **Conditional Formatting** tab. When you click the **Add** **Condition** button, multiple options to set conditions will appear with-

**If Cell Value** [Select] [Enter Value] **Then** [Select] [Enter Value].
![Ninja Tables Add Condition](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-Add-Condition-1024x210.png)
- Let’s set the conditions differently as **Equal, Not Equal, Contains, **and** Does not Contain**. Then, you need to set some trigger values and then set options for which conditions will be applied.
![Ninja Tables Conditions](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-Conditions-1024x240.png)
- From the 3rd box, you can set **Cell Options, Row Options, **and **Column Options **and apply the desired condition.

- If you select Cell Options, the condition will only apply to cells
- If you select Row Options, the condition will apply to the corresponding row
- And if you select Column Options, the conditions will change the corresponding column

![Set-cell-css-class](https://ninjatables.com/wp-content/uploads/2023/03/Set-cell-css-class.png)

![Ninja Tables column and row options](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-column-and-row-options-1024x333.png)
![Conditional formatting column options](https://ninjatables.com/wp-content/uploads/2023/03/Conditional-formatting-column-options.png)
Let's see how the conditions work.
- In this case, **If Cell Value** is Equal to **Male,** Then the **Set cell color** to red.
- Also,** If Cell Value** is **Equal** to Female, Then the **Set cell background** **color** to brown.
- Lastly, click on the **Update** button when the configuration is done.
![Ninja Tables added Conditions](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-added-Conditions-1024x262.png)
- After applying Conditional Formatting, the table will look like the below screenshot –
![Table Preview- conditional formatting added](https://ninjatables.com/wp-content/uploads/2023/03/Table-Preview-conditional-formatting-added-1024x977.png)
### Highlight Table Cells With Conditions
Say you want your customers to pay attention to a specific product price.
You can highlight the cell where the price is mentioned.
![highlighted cell](https://ninjatables.com/wp-content/uploads/2023/09/highlighted-cell-1024x488.png)
### **Set Cell CSS class**
Let’s discuss another cell option, the Set Cell CSS class.
- First, set the Cell option as **Set cell CSS class** and enter a value name as **abc** (it will be a CSS class name).
![Ninja Tables cell CSS class](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-cell-CSS-class-1024x214.png)
- Then, navigate to the table’s** Custom CSS/JS** tab and write your CSS style. (It will apply to all of the Male values since it's the gender column)
- Click on the** Save Custom CSS** button after you are done.
![Ninja Tables Custom CSS](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-Custom-CSS-1024x347.png)
- See the preview of the table after adding the CSS.
![Preview Table](https://ninjatables.com/wp-content/uploads/2023/03/Preview-Table-1024x785.png)
### **Conditional Formatting for Numeric Value** Data
When you select **Numeric Value** as a Data Type in column settings, there will be more options in **Cell** **Value**.
![COnditional formatting in data field](https://ninjatables.com/wp-content/uploads/2023/03/Conditional-formatting-in-Numeric-value-1024x284.png)
- In the **Age **Column**, if the Cell Value is Less Than **Or** Equal To **25**, Then **the** Set cell color** (cell options) to maroon.
![Add numeric value condition](https://ninjatables.com/wp-content/uploads/2023/03/Add-numeric-value-condition-1024x225.png)
- See how the conditions work in a column with numeric data. All cell data with a value less than or equal to 25 are colored in maroon.
![Numeric data types](https://ninjatables.com/wp-content/uploads/2023/03/Numeric-data-types-1024x704.png)
### **Conditional Formatting in Date Field**
When you select Date Field as a Data Type in column settings, there will be more options in **Cell** **Value**.
Also, you need to take care of your **Date** **Format** in column settings because you will get the list of **Example Usage** in Conditional Formatting according to your chosen Date Format.
![Conditional formatting in data field](https://ninjatables.com/wp-content/uploads/2023/03/COnditional-formatting-in-data-field-1024x519.png)
- Here is the list of Example Usage according to the chosen Date Format.
![Date format condition add](https://ninjatables.com/wp-content/uploads/2023/03/Date-format-condition-add-1024x387.png)
- Here, if the Cell Value is **Less** **Than** Today’s Date **{date: MM/DD/YY}** (this date format is taken from the below Example usage list), Then the **Set** **cell** **color** will be changed to Blue.
![Add numeric condition](https://ninjatables.com/wp-content/uploads/2023/03/Add-numeric-condition--1024x401.png)
- See the preview. The data with less than today's date are blue.
![Table preview numeric formatting](https://ninjatables.com/wp-content/uploads/2023/03/Table-preview-numeric-formatting-1024x295.png)
### **Set Row CSS class**
Let’s talk about another row option, the Set row CSS class, and how it works.
- First, set the Row option as **Set row CSS class** and enter a value name as **hide** (it will be a CSS class name).
![Ninja Tables row css class](https://ninjatables.com/wp-content/uploads/2023/03/Ninja-Tables-row-css-class-1024x389.png)
- Then, navigate to the table’s** Custom CSS/JS** tab and write your CSS style; it will apply to all of the dates which are less than Today’s Date values.
- At last, click on the** Save Custom CSS** button after you are done.
![Add Custom CSS for tables](https://ninjatables.com/wp-content/uploads/2023/03/Add-Custom-CSS-for-tables-1024x351.png)
- Here in the preview, you can see the rest of the dates that are **less** **than** **today’s** **date** have been hidden here.
![Preview-Table-with custom css](https://ninjatables.com/wp-content/uploads/2023/03/Preview-Table-with-custom-css-1024x220.png)
That’s how to set up **Conditional** **Column** **Formatting** in Tables!
