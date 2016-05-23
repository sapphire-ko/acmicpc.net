#include<iostream>
#include<map>

int main() {
  long long n;
  std::cin >> n;
  long long t;
  std::map<long long, long long> x;
  for(int i = 0; i < n; ++i) {
    std::cin >> t;
    ++x[t];
  }
  long long m = -1;
  long long z;
  for(auto iter = x.begin(); iter != x.end(); ++iter) {
    if(m < iter->second) {
      m = iter->second;
      z = iter->first;
    }
  }
  for(auto iter = x.begin(); iter != x.end(); ++iter) {
    if(iter->second == m) {
      if(iter->first < z) {
        z = iter->first;
      }
    }
  }
  std::cout << z << "\n";

  return 0;
}
