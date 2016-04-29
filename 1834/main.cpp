#include<iostream>

int main() {
  int n;
  std::cin >> n;

  long s = 0;
  for(int i = 1; i < n; ++i) {
    s += ((i * n) + i);
  }
  std::cout << s << "\n";

  return 0;
}
