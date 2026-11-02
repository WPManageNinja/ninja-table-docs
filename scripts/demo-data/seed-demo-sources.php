<?php
/**
 * Demo connected-source tables, copied from a working table of the same source that was set up in the editor
 * (the copy gets a natural title and a page). Tagged `_nt_demo_source = 1`; a re-run replaces them.
 *   ./scripts/demo-data/seed.sh --sources            create / replace
 *   ./scripts/demo-data/seed.sh --sources --remove   delete
 * Source tables are found by provider (NT_FCT_SOURCE overrides the id).
 */
if (php_sapi_name() !== 'cli') {
    exit("CLI only\n");
}
$_SERVER['HTTP_HOST']   = getenv('NT_HTTP_HOST') ?: 'localhost:10013';
$_SERVER['REQUEST_URI'] = '/';
define('WP_USE_THEMES', false);
require getenv('NT_WP_ROOT') . '/wp-load.php';

use NinjaTables\App\Models\Post;

wp_set_current_user(1);
global $wpdb;

foreach (get_posts(['post_type' => 'ninja-table', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_source', 'fields' => 'ids']) as $id) {
    Post::destroyTable($id);
}
foreach (get_posts(['post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_source', 'fields' => 'ids']) as $id) {
    wp_delete_post($id, true);
}
$mapFile = __DIR__ . '/../screenshots/demo-tables.json';
$map     = json_decode(file_get_contents($mapFile), true);
unset($map['tables']['Store Products'], $map['pages']['Shop']);
if (in_array('--remove', $argv, true)) {
    // Tables created through the UI by screenshot plans (kept, only registered in the map) -----------------------
foreach (['Country List'] as $title) {
    $tid = (int) $wpdb->get_var($wpdb->prepare("SELECT ID FROM {$wpdb->posts} WHERE post_type = 'ninja-table' AND post_status = 'publish' AND post_title = %s ORDER BY ID DESC LIMIT 1", $title));
    if ($tid) {
        $map['tables'][$title] = $tid;
    }
}
file_put_contents($mapFile, json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
    exit(0);
}

$skip = ['_nt_demo_source', '_nt_demo_seed', '_nt_demo_extra', '_last_edited_by', '_last_edited_time', '_ninja_table_cache_object', '_ninja_table_cache_html',
    '_external_cached_data', '_last_external_cached_time', '__ninja_cached_table_html', '__ninja_cached_table_html_policy'];

function nt_copy_table($source, $title, $skip)
{
    $id = wp_insert_post(['post_type' => 'ninja-table', 'post_status' => 'publish', 'post_title' => $title, 'post_content' => '']);
    foreach (get_post_meta($source) as $k => $values) {
        if (!in_array($k, $skip, true)) {
            update_post_meta($id, $k, maybe_unserialize($values[0]));
        }
    }
    update_post_meta($id, '_nt_demo_source', 1);
    ninjaTablesClearTableDataCache($id);
    return $id;
}

// FluentCart products -------------------------------------------------------------------------------
$src = (int) getenv('NT_FCT_SOURCE') ?: (int) $wpdb->get_var("SELECT pm.post_id FROM {$wpdb->postmeta} pm JOIN {$wpdb->posts} p ON p.ID = pm.post_id
    WHERE pm.meta_key = '_ninja_tables_data_provider' AND pm.meta_value = 'wp_fct' AND p.post_status = 'publish'
    AND NOT EXISTS (SELECT 1 FROM {$wpdb->postmeta} t WHERE t.post_id = p.ID AND t.meta_key = '_nt_demo_source') ORDER BY p.ID DESC LIMIT 1");
if ($src) {
    $id = nt_copy_table($src, 'Store Products', $skip);
    $page = wp_insert_post(['post_type' => 'page', 'post_status' => 'publish', 'post_title' => 'Shop',
        'post_content' => "<!-- wp:paragraph --><p>Everything in our store, ready to add to your cart.</p><!-- /wp:paragraph -->\n\n<!-- wp:shortcode -->[ninja_tables id=\"$id\"]<!-- /wp:shortcode -->"]);
    update_post_meta($page, '_nt_demo_source', 1);
    $map['tables']['Store Products'] = $id;
    $map['pages']['Shop']            = wp_make_link_relative(get_permalink($page));
    printf("  #%-5d Store Products (FluentCart, copied from #%d)  page %s\n", $id, $src, get_permalink($page));
} else {
    echo "  (skipped Store Products: no FluentCart table to copy)\n";
}
file_put_contents($mapFile, json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
