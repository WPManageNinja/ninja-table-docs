---
title: "Ninja Charts Hooks, Filters and Access"
description: "Developer reference for Ninja Charts: who can create and view charts, the [ninja_charts] shortcode, every action and filter, import and data limits, responsive breakpoints and the REST routes."
---

# Ninja Charts Hooks, Filters and Access

Ninja Charts has a small set of WordPress **actions** and **filters**, a single shortcode, and a REST API that the admin screens use. This page lists who can do what, what the shortcode outputs, every hook with its parameters, the limits the plugin enforces, and the routes behind the admin. Add the code to your child theme's `functions.php`, a code-snippets plugin or an mu-plugin.

For the Ninja Tables equivalent, see [Hooks & Filters](/guide/advanced-features/hooks-and-filters). To place a chart on a page without code, see [Add a chart to a page](/guide/ninja-charts/embed-ninja-charts).

## Who can do what

Ninja Charts has no chart owners and no per-chart permissions. One capability check decides everything in the admin.

- **With Ninja Tables active**, the check is the Ninja Tables manager role (`ninja_table_admin_role()`). Administrators always pass. Other roles pass only if you add them with the `ninja_table_admin_role` filter or in Ninja Tables permissions. See [Define Permission for Table Users](/guide/table-management/define-permission-for-table-users).
- **Without Ninja Tables**, the check is the `manage_options` capability, which only administrators have.

A user who passes can open the **Ninja Charts** menu, create, edit, duplicate, delete, preview and export **every** chart on the site. A user who does not pass cannot see the menu, and every admin REST route answers with an authorization error. Charts are not tied to the user who created them, so there is no "my charts" view.

The 3.4.1 release ("prevent unauthorized access to other users' charts") is this check. Every chart route and every source route sits behind it, so visitors and logged-in users without the role cannot list, read, change, delete, duplicate or export charts through the API.

| Action | Who | How it is checked |
|---|---|---|
| Open the Ninja Charts screens | Manager role | Menu capability |
| List, read, create, update, duplicate, delete charts | Manager role | `UserPolicy` on every chart route |
| Export a chart as CSV | Manager role | `UserPolicy` on `charts/{id}/export-csv` |
| Load tables, forms and columns to build a chart | Manager role, logged in | `SourcePolicy` on the source routes |
| Open the full-page preview (`?ninjatchart_preview=ID`) | Manager role | Capability check, otherwise the page does not load |
| See a chart on the site | Anyone who can see the page | None. The shortcode and block are public |
| Load a chart's data on the site | Anyone with the page's nonce | Nonce tied to the chart ID, 60 requests per minute per IP |

Because the front-end chart is public, treat the data in a chart as public. Do not chart data you would not show to every visitor of the page.

## The shortcode

```
[ninja_charts id="12"]
```

Only `id` is read. Any other attribute is ignored.

**What it renders.** The plugin looks up the chart and renders the engine that was saved with it.

- **Chart.js** charts print a container `div` with a `canvas` inside it.
- **Google Charts** charts print a container `div` that Google Charts draws into.

In both cases the container carries `data-id`, `data-uniqid` and `data-nonce` attributes. The page script then requests the chart's data from `admin-ajax.php` (action `ninja_charts_get_data`, GET only, with `chart_id` and `nonce`). The nonce is created per chart, so one chart's nonce cannot read another chart.

The container takes its height, width, background, border and border radius from the chart's saved settings. Tablet and phone heights are applied with media queries, see [Responsive breakpoints](#responsive-breakpoints).

**Error output.** If the ID is missing, not a number, or no chart has that ID, the shortcode prints the plain text `Invalid ShortCode...!`. If the saved engine is not `chart_js` or `google_charts`, it prints nothing.

The data request can answer with these messages (JSON, `success: false`):

| Status | Message | Cause |
|---|---|---|
| 405 | Invalid request method | Not a GET request |
| 429 | Too many requests | More than 60 requests per minute from one IP |
| 400 | Chart ID is required | No `chart_id` |
| 400 | Security check failed | Missing or wrong nonce, often a cached page with an old nonce |
| 400 | (data source message) | The chart's data source is not available, for example Ninja Tables is deactivated |
| 422 | No chart data could be generated for the given configuration | The source has no usable data |
| 404 | Chart not found | The chart was deleted |

**Assets.** Scripts are loaded only on pages that contain a chart, in the footer.

| Engine | Scripts loaded |
|---|---|
| Both | Chart loader, device settings (`ninja-charts-device`), hover settings (`ninja-charts-hover`) |
| Chart.js | Chart.js 4.4.2, data labels 2.0.0, funnel 4.2.0, then the chart render script. The PDF library (jsPDF 2.5.1) is registered and loaded only when a visitor exports a PDF |
| Google Charts | The Google Charts loader, then the Google render script |

The **Ninja Chart** block (added in 3.4.0) is independent from the shortcode. It saves its own settings in the post and shares only the device script with the shortcode, so a page with both loads that file once.

### Cached pages

The nonce is printed into the page HTML. If a page cache keeps that HTML longer than the WordPress nonce lifetime (up to 24 hours), the data request answers `Security check failed` and the chart stays empty. Keep the cache lifetime of chart pages under 12 hours, or exclude them from page caching.

## Actions and filters

Names ending in `_` (a trailing underscore) are spelled exactly like that in the plugin code.

### Chart lifecycle (actions)

| Hook | Fires | Parameters |
|---|---|---|
| `ninjacharts_loaded` | On `plugins_loaded`, after the plugin boots | `$app` (the plugin application object) |
| `ninja_charts_before_chart_save_or_update` | Before a chart is created or updated | `$data` (array, the sanitized request) |
| `ninja_charts_after_chart_save_or_update` | After the chart is saved | `$chart` (the saved chart model) |
| `ninja_charts_before_chart_duplicate` | Before a chart is copied | `$id` (ID of the source chart) |
| `ninja_charts_after_chart_clone` | After the copy is saved | `$chart` (the new chart model) |
| `ninja_charts_before_chart_delete` | Once, before a delete request removes charts | `$ids` (array of chart IDs) |
| `ninja_charts_chart_deleted` | After each chart is deleted | `$id` (the deleted chart ID) |
| `ninja_charts_shortcode_assets_loaded` | Each time a shortcode chart enqueues its scripts | None |

The save hooks fire for creates, updates and CSV imports alike. Use the model's `id` to tell a new chart from an update.

```php
// Clear your own cache when a chart changes or is removed.
add_action('ninja_charts_after_chart_save_or_update', function ($chart) {
    delete_transient('my_chart_cache_' . $chart->id);
});

add_action('ninja_charts_chart_deleted', function ($id) {
    delete_transient('my_chart_cache_' . $id);
});

// Load your own script right after a chart's scripts.
add_action('ninja_charts_shortcode_assets_loaded', function () {
    wp_enqueue_script('my-chart-tweaks', get_stylesheet_directory_uri() . '/chart-tweaks.js', ['chartjs'], '1.0', true);
});
```

`ninja_charts_shortcode_assets_loaded` fires only for shortcode charts, once per chart on the page, and only after the engine's scripts are enqueued. It does not fire for the block.

### Editor and admin (filters)

| Hook | Parameters | Return |
|---|---|---|
| `ninja_charts_editor_available_charts` | `$charts` (array of `['value' => id, 'text' => name]`, newest first, with a first placeholder item whose `value` is empty) | The array shown in the classic editor chart button |
| `ninja_charts/fluent_connector_base_url` | `$url` (default `admin.php?page=ninja-charts#/`) | The base URL for the menu links of the admin app |

```php
// Hide a chart from the classic editor button.
add_filter('ninja_charts_editor_available_charts', function ($charts) {
    return array_values(array_filter($charts, function ($item) {
        return (int) $item['value'] !== 7;
    }));
});
```

The admin app also runs a dynamic action named `ninja-charts_loading_app` just before its scripts load.

### Ninja Tables data (filters)

These run while a chart built from a Ninja Tables table is prepared, in the admin preview and on the site.

| Hook | Parameters | Return |
|---|---|---|
| `ninja_charts_ntm_table_lists` | `$list` (array of `['id', 'name']`) | The tables offered in the table picker. Drag & Drop tables are already removed. |
| `ninja_charts_ntm_keys_by_table` | `$keys` (array of `['key', 'label', 'data_type']`) | The columns offered for one table. |
| `ninja_charts_ntm_all_table_rows` | `$rows` (array of row arrays, one per table row) | The rows used to build the chart. |
| `ninja_charts_ntm_selected_table_rows` | `$rows` (collection of row records with `id` and `value` JSON) | The rows when specific rows were picked with the data range picker. |
| `ninja_charts_ntm_all_data_by_table` | `$chartData` | The final data sent to the chart. Chart.js: `['labels' => [], 'datasets' => []]`. Google Charts: a list of rows, the first row being the headings. |
| `ninja_charts_ntm_google_csv_unique_key` | `$key` (default empty string) | The name of a column that holds a unique ID, for Google Sheets or remote CSV tables. |

```php
// Show only the rows where "status" is "paid".
add_filter('ninja_charts_ntm_all_table_rows', function ($rows) {
    return array_values(array_filter((array) $rows, function ($row) {
        return isset($row['status']) && $row['status'] === 'paid';
    }));
});

// Round every value of a Chart.js dataset.
add_filter('ninja_charts_ntm_all_data_by_table', function ($data) {
    if (isset($data['datasets'])) {
        foreach ($data['datasets'] as &$set) {
            $set['data'] = array_map('round', $set['data']);
        }
    }
    return $data;
});
```

`ninja_charts_ntm_all_table_rows` also runs for DataTables tables and for Google Sheets or remote CSV tables when a row range or date range is used. It runs on every chart render and on the preview, so keep the callback fast.

### Fluent Forms data (filters)

These run for charts built from Fluent Forms entries.

| Hook | Parameters | Return |
|---|---|---|
| `ninja_charts_ffm_table_lists` | `$list` (array of `['id', 'name']`) | The forms offered in the form picker. |
| `ninja_charts_ffm_keys_by_table` | `$keys` (array of `['key', 'label', 'data_type']`) | The fields offered for one form. |
| `ninja_charts_ffm_all_table_rows` | `$rows` (array of decoded entry responses) | The entries used to build the chart. |
| `ninja_charts_ffm_filter_by_date_rows` | `$rows` (collection of submissions with `id` and `response`) | The entries picked by a date range. Trashed entries are already excluded. An invalid range returns an empty collection. |
| `ninja_charts_ffm_data_by_table` | `$chartData` | The final chart data, same shape as `ninja_charts_ntm_all_data_by_table`. |

```php
// Ignore entries where the "country" field is empty.
add_filter('ninja_charts_ffm_all_table_rows', function ($rows) {
    return array_values(array_filter((array) $rows, function ($row) {
        return !empty($row['country']);
    }));
});
```

Each `$rows` entry holds the field values of one entry, keyed by the field name.

### Manual chart data (filters)

These run for charts whose data you typed in or imported from CSV. They are Chart.js only: the Google Charts engine has no manual-data filters.

| Hook | Parameters | Return |
|---|---|---|
| `ninja_charts_manual_formatted_labels` | `$labels` (array of the label column values) | The labels. |
| `ninja_charts_manual_data_sets_except_bubble_scatter_` | `$dataSets` (array of Chart.js dataset arrays) | The datasets of bar, line, area, pie and the other label-based charts. |
| `ninja_charts_manual_data_sets_bubble_scatter_` | `$dataSets` (array with one dataset) | The dataset of a bubble or scatter chart. |
| `ninja_charts_manual_all_data_by_table` | `$chartData` (`['labels' => [], 'datasets' => []]`) | The final data sent to the chart. |

```php
// Rename every manual chart's first series.
add_filter('ninja_charts_manual_data_sets_except_bubble_scatter_', function ($sets) {
    if (!empty($sets[0])) {
        $sets[0]['label'] = 'Revenue';
    }
    return $sets;
});
```

### Limits (filters)

| Hook | Parameters | Return |
|---|---|---|
| `ninja_charts_google_csv_row_limit` | `$limit` (default `2000`) | The most rows read from a Ninja Tables Google Sheets or remote CSV table when the range picker lists rows. |

```php
add_filter('ninja_charts_google_csv_row_limit', function () {
    return 5000;
});
```

This limit applies only to the route that feeds the row and date range picker for those tables. Charts that already have a saved row range read the rows without this limit.

```php
// Use a column called "id" as the row ID in the range picker.
add_filter('ninja_charts_ntm_google_csv_unique_key', function () {
    return 'id';
});
```

## Limits and rules

### CSV import

| Rule | Limit |
|---|---|
| File size | 1 MB. A larger file is rejected with "File is too large". |
| Rows | The first 500 data rows are read. The rest are ignored and the import tells you it was cut. |
| Saved data size | 60 KB of chart data once converted. Above that the import stops with "CSV data is too large to save". |
| Header | The first row is the header. At least one data row is needed. |
| Separator | A comma. Values can be quoted with `"`. A byte-order mark is ignored. |

Pasted data in the manual data sheet also accepts tabs and semicolons, and strips `$`, `%` and thousands commas from numbers.

### Chart types per engine

| Engine | Chart types |
|---|---|
| Chart.js | Line, Pie, Bar, Horizontal Bar, Bubble, Doughnut, Scatter, Area, Combo, Radar, Polar, Funnel |
| Google Charts | Line, Pie, Bar (columns), Horizontal Bar, Bubble, Doughnut, Scatter, Area, Combo, Histogram |

A chart type that is not on this list is rejected on save and in the preview with `Invalid chart type`.

### Data shape per chart type

**Manual and CSV.** The CSV layout follows the chart type.

| Layout | Used by | Columns | Rules |
|---|---|---|---|
| Series | Line, bar, horizontal bar, area, combo, radar, Google column, bar, line, area, combo, histogram, bubble and scatter | A label, then 1 or more number columns | Column 1 is text. Every other column is numbers. Header names must stay different after cleaning (letters, digits and underscores). |
| Pie | Pie, doughnut, polar, funnel, Google pie and donut | Exactly 2: `label, value` | The second column is a number in every row. |
| X, Y | Chart.js scatter | Exactly 2: `x, y` | All values are numbers. |
| X, Y, R | Chart.js bubble | Exactly 3: `x, y, r` | All values are numbers. `r` is the bubble size. |

**Ninja Tables columns and Fluent Forms fields.** A chart has one of two goals.

- **Show numbers.** A text or date column or field gives the labels. One or more number columns give the values.
- **Count answers.** One choice column or field, and each choice becomes a bar or slice sized by how many rows picked it.

| Chart type | Columns or fields needed |
|---|---|
| Bar, line, area, radar, Chart.js horizontal bar, Google column, bar, line, area, histogram | At least 2: one label and 1 or more numbers |
| Pie, doughnut, polar, funnel, Google pie and donut, scatter | Exactly 2 |
| Bubble | Exactly 3 |
| Combo | At least 3 |

More rules:

- **Only one text column** can be used as the label.
- A choice column or field is charted on its own, and cannot be mixed with others.
- Counting does not work for scatter, bubble, combo and histogram charts.
- In Ninja Tables, counting needs a column of the **Select** data type. In Fluent Forms it works for radio, checkbox, select, multi-select, country, ratings, score, net promoter score, payment method and agreement fields.
- In Fluent Forms, number, range slider and item quantity fields count as numbers. In Ninja Tables only the **Number** data type does.
- Text, email, link and date columns can name items. When there are several, the order of preference is text, email, link, then date.

### Responsive breakpoints

Charts follow the viewport width of the visitor's screen.

| Device | Viewport width |
|---|---|
| Mobile | Up to 767 px |
| Tablet | 768 px to 1024 px |
| Desktop | Above 1024 px |

Tablet and mobile settings are saved in `options.responsive` and each is a short list of overrides. A setting that is empty inherits, in the order desktop, then tablet, then mobile, so a phone gets the tablet value if it has none of its own. The supported settings are:

| Setting | Allowed |
|---|---|
| Chart height | 1 to 5000 px |
| Chart font size, title font size | 1 to 200 |
| Show title, show legend | On or off |
| Legend position | top, bottom, left, right, in, labeled, chartArea |

Anything else is dropped on save. Heights are applied with CSS media queries, so the box does not jump when the script loads.

### Hover options

Saved in `options.hover`. Every key is optional, and a chart without it behaves as before.

| Option | Values |
|---|---|
| `mode` | `highlight` (the engine's stronger shade), `none`, `custom` |
| `color` | The hover fill when the mode is `custom`. Hex, `rgb()`, `rgba()` or `transparent` |
| `borderColor` | The hover outline colour, same formats. Empty leaves it unchanged |
| `borderWidth` | The hover outline width, 0 to 20. Empty leaves it unchanged |
| `enabled` | Google Charts only. `false` turns hover and tooltips off |

Invalid values are dropped on save.

## REST routes

The admin app talks to a REST API at `/wp-json/ninjacharts/v2/`. Every route needs a logged-in user who passes the check in [Who can do what](#who-can-do-what), plus the `X-WP-Nonce` header with a `wp_rest` nonce. Without them the route answers with an authorization error.

| Method and route | Purpose |
|---|---|
| `GET charts` | List charts. Supports `per_page` (default 10), `keyword` and pagination. The keyword matches name, engine and type. |
| `POST charts` | Create a chart. Needs `data.render_engine`, `data.chart_type` and `data.data_source`, otherwise 422. |
| `GET charts/{id}` | Read one chart, with missing options filled in. |
| `POST charts/{id}` | Update a chart. The ID in the URL decides which chart. Same required fields as create. |
| `POST charts/{id}/duplicate` | Copy a chart. |
| `GET charts/{id}/export-csv` | Returns `csv` text and a `filename` for the chart's current data. 404 if the chart is gone, 422 if there is no data. |
| `POST process` | Builds the data for the live preview. Needs `chart_type`, `data_source` and `extra_data.render_engine`, otherwise 400. |
| `POST remove` | Delete charts. Send `ids` as an array. |
| `GET sources` | List the tables or forms of a data source (`data_source` is `ninja_table` or `fluent_form`). |
| `GET sources/{sourceId}` | List the usable columns or fields of one table or form. |
| `GET sources/csv-data/{tableId}` | The rows of a Google Sheets or remote CSV Ninja Tables table, for the range picker. Capped by `ninja_charts_google_csv_row_limit`. |
| `GET ninjatable-data-provider/{tableId}` | The data source type of a Ninja Tables table, such as `google-csv`. |

Charts are not sent through a public route. Only the admin-ajax data request described under [The shortcode](#the-shortcode) is available to visitors.

```php
// Read a chart's saved settings in PHP instead of the REST API.
$chart = \NinjaCharts\App\Models\NinjaCharts::find(12);
$options = $chart ? json_decode($chart->options, true) : [];
```

The model class is internal and can change between releases. Prefer the actions and filters above where you can.
