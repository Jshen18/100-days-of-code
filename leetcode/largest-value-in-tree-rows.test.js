import test from 'ava'

//515. Find Largest Value in Each Tree Row
//You need to find the largest value in each row of a binary tree.

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

function largestRowValues(node) {
  const queue = [[node, 0]];
  const largestValues = [];
  while(queue.length) {
    const [currentNode, depth] = queue.shift();
    if(currentNode.right) {
      queue.push([currentNode.right, depth + 1]);
    }
    if(currentNode.left) {
      queue.push([currentNode.left, depth + 1]);
    }
    if(largestValues[depth] == null) {
      largestValues[depth] = currentNode.value;
    } else {
      largestValues[depth] = Math.max(largestValues[depth], currentNode.value);
    }
  }
  return largestValues;
}

test('should return largest values in each tree row', t => {
  const node = new Node(1);
  node.insertLeft(3).insertLeft(5);
  node.left.insertRight(3);
  node.insertRight(2).insertRight(9);
  t.deepEqual(largestRowValues(node), [1,3,9]);
});