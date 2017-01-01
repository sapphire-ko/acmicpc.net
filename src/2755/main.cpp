#include<iostream>
#include<cmath>

int main() {
  int n;
  std::cin >> n;

  std::string a, c;
  int b;
  double s = 0;
  int g = 0;
  for(int i = 0; i < n; ++i) {
    std::cin >> a >> b >> c;
    double k;
    switch(c[0]) {
    case 'A':
      k = 4.0;
      break;
    case 'B':
      k = 3.0;
      break;
    case 'C':
      k = 2.0;
      break;
    case 'D':
      k = 1.0;
      break;
    case 'F':
      k = 0.0;
      break;
    }
    switch(c[1]) {
    case '+':
      k += 0.3;
      break;
    case '-':
      k -= 0.3;
      break;
    }
    s += b * k;
    g += b;
  }
  std::cout << std::round((s / g) * 100) / 100 << std::endl;

  return 0;
}
