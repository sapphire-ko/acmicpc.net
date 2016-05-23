#include<iostream>
#include<vector>
#include<algorithm>

class Node {
public:
  Node* next;
  int data;
};

int main() {
  int n, d, k, c;
  std::cin >> n >> d >> k >> c;
  std::vector<Node*> x;
  for(int i = 0; i < n; ++i) {
    Node* y = new Node();
    std::cin >> y->data;
    if(i != 0) {
      x[i - 1]->next = y;
    }
    x.push_back(y);
  }
  x[x.size() - 1]->next = x[0];
  int m = 0;
  for(int i = 0; i < n; ++i) {
    std::vector<int> t;
    Node* z = x[i];
    for(int j = 0; j < k; ++j) {
      t.push_back(z->data);
      z = z->next;
    }
    std::sort(t.begin(), t.end());
    auto last = std::unique(t.begin(), t.end());
    t.erase(last, t.end());
    bool f = true;
    for(auto it = t.begin(); it != t.end(); ++it) {
      if(*it == c) {
        f = false;
        break;
      }
    }
    if(f) {
      t.push_back(c);
    }
    if(m < t.size()) {
      m = t.size();
    }
  }

  std::cout << m << "\n";

  return 0;
}
