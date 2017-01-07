package main;

import (
	"fmt"
)

func main() {
	var str string;
	count := 0;

	for {
		_, err := fmt.Scan(&str);
		if err != nil {
			break;
		} else {
			count++;
		}
	}

	fmt.Println(count);
}
