#!/bin/bash

set -ex

function create_node {
	ID="$1"

	mkdir -p "./src/${ID}"
	cp "./template/"{main.js,input.txt,output.txt} "./src/$ID"
	code "./src/$ID/"{main.js,input.txt,output.txt}
}

function create_typescript {
	ID="$1"

	mkdir -p "./src/${ID}"
	cp "./template/main.ts" "./src/$ID"
	code "./src/$ID/"{main.ts,input.txt,output.txt}
}

function create_python {
	ID="$1"

	mkdir -p "./src/${ID}"
	cp "./template/main.py" "./src/$ID"
	code "./src/$ID/"{main.py,input.txt,output.txt}
}

function create_rust {
	ID="$1"

	mkdir -p "./src/${ID}"
	cp "./template/main.rs" "./src/$ID"
	code "./src/$ID/"{main.rs,input.txt,output.txt}
}

function main {
	TYPE="$1"
	read -p "enter problem id: " ID

	case "x$TYPE" in
	"x")
		create_node "$ID"
		;;
	"xts")
		create_typescript "$ID"
		;;
	"xpython")
		create_python "$ID"
		;;
	"xrust")
		create_rust "$ID"
		;;
	esac
}
main "$1"
