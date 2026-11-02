import type { MarkdownRenderer } from 'vitepress'
import { treeById } from '../trees'
import type { DocTree, TreeNode } from '../trees/types'

/**
 * `::: doc-tree <id> <part>` on its own line renders part of a doc tree as static HTML
 * at build time (no JS, so it is searchable, printable and present in the SSR output).
 * Parts: `hero`, `tasks`, `tree`. The data lives in `.vitepress/trees/<id>.json`.
 *
 * Raw HTML here must never contain a blank line: a blank line ends the HTML block.
 */
const MARKER = /^::: doc-tree\s+(\S+)\s+(hero|tasks|tree)\s*$/

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Escape, then allow **bold** only. */
const inline = (s: string) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

function proBadge(node: TreeNode): string {
  if (node.pro === true) return ' <span class="nt-pro">Pro</span>'
  if (node.pro === 'partial' && node.proNote) return ` <small>${esc(node.proNote)}</small>`
  return ''
}

function renderHero(t: DocTree): string {
  const actions = t.hero.actions
    .map((a) => `<a class="dt-btn${a.primary ? ' primary' : ''}" href="${esc(a.link)}">${esc(a.text)}</a>`)
    .join('\n')
  return `<div class="dt-hero">
<span class="dt-eyebrow">${esc(t.hero.eyebrow)}</span>
<p class="dt-title">${esc(t.hero.title)}</p>
<p class="dt-lead">${esc(t.hero.lead)}</p>
<div class="dt-actions">
${actions}
</div>
</div>`
}

function renderTasks(t: DocTree): string {
  const nodes = new Map(t.branches.flatMap((b) => b.nodes).map((n) => [n.id, n]))
  const tiles = t.tasks
    .map((task) => {
      const node = nodes.get(task.to)
      if (!node) throw new Error(`doc-tree "${t.id}": task "${task.text}" points to unknown node "${task.to}"`)
      return `<a class="dt-task" href="${esc(node.link)}">${esc(task.text)}<small>${esc(task.sub)}</small></a>`
    })
    .join('\n')
  return `<p class="dt-label">Jump straight to</p>
<div class="dt-grid">
${tiles}
</div>`
}

function renderNode(n: TreeNode): string {
  return `<details class="dt-more">
<summary>${esc(n.label)}${proBadge(n)}</summary>
<div class="dt-body">
<p><span class="dt-k">What changes</span>${inline(n.changes)}</p>
<p><span class="dt-k">Visitors see</span>${inline(n.visitors)}</p>
<p><a class="dt-read" href="${esc(n.link)}">Read the guide →</a></p>
</div>
</details>`
}

function renderTree(t: DocTree): string {
  const branches = t.branches
    .map((b, i) => {
      let lastGroup: string | undefined
      const body = b.nodes
        .map((n) => {
          const heading = n.group && n.group !== lastGroup ? `<p class="dt-group">${esc(n.group)}</p>\n` : ''
          lastGroup = n.group
          return heading + renderNode(n)
        })
        .join('\n')
      return `<div class="dt-step">
<span class="dt-num">${i + 1}</span>
<h3>${esc(b.label)}</h3>
<p class="dt-where">${esc(b.where)}</p>
<p class="dt-goal">${esc(b.goal)}</p>
${body}
</div>`
    })
    .join('\n')
  return `<p class="dt-label">The ${esc(t.title.toLowerCase())} tree</p>
<p class="dt-label-sub">${esc(t.treeIntro)}</p>
<div class="dt-journey">
${branches}
</div>`
}

const RENDERERS = { hero: renderHero, tasks: renderTasks, tree: renderTree }

export function docTreePlugin(md: MarkdownRenderer) {
  md.block.ruler.before(
    'fence',
    'doc_tree',
    (state, startLine, _endLine, silent) => {
      const pos = state.bMarks[startLine] + state.tShift[startLine]
      const line = state.src.slice(pos, state.eMarks[startLine])
      const m = MARKER.exec(line)
      if (!m) return false
      if (silent) return true

      const tree = treeById(m[1])
      if (!tree) throw new Error(`doc-tree: unknown tree "${m[1]}" (add it to .vitepress/trees/index.ts)`)

      const token = state.push('html_block', '', 0)
      token.content = RENDERERS[m[2] as keyof typeof RENDERERS](tree) + '\n'
      token.map = [startLine, startLine + 1]
      state.line = startLine + 1
      return true
    },
    { alt: ['paragraph', 'reference', 'blockquote', 'list'] }
  )
}
