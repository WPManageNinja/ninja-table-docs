#!/usr/bin/env node
// Drift guard for the doc trees in .vitepress/trees/*.json.
// Fails (exit 1) when a tree disagrees with the docs. Warnings print but do not fail.
// Run: node scripts/qa/check-trees.mjs
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const treesDir = join(root, '.vitepress', 'trees')
const docsDir = join(root, 'docs')
const config = readFileSync(join(root, '.vitepress', 'config.mts'), 'utf8')

// The page whose quick start is built from a tree's `journey` (see CLAUDE.md, Doc trees).
const INTRO = '/ninja-tables-introduction'

// slug -> file path (slugs are unique site-wide, see CLAUDE.md)
const pages = new Map()
for (const cat of readdirSync(docsDir, { withFileTypes: true })) {
  if (!cat.isDirectory()) continue
  for (const f of readdirSync(join(docsDir, cat.name))) {
    if (f.endsWith('.md')) pages.set('/' + f.slice(0, -3), join(docsDir, cat.name, f))
  }
}

const errors = []
const warnings = []
const err = (tree, msg) => errors.push(`[${tree}] ${msg}`)
const warn = (tree, msg) => warnings.push(`[${tree}] ${msg}`)

const trees = readdirSync(treesDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(treesDir, f), 'utf8')))
const treeById = new Map(trees.map((t) => [t.id, t]))

// Links a reader can reach from the sidebar: hand-written `link: '/x'` in config.mts, plus
// the pages each tree-built sidebar group adds (trees whose group is swapped in via treeSidebarGroup).
const sidebarLinks = new Set([...config.matchAll(/link:\s*'([^']+)'/g)].map((m) => m[1]))
for (const t of trees) {
  if (t.strip === false || !config.includes(`treeById('${t.id}')`)) continue
  sidebarLinks.add(t.overview)
  for (const b of t.branches) if (!b.mapOnly) for (const n of b.nodes) if (n.inGroup !== false) sidebarLinks.add(n.link)
}

for (const tree of trees) {
  const id = tree.id
  const hub = tree.kind === 'hub'
  const nodes = tree.branches.flatMap((b) => b.nodes)
  const ids = new Set()
  const links = new Map()

  if (tree.kind && !['panel', 'hub'].includes(tree.kind)) err(id, `invalid kind "${tree.kind}"`)

  const overview = pages.get(tree.overview)
  if (!overview) err(id, `overview page ${tree.overview} not found`)
  else {
    const text = readFileSync(overview, 'utf8')
    if (!hub && !text.includes(`::: doc-tree ${id} panel`))
      err(id, `overview ${tree.overview} has no "::: doc-tree ${id} panel" line`)
    if (hub && !new RegExp(`^::: doc-tree ${id} (panel|map)\\s*$`, 'm').test(text))
      err(id, `overview ${tree.overview} has no "::: doc-tree ${id} map" (or panel) line`)
    if (tree.journey?.length && !text.includes(`::: doc-tree ${id} journey`))
      err(id, `tree has journey steps but ${tree.overview} has no "::: doc-tree ${id} journey" line`)
  }

  for (const n of nodes) {
    if (ids.has(n.id)) err(id, `duplicate node id "${n.id}"`)
    ids.add(n.id)
    // Panel trees often document two settings on one page (e.g. preset and custom colors), so only hubs warn.
    if (hub && links.has(n.link)) warn(id, `nodes "${links.get(n.link)}" and "${n.id}" both link to ${n.link}`)
    else links.set(n.link, n.id)
    if (n.facts && (!Array.isArray(n.facts) || n.facts.some((x) => !x?.trim()))) err(id, `node "${n.id}" has an empty fact`)
    if (!n.ux?.trim()) err(id, `node "${n.id}" needs a one-line "ux" description`)
    if (n.state && !['on', 'off'].includes(n.state)) err(id, `node "${n.id}" has an invalid state`)
    if (!hub && (!n.changes?.trim() || !n.visitors?.trim())) err(id, `node "${n.id}" needs both "changes" and "visitors" copy`)
    if (n.pro === 'partial' && !n.proNote?.trim()) err(id, `node "${n.id}" is pro: "partial" but has no "proNote"`)
    if (n.ref !== undefined) {
      const ref = treeById.get(n.ref)
      if (!ref) err(id, `node "${n.id}" refs unknown tree "${n.ref}"`)
      else if (ref.id === id) err(id, `node "${n.id}" refs its own tree`)
      else if (ref.overview !== n.link) err(id, `node "${n.id}" refs tree "${n.ref}" but links to ${n.link}, not its overview ${ref.overview}`)
    }
    const page = pages.get(n.link.split('#')[0])
    if (!page) { err(id, `node "${n.id}" links to ${n.link}, which is not a doc page`); continue }
    if (hub && !sidebarLinks.has(n.link.split('#')[0]))
      err(id, `node "${n.id}" links to ${n.link}, which is not in the sidebar (hidden pointer page?)`)
    const text = readFileSync(page, 'utf8')
    if (n.pro === true && !/\(Pro\)|Pro only|a Pro feature/i.test(text))
      err(id, `node "${n.id}" is marked Pro but ${n.link} never says "(Pro)"`)
    if (!n.pro && /^#\s.*\(Pro\)/m.test(text))
      err(id, `${n.link} has (Pro) in its H1 but node "${n.id}" is not marked pro`)
  }

  // tasks / journey may point at own nodes, or at nodes of a tree this one refs.
  const reachable = new Set(ids)
  for (const n of nodes) if (n.ref) for (const x of treeById.get(n.ref)?.branches.flatMap((b) => b.nodes) ?? []) reachable.add(x.id)
  for (const t of tree.tasks ?? []) if (!reachable.has(t.to)) err(id, `task "${t.text}" points to unknown node "${t.to}"`)
  for (const s of tree.journey ?? []) if (!reachable.has(s.to)) err(id, `journey step "${s.text}" points to unknown node "${s.to}"`)

  for (const a of tree.hero?.actions ?? []) {
    if (a.link.startsWith('#')) continue
    if (!pages.has(a.link)) err(id, `hero button "${a.text}" links to ${a.link}, which is neither a doc page nor a #anchor`)
  }
}

// The introduction hosts the site-wide quick start.
const intro = pages.get(INTRO)
if (intro && trees.some((t) => t.overview === INTRO) && !/^::: doc-tree \S+ journey\s*$/m.test(readFileSync(intro, 'utf8')))
  errors.push(`[intro] ${INTRO} has no "::: doc-tree <id> journey" line`)

if (warnings.length) console.warn(warnings.map((w) => '! ' + w).join('\n'))
if (errors.length) {
  console.error(errors.map((e) => '✗ ' + e).join('\n'))
  process.exit(1)
}
console.log('✓ doc trees match the docs')
