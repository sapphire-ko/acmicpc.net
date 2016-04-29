#include<cstdio>
#include<cmath>
#include<vector>

std::vector<long long> p;
std::vector<long long> k;

int main() {
  long long a, b;
  scanf("%llu %llu", &a, &b);
  long long i = 2;
  while(i <= b) {
    p.push_back(i * i);
    i += 1;
  }

  for(long long i = a; i <= b; ++i) {
    printf("%llu\n", a);
    bool f = true;
    for(int j = 0; j < p.size(); ++j) {
      if(i % p[j] == 0) {
        f = false;
        break;
      }
    }
    if(f) {
      k.push_back(i);
    }
  }

  printf("%lu\n", k.size());

  return 0;
}
