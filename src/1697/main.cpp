#include<cstdio>
#include<iostream>

int main() {
  int n, k;
  scanf("%d %d", &n, &k);

  if(k <= n) {
    printf("%d\n", n - k);
  }
  else {
    int arr[k * 2];
    std::fill(arr, arr + k * 2, -1);
    arr[n] = 0;
    int c = 0;
    while(arr[k] == -1) {
      for(int i = 0; i < k * 2; ++i) {
        if(arr[i] == c) {
          if(arr[i - 1] == -1) {
            arr[i - 1] = c + 1;
          }
          if(arr[i + 1] == -1) {
            arr[i + 1] = c + 1;
          }
          if(i * 2 < k * 2 && arr[i * 2] == -1) {
            arr[i * 2] = c + 1;
          }
        }
      }
      ++c;
    }
    printf("%d\n", arr[k]);
  }

  return 0;
}
