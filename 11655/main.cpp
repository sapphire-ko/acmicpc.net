#include<iostream>
#include<string>

int main() {
  std::string s;
  std::getline(std::cin, s);

  for(int i = 0; i < s.length(); ++i) {
    if(s[i] >= 65 && s[i] <= 90) {
      s[i] = ((((s[i] - 65) + 13) % 26) + 65);
    }
    if(s[i] >= 97 && s[i] <= 122) {
      s[i] = ((((s[i] - 97) + 13) % 26) + 97);
    }
    std::cout << s[i];
  }
  std::cout << "\n";
  
  return 0;
}
