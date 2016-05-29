#include<iostream>
#include<vector>

std::vector<int> c;

int fib(int n) {
  if(c.size() < n) {
    c.push_back((fib(n - 1) + fib(n - 2)) % 10000);
  }
  return c[n];
}

int main() {
  c.push_back(1);
  c.push_back(1);
  int n;
  do {
    std::cin >> n;
    if(n == -1) {
      break;
    }
    else {
      std::cout << fib(n) << "\n";
    }
  }
  while(true);
  return 0;
}
