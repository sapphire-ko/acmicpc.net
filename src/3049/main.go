package main

import (
	"fmt"
)

func main() {
	var a int
	fmt.Scanf("%d", &a)
	fmt.Printf("%d\n", (a * (a - 1) * (a - 2) * (a - 3)) / 24)
}
