#!/usr/bin/env bash
# reset-translations.sh
#
# Resets the demo to its starting state:
#   - Removes all translated locale folders (de, es, pt, etc.)
#   - Empties the English translation file
#
# Run this before each demo to start from scratch.
# To restore English content, run populate-translations.sh.
#
# Usage:  ./scripts/reset-translations.sh

LOCALES_DIR="$(dirname "$0")/../public/locales"
EN_FILE="$LOCALES_DIR/en/translation.json"

echo "Resetting translations..."

for dir in "$LOCALES_DIR"/*/; do
  lang=$(basename "$dir")
  if [ "$lang" != "en" ]; then
    echo "  Removing $lang/"
    rm -rf "$dir"
  fi
done

echo "  Restoring en/translation.json to Lorem Ipsum state"
cp "$(dirname "$0")/en.lorem.json" "$EN_FILE"

echo "Done. Translations reset to Lorem Ipsum state."
