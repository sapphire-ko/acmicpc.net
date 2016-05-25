#include<iostream>
#include<vector>
#include<algorithm>

int main() {
  int x, y;
  std::cin >> x >> y;

  int t[x][y];
  for(int i = 0; i < x; ++i) {
    for(int j = 0; j < y; ++j) {
      std::cin >> t[i][j];
    }
  }

  int k;
  std::cin >> k;

  int s = 0;
  for(int i = 1; i < x - 1; ++i) {
    for(int j = 1; j < y - 1; ++j) {
      std::vector<int> c;
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      c.push_back(t[i - 1][j - 1]);
      std::sort(c.begin(), c.end());
      if(c[4] >= k) {
        ++s;
      }
    }
  }

  std::cout << s << "\n";

  return 0;
}
