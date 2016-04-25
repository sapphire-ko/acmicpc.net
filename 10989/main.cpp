#include<cstdio>
#include<iostream>
#include<map>

std::map<int, int> m;

int main() {
  int n;
  scanf("%d", &n);

  int s;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &s);
    ++m[s];
  }

  for(std::map<int,int>::iterator iter = m.begin(); iter != m.end(); ++iter) {
    for(int i = 0; i < iter->second; ++i) {
      printf("%d\n", iter->first);
    }
  }

  return 0;
}
