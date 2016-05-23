#include<iostream>
#include<string>

int main() {
  int n, k;
  std::string s;

  std::cin >> n;
  for(int i = 0; i < n; ++i) {
    std::cin >> k >> s;
    for(auto iter = s.begin(); iter != s.end(); ++iter) {
      for(int j = 0; j < k; ++j) {
        std::cout << *iter;
      }
    }
    std::cout << "\n";
  }

  return 0;
}
