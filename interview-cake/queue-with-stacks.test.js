import test from 'ava';

function Queue() {
  this.pushStack = [];
  this.popStack = [];
  this.length = 0;
}

Queue.prototype.enqueue = function(data) {
  this.pushStack.push(data);
  this.length++;
}

Queue.prototype.dequeue = function() {
  if (this.popStack.length === 0) {
    while(this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  this.length && this.length--;
  return this.popStack.pop();
}

test('should enqueue an item onto the queue', t => {
  const queue = new Queue();
  queue.enqueue('foo');
  t.is(queue.length, 1);
});

test('should dequeue the first item off the queue', t => {
  const queue = new Queue();
  queue.enqueue('foo');
  t.is(queue.length, 1);

  const expected = queue.dequeue()
  t.is(expected, 'foo');
  t.is(queue.length, 0);
});

test('should dequeue an item off the queue', t => {
  const queue = new Queue();
  queue.enqueue('foo');
  queue.enqueue('bar');
  t.is(queue.length, 2);

  t.is(queue.dequeue(), 'foo');
  t.is(queue.length, 1);

  t.is(queue.dequeue(), 'bar');
  t.is(queue.length, 0);
});