#!/usr/bin/env bash
# Commits and changed files between <since-ref> and HEAD in the Ninja Tables plugin.
# Usage: ./scripts/plugin/diff-since.sh <tag-or-commit>     e.g. v5.2.17  (or 5.2.17)
set -euo pipefail
source "$(dirname "$0")/_paths.sh"
require_plugin_git
[ -z "${1:-}" ] && { echo "Usage: $0 <since-ref>   e.g. $0 v5.2.17" >&2; exit 1; }
REF=$(resolve_ref "$1")

echo "Diff: $REF ($(git -C "$PLUGIN_PATH" rev-parse --short "$REF")) → HEAD ($(git -C "$PLUGIN_PATH" rev-parse --short HEAD))"
echo ""
echo "--- Commits between ---"
git -C "$PLUGIN_PATH" log --oneline "$REF..HEAD"
echo ""
echo "--- Changed files (stat) ---"
git -C "$PLUGIN_PATH" diff --stat "$REF..HEAD" -- . ':(exclude)assets' ':(exclude)vendor' ':(exclude)*.lock' ':(exclude)package-lock.json'
echo ""
echo "--- Changed files (paths only; built assets/vendor/lockfiles excluded) ---"
git -C "$PLUGIN_PATH" diff --name-only "$REF..HEAD" -- . ':(exclude)assets' ':(exclude)vendor' ':(exclude)*.lock' ':(exclude)package-lock.json'
