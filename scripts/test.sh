#!/bin/bash

set -ex

function test_node {
	docker run --rm -it -v "$PWD/src/$1:/opt/proj" -w /opt/proj node:16.13.1 /bin/bash -c '
		SOURCE_FILE="main.js"
		INPUT_FILE="input.txt"
		OUTPUT_FILE="output.txt"
		OUTPUT_TMP_FILE="output.tmp.txt"

		node --stack-size=65536 "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		echo "===="

		cat "$OUTPUT_TMP_FILE"

		echo "===="

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE"
	'
}

function test_python {
	docker run --rm -it -v "$PWD/src/$1:/opt/proj" -w /opt/proj python:3.10.4 /bin/bash -c '
		SOURCE_FILE="main.py"
		INPUT_FILE="input.txt"
		OUTPUT_FILE="output.txt"
		OUTPUT_TMP_FILE="output.tmp.txt"

		python "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		echo "===="

		cat "$OUTPUT_TMP_FILE"

		echo "===="

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE"
	'
}

function test_rust {
	ID="$1"

	docker run --rm -it -v "$PWD/src/$1:/opt/proj" -w /opt/proj rust:1.60.0 /bin/bash -c '
		SOURCE_FILE="main.rs"
		EXECUTABLE_FILE="main"
		INPUT_FILE="input.txt"
		OUTPUT_FILE="output.txt"
		OUTPUT_TMP_FILE="output.tmp.txt"

		rustc --edition 2021 -O -o "$EXECUTABLE_FILE" "$SOURCE_FILE"

		./"$EXECUTABLE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		echo "===="

		cat "$OUTPUT_TMP_FILE"

		echo "===="

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE" "$EXECUTABLE_FILE"
	'
}

function main {
	TYPE="$1"
	read -p "enter problem id: " ID

	case "x$TYPE" in
	"x")
		test_node "$ID"
		;;
	"xpython")
		test_python "$ID"
		;;
	"xrust")
		test_rust "$ID"
		;;
	esac
}
main "$1"
