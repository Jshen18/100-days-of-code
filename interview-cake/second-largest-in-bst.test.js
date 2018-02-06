import test from 'ava';

function Node(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

Node.prototype.insertRight = function (value) {
  const node = new Node(value);
  this.right = node;
  return this.right;
}

Node.prototype.insertLeft = function(value) {
  const node = new Node(value);
  this.left = node;
  return this.left;
}

Node.prototype.getLargestItem = function() {
  let current = this;
  while(current) {
    if (!current.right) {
      return current.value;
    } 
    current = current.right;
  }
}

Node.prototype.getSecondLargest = function() {
  let current = this;
  while(current) {
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    if (!current.right && current.left) {
      return current.left.getLargestItem();
    }
    current = current.right;
  }
}


test('should return the largest item in the binary search tree', t => {
  const node = new Node(5);
  node.insertRight(6);
  t.is(node.getLargestItem(), 6);
});

test('should return 2nd largest item in binary search tree', t => {
  const node = new Node(5);
  node.insertRight(7).insertLeft(6);
  t.is(node.getSecondLargest(), 6);
});

test('should return 2nd largest item in binary search tree', t => {
  const node = new Node(5);
  node.insertRight(6)
  t.is(node.getSecondLargest(), 5);
});

test('should return 2nd largest item in binary search tree', t => {
  const node = new Node(5);
  node.insertRight(6).insertRight(7).insertRight(8);
  t.is(node.getSecondLargest(), 7);
});

test('should return 2nd largest item in binary search tree', t => {
  const node = new Node(5);
  node.insertLeft(4);
  t.is(node.getSecondLargest(), 4);
});