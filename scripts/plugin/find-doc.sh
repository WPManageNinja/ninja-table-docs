#!/usr/bin/env bash
# Find which doc page(s) under docs/ document a feature/keyword.
# Usage: ./scripts/plugin/find-doc.sh <pattern>     e.g. "conditional formatting"
set -euo pipefail
source "$(dirname "$0")/_paths.sh"
[ -z "${1:-}" ] && { echo "Usage: $0 <pattern>" >&2; exit 1; }
PATTERN="$1"
DOCS_DIR="$DOCS_ROOT/docs"

echo "Searching docs/ for: $PATTERN"
echo ""
echo "--- Filename matches (served at /<slug>) ---"
find "$DOCS_DIR" -type f -name "*.md" -iname "*$(echo "$PATTERN" | tr ' ' '-')*" | sed "s|$DOCS_ROOT/||" || true
echo ""
echo "--- Content matches (count  file) ---"
grep -ril --include="*.md" -e "$PATTERN" "$DOCS_DIR" 2>/dev/null \
  | while read -r f; do printf "  %3d  %s\n" "$(grep -ic -e "$PATTERN" "$f" || true)" "${f#$DOCS_ROOT/}"; done \
  | sort -rn || true
echo ""
echo "--- Feature-memory chunks (check-ninja-tables-feature-coverage) ---"
grep -ril -e "$PATTERN" "$DOCS_ROOT/.claude/skills/check-ninja-tables-feature-coverage/references" 2>/dev/null \
  | sed "s|$DOCS_ROOT/||;s|^|  |" || true
