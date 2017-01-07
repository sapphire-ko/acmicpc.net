package main;

import (
	"fmt"
)

func main() {
	x := 0;

	fmt.Scan(&x);

	for i := range make([]int, x * 2) {
		for j := range make([]int, x) {
			if (i + j) % 2 == 0 {
				fmt.Print("*");
			} else {
				if j != (x - 1) {
					fmt.Print(" ");
				}
			}
		}
		fmt.Println();
	}
}
