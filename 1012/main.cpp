#include<iostream>
#include<vector>

class Node {
public:
  Node(int _x, int _y) : x(_x), y(_y) {
    u = NULL;
    d = NULL;
    l = NULL;
    r = NULL;
  };
  int x, y;
  Node *u, *d, *l, *r;
};

void traverse(Node* x) {
  if(x == NULL) {
    return;
  }
  traverse(x->u);
  traverse(x->d);
  traverse(x->l);
  traverse(x->r);
  x = NULL;
}

int calc() {
  int m, n, k;
  std::cin >> m >> n >> k;

  std::vector<std::vector<Node*> > map;

  int x;
  for(int i = 0; i < m; ++i) {
    map.push_back(std::vector<Node*>());
    for(int j = 0; j < n; ++j) {
      std::cin >> x;

      if(x == 1) {
        Node* y = new Node(i, j);
        map[i].push_back(y);

        if(i == 0) {
          if(j != 0) {
            if(map[i][j - 1] != NULL) {
              y->l = map[i][j - 1];
              map[i][j - 1]->r = y;
            }
          }
        }
        else {
          if(map[i - 1][j] != NULL) {
            y->u = map[i - 1][j];
            map[i - 1][j]->d = y;
          }
          if(j != 0) {
            if(map[i][j - 1] != NULL) {
              y->l = map[i][j - 1];
              map[i][j - 1]->r = y;
            }
          }
        }
      }
      else {
        map[i].push_back(NULL);
      }
    }
  }

  int c = 0;
  for(int i = 0; i < m; ++i) {
    for(int j = 0; j < n; ++j) {
      if(map[i][j] != NULL) {
        Node* x = map[i][j];
        traverse(map[i][j]);
        ++c;
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
