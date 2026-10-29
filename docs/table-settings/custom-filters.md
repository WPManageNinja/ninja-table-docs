---
title: "Custom Filters"
description: "Add dropdown, checkbox, radio, text, date and number-range filters above a table so visitors can narrow it to the rows they need (Pro)."
---

# Custom Filters

**Custom filters** (Pro) add controls above a table, such as a dropdown, a row of checkboxes, a date range or a number range, that visitors use to narrow the table to the rows they care about. They work on both the FooTable and DataTables engines.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J-SoDaUWHq0" title="Smart Filters with Custom Data Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add a filter

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Custom filters** tab.
3. Click **Add filter**. The **New filter** panel opens.
4. Fill in the filter settings below and click **Add filter**. The filter is saved straight away.

![Custom filters tab](/images/table-settings/custom-filters/1.-New-Ui-custom-filter-tab.webp)

Each filter appears in the list with its name, type and target columns. Use **Move up** and **Move down** to change the order they appear above the table, **Edit** to change one (then **Update filter**), and **Delete** to remove it. These changes save at once.

## Filter settings

![Add a custom filter](/images/table-settings/custom-filters/2.-New-Ui-add-custom-filter.webp)

- **Filter title**: a name to identify the filter in the list.
- **Filter label**: the instruction shown next to the filter on your site. Leave it blank if you don't need one.
- **Filter UI type**: how the filter looks on the site:
  - **Select dropdown**
  - **Radio**
  - **Checkbox**
  - **Text input**
  - **Date picker**
  - **Date range**
  - **Number range**
  - **Reset filter button**: a button that clears all filters.
- **Placeholder**: the default choice that resets the filter, for example `All`.
- **Filter columns**: the columns this filter looks in. You can pick one or several. Only columns of a matching type are offered (for example, number ranges need **Number** columns and date filters need **Date** columns).

![Filter UI type](/images/table-settings/custom-filters/3.-New-Ui-custom-filter-ui-type.webp)

### Where the choices come from

For dropdown, radio and checkbox filters, **Value type** sets where the choices come from:

- **Manual data**: type each choice yourself under **Filter options**, as a **Label** (what visitors see) and a **Filter value** (what is matched). Your values must match the table's cell data. Drag options to reorder them, and use **Add option** / **Remove option**.
- **Dynamic data from table column**: the choices are filled from a column's values.
  - **Target column**: the column whose values fill the list.
  - **Parse comma separated words**: split cells like `red, blue` into separate choices.
  - **Disable automatic filter value sorting**: keep the values in table order. When sorting is on, choose **Sort dynamic values** (**Ascending** / **Descending**) and the **Sort algorithm** (**As text** / **As number**).

![Manual filter options](/images/table-settings/custom-filters/4.-custom-filters-5.webp)

### More options

- **Enable multi-select**: visitors can pick more than one choice.
- **Enable strict mode**: match the exact value only, instead of any cell that contains it.
- **Date filter operator** (date picker): **On or before**, **Equal** or **On or after**, plus the **First day of the week** in the calendar.
- **From placeholder** / **To placeholder** (date and number ranges): the hints in the two boxes.
- **Filter prefix** (text input): text joined to what the visitor types before searching.

## Example: filter by price range

To let visitors filter a price list by range, the price column must be a **Number** column. Add a filter with **Filter UI type** set to **Number range** and pick the price column under **Filter columns**.

![Number range filter](/images/table-settings/custom-filters/6.-custom-filters-7.webp)

## Layout of the filters

Below the filter list:

- **Show filters**: **Inline** (side by side in one line) or **In columns** (a grid). With **In columns**, choose **Columns**: two, three or four.
- **Progressive filters**: each filter only offers options that still have matching rows, based on what the visitor picked in the other filters.

![Filter appearance](/images/table-settings/custom-filters/8.-custom-filters-9.webp)

The layout saves with the **Save** button at the top of the editor.

## Related

- Pre-filter a table from the shortcode, or from a link: [Default Data Filtering Shortcode](/default-data-filtering-shortcode) and [Advanced Shortcode](/advanced-shortcode).
- The search box: [Search Box](/add-or-remove-search-or-filter-functionality).
