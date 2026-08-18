---
title: "Custom Filters"
description: "Custom Filters"
---

# Custom Filters

Ninja Tables offers you a powerful feature known as **Custom Filters**, which lets you filter data from tables in various ways.

> [!Note]
> Custom Filter is a Pro Feature!

- First, go to the **Ninja Tables dashboard** and select a your table to add filters.
- Next, click the **Table Configuration** tab and pick **Custom Filters** from the left menubar.

![New Ui custom filter tab](/images/table-settings/custom-filters/1.-New-Ui-custom-filter-tab.webp)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J-SoDaUWHq0" title="Smart Filters with Custom Data Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add Custom Filters

- Click on the **Custom Filters**, there a new tab will open with an **Add New Filter** button.
- Now, click the **Add New Filter** button, then a pop-up form with a set of configuration options will appear.

![New Ui add custom filter](/images/table-settings/custom-filters/2.-New-Ui-add-custom-filter.webp)

This pop-up has various options to choose from to make your table’s filter more interactive. The following options can be found in the custom filter pop-up form -

### Filter Title

This input field is for the filter title, which determines the filter name.

### Filter Label

This input field is used if you want to add a label to your filter. Keep it blank if you don’t need any filter instructions in the frontend.

### Filter UI Type

You can choose the filter type to display the filter's base in the frontend. There are 8 subsets in the Filter UI type.

Such as:

- Select Dropdown
- Radio
- Checkbox
- Text Input
- Date Picker
- Date Range
- Number Range
- Reset Filter Button

![New Ui custom filter ui type](/images/table-settings/custom-filters/3.-New-Ui-custom-filter-ui-type.webp)

### Placeholder

The default placeholder is **All**. But if you want to change the text, you can type in your desired text.

### Value Type

Select How the value will be populated to the select dropdown. There are two types of Value types, including Manual Data and dynamic Data from the Table.

#### Manual Data

When you choose **Manual** **Data**, some options will appear below.

![manual data in custom filter](/images/table-settings/custom-filters/4.-custom-filters-5.webp)

##### Filter Options

This lets you place the value through which the filter will be implemented. Put your desired values to display on the frontend, be aware that those values need to match your cell data on that table. Filter options feature three sequential fields called **Label**, **Filter Value,** and **Action Button**.

- **Label:** The label of the filtered value is entered in the Label field.
- **Filter Value:** Put the value you want filtered in the Filter Value field.
- **Action Buttons:** There are 2 action buttons to add (+) and delete (bin icon) in each of the Label and Filter Value fields.

##### Dynamic Data from Table Column

When choosing Dynamic Data from Value Type, more options will appear below.
- **Target Column:** This option enables you to select the column that you want to populate data.

![dynamic data custom filter](/images/table-settings/custom-filters/5.-custom-filters-6.webp)

- **Parse Comma Separated Words:** If you enable this option, and you choose multiple value types, values will be shown with **Comma**.
- **Disable automatic filter Value sorting:** By default, value sorting is disabled. The value sorting option will also be **activated** if you select this option.
- If Disable automatic filter value sorting is unchecked, then two more options will appear below, such as **Sort Dynamic Value as & Sort Algorithm**.
- **Sort Dynamic Value as:** By this option, you can select either an **Ascending** order or **Descending** order.
- **Sort Algorithm:** You can sort the algorithm as a **text basis** or a **Numeric basis**.
- **Enable Multi-Select:** Enable this select field if you want to choose the multi-select value type.
- **Strict Mode:** Enable this mode if you want the results to be accurately matching the values.

### Filter Columns

This option is to pick the columns you wish to apply the filter. You can choose any single column, or you can pick multiple columns.

## Example of Custom Filters

Let's have a look at an example where you could better understand Custom Filters.

- If you have a table like this with a **numeric column** (data type must need to as Numeric Value) and you would like to include the option to filter by selecting the range, then you can quickly do it.

![custom filter on numeric column](/images/table-settings/custom-filters/6.-custom-filters-7.webp)

- You can add a new filter by selecting the Add New Filter button under Custom Filters. Next, enter a filter title, choose the filter UI type and value type, and provide the filter label and value in the filter options. Choose the Column to which you wish to apply the filter as well.

- Here, For Greater than = **{gt} yourValue**
- For Less than = **{lt} yourValue**
- From firstValue to lastValue **~firstValue: lastValue**
- Don't forget to click on the **Update** button when you are done with your configuration.

![select dropdown in custom filter](/images/table-settings/custom-filters/7.-custom-filters-8.webp)

### Filter Appearance

Once you've set the filter, go to the main "Custom Filter" tab.

You can choose any option in Filter Appearance between **Show Filter inputs as Inline** and **Show Filter inputs as Columns**.

![custom filter appearance](/images/table-settings/custom-filters/8.-custom-filters-9.webp)

- **Show Filter inputs as Inline:** It will show the filter inputs in a row.
- **Show Filter inputs as Columns**: The filter input area will be displayed as a column.
See how Filter Appearance works in the table.

![custom filter appearance](/images/table-settings/custom-filters/9.-custom-filters-10.webp)

Here's a WP Posts table created with Ninja Tables. It has custom filters enabled. The filter UI type is "checkbox." You can select a checkbox and the corresponding filter will apply to the table.

![custom filter appearance](/images/table-settings/custom-filters/custom-filters-11.webp)

## Progressive Filter

The user can filter any dynamic options in **Progressive Filter** to quickly access his specific requirements or desires. This option is enabled by default.

Let’s see how this works!

This is how you can use **Custom Filters** in the table step by step!
