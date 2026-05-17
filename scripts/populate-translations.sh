#!/usr/bin/env bash
# populate-translations.sh
#
# Populates the English translation file with the full set of source keys.
# Run this during the demo to simulate translations being delivered.
#
# Usage:  ./scripts/populate-translations.sh

SOURCE="$(dirname "$0")/en.source.json"
TARGET="$(dirname "$0")/../public/locales/en/translation.json"

echo "Populating en/translation.json from source..."
cp "$SOURCE" "$TARGET"
echo "Done."
