#include<iostream>
#include<cmath>

int main() {
  int n;
  std::cin >> n;

  for(int i = 0; i < n; ++i) {
    int k;
    std::cin >> k;
    int a[k];
    for(int j = 0; j < k; ++j) {
      std::cin >> a[j];
    }

    int x = a[0];
    int y = a[0];
    for(int j = 1; j < k; ++j) {
      x = std::max(a[j], x + a[j]);
      y = std::max(x, y);
    }

    std::cout << y << "\n";
  }

  return 0;
}
