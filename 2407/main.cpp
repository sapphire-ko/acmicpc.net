#include<iostream>
#include<vector>

#define LIMIT 1000000000000000L

void factorize(int n, std::vector<int>& v) {
  int i = 2;
  while(n > 1) {
    if(n % i == 0) {
      n /= i;
      v.push_back(i);
    }
    else {
      ++i;
    }
  }
}

int main() {
  int n, m;
  std::cin >> n >> m;

  std::vector<int> c_0;
  std::vector<int> c_1;
  for(int i = n; i > m; --i) {
    c_0.push_back(i);
  }
  for(int i = (n - m); i > 0; --i) {
    factorize(i, c_1);
  }
  for(auto it_0 = c_1.begin(); it_0 != c_1.end(); ++it_0) {
    for(auto it_1 = c_0.begin(); it_1 != c_0.end(); ++it_1) {
      if(*it_1 % *it_0 == 0) {
        *it_1 /= *it_0;
        break;
      }
    }
  }
  long long s_0 = 1, s_1 = 0;
  for(auto it = c_0.begin(); it != c_0.end(); ++it) {
    s_0 *= *it;
    s_1 *= *it;
    if(s_0 > LIMIT) {
      s_1 += (s_0 / LIMIT);
      s_0 %= LIMIT;
    }
  }
  if(s_1 != 0) {
    std::cout << s_1;
  }
  std::cout << s_0 << "\n";

  return 0;
}
