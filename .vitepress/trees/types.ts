/**
 * Doc tree: one data file per sidebar group (`.vitepress/trees/<id>.json`).
 * It is the single source of truth for that group's overview page, the "you are here"
 * strip on its child pages and its sidebar leaves. Plain JSON so `scripts/qa/check-trees.mjs`
 * can read it without a TypeScript loader.
 */
export interface TreeNode {
  id: string
  /** Name shown in the tree and the strip. */
  label: string
  /** Absolute flat URL, e.g. `/table-font-settings`. */
  link: string
  /** Short sidebar label when it differs from `label`. */
  sidebar?: string
  /** `true` = Pro only. `'partial'` = free with Pro extras (see `proNote`). */
  pro?: boolean | 'partial'
  proNote?: string
  /** Set `false` for a page that lives in another sidebar group (kept out of this sidebar). */
  inGroup?: boolean
  /** Sub-heading inside a branch; consecutive nodes with the same value are grouped. */
  group?: string
  /** What the setting changes on the table. Supports **bold**. */
  changes: string
  /** What visitors see on the live site. Supports **bold**. */
  visitors: string
}

export interface TreeBranch {
  id: string
  label: string
  /** Where to find it in the plugin, e.g. `Appearance › Colors tab`. */
  where: string
  goal: string
  nodes: TreeNode[]
}

export interface DocTree {
  id: string
  title: string
  /** Overview page that hosts the tree. */
  overview: string
  sidebarOverviewText: string
  hero: {
    eyebrow: string
    title: string
    lead: string
    actions: { text: string; link: string; primary?: boolean }[]
  }
  /** Quick "jump straight to" tiles. `to` is a node id. */
  tasks: { text: string; sub: string; to: string }[]
  treeIntro: string
  branches: TreeBranch[]
}
