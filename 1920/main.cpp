#include<cstdio>
#include<map>

std::map<int, int> m;

int main() {
  int n;
  scanf("%d", &n);

  int s;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &s);
    m[s] = 1;
  }

  scanf("%d", &n);
  for(int i = 0; i < n; ++i) {
    scanf("%d", &s);
    printf("%d\n", m[s]);
  }

  return 0;
}
