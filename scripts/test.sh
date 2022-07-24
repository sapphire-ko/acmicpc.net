#!/bin/bash

set -e

function test_node {
	ID="$1"
	NUMBER="$2"

	docker run --rm -it -v "$PWD/src/$ID:/opt/proj" -w /opt/proj --env NUMBER="$NUMBER" node:16.13.1 /bin/bash -c '
		SOURCE_FILE="main.js"
		INPUT_FILE="data/input.$NUMBER.txt"
		OUTPUT_FILE="data/output.$NUMBER.txt"
		OUTPUT_TMP_FILE="data/output.$NUMBER.tmp.txt"

		node --stack-size=65536 "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		cat "$OUTPUT_TMP_FILE"

		echo "----"

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE"
	'
}

function test_python {
	ID="$1"
	NUMBER="$2"

	docker run --rm -it -v "$PWD/src/$ID:/opt/proj" -w /opt/proj --env NUMBER="$NUMBER" python:3.10.4 /bin/bash -c '
		SOURCE_FILE="main.py"
		INPUT_FILE="data/input.$NUMBER.txt"
		OUTPUT_FILE="data/output.$NUMBER.txt"
		OUTPUT_TMP_FILE="data/output.$NUMBER.tmp.txt"

		python "$SOURCE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		cat "$OUTPUT_TMP_FILE"

		echo "----"

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE"
	'
}

function test_rust {
	ID="$1"
	NUMBER="$2"

	docker run --rm -it -v "$PWD/src/$ID:/opt/proj" -w /opt/proj --env NUMBER="$NUMBER" rust:1.60.0 /bin/bash -c '
		SOURCE_FILE="main.rs"
		EXECUTABLE_FILE="main"
		INPUT_FILE="data/input.$NUMBER.txt"
		OUTPUT_FILE="data/output.$NUMBER.txt"
		OUTPUT_TMP_FILE="data/output.$NUMBER.tmp.txt"

		rustc --edition 2021 -O -o "$EXECUTABLE_FILE" "$SOURCE_FILE"

		./"$EXECUTABLE_FILE" < "$INPUT_FILE" > "$OUTPUT_TMP_FILE"

		cat "$OUTPUT_TMP_FILE"

		echo "----"

		diff "$OUTPUT_FILE" "$OUTPUT_TMP_FILE"

		rm "$OUTPUT_TMP_FILE" "$EXECUTABLE_FILE"
	'
}

function main {
	TYPE="$1"

	read -p "enter problem id: " ID

	echo "$ID"

	for f in $(ls ./src/$ID/data/input.*.txt); do
		temp=$(basename "$f")
		temp="${temp%.txt}"
		NUMBER="${temp#input.}"

		echo "==== $NUMBER ===="

		case "x$TYPE" in
		"x")
			test_node "$ID" "$NUMBER"
			;;
		"xpython")
			test_python "$ID" "$NUMBER"
			;;
		"xrust")
			test_rust "$ID" "$NUMBER"
			;;
		esac
	done
}
main "$1"
