---
title: "Custom Filters"
description: "Add dropdown, radio, checkbox, text, date and number-range filters above a table so visitors can narrow it to the rows they need (Pro)."
---

# Custom Filters

**Custom filters** (Pro) add controls above a table, such as a dropdown, a row of checkboxes, a date range or a number range, that visitors use to narrow the table to the rows they care about. They work on both the FooTable and DataTables engines, with all eight filter types.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J-SoDaUWHq0" title="Smart Filters with Custom Data Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Custom filters** tab.

Without Ninja Tables Pro, the tab shows an upgrade panel (**Unlock Custom Filters**). If Pro is active but too old, the tab says "Custom filters need a newer version of Ninja Tables Pro"; update Pro to use it.

<!-- TODO(screenshot): custom-filters-1
  screen: Tables › Employee Directory › Custom filters
  table: Employee Directory
  state: Custom filters tab with two filters in the list and the Layout card below
  highlight: Add Filter
  view: admin
  alt: Custom filters tab listing filters with Move up, Edit and Delete buttons
  blocked: Employee Directory has no saved filters and creating them means saving
-->

## Add a filter

1. On the **Custom filters** tab, click **Add Filter**. A table with no filters shows **No Filters Yet** and the same button.
2. The **New Filter** panel opens. Fill in the settings below.
3. Click **Add Filter** in the panel. The filter is saved straight away.

Each filter appears in the list as its name, then its type, target columns and number of options (or **Dynamic Data**). Use the arrows to **Move Up** or **Move Down** to set the order above the table, **Edit** to change one (then **Update Filter**), and the trash icon to delete it after you confirm. These changes save at once.

If something is missing, a message tells you what to fix:

- **Please Provide Filter Title**: every filter needs a title.
- **Please Provide Filter Options**: a filter needs at least one option row.
- **Please Select columns that you need to add filter**: every type except **Select Dropdown** and **Reset Filter Button** needs at least one column.
- **Please Select Target Column**: a dropdown that fills its choices from a column needs that column.

## Filter settings

![New Filter panel with the basic filter settings](/images/table-settings/custom-filters/2.-New-Filter-Panel-With-The-Basic.webp)

- **Filter Title**: a name to identify the filter in the list.
- **Filter Label**: the instruction shown next to the filter on your site. Leave it blank if you don't need one. Not shown for **Reset Filter Button**.
- **Filter UI Type**: how the filter looks on the site:
  - **Select Dropdown** (default)
  - **Radio**
  - **Checkbox**
  - **Text Input**
  - **Date Picker**
  - **Date Range**
  - **Number Range**
  - **Reset Filter Button**: a button that clears all filters.
- **Placeholder**: the default choice that resets the filter, for example `All` (new filters start with `All`). Shown for **Select Dropdown**, **Radio**, **Date Picker** and **Text Input**.
- **Button Text** (**Reset Filter Button** only): the label on the reset button.
- **Filter Columns**: the columns this filter looks in. You can pick one or several. Only columns of a matching type are offered: **Date Picker** and **Date Range** list **Date** columns, and **Number Range** lists **Number** columns. If there are none, the panel says "No columns of a matching data type were found for this filter." A dropdown that fills itself from a column doesn't ask for this.
- **Enable Strict Mode (Match The Exact Value)**: match the exact value only, instead of any cell that contains it. Shown for every type.

![Filter UI Type list with all eight filter types](/images/table-settings/custom-filters/3.-Filter-UI-Type-List-With-All.webp)

### Where the choices come from

For **Select Dropdown**, **Value Type** sets where the choices come from. **Radio** and **Checkbox** always use typed options.

- **Manual Data**: type each choice yourself under **Filter Options**, as a **Label** (what visitors see) and a **Filter Value** (what is matched). Your values must match the table's cell data. Drag the handle to reorder options, and use **Add Option** and **Remove Option**. The last remaining option can't be removed.
- **Dynamic Data From Table Column**: the choices are filled from a column's values.
  - **Target Column**: the column whose values fill the list.
  - **Parse Comma Separated Words**: split cells like `red, blue` into separate choices.
  - **Disable Automatic Filter Value Sorting**: keep the values in table order. When sorting is on, choose **Sort Dynamic Values** (**Ascending** or **Descending**) and the **Sort Algorithm** (**As Text** or **As Number**).

Values in typed options can contain placeholders such as `{date:Y-m-d}` or `{current_user_role}`, which are replaced with live values when the page loads. See [Placeholders](/shortcode-reference) for the list.

![Filter Options with a label and a filter value for each choice](/images/table-settings/custom-filters/4.-Filter-Options-With-A-Label.webp)

### More options by type

- **Enable Multi-Select** (**Select Dropdown**): visitors can pick more than one choice.
- **Date Filter Operator** (**Date Picker**): **On Or Before**, **Equal** or **On Or After**.
- **First Day Of The Week** (**Date Picker** and **Date Range**): the first day shown in the calendar, Sunday to Saturday.
- **From Placeholder** and **To Placeholder** (**Date Range** and **Number Range**): the hints in the two boxes.
- **Filter Prefix** (**Text Input**): text joined to what the visitor types before searching.

## Example: filter by price range

To let visitors filter a price list by range, the price column must be a **Number** column. Add a filter with **Filter UI Type** set to **Number Range** and pick the price column under **Filter Columns**.

<!-- TODO(screenshot): custom-filters-5
  screen: Tables › Product Price List › Custom filters
  table: Product Price List
  state: a published page showing a Number Range filter above the table
  highlight: -
  view: frontend
  alt: Table on a page with a price range filter above it
  blocked: no demo page has a Number Range filter (needs a saved filter)
-->

## Layout of the filters

The **Layout** card appears below the list once the table has at least one filter:

- **Show Filters**: **Inline** (side by side in one line) or **In Columns** (a grid). With **In Columns**, choose **Columns**: 2, 3 or 4.
- **Progressive Filters**: each filter only offers options that still have matching rows, based on what the visitor picked in the other filters.

<!-- TODO(screenshot): custom-filters-6
  screen: Tables › Employee Directory › Custom filters › Layout
  table: Employee Directory
  state: Layout card with Show Filters set to In Columns and Columns set to 3
  highlight: Show Filters
  view: admin
  alt: Layout card with filter display options
  blocked: Layout card only appears once a filter is saved
-->

The layout saves with the **Save** button at the top of the editor.

## Related

- Pre-filter a table from the shortcode, or from a link: [Default Data Filtering Shortcode](/default-data-filtering-shortcode) and [Advanced Shortcode](/advanced-shortcode), which also covers `filter_selects` to pre-select a filter's value.
- The search box: [Search Box](/add-or-remove-search-or-filter-functionality).
