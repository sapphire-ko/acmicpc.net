package main;

import (
	"fmt"
	"math"
)

func main() {
	var a int;
	fmt.Scan(&a);
	var b = math.Sqrt(float64(a));
	b = math.Ceil(b);
	fmt.Printf("%d\n", int(b));
}
