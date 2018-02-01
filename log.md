# 100 Days Of Code - Log

### Day 0: January 30, Tuesday

**Today's Progress**: 

Interview Cake Problems with queue and stacks
- Written in pseudoclassical instantiation
  - #19
    - using 'this.length && this.length--;'
    - pushing and popping between two stacks
    - traversing through queue with node implementation using next pointers
  - #20
    - max stack was a composition problem i.e. max stack 'has' a stack, but does not 'inherit' from it

TDD on problems using ava

**Thoughts** 
- Implementation in queues using array, object, or nodes/linked lists
- Using data structures within data structures (used in get max value in stack)
- Stacks = LIFO
- Queues = FIFO


**Link(s) to work**
1. [Queue with LinkedLists](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/queue.test.js)
2. [Queue with two stacks](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/queue-with-stacks.test.js)
3. [Get max value in stack](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/largest-stack.test.js)

### Day 1: January 31, Wednesday

**Today's Progress**: 

Interview Cake Problems with queue and stacks
- Written in pseudoclassical instantiation
  - Implement Hash Table
    - Using an array to implement hash table, buckets, tuples
    - An index is hashed from the key, which becomes the index of the bucket where tuples are stored
    - Insertion Method requires key, value -- to handle replacement, collisions, and empty buckets
    - Hash resizing -- extract the resize function to double the limit storage when the size is greater than 3/4 the storage limit, else half the storage limit when the size is less than 1/4 the storage limit. 
    - Resizing the hash means iterating through original storage, resetting storage = 0, re-indexing data, and running those through insert function 

  - #11
    - Using a trie to optimize space used to store URLs that have been visited
    - Used a large hash map, where keys were URLs and value a boolean
    - Nested object keys were set to each char in URL, with '*' denoting the end of a URL
    - Can be created via nodes and pointers, or nested objects
    - 

TDD on problems using ava

**Thoughts** 
- Hash table methods include, insertion, retrieval, removal and should handle replacement, collisions, empty bucket
- A hash table cannot have tuples with the same key
- "Start with small optimization and ask how it can be taken further"
- Compared to a hash, a trie is better in the worst case scenario of 0(l) look up where l is length of word
- Trie can be used for auto-complete, can better print out the alphabet, and no collision handling


**Link(s) to work**
1. [Hashtable](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/hash-table.test.js)
2. [Trie of URLs](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/compress-url-list.test.js)

