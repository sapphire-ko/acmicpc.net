#include<iostream>

int main() {
  int n;
  std::cin >> n;
  int s = 0;
  for(int i = 0; i < 5000; ++i) {
    std::cin >> n;
    s += n;
  }
  std::cout << 5000 << "\n" << s;
}
