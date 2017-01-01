#include<iostream>
#include<string>
#include<algorithm>

int main() {
  int n;
  std::cin >> n;

  for(int i = 0; i < n; ++i) {
    std::string a, b;
    std::cin >> a >> b;
    std::cout << a << " & " << b << " are ";
    std::sort(a.begin(), a.end());
    std::sort(b.begin(), b.end());
    if(a.compare(b) != 0) {
      std::cout << "NOT ";
    }
    std::cout << "anagrams.\n";
  }

  return 0;
}
