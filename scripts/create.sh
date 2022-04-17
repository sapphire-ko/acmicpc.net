#!/bin/bash

set -ex

function main {
	read -p "enter problem id: " ID

	cp -r "./template/" "./src/$ID"

	code "./src/$ID/main.js" "./src/$ID/input.txt" "./src/$ID/output.txt"
}

main
