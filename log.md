# 100 Days Of Code - Log

### Day 0: January 30, Tuesday

**Today's Progress**: 

Interview Cake Problems 
- Written in pseudoclassical instantiation
  - Implement the Queue data structure with linked lists
    - methods include enqueue, dequeue, peek, isEmpty
  - #19 Implement a Queue with Two Stacks
    - using 'this.length && this.length--;'
    - pushing and popping between two stacks
    - traversing through queue with node implementation using next pointers
    - o(m) where m is number of calls
  - #20 Max Stack
    - max stack was a composition problem i.e. max stack 'has' a stack, but does not 'inherit' from it
    - includes two new Stacks, to hold original stack and stack with max values
    - check max from the end of max stack

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

Interview Cake Problems 
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

**Thoughts** 
- Hash table methods include, insertion, retrieval, removal and should handle replacement, collisions, empty bucket
- A hash table cannot have tuples with the same key
- "Start with small optimization and ask how it can be taken further"
- Compared to a hash, a trie is better in the worst case scenario of 0(l) look up where l is length of word
- Trie can be used for auto-complete, can better print out the alphabet, and no collision handling


**Link(s) to work**
1. [Hashtable](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/hash-table.test.js)
2. [Trie of URLs](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/compress-url-list.test.js)

### Day 2: February 1, Thursday

**Today's Progress**: 

Interview Cake Problems 
- Written in pseudoclassical instantiation
  - # 14 Inflight Entertainment
    - Naive solution: two for loops, with the exception of waching the same movie twice, so negating intersection of loops O(n^2)
    - Using sets/object, we can have constant time lookup O(1)
    - key in object will be the difference between flight duration and movie length
      - if the difference exists in the object, while iterating through the movie length, then we return true,
        else false
    - Using an object means the value was set to 'true', but if using a Set then that would not be necessary

**Thoughts** 
- Tradeoff between time complexity and space i.e. decreasing time complexity means increased space needed
- Hash-based data structures are very common, try thinking about how this could be useful to your challenge first
- Data-structure brainstorming! When given a problem imagine how you would be able to solve it using various data    structures and find which would be most efficient


**Link(s) to work**
1. [Inflight Entertainment](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/inflight-entertainment.test.js)

### Day 1: January 31, Wednesday

**Today's Progress**: 

Interview Cake Problems
- #30 Permutation Palindrome
    - Use a set to keep a flag of whether or not the frequency of character appears an odd or even number of times
    - If the set has a size of 1 or zero, that means it has either all pairs or just one unique letter (the rest pairs)
    - A palindrome only needs to have letters that are pairs or with one letter without a pair

**Thoughts** 
- Usually getting a better time complexity from a naive solution includes using an object


**Link(s) to work**
1. [Hashtable](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/hash-table.test.js)
2. [Trie of URLs](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/compress-url-list.test.js)