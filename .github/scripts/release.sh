#!/usr/bin/env bash
set -euo pipefail
V=$(node .github/scripts/get-version.mjs)
if npm view "geist-svelte@${V}" version 2>/dev/null; then
  echo "geist-svelte@${V} already published, skipping."
  exit 0
fi
pnpm --filter geist-svelte build
cd packages/geist-svelte && npm publish
cd ../..
bash .github/scripts/create-release.sh
