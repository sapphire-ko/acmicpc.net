#include<cstdio>
#include<deque>

std::deque<int> s;

int main() {
  int n;
  scanf("%d", &n);

  int t;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &t);
    s.push_back(t);
  }

  int c = 0;
  long long x = 0;
  while(s.size() > 0) {
    ++c;
    int k = s[0] - 1;
    s.pop_front();
    int i = 0;
    while(i < s.size()) {
      if(s[i] == k) {
        s.erase(s.begin() + i);
        --k;
      }
      if(k <= 0) {
        break;
      }
      ++i;
      ++x;
    }
  }

  printf("%llu\n", x);
  printf("%d\n", c);

  return 0;
}
