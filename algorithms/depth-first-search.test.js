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

//Iterative Solution for DFS Pre-order
// function getDFSPath(node) {
//   const stack = [];
//   const path = [];
//   stack.push(node);
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.right) {
//       stack.push(current.right);
//     }
//     if (current.left) {
//       stack.push(current.left);
//     }
//     path.push(current.value);
//   }
//   return path;
// }

//Recursive Solution for DFS Pre-order
function getDFSPath(node) {
  function depthFirstSearch(node, path) {
    path.push(node.value);
    
    if (node.left) {
      depthFirstSearch(node.left, path)
    }
    
    if (node.right) {
      depthFirstSearch(node.right, path);
    }

    return path;
  }

  return depthFirstSearch(node, []);
}

test('should traverse depth first on binary tree', t => {
  const tree = new Node('a');
  tree.insertLeft('b')
  tree.insertRight('c').insertLeft('d');
  tree.right.insertRight('e');

  const expected = getDFSPath(tree);
  t.deepEqual(expected, [ 'a', 'b', 'c', 'd', 'e' ]);
});