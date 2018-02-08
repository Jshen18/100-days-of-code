import test from 'ava';

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function isSuperBalanced(node) {
  const queue = [{ node, depth: 0 }];
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  while(queue.length) {
    const current = queue.shift();
    const currentNode = current.node;
    if (currentNode.left) {
      queue.push({ node: currentNode.left, depth: current.depth + 1 });
    }
    if (currentNode.right) {
      queue.push({ node: currentNode.right, depth: current.depth + 1 });
    }
    if (!currentNode.left && !currentNode.right) {
      min = Math.min(min, current.depth);
      max = Math.max(max, current.depth);
    }
    if (max - min > 1) {
      return false;
    }
  }
  return true;
}

test('should return false if binary tree is NOT superbalanced', t => {
  const node = new BinaryTreeNode(5);
  node.insertLeft(3).insertLeft(2).insertLeft(1);
  node.insertRight(10);
  t.is(isSuperBalanced(node), false);
});

test('should return true if binary tree is superbalanced', t => {
  const node = new BinaryTreeNode(5);
  node.insertLeft(3).insertLeft(2);
  node.insertRight(10)
  t.is(isSuperBalanced(node), true);
});