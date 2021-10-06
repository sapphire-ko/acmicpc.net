#!/bin/bash

set -ex

function main {
	ID="$1"

	SOURCE_FILE="./src/$ID/main.js"
	INPUT_FILE="./src/$ID/input.txt"
	OUTPUT_FILE="./src/$ID/output.txt"
	OUTPUT_TMP_FILE="./src/$ID/output.tmp.txt"

	node "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

	diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

	rm "$OUTPUT_TMP_FILE"
}

main "$1"
