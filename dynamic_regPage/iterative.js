//ITERATIVE CODE

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function preorderIterative(root) {
  var curr, stack;

  if (root === null) {
    return;
  }

  stack = [];
  stack.push(root);

  while (stack) {
    if (curr) {
      console.log(curr.data);

      if (curr.right) {
        stack.push(curr.right);
      }
      curr = curr.left;
    } else {
      curr = stack.pop();
    }
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
preorderIterative(root);
