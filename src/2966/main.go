package main;

import (
	. "fmt"
	. "strings"
)

func main() {
	str := "";

	Scan(&str);
	Scan(&str);

	a := []string{ "A", "B", "C" };
	b := []string{ "B", "A", "B", "C" };
	c := []string{ "C", "C", "A", "A", "B", "B" };

	aaa, bbb, ccc := 0, 0, 0;

	x := Split(str, "");
	for i, _:= range x {
		aa := a[i % len(a)];
		bb := b[i % len(b)];
		cc := c[i % len(c)];

		if aa == x[i] {
			aaa++;
		}
		if bb == x[i] {
			bbb++;
		}
		if cc == x[i] {
			ccc++;
		}
	}

	if aaa == bbb && aaa == ccc {
		Println(aaa);
		Println("Adrian");
		Println("Bruno");
		Println("Goran");
	} else if aaa == bbb && aaa > ccc {
		Println(aaa);
		Println("Adrian");
		Println("Bruno");
	} else if aaa == ccc && aaa > bbb {
		Println(aaa);
		Println("Adrian");
		Println("Goran");
	} else if bbb == ccc && bbb > aaa {
		Println(bbb);
		Println("Bruno");
		Println("Goran");
	} else if aaa > bbb && aaa > ccc {
		Println(aaa);
		Println("Adrian");
	} else if bbb > aaa && bbb > ccc {
		Println(bbb);
		Println("Bruno");
	} else if ccc > aaa && ccc > bbb {
		Println(ccc);
		Println("Goran");
	}
}
