#include<iostream>
#include<string>
#include<map>

int main() {
  int n;
  std::cin >> n;

  int x = 2015;

  std::string s;
  for(int i = 0; i < n; ++i) {
    std::cin >> s;
    std::map<char, bool> m;

    for(int j = 0; j < s.length(); ++j) {
      m[s[j]] = true;
    }

    int k = 0;
    for(std::map<char, bool>::iterator iter = m.begin(); iter != m.end(); ++iter) {
      k += (int)iter->first;
    }
    std::cout << (x - k) << "\n";
  }

  return 0;
}
