#include<iostream>
#include<vector>
#include<string>
#include<cstdlib>
#include<cmath>
#include<algorithm>

int xx = 1;

class Node {
public:
  Node() {
    u = NULL;
    d = NULL;
    l = NULL;
    r = NULL;
    data = -1;
    visited = false;
  };
  Node* u;
  Node* d;
  Node* l;
  Node* r;
  int data;
  int x, y;
  bool visited;
};

void traverse(Node* n) {
  if(n == NULL || n->visited || n->data == -1) {
    return;
  }
  n->data = xx;
  n->visited = true;
  traverse(n->u);
  traverse(n->d);
  traverse(n->l);
  traverse(n->r);
  ++xx;
}

int main() {
  int n, m;
  double k;
  std::cin >> n >> m >> k;
  std::vector<std::vector<Node*> > map;
  std::string a, b;
  for(int i = 0; i < m; ++i) {
    std::cin >> a >> b;
    map.push_back(std::vector<Node*>());
    for(int j = 0; j < n; ++j) {
      Node* x = new Node();
      if(a[j * 2 + 1] == '.') {
        x->u = map[i - 1][j];
        x->u->d = x;
      }
      if(b[j * 2] == '.') {
        x->l = map[i][j - 1];
        x->l->r = x;
      }
      x->data = (b[j * 2 + 1] == 'B' ? 0 : -1);
      x->x = i;
      x->y = j;
      map[i].push_back(x);
    }
  }
  for(auto it_0 = map.begin(); it_0 != map.end(); ++it_0) {
    for(auto it_1 = it_0->begin(); it_1 != it_0->end(); ++it_1) {
      Node* x = *it_1;
      traverse(x);
      x->visited = true;
    }
  }
  if(k == std::floor(k)) {
    std::vector<int> sol;
    bool dir = true;
    for(double i = 0; i < m; i += 0.5) {
      if(dir) {
        k -= 0.5;
      }
      else {
        k += 0.5;
      }
      if(k == std::floor(k)) {
        int u, v;
        if(dir) {
          u = (m - std::ceil(i));
          v = k;
        }
        else {
          u = (m - std::ceil(i));
          v = (k - 1);
        }
        if(map[u][v]->data != -1) {
          sol.push_back(map[u][v]->data);
        }
      }
      if(k == 0) {
        dir = false;
      }
      else if(k == n) {
        dir = true;
      }
    }
    for(double i = m; i >= 0; i -= 0.5) {
      if(dir) {
        k -= 0.5;
      }
      else {
        k += 0.5;
      }
      if(k == std::floor(k)) {
        int u, v;
        if(dir) {
          u = (m - std::ceil(i));
          v = k;
        }
        else {
          u = (m - std::ceil(i));
          v = (k - 1);
        }
        if(map[u][v]->data != -1) {
          sol.push_back(map[u][v]->data);
        }
      }
      if(k == 0) {
        dir = false;
      }
      else if(k == n) {
        dir = true;
      }
    }
    std::sort(sol.begin(), sol.end());
    sol.erase(std::unique(sol.begin(), sol.end()), sol.end());
    std::cout << sol.size() << "\n";
  }
  else {
    std::vector<int> sol;
    bool dir = true;
    for(double i = 0; i < m; ++i) {
      int u, v;
      u = (m - 1) - i;
      v = k;
      if(map[u][v]->data != -1) {
        sol.push_back(map[u][v]->data);
      }
      if(dir) {
        k -= 1;
      }
      else {
        k += 1;
      }
      if(k == -0.5) {
        dir = false;
      }
      else if(k == n - 0.5) {
        dir = true;
      }
      u = (m - 1) - i;
      v = k;
      if(map[u][v]->data != -1) {
        sol.push_back(map[u][v]->data);
      }
    }
    for(double i = (m - 1); i > 0; --i) {
      int u, v;
      u = (m - 1) - i;
      if(dir) {
        v = k;
      }
      else {
        v = k + 1;
      }
      if(map[u][v]->data != -1) {
        sol.push_back(map[u][v]->data);
      }
      if(dir) {
        k -= 1;
      }
      else {
        k += 1;
      }
      if(k == -0.5) {
        dir = false;
      }
      else if(k == n - 0.5) {
        dir = true;
      }
      u = (m - 1) - i;
      if(dir) {
        v = k;
      }
      else {
        v = k + 1;
      }
      if(map[u][v]->data != -1) {
        sol.push_back(map[u][v]->data);
      }
    }
    std::sort(sol.begin(), sol.end());
    sol.erase(std::unique(sol.begin(), sol.end()), sol.end());
    std::cout << sol.size() << "\n";
  }
  return 0;
}
