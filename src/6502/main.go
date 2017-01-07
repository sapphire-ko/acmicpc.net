package main;

import (
	. "fmt"
);

func main() {
	a, b, c := 0, 0, 0;

	for i := 1; ; i++ {
		Scan(&a);
		if a == 0 {
			break;
		}
		Scan(&b);
		Scan(&c);

		Printf("Pizza %d ", i);
		if (a * a * 4) < (b * b) + (c * c) {
			Print("does not fit");
		} else {
			Print("fits");
		}
		Println(" on the table.");
	}
}
