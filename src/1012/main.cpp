#include<iostream>
#include<vector>

class Node {
public:
  Node(bool _data) : data(_data) {
    u = NULL;
    d = NULL;
    l = NULL;
    r = NULL;
    visited = false;
  };
  bool data;
  Node *u, *d, *l, *r;
  bool visited;
};

void traverse(Node* x) {
  if(x == NULL || x->visited == true || x->data == false) {
    return;
  }
  x->visited = true;
  traverse(x->u);
  traverse(x->d);
  traverse(x->l);
  traverse(x->r);
}

int calc() {
  int m, n, k;
  std::cin >> m >> n >> k;

  std::vector<std::vector<Node*> > map;

  for(int i = 0; i < m; ++i) {
    map.push_back(std::vector<Node*>());
    for(int j = 0; j < n; ++j) {
      Node* x = new Node(false);
      if(i > 0) {
        x->u = map[i - 1][j];
        x->u->d = x;
      }
      if(j > 0) {
        x->l = map[i][j - 1];
        x->l->r = x;
      }
      map[i].push_back(x);
    }
  }

  int x, y;
  for(int i = 0; i < k; ++i) {
    std::cin >> x >> y;
    map[x][y]->data = true;
  }

  int c = 0;
  for(int i = 0; i < m; ++i) {
    for(int j = 0; j < n; ++j) {
      if(map[i][j]->visited == false && map[i][j]->data) {
        ++c;
        traverse(map[i][j]);
      }
    }
  }

  return c;
}

int main() {
  int c;
  std::cin >> c;

  for(int i = 0; i < c; ++i) {
    std::cout << calc() << "\n";
  }

  return 0;
}
