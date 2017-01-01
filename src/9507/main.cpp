#include<iostream>
#include<vector>

long long f(int n, std::vector<long long>& c) {
  if(c.size() <= n) {
    long long k = f(n - 1, c) + f(n - 2, c) + f(n - 3, c) + f(n - 4, c);
    c.push_back(k);
  }
  return c[n];
}

int main() {
  int t;
  std::cin >> t;
  std::vector<long long> c;
  c.push_back(1);
  c.push_back(1);
  c.push_back(2);
  c.push_back(4);
  for(int i = 0; i < t; ++i) {
    int n;
    std::cin >> n;
    std::cout << f(n, c) << "\n";
  }
  return 0;
}
