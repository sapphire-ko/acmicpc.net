#!/bin/bash

set -ex

function main {
	read -p "enter problem id: " ID

	docker run --rm -it -v $PWD/src/$ID:/opt/proj -w /opt/proj node:16.13.1 /bin/bash -c '
	SOURCE_FILE="main.js"
	INPUT_FILE="input.txt"
	OUTPUT_FILE="output.txt"
	OUTPUT_TMP_FILE="output.tmp.txt"

	node "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

	diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

	rm "$OUTPUT_TMP_FILE"
	'
}

main
