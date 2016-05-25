#include<iostream>
#include<string>
#include<algorithm>

int main() {
  std::string a, b;
  int i = 0;
  while(true) {
    std::cin >> a >> b;
    if(a == "END") {
      break;
    }
    ++i;
    std::sort(a.begin(), a.end());
    std::sort(b.begin(), b.end());
    std::cout << "Case " << i << ": " << (a == b ? "same" : "different") << "\n";
  }
  return 0;
}
