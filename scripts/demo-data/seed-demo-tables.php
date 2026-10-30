<?php
/**
 * Seeds realistic demo tables into the local Ninja Tables site so doc screenshots look like a real,
 * well-used install (many tables, hundreds of rows, typed columns, varied colour schemes).
 *
 * Run through scripts/demo-data/seed.sh (sets the Local PHP binary + MySQL socket):
 *   ./scripts/demo-data/seed.sh            create / replace the demo tables
 *   ./scripts/demo-data/seed.sh --remove   delete only the demo tables
 *
 * Uses the plugin's own import pipeline (TableImporter: createTable → storeTableConfigWhenImporting →
 * writeIndexedRows), i.e. exactly what a CSV import does, then sets column types and appearance like a
 * user would in the editor. Every table it creates carries post meta `_nt_demo_seed = 1`; a re-run deletes
 * those first (Post::destroyTable), so it is idempotent and never touches other tables.
 * Data is deterministic (fixed random seed) so screenshots are reproducible.
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

if (!class_exists(TableImporter::class)) {
    fwrite(STDERR, "Ninja Tables is not active on this site\n");
    exit(1);
}
wp_set_current_user(1);

// ---------------------------------------------------------------------------------------------
// Remove previous demo tables
// ---------------------------------------------------------------------------------------------
$old = get_posts(['post_type' => 'ninja-table', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_seed', 'fields' => 'ids']);
foreach ($old as $id) {
    Post::destroyTable($id);
}
$oldPages = get_posts(['post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_seed', 'fields' => 'ids']);
foreach ($oldPages as $id) {
    wp_delete_post($id, true);
}
echo 'Removed ' . count($old) . ' previous demo table(s) and ' . count($oldPages) . " demo page(s)\n";
if (in_array('--remove', $argv, true)) {
    exit(0);
}

mt_srand(20261029);
$pick = function (array $a) { return $a[mt_rand(0, count($a) - 1)]; };

// ---------------------------------------------------------------------------------------------
// Shared sample data
// ---------------------------------------------------------------------------------------------
$first = ['Olivia','Liam','Emma','Noah','Ava','Ethan','Sophia','Mason','Isabella','Lucas','Mia','Aiden','Amelia','James','Harper','Benjamin','Evelyn','Elijah','Abigail','Daniel','Emily','Henry','Ella','Sebastian','Scarlett','Jack','Grace','Owen','Chloe','Samuel','Aisha','Omar','Fatima','Rahul','Priya','Kenji','Yuki','Mateo','Lucia','Hans','Ingrid','Pierre','Camille','Diego','Sofia','Tariq','Nadia','Leo','Zara','Arjun'];
$last  = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Hernandez','Lopez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Thompson','White','Harris','Clark','Lewis','Walker','Young','Allen','King','Wright','Khan','Rahman','Patel','Sharma','Tanaka','Sato','Müller','Schmidt','Dubois','Laurent','Rossi','Bianchi','Silva','Santos','Novak','Kowalski','Hansen','Nielsen','Ahmed','Chen'];
$person = function () use ($pick, $first, $last) { return [$pick($first), $pick($last)]; };

/**
 * Create one table the same way a CSV import does, then apply column types and settings.
 *
 * @param array $columns list of [key, name, data_type, extra column props]
 */
function nt_demo_table($title, $description, array $columns, array $rows, array $settings = [], $engine = 'footable')
{
    $importer = new TableImporter();
    $tableId  = $importer->createTable(['post_title' => $title, 'post_content' => $description, 'post_type' => 'ninja-table', 'post_status' => 'publish']);
    if (is_wp_error($tableId) || !$tableId) {
        throw new RuntimeException("Could not create table $title");
    }
    update_post_meta($tableId, '_nt_demo_seed', 1);

    $header = [];
    foreach ($columns as $c) {
        $header[$c[0]] = $c[1];
    }
    $importer->storeTableConfigWhenImporting($tableId, $header, $engine);

    // Column types and per-column props, as the column editor would save them.
    $saved = get_post_meta($tableId, '_ninja_table_columns', true);
    foreach ($saved as $i => $col) {
        $def = $columns[$i];
        $saved[$i]['data_type'] = $def[2];
        foreach (($def[3] ?? []) as $k => $v) {
            $saved[$i][$k] = $v;
        }
    }
    update_post_meta($tableId, '_ninja_table_columns', $saved);

    $importer->writeIndexedRows($tableId, $engine, array_keys($header), $rows);

    $current = get_post_meta($tableId, '_ninja_table_settings', true) ?: [];
    update_post_meta($tableId, '_ninja_table_settings', array_merge($current, [
        'enable_search'  => '1',
        'column_sorting' => '1',
        'show_title'     => '0',
        'css_classes'    => ['selectable', 'striped', 'vertical_centered'],
    ], $settings));
    ninjaTablesClearTableDataCache($tableId);

    printf("  #%-5d %-34s %4d rows  %s\n", $tableId, $title, count($rows), $engine);
    $GLOBALS['nt_demo_ids'][$title] = $tableId;
    return $tableId;
}

$color = function ($scheme) { return ['table_color_type' => 'pre_defined_color', 'table_color' => $scheme]; };
$money = ['thousandSeparator' => ',', 'decimalSeparator' => '.', 'textAlign' => 'right', 'contentAlign' => 'right'];
$right = ['textAlign' => 'right', 'contentAlign' => 'right'];
$date  = ['dateFormat' => 'MMM/DD/YYYY', 'formatType' => 'date'];

echo "Creating demo tables\n";

// 1. Hosting plan comparison (small, wide) -----------------------------------------------------
$tHosting = nt_demo_table('Hosting Plans Comparison', 'Compare our web hosting plans side by side.', [
    ['feature', 'Feature', 'text'], ['starter', 'Starter', 'text', ['textAlign' => 'center', 'contentAlign' => 'center']],
    ['business', 'Business', 'text', ['textAlign' => 'center', 'contentAlign' => 'center']], ['pro', 'Pro', 'text', ['textAlign' => 'center', 'contentAlign' => 'center']],
    ['enterprise', 'Enterprise', 'text', ['textAlign' => 'center', 'contentAlign' => 'center']],
], [
    ['Monthly price', '$4.99', '$9.99', '$19.99', '$49.99'],
    ['Websites', '1', '5', 'Unlimited', 'Unlimited'],
    ['SSD storage', '25 GB', '100 GB', '250 GB', '1 TB'],
    ['Bandwidth', '250 GB', 'Unmetered', 'Unmetered', 'Unmetered'],
    ['Free SSL certificate', '✓', '✓', '✓', '✓'],
    ['Daily backups', '✗', '✓', '✓', '✓'],
    ['Staging environment', '✗', '✗', '✓', '✓'],
    ['Free domain (1 year)', '✗', '✓', '✓', '✓'],
    ['Email accounts', '5', '25', '100', 'Unlimited'],
    ['Priority support', '✗', '✗', '✓', '✓'],
    ['Dedicated IP', '✗', '✗', '✗', '✓'],
    ['Uptime guarantee', '99.9%', '99.9%', '99.95%', '99.99%'],
], ['perPage' => 20] + $color('teal'));

// 2. Product price list ------------------------------------------------------------------------
$catalog = [
    'Laptops'     => [['ZenBook 14 OLED', 1099], ['MacBook Air 13" M3', 1199], ['ThinkPad X1 Carbon', 1649], ['XPS 15', 1899], ['Pavilion 15', 749], ['Swift Go 14', 829], ['Galaxy Book4 Pro', 1449], ['Surface Laptop 6', 1299]],
    'Monitors'    => [['UltraSharp 27" 4K', 579], ['Odyssey G7 32"', 699], ['ProArt PA278QV', 329], ['ZOWIE XL2546K', 499], ['LG 34" UltraWide', 449], ['ViewSonic VP2786', 799]],
    'Audio'       => [['WH-1000XM5 Headphones', 399], ['AirPods Pro (2nd gen)', 249], ['QuietComfort Ultra', 429], ['Jabra Elite 85t', 179], ['Sonos Era 100', 249], ['JBL Charge 5', 179], ['Shure MV7+', 279]],
    'Accessories' => [['MX Master 3S Mouse', 99], ['MX Keys S Keyboard', 109], ['USB-C Hub 8-in-1', 59], ['Laptop Stand Aluminium', 45], ['Webcam C920s', 69], ['Thunderbolt 4 Dock', 249], ['Wireless Charger Pad', 29], ['Portable SSD 1TB', 119]],
    'Phones'      => [['Pixel 9', 799], ['iPhone 16', 829], ['Galaxy S24', 799], ['OnePlus 12', 699], ['Nothing Phone (2a)', 349], ['Moto G Power', 299]],
    'Smart Home'  => [['Nest Thermostat', 129], ['Echo Dot (5th gen)', 49], ['Ring Video Doorbell', 99], ['Philips Hue Starter Kit', 179], ['Arlo Pro 5 Camera', 249], ['TP-Link Smart Plug (4-pack)', 39]],
];
$rows = [];
$n = 1001;
foreach ($catalog as $cat => $items) {
    foreach ($items as [$name, $price]) {
        $stock  = mt_rand(0, 9) === 0 ? 0 : mt_rand(3, 240);
        $status = $stock === 0 ? 'Out of stock' : ($stock < 15 ? 'Low stock' : 'In stock');
        $rows[] = [$name, 'SKU-' . strtoupper(substr($cat, 0, 3)) . '-' . $n++, $cat, number_format($price, 2, '.', ''), $stock, number_format(mt_rand(36, 50) / 10, 1), $status];
    }
}
$tProducts = nt_demo_table('Product Price List', 'Current prices and stock levels for our electronics catalog.', [
    ['product', 'Product', 'text'], ['sku', 'SKU', 'text'],
    ['category', 'Category', 'selection', ['selections' => implode("\n", array_keys($catalog))]],
    ['price', 'Price ($)', 'number', $money], ['stock', 'Stock', 'number', $right],
    ['rating', 'Rating', 'number', $right],
    ['status', 'Status', 'selection', ['selections' => "In stock\nLow stock\nOut of stock"]],
], $rows, ['perPage' => 15] + $color('ninja_no_color_table'));

// 3. Employee directory ------------------------------------------------------------------------
$depts = [
    'Engineering' => ['Software Engineer', 'Senior Software Engineer', 'Engineering Manager', 'QA Engineer', 'DevOps Engineer'],
    'Marketing'   => ['Marketing Specialist', 'Content Strategist', 'SEO Manager', 'Brand Designer'],
    'Sales'       => ['Account Executive', 'Sales Development Rep', 'Sales Manager'],
    'Support'     => ['Support Specialist', 'Support Team Lead', 'Technical Support Engineer'],
    'Finance'     => ['Accountant', 'Financial Analyst', 'Controller'],
    'People'      => ['HR Generalist', 'Recruiter', 'People Operations Lead'],
    'Product'     => ['Product Manager', 'Product Designer', 'UX Researcher'],
];
$offices = ['New York', 'London', 'Berlin', 'Toronto', 'Singapore', 'Sydney', 'Dhaka', 'Remote'];
$rows = [];
$used = [];
for ($i = 0; $i < 150; $i++) {
    do { [$f, $l] = $person(); } while (isset($used["$f $l"]));
    $used["$f $l"] = 1;
    $d = array_keys($depts)[mt_rand(0, count($depts) - 1)];
    $start = mktime(0, 0, 0, mt_rand(1, 12), mt_rand(1, 28), mt_rand(2015, 2026));
    $rows[] = ["$f $l", $d, $pick($depts[$d]), strtolower(substr(iconv('UTF-8', 'ASCII//TRANSLIT', $f), 0, 1) . preg_replace('/[^A-Za-z]/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $l))) . '@example.com',
        sprintf('+1 (555) %03d-%04d', mt_rand(200, 999), mt_rand(0, 9999)), $pick($offices), date('Y-m-d', $start)];
}
$tTeam = nt_demo_table('Employee Directory', 'Find colleagues by name, team or office.', [
    ['name', 'Name', 'text'], ['department', 'Department', 'selection', ['selections' => implode("\n", array_keys($depts))]],
    ['job_title', 'Job Title', 'text'], ['email', 'Email', 'text'], ['phone', 'Phone', 'text', ['breakpoints' => 'xs sm']],
    ['office', 'Office', 'selection', ['selections' => implode("\n", $offices)]], ['start_date', 'Start Date', 'date', $date + ['breakpoints' => 'xs']],
], $rows, ['perPage' => 20] + $color('blue'));

// 4. World countries (rounded public figures) -----------------------------------------------------
$countries = [
    ['China', 'Beijing', 'Asia', 1410, 9596961, 'Chinese yuan'], ['India', 'New Delhi', 'Asia', 1441, 3287263, 'Indian rupee'],
    ['United States', 'Washington, D.C.', 'North America', 335, 9833517, 'US dollar'], ['Indonesia', 'Jakarta', 'Asia', 279, 1904569, 'Indonesian rupiah'],
    ['Pakistan', 'Islamabad', 'Asia', 241, 881913, 'Pakistani rupee'], ['Nigeria', 'Abuja', 'Africa', 224, 923768, 'Nigerian naira'],
    ['Brazil', 'Brasília', 'South America', 216, 8515767, 'Brazilian real'], ['Bangladesh', 'Dhaka', 'Asia', 173, 147570, 'Bangladeshi taka'],
    ['Russia', 'Moscow', 'Europe', 144, 17098246, 'Russian ruble'], ['Mexico', 'Mexico City', 'North America', 129, 1964375, 'Mexican peso'],
    ['Japan', 'Tokyo', 'Asia', 124, 377975, 'Japanese yen'], ['Ethiopia', 'Addis Ababa', 'Africa', 127, 1104300, 'Ethiopian birr'],
    ['Philippines', 'Manila', 'Asia', 115, 300000, 'Philippine peso'], ['Egypt', 'Cairo', 'Africa', 113, 1002450, 'Egyptian pound'],
    ['Vietnam', 'Hanoi', 'Asia', 99, 331212, 'Vietnamese dong'], ['Germany', 'Berlin', 'Europe', 84, 357592, 'Euro'],
    ['Turkey', 'Ankara', 'Asia', 86, 783562, 'Turkish lira'], ['Iran', 'Tehran', 'Asia', 89, 1648195, 'Iranian rial'],
    ['Thailand', 'Bangkok', 'Asia', 72, 513120, 'Thai baht'], ['United Kingdom', 'London', 'Europe', 68, 242495, 'Pound sterling'],
    ['France', 'Paris', 'Europe', 68, 551695, 'Euro'], ['South Africa', 'Pretoria', 'Africa', 61, 1221037, 'South African rand'],
    ['Italy', 'Rome', 'Europe', 59, 301340, 'Euro'], ['Kenya', 'Nairobi', 'Africa', 55, 580367, 'Kenyan shilling'],
    ['South Korea', 'Seoul', 'Asia', 52, 100210, 'South Korean won'], ['Colombia', 'Bogotá', 'South America', 52, 1141748, 'Colombian peso'],
    ['Spain', 'Madrid', 'Europe', 48, 505990, 'Euro'], ['Argentina', 'Buenos Aires', 'South America', 46, 2780400, 'Argentine peso'],
    ['Canada', 'Ottawa', 'North America', 40, 9984670, 'Canadian dollar'], ['Poland', 'Warsaw', 'Europe', 37, 312696, 'Polish złoty'],
    ['Morocco', 'Rabat', 'Africa', 37, 446550, 'Moroccan dirham'], ['Saudi Arabia', 'Riyadh', 'Asia', 37, 2149690, 'Saudi riyal'],
    ['Peru', 'Lima', 'South America', 34, 1285216, 'Peruvian sol'], ['Malaysia', 'Kuala Lumpur', 'Asia', 34, 330803, 'Malaysian ringgit'],
    ['Australia', 'Canberra', 'Oceania', 27, 7692024, 'Australian dollar'], ['Chile', 'Santiago', 'South America', 20, 756102, 'Chilean peso'],
    ['Netherlands', 'Amsterdam', 'Europe', 18, 41850, 'Euro'], ['Sweden', 'Stockholm', 'Europe', 10.5, 450295, 'Swedish krona'],
    ['Switzerland', 'Bern', 'Europe', 8.9, 41285, 'Swiss franc'], ['New Zealand', 'Wellington', 'Oceania', 5.2, 268021, 'New Zealand dollar'],
    ['Singapore', 'Singapore', 'Asia', 5.9, 734, 'Singapore dollar'], ['Norway', 'Oslo', 'Europe', 5.5, 385207, 'Norwegian krone'],
];
nt_demo_table('World Countries', 'Population, area and currency for the world\'s major countries (rounded figures).', [
    ['country', 'Country', 'text'], ['capital', 'Capital', 'text'],
    ['continent', 'Continent', 'selection', ['selections' => "Africa\nAsia\nEurope\nNorth America\nOceania\nSouth America"]],
    ['population', 'Population (millions)', 'number', $money], ['area', 'Area (km²)', 'number', $money], ['currency', 'Currency', 'text', ['breakpoints' => 'xs sm']],
], $countries, ['perPage' => 25] + $color('green'));

// 5. Monthly sales by region (good for charts and calculations) -------------------------------------
$rows = [];
foreach (['January','February','March','April','May','June','July','August','September','October','November','December'] as $i => $m) {
    $season = 1 + 0.25 * sin(($i - 2) / 12 * 2 * M_PI) + ($i >= 10 ? 0.35 : 0);
    $na = round(148000 * $season * (1 + $i * 0.012) + mt_rand(-6000, 6000));
    $eu = round(112000 * $season * (1 + $i * 0.010) + mt_rand(-5000, 5000));
    $ap = round(86000 * $season * (1 + $i * 0.022) + mt_rand(-4000, 4000));
    $la = round(31000 * $season * (1 + $i * 0.015) + mt_rand(-2000, 2000));
    $rows[] = [$m, $na, $eu, $ap, $la, $na + $eu + $ap + $la];
}
nt_demo_table('Monthly Sales by Region 2026', 'Revenue in US dollars per region, January to December 2026.', [
    ['month', 'Month', 'text'], ['north_america', 'North America', 'number', $money], ['europe', 'Europe', 'number', $money],
    ['asia_pacific', 'Asia Pacific', 'number', $money], ['latin_america', 'Latin America', 'number', $money], ['total', 'Total', 'number', $money],
], $rows, ['perPage' => 12, 'column_sorting' => '0'] + $color('ninja_no_color_table'));

// 6. Conference schedule ---------------------------------------------------------------------------
$tracks = ['Keynote', 'Development', 'Design', 'Marketing', 'Business'];
$talks = [
    'Development' => ['Building Fast WordPress Sites in 2026', 'A Practical Guide to the Block Editor', 'Headless WordPress with Next.js', 'Writing Secure Plugins', 'Automated Testing for Themes', 'Scaling WooCommerce Stores', 'Modern PHP for WordPress Developers', 'REST API Deep Dive'],
    'Design'      => ['Accessible Design Systems', 'Designing Data-Heavy Pages', 'Typography for the Web', 'From Figma to Full Site Editing', 'Color, Contrast and Brand'],
    'Marketing'   => ['SEO That Still Works', 'Email Marketing on a Budget', 'Content Strategy for Small Teams', 'Analytics Without the Noise', 'Growing a Newsletter to 10k'],
    'Business'    => ['Pricing Your Services', 'Running a Remote Agency', 'Selling Digital Products', 'Client Onboarding That Scales', 'Building a Support Team'],
];
$rooms = ['Main Hall', 'Room A', 'Room B', 'Room C', 'Workshop Lab'];
$rows = [];
foreach (['2026-11-18', '2026-11-19', '2026-11-20'] as $d => $day) {
    $rows[] = [$day, '09:00', $d === 0 ? 'Opening Keynote: The Next Decade of the Open Web' : ($d === 1 ? 'Keynote: Lessons from 1 Million Tables' : 'Closing Keynote: Community First'), implode(' ', $person()), 'Main Hall', 'Keynote'];
    foreach (['10:15', '11:30', '13:30', '14:45', '16:00'] as $slot) {
        foreach (['Development', $pick(['Design', 'Marketing', 'Business'])] as $k => $track) {
            $rows[] = [$day, $slot, $pick($talks[$track]), implode(' ', $person()), $rooms[$k + 1 + mt_rand(0, 1) * 2], $track];
        }
    }
}
$tSchedule = nt_demo_table('Conference Schedule', 'Three days of talks, workshops and keynotes. Times are local (GMT).', [
    ['date', 'Date', 'date', $date], ['time', 'Time', 'text'], ['session', 'Session', 'text'], ['speaker', 'Speaker', 'text'],
    ['room', 'Room', 'text', ['breakpoints' => 'xs']], ['track', 'Track', 'selection', ['selections' => implode("\n", $tracks)]],
], $rows, ['perPage' => 15] + $color('violet'));

// 7. Course catalog with buttons ---------------------------------------------------------------------
$courses = [
    ['WordPress for Beginners', 'Beginner', '4 weeks', 24, 49], ['Advanced Theme Development', 'Advanced', '6 weeks', 42, 149],
    ['Plugin Development Fundamentals', 'Intermediate', '5 weeks', 35, 129], ['WooCommerce Store Setup', 'Beginner', '3 weeks', 18, 79],
    ['Mastering the Block Editor', 'Intermediate', '3 weeks', 20, 69], ['SEO for WordPress Sites', 'Beginner', '2 weeks', 14, 59],
    ['Web Performance Optimization', 'Advanced', '4 weeks', 28, 139], ['Accessibility Essentials', 'Intermediate', '3 weeks', 16, 89],
    ['Data Tables and Reporting', 'Intermediate', '2 weeks', 12, 59], ['Email Marketing Automation', 'Beginner', '3 weeks', 17, 69],
    ['JavaScript for WordPress', 'Intermediate', '6 weeks', 38, 119], ['REST API and Headless Builds', 'Advanced', '5 weeks', 30, 159],
    ['Selling Online Courses', 'Beginner', '2 weeks', 11, 49], ['Site Security and Backups', 'Intermediate', '2 weeks', 13, 79],
    ['Design Systems in Practice', 'Advanced', '4 weeks', 26, 129], ['Freelancing with WordPress', 'Beginner', '3 weeks', 15, 39],
];
$rows = [];
foreach ($courses as [$title, $level, $dur, $lessons, $price]) {
    $slug = sanitize_title($title);
    $rows[] = [$title, implode(' ', $person()), $level, $dur, $lessons, $price, home_url('/courses/' . $slug . '/')];
}
$tCourses = nt_demo_table('Course Catalog', 'Browse our online courses and enroll in a click.', [
    ['course', 'Course', 'text'], ['instructor', 'Instructor', 'text'],
    ['level', 'Level', 'selection', ['selections' => "Beginner\nIntermediate\nAdvanced"]],
    ['duration', 'Duration', 'text'], ['lessons', 'Lessons', 'number', $right], ['price', 'Price ($)', 'number', $money],
    ['enroll', 'Enroll', 'button', ['button_text' => 'Enroll now', 'link_target' => '_self', 'btn_bg_color' => '#01D5C6', 'btn_text_color' => '#ffffff', 'textAlign' => 'center', 'contentAlign' => 'center']],
], $rows, ['perPage' => 10] + $color('ninja_no_color_table'));

// 8. Order history: large table for pagination, search and the DataTables engine -----------------------
$products = [];
foreach ($catalog as $items) {
    foreach ($items as $it) {
        $products[] = $it;
    }
}
$countriesShort = ['United States', 'United Kingdom', 'Germany', 'Canada', 'Australia', 'France', 'India', 'Netherlands', 'Japan', 'Brazil', 'Bangladesh', 'Spain'];
$statuses = ['Completed', 'Completed', 'Completed', 'Completed', 'Processing', 'Shipped', 'Shipped', 'Refunded', 'Cancelled', 'On hold'];
$rows = [];
$t = mktime(9, 0, 0, 1, 2, 2026);
for ($i = 0; $i < 1200; $i++) {
    $t += mt_rand(900, 22000);
    [$pn, $pp] = $pick($products);
    $qty = mt_rand(1, 10) > 8 ? mt_rand(2, 4) : 1;
    $rows[] = ['#' . (24001 + $i), date('Y-m-d', $t), implode(' ', $person()), $pick($countriesShort), $pn, $qty, number_format($pp * $qty, 2, '.', ''), $pick($statuses)];
}
$orderCols = [
    ['order_no', 'Order', 'text'], ['order_date', 'Date', 'date', $date], ['customer', 'Customer', 'text'], ['country', 'Country', 'text', ['breakpoints' => 'xs sm']],
    ['product', 'Product', 'text'], ['qty', 'Qty', 'number', $right], ['total', 'Total ($)', 'number', $money],
    ['status', 'Status', 'selection', ['selections' => "Completed\nProcessing\nShipped\nRefunded\nCancelled\nOn hold"]],
];
nt_demo_table('Order History', 'All store orders in 2026. Search by customer, product or order number.', $orderCols, $rows,
    ['perPage' => 25, 'default_sorting' => 'new_first'] + $color('ninja_no_color_table'));
try {
    nt_demo_table('Order History (DataTables)', 'The same orders drawn by the DataTables engine, for large-table screenshots.', $orderCols, $rows,
        ['perPage' => 25, 'default_sorting' => 'new_first'] + $color('ninja_no_color_table'), 'datatables');
} catch (Throwable $e) {
    echo '  (skipped DataTables copy: ' . $e->getMessage() . ")\n";
}


// Pages that embed some tables, so the Tables list shows "Used on" and there are real front-end pages.
echo "Creating demo pages\n";
foreach ([
    ['Hosting Plans', 'Pick the plan that fits your site. All plans include free SSL and 24/7 monitoring.', $tHosting],
    ['Shop Price List', 'Prices include VAT. Stock levels update every hour.', $tProducts],
    ['Our Team', 'Meet the people behind the product.', $tTeam],
    ['WordCamp Schedule 2026', 'Three days of talks and workshops. Add sessions to your calendar.', $tSchedule],
    ['Online Courses', 'Learn at your own pace with our self-paced courses.', $tCourses],
] as [$title, $intro, $tid]) {
    $pid = wp_insert_post(['post_type' => 'page', 'post_status' => 'publish', 'post_title' => $title,
        'post_content' => "<!-- wp:paragraph --><p>$intro</p><!-- /wp:paragraph -->\n\n<!-- wp:shortcode -->[ninja_tables id=\"$tid\"]<!-- /wp:shortcode -->"]);
    update_post_meta($pid, '_nt_demo_seed', 1);
    printf("  page #%-5d %-26s %s\n", $pid, $title, get_permalink($pid));
    $GLOBALS['nt_demo_pages'][$title] = wp_make_link_relative(get_permalink($pid));
}

// Title → id map for screenshot plans ({{Employee Directory}} in a route). IDs change on every re-seed.
$map = __DIR__ . '/../screenshots/demo-tables.json';
file_put_contents($map, json_encode(['tables' => $GLOBALS['nt_demo_ids'], 'pages' => $GLOBALS['nt_demo_pages'] ?? []], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
echo "Wrote scripts/screenshots/demo-tables.json\n";
echo "Done.\n";
