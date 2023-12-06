// Implement a Tree class
// A tree is a data structure composed of nodes.
// Each tree has a root node, and zero or more child nodes.
// Each node contains a value and a list of children nodes.
// A tree is typically traversed in two ways:
// - depth-first: first visit the children, then the siblings
// - breadth-first: first visit the siblings, then the children
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    // add child node
  }

  removeChild(childNode) {
    // remove child node
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverse() {
    // traverse tree and print values
  }

  search(value) {
    // search tree for value
  }
}

// Usage:
const tree = new Tree();
tree.root = new TreeNode(1);
tree.root.addChild(new TreeNode(2));
tree.root.addChild(new TreeNode(3));
tree.traverse(); // 1, 2, 3
