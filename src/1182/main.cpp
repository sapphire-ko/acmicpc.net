#include<cstdio>
#include<vector>

void print(std::vector<std::vector<int> >& c) {
  for(auto iter_1 = c.begin(); iter_1 != c.end(); ++iter_1) {
    for(auto iter_2 = iter_1->begin(); iter_2 != iter_1->end(); ++iter_2) {
      printf("*%d ", *iter_2);
    }
    printf("\n");
  }
  printf("\n");
}

int main() {
  int n, s;
  scanf("%d", &n);
  scanf("%d", &s);

  int k[n];
  for(int i = 0; i < n; ++i) {
    scanf("%d", &k[i]);
  }
  int s_n = 0, s_p = 0;
  for(int i = 0; i < n; ++i) {
    if(k[i] < 0) {
      s_n += k[i];
    }
    else {
      s_p += k[i];
    }
  }

  if(s < s_n || s_p < s) {
    printf("0\n");
    return 0;
  }

  std::vector<std::vector<int> > c;
  for(int i = 0; i <= n; ++i) {
    c.push_back(std::vector<int>());
    for(int j = 0; j <= (s_p - s_n); ++j) {
      c[i].push_back((i == 0 && j == -s_n) ? 1 : 0);
    }
  }

//  print(c);

  for(int i = 1; i <= n; ++i) {
    for(int j = 0; j <= (s_p - s_n); ++j) {
      int x = (j - k[i - 1]);
      if(x >= 0 && x <= (s_p - s_n)) {
        c[i][j] = c[i - 1][j] + c[i - 1][x];
      }
      else {
        c[i][j] = c[i - 1][j];
      }
    }
//    print(c);
  }

  printf("%d\n", c[n][(s - s_n)] + (s == 0 ? -1 : 0));

  return 0;
}
