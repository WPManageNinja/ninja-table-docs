#!/usr/bin/env bash
# Refresh the plugin-memory layer after new plugin code has been pulled.
#
# Lists every changed plugin file since <prev-ref>, groups PHP by app/Modules/<X> and other
# app/ subtrees, prints the ctx_index call Claude should run to refresh the FTS5 index, a
# CHANGES.md skeleton, and the CATALOG.md `Last fully audited:` lines to bump.
# The Vue allowlist is read from CATALOG.md (fenced block after "VUE_ALLOWLIST_REGEX"), so the
# catalog is the single source of truth.
#
# Usage: ./scripts/plugin/sync-memory.sh <prev-ref>     e.g. v5.2.17
set -euo pipefail
source "$(dirname "$0")/_paths.sh"
require_plugin_git
[ -z "${1:-}" ] && { echo "Usage: $0 <prev-ref>   e.g. $0 v5.2.17" >&2; exit 1; }
REF=$(resolve_ref "$1")
CATALOG="$DOCS_ROOT/.claude/plugin-memory/CATALOG.md"

HEAD_SHA=$(git -C "$PLUGIN_PATH" rev-parse --short HEAD)
REF_SHA=$(git -C "$PLUGIN_PATH" rev-parse --short "$REF")
BRANCH=$(git -C "$PLUGIN_PATH" branch --show-current)
VERSION=$(grep -m1 -E 'Version:' "$PLUGIN_PATH/ninja-tables.php" | sed -E 's/.*Version:[[:space:]]*//')
TODAY=$(date '+%B %-d, %Y')

CHANGED_ALL=$(git -C "$PLUGIN_PATH" diff --name-only "$REF..HEAD" -- . ':(exclude)assets' ':(exclude)vendor' ':(exclude)*.lock' ':(exclude)package-lock.json')
CHANGED_PHP=$(printf '%s\n' "$CHANGED_ALL" | grep -E '^app/.*\.php$' || true)

VUE_ALLOWLIST_REGEX=""
if [ -f "$CATALOG" ]; then
  VUE_ALLOWLIST_REGEX=$(awk '/VUE_ALLOWLIST_REGEX/{f=1} f&&/^```/{c++; next} f&&c==1{print; exit}' "$CATALOG" | tr -d '[:space:]')
fi
if [ -n "$VUE_ALLOWLIST_REGEX" ]; then
  CHANGED_VUE=$(printf '%s\n' "$CHANGED_ALL" | grep -E "$VUE_ALLOWLIST_REGEX" || true)
else
  CHANGED_VUE=""
  echo "WARN: no VUE_ALLOWLIST_REGEX block found in CATALOG.md; Vue files not considered for re-indexing" >&2
fi
CHANGED_VUE_ALL=$(printf '%s\n' "$CHANGED_ALL" | grep -E '^resources/admin/.*\.(vue|js)$' || true)
CHANGED_I18N=$(printf '%s\n' "$CHANGED_ALL" | grep -E 'I18nStrings\.php$|^language/' || true)

INDEX_TARGETS=$(printf '%s\n%s\n' "$CHANGED_PHP" "$CHANGED_VUE" | sed '/^$/d')
TOUCHED_MODULES=$(printf '%s\n' "$CHANGED_PHP" | sed -nE 's|^app/Modules/([^/.]+)/.*|\1|p' | sort -u)
TOUCHED_APP_OTHER=$(printf '%s\n' "$CHANGED_PHP" | sed -nE 's|^app/([^/]+)/.*|\1|p' | grep -v '^Modules$' | sort -u || true)
count() { printf '%s\n' "$1" | sed '/^$/d' | wc -l | tr -d ' '; }

echo "================================================================"
echo "Plugin memory sync: $REF ($REF_SHA) → HEAD ($HEAD_SHA)  [$BRANCH, plugin header $VERSION]"
echo "================================================================"
echo ""
echo "--- Change summary ---"
echo "  Files changed (excl. assets/vendor/locks): $(count "$CHANGED_ALL")"
echo "  PHP under app/ (indexed):                  $(count "$CHANGED_PHP")"
echo "  Admin Vue/JS changed (any):                $(count "$CHANGED_VUE_ALL")"
echo "  Vue allowlist (indexed):                   $(count "$CHANGED_VUE")"
echo "  UI string files (I18nStrings/language):    $(count "$CHANGED_I18N")"
echo ""
echo "--- app/Modules/ touched ---"
[ -z "$TOUCHED_MODULES" ] && echo "  (none)" || printf '%s\n' "$TOUCHED_MODULES" | sed 's/^/  Modules\//'
echo ""
if [ -n "$TOUCHED_APP_OTHER" ]; then
  echo "--- Other app/ subtrees touched ---"
  printf '%s\n' "$TOUCHED_APP_OTHER" | sed 's|^|  app/|;s|$|/|'
  echo ""
fi
if [ -n "$CHANGED_VUE_ALL" ]; then
  echo "--- Admin UI files changed (re-read the doc page for each screen; see CATALOG 'Admin UI → doc page map') ---"
  printf '%s\n' "$CHANGED_VUE_ALL" | sed 's/^/  /'
  echo ""
fi
echo "--- Suggested ctx_index call (Claude runs this; the script cannot) ---"
if [ -z "$INDEX_TARGETS" ]; then
  echo "  (skip: nothing to re-index)"
else
  echo "  Tool: mcp__plugin_context-mode_context-mode__ctx_index   (one call per path, source: ninja-tables-<version>)"
  printf '%s\n' "$INDEX_TARGETS" | sed "s|^|    - $PLUGIN_PATH/|"
fi
echo ""
echo "--- CHANGES.md skeleton (paste at the TOP of .claude/plugin-memory/CHANGES.md) ---"
echo ""
echo "## v<NEW-VERSION> ($TODAY)"
echo "- **Source:** free \`$BRANCH\` @ \`$HEAD_SHA\` (range $REF..HEAD); Pro folder version $(grep -m1 -E 'Version:' "$PRO_PATH/ninja-tables-pro.php" | sed -E 's/.*Version:[[:space:]]*//')"
if [ -n "$TOUCHED_MODULES" ]; then
  echo "- **Modules touched:** $(printf '%s\n' "$TOUCHED_MODULES" | paste -sd ',' - | sed 's/,/, /g')"
else
  echo "- **Modules touched:** (none)"
fi
echo "- **Doc-relevant files of note:**"
if [ -n "$INDEX_TARGETS" ]; then
  printf '%s\n' "$INDEX_TARGETS" | head -10 | sed 's|^|  - `|;s|$|`|'
  REM=$(printf '%s\n' "$INDEX_TARGETS" | tail -n +11 | sed '/^$/d' | wc -l | tr -d ' ')
  [ "$REM" -gt 0 ] && echo "  - …and $REM more (see list above)"
else
  echo "  - (none)"
fi
echo "- **Doc pages updated:**"
echo "  - <fill in>"
echo "- **Doc pages created (with sidebar entries added):**"
echo "  - <fill in, or remove>"
echo "- **Screenshots (plans run):**"
echo "  - <plan.json → images, or remove>"
echo "- **Plugin changes flagged but skipped (no doc impact):**"
echo "  - <path: reason>"
echo "- **Open questions carried forward:**"
echo "  - <fill in, or remove>"
echo "- **Build status:** <npm run docs:build result + image checks>"
echo ""
echo "--- CATALOG.md \`Last fully audited:\` bumps ---"
if [ -z "$TOUCHED_MODULES" ]; then
  echo "  (no Modules/ entries to bump)"
else
  printf '%s\n' "$TOUCHED_MODULES" | sed 's/^/    - ### Modules\//'
fi
echo ""
echo "Done. Claude: run the ctx_index call, prepend the CHANGES.md entry, then edit docs."
