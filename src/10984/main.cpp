#include<iostream>

int main() {
  int t;
  std::cin >> t;

  for(int i = 0; i < t; ++i) {
    int n;
    std::cin >> n;
    double s = 0.0;
    int x = 0;
    for(int j = 0; j < n; ++j) {
      int c; double g;
      std::cin >> c >> g;
      s += c * g;
      x += c;
    }
    std::cout.precision(1);
    std::cout << std::fixed << x << " " << (s / (double)x) << "\n";
  }

  return 0;
}
