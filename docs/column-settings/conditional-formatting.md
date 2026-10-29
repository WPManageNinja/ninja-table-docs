---
title: "Conditional Formatting"
description: "Highlight cells, rows or columns automatically when a value matches a rule, using the Conditions tab of the column dialog (Pro)."
---

# Conditional Formatting

**Conditional formatting** (Pro) styles a cell, its row or its whole column when the cell's value matches a rule. Use it to color prices above a limit, flag overdue dates, or hide rows with a CSS class. You can add as many rules to a column as you need.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/navdcAmy7KU" title="Conditional Formatting Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Open the Conditions tab

1. Go to **Tables** › your table › **Table Rows**.
2. Click the gear icon on the column you want to check, and choose **Column settings**.
3. Open the **Conditions** tab.

![Conditions tab in the column dialog](/images/column-settings/conditional-formatting/1.-New-Ui-conditional-formatting-tab.webp)

![Column settings in the column header](/images/column-settings/conditional-formatting/2.-New-Ui-All-tables-configuration-icon.webp)

## Add a rule

1. Click **Add rule**. A new **Rule** appears with two lines:
   - **If value** [condition] [value]
   - **Then** [action] [color or value]
2. Pick a condition and type the value to compare against.
3. Pick an action. If it needs a color, a color picker appears. If it needs text (a CSS class or new cell content), a text box appears.
4. Add more rules if you need them. Remove one with the trash icon next to its **Rule** number.
5. Click **Save column**.

![Add a rule](/images/column-settings/conditional-formatting/3.-Ninja-Tables-Add-Condition.webp)

### Conditions

The list depends on the column type:

- **All columns:** **Equal**, **Not equal**
- **Text columns:** also **Contains**, **Does not contain**
- **Numeric value and Date field columns:** also **Less than**, **Greater than**, **Less than or equal to**, **Greater than or equal to**, and **Between (min and max)**. Between shows two boxes, **Min value** and **Max value**.

![Condition list](/images/column-settings/conditional-formatting/4.-Ninja-Tables-Conditions.webp)

### Actions

Actions are grouped by what they change:

- **Cell options** change only the matching cell: **Set cell color**, **Set cell background color**, **Set cell content**, **Set cell CSS class**, **Reset cell color to default**, **Reset cell background color to default**, **Remove cell CSS class**.
- **Row options** change the whole row the cell is in: **Set row color**, **Set row background color**, **Set row CSS class**, **Reset row color to default**, **Reset row background color to default**, **Remove row CSS class**.
- **Column options** change the whole column: **Set column color**, **Set column background color**, **Add column CSS class**, **Remove column CSS class**.

**Set cell content** replaces the cell's value with new content. HTML is allowed.

![Set cell CSS class](/images/column-settings/conditional-formatting/5.-Set-cell-css-class.webp)

![Row and column options](/images/column-settings/conditional-formatting/6.-Ninja-Tables-column-and-row-options.webp)

![Column options](/images/column-settings/conditional-formatting/7.-Conditional-formatting-column-options.webp)

## Example: color cells by value

In a Gender column:

- **If value** **Equal** `Male` **Then** **Set cell color** to red.
- **If value** **Equal** `Female` **Then** **Set cell background color** to brown.

Click **Save column**, then preview the table.

![Rules added](/images/column-settings/conditional-formatting/8.-Ninja-Tables-added-Conditions.webp)

![Table preview with conditional formatting](/images/column-settings/conditional-formatting/9.-Table-Preview-conditional-formatting-add.webp)

You can use the same approach to make a single price stand out:

![Highlighted cell](/images/column-settings/conditional-formatting/10.-highlighted-cell.webp)

## Example: add a CSS class

1. Choose **Set cell CSS class** and type a class name, for example `abc`.
2. Click **Save column**.
3. Open the table's **Custom CSS/JS** tab, write the CSS for `.abc`, and click **Save Custom CSS**.

![Cell CSS class](/images/column-settings/conditional-formatting/11.-Ninja-Tables-cell-CSS-class.webp)

![Custom CSS](/images/column-settings/conditional-formatting/12.-Ninja-Tables-Custom-CSS.webp)

The style now applies to every matching cell.

![Table preview with the CSS class](/images/column-settings/conditional-formatting/13.-Preview-Table.webp)

## Numeric value columns

Set the column's **Type** to **Numeric value** to compare numbers. The extra conditions (less than, greater than, between) then appear.

![Number conditions](/images/column-settings/conditional-formatting/14.-Conditional-formatting-in-Numeric-value.webp)

For example, in an Age column: **If value** **Less than or equal to** `25` **Then** **Set cell color** to maroon.

![Number rule](/images/column-settings/conditional-formatting/15.-Add-numeric-value-condition.webp)

![Number rule result](/images/column-settings/conditional-formatting/16.-Numeric-data-types.webp)

## Date field columns and dynamic dates

On a **Date field** column, the Conditions tab shows a **Dynamic dates** box. These values are relative to today, so a rule keeps working as days pass. They use the column's date format, for example with `MM/DD/YY`:

| Value | Means |
|---|---|
| `{date:MM/DD/YY}` | Today's date |
| `{date+1:MM/DD/YY}` | Tomorrow's date |
| `{date-1:MM/DD/YY}` | Yesterday's date |
| `{date+10:MM/DD/YY}` | Date after 10 days |
| `{date-10:MM/DD/YY}` | Date before 10 days |

Set the date format in the **Basic** tab first. The Dynamic dates box always shows the values in the format you chose. See [Date field](/date-field).

![Date column conditions](/images/column-settings/conditional-formatting/17.-COnditional-formatting-in-data-field.webp)

![Dynamic dates list](/images/column-settings/conditional-formatting/18.-Date-format-condition-add.webp)

For example: **If value** **Less than** `{date:MM/DD/YY}` **Then** **Set cell color** to blue. Every date before today turns blue.

![Date rule](/images/column-settings/conditional-formatting/19.-Add-numeric-condition.webp)

![Date rule result](/images/column-settings/conditional-formatting/20.-Table-preview-numeric-formatting.webp)

## Example: hide past rows with a row CSS class

1. On a Date field column, add the rule **If value** **Less than** `{date:MM/DD/YY}` **Then** **Set row CSS class** `hide`.
2. Click **Save column**.
3. In the **Custom CSS/JS** tab, add CSS that hides `.hide`, and click **Save Custom CSS**.

![Row CSS class](/images/column-settings/conditional-formatting/21.-Ninja-Tables-row-css-class.webp)

![Custom CSS for the row class](/images/column-settings/conditional-formatting/22.-Add-Custom-CSS-for-tables.webp)

Rows with a date before today are now hidden on your site.

![Table preview with hidden rows](/images/column-settings/conditional-formatting/23.-Preview-Table-with-custom-css.webp)
