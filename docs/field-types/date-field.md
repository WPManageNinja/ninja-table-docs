---
title: "Date Field"
description: "Use the Date field column type to pick dates from a calendar, choose a standard or custom format, and add an optional time."
---

# Date Field

The **Date field** column type stores dates. When you edit a cell, a calendar date picker opens, and the date shows in the format you choose. Date columns also sort by date and work with date rules in [Conditional formatting](/conditional-formatting). The type is free; the **Custom** date format needs Pro.

## Set a column to Date field

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Date field**. The date settings appear below it.
4. Click **Add column** or **Save column**.

![Column dialog with Type set to Date field](/images/field-types/date-field/1.-Column-Dialog-With-Type-Set.webp)

## Date format

Choose **Standard** or **Custom** (Pro). The format decides how the date is stored, shown in the picker and shown on your site.

### Standard

Pick a built-in format from the list. Each option shows an example and its pattern:

| Example | Format |
| --- | --- |
| 4/28/2018 | `M/D/YYYY` |
| 4/28/18 | `M/D/YY` |
| 04/28/18 | `MM/DD/YY` |
| 04/28/2018 | `MM/DD/YYYY` |
| Apr/28/2018 | `MMM/DD/YYYY` |
| 18/04/28 | `YY/MM/DD` |
| 2018-04-28 | `YYYY-MM-DD` |
| 28-Apr-18 | `DD-MMM-YY` |

If you leave the list on **Select a format**, dates use `MM/DD/YYYY`.

### Custom (Pro)

Type any [moment.js](https://momentjs.com/docs/#/displaying/format/) format in the box, for example `dddd, MMMM Do YYYY`. Useful tokens: `D` day, `MMM` short month, `YYYY` year, `dddd` weekday. Without Pro, clicking **Custom** opens the Pro upgrade popup and the format stays on **Standard**.

![Custom date format box in the Date field settings](/images/field-types/date-field/2.-Custom-Date-Format-Box.webp)

## Show time

Turn on **Show time** to add a time picker when editing and show the time after the date. Then choose a **Time format**. The pattern is added to the end of the date format.

| Example | Format |
| --- | --- |
| 4:8 am/pm | `h:m a` |
| 4:8:2 am/pm | `h:m:s a` |
| 04:08 am/pm | `hh:mm a` |
| 04:08:12 am/pm | `hh:mm:ss a` |
| 4:8 AM/PM | `h:m A` |
| 4:8:2 AM/PM | `h:m:s A` |
| 04:08 AM/PM | `hh:mm A` |
| 04:08:12 AM/PM | `hh:mm:ss A` |
| 1:8 (24-hour) | `H:m` |
| 1:8:2 (24-hour) | `H:m:s` |
| 01:08 (24-hour) | `HH:mm` |
| 01:08:12 (24-hour) | `HH:mm:ss` |

## First day of the week

Choose where the week starts in the date picker, from **Sunday** to **Saturday**.

## Enter values

- **In the grid:** click a cell and pick a day from the calendar.
- **In the row drawer:** click **Add data**, or the pencil icon on a row, and pick a day in the column's date field. Click **Add row** or **Update** to save. See [Working in Table Rows](/working-in-table-rows).

![Calendar date picker open on a Date field cell](/images/field-types/date-field/3.-Calendar-Date-Picker-Open.webp)

## How it looks on your site

The picker saves the date in the format you chose, and visitors see it exactly like that, for example *Apr/28/2018* with `MMM/DD/YYYY`.

![Table with a Date field column in the chosen format](/images/field-types/date-field/4.-Table-With-A-Date-Field-Column.webp)
