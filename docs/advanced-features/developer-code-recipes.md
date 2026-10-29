---
title: "Developer Code Recipes"
description: "Working PHP examples for reading Ninja Tables data, building computed tables, exporting CSV on a schedule and reacting to row changes."
---

# Developer Code Recipes

These recipes show how to work with Ninja Tables from your own code. Add them to your child theme's `functions.php`, a code-snippets plugin, or a file in `wp-content/mu-plugins/`. Replace `123` with your table ID.

They use the plugin's public helper functions, which are stable across updates:

| Function | Returns |
|---|---|
| `ninjaTablesGetTablesDataByID( $tableId )` | All rows, as arrays keyed by **column key**, plus a `___id___` field per row. |
| `ninja_table_get_table_columns( $tableId )` | The column definitions; each has a `key` and a display `name`. |
| `ninjaTablesClearTableDataCache( $tableId )` | Clears the table's cached data so fresh rows are read. |

::: tip Column keys, not names
Rows are keyed by each column's **key** (set in the column's settings, it can't change later), not by its display name. Print `ninja_table_get_table_columns( 123 )` once to see them.
:::

## Read a table's rows

```php
$rows = ninjaTablesGetTablesDataByID(123);

foreach ($rows as $row) {
    // 'name' and 'price' are column keys
    echo esc_html($row['name']) . ': ' . esc_html($row['price']) . '<br>';
}
```

## Show a total from a table with a shortcode

```php
add_shortcode('table_total', function ($atts) {
    $atts = shortcode_atts(['id' => 0, 'column' => ''], $atts);
    $sum  = 0;

    foreach (ninjaTablesGetTablesDataByID((int) $atts['id']) as $row) {
        $sum += (float) ($row[$atts['column']] ?? 0);
    }

    return esc_html(number_format_i18n($sum, 2));
});
```

Use it as `[table_total id="123" column="amount"]`.

## Build a computed table from another table

You can fill a table's rows from your own code with the `ninja_tables_get_public_data` filter. This example builds a sports league standings table from a table of match results, so standings never have to be typed by hand.

1. Create a **results** table (for example ID `123`) with the column keys `home`, `away`, `home_goals` and `away_goals`.
2. Create a **standings** table (for example ID `124`) with the column keys `pos`, `team`, `played` and `points`. Leave it empty.
3. Add this code:

```php
add_filter('ninja_tables_get_public_data', function ($data, $tableId) {
    if ((int) $tableId !== 124) {
        return $data; // leave every other table alone
    }

    $teams = [];
    foreach (ninjaTablesGetTablesDataByID(123) as $match) {
        $home = $match['home'];
        $away = $match['away'];
        $hg   = (int) $match['home_goals'];
        $ag   = (int) $match['away_goals'];

        foreach ([$home, $away] as $team) {
            $teams[$team] = $teams[$team] ?? ['played' => 0, 'points' => 0];
            $teams[$team]['played']++;
        }
        if ($hg > $ag) {
            $teams[$home]['points'] += 3;
        } elseif ($hg < $ag) {
            $teams[$away]['points'] += 3;
        } else {
            $teams[$home]['points']++;
            $teams[$away]['points']++;
        }
    }

    uasort($teams, fn ($a, $b) => $b['points'] <=> $a['points']);

    $rows = [];
    $pos  = 1;
    foreach ($teams as $name => $t) {
        $rows[] = [
            'pos'      => $pos,
            'team'     => $name,
            'played'   => $t['played'],
            'points'   => $t['points'],
            '___id___' => $pos++, // any unique ID per row
        ];
    }

    return $rows;
}, 10, 2);
```

The standings table now shows live standings with all of its own design settings. The keys on the left must match the standings table's column keys.

## Clear a table's cache after an outside change

Tables are cached for speed. If your code changes the data a table reads, clear its cache so visitors see the change straight away:

```php
add_action('my_plugin_scores_updated', function () {
    ninjaTablesClearTableDataCache(123);
});
```

Visitors can also have every table rebuilt from the gear icon › **Settings** › **Performance**; see [Clear Caches](/clear-table-cache).

## Export a table to a CSV file on a schedule

The admin **Export** button streams the file to your browser, so it can't be reused from a script. This recipe writes the CSV itself, every 6 hours, to `wp-content/uploads/ninja-exports/table-123.csv`:

```php
const MY_NT_EXPORT_TABLE = 123;

add_filter('cron_schedules', function ($schedules) {
    $schedules['every_six_hours'] = ['interval' => 6 * HOUR_IN_SECONDS, 'display' => 'Every 6 hours'];
    return $schedules;
});

add_action('init', function () {
    if (!wp_next_scheduled('my_nt_csv_export')) {
        wp_schedule_event(time(), 'every_six_hours', 'my_nt_csv_export');
    }
});

add_action('my_nt_csv_export', function () {
    $tableId = MY_NT_EXPORT_TABLE;
    $columns = ninja_table_get_table_columns($tableId);
    $rows    = ninjaTablesGetTablesDataByID($tableId);

    $dir = wp_upload_dir()['basedir'] . '/ninja-exports';
    wp_mkdir_p($dir);
    $fh = fopen($dir . "/table-{$tableId}.csv", 'w');

    fputcsv($fh, wp_list_pluck($columns, 'name'));
    foreach ($rows as $row) {
        $line = [];
        foreach ($columns as $column) {
            // guards against spreadsheet formula injection
            $line[] = ninjaTablesSanitizeForCSV($row[$column['key']] ?? '');
        }
        fputcsv($fh, $line);
    }
    fclose($fh);
});
```

## More hooks

See [Hooks & Filters](/hooks-and-filters) for every action and filter, including what runs when rows are added, updated or deleted.
