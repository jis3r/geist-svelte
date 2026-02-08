#!/usr/bin/env bash
set -euo pipefail
V=$(node .github/scripts/get-version.mjs)
TAG="geist-svelte@${V}"
git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"
git tag "$TAG"
git push origin "$TAG"
export GH_TOKEN="${GITHUB_TOKEN}"
NOTES=$(awk -v ver="$V" '$0 == "## " ver {f=1; print; next} f && /^## / {exit} f' packages/geist-svelte/CHANGELOG.md)
if [ -n "$NOTES" ]; then
  gh release create "$TAG" --title "$TAG" --notes "$NOTES"
else
  gh release create "$TAG" --title "$TAG" --generate-notes
fi
