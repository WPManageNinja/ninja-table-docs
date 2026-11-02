#!/usr/bin/env node
// Drift guard for the doc trees in .vitepress/trees/*.json.
// Fails (exit 1) when a tree disagrees with the docs. Run: node scripts/qa/check-trees.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const treesDir = join(root, '.vitepress', 'trees')
const docsDir = join(root, 'docs')

// slug -> file path (slugs are unique site-wide, see CLAUDE.md)
const pages = new Map()
for (const cat of readdirSync(docsDir, { withFileTypes: true })) {
  if (!cat.isDirectory()) continue
  for (const f of readdirSync(join(docsDir, cat.name))) {
    if (f.endsWith('.md')) pages.set('/' + f.slice(0, -3), join(docsDir, cat.name, f))
  }
}

const errors = []
const err = (tree, msg) => errors.push(`[${tree}] ${msg}`)

for (const file of readdirSync(treesDir).filter((f) => f.endsWith('.json'))) {
  const tree = JSON.parse(readFileSync(join(treesDir, file), 'utf8'))
  const id = tree.id
  const nodes = tree.branches.flatMap((b) => b.nodes)
  const ids = new Set()

  if (!pages.has(tree.overview)) err(id, `overview page ${tree.overview} not found`)
  else if (!readFileSync(pages.get(tree.overview), 'utf8').includes(`::: doc-tree ${id} tree`))
    err(id, `overview ${tree.overview} has no "::: doc-tree ${id} tree" line`)

  for (const n of nodes) {
    if (ids.has(n.id)) err(id, `duplicate node id "${n.id}"`)
    ids.add(n.id)
    if (!n.changes?.trim() || !n.visitors?.trim()) err(id, `node "${n.id}" needs both "changes" and "visitors" copy`)
    const page = pages.get(n.link)
    if (!page) { err(id, `node "${n.id}" links to ${n.link}, which is not a doc page`); continue }
    const text = readFileSync(page, 'utf8')
    if (n.pro === true && !/\(Pro\)|Pro only|a Pro feature/i.test(text))
      err(id, `node "${n.id}" is marked Pro but ${n.link} never says "(Pro)"`)
    if (!n.pro && /^#\s.*\(Pro\)/m.test(text))
      err(id, `${n.link} has (Pro) in its H1 but node "${n.id}" is not marked pro`)
  }
  for (const t of tree.tasks) if (!ids.has(t.to)) err(id, `task "${t.text}" points to unknown node "${t.to}"`)
}

if (errors.length) {
  console.error(errors.map((e) => '✗ ' + e).join('\n'))
  process.exit(1)
}
console.log('✓ doc trees match the docs')
