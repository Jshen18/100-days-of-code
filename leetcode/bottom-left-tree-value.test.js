import test from 'ava';

// 513. Find Bottom Left Tree Value
// Given a binary tree, find the leftmost value in the last row of the tree.

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Node.prototype.insertLeft = function(value){
  const node = new Node(value);
  this.left = node;
  return this.left;
}


Node.prototype.insertRight = function(value){
  const node = new Node(value);
  this.right = node;
  return this.right;
}

function getLeftValue(node) {
  const queue = [];
  queue.push(node);
  while(queue.length) {
    const current = queue.shift();
    if (current.right) {
      queue.push(current.right);
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (queue.length === 0) {
      return current.value;
    }
  }
}

test('should return bottom left tree value', t => {
  const node = new Node(2);
  node.insertLeft(1);
  node.insertRight(3);
  t.is(getLeftValue(node), 1);
});

test('should return bottom left tree value testcase 2', t => {
  const node = new Node(1);
  node.insertLeft(2).insertLeft(4);
  node.insertRight(3).insertRight(6);
  node.right.insertLeft(5).insertLeft(7);
  t.is(getLeftValue(node), 7);
});