import test from 'ava';

/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var resize = function(newLimit) {
  const tuples = [];
  this.storage.forEach((bucket) => {
    bucket.reduce((tuples, tuple) => {
      tuples.push(tuple);
      return tuples;
    }, tuples)
  })

  this.storageLimit = newLimit;
  this.size = 0;
  this.storage = [];
  tuples.forEach((tuple) => {
    this.insert(tuple[0], tuple[1]);
  });
}

function HashTable(limit) {
  this.storage = [];
  this.storageLimit = limit;
  this.size = 0;
}

HashTable.prototype.insert = function(key, value) {
  const hashIndex = getIndexBelowMaxForKey(key, this.storageLimit);
  let bucket = this.storage[hashIndex] || [];
  if (bucket.length === 0) {
    this.storage[hashIndex] = bucket;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }
  }
  bucket.push([key, value]);
  this.size++;

  if (this.size >= this.storageLimit * 0.75) {
    resize.call(this, this.storageLimit * 2);
  }
}

HashTable.prototype.retrieve = function(key) {
  const hashIndex = getIndexBelowMaxForKey(key, this.storageLimit);
  const bucket = this.storage[hashIndex];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
  }
  
  return undefined;
}

HashTable.prototype.remove = function(key) {
  const hashIndex = getIndexBelowMaxForKey(key, this.storageLimit);
  const bucket = this.storage[hashIndex];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1); // delete bucket[i] ?? 
        this.size--;

        if (this.size <= this.storageLimit * 0.25) {
          resize.call(this, this.storageLimit / 2);
        }

        return;
      }
    }
  }

  return undefined;
}


// INSERT
test('should increment size when inserting a key/value pair', t => {
  const hash = new HashTable(4);
  t.is(hash.size, 0);
  hash.insert('Ein', 'dog');
  t.is(hash.size, 1);
  t.deepEqual(hash.storage, [ [ [ 'Ein', 'dog' ] ] ]);
});

test('should handle key collisions', t => {
  const hash = new HashTable(4);
  hash.insert('Ein', 'dog');
  hash.insert('Eni', 'not a doge');
  t.is(hash.size, 2);
  t.deepEqual(hash.storage, [ [ [ 'Ein', 'dog' ], [ 'Eni', 'not a doge' ] ] ]);
});

test('should replace value if same key is inserted', t => {
  const hash = new HashTable(4);
  hash.insert('Ein', 'dog');
  t.deepEqual(hash.storage, [ [ [ 'Ein', 'dog' ] ] ]);
  hash.insert('Ein', 'super doge');
  t.deepEqual(hash.storage, [ [ [ 'Ein', 'super doge' ] ] ]);
});

test('should handle different keys', t => {
  const hash = new HashTable(4);
  hash.insert('Ein', 'dog');
  hash.insert('Bob', 'human');
  hash.insert('Eni', 'not a doge');
  t.is(hash.size, 3);
  t.is(hash.retrieve('Ein'), 'dog');
  t.is(hash.retrieve('Bob'), 'human');
  t.is(hash.retrieve('Eni'), 'not a doge');
});

// RETRIEVE
test('should retrieve a value by key', t => {
  const hash = new HashTable(4);
  hash.insert('Ein', 'dog');
  t.is(hash.retrieve('Ein'), 'dog');
});

test('should return undefined if there is no key/value pair', t => {
  const hash = new HashTable(4);
  t.is(hash.retrieve('Ein'), undefined);
});

// REMOVE
test('should remove key/value pair given key', t => {
  const hash = new HashTable(4);
  hash.insert('Ein', 'dog');
  t.deepEqual(hash.storage, [[['Ein', 'dog']]]);
  t.is(hash.size, 1);
  hash.remove('Ein');
  t.deepEqual(hash.storage, []);
  t.is(hash.size, 0);
});

test('should return undefined if key does not exist', t => {
  const hash = new HashTable(4);
  t.is(hash.size, 0);
  t.is(hash.remove('fooooo'), undefined);
  t.is(hash.size, 0);
});

// CHECK CAPACITY
test('should increase storage limit when filled 75% of storage', t => {
  const hash = new HashTable(4);
  t.is(hash.storageLimit, 4);
  hash.insert('Ein', 'dog');
  hash.insert('Bob', 'human1');
  hash.insert('Joe', 'human2');
  t.is(hash.storageLimit, 8);
});

test('should be able to retrieve original key/value pair if storage limit increases', t => {
  const hash = new HashTable(4);
  t.is(hash.storageLimit, 4);
  hash.insert('Ein', 'dog');
  hash.insert('Bob', 'human1');
  hash.insert('Joe', 'human2');
  t.is(hash.storageLimit, 8);
  t.is(hash.retrieve('Ein'), 'dog');
});

test('should decrease storage limit when size is 25% of storage', t => {
  const hash = new HashTable(10);
  t.is(hash.storageLimit, 10);
  hash.insert('Ein', 'dog');
  hash.insert('Bob', 'human1');
  hash.insert('Joe', 'human2');
  hash.remove('Ein');
  t.is(hash.storageLimit, 5);
});