import type { DocTree, TreeNode } from './types'
import appearance from './appearance.json'
import product from './product.json'

/**
 * Every tree on the site. Add a new `<id>.json` here to cover another sidebar group.
 * Order matters: TreeStrip uses the first tree that contains a page, so panel trees
 * (appearance) stay before the site-wide hub (product, `strip: false`), whose nodes
 * overlap with them.
 */
export const trees: DocTree[] = [appearance as DocTree, product as DocTree]

export function treeById(id: string): DocTree | undefined {
  return trees.find((t) => t.id === id)
}

/** Sidebar group built from a tree: overview first, then each unique in-group page in tree order. */
export function treeSidebarGroup(tree: DocTree) {
  if (tree.strip === false) throw new Error(`tree "${tree.id}" has strip:false and does not build a sidebar group`)
  const seen = new Set<string>([tree.overview])
  const items = [{ text: tree.sidebarOverviewText, link: tree.overview }]
  for (const node of tree.branches.filter((b) => !b.mapOnly).flatMap((b) => b.nodes)) {
    if (node.inGroup === false || seen.has(node.link)) continue
    seen.add(node.link)
    const label = (node.sidebar ?? node.label).replace(/&/g, '&amp;')
    const badge = node.pro === true ? ' <span class="nt-pro">Pro</span>' : ''
    items.push({ text: label + badge, link: node.link })
  }
  return { text: tree.title, collapsed: true, items }
}

export function findNodeByLink(tree: DocTree, path: string): { branch: DocTree['branches'][number]; node: TreeNode } | undefined {
  for (const branch of tree.branches) {
    if (branch.mapOnly) continue
    const node = branch.nodes.find((n) => n.link === path)
    if (node) return { branch, node }
  }
}
