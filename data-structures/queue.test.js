import test from 'ava';

function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.isEmpty = function() {
  return this.head == null;
}

Queue.prototype.enqueue = function(data) {
  const node = new Node(data);
  if (this.tail) {
    node.next = this.tail;
  }
  this.tail = node;
  if (this.isEmpty()) {
    this.head = node;
  }
}

Queue.prototype.dequeue = function() {
  let current = this.tail;
  
  while (current) {
    const data = this.head.data;
    if (!current.next) {
      this.head = null;
      this.tail = null;
      return data;
    }
    if (!current.next.next) {
      this.head = current;
      current.next = null;
      return data;
    }
    current = current.next;
  }
  return null;
}

Queue.prototype.peek = function() {
  return this.head ? this.head.data : null;
}

test('should return true if queue is empty', t => {
  const queue = new Queue();
  t.is(queue.isEmpty(), true);
});

test('should add node to queue', t => {
  const queue = new Queue();
  const expectedNode = new Node('foo');

  queue.enqueue('foo');
  t.is(queue.isEmpty(), false);
  t.deepEqual(queue.head, expectedNode);
  t.deepEqual(queue.tail, expectedNode);
});

test('should add node to a queue with existing items', t => {
  const queue = new Queue();
  queue.enqueue('foo');
  queue.enqueue('bar');

  t.deepEqual(queue.tail.data, 'bar');
  t.deepEqual(queue.tail.next.data, 'foo');
});

test('should return first node in queue', t => {
  const queue = new Queue();
  queue.enqueue('jar');
  t.is(queue.peek(), 'jar');
});

test('should return null if queue is empty', t => {
  const queue = new Queue();
  t.is(queue.peek(), null);
});

test('should remove and return only item in queue', t => {
  const queue = new Queue();
  queue.enqueue('car');
  t.is(queue.dequeue(), 'car');
  t.is(queue.head, null);
  t.is(queue.tail, null);
});

test('should remove and return first item in queue', t => {
  const queue = new Queue();
  queue.enqueue('car');
  queue.enqueue('bus');
  t.is(queue.dequeue(), 'car');
  t.is(queue.head.data, 'bus');
  t.is(queue.head.next, null);
  t.is(queue.tail.data, 'bus');
  t.is(queue.tail.next, null);
});

test('should return null if dequeue from empty queue', t => {
  const queue = new Queue();
  t.is(queue.dequeue(), null);
})