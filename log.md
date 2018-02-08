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

### Day 3: February 2, Friday

**Today's Progress**: 

Interview Cake Problems
- #30 Permutation Palindrome
  - Use a set to keep a flag of whether or not the frequency of character appears an odd or even number of times
  - If the set has a size of 1 or zero, that means it has either all pairs or just one unique letter (the rest pairs)
  - A palindrome only needs to have letters that are pairs or with one letter without a pair
- Graph Implementation - Undirected
  - Node label was the same as node 'data'
  - Object containing nodes with 'edges' properties to show relationship between nodes
  - When deleting node, make sure to look up edges that node was connected to, and lookup those edges to delete original node edge


**Thoughts** 
- Usually getting a better time complexity from a naive solution includes using an object
- Graphs can be used for social networks
- Graphs can be implemented via array also


**Link(s) to work**
1. [Permutation Palindrome](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/permutation-palindrome.test.js)
2. [Graph Implementation](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/graph.test.js)

### Day 4: February 3, Saturday

**Today's Progress**: 

Interview Cake Problems
- #2 Product of All Other Numbers
  - 

**Thoughts** 
- Using greedy approach to #2
- Walk through the problem slowly, if you see that there is a pattern of doing the same work, that's a red flag that it can be simplified


**Link(s) to work**
1. [Product of All Other Numbers](https://github.com/Jshen18/100-days-of-code/blob/master/data-structures/product-of-all-other-numbers.test.js)

### Day 5: February 5, Monday

**Today's Progress**: 

Interview Cake Problems
- #10 2nd Largest Item in BST
  - First think about how to find the largest item in a BST i.e. the most right item in a BST must be the largest 


Algorithms
- 2nd Largest Item in BST
  - One walk down BST means O(h) time, where h is height of tree (still O(logn) if tree is balanced, otherwise O(n). O(1) space)
  - try simplifying the problem to find the first largest item. 
- Depth First Search


**Thoughts** 
- Pre-order, in-order, post-order when traversing a tree determines order of traversal

**Link(s) to work**
1. [Depth First Search](https://github.com/Jshen18/100-days-of-code/blob/master/algorithms/depth-first-search.test.js)
2. [Second Largest in BST](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/second-largest-in-bst.test.js)

### Day 6: February 6, Tuesday

**Today's Progress**: 

Trello Clone


**Thoughts** 
- Synthetic Events
- Controlled Components
- ES6
- Local storage, session storage
- pseudoclasses, hooks to browser to know when to activate CS elements

### Day 7: February 7, Wednesday

**Today's Progress**: 

Interview Cake Problems
- #8 Superbalanced Binary Search Trees
  - Set min to a very high number, max to a very low number
  - Find whether or not the min and max have a difference of 1 to see if it's balanced
Leetcode
- Bottom Left Tree Value
  - Iterate through tree to find leaf node
- Largest Value in Tree Row
  - Initialize array to hold values, where index of array will be depth of row
  - Compare values to find max of each row


**Thoughts** 
- min = Math.max(min, depth)
- max = Math.max(min, depth)


**Link(s) to work**
1. [Superbalanced BST](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/balanced-binary-tree.test.js)
2. [Bottom Left Tree Value](https://github.com/Jshen18/100-days-of-code/blob/master/leetcode/bottom-left-tree-value.test.js)
3. [Largest Value In Tree](https://github.com/Jshen18/100-days-of-code/blob/master/interview-cake/largest-value-in-tree.test.js)