#include<cstdio>
#include<vector>

class Node {
public:
  Node(int _k) : data(_k) {};
  Node* left;
  Node* right;
  int data;
};

class Heap {
private:
  std::vector<Node*> data;
public:
  Heap() {
    this.
    
  }
  int size() { return data.size(); }
  void insert_node(int k) {
    if(size() == 0) {
      data.push_back(new Node(k));
    }
  }
  int delete_node() {
    if(size() > 0) {
      int k = data[0]->data;
      delete data[0];
      data[0] = data[size()];
      data.pop_back();
      return k;
    }
    else {
      return 0;
    }
  }
};

int main() {
  int n;
  scanf("%d", &n);

  Heap h;

  int k;
  for(int i = 0; i < n; ++i) {
    scanf("%d", &k);

  }

  return 0;
}
