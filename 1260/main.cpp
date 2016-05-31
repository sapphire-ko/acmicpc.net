#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>

class Node {
public:
  Node(int _id ) : id(_id) {
    visited_0 = false;
    visited_1 = false;
  }
  int id;
  std::vector<Node*> next;
  bool visited_0;
  bool visited_1;
};

void dfs(Node* n) {
  std::cout << (n->id + 1) << " ";
  n->visited_0 = true;
  for(auto it = n->next.begin(); it != n->next.end(); ++it) {
    if((*it)->visited_0 == false) {
      dfs(*it);
    }
  }
}

void bfs(Node* n) {
  std::queue<Node*> q;
  q.push(n);
  while(q.size() > 0) {
    Node* x = q.front();
    q.pop();
    if(x->visited_1 == false) {
      std::cout << (x->id + 1) << " ";
      x->visited_1 = true;
      for(auto it = x->next.begin(); it != x->next.end(); ++it) {
        if((*it)->visited_1 == false) {
          q.push(*it);
        }
      }
    }
  }
}

bool sort_n(Node* a, Node* b) {
  return (a->id < b->id);
}

int main() {
  int n, m, v;
  std::cin >> n >> m >> v;

  std::vector<Node*> g;
  for(int i = 0; i < n; ++i) {
    g.push_back(new Node(i));
  }

  int a, b;
  for(int i = 0; i < m; ++i) {
    std::cin >> a >> b;
    g[a - 1]->next.push_back(g[b - 1]);
    g[b - 1]->next.push_back(g[a - 1]);
  }

  for(auto it = g.begin(); it != g.end(); ++it) {
    std::sort((*it)->next.begin(), (*it)->next.end(), sort_n);
  }

  dfs(g[v - 1]);
  std::cout << "\n";
  bfs(g[v - 1]);
  std::cout << "\n";

  return 0;
}
