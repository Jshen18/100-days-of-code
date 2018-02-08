import test from 'ava';

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

function getBFSPath(node) {
  const queue = [];
  const path = [];
  queue.push(node);
  while(queue.length) {
    const current = queue.shift();
    if (current.right) {
      queue.push(current.right);
    }
    if (current.left) {
      queue.push(current.left);
    }

    path.push(current.value);
  }
  return path;
}

test('should traverse breath first through BST', t=> {
  const node = new Node(5);
  node.insertLeft(2).insertLeft(1);
  node.left.insertRight(3);
  node.insertRight(8);
  console.log(getBFSPath(node));
  t.deepEqual(getBFSPath(node), [5,2,8,1,3]);
});

