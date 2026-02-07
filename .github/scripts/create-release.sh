#!/usr/bin/env bash
set -euo pipefail
V=$(node -p "require('./packages/geist-svelte/package.json').version")
TAG="geist-svelte@${V}"
git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"
git tag "$TAG"
git push origin "$TAG"
export GH_TOKEN="${GITHUB_TOKEN}"
gh release create "$TAG" --title "$TAG" --generate-notes
