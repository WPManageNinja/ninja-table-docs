---
title: "Advanced Shortcode"
description: "Advanced Shortcode"
---

# Advanced Shortcode

You can apply an Advanced Shortcode to the Ninja Tables whenever needed.
## Basic Usage
You can use the shortcodes given below according to your needs:
`[ninja_tables id='YOUR TABLE ID HERE']﻿`
## Advanced Usage of Ninja Tables Shortcode
A set of highly useful shortcodes is provided by **Ninja Tables,** where you can configure the features in the shortcode so that you can display the same table on a separate page/post in a different manner.
**Accessible Shortcode Parameters**
<style>tbody tr td:first-child { border-right: 1px solid rgb(222, 222, 222) !important;} code { background: rgb(128, 128, 128); color: rgb(255, 255, 255); padding: 20px; display: block; margin: 15px 0px; } table { word-break: break-word; }</style>
<table><tbody><tr><td>**Shortcode Parameter**</td><td>**Description**</td></tr><tr><td>per_page</td><td>You can specify how many rows  will show in ninja tables per page<br>**Value Type:** Number</td></tr><tr><td>Search</td><td>You can enable or disable the search bar<br>**Possible Value:** 0 or 1</td></tr><tr><td>sorting</td><td>You can enable/disable data sorting features <br>**Possible Value:** 0 or 1</td></tr><tr><td>hide_header</td><td>You can show/hide the header row<br>**Possible Value:** 0 or 1<br></td></tr><tr><td>logged_in_only</td><td>You can show a table only for logged-in users.<br>**Value:** 0 or 1 <br>( if value = 1 then the table can be visible only for logged-in users )</td></tr><tr><td>get_filter</td><td>You can set search filter from URL's get parameter<br>Provide the filter name and then Ninja Table will filter the table data from your browser's get parameter</td></tr><tr><td>filter</td><td>You can add the filter parameter as a pre-defined search value for the table</td></tr><tr><td>filter_column</td><td>You can specify in which column the "filter" will be applied. You have to provide the column key</td></tr><tr><td>hide_default_filter</td><td>If you use a filter parameter and want don't want to show hidden values even after resetting the filter in frontend then you can set this value as **'yes'**</td></tr><tr><td>columns</td><td>You can specify which columns key will show. Just specify the column keys as comma-separated values then those columns will show only.</td></tr><tr><td>filter_selects</td><td>If you use custom filters UI for your table and you can set pre-defined values for the select elements.<br>Basic Usage: filter_selects='FILTER_TITLE=defaultValue'<br><br>If you want to add multiple pre-defined selected values you can do that like this:<br><br>filter_selects='FILTER_TITLE_1=defaultValue1|FILTER_TITLE_2=defaultValue2'</td></tr><tr><td>limit</td><td>If you want to limit the data then you use this parameter. <br>Example: limit='20'<br>It will show only 20 rows from your table's data source.</td></tr><tr><td>skip</td><td>If you want to skip a few rows from your table's data source then you use this parameter.<br>Example: skip='10' <br>It will skip the first 10 rows from your table's data source.</td></tr><tr><td>info</td><td>This parameter lets you show the table meta info after pagination. <br>Example: info='Current Page {CP} of {TP}'<br><br>Placeholders: <br>{CP} - The current page.<br>{TP} - The total number of pages available.<br>{PF} - The first-row number of the current page.<br>**{PL}** - The last row number of the current page.<br>**{TR}** - The total number of rows available.</td></tr></tbody></table>
## **Examples of Shortcodes**
<script src="https://gist.github.com/techjewel/55703124534f1aba9b70cf0f605a793e.js"></script>
https://gist.github.com/techjewel/55703124534f1aba9b70cf0f605a793e
**Please Note that Advanced Shortcode is available only in the Pro Version of Ninja Tables**
### Date range filter- shortcode
Suppose you wish to primarily filter the date or date range if you have a table with a date column. This option is available in **NinjaTables version 3.5.8**. Use the date range filter with shortcode after upgrading your plugin to the latest version.
![Advanced shortcode](https://ninjatables.com/wp-content/uploads/2023/10/Advanced-shortcode-1024x307.png)
**To filter by date range:**<br>`filter="~{date:M/D/YYYY}:{date:M/D/YYYY}"   filter_column="date"`<br>**To filter the date before 7 days to the next 1 day:**<br>`filter="~{date-7:M/D/YYYY}:{date+1:M/D/YYYY}"  filter_column="date"`<br>**For greater than use:**<br>`filter="{gt}{date:M/D/YYYY}"`<br>**For Less Than use:**<br>`filter="{lt}{date:M/D/YYYY}"`<br>
Use this on your shortcode. The shortcode filter column is used to choose the column you want to filter.<br>NB: The date format must be the same as the date format for the columns.
### Other Shortcodes - Table Info
Helper shortcode for ninja tables helps you to easily show the following information.
- title
- description
- total_rows // Will work only for the default table
- last_modified
- last_editor
**Usage:**
`[ninja_table_info id='YOUR TABLE ID HERE' field="INFO_FIELD"]` 
**The following parameter can be used for field: **
title 
description 
total_rows 
last_modified 
last_editor</pre>
### Table Cell Info
<p>There are helper shortcodes where you can display your table cell data for a specific table.
**Usage:**
`[ninja_table_cell id='YOUR TABLE ID HERE' row_id="YOUR_ROW_INDEX" column="YOUR_COLUMN_KEY"]` 
You will get the ROWID for default data source tables. But if you have a table with external data source or wp-posts / csv integration then your shortcode should look like this: 
`[ninja_table_cell id='YOUR TABLE ID HERE' row="YourROWID" column="YOUR_COLUMN_KEY"]` </pre>
<p>This shortcode will print out data from that particular cell data.
For the Row Index Number you have to click on this icon:
</pre>
![advanced shortcode in table](https://ninjatables.com/wp-content/uploads/2023/01/advanced-shortcode-2.webp)
<p>
<pre id="block-23cdbd78-ebb3-4666-a763-e9f0794a30cf" class="wp-block-preformatted has-background" style="background-color:#f5e3c170">Above here for external data source table,the RowID would be the serial number of the table row</pre>
