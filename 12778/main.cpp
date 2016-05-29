#include<iostream>

int main() {
  int t;
  std::cin >> t;
  for(int i = 0; i < t; ++i) {
    int a;
    char b;
    std::cin >> a >> b;
    if(b == 'C') {
      char x;
      for(int j = 0; j < a; ++j) {
        std::cin >> x;
        std::cout << ((int)x - 64) << " ";
      }
    }
    else {
      int x;
      for(int j = 0; j < a; ++j) {
        std::cin >> x;
        std::cout << (char)(x + 64) << " ";
      }
    }
    std::cout << "\n";
  }
  return 0;
}
