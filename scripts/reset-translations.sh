#!/usr/bin/env bash
# reset-translations.sh
#
# Removes all translated locale folders, keeping only English (the source).
# Run this before each demo to start fresh.
#
# Usage:  ./scripts/reset-translations.sh

LOCALES_DIR="$(dirname "$0")/../public/locales"

echo "Resetting translations in: $LOCALES_DIR"

for dir in "$LOCALES_DIR"/*/; do
  lang=$(basename "$dir")
  if [ "$lang" != "en" ]; then
    echo "  Removing $lang/"
    rm -rf "$dir"
  fi
done

echo "Done. Only 'en' locale remains."
