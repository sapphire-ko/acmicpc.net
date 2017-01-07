package main;

import (
	"fmt"
)

func calc(str string) bool {
	for i := 0; i < len(str) / 2; i++ {
		if str[i] != str[len(str) - 1 - i] {
			return false;
		}
	}
	return true;
}

func main() {
	var str string;

	fmt.Scan(&str);

	if calc(str) {
		fmt.Println(1);
	} else {
		fmt.Println(0);
	}
}
