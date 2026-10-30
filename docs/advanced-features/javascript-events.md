---
title: JavaScript Events
description: Run your own JavaScript when a Ninja Tables table loads, is filtered, or a row is added, edited or deleted on the front end.
---

# JavaScript Events

Ninja Tables fires **jQuery events** in the browser at key moments of a table's life: when it is ready, when conditional formatting is applied, when a row popup opens, and when a visitor adds, edits or deletes a row. Listen for them to run your own code, for example to add a class to a cell, load a chart next to the table, or react to a filter.

This page is for developers. Add the code in a theme script, a snippet plugin, or, for one table only, in the table's own **Custom Code** › **JavaScript** box (Pro). See [Custom CSS & JS](/table-styling-css-selector).

## How events work

All events are jQuery events, so you listen with `jQuery(document).on(...)` or `$table.on(...)`. The handler's first argument is always the jQuery event object. The other arguments depend on the event and are listed below.

Tables start after the page loads, so bind your listener before that: put the script in the page head or footer, not in code that runs after the table is ready.

Two table engines can draw a table: FooTable and DataTables. Many events fire on both, and the **Engine** column below says where an event is limited to one. See [Choose a Table Engine](/choose-table-engine).

## Lifecycle events

| Event | Fires on | Handler arguments | Engine |
|---|---|---|---|
| `ninja_dt_before_init` | `document` | `(event, initData)` | DataTables |
| `ninja_table_loaded` | `document` | `(event, $table, tableConfig)` | Both |
| `ninja_table_ready_init` | `document` | `(event, { $table, tableConfig })` | Both |
| `ninja_table_ready_init_table_id_<ID>` | `document` | `(event, { $table, tableConfig })` | Both |
| `ninja_table_loaded_once` | the table element | `(event, { initConfig })` | FooTable |
| `ninja_table_all_chunk_loaded` | the table element | `(event, { maxChunk })` | FooTable |

- **`ninja_dt_before_init`** runs just before DataTables starts. It is the last chance to change how it starts. `initData` has `config`, `columnDefs`, `$table`, `responsiveOptions` and `editColOffset`; change `initData.columnDefs` to adjust column definitions.
- **`ninja_table_loaded`** runs when the table is ready for the visitor. It is the best general-purpose event.
- **`ninja_table_ready_init`** runs for every table on the page. **`ninja_table_ready_init_table_id_<ID>`** runs for one table only; replace `<ID>` with the table ID, for example `ninja_table_ready_init_table_id_123`. This is the event the table's **Custom Code** › **JavaScript** box is wrapped in, which is why `$table`, `$` and `tableConfig` are available there.
- **`ninja_table_loaded_once`** fires on the table element after FooTable has started, once per table.
- **`ninja_table_all_chunk_loaded`** fires after every chunk of a large chunked table has loaded, about half a second after the last one.

On FooTable `ninja_table_ready_init` fires just before `ninja_table_loaded`; on DataTables it fires just after it. Do not rely on their order.

**Example: do something when one table is ready**

```js
jQuery(document).on('ninja_table_ready_init_table_id_123', function (event, params) {
    var $table = params.$table;           // the table element
    var config = params.tableConfig;      // the table's settings and columns

    $table.find('tbody tr').first().addClass('first-row');
    console.log('Table', config.table_id, 'is ready');
});
```

## Display events

| Event | Fires on | Handler arguments | Engine |
|---|---|---|---|
| `ninja-tables-apply-conditional-formatting` | `document` | `(event, $table, tableConfig)` | Both |
| `ninja_table_row_modal_opened` | `document` | `(event, $modalBody, tableConfig)` | Both |
| `ninja_table_init_stackables` | `document` | `(event, { $table, tableConfig })` | FooTable |
| `ninja_stacked_init` | the table element | `(event)` | FooTable |
| `ninja_stacked_removed` | the table element | `(event)` | FooTable |

- **`ninja-tables-apply-conditional-formatting`** runs every time the table is drawn (on load, a page change, sorting or filtering). [Conditional formatting](/conditional-formatting) listens for it. Listen too if you want to style cells after each redraw.
- **`ninja_table_row_modal_opened`** runs when the row details popup opens. `$modalBody` is the jQuery element holding the row's details.
- **`ninja_table_init_stackables`** runs when a table with the [stackable](/stackable-table) layout starts. **`ninja_stacked_init`** and **`ninja_stacked_removed`** run when the table switches into or out of cards as the screen size changes.

## Filter events

| Event | Fires on | Handler arguments | Engine |
|---|---|---|---|
| `after_ft_filtering` | the table element | `(event, ft, filter)` | FooTable |
| `ninja_table_reset_filter` | the table element | `(event)` | FooTable |
| `ninja_table_trigger_multi_reset` | `document` | `(event, { frm_element, $table })` | FooTable |
| `updated_table_filter` | the table element | `(event, { filter, filter_index, selected })` | DataTables |

- **`after_ft_filtering`** runs after FooTable applies a search or filter. `filter` holds the active filters.
- **`ninja_table_reset_filter`** runs when the filters are cleared and the table shows all rows again. **`ninja_table_trigger_multi_reset`** runs once for each multi-select [custom filter](/custom-filters) that is cleared; `frm_element` is the select element.
- **`updated_table_filter`** runs when a visitor changes a custom filter on a DataTables table. `selected` is the chosen value.

## Frontend editing events (Pro)

These fire on `document` when a visitor uses the edit, add or delete controls of a table with [frontend editing](/frontend-editing).

| Event | Handler arguments |
|---|---|
| `ninja_table_edit_row` | `(event, { row, self, tableConfig })` |
| `ninja_table_add_row` | `(event, { self, tableConfig })` |
| `ninja_table_delete_row` | `(event, { row, self, tableConfig })` |

`row` is the row the visitor clicked (not sent when adding). `self` carries the table instance as `self.ft`. These events open Ninja Tables' own row dialogs, so listen to add behaviour rather than to replace them.

The Pro export buttons also fire `ninja_table_button_action_csv`, `_print` and `_xlsx` on FooTable tables, and `ninja_dt_button_action_csv`, `_print` and `_xlsx` on DataTables tables, with `(event, { button, tableConfig })`.

## Useful selectors

Each table is wrapped so you can target one table without affecting the others. Replace `123` with the table ID.

| Element | FooTable | DataTables |
|---|---|---|
| Wrapper | `#footable_parent_123` | `#ninja_dt_parent_123` |
| Table | `#footable_123` | `#ninja_dt_123` |
| Every table | `.ninja_table_wrapper` | `.ninja_table_wrapper` |
| Pagination (DataTables) | none | `.dataTables_paginate` |

You can also add your own class to the table in **Custom Code** › **Table targeting** and use it in a selector. In **Custom Code** › **CSS**, use `#footable_parent_NT_ID` or `#ninja_dt_parent_NT_ID`: `NT_ID` is replaced with the table ID. More on this in [Custom CSS & JS](/table-styling-css-selector).

## Full example

Highlight rows whose `status` cell says "Overdue", and keep the highlight after every redraw, on any table on the page:

```js
jQuery(document).on('ninja-tables-apply-conditional-formatting', function (event, $table, tableConfig) {
    $table.find('tbody tr').each(function () {
        var $row = jQuery(this);
        var isOverdue = $row.text().indexOf('Overdue') !== -1;
        $row.toggleClass('row-overdue', isOverdue);
    });
});
```

Add a rule for `.row-overdue` in your theme CSS or in the table's **Custom Code** › **CSS**.

For the PHP side, see [Hooks & Filters](/hooks-and-filters).
