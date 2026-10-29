---
name: ninja-tables-doc-writer
description: Master voice-and-format guide for writing Ninja Tables end-user documentation (docs/**/*.md). Load it before writing, drafting, expanding, rewriting or proofreading any doc page, then route to the matching page-type specialist (settings, integration, element, how-to). Covers the universal page rules, voice and tone, UI-path and bold conventions, linking, callouts, images, videos, and the never-do list. USE FOR: write a doc, draft a page, rewrite this section, proofread, match the house style, document this feature. Pairs with write-ninja-tables-doc (new page procedure), edit-ninja-tables-doc (in-place edits) and ninja-tables-code-to-docs (plugin release sync).
---

# Ninja Tables Doc Writer: Master Skill

You are writing for **Ninja Tables**, the WordPress table plugin by WPManageNinja (free + Pro). The site
is VitePress, served at https://docs.ninjatables.com with flat URLs (`/<slug>`). Every rule here was
measured against the current 117 pages (rewritten for the redesigned admin UI, Oct 2026). When the
current pages and an older habit disagree, the current pages win.

Read this skill first, then load the page-type specialist from §6. The procedural steps for creating,
editing or moving files live in `write-ninja-tables-doc`, `edit-ninja-tables-doc` and
`restructure-ninja-tables-docs`. This skill is about **what the words look like**.

---

## 1. Universal page rules (non-negotiable)

- Frontmatter with `title` and a real one-sentence `description` (what the reader can do, not a copy of
  the title), then a bare `# H1` identical to `title`.
- `##` for main sections, `###` for sub-topics. The outline shows H2–H3.
- Links: flat absolute `[Text](/<slug>)`. Never `.md`, never relative, never `/guide/...`. The target
  slug must exist (`find docs -name '<slug>.md'`).
- Images: `![Descriptive alt](/images/<category>/<short-slug>/<n>.-<Short-Label>.webp)`. Never external,
  never relative. Produced by the screenshot pipeline (§5), never by hand.
- New or renamed page: update the sidebar in `.vitepress/config.mts` and run
  `npm run featured:generate`. Then `npm run docs:build` must be clean.
- Use the **exact UI labels** of the current plugin. The source of truth is the plugin code
  (`resources/admin/`) and `.claude/redesign-audit/00-editor-ui-labels.md`, not the old docs.

---

## 2. Voice and tone

### 2.1 Opening (first paragraph after the H1)
One to three sentences: what the feature is, what it does for the reader, and when to use it. Bold the
**feature name** on first use and add "(Pro)" right after it if it is Pro-only. Verbatim models:

> **Google Sheets Integration** (Pro) shows a Google Sheet as a table on your site. When you change the sheet, the table follows, so you keep editing in Google Sheets and never copy data by hand.

> The **Table Configuration** tab controls how a table loads on your site: which engine draws it, how its rows reach the page, and how it is cached. Most tables work well with the defaults; change these when a table is very large, uses merged cells or shortcodes, or shows outdated data.

Avoid "In this guide we will…", "This article explains…", "Welcome to…".

### 2.2 Register
- Second person ("you", "your"); "visitors" for people viewing the table on the site.
- Present tense, imperative steps ("Click", "Open", "Choose", "Turn on").
- Short, direct sentences. One idea per sentence. Explain *why* in one clause when a choice matters
  ("best for big tables", "better for SEO").
- Contractions are fine in explanations ("doesn't", "you'll"); not in hard constraints ("cannot be
  changed").
- Developer prose (hooks, PHP, SQL) only on the developer pages in `advanced-features`.

### 2.3 Bridge sentences
Never drop a list or a code block in cold. Lead in with one short sentence:

> The options shown depend on the table type:

### 2.4 Ending
End on the action or the outcome, not a sign-off. The common closer on settings pages is one line:

> Click **Save** to keep your changes.

Never "Hope this helps", "That's it!", "Conclusion", or support boilerplate ("contact our support team").
If a related page genuinely helps, link it instead.

---

## 3. Formatting conventions

### 3.1 Punctuation
**No em dashes (`—`).** The current docs have zero outside the changelog; keep it that way. Use a colon
(label then description), a comma or parentheses (aside), or a full stop (new thought).

### 3.2 Bold
| Use | Example |
|---|---|
| UI path, joined with ` › ` | `**Ninja Tables** › **Tables**`, `**Appearance** › **Features** › **Mobile & row details**` |
| Buttons, tabs, fields, options | `**Save**`, `**Table Configuration**`, `**Rendering Setting**`, `**Legacy**` |
| Feature name on first use | `**Conditional Formatting**` (Pro) |

- The separator is always ` › ` (U+203A, spaces both sides), each segment bolded separately. Never `>`,
  `→` or `/`.
- Plain words for things that are not labels ("open a table", "the gear icon").
- No inner whitespace inside markers: `**Save**`, never `**Save **`.

### 3.3 Option / field descriptions
Bullet, bold label, colon, description. Mark defaults and Pro inline:

```
- **Ajax** (default): rows load right after the page. Fast, and best for big tables.
- **Legacy** (Pro): rows are built on the server into the page HTML.
```

### 3.4 Lists and steps
- Numbered lists only when order matters (a procedure). Bullets for everything else.
- One action per step. The first step names the path: `1. Go to **Ninja Tables** › **Tables** and open a table.`

### 3.5 Links (sparse and load-bearing)
Add a link only when the reader would be stuck, misled or forced to guess without it, or when explaining
the concept here would bloat the page.
- The anchor is the key noun already in the sentence: `merged cells ([colspan](/colspan-cell-merge))`,
  `See [FooTable or DataTables: Choose an Engine](/choose-table-engine) for a full comparison.`
- Never "here", "this page", "click here", "learn more" as anchor text.
- Link a destination once per page, at its first meaningful mention.

### 3.6 Callouts
Only `::: tip` (helpful shortcut, related setting) and `::: warning` (data loss, security, a behaviour
that surprises). About one per page, at most two. Never `::: info` or `> [!TIP]` (not used on this site).

### 3.7 Pro marking
"(Pro)" after the feature or option name on its **first** mention on the page only. Use the Free/Pro split
from the plugin code (`ninja-tables-pro` folder) and `.claude/plugin-memory/CATALOG.md`, not old docs.

### 3.8 Code
Inline code for shortcodes, attributes, hooks and file names: `[ninja_tables id="123"]`, `sf_filter`.
Fenced blocks with a language for anything multi-line. Never paste plugin source into user docs.

---

## 4. Words to use

| Say | Not |
|---|---|
| table, row, column, cell | record, field (except for form fields) |
| visitors | users (on the front end), customers |
| your site, the page (in prose) | front end / front-end (keep the label's own spelling, e.g. **Frontend editing**) |
| turn on / turn off (preferred, ~2:1 in current pages) | enable / disable, except when quoting a label |
| the gear icon › **Settings** | the Tools page (removed in the redesign) |
| **Table Rows** › column header › **Column settings** | the Columns tab (removed) |

Mention removed UI only to tell readers where something moved, briefly.

---

## 5. Images and videos

- Insert an image right after the step or section it shows; one per click-step, one per reference
  section. Never stack two images with no text between them.
- Alt text describes what the reader sees ("Table Configuration tab with Rendering Setting options").
- **Producing images:** delegate to the `ninja-tables-screenshotter` subagent (cheaper model), which
  follows the `ninja-tables-doc-screenshots` skill and the headless runner. Write the text first, then
  derive the shot list from it. If a screen cannot be reached on the local site, leave
  `<!-- TODO(screenshot): <what it must show> -->` and add a row to `.claude/SCREENSHOT-TODO.md`.
- After any image change, run the five image checks in `CLAUDE.md`.
- Videos: YouTube only, in the `.video-embed` wrapper exactly as shown in `CLAUDE.md` → *Videos*, placed
  after the opening paragraph. Only videos from the WPManageNinja channel.

---

## 6. Page-type specialists (route by what you are writing)

| Writing… | Specialist |
|---|---|
| One settings screen, editor tab, panel or dialog, option by option (`table-settings`, `column-settings`, `styling-design`, `responsive-design`, `table-formatting`, `drag-drop-settings`, global Settings pages) | `ninja-tables-settings-page` |
| A connected data source or WordPress integration (`data-sources`, `wordpress-integration`) | `ninja-tables-integration-page` |
| One Drag & Drop element or one column/field type (`drag-drop-elements`, `field-types`) | `ninja-tables-element-page` |
| A task / procedure (`getting-started`, `creating-tables`, `drag-drop-tables`, `import-export`, `table-management`, `advanced-features`, `ninja-charts`) | `ninja-tables-howto-page` |
| A release entry in `docs/changelog/change-log.md` | `update-ninja-tables-changelog` |

---

## 7. Never

- Invent UI, options, defaults or behaviour. If the code is ambiguous, ask.
- Use em dashes, `>`/`→` in UI paths, `::: info`, or support boilerplate.
- Reference an image that does not exist on disk, or an external image URL.
- Add a page without the sidebar entry and featured card.
- Edit `.vitepress/dist/` or `.vitepress/cache/`, or anything in the plugin folders.
- Commit or push unless the user asks.
