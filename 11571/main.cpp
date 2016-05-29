#include<cstdio>
#include<cstring>
#include<vector>

int map[10000];

int main() {
  int t;
  scanf("%d", &t);
  for(int i = 0; i < t; ++i) {
    memset(&map[0], 0, sizeof(map));
    int a, b;
    scanf("%d %d", &a, &b);
    if(a == 0) {
      printf("0.(0)\n");
    }
    else {
      std::vector<int> x;
      int j = 0;
      map[a] = j;
      bool f = true;
      while(f) {
        x.push_back((a / b));
        a %= b;
        a *= 10;
        if(map[a] != 0) {
          break;
        }
        else {
          map[a] = ++j;
        }
      }
      j = map[a];
      printf("%d.", x[0]);
      for(int k = 1; k < j; ++k) {
        printf("%d", x[k]);
      }
      printf("(");
      for(int k = j; k < x.size(); ++k) {
        printf("%d", x[k]);
      }
      printf(")\n");
    }
  }
  return 0;
}
