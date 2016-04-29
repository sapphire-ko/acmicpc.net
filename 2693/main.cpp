#include<iostream>
#include<algorithm>
#include<vector>

int main() {
  int n;
  std::cin >> n;

  for(int i = 0; i < n; ++i) {
    int s;
    std::vector<int> v;
    for(int j = 0; j < 10; ++j) {
      std::cin >> s;
      v.push_back(s);
    }
    std::sort(v.begin(), v.end());
    std::cout << v[7] << "\n";
  }

  return 0;
}
