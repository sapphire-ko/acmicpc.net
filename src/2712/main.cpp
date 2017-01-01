#include<iostream>
#include<iomanip>
#include<string>

int main() {
  int t;
  std::cin >> t;
  for(int i = 0; i < t; ++i) {
    double x;
    std::string s;
    std::cin >> x >> s;
    if(s == "kg") {
      std::cout << std::fixed << std::setprecision(4) << (x * 2.2046) << " lb\n";
    }
    else if(s == "lb") {
      std::cout << std::fixed << std::setprecision(4) << (x * 0.4536) << " kg\n";
    }
    else if(s == "l") {
      std::cout << std::fixed << std::setprecision(4) << (x * 0.2642) << " g\n";
    }
    else {
      std::cout << std::fixed << std::setprecision(4) << (x * 3.7854) << " l\n";
    }
  }
  return 0;
}
