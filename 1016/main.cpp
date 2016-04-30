#include<cstdio>
#include<cmath>

int main() {
  long long a, b;
  scanf("%llu %llu", &a, &b);
  long long i = 2;
  printf("%llu %llu\n", a, b);

  long long c = 0;
  for(long long i = a; i <= b; ++i) {
    bool f = true;
    for(long long j = 3; j <= std::sqrt(b); j += 2) {
      if(i % (j * j) == 0) {
        f = false;
        break;
      }
    }
    if(f) {
      ++c;
    }
  }

  printf("%llu\n", c);

  return 0;
}
