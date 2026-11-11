import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { zoomablePlugin } from './theme/plugin-zoomable'
import { docTreePlugin } from './theme/plugin-doc-tree'
import { docBlocksPlugin } from './theme/plugin-doc-blocks'
import { treeById, treeSidebarGroup } from './trees'

// https://vitepress.dev/reference/site-config
// Canonical origin for this site — reused by the canonical links and the absolute
// og:/twitter: URLs below. Changing the host should only ever mean editing this line.
const SITE_URL = 'https://docs.ninjatables.com'

/**
 * Per-page link-preview cards.
 *
 * `scripts/generate-featured-images.mjs` renders a branded 1200x630 PNG carrying each
 * page's own title into `public/images/featured/`, served at `/images/featured/`.
 *
 * NAMING RULE — kept in sync with that script's cardNameFor(): the card is the page's
 * served path (i.e. `pageData.relativePath`, which VitePress has already passed through
 * any `rewrites`) minus `.md`, with every `/` replaced by `--`, plus `.png`. The home
 * page's `index.md` uses `index.png`.
 *
 * Anything without a generated card falls back to `default.png`, which the generator
 * also emits — so a shared link is never left with no preview at all. The URL must be
 * absolute: relative paths are ignored by Slack/X/LinkedIn/Facebook scrapers.
 */
const FEATURED_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'featured')

function featuredImageFor(relativePath: string): string {
  const name = `${relativePath.replace(/\.md$/, '').replace(/\//g, '--')}.png`
  const file = existsSync(join(FEATURED_DIR, name)) ? name : 'default.png'
  return `${SITE_URL}/images/featured/${encodeURIComponent(file)}`
}

export default defineConfig({
  title: "Ninja Tables",
  description: "Easiest Table Builder Plugin for WordPress!",
  cleanUrls: true,
  // Serve docs/<category>/<slug>.md at /<slug>: the category folder is hidden from the URL
  rewrites: {
    'docs/:category/:slug.md': 'guide/:category/:slug.md',
  },
  srcExclude: ['README.md', 'CLAUDE.md', 'REDESIGN-PLAN.md', '.claude/**/*.md', 'scripts/**/*.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],

    // Open Graph / Twitter values that never vary per page. Every generated card is
    // 1200x630, so the dimensions live here; the image URL itself is per page and
    // is set in transformPageData() below.
    ['meta', { property: 'og:site_name', content: 'Ninja Tables' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  markdown: {
    config: (md) => {
      md.use(zoomablePlugin)
      md.use(docTreePlugin)
      md.use(docBlocksPlugin)
    }
  },
  // Per-page SEO tags: canonical URL plus the Open Graph / Twitter values that differ
  // per page, including the page's own featured image (see featuredImageFor above).
  transformPageData(pageData, { siteConfig }) {
    // `relativePath` is the path AFTER `rewrites`, so it matches the public URL.
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const url = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`
    const title = pageData.frontmatter.title || pageData.title || siteConfig.site.title
    const description =
      pageData.frontmatter.description || pageData.description || siteConfig.site.description
    const image = featuredImageFor(pageData.relativePath)

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: title }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }]
    )
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/guide/getting-started/ninja-tables-introduction' },
      { text: 'Changelog', link: '/guide/changelog/change-log' },
      { text: 'Website', link: 'https://ninjatables.com/' },
      { text: 'Support', link: '/guide/getting-started/how-to-get-support' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/getting-started/ninja-tables-introduction' },
          { text: 'Free vs Pro', link: '/guide/getting-started/free-vs-pro' },
          { text: 'Install & activate', link: '/guide/getting-started/how-to-install-and-activate-ninja-tables-plugin' },
          { text: 'Activate your Pro license', link: '/guide/getting-started/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key' },
          { text: 'Onboarding', link: '/guide/getting-started/ninja-tables-onboarding' },
          { text: 'Quick start', link: '/guide/getting-started/onboarding-setup-guide' },
          { text: 'Find your way around', link: '/guide/getting-started/admin-navigation' },
          { text: 'Glossary', link: '/guide/getting-started/ninja-tables-glossary' }
        ]
      },
      {
        text: 'Create a Table',
        collapsed: false,
        items: [
          { text: 'All table types at a glance', link: '/guide/creating-tables/table-types-overview' },
          { text: 'Create your first table', link: '/guide/creating-tables/create-your-first-table' },
          { text: 'FooTable or DataTables', link: '/guide/creating-tables/choose-table-engine' },
          { text: 'Create a FooTable', link: '/guide/creating-tables/create-a-footable-table' },
          { text: 'Import a CSV, Excel or JSON file', link: '/guide/import-export/import-table-data-from-a-csv' },
          { text: 'Import a Ninja Tables JSON file', link: '/guide/import-export/import-ninja-tables-json' },
          { text: 'Import from TablePress', link: '/guide/import-export/import-table-from-tablepress-plugin' }
        ]
      },
      {
        text: 'Add & Edit Rows',
        collapsed: true,
        items: [
          { text: 'Work in Table Rows', link: '/guide/creating-tables/working-in-table-rows' },
          { text: 'Row & cell colors', link: '/guide/styling-design/tables-row-color' },
          { text: 'Sort rows manually', link: '/guide/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort' },
          { text: 'Import rows into a table', link: '/guide/import-export/import-csv-file-to-an-existing-table' }
        ]
      },
      {
        text: 'Columns',
        collapsed: true,
        items: [
          { text: 'Add & edit a column', link: '/guide/column-settings/basic-settings' },
          {
            text: 'Column types',
            collapsed: true,
            items: [
              { text: 'Single line text', link: '/guide/field-types/single-line-text-field' },
              { text: 'Text area', link: '/guide/field-types/text-area' },
              { text: 'HTML', link: '/guide/field-types/html-field' },
              { text: 'Number', link: '/guide/field-types/numeric-value' },
              { text: 'Date', link: '/guide/field-types/date-field' },
              { text: 'Select', link: '/guide/field-types/select-field' },
              { text: 'Button/Link', link: '/guide/field-types/actionable-button-link' },
              { text: 'Image, file & lightbox', link: '/guide/field-types/image-file-lightbox' }
            ]
          },
          { text: 'Show or hide columns on mobile', link: '/guide/responsive-design/column-responsive-breakpoints' },
          { text: 'Advanced column options', link: '/guide/column-settings/advanced-settings' },
          { text: 'Conditional formatting', link: '/guide/column-settings/conditional-formatting' },
          { text: 'Transform value', link: '/guide/column-settings/transform-value' },
          { text: 'Image lightbox with Transform', link: '/guide/table-formatting/image-lightbox-using-column-transform-value' },
          { text: 'Formulas & calculations', link: '/guide/table-management/row-column-data-calculation' },
          { text: 'Merge cells (colspan)', link: '/guide/table-formatting/colspan-cell-merge' },
          { text: 'Merge rows (rowspan)', link: '/guide/table-formatting/rowspan' }
        ]
      },
      // Built from .vitepress/trees/appearance.json: edit the tree, not this group.
      treeSidebarGroup(treeById('appearance')!),
      {
        text: 'Filters & Frontend Editing',
        collapsed: true,
        items: [
          { text: 'Custom filters', link: '/guide/table-settings/custom-filters' },
          { text: 'Filter rows with a shortcode', link: '/guide/advanced-features/default-data-filtering-shortcode' },
          { text: 'Frontend editing', link: '/guide/advanced-features/frontend-editing' }
        ]
      },
      {
        text: 'Add Tables to Your Site',
        collapsed: true,
        items: [
          { text: 'Embed a table', link: '/guide/wordpress-integration/embed-tables' },
          { text: 'Shortcode reference', link: '/guide/advanced-features/shortcode-reference' },
          { text: 'Advanced shortcode options', link: '/guide/advanced-features/advanced-shortcode' },
          { text: 'Rating & icon shortcodes', link: '/guide/advanced-features/rating-icon-shortcodes' }
        ]
      },
      {
        text: 'Speed & Custom Code',
        collapsed: true,
        items: [
          { text: 'Engine, rendering & caching', link: '/guide/table-settings/table-rendering-settings' },
          { text: 'Clear caches', link: '/guide/table-management/clear-table-cache' },
          { text: 'Custom CSS & JS', link: '/guide/table-management/table-styling-css-selector' }
        ]
      },
      {
        text: 'Show Live Data',
        collapsed: true,
        items: [
          { text: 'How connected tables work', link: '/guide/data-sources/connected-tables-overview' },
          { text: 'WordPress posts & custom post types', link: '/guide/data-sources/create-wp-posts-table' },
          {
            text: 'Custom columns for posts & products',
            collapsed: true,
            items: [
              { text: 'All column types', link: '/guide/wordpress-integration/dynamic-columns-reference' },
              { text: 'Post meta & custom fields', link: '/guide/wordpress-integration/post-meta-field' },
              { text: 'ACF fields', link: '/guide/wordpress-integration/acf-field-integration-with-ninja-tables-column' },
              { text: 'Featured image', link: '/guide/wordpress-integration/featured-image' },
              { text: 'Shortcodes & computed values', link: '/guide/wordpress-integration/shortcode-computed-value-or-html-in-wp-post-woocommerce-table' },
              { text: 'Add a custom column', link: '/guide/wordpress-integration/create-custom-column-in-wp-post-cpt-woocommerce-table' }
            ]
          },
          { text: 'WooCommerce products', link: '/guide/data-sources/woocommerce-integration' },
          { text: 'Bulk add to cart & compare', link: '/guide/table-management/woocommerce-product-comparison-bulk-add-to-cart' },
          { text: 'WooCommerce reviews', link: '/guide/data-sources/woocommerce-product-reviews-table' },
          { text: 'Average rating column', link: '/guide/data-sources/woocommerce-product-average-rating-column' },
          { text: 'FluentCart products', link: '/guide/data-sources/fluentcart-integration' },
          { text: 'Fluent Forms entries', link: '/guide/data-sources/fluent-forms-integration' },
          { text: 'Google Sheets', link: '/guide/data-sources/google-sheets-integration' },
          { text: 'Google Sheets & CSV auto sync', link: '/guide/data-sources/google-sheets-csv-auto-sync' },
          { text: 'Remote CSV', link: '/guide/data-sources/construct-table-from-csv' },
          { text: 'Custom SQL query', link: '/guide/data-sources/create-table-from-custom-sql' },
          { text: 'Connect a remote database', link: '/guide/data-sources/custom-sql-remote-database' }
        ]
      },
      {
        text: 'Drag & Drop Builder',
        collapsed: true,
        items: [
          { text: 'Create a Drag & Drop table', link: '/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables' },
          { text: 'Templates', link: '/guide/drag-drop-tables/drag-drop-templates' },
          { text: 'Builder tour', link: '/guide/drag-drop-tables/drag-drop-builder-tour' },
          { text: 'Rows & columns', link: '/guide/drag-drop-settings/drag-drop-rows-columns' },
          { text: 'Cell settings', link: '/guide/drag-drop-settings/drag-drop-cell-settings' },
          {
            text: 'Elements',
            collapsed: true,
            items: [
              { text: 'Text', link: '/guide/drag-drop-elements/text-element' },
              { text: 'Button', link: '/guide/drag-drop-elements/button-element' },
              { text: 'Icon (Pro)', link: '/guide/drag-drop-elements/icon-element' },
              { text: 'Image (Pro)', link: '/guide/drag-drop-elements/image-element' },
              { text: 'List', link: '/guide/drag-drop-elements/list-element' },
              { text: 'Styled List (Pro)', link: '/guide/drag-drop-elements/styled-list' },
              { text: 'Rating', link: '/guide/drag-drop-elements/star-rating-element-in-ninja-tables-drag-and-drop' },
              { text: 'Progress', link: '/guide/drag-drop-elements/progress-bar' },
              { text: 'Ribbon (Pro)', link: '/guide/drag-drop-elements/ribbon-element' },
              { text: 'Text Icon (Pro)', link: '/guide/drag-drop-elements/text-icon-pro' },
              { text: 'HTML', link: '/guide/drag-drop-elements/html-element' },
              { text: 'Shortcode', link: '/guide/drag-drop-elements/shortcode-element' }
            ]
          },
          { text: 'Table settings', link: '/guide/drag-drop-settings/ninja-tables-drag-and-drop-table-settings' },
          { text: 'Element spacing', link: '/guide/drag-drop-settings/spacing' },
          { text: 'Mobile & tablet layout', link: '/guide/drag-drop-settings/responsive-table-design' }
        ]
      },
      {
        text: 'Manage Tables & Settings',
        collapsed: true,
        items: [
          { text: 'The Tables list', link: '/guide/table-management/tables-list' },
          { text: 'Title, caption & description', link: '/guide/table-management/table-title-description-settings' },
          { text: 'Duplicate a table', link: '/guide/table-management/table-cloning-duplicating' },
          { text: 'Export a table', link: '/guide/import-export/export-ninja-tables-csv-json' },
          { text: 'Settings overview', link: '/guide/table-management/tools-and-settings' },
          { text: 'Who can manage tables', link: '/guide/table-management/define-permission-for-table-users' }
        ]
      },
      {
        text: 'Charts',
        collapsed: true,
        items: [
          { text: 'Install Ninja Charts', link: '/guide/ninja-charts/how-to-install-ninja-charts' },
          { text: 'Getting started with Ninja Charts', link: '/guide/ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin' },
          { text: 'Charts from Ninja Tables data', link: '/guide/ninja-charts/create-ninja-charts-with-ninja-tables-data' },
          { text: 'Charts from Fluent Forms', link: '/guide/ninja-charts/create-ninja-charts-with-fluent-forms-entries' },
          { text: 'Manual charts', link: '/guide/ninja-charts/how-to-create-chart-manually-in-ninja-charts' },
          { text: 'Dynamic charts', link: '/guide/ninja-charts/how-to-create-dynamic-charts-with-ninja-charts' },
          { text: 'Data range picker', link: '/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts' },
          { text: 'Customize charts', link: '/guide/ninja-charts/how-to-customize-charts-in-ninja-charts' },
          { text: 'Manage charts', link: '/guide/ninja-charts/manage-ninja-charts' },
          { text: 'Add a chart to a page', link: '/guide/ninja-charts/embed-ninja-charts' },
          { text: 'Hooks, filters and access', link: '/guide/ninja-charts/ninja-charts-hooks-and-access' }
        ]
      },
      {
        text: 'Help & Updates',
        collapsed: true,
        items: [
          { text: 'How to get support', link: '/guide/getting-started/how-to-get-support' },
          { text: 'Changelog', link: '/guide/changelog/change-log' }
        ]
      }
    ]
  }
})
