<?php
/**
 * Extra demo tables and pages for screenshots that need SAVED settings or special content
 * (conditional formatting, transforms, formulas, HTML/image/text-area columns, filters, export buttons,
 * row/cell colours, merged cells, manual sort, Custom JS, a Drag & Drop table, a filtered shortcode page).
 *
 * Additive: it never touches the main demo tables from seed-demo-tables.php (their ids appear in existing
 * screenshots). Everything it creates carries post meta `_nt_demo_extra = 1`; a re-run deletes exactly those
 * first. Run it AFTER seed-demo-tables.php (it reads Order History's id and merges into demo-tables.json).
 *
 *   ./scripts/demo-data/seed.sh --extras            create / replace the extras only
 *   ./scripts/demo-data/seed.sh --extras --remove   delete the extras only
 *
 * Stored formats were read from the plugin code (free `redesign` branch + Pro 5.2.18); see README.
 */

if (php_sapi_name() !== 'cli') {
    exit("CLI only\n");
}
$wpRoot = getenv('NT_WP_ROOT');
if (!$wpRoot || !file_exists($wpRoot . '/wp-load.php')) {
    fwrite(STDERR, "NT_WP_ROOT must point to the WordPress root\n");
    exit(1);
}
$_SERVER['HTTP_HOST']   = getenv('NT_HTTP_HOST') ?: 'localhost:10013';
$_SERVER['REQUEST_URI'] = '/';
define('WP_USE_THEMES', false);
require $wpRoot . '/wp-load.php';

use NinjaTables\App\Models\Post;
use NinjaTables\App\Services\Import\TableImporter;

wp_set_current_user(1);
global $wpdb;

// Remove previous extras ------------------------------------------------------------------------
$old = get_posts(['post_type' => 'ninja-table', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_extra', 'fields' => 'ids']);
foreach ($old as $id) {
    Post::destroyTable($id);
}
$oldPages = get_posts(['post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_extra', 'fields' => 'ids']);
foreach ($oldPages as $id) {
    wp_delete_post($id, true);
}
echo 'Removed ' . count($old) . ' extra table(s), ' . count($oldPages) . " page(s)\n";

$mapFile = __DIR__ . '/../screenshots/demo-tables.json';
$map     = file_exists($mapFile) ? json_decode(file_get_contents($mapFile), true) : ['tables' => [], 'pages' => []];
foreach (($map['extras'] ?? ['tables' => [], 'pages' => []]) as $kind => $names) {
    foreach ($names as $name) {
        unset($map[$kind][$name]);
    }
}
$map['extras'] = ['tables' => [], 'pages' => []];

if (in_array('--remove', $argv, true)) {
    unset($map['extras']);
    file_put_contents($mapFile, json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
    exit(0);
}

mt_srand(20261030);
$pick = function (array $a) { return $a[mt_rand(0, count($a) - 1)]; };

/**
 * Create one FooTable table like a CSV import, then apply column props, settings and extra meta.
 * $columns: list of [key, name, data_type, extra column props]. Returns the table id.
 * $key: name in demo-tables.json (defaults to the title; lets two tables share a title).
 */
function nt_extra_table($title, $description, array $columns, array $rows, array $settings = [], array $meta = [], $key = null)
{
    global $map;
    $importer = new TableImporter();
    $tableId  = $importer->createTable(['post_title' => $title, 'post_content' => $description, 'post_type' => 'ninja-table', 'post_status' => 'publish']);
    if (is_wp_error($tableId) || !$tableId) {
        throw new RuntimeException("Could not create table $title");
    }
    update_post_meta($tableId, '_nt_demo_extra', 1);

    if ($columns) {
        $header = [];
        foreach ($columns as $c) {
            $header[$c[0]] = $c[1];
        }
        $importer->storeTableConfigWhenImporting($tableId, $header, 'footable');
        $saved = get_post_meta($tableId, '_ninja_table_columns', true);
        foreach ($saved as $i => $col) {
            $saved[$i]['data_type'] = $columns[$i][2];
            foreach (($columns[$i][3] ?? []) as $k => $v) {
                $saved[$i][$k] = $v;
            }
        }
        update_post_meta($tableId, '_ninja_table_columns', $saved);
        if ($rows) {
            $importer->writeIndexedRows($tableId, 'footable', array_keys($header), $rows);
        }
    }

    $current = get_post_meta($tableId, '_ninja_table_settings', true) ?: [];
    update_post_meta($tableId, '_ninja_table_settings', array_merge($current, [
        'enable_search'  => '1',
        'column_sorting' => '1',
        'show_title'     => '0',
        'css_classes'    => ['selectable', 'striped', 'vertical_centered'],
        'render_type'    => 'legacy_table',
    ], $settings));
    foreach ($meta as $k => $v) {
        update_post_meta($tableId, $k, $v);
    }
    ninjaTablesClearTableDataCache($tableId);

    $key = $key ?: $title;
    $map['tables'][$key]       = $tableId;
    $map['extras']['tables'][] = $key;
    printf("  #%-5d %-34s %4d rows\n", $tableId, $title, count($rows));
    return $tableId;
}

/** Row item ids of a FooTable table in insert order. */
function nt_extra_row_ids($tableId)
{
    global $wpdb;
    return $wpdb->get_col($wpdb->prepare("SELECT id FROM {$wpdb->prefix}ninja_table_items WHERE table_id = %d ORDER BY id ASC", $tableId));
}

function nt_extra_page($title, $intro, $shortcode)
{
    global $map;
    $pid = wp_insert_post(['post_type' => 'page', 'post_status' => 'publish', 'post_title' => $title,
        'post_content' => "<!-- wp:paragraph --><p>$intro</p><!-- /wp:paragraph -->\n\n<!-- wp:shortcode -->$shortcode<!-- /wp:shortcode -->"]);
    update_post_meta($pid, '_nt_demo_extra', 1);
    $map['pages'][$title]     = wp_make_link_relative(get_permalink($pid));
    $map['extras']['pages'][] = $title;
    printf("  page #%-5d %-26s %s\n", $pid, $title, get_permalink($pid));
}

$color = function ($scheme) { return ['table_color_type' => 'pre_defined_color', 'table_color' => $scheme]; };
$money = ['thousandSeparator' => ',', 'decimalSeparator' => '.', 'textAlign' => 'right', 'contentAlign' => 'right'];
$right = ['textAlign' => 'right', 'contentAlign' => 'right'];

$first = ['Olivia','Liam','Emma','Noah','Ava','Ethan','Sophia','Mason','Isabella','Lucas','Mia','Amelia','James','Harper','Benjamin','Evelyn','Daniel','Grace','Owen','Chloe','Aisha','Omar','Fatima','Rahul','Priya','Kenji','Yuki','Mateo','Lucia','Ingrid','Pierre','Camille','Diego','Sofia','Nadia','Leo','Zara','Arjun'];
$last  = ['Smith','Johnson','Brown','Garcia','Miller','Davis','Martinez','Wilson','Anderson','Taylor','Moore','Martin','Lee','Thompson','White','Clark','Walker','Young','King','Wright','Khan','Rahman','Patel','Sharma','Tanaka','Sato','Schmidt','Dubois','Rossi','Silva','Novak','Hansen','Nielsen','Ahmed','Chen'];
$usedNames = [];
$person = function () use ($pick, $first, $last, &$usedNames) {
    do { $n = $pick($first) . ' ' . $pick($last); } while (isset($usedNames[$n]));
    $usedNames[$n] = 1;
    return $n;
};
$email = function ($name) { return strtolower(str_replace(' ', '.', $name)) . '@example.com'; };

$depts = [
    'Engineering' => ['Software Engineer', 'Engineering Manager', 'QA Engineer', 'DevOps Engineer'],
    'Design'      => ['Product Designer', 'Brand Designer', 'UX Researcher'],
    'Marketing'   => ['Content Strategist', 'SEO Manager', 'Marketing Specialist'],
    'Sales'       => ['Account Executive', 'Sales Manager'],
    'Support'     => ['Support Specialist', 'Support Team Lead'],
];
$offices = ['New York', 'London', 'Berlin', 'Singapore', 'Dhaka', 'Remote'];

echo "Creating extra demo tables\n";

// 1. Team Contacts: HTML field, mailto transform, conditional formatting, a hidden-on-mobile column ----------
$bios = [
    'Engineering' => '<strong>Builds</strong> the table engine. Ask about <a href="https://example.com/handbook/performance">performance</a>.',
    'Design'      => '<strong>Designs</strong> the editor. Portfolio on <a href="https://example.com/portfolio">example.com</a>.',
    'Marketing'   => '<strong>Writes</strong> the newsletter and the <a href="https://example.com/blog">blog</a>.',
    'Sales'       => '<strong>Helps</strong> agencies pick a plan. <em>Books demos</em> on Tuesdays.',
    'Support'     => '<strong>Answers</strong> tickets in under an hour. See the <a href="https://example.com/help">help center</a>.',
];
$rows = [];
for ($i = 0; $i < 24; $i++) {
    $n = $person();
    $d = array_keys($depts)[$i % count($depts)];
    $rows[] = [$n, $d, $pick($depts[$d]), $email($n), sprintf('+1 (555) %03d-%04d', mt_rand(200, 999), mt_rand(0, 9999)), $pick($offices), $bios[$d]];
}
$rows[0][0] = '<h4>' . $rows[0][0] . '</h4>'; // single line text cell holding simple HTML
$tContacts = nt_extra_table('Team Contacts', 'Who to ask about what, with a short bio for everyone.', [
    ['name', 'Name', 'text'],
    ['department', 'Department', 'selection', ['selections' => implode("\n", array_keys($depts)), 'conditions' => [
        ['conditionalOperator' => 'equal', 'conditionalValue' => 'Engineering', 'conditionalValue2' => null, 'targetAction' => 'set-cell-bg-color', 'targetValue' => null, 'targetValueColor' => '#DBEAFE'],
        ['conditionalOperator' => 'equal', 'conditionalValue' => 'Support', 'conditionalValue2' => null, 'targetAction' => 'set-cell-bg-color', 'targetValue' => null, 'targetValueColor' => '#DCFCE7'],
    ]]],
    ['job_title', 'Job Title', 'text'],
    ['email', 'Email', 'text', ['transformed_value' => '<a href="mailto:{{row.email}}">{{row.email}}</a>']],
    ['phone', 'Phone', 'text', ['breakpoints' => 'xs']],
    ['office', 'Office', 'selection', ['selections' => implode("\n", $offices), 'breakpoints' => 'xs']],
    ['bio', 'Bio', 'html', ['breakpoints' => 'xs sm']],
], $rows, ['perPage' => 10] + $color('ninja_no_color_table'));
nt_extra_page('Team Contacts', 'Not sure who to ask? Start here.', "[ninja_tables id=\"$tContacts\"]");

// 2. Staff Directory: custom filters (In Columns, 3) and CSV / Excel / Print buttons ------------------------
$rows = [];
for ($i = 0; $i < 60; $i++) {
    $n = $person();
    $d = $pick(array_keys($depts));
    $rows[] = [$n, $d, $pick($depts[$d]), $pick($offices), date('Y-m-d', mktime(0, 0, 0, mt_rand(1, 12), mt_rand(1, 28), mt_rand(2016, 2026)))];
}
$deptOptions = array_map(function ($d) { return ['label' => $d, 'value' => $d]; }, array_keys($depts));
$officeOptions = array_map(function ($o) { return ['label' => $o, 'value' => $o]; }, $offices);
$tStaff = nt_extra_table('Staff Directory', 'Filter the team by department and office, or download the list.', [
    ['name', 'Name', 'text'], ['department', 'Department', 'selection', ['selections' => implode("\n", array_keys($depts))]],
    ['job_title', 'Job Title', 'text'], ['office', 'Office', 'selection', ['selections' => implode("\n", $offices)]],
    ['start_date', 'Start Date', 'date', ['dateFormat' => 'MMM/DD/YYYY', 'formatType' => 'date']],
], $rows, ['perPage' => 15] + $color('blue'), [
    '_ninja_table_custom_filters' => [
        'ninja_filter_0' => ['title' => 'Department', 'filter_prefix' => 'Department', 'type' => 'select', 'select_value_type' => 'manual', 'placeholder' => 'All', 'is_multi_select' => 'no', 'strict' => 'no', 'columns' => ['department'], 'options' => $deptOptions],
        'ninja_filter_1' => ['title' => 'Office', 'filter_prefix' => 'Office', 'type' => 'select', 'select_value_type' => 'manual', 'placeholder' => 'All', 'is_multi_select' => 'no', 'strict' => 'no', 'columns' => ['office'], 'options' => $officeOptions],
        'ninja_filter_2' => ['title' => 'Reset', 'filter_prefix' => '', 'type' => 'reset_filter', 'placeholder' => 'Reset filters', 'strict' => 'no', 'columns' => [], 'options' => [['label' => '', 'value' => '']]],
    ],
    '_ninja_custom_filter_styling' => ['filter_display_type' => 'columns', 'filter_columns' => 'columns_3', 'filter_column_label' => 'new_line', 'progressive' => 'no'],
    '_ninja_custom_table_buttons' => [
        'csv'   => ['status' => 'yes', 'label' => 'CSV', 'all_rows' => 'no', 'bg_color' => 'rgb(0,0,0)', 'text_color' => 'rgb(255,255,255)', 'plainText' => 'no'],
        'xlsx'  => ['status' => 'yes', 'label' => 'Excel', 'all_rows' => 'no', 'bg_color' => 'rgb(0,0,0)', 'text_color' => 'rgb(255,255,255)'],
        'print' => ['status' => 'yes', 'label' => 'Print', 'all_rows' => 'no', 'bg_color' => 'rgb(0,0,0)', 'text_color' => 'rgb(255,255,255)', 'header_each_page' => 'no', 'footer_each_page' => 'no', 'header_html' => '', 'footer_html' => ''],
        'button_position'  => 'after_search_box',
        'button_alignment' => 'ninja_buttons_right',
    ],
]);
nt_extra_page('Staff Directory', 'Everyone on the team. Use the filters to narrow the list, or download it.', "[ninja_tables id=\"$tStaff\"]");

// 3. Department Roster: rowspan merge with the gist script + the combine class ---------------------------
$rowspanJs = file_get_contents(__DIR__ . '/assets/rowspan.js');
$rows = [];
foreach ($depts as $d => $titles) {
    for ($i = 0; $i < 3; $i++) {
        $n = $person();
        $rows[] = [$d, $n, $titles[$i % count($titles)], $pick($offices)];
    }
}
$tRoster = nt_extra_table('Department Roster', 'Team members grouped by department.', [
    ['department', 'Department', 'text', ['classes' => 'combine']], ['name', 'Name', 'text'], ['role', 'Role', 'text'], ['office', 'Office', 'text'],
], $rows, ['perPage' => 20, 'column_sorting' => '0', 'enable_search' => '0'] + $color('ninja_no_color_table'), ['_ninja_tables_custom_js' => $rowspanJs]);
nt_extra_page('Department Roster', 'Our team, department by department.', "[ninja_tables id=\"$tRoster\"]");

// 4. Winter Apparel: Image column (lightbox), long Text area, styled Price column, stackable, number range filter
$products = [
    ['Zipper Hoodie', 'sweatshirt-1-4', 'Brushed fleece inside, a full-length metal zip and two deep side pockets. Runs true to size.', 'Red', 59],
    ['Casual Classic Hoodie', 'classic-hoodie-1-4', 'Our best seller. Heavyweight cotton, a lined hood and ribbed cuffs that keep their shape after washing.', 'Cadet Blue', 54],
    ['Fleece Jacket', 'fleece-jacket-1-4', 'Light enough for spring, warm enough for a cold morning walk. Packs into its own chest pocket.', 'White', 79],
    ['Dual-Tone Hoodie', 'hoodie-mans-1-4', 'Two-colour panels, a kangaroo pocket and a relaxed fit. Made from 80% recycled cotton.', 'Teal & White', 64],
    ['Oxley Fleece', 'fleece-jacket-4-1', 'Soft polar fleece with a high collar and zipped hand pockets. Machine washable.', 'Oxley', 69],
    ['Mustard Classic Hoodie', 'classic-hoodie-2-1', 'The Classic Hoodie in a warm mustard tone. Pre-shrunk, so it fits the same after the first wash.', 'Mustard', 54],
    ['Peach Sweatshirt', 'sweatshirt-4-1', 'A crew-neck sweatshirt in soft loopback cotton, with dropped shoulders for an easy fit.', 'Peach', 45],
    ['Bitter Lemon Fleece', 'fleece-jacket-3-1', 'Bright, cosy and easy to spot on a trail. Anti-pill fleece that stays smooth.', 'Bitter Lemon', 69],
];
$rows = [];
foreach ($products as [$name, $file, $desc, $colour, $price]) {
    $att = $wpdb->get_var($wpdb->prepare("SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_wp_attached_file' AND meta_value LIKE %s LIMIT 1", '%/' . $file . '.jpeg'));
    $img = $att ? [
        'image_full'  => wp_get_attachment_url($att),
        'image_thumb' => wp_get_attachment_image_src($att, 'thumbnail')[0],
        'alt_text'    => $name,
        'permalink'   => home_url('/shop/' . sanitize_title($name) . '/'),
    ] : '';
    $rows[] = [$name, $img, $desc, $colour, $price];
}
$tApparel = nt_extra_table('Winter Apparel', 'Hoodies, fleeces and sweatshirts for the cold months.', [
    ['product', 'Product', 'text'],
    ['photo', 'Photo', 'image', ['link_type' => 'image_light_box', 'link_target' => '_self', 'unsortable' => 'yes']],
    ['description', 'Description', 'textarea'],
    ['colour', 'Colour', 'text'],
    ['price', 'Price ($)', 'number', $money + ['width' => '200', 'maxWidthUnit' => 'px', 'background_color' => '#F0FDFA', 'text_color' => '#0F766E', 'classes' => 'price-col']],
], $rows, ['perPage' => 10, 'stackable' => 'yes', 'stacks_devices' => ['xs'], 'stacks_appearances' => [], 'load_lightbox' => true] + $color('ninja_no_color_table'), [
    '_ninja_table_custom_filters' => [
        'ninja_filter_0' => ['title' => 'Price', 'filter_prefix' => 'Price', 'type' => 'number_range', 'from_placeholder' => 'Min', 'to_placeholder' => 'Max', 'strict' => 'no', 'columns' => ['price'], 'options' => [['label' => '', 'value' => '']]],
    ],
    '_ninja_custom_filter_styling' => ['filter_display_type' => 'inline', 'filter_columns' => 'columns_2', 'filter_column_label' => 'new_line', 'progressive' => 'no'],
]);
nt_extra_page('Winter Collection', 'Warm layers for the cold months. Click a photo to see it larger.', "[ninja_tables id=\"$tApparel\"]");

// 5. Quarterly Sales by Store: SUM formula column + Custom JS column totals ------------------------------------
$calcJs = str_replace('var myClasses= "column_one, column_two, column_three";', 'var myClasses= "q1, q2, q3";', file_get_contents(__DIR__ . '/assets/column-totals.js'));
$rows = [];
foreach (['Downtown', 'Riverside', 'Airport', 'Harbor View', 'Old Town', 'University', 'Mall of the North', 'Online Store'] as $store) {
    $base = mt_rand(38, 160) * 1000;
    $rows[] = [$store, $base, round($base * (mt_rand(92, 118) / 100)), round($base * (mt_rand(95, 125) / 100)), ''];
}
$tQuarter = nt_extra_table('Quarterly Sales by Store 2026', 'Revenue per store for the first three quarters of 2026, in US dollars.', [
    ['store', 'Store', 'text'], ['q1', 'Q1', 'number', $right], ['q2', 'Q2', 'number', $right], ['q3', 'Q3', 'number', $right],
    ['total', 'Total', 'number', $right + ['transformed_value' => '=SUM({{row.q1}}, {{row.q2}}, {{row.q3}})']],
], $rows, ['perPage' => 20, 'formula_support' => 'yes'] + $color('ninja_no_color_table'), ['_ninja_tables_custom_js' => $calcJs]);
nt_extra_page('Quarterly Sales', 'Store revenue for Q1 to Q3 2026, with a total for every store and every quarter.', "[ninja_tables id=\"$tQuarter\"]");

// 6. Event Agenda: #colspan# section headings and a merged closing row ---------------------------------------
$talks = ['Building Fast WordPress Sites', 'Accessible Design Systems', 'Writing Secure Plugins', 'SEO That Still Works', 'Designing Data-Heavy Pages', 'Pricing Your Services', 'Headless WordPress with Next.js', 'Content Strategy for Small Teams'];
$rooms = ['Main Hall', 'Room A', 'Room B'];
$rows = [];
$t = 0;
foreach (['Day 1 · Wednesday, November 18', 'Day 2 · Thursday, November 19'] as $day) {
    $rows[] = [$day, '#colspan#', '#colspan#', '#colspan#'];
    foreach (['09:30', '11:00', '13:30', '15:00'] as $slot) {
        $rows[] = [$slot, $talks[$t++ % count($talks)], $person(), $rooms[mt_rand(0, 2)]];
    }
}
$rows[] = ['All sessions are recorded and posted within a week.', '#colspan#', '#colspan#', '#colspan#'];
$tAgenda = nt_extra_table('Event Agenda', 'Two days of talks. Times are local.', [
    ['time', 'Time', 'text'], ['session', 'Session', 'text'], ['speaker', 'Speaker', 'text'], ['room', 'Room', 'text'],
], $rows, ['perPage' => 20, 'column_sorting' => '0', 'enable_search' => '0'] + $color('violet'));
nt_extra_page('Event Agenda', 'Two days of talks and workshops.', "[ninja_tables id=\"$tAgenda\"]");

// 7. Managed WordPress Plans: one coloured row and one coloured cell ------------------------------------------
$c3 = ['textAlign' => 'center', 'contentAlign' => 'center'];
$tPlans = nt_extra_table('Managed WordPress Plans', 'Our managed WordPress hosting plans.', [
    ['feature', 'Feature', 'text'], ['basic', 'Basic', 'text', $c3], ['plus', 'Plus', 'text', $c3], ['agency', 'Agency', 'text', $c3],
], [
    ['Monthly price', '$12', '$29', '$79'],
    ['Sites', '1', '3', '25'],
    ['Storage', '20 GB', '50 GB', '200 GB'],
    ['Daily backups', '✓', '✓', '✓'],
    ['Staging sites', '✗', '✓', '✓'],
    ['Malware scans', 'Weekly', 'Daily', 'Daily'],
    ['Support', 'Email', 'Chat', 'Phone'],
], ['perPage' => 20] + $color('ninja_no_color_table'));
$ids = nt_extra_row_ids($tPlans);
$wpdb->update($wpdb->prefix . 'ninja_table_items', ['settings' => maybe_serialize(['row_bg' => '#FEF3C7', 'text_color' => '#92400E'])], ['id' => $ids[0]]);
$wpdb->update($wpdb->prefix . 'ninja_table_items', ['settings' => maybe_serialize(['cell' => ['plus' => ['background-color' => '#CCFBF1', 'color' => '#115E59']]])], ['id' => $ids[4]]);
ninjaTablesClearTableDataCache($tPlans);
nt_extra_page('Managed WordPress Plans', 'Every plan includes free SSL and a global CDN.', "[ninja_tables id=\"$tPlans\"]");

// 8. Weekend Workshops: Sort manually turned on ----------------------------------------------------------------
$tWorkshops = nt_extra_table('Weekend Workshops', 'Hands-on Saturday workshops, in the order we run them.', [
    ['workshop', 'Workshop', 'text'], ['host', 'Host', 'text'], ['length', 'Length', 'text'], ['seats', 'Seats', 'number', $right],
], [
    ['Your First WordPress Site', $person(), '3 hours', 20], ['Setting Up WooCommerce', $person(), '4 hours', 16],
    ['Speeding Up Your Site', $person(), '2 hours', 24], ['Writing for the Web', $person(), '2 hours', 18],
    ['Backups and Security', $person(), '3 hours', 20], ['Building a Pricing Table', $person(), '2 hours', 25],
], ['perPage' => 20, 'sorting_type' => 'manual_sort'] + $color('ninja_no_color_table'), ['_ninja_tables_data_migrated_for_manual_sort' => true]);
foreach (nt_extra_row_ids($tWorkshops) as $i => $rid) {
    $wpdb->update($wpdb->prefix . 'ninja_table_items', ['position' => $i + 1], ['id' => $rid]);
}
ninjaTablesClearTableDataCache($tWorkshops);

// 9. Pricing Plans: a filled 3-column table (guided setup result) and a brand-new empty one -------------------
nt_extra_table('Pricing Plans', 'Plans for our website builder.', [
    ['plan', 'Plan', 'text'], ['price', 'Price', 'text'], ['features', 'Features', 'text'],
], [
    ['Starter', '$9 / month', '1 website, 10 GB storage'],
    ['Growth', '$19 / month', '5 websites, 50 GB storage'],
    ['Business', '$39 / month', 'Unlimited websites, priority support'],
], ['perPage' => 20] + $color('ninja_no_color_table'));
nt_extra_table('Pricing Plans', '', [], [], ['perPage' => 20] + $color('ninja_no_color_table'), [], 'Pricing Plans (empty)');

// 10. Website Pricing: a Drag & Drop pricing table, copied from an existing template-built table ----------------
$source = (int) getenv('NT_DND_SOURCE');
if (!$source) {
    $source = (int) $wpdb->get_var("SELECT post_id FROM {$wpdb->postmeta} pm JOIN {$wpdb->posts} p ON p.ID = pm.post_id WHERE pm.meta_key = '_ninja_tables_data_provider' AND pm.meta_value = 'drag_and_drop' AND p.post_title LIKE '%Pricing%' AND p.post_status = 'publish' ORDER BY p.ID DESC LIMIT 1");
}
if ($source) {
    $dnd = wp_insert_post(['post_type' => 'ninja-table', 'post_status' => 'publish', 'post_title' => 'Website Pricing', 'post_content' => '']);
    update_post_meta($dnd, '_nt_demo_extra', 1);
    foreach (['_ninja_tables_data_provider', '_ninja_table_builder_table_html', '_ninja_table_builder_table_settings', '_ninja_table_builder_table_responsive', '_ninja_table_builder_table_data'] as $k) {
        $v = get_post_meta($source, $k, true);
        if ($k === '_ninja_table_builder_table_html') {
            $v = preg_replace('/(ninja_tables_builder_class_|ntb_)' . $source . '\b/', '${1}' . $dnd, $v);
        } elseif ($k === '_ninja_table_builder_table_data' && is_array($v)) {
            $v['id']         = $dnd;
            $v['table_name'] = 'Website Pricing';
        }
        update_post_meta($dnd, $k, $v);
    }
    $map['tables']['Website Pricing']  = $dnd;
    $map['extras']['tables'][]         = 'Website Pricing';
    printf("  #%-5d %-34s (Drag & Drop, copied from #%d)\n", $dnd, 'Website Pricing', $source);
    nt_extra_page('Website Pricing', 'Simple pricing. Cancel any time.', "[ninja_table_builder id=\"$dnd\"]");
} else {
    echo "  (skipped Website Pricing: no Drag & Drop pricing table to copy)\n";
}

// 11. Shipped Orders: the main Order History table, embedded with filter="Shipped" ----------------------------
if (!empty($map['tables']['Order History'])) {
    nt_extra_page('Shipped Orders', 'Orders that are on their way.', '[ninja_tables id="' . $map['tables']['Order History'] . '" filter="Shipped"]');
}

// 12. A CSV file served by this site, for the Remote CSV / JSON flow (FooTable allows local URLs) -------------
$up  = wp_upload_dir();
$dir = $up['basedir'] . '/nt-demo';
wp_mkdir_p($dir);
$csv = "Country,Capital,Continent,Population (millions)\n";
foreach ([['Japan', 'Tokyo', 'Asia', 124], ['Germany', 'Berlin', 'Europe', 84], ['Brazil', 'Brasília', 'South America', 216], ['Kenya', 'Nairobi', 'Africa', 55], ['Canada', 'Ottawa', 'North America', 40], ['Australia', 'Canberra', 'Oceania', 27], ['India', 'New Delhi', 'Asia', 1441], ['France', 'Paris', 'Europe', 68]] as $r) {
    $csv .= implode(',', $r) . "\n";
}
file_put_contents($dir . '/countries.csv', $csv);
$map['csv_url'] = $up['baseurl'] . '/nt-demo/countries.csv';
echo "  CSV  {$map['csv_url']}\n";

file_put_contents($mapFile, json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
echo "Updated scripts/screenshots/demo-tables.json\nDone.\n";
