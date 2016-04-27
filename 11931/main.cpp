#include<cstdio>
#include<algorithm>
#include<vector>

bool s(int a, int b) {
  return b < a;
}

int main() {
  int n;
  scanf("%d", &n);

  std::vector<int> v;

  int k;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &k);
    v.push_back(k);
  }

  std::sort(v.begin(), v.end(), s);

  for(int i = 0; i < n; ++i) {
    printf("%d\n", v[i]);
  }

  return 0;
}
