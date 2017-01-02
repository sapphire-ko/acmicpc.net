package main;import."fmt";var m=map[int]int{0:0,1:1,};func f(a int)int{_,y:=m[a];if y!=true{m[a]=f(a-1)+f(a-2)};return m[a]%1000000};func main(){a:=0;Scan(&a);Println(f(a%1500000))}
