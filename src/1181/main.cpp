#include<iostream>
#include<vector>
#include<string>
#include<algorithm>

bool compare(const std::string& a, const std::string& b) {
  if(a.length() < b.length()) {
    return true;
  }
  else if(a.length() > b.length()) {
    return false;
  }
  else {
    return (a.compare(b) < 0);
  }
}

int main() {
  int n;
  std::cin >> n;

  std::vector<std::string> x;
  std::string s;
  for(int i = 0; i < n; ++i) {
    std::cin >> s;
    x.push_back(s);
  }
  std::sort(x.begin(), x.end(), compare);

  auto last = std::unique(x.begin(), x.end());
  x.erase(last, x.end());

  for(auto it = x.begin(); it != x.end(); ++it) {
    std::cout << *it << "\n";
  }

  return 0;
}
