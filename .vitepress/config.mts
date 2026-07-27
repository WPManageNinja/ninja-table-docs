import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ninja Tables",
  description: "Easiest Table Builder Plugin in WordPress!",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/guide/getting-started/ninja-tables-introduction' },
      { text: 'Changelog', link: '/guide/changelog/change-log' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/getting-started/ninja-tables-introduction' },
          { text: 'Installation & Activation', link: '/guide/getting-started/how-to-install-and-activate-ninja-tables-plugin' },
          { text: 'Upgrade to Pro', link: '/guide/getting-started/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key' }
        ]
      },
      {
        text: 'Creating Tables',
        items: [
          { text: 'Create Your First Table', link: '/guide/creating-tables/create-your-first-table' },
          {
            text: 'Drag & Drop Tables',
            collapsed: true,
            items: [
              { text: 'How to Create Drag & Drop Tables', link: '/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables' },
              { text: 'Table Settings', link: '/guide/drag-drop-settings/ninja-tables-drag-and-drop-table-settings' },
              { text: 'Responsive Design', link: '/guide/drag-drop-settings/responsive-table-design' },
              { text: 'Spacing', link: '/guide/drag-drop-settings/spacing' },
              { text: 'Background Color', link: '/guide/drag-drop-settings/table-background-color-customizing-ninja-tables-drag-and-drop' },
              { text: 'Manage Cells', link: '/guide/drag-drop-settings/manage-cells-in-ninja-tables-drag-and-drop' },
              {
                text: 'Drag & Drop Elements',
                collapsed: true,
                items: [
                  { text: 'Text Element', link: '/guide/drag-drop-elements/text-element' },
                  { text: 'Button Element', link: '/guide/drag-drop-elements/button-element' },
                  { text: 'Icon Element', link: '/guide/drag-drop-elements/icon-element' },
                  { text: 'Image Element', link: '/guide/drag-drop-elements/image-element' },
                  { text: 'HTML Element', link: '/guide/drag-drop-elements/html-element' },
                  { text: 'List Element', link: '/guide/drag-drop-elements/list-element' },
                  { text: 'Star Rating', link: '/guide/drag-drop-elements/star-rating-element-in-ninja-tables-drag-and-drop' },
                  { text: 'Progress Bar', link: '/guide/drag-drop-elements/progress-bar' },
                  { text: 'Shortcode Element', link: '/guide/drag-drop-elements/shortcode-element' },
                  { text: 'Styled List', link: '/guide/drag-drop-elements/styled-list' },
                  { text: 'Ribbon Element', link: '/guide/drag-drop-elements/ribbon-element' },
                  { text: 'Text Icon Pro', link: '/guide/drag-drop-elements/text-icon-pro' }
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Data Sources & Integration',
        items: [
          { text: 'CSV Import', link: '/guide/data-sources/construct-table-from-csv' },
          { text: 'Google Sheets Integration', link: '/guide/data-sources/google-sheets-integration' },
          { text: 'WooCommerce Integration', link: '/guide/data-sources/woocommerce-integration' },
          { text: 'Fluent Forms Integration', link: '/guide/data-sources/fluent-forms-integration' },
          { text: 'WordPress Posts', link: '/guide/data-sources/create-wp-posts-table' },
          { text: 'Custom SQL Query', link: '/guide/data-sources/create-table-from-custom-sql' },
          { text: 'Ninja Charts Integration', link: '/guide/data-sources/ninja-charts-integration' }
        ]
      },
      {
        text: 'Table Configuration',
        items: [
          {
            text: 'Column Settings',
            collapsed: true,
            items: [
              { text: 'Basic Settings', link: '/guide/column-settings/basic-settings' },
              { text: 'Advanced Settings', link: '/guide/column-settings/advanced-settings' },
              { text: 'Transform Value', link: '/guide/column-settings/transform-value' },
              { text: 'Conditional Formatting', link: '/guide/column-settings/conditional-formatting' }
            ]
          },
          {
            text: 'Field Types',
            collapsed: true,
            items: [
              { text: 'Text Field', link: '/guide/field-types/single-line-text-field' },
              { text: 'Text Area', link: '/guide/field-types/text-area' },
              { text: 'HTML Field', link: '/guide/field-types/html-field' },
              { text: 'Numeric Value', link: '/guide/field-types/numeric-value' },
              { text: 'Date Field', link: '/guide/field-types/date-field' },
              { text: 'Select Field', link: '/guide/field-types/select-field' },
              { text: 'Image & File', link: '/guide/field-types/image-file-lightbox' },
              { text: 'Action Button', link: '/guide/field-types/actionable-button-link' }
            ]
          },
          {
            text: 'Table Settings',
            collapsed: true,
            items: [
              { text: 'Language Settings', link: '/guide/table-settings/language-settings' },
              { text: 'Custom Filters', link: '/guide/table-settings/custom-filters' },
              { text: 'CSV & Print Button', link: '/guide/table-settings/csv-and-print-button' },
              { text: 'Rendering Settings', link: '/guide/table-settings/table-rendering-settings' },
              { text: 'Column Rearrangement', link: '/guide/table-settings/column-rearrangement' }
            ]
          }
        ]
      },
      {
        text: 'Styling & Design',
        items: [
          { text: 'Table Style Settings', link: '/guide/styling-design/table-style-settings' },
          { text: 'Color Settings', link: '/guide/styling-design/table-color-settings' },
          { text: 'Font Settings', link: '/guide/styling-design/table-font-settings' },
          { text: 'Row Colors', link: '/guide/styling-design/tables-row-color' },
          { text: 'Pagination', link: '/guide/styling-design/pagination' },
          { text: 'Sorting', link: '/guide/styling-design/sorting' },
          { text: 'Search & Filter', link: '/guide/styling-design/add-or-remove-search-or-filter-functionality' },
          {
            text: 'Responsive Design',
            collapsed: true,
            items: [
              { text: 'Column Breakpoints', link: '/guide/responsive-design/column-responsive-breakpoints' },
              { text: 'Stackable Table', link: '/guide/responsive-design/stackable-table' }
            ]
          },
          { text: 'Other Design Settings', link: '/guide/styling-design/other-design-settings' }
        ]
      },
      {
        text: 'Table Management',
        items: [
          { text: 'Table Title & Description', link: '/guide/table-management/table-title-description-settings' },
          { text: 'Tools & Settings', link: '/guide/table-management/tools-and-settings' },
          { text: 'Table Cloning', link: '/guide/table-management/table-cloning-duplicating' },
          { text: 'Row Sorting', link: '/guide/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort' },
          { text: 'Data Calculation', link: '/guide/table-management/row-column-data-calculation' },
          { text: 'User Permissions', link: '/guide/table-management/define-permission-for-table-users' },
          { text: 'CSS Styling', link: '/guide/table-management/table-styling-css-selector' },
          { text: 'WooCommerce Bulk Actions', link: '/guide/table-management/woocommerce-product-comparison-bulk-add-to-cart' }
        ]
      },
      {
        text: 'Import & Export',
        items: [
          { text: 'Import CSV Data', link: '/guide/import-export/import-table-data-from-a-csv' },
          { text: 'Import CSV to Existing Table', link: '/guide/import-export/import-csv-file-to-an-existing-table' },
          { text: 'Import from TablePress', link: '/guide/import-export/import-table-from-tablepress-plugin' },
          { text: 'Import JSON', link: '/guide/import-export/import-ninja-tables-json' },
          { text: 'Export CSV/JSON', link: '/guide/import-export/export-ninja-tables-csv-json' }
        ]
      },
      {
        text: 'WordPress Integration',
        items: [
          { text: 'Post Meta Fields', link: '/guide/wordpress-integration/post-meta-field' },
          { text: 'Featured Image', link: '/guide/wordpress-integration/featured-image' },
          { text: 'ACF Field Integration', link: '/guide/wordpress-integration/acf-field-integration-with-ninja-tables-column' },
          { text: 'Custom Columns', link: '/guide/wordpress-integration/create-custom-column-in-wp-post-cpt-woocommerce-table' },
          { text: 'ACF Metabox Integration', link: '/guide/wordpress-integration/acf-metabox-jetengine-toolset-pods-integration-with-ninja-tables' },
          { text: 'Shortcode Computed Value', link: '/guide/wordpress-integration/shortcode-computed-value-or-html-in-wp-post-woocommerce-table' }
        ]
      },
      {
        text: 'Advanced Features',
        items: [
          { text: 'Frontend Editing', link: '/guide/advanced-features/frontend-editing' },
          { text: 'Advanced Shortcode', link: '/guide/advanced-features/advanced-shortcode' },
          { text: 'Data Filtering Shortcode', link: '/guide/advanced-features/default-data-filtering-shortcode' },
          {
            text: 'Table Formatting',
            collapsed: true,
            items: [
              { text: 'Cell Merge (Colspan)', link: '/guide/table-formatting/colspan-cell-merge' },
              { text: 'Rowspan', link: '/guide/table-formatting/rowspan' },
              { text: 'Image Lightbox', link: '/guide/table-formatting/image-lightbox-using-column-transform-value' },
              { text: 'Google Sheets Links', link: '/guide/table-formatting/hyperlinks-from-google-sheets' }
            ]
          }
        ]
      },
      {
        text: 'Ninja Charts',
        items: [
          { text: 'Getting Started', link: '/guide/ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin' },
          { text: 'Installation', link: '/guide/ninja-charts/how-to-install-ninja-charts' },
          { text: 'Create Dynamic Charts', link: '/guide/ninja-charts/how-to-create-dynamic-charts-with-ninja-charts' },
          { text: 'Create Manual Charts', link: '/guide/ninja-charts/how-to-create-chart-manually-in-ninja-charts' },
          { text: 'Data Range Picker', link: '/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts' },
          { text: 'Customize Charts', link: '/guide/ninja-charts/how-to-customize-charts-in-ninja-charts' },
          { text: 'Fluent Forms Integration', link: '/guide/ninja-charts/create-ninja-charts-with-fluent-forms-entries' },
          { text: 'Ninja Tables Integration', link: '/guide/ninja-charts/create-ninja-charts-with-ninja-tables-data' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Changelog', link: '/guide/changelog/change-log' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
