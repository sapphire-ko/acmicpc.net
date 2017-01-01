#include<cstdio>
#include<vector>

std::vector<int> v;

int main() {
  int n, m;
  scanf("%d %d", &n, &m);

  int s;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &s);
    v.push_back(s);
  }

  int t;
  for(int i = 0; i < m; ++i) {
    scanf("%d %d", &s, &t);

    int min = 2000000000;
    for(int j = s - 1; j < t; ++j) {
      if(v[j] < min) {
        min = v[j];
      }
    }
    printf("%d\n", min);
  }

  return 0;
}
