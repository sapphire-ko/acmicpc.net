#!/bin/bash

set -ex

function fn1 {
	read -p "enter problem id: " ID

	docker run --rm -it -v $PWD/src/$ID:/opt/proj -w /opt/proj node:16.13.1 /bin/bash -c '
		SOURCE_FILE="main.js"
		INPUT_FILE="input.txt"
		OUTPUT_FILE="output.txt"
		OUTPUT_TMP_FILE="output.tmp.txt"

		node --stack-size=65536 "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE"
	'
}

function fn2 {
	read -p "enter problem id: " ID

	docker run --rm -it -v $PWD/src/$ID:/opt/proj -w /opt/proj python:3.10.4 /bin/bash -c '
		SOURCE_FILE="main.py"
		INPUT_FILE="input.txt"
		OUTPUT_FILE="output.txt"
		OUTPUT_TMP_FILE="output.tmp.txt"

		python "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE"
	'
}

if [ -z "$1" ];
then
	fn1
else
	fn2
fi
