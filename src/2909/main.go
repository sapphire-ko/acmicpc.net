package main;

import (
	. "fmt"
	. "math"
);

func main() {
	i, j := 0.0, 0.0;
	Scan(&i, &j);

	Println(int(Floor(i / Pow(10.0, j) + 0.5) * Pow(10.0, j)));
}
