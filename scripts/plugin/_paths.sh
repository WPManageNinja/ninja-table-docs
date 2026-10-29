# Shared paths for the plugin helper scripts. Sourced, not run.
# Free plugin = git clone the local "cart" site runs (branch `redesign` = new admin UI).
# Pro plugin  = plain folder (not a git repo): diffs/tags only exist for the free plugin.
PLUGIN_PATH="${NT_PLUGIN_PATH:-/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev}"
PRO_PATH="${NT_PRO_PATH:-/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-pro}"
DOCS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

require_plugin_git() {
  if [ ! -d "$PLUGIN_PATH/.git" ]; then
    echo "ERROR: $PLUGIN_PATH is not a git repo" >&2
    exit 1
  fi
}

# Resolve a tag/commit; accepts "5.2.17" or "v5.2.17" (Ninja Tables tags use the v prefix).
resolve_ref() {
  local ref="$1"
  for cand in "$ref" "v${ref#v}" "${ref#v}"; do
    if git -C "$PLUGIN_PATH" rev-parse --verify --quiet "$cand^{commit}" >/dev/null; then
      echo "$cand"; return 0
    fi
  done
  echo "ERROR: ref '$ref' not found in $PLUGIN_PATH" >&2
  return 1
}
