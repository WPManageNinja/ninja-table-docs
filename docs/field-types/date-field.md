---
title: "Date Field"
description: "Use the Date field column type to pick dates from a calendar, choose a standard or custom format, and add an optional time."
---

# Date Field

The **Date field** column type stores dates. When you edit a cell, a calendar date picker opens, and the date shows in the format you choose. Date columns also sort by date and work with date rules in [Conditional formatting](/conditional-formatting).

## Set a column to Date field

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Date field**. The date settings appear below it.
4. Click **Add column** or **Save column**.

![Date field column settings](/images/field-types/date-field/1.-Date-field-in-column.webp)

To fill in a date, click a cell in the grid or open the row drawer, then pick a day from the calendar.

![Date picker in Table Rows](/images/field-types/date-field/2.-custom-date-field.webp)

## Date format

Choose **Standard** or **Custom** (Pro).

### Standard

Pick one of the built-in formats from the list. Each option shows an example, such as `Apr/28/2018 (MMM/DD/YYYY)`:

- `M/D/YYYY`, `M/D/YY`, `MM/DD/YY`, `MM/DD/YYYY`
- `MMM/DD/YYYY`, `YY/MM/DD`, `YYYY-MM-DD`, `DD-MMM-YY`

![Standard date formats](/images/field-types/date-field/3.-standard-date-field.webp)

The format you choose decides how dates appear in the table. For example, with `MMM/DD/YYYY`, a date picked from the calendar shows as *Apr/28/2018*.

![Date format selected](/images/field-types/date-field/4.-date-format.webp)

![Date shown in the chosen format](/images/field-types/date-field/5.-custom-date-format.webp)

### Custom (Pro)

Type any [moment.js](https://momentjs.com/docs/#/displaying/format/) format, for example `dddd, MMMM Do YYYY`. Useful tokens: `D` day, `MMM` short month, `YYYY` year, `dddd` weekday.

## Show time

Turn on **Show time** to add a time picker when editing and show the time in the table. Then choose a **Time format**, such as `hh:mm A` (04:08 AM/PM) or `HH:mm` (01:08 in 24-hour time). There are 12 formats to choose from.

![Time format](/images/field-types/date-field/6.-Time-format.webp)

## First day of the week

Choose where the week starts in the date picker, for example **Sunday** or **Monday**.
