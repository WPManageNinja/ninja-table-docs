---
title: "Advanced Shortcode"
description: "Advanced Shortcode"
---

# Advanced Shortcode

You can apply an Advanced Shortcode to the Ninja Tables whenever needed.

## Basic Usage

You can use the shortcodes given below according to your needs:

```
[ninja_tables id='YOUR TABLE ID HERE']
```

## Advanced Usage of Ninja Tables Shortcode

A set of highly useful shortcodes is provided by **Ninja Tables,** where you can configure the features in the shortcode so that you can display the same table on a separate page/post in a different manner.

**Accessible Shortcode Parameters**

| **Shortcode Parameter** | **Description** |
|-------------------------|-----------------|
| per_page | You can specify how many rows will show in ninja tables per page. **Value Type:** Number |
| Search | You can enable or disable the search bar. **Possible Value:** 0 or 1 |
| sorting | You can enable/disable data sorting features. **Possible Value:** 0 or 1 |
| hide_header | You can show/hide the header row. **Possible Value:** 0 or 1 |
| logged_in_only | You can show a table only for logged-in users. **Value:** 0 or 1 (if value = 1 then the table can be visible only for logged-in users) |
| get_filter | You can set search filter from URL's get parameter. Provide the filter name and then Ninja Table will filter the table data from your browser's get parameter |
| filter | You can add the filter parameter as a pre-defined search value for the table |
| filter_column | You can specify in which column the "filter" will be applied. You have to provide the column key |
| hide_default_filter | If you use a filter parameter and want don't want to show hidden values even after resetting the filter in frontend then you can set this value as **'yes'** |
| columns | You can specify which columns key will show. Just specify the column keys as comma-separated values then those columns will show only. |
| filter_selects | If you use custom filters UI for your table and you can set pre-defined values for the select elements. Basic Usage: `filter_selects='FILTER_TITLE=defaultValue'`. If you want to add multiple pre-defined selected values you can do that like this: `filter_selects='FILTER_TITLE_1=defaultValue1\|FILTER_TITLE_2=defaultValue2'` |
| limit | If you want to limit the data then you use this parameter. Example: `limit='20'`. It will show only 20 rows from your table's data source. |
| skip | If you want to skip a few rows from your table's data source then you use this parameter. Example: `skip='10'`. It will skip the first 10 rows from your table's data source. |
| info | This parameter lets you show the table meta info after pagination. Example: `info='Current Page {CP} of {TP}'`. Placeholders: {CP} - The current page. {TP} - The total number of pages available. {PF} - The first-row number of the current page. **{PL}** - The last row number of the current page. **{TR}** - The total number of rows available. |

## **Examples of Shortcodes**

https://gist.github.com/techjewel/55703124534f1aba9b70cf0f605a793e

**Please Note that Advanced Shortcode is available only in the Pro Version of Ninja Tables**

### Date range filter- shortcode

Suppose you wish to primarily filter the date or date range if you have a table with a date column. This option is available in **NinjaTables version 3.5.8**. Use the date range filter with shortcode after upgrading your plugin to the latest version.

![Advanced shortcode](https://ninjatables.com/wp-content/uploads/2023/10/Advanced-shortcode-1024x307.png)

**To filter by date range:**

```
filter="~{date:M/D/YYYY}:{date:M/D/YYYY}"   filter_column="date"
```

**To filter the date before 7 days to the next 1 day:**

```
filter="~{date-7:M/D/YYYY}:{date+1:M/D/YYYY}"  filter_column="date"
```

**For greater than use:**

```
filter="{gt}{date:M/D/YYYY}"
```

**For Less Than use:**

```
filter="{lt}{date:M/D/YYYY}"
```

Use this on your shortcode. The shortcode filter column is used to choose the column you want to filter.

NB: The date format must be the same as the date format for the columns.

### Other Shortcodes - Table Info

Helper shortcode for ninja tables helps you to easily show the following information.

- title
- description
- total_rows // Will work only for the default table
- last_modified
- last_editor

**Usage:**

```
[ninja_table_info id='YOUR TABLE ID HERE' field="INFO_FIELD"]
```

**The following parameter can be used for field:**

- title
- description
- total_rows
- last_modified
- last_editor

### Table Cell Info

There are helper shortcodes where you can display your table cell data for a specific table.

**Usage:**

```
[ninja_table_cell id='YOUR TABLE ID HERE' row_id="YOUR_ROW_INDEX" column="YOUR_COLUMN_KEY"]
```

You will get the ROWID for default data source tables. But if you have a table with external data source or wp-posts / csv integration then your shortcode should look like this:

```
[ninja_table_cell id='YOUR TABLE ID HERE' row="YourROWID" column="YOUR_COLUMN_KEY"]
```

This shortcode will print out data from that particular cell data.

For the Row Index Number you have to click on this icon:

![advanced shortcode in table](https://ninjatables.com/wp-content/uploads/2023/01/advanced-shortcode-2.webp)

Above here for external data source table, the RowID would be the serial number of the table row
