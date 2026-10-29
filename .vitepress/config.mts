import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { zoomablePlugin } from './theme/plugin-zoomable'

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
    'docs/:category/:slug.md': ':slug.md',
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
      { text: 'User Guide', link: '/ninja-tables-introduction' },
      { text: 'Changelog', link: '/change-log' },
      { text: 'Website', link: 'https://ninjatables.com/' },
      { text: 'Support', link: '/how-to-get-support' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/ninja-tables-introduction' },
          { text: 'Install & activate', link: '/how-to-install-and-activate-ninja-tables-plugin' },
          { text: 'Activate your Pro license', link: '/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key' },
          { text: 'Quick start: your first table', link: '/onboarding-setup-guide' },
          { text: 'Free vs Pro', link: '/free-vs-pro' },
          { text: 'Glossary', link: '/ninja-tables-glossary' }
        ]
      },
      {
        text: 'Create a Table',
        collapsed: false,
        items: [
          { text: 'All table types at a glance', link: '/table-types-overview' },
          { text: 'Create your first table', link: '/create-your-first-table' },
          { text: 'FooTable or DataTables', link: '/choose-table-engine' },
          { text: 'Import a CSV, Excel or JSON file', link: '/import-table-data-from-a-csv' },
          { text: 'Import from TablePress', link: '/import-table-from-tablepress-plugin' },
          { text: 'Import a Ninja Tables JSON file', link: '/import-ninja-tables-json' }
        ]
      },
      {
        text: 'Add & Edit Rows',
        collapsed: true,
        items: [
          { text: 'Work in Table Rows', link: '/working-in-table-rows' },
          { text: 'Sort rows manually', link: '/rearrangement-of-rows-in-ninja-tables-manual-row-sort' },
          { text: 'Row & cell colors', link: '/tables-row-color' },
          { text: 'Import rows into a table', link: '/import-csv-file-to-an-existing-table' },
          { text: 'Export a table', link: '/export-ninja-tables-csv-json' },
          { text: 'Duplicate a table', link: '/table-cloning-duplicating' }
        ]
      },
      {
        text: 'Columns',
        collapsed: true,
        items: [
          { text: 'Add & edit a column', link: '/basic-settings' },
          { text: 'Show or hide columns on mobile', link: '/column-responsive-breakpoints' },
          { text: 'Advanced column options', link: '/advanced-settings' },
          { text: 'Conditional formatting', link: '/conditional-formatting' },
          { text: 'Transform value', link: '/transform-value' },
          { text: 'Row & column calculations', link: '/row-column-data-calculation' },
          { text: 'Merge cells (colspan)', link: '/colspan-cell-merge' },
          { text: 'Merge rows (rowspan)', link: '/rowspan' },
          { text: 'Image lightbox with Transform', link: '/image-lightbox-using-column-transform-value' },
          {
            text: 'Column types',
            collapsed: true,
            items: [
              { text: 'Single line text', link: '/single-line-text-field' },
              { text: 'Text area', link: '/text-area' },
              { text: 'HTML', link: '/html-field' },
              { text: 'Number', link: '/numeric-value' },
              { text: 'Date', link: '/date-field' },
              { text: 'Select', link: '/select-field' },
              { text: 'Button/Link', link: '/actionable-button-link' },
              { text: 'Image, file & lightbox', link: '/image-file-lightbox' }
            ]
          }
        ]
      },
      {
        text: 'Appearance',
        collapsed: true,
        items: [
          { text: 'Appearance overview', link: '/table-style-settings' },
          { text: 'Colors', link: '/table-color-settings' },
          { text: 'Fonts', link: '/table-font-settings' },
          { text: 'Search box', link: '/add-or-remove-search-or-filter-functionality' },
          { text: 'Sorting', link: '/sorting' },
          { text: 'Pagination', link: '/pagination' },
          { text: 'Sticky header & first column', link: '/other-design-settings' },
          { text: 'Mobile view & row details', link: '/stackable-table' },
          { text: 'Export & print buttons', link: '/csv-and-print-button' },
          { text: 'Use a design as the default', link: '/use-design-as-default' }
        ]
      },
      {
        text: 'Filters & Frontend Editing',
        collapsed: true,
        items: [
          { text: 'Custom filters', link: '/custom-filters' },
          { text: 'Frontend editing', link: '/frontend-editing' },
          { text: 'Filter rows with a shortcode', link: '/default-data-filtering-shortcode' }
        ]
      },
      {
        text: 'Performance & Custom Code',
        collapsed: true,
        items: [
          { text: 'Engine, rendering & caching', link: '/table-rendering-settings' },
          { text: 'Custom CSS & JS', link: '/table-styling-css-selector' }
        ]
      },
      {
        text: 'Show Live Data',
        collapsed: true,
        items: [
          { text: 'How connected tables work', link: '/connected-tables-overview' },
          { text: 'WordPress posts & custom post types', link: '/create-wp-posts-table' },
          { text: 'WooCommerce products', link: '/woocommerce-integration' },
          { text: 'Bulk add to cart & compare', link: '/woocommerce-product-comparison-bulk-add-to-cart' },
          { text: 'WooCommerce reviews', link: '/woocommerce-product-reviews-table' },
          { text: 'Average rating column', link: '/woocommerce-product-average-rating-column' },
          { text: 'FluentCart products', link: '/fluentcart-integration' },
          { text: 'Fluent Forms entries', link: '/fluent-forms-integration' },
          { text: 'Google Sheets', link: '/google-sheets-integration' },
          { text: 'Google Sheets & CSV auto sync', link: '/google-sheets-csv-auto-sync' },
          { text: 'Remote CSV', link: '/construct-table-from-csv' },
          { text: 'Custom SQL query', link: '/create-table-from-custom-sql' },
          { text: 'Connect a remote database', link: '/custom-sql-remote-database' },
          {
            text: 'Custom columns for posts & products',
            collapsed: true,
            items: [
              { text: 'All column types', link: '/dynamic-columns-reference' },
              { text: 'Post meta & custom fields', link: '/post-meta-field' },
              { text: 'ACF fields', link: '/acf-field-integration-with-ninja-tables-column' },
              { text: 'Featured image', link: '/featured-image' },
              { text: 'Shortcodes & computed values', link: '/shortcode-computed-value-or-html-in-wp-post-woocommerce-table' },
              { text: 'Add a custom column', link: '/create-custom-column-in-wp-post-cpt-woocommerce-table' }
            ]
          }
        ]
      },
      {
        text: 'Drag & Drop Builder',
        collapsed: true,
        items: [
          { text: 'Create a Drag & Drop table', link: '/how-to-create-your-first-drag-and-drop-table-with-ninja-tables' },
          { text: 'Builder tour', link: '/drag-drop-builder-tour' },
          { text: 'Templates', link: '/drag-drop-templates' },
          { text: 'Rows & columns', link: '/drag-drop-rows-columns' },
          { text: 'Cell settings', link: '/drag-drop-cell-settings' },
          { text: 'Table settings', link: '/ninja-tables-drag-and-drop-table-settings' },
          { text: 'Mobile & tablet layout', link: '/responsive-table-design' },
          { text: 'Element spacing', link: '/spacing' },
          {
            text: 'Elements',
            collapsed: true,
            items: [
              { text: 'Text', link: '/text-element' },
              { text: 'Button', link: '/button-element' },
              { text: 'Icon (Pro)', link: '/icon-element' },
              { text: 'Image (Pro)', link: '/image-element' },
              { text: 'List', link: '/list-element' },
              { text: 'Styled List (Pro)', link: '/styled-list' },
              { text: 'Rating', link: '/star-rating-element-in-ninja-tables-drag-and-drop' },
              { text: 'Progress', link: '/progress-bar' },
              { text: 'Ribbon (Pro)', link: '/ribbon-element' },
              { text: 'Text Icon (Pro)', link: '/text-icon-pro' },
              { text: 'HTML', link: '/html-element' },
              { text: 'Shortcode', link: '/shortcode-element' }
            ]
          }
        ]
      },
      {
        text: 'Add Tables to Your Site',
        collapsed: true,
        items: [
          { text: 'Embed a table', link: '/embed-tables' },
          { text: 'Shortcode reference', link: '/shortcode-reference' },
          { text: 'Advanced shortcode options', link: '/advanced-shortcode' },
          { text: 'Rating & icon shortcodes', link: '/rating-icon-shortcodes' }
        ]
      },
      {
        text: 'Manage Tables & Settings',
        collapsed: true,
        items: [
          { text: 'The Tables list', link: '/tables-list' },
          { text: 'Title, caption & description', link: '/table-title-description-settings' },
          { text: 'Settings overview', link: '/tools-and-settings' },
          { text: 'Who can manage tables', link: '/define-permission-for-table-users' },
          { text: 'Clear caches', link: '/clear-table-cache' }
        ]
      },
      {
        text: 'Charts',
        collapsed: true,
        items: [
          { text: 'Getting started with Ninja Charts', link: '/getting-started-with-ninja-charts-free-wordpress-chart-plugin' },
          { text: 'Install Ninja Charts', link: '/how-to-install-ninja-charts' },
          { text: 'Dynamic charts', link: '/how-to-create-dynamic-charts-with-ninja-charts' },
          { text: 'Manual charts', link: '/how-to-create-chart-manually-in-ninja-charts' },
          { text: 'Data range picker', link: '/how-to-use-data-range-picker-in-ninja-charts' },
          { text: 'Customize charts', link: '/how-to-customize-charts-in-ninja-charts' },
          { text: 'Charts from Fluent Forms', link: '/create-ninja-charts-with-fluent-forms-entries' },
          { text: 'Charts from Ninja Tables data', link: '/create-ninja-charts-with-ninja-tables-data' }
        ]
      },
      {
        text: 'For Developers',
        collapsed: true,
        items: [
          { text: 'Hooks & filters', link: '/hooks-and-filters' },
          { text: 'Code recipes', link: '/developer-code-recipes' }
        ]
      },
      {
        text: 'Help & Updates',
        collapsed: true,
        items: [
          { text: 'How to get support', link: '/how-to-get-support' },
          { text: 'Changelog', link: '/change-log' }
        ]
      }
    ]
  }
})
