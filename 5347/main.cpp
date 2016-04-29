#include<cstdio>

long long gcd(long long a, long long b) {
  while(b != 0) {
    long long t = b;
    b = a % b;
    a = t;
  }
  return a;
}

int main() {
  long long n;
  scanf("%lld", &n);

  for(long long i = 0; i < n; ++i) {
    long long a, b;
    scanf("%lld %lld", &a, &b);

    printf("%lld\n", (a / gcd(a, b)) * b);
  }

  return 0;
}
