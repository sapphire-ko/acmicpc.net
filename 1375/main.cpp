#include<cstdio>
#include<vector>
#include<map>

class Node {
public:
  Node(int _id) : id(_id) {}
  int id;
  std::map<int, Node*> older;
  std::map<int, Node*> younger;
};

std::vector<Node*> vec;

int main() {
  int n, m;
  scanf("%d %d", &n, &m);

  vec.push_back(new Node(-1));
  for(int i = 0; i < n; ++i) {
    vec.push_back(new Node(i + 1));
  }

  int a, b;
  for(int i = 0; i < m; ++i) {
    scanf("%d %d", &a, &b);
    printf("%d %d\n", vec[a]->id, vec[b]->id);
    vec[a]->younger[vec[b]->id] = vec[b];
    vec[b]->older[vec[a]->id] = vec[a];

    for(std::map<int, Node*>::iterator iter = vec[a]->younger.begin(); iter != vec[a]->younger.end(); ++iter) {
      printf("%d\n", iter->first);
    }
  }

  return 0;
}
