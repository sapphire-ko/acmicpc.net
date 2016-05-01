#include<iostream>
#include<vector>

std::vector<char> v;

int main() {
  std::string s;
  std::cin >> s;

  int n;
  std::cin >> n;

  std::vector<char>::iterator iter = v.end();
  for(int i = 0; i < n; ++i) {
    char c;
    std::cin >> c;
    switch(c) {
    case 'L':
      if(iter != v.begin()) {
        --iter;
      }
      break;
    case 'D':
      if(iter != v.end()) {
        ++iter;
      }
      break;
    case 'B':
      v.erase(iter);
      break;
    case 'P':
      std::cin >> c;
      v.insert(iter, c);
      break;
    }
  }

  for(int i = 0; i < v.size(); ++i) {
    std::cout << v[i];
  }

  return 0;
}
