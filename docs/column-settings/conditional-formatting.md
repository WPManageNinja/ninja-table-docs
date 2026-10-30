---
title: "Conditional Formatting"
description: "Highlight cells, rows or columns automatically when a value matches a rule, using the Conditions tab of the column dialog (Pro)."
---

# Conditional Formatting

**Conditional formatting** (Pro) styles a cell, its row or its whole column when the cell's value matches a rule. Use it to color prices above a limit, flag overdue dates, or hide rows with a CSS class. You can add as many rules to a column as you need.

## Open the Conditions tab

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**.
2. Click the gear icon on the column you want to check, and choose **Column settings**.
3. Open the **Conditions** tab.

![Conditions tab with no rules](/images/column-settings/conditional-formatting/1.-Conditions-Tab-With-No-Rules.webp)

Without Pro, the tab shows **Conditional formatting is a Pro feature** and no rule builder.

## Add a rule

1. Click **Add rule**. A new **Rule** appears with two lines:
   - **If value** [condition] [value]
   - **Then** [action] [color or value]
2. Pick a condition and type the value to compare against.
3. Pick an action. If it needs a color, a color picker appears. If it needs text (a CSS class or new cell content), a text box appears. The **Reset** actions need no value.
4. Add more rules if you need them. Remove one with the trash icon next to its **Rule** number.
5. Click **Save column**.

![A conditional formatting rule with a condition and an action](/images/column-settings/conditional-formatting/2.-Conditional-Formatting-Rule-With-A-Condition.webp)

### Conditions

The list depends on the column type:

- **All columns**: **Equal**, **Not equal**
- **Text columns**: also **Contains**, **Does not contain**
- **Numeric value and Date field columns**: also **Less than**, **Greater than**, **Less than or equal to**, **Greater than or equal to**, and **Between (min and max)**. Between shows two boxes, **Min value** and **Max value**.

How they compare:

- **Equal** and **Not equal** compare the cell's content exactly, as it appears on the site including any HTML, and the case must match. `Male` does not equal `male` or `Male ` with a trailing space.
- **Contains** and **Does not contain** look for the text anywhere in the cell and are case-sensitive.
- The number and date conditions compare numbers: non-numeric characters are ignored, and the column's **Separator style** (Numeric value) or date format is used to read the value.
- **Between** is inclusive: a value equal to the minimum or the maximum matches.

Set the column's **Type** to **Numeric value** or **Date field** in the **Basic** tab first, or the extra conditions don't appear. See [Numeric value](/numeric-value) and [Date field](/date-field).

### Actions

Actions are grouped by what they change:

- **Cell options** change only the matching cell: **Set cell color**, **Set cell background color**, **Set cell content**, **Set cell CSS class**, **Reset cell color to default**, **Reset cell background color to default**, **Remove cell CSS class**.
- **Row options** change the whole row the cell is in: **Set row color**, **Set row background color**, **Set row CSS class**, **Reset row color to default**, **Reset row background color to default**, **Remove row CSS class**.
- **Column options** change the whole column: **Set column color**, **Set column background color**, **Add column CSS class**, **Remove column CSS class**.

**Set cell content** replaces the cell's value with new content. HTML is allowed.

![Action list grouped into cell, row and column options](/images/column-settings/conditional-formatting/3.-Action-List-Grouped-Into-Cell-Row.webp)

## Example: color cells by value

In a Gender column:

- **If value** **Equal** `Male` **Then** **Set cell color** to red.
- **If value** **Equal** `Female` **Then** **Set cell background color** to brown.

Click **Save column**, then preview the table.

<!-- TODO(screenshot): conditional-formatting-4
  screen: Preview of Employee Directory
  table: Employee Directory
  state: A column with cells colored by two conditional formatting rules
  highlight: -
  view: frontend
  alt: Table with cells colored by conditional formatting
  blocked: needs saved conditional formatting rules on Employee Directory (no saving allowed)
-->

## Example: add a CSS class

1. Choose **Set cell CSS class** and type a class name, for example `abc`.
2. Click **Save column**.
3. Open the table's **Custom CSS/JS** tab, write the CSS for `.abc`, and click **Save Custom CSS**.

The style now applies to every matching cell. See [Style a table with CSS selectors](/table-styling-css-selector).

## Example: numbers

On a **Numeric value** column such as Age: **If value** **Less than or equal to** `25` **Then** **Set cell color** to maroon. For a price band, use **Between (min and max)** with a **Min value** and a **Max value**.

## Date field columns and dynamic dates

On a **Date field** column, the Conditions tab shows a **Dynamic dates** box. These values are relative to today, so a rule keeps working as days pass. They use the column's date format, for example with `MM/DD/YY`:

| Value | Means |
|---|---|
| `{date:MM/DD/YY}` | Today's date |
| `{date+1:MM/DD/YY}` | Tomorrow's date |
| `{date-1:MM/DD/YY}` | Yesterday's date |
| `{date+10:MM/DD/YY}` | Date after 10 days |
| `{date-10:MM/DD/YY}` | Date before 10 days |

Set the date format in the **Basic** tab first. The Dynamic dates box always shows the values in the format you chose.

![Dynamic dates box on a Date field column](/images/column-settings/conditional-formatting/5.-Dynamic-Dates-Box-On-A-Date.webp)

For example: **If value** **Less than** `{date:MM/DD/YY}` **Then** **Set cell color** to blue. Every date before today turns blue.

### Other placeholders

The value box also accepts the other Ninja Tables placeholders, such as `{user:field}`, `{usermeta:key}`, `{current_post_id}`, `{current_post_title}` and `{current_user_role}`. They are filled in when the page loads, so a rule can depend on the logged-in user or the page. See [Shortcode reference](/shortcode-reference).

## Example: hide past rows with a row CSS class

1. On a Date field column, add the rule **If value** **Less than** `{date:MM/DD/YY}` **Then** **Set row CSS class** `hide`.
2. Click **Save column**.
3. In the **Custom CSS/JS** tab, add CSS that hides `.hide`, and click **Save Custom CSS**.

Rows with a date before today are now hidden on your site.
