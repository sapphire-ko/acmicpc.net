#include<iostream>
#include<cmath>

int main() {
  int n;
  std::cin >> n;

  long long s = 0;
  for(long long i = 1; i < n; ++i) {
    s += ((i * n) + i);
  }
  std::cout << s << "\n";

  return 0;
}
