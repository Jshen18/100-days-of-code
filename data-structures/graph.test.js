import test from 'ava';

// UNDIRECTED GRAPH
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = { edges: {} };
};

test('should add a node by value', t => {
  const graph = new Graph();
  graph.addNode(1);
  t.deepEqual(graph.nodes, { 1: { edges: {} } });
  graph.addNode(2);
  t.deepEqual(graph.nodes, { 1: { edges: {} }, 2: { edges: {} }});
});

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] != null;
};

test('should return true if node exists in graph', t => {
  const graph = new Graph();
  graph.addNode(1);
  t.is(graph.contains(1), true);
});

test('should return false if node does not exist in graph', t => {
  const graph = new Graph();
  t.is(graph.contains(2), false);
})

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  const edges = Object.keys(this.nodes[node].edges)
  edges.forEach((edge) => {
    if (this.nodes[edge].edges[node]) {
      delete this.nodes[edge].edges[node];
    }
  })
  delete this.nodes[node];
};

test('should remove node from graph', t => {
  const graph = new Graph();
  graph.addNode(1);
  t.is(graph.contains(1), true);
  graph.removeNode(1);
  t.is(graph.contains(1), false);
});

test('should remove edges when node is removed from graph', t => {
  const graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addEdge(1, 2);
  t.is(graph.hasEdge(1, 2), true);
  graph.removeNode(1);
  t.deepEqual(graph.nodes, { '2': { edges: { } } });
});

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(from, to) {
  const fromNode = this.nodes[from];
  const toNode = this.nodes[to];
  if (!fromNode || !toNode) return;

  fromNode.edges[to] = to;
  toNode.edges[from] = from; 
};

test('should add an edge between two nodes in graph', t => {
  const graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addEdge(1, 2);
  t.deepEqual(graph.nodes[1].edges, { 2: 2 });
  t.deepEqual(graph.nodes[2].edges, { 1: 1 });
});

test('should return undefined if either nodes do not exist', t => {
  const graph = new Graph();
  t.is(graph.addEdge(2, 1), undefined);
});

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(from, to) {
  const fromNode = this.nodes[from];
  const toNode = this.nodes[to];
  if (!fromNode || !toNode) return false;

  return this.nodes[from].edges[to] != null;
};

test('should return true if there is an edge between two nodes', t => {
  const graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addEdge(1, 2);
  t.is(graph.hasEdge(1, 2), true);
  t.is(graph.hasEdge(2, 1), true);
});

test('should return false if there is NO edge between two nodes', t => {
  const graph = new Graph();
  t.is(graph.hasEdge(1, 2), false);
  t.is(graph.hasEdge(2, 1), false);
});

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(from, to) {
  const fromNode = this.nodes[from];
  const toNode = this.nodes[to];
  if (!fromNode || !toNode) return;

  delete fromNode.edges[to];
  delete toNode.edges[from];
};

test('should remove edge between nodes', t => {
  const graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addEdge(1, 2);
  t.is(graph.hasEdge(1, 2), true);
  graph.removeEdge(2, 1);
  t.is(graph.hasEdge(1, 2), false);
  t.is(graph.hasEdge(2, 1), false);
});

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

test('should execute the callback for each node in graph', t => {
  const graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  const expectedNodes = [];
  graph.forEachNode((node) => {
    expectedNodes.push(node);
  });
  t.deepEqual(expectedNodes, ['1','2']);
});

/*
 * Complexity: What is the time complexity of the above functions?
 */
