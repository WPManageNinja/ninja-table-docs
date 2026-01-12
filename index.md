---
layout: home

hero:
  name: "Ninja Tables"
  text: "Complete Documentation"
  tagline: "Easiest Table Builder Plugin in WordPress! Create stunning responsive tables with drag & drop builder, multiple data sources, and advanced customization options."
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started/how-to-install-and-activate-ninja-tables-plugin
    - theme: alt
      text: View Introduction
      link: /guide/getting-started/ninja-tables-introduction
---

<style>
.home-docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.home-doc-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  height: 100%;
}

.home-doc-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.home-doc-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.home-doc-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: var(--vp-c-text-1);
}

.home-doc-details {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1rem 0;
  flex-grow: 1;
}

.home-doc-link {
  font-size: 0.9rem;
  color: var(--vp-c-brand);
  font-weight: 500;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.home-doc-card:hover .home-doc-link {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .home-docs-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .home-doc-card {
    padding: 1.5rem;
  }
}
</style>

<div class="home-docs-grid">

<a href="/guide/getting-started/ninja-tables-introduction" class="home-doc-card">
  <div class="home-doc-icon">🚀</div>
  <h3 class="home-doc-title">Getting Started</h3>
  <p class="home-doc-details">Learn how to install, activate, and create your first table with Ninja Tables. Perfect for beginners who want to get started quickly.</p>
  <span class="home-doc-link">Get Started →</span>
</a>

<a href="/guide/creating-tables/create-your-first-table" class="home-doc-card">
  <div class="home-doc-icon">📊</div>
  <h3 class="home-doc-title">Creating Tables</h3>
  <p class="home-doc-details">Master table creation with our drag & drop builder. Learn to create tables manually or using drag & drop elements with ease.</p>
  <span class="home-doc-link">Learn More →</span>
</a>

<a href="/guide/data-sources/construct-table-from-csv" class="home-doc-card">
  <div class="home-doc-icon">🔌</div>
  <h3 class="home-doc-title">Data Sources & Integration</h3>
  <p class="home-doc-details">Connect with CSV, Google Sheets, WooCommerce, Fluent Forms, WordPress Posts, and more. Import data seamlessly from various sources.</p>
  <span class="home-doc-link">View Integrations →</span>
</a>

<a href="/guide/column-settings/basic-settings" class="home-doc-card">
  <div class="home-doc-icon">⚙️</div>
  <h3 class="home-doc-title">Table Configuration</h3>
  <p class="home-doc-details">Configure columns, field types, and table settings. Customize basic and advanced settings for your tables to match your needs.</p>
  <span class="home-doc-link">Configure Tables →</span>
</a>

<a href="/guide/styling-design/table-style-settings" class="home-doc-card">
  <div class="home-doc-icon">🎨</div>
  <h3 class="home-doc-title">Styling & Design</h3>
  <p class="home-doc-details">Customize colors, fonts, pagination, sorting, and responsive design. Make your tables look exactly how you want with 100+ options.</p>
  <span class="home-doc-link">Style Tables →</span>
</a>

<a href="/guide/drag-drop-elements/text-element" class="home-doc-card">
  <div class="home-doc-icon">🧩</div>
  <h3 class="home-doc-title">Drag & Drop Elements</h3>
  <p class="home-doc-details">Add buttons, icons, images, lists, progress bars, ribbons, and more to your tables with our intuitive drag & drop interface.</p>
  <span class="home-doc-link">Explore Elements →</span>
</a>

<a href="/guide/table-management/table-title-description-settings" class="home-doc-card">
  <div class="home-doc-icon">📦</div>
  <h3 class="home-doc-title">Table Management</h3>
  <p class="home-doc-details">Manage your tables efficiently. Clone, sort rows, calculate data, set permissions, and perform bulk operations with ease.</p>
  <span class="home-doc-link">Manage Tables →</span>
</a>

<a href="/guide/import-export/import-table-data-from-a-csv" class="home-doc-card">
  <div class="home-doc-icon">📥</div>
  <h3 class="home-doc-title">Import & Export</h3>
  <p class="home-doc-details">Import data from CSV, JSON, or TablePress. Export your tables to CSV or JSON format for backup or migration purposes.</p>
  <span class="home-doc-link">Import/Export →</span>
</a>

<a href="/guide/wordpress-integration/post-meta-field" class="home-doc-card">
  <div class="home-doc-icon">🔗</div>
  <h3 class="home-doc-title">WordPress Integration</h3>
  <p class="home-doc-details">Integrate with ACF, post meta fields, featured images, and create custom columns from WordPress data seamlessly.</p>
  <span class="home-doc-link">Integrate →</span>
</a>

<a href="/guide/advanced-features/frontend-editing" class="home-doc-card">
  <div class="home-doc-icon">🚀</div>
  <h3 class="home-doc-title">Advanced Features</h3>
  <p class="home-doc-details">Frontend editing, advanced shortcodes, data filtering, and table formatting options for power users and developers.</p>
  <span class="home-doc-link">Advanced Features →</span>
</a>

<a href="/guide/ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin" class="home-doc-card">
  <div class="home-doc-icon">📈</div>
  <h3 class="home-doc-title">Ninja Charts</h3>
  <p class="home-doc-details">Create beautiful charts from your table data. Dynamic charts, manual charts, and advanced data visualization options.</p>
  <span class="home-doc-link">Create Charts →</span>
</a>

<a href="/guide/changelog/change-log" class="home-doc-card">
  <div class="home-doc-icon">📚</div>
  <h3 class="home-doc-title">Resources</h3>
  <p class="home-doc-details">View changelog, updates, and additional resources to stay up-to-date with the latest Ninja Tables features and improvements.</p>
  <span class="home-doc-link">View Resources →</span>
</a>

</div>

