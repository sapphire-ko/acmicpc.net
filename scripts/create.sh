#!/bin/bash

set -ex

function main {
	TYPE="$1"

	read -p "enter problem id: " ID

	mkdir -p "./src/${ID}"
	mkdir -p "./src/${ID}/data"

	case "x$TYPE" in
	"x")
		FILENAME="main.js"
		;;
	"xts")
		FILENAME="main.ts"
		;;
	"xpython")
		FILENAME="main.py"
		;;
	"xrust")
		FILENAME="main.rs"
		;;
	esac

	cp "./template/$FILENAME" "./src/$ID"
	code "./src/$ID/$FILENAME"

	node -r @swc-node/register "./scripts/src/create.ts" "$ID"

}
main "$1"
