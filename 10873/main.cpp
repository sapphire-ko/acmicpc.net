#include<iostream>
#include<string>
#include<limits>

int main() {
  std::string x[24] = {
    "how to install ",
    "what is ",
    "",
    "why use ",
    "who use ",
    "disadvantages of ",
    "advantages of ",
    "",
    "",
    "",
    "",
    "getting started ",
    "",
    "",
    "",
    "",
    "difference between ",
    "",
    "",
    "",
    "how to make ",
    "",
    "",
    "best os x ",
  };
  std::string y[24] = {
    "",
    "",
    " not working",
    "",
    "",
    "",
    "",
    " open source projects",
    " tutorial",
    " performance",
    " sucks",
    "",
    "",
    " reference",
    " solution",
    " example code",
    " and C++",
    " site:acmicpc.net",
    " filetype:pdf",
    " slides",
    "",
    " jobs",
    " time",
    " app"
  };
  int n;
  std::cin >> n;
  for(int i = 0; i < n; ++i) {
    int a;
    std::string b;
    std::cin >> a;
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    std::getline(std::cin, b);
    if(a <= 24) {
      std::cout << x[a - 1] << b << y[a - 1] << "\n";
    }
    else {
      std::cout << b << "\n";
    }
  }
  return 0;
}
