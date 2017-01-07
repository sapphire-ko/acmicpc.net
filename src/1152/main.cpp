#include <iostream>

int main() {
	int count = 0;
	std::string str;
	while(std::cin >> str) {
		++count;
	}

	std::cout << count;
	
	return 0;
}
