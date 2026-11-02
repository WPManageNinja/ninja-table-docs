<?php
/**
 * Demo blog for WP Posts table screenshots: a demo author, six store-blog posts (featured images from the
 * media library, a `Ninja-Post` meta value, category "Guides") and a WP Posts table limited to that author,
 * so the site's own posts never show up. Everything carries meta `_nt_demo_blog = 1`; a re-run replaces it.
 *
 *   ./scripts/demo-data/seed.sh --blog            create / replace
 *   ./scripts/demo-data/seed.sh --blog --remove   delete
 */

if (php_sapi_name() !== 'cli') {
    exit("CLI only\n");
}
$_SERVER['HTTP_HOST']   = getenv('NT_HTTP_HOST') ?: 'localhost:10013';
$_SERVER['REQUEST_URI'] = '/';
define('WP_USE_THEMES', false);
require getenv('NT_WP_ROOT') . '/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/user.php';

use NinjaTables\App\Models\Post;

wp_set_current_user(1);
global $wpdb;

// Remove previous run ---------------------------------------------------------------------------
foreach (get_posts(['post_type' => 'ninja-table', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_blog', 'fields' => 'ids']) as $id) {
    Post::destroyTable($id);
}
foreach (get_posts(['post_type' => ['post', 'page'], 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_nt_demo_blog', 'fields' => 'ids']) as $id) {
    wp_delete_post($id, true);
}
foreach (get_users(['meta_key' => '_nt_demo_blog', 'fields' => 'ID']) as $uid) {
    wp_delete_user($uid, 1);
}
$mapFile = __DIR__ . '/../screenshots/demo-tables.json';
$map     = json_decode(file_get_contents($mapFile), true);
unset($map['tables']['Store Blog Posts'], $map['pages']['Style Journal']);
if (in_array('--remove', $argv, true)) {
    file_put_contents($mapFile, json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
    echo "Removed demo blog\n";
    exit(0);
}

// Author, category, posts -----------------------------------------------------------------------
$uid = wp_insert_user(['user_login' => 'maya.lee', 'user_pass' => wp_generate_password(), 'user_email' => 'maya.lee@example.com',
    'display_name' => 'Maya Lee', 'first_name' => 'Maya', 'last_name' => 'Lee', 'role' => 'author']);
if (is_wp_error($uid)) {
    throw new RuntimeException($uid->get_error_message());
}
update_user_meta($uid, '_nt_demo_blog', 1);
$cat = term_exists('Guides', 'category') ?: wp_insert_term('Guides', 'category');
$catId = (int) (is_array($cat) ? $cat['term_id'] : $cat);

$posts = [
    ['How to Layer for a Cold Morning', 'fleece-jacket-1-4', '5 min read', '2026-10-02'],
    ['Washing Your Hoodie Without Losing Its Shape', 'classic-hoodie-1-4', '3 min read', '2026-10-06'],
    ['Five Colours That Work Together This Winter', 'classic-hoodie-2-1', '4 min read', '2026-10-11'],
    ['Zip or Pullover? Picking Your Next Hoodie', 'sweatshirt-1-4', '6 min read', '2026-10-15'],
    ['Why We Switched to Recycled Cotton', 'hoodie-mans-1-4', '7 min read', '2026-10-20'],
    ['A Fleece for Every Trail', 'fleece-jacket-3-1', '4 min read', '2026-10-24'],
];
foreach ($posts as [$title, $file, $read, $date]) {
    $pid = wp_insert_post(['post_type' => 'post', 'post_status' => 'publish', 'post_title' => $title, 'post_author' => $uid,
        'post_date' => $date . ' 09:00:00', 'post_category' => [$catId],
        'post_content' => "<!-- wp:paragraph --><p>$title. A short guide from the Winter Collection team.</p><!-- /wp:paragraph -->"]);
    update_post_meta($pid, '_nt_demo_blog', 1);
    update_post_meta($pid, 'Ninja-Post', $read);
    $att = $wpdb->get_var($wpdb->prepare("SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_wp_attached_file' AND meta_value LIKE %s LIMIT 1", '%/' . $file . '.jpeg'));
    if ($att) {
        set_post_thumbnail($pid, $att);
    }
}

// WP Posts table limited to the demo author -------------------------------------------------------
$base = ['breakpoints' => '', 'dateFormat' => null, 'header_html_content' => null, 'enable_html_content' => false, 'contentAlign' => null, 'textAlign' => null];
$columns = [
    $base + ['name' => 'Image', 'key' => 'image', 'data_type' => 'text', 'source_type' => 'custom', 'original_name' => 'image',
        'wp_post_custom_data_type' => 'featured_image', 'wp_post_custom_data_value' => 'thumbnail', 'permalinked' => 'yes', 'permalink_target' => '_self'],
    $base + ['name' => 'Title', 'key' => 'posttitle', 'data_type' => 'text', 'source_type' => 'post_data', 'original_name' => 'post_title', 'permalinked' => 'yes'],
    $base + ['name' => 'Author', 'key' => 'postauthor', 'data_type' => 'text', 'source_type' => 'post_data', 'original_name' => 'post_author', 'permalinked' => 'yes', 'filter_permalinked' => 'yes'],
    array_merge($base, ['name' => 'Create Date', 'key' => 'postdate', 'data_type' => 'date', 'dateFormat' => 'YYYY-MM-DD', 'source_type' => 'post_data', 'original_name' => 'post_date', 'permalinked' => 'no']),
    $base + ['name' => 'Category', 'key' => 'postcategory', 'data_type' => 'text', 'source_type' => 'tax_data', 'original_name' => 'post.category', 'permalinked' => 'yes', 'filter_permalinked' => 'yes', 'taxonomy_separator' => ', '],
    $base + ['name' => 'Ninja Post', 'key' => 'ninja_post', 'data_type' => 'text', 'source_type' => 'custom', 'original_name' => 'ninja_post',
        'wp_post_custom_data_type' => 'post_meta', 'wp_post_custom_data_value' => 'Ninja-Post'],
];
$tid = wp_insert_post(['post_type' => 'ninja-table', 'post_status' => 'publish', 'post_title' => 'Store Blog Posts', 'post_content' => 'Guides from our store blog.']);
update_post_meta($tid, '_nt_demo_blog', 1);
update_post_meta($tid, '_ninja_tables_data_provider', 'wp-posts');
update_post_meta($tid, '_ninja_table_columns', $columns);
update_post_meta($tid, '_ninja_table_wpposts_ds_post_types', ['post']);
update_post_meta($tid, '_ninja_table_wpposts_ds_where', [['field' => 'post_author', 'operator' => 'IN', 'value' => [(string) $uid]]]);
update_post_meta($tid, '_ninja_table_wpposts_ds_meta_query', []);
update_post_meta($tid, '_ninja_wp_posts_query_extra', ['query_limit' => '', 'order_by_column' => 'post_date', 'order_by' => 'DESC', 'current_user_posts' => 'false']);
update_post_meta($tid, '_ninja_table_settings', [
    'perPage' => 20, 'show_all' => '0', 'library' => 'footable', 'css_lib' => 'semantic_ui', 'enable_ajax' => '0',
    'css_classes' => ['selectable', 'striped', 'vertical_centered'], 'enable_search' => '1', 'column_sorting' => '1',
    'default_sorting' => 'old_first', 'sorting_type' => 'by_created_at', 'table_color' => 'ninja_no_color_table',
    'render_type' => 'legacy_table', 'frontend_loader' => 'yes', 'table_color_type' => 'pre_defined_color', 'show_title' => '0',
    'show_description' => '0', 'stackable' => 'no', 'table_font_family' => 'inherit', 'table_font_size' => 14,
]);
ninjaTablesClearTableDataCache($tid);

$page = wp_insert_post(['post_type' => 'page', 'post_status' => 'publish', 'post_title' => 'Style Journal',
    'post_content' => "<!-- wp:paragraph --><p>Guides from our store blog.</p><!-- /wp:paragraph -->\n\n<!-- wp:shortcode -->[ninja_tables id=\"$tid\"]<!-- /wp:shortcode -->"]);
update_post_meta($page, '_nt_demo_blog', 1);

$map['tables']['Store Blog Posts'] = $tid;
$map['pages']['Style Journal']     = wp_make_link_relative(get_permalink($page));
file_put_contents($mapFile, json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
printf("  #%-5d Store Blog Posts (6 posts by Maya Lee, user #%d)\n  page Style Journal %s\n", $tid, $uid, get_permalink($page));
