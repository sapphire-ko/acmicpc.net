#include<iostream>
#include<vector>

std::vector<int> a;
std::vector<int> b;

int main() {
  int s;
  for(int i = 0; i < 10; ++i) {
    std::cin >> s;
    a.push_back(s);
  }
  for(int i = 0; i < 10; ++i) {
    std::cin >> s;
    b.push_back(s);
  }
  int k = 0;
  for(int i = 0; i < 10; ++i) {
    if(a[i] > b[i]) {
      ++k;
    }
    else if(a[i] < b[i]) {
      --k;
    }
  }
  if(k > 0) {
    std::cout << "A";
  }
  else if(k < 0) {
    std::cout << "B";
  }
  else {
    std::cout << "D";
  }
  std::cout << "\n";

  return 0;
}
