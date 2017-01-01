#include<iostream>

int gcd(int a, int b) {
  while(b != 0) {
    int t = b;
    b = a % b;
    a = t;
  }
  return a;
}

int main() {
  int t;
  std::cin >> t;
  for(int i = 0; i < t; ++i) {
    int n;
    std::cin >> n;
    int a[n];
    for(int j = 0; j < n; ++j) {
      std::cin >> a[j];
    }

    int s = 0;
    for(int j = 0; j < n - 1; ++j) {
      for(int k = j + 1; k < n; ++k) {
        s += gcd(a[j], a[k]);
      }
    }
    std::cout << s << "\n";
  }

  return 0;
}
