#include<iostream>
#include<string>

int main() {
  int t;
  std::cin >> t;

  for(int i = 0; i < t; ++i) {
    int n, m;
    std::cin >> n >> m;
    int c = 0;
    for(int j = n; j <= m; ++j) {
      std::string s = std::to_string(j);
      for(auto it = s.begin(); it != s.end(); ++it) {
        if(*it == '0') {
          ++c;
        }
      }
    }
    std::cout << c << "\n";
  }

  return 0;
}
