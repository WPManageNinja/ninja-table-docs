---
title: "Numeric Value"
description: "Use the Numeric value column type so numbers sort, filter and calculate as numbers, with US or European separators."
---

# Numeric Value

The **Numeric value** column type tells Ninja Tables that a column holds numbers. Sorting then works by value (2 before 10), and number rules in [Conditional formatting](/conditional-formatting) and formulas in [Transform value](/transform-value) can read the cells. Choosing the type is free; the **Separator style** option needs Pro.

## Set a column to Numeric value

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Numeric value**.
4. Click **Add column** or **Save column**.

![Column dialog with Type set to Numeric value](/images/field-types/numeric-value/1.-Column-Dialog-With-Type-Set.webp)

## Separator style (Pro)

With Pro, a **Separator style** setting appears under **Type**. It tells Ninja Tables how to read the numbers in this column for sorting, conditional formatting and formulas:

- **US style - decimal point (123,234.01)**: thousands separator `,` and decimal separator `.`.
- **European style - decimal comma (123.234,01)**: thousands separator `.` and decimal separator `,`.

Without Pro the setting is hidden and the column uses the US style (`,` for thousands, `.` for decimals). The setting only changes how numbers are read. It does not reformat them.

## Enter values

- **In the grid:** click a cell and type the number. Press **Enter** or click away to save.
- **In the row drawer:** type in the column's text box, then click **Add row** or **Update**. See [Working in Table Rows](/working-in-table-rows).

Type the number in the style you chose, for example `1,234.50` for US or `1.234,50` for European.

## How it looks on your site

Numbers show exactly as you typed them. Ninja Tables adds no thousands separators or decimals for you. To format a number, for example with a currency symbol, use [Transform value](/transform-value).

![Table with a numeric column sorted from low to high](/images/field-types/numeric-value/2.-Table-With-A-Numeric-Column-Sorted.webp)
