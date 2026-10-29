---
title: "Numeric Value"
description: "Use the Numeric value column type so numbers sort, filter and calculate as numbers, with US or European separators."
---

# Numeric Value

The **Numeric value** column type tells Ninja Tables that a column holds numbers. Sorting then works by value (2 before 10), and number rules in [Conditional formatting](/conditional-formatting) and formulas in [Transform value](/transform-value) can read the cells.

## Set a column to Numeric value

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Numeric value**.
4. Click **Add column** or **Save column**.

![Column type list](/images/field-types/numeric-value/1.-data-types.webp)

![Numeric value column](/images/field-types/numeric-value/2.-Numeric-Value.webp)

## Separator style (Pro)

With Pro, a **Separator style** setting appears under **Type**. It tells Ninja Tables how to read the numbers in this column for sorting and conditional formatting:

- **US style - decimal point (123,234.01)**
- **European style - decimal comma (123.234,01)**

![Separator style](/images/field-types/numeric-value/3.-Separator-style-in-numeric-value.webp)

This setting doesn't change how the numbers look in the table. They show exactly as you typed them.
