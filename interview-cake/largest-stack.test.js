import test from 'ava';

function Stack() {
  // initialize an empty array
  this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
      return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

function MaxStack() {
  this.stack = new Stack();
  this.maxStack = new Stack();
}

MaxStack.prototype.push = function(data) {
  if (!this.maxStack.peek() || data > this.maxStack.peek()) {
    this.maxStack.push(data);
  }
  this.stack.push(data);
};

MaxStack.prototype.pop = function() {
  const popped = this.stack.pop();
  if (popped === this.maxStack.peek()) {
    this.maxStack.pop();
  }
  return popped;
}

MaxStack.prototype.getMax = function() {
  return this.maxStack.peek();
}

test('should get max item in stack', t => {
  const maxStack = new MaxStack();
  maxStack.push(3);
  maxStack.push(2);
  maxStack.push(4);
  t.is(maxStack.getMax(), 4);
  maxStack.pop();
  t.is(maxStack.getMax(), 3);
});

test('should return null if no items in stack', t => {
  const maxStack = new MaxStack();
  t.is(maxStack.getMax(), null);
})