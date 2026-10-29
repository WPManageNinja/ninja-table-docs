# Writing brief: Ninja Tables docs rewrite for the redesigned plugin

You are one of 6 writers updating the Ninja Tables end-user docs (VitePress site at `/Users/authlab-24/Desktop/n2`) for the fully redesigned plugin admin UI. Your prompt names YOUR AREA: the exact files you own. Edit only those files (plus new pages you're told to create). Other writers are working on the other files at the same time.

## HARD RULES
- The user has another physical PC connected to this Claude account. NEVER call any `mcp__claude-in-chrome__*`, `mcp__remote-devices__*`, `mcp__Claude_Browser__*`, `mcp__computer-use__*`, RemoteTrigger, SendMessage, ListAgents or Artifact tool. Work only on this machine. If you want to check something in the live admin UI, you MAY use a local headless browser on THIS PC (Playwright is installed in `/private/tmp/claude-503/-Users-authlab-24-Desktop-n2/c8fe564b-8b0b-4bb5-b226-cb2ab9e0c63e/scratchpad`, see `ex.mjs` there) against the local test site http://localhost:10013. That is allowed and welcome. Only the other PC is off-limits.
- Plugin code is READ-ONLY: `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev` (free, branch `redesign`) and `.../plugins/ninja-tables-pro`. Never edit it, never run git commands that change state there.
- Do NOT edit `.vitepress/config.mts`, `index.md`, `CLAUDE.md`, `README.md`, `REDESIGN-PLAN.md`, anything in `public/`, or any file outside your area. Do NOT run `npm run docs:build`, `docs:dev` or the featured-image generator. The main session wires the sidebar and builds at the end.
- **Screenshots: leave them for now.** Don't add, delete, rename or convert any image file. Keep existing `![...](/images/...)` lines where the section they illustrate still exists (they'll be retaken later). Drop an image line only if you delete the whole section it illustrated. Never add new image references.

## Sources of truth (read before writing)
1. `/Users/authlab-24/Desktop/n2/REDESIGN-PLAN.md`: the verdict for every page (R = rewrite, E = edit, K = keep, M = merge), the new features list, the Free/Pro split (section 6) and the new categories (section 7).
2. Audit notes in `/Users/authlab-24/Desktop/n2/.claude/redesign-audit/`:
   - `01-02-global-creation-editor.md`: app shell, tables list, Create a table, Import, Settings, and the whole table editor (Table Rows, column dialog, Custom filters, Appearance, Table Configuration, Frontend editing, Custom CSS/JS).
   - `00-editor-ui-labels.md`: the exact UI strings from the editor components. Use these labels verbatim.
   - `03-dragdrop-and-charts.md`: Drag & Drop builder and Charts.
   - `04-sources-integration-pro.md`: connected sources, WP integration, shortcodes, Gutenberg, hooks, Free vs Pro.
3. The plugin code itself (read-only) when you need to confirm a label, default or option. The admin UI is in `ninja-tables-dev/resources/admin/` (views/, components/). Prefer what the code says over the old docs.
4. The repo conventions: `/Users/authlab-24/Desktop/n2/CLAUDE.md` and the skills `.claude/skills/write-ninja-tables-doc/SKILL.md` and `.claude/skills/edit-ninja-tables-doc/SKILL.md` (follow their writing rules; ignore their steps about editing the sidebar, building or generating images, which the main session does).

## Writing rules
- Frontmatter `title` + `description` (a real one-sentence description, not a copy of the title), then `# H1` = title.
- Write for end users: short, direct sentences, task-first. 1 to 3 sentence intro saying what the feature is and who it's for. Bold the feature name on first use. Mark Pro features "(Pro)" on first mention, using the Free/Pro split in the plan (it corrects the old docs).
- Use the **exact new UI labels and paths**, e.g. **Tables** › table › **Appearance** › **Pagination**; **Table Rows** › column header › **Column settings**; the gear icon › **Settings** › **Permissions**. Never mention removed UI ("Table Design tab", "Tools page", "Columns tab", "Manage Cells mode") except to tell readers where something moved, briefly, if that genuinely helps.
- Steps as numbered lists only where order matters; otherwise bullets. `##` for sections, `###` for sub-topics.
- **Links:** flat absolute form `[Text](/<slug>)`. No `.md`, no relative links, no `/guide/...`. Only link to slugs that exist in `docs/` OR are in the new-page list below. Before finishing, check every link you wrote: `grep -oE '\]\(/[a-z0-9-]+' <file>` and make sure each slug exists (`find docs -name '<slug>.md'`) or is in the new-page list.
- No support boilerplate ("contact our support team"). No callouts unless genuinely useful (VitePress `::: tip` / `::: warning` is allowed).
- Where the plan lists an open product question (section 5), document what the plugin does **today**, without promising a fix. For example, Remote CSV only reads CSV, and a Drag & Drop table must be saved once before it shows on a page. Don't repeat the Charts page's "Chart option on every table" claim.
- Keep each existing page's file name (slug). Never rename or move existing files.
- **Merge (M) pages:** replace the body with a short pointer page: frontmatter (title kept, description saying it moved), H1, one or two sentences saying where the topic now lives with a link, and nothing else (delete the old image lines). The main session hides these from the sidebar.
- New pages: create them at the exact path given in your prompt.

## New pages being created by all writers (you may link to these)
| Slug | Folder | Writer |
|---|---|---|
| free-vs-pro | getting-started | A |
| table-types-overview | creating-tables | A |
| choose-table-engine | creating-tables | A |
| tables-list | table-management | A |
| clear-table-cache | table-management | A |
| working-in-table-rows | creating-tables | B |
| use-design-as-default | styling-design | C |
| connected-tables-overview | data-sources | D |
| google-sheets-csv-auto-sync | data-sources | D |
| custom-sql-remote-database | data-sources | D |
| dynamic-columns-reference | wordpress-integration | D |
| drag-drop-builder-tour | drag-drop-tables | E |
| drag-drop-templates | drag-drop-tables | E |
| drag-drop-rows-columns | drag-drop-settings | E |
| drag-drop-cell-settings | drag-drop-settings | E |
| embed-tables | wordpress-integration | F |
| shortcode-reference | advanced-features | F |
| rating-icon-shortcodes | advanced-features | F |
| hooks-and-filters | advanced-features | F |
| developer-code-recipes | advanced-features | F |

## Your final reply (keep it short)
1. A list of files changed, each tagged R / E / K / M / NEW.
2. For each NEW page and each existing page: the **sidebar label** you suggest (short, task-first, e.g. "Sort rows manually"). Give it as a table `slug | sidebar label`.
3. Anything you couldn't confirm in code, and any links you left out because the target doesn't exist.
