#include<cstdio>
#include<map>

std::map<int, int> m;

int main() {
  int n;
  int k;
  scanf("%d %d", &n, &k);

  int s;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &s);
    ++m[s];
  }

  int c = 0;
  for(std::map<int, int>::iterator iter = m.begin(); iter != m.end(); ++iter) {
    c += m[iter->first];
    if(k <= c) {
      printf("%d", iter->first);
      return 0;
    }
  }

  return 0;
}
