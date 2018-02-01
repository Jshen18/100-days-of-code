import test from 'ava';

function Trie() {
  this.rootNode = {};
};

Trie.prototype.addWord = function(word) {
  let currentNode = this.rootNode;
  for (var i = 0; i < word.length; i++) {
    const char = word[i];
    if (currentNode[char] == null) {
      currentNode[char] = {};
    }
    currentNode = currentNode[char];
  }

  if (currentNode['*'] == null) {
    currentNode['*'] = true;
    return true;
  }
  return false;
};

Trie.prototype.hasVisitedWord = function(word) {
  let currentNode = this.rootNode;
  for (var i = 0; i < word.length; i++) {
    const char = word[i];
    if (currentNode[char] == null) {
      return false;
    }
    currentNode = currentNode[char];
  }

  return currentNode['*'] != null;
};

test('should store string in trie', t => {
  const trie = new Trie();
  t.is(trie.addWord('dog'), true);
  t.is(trie.addWord('cat'), true);
  t.is(trie.addWord('dog'), false);
  t.is(trie.addWord('doge'), true);
});

test('should check if URL has been visited in trie', t => {
  const trie = new Trie();
  t.is(trie.hasVisitedWord('dog.com/about'), false);
  trie.addWord('dog.com/about');
  t.is(trie.hasVisitedWord('dog.com/about'), true);
  t.is(trie.hasVisitedWord('dog.com/'), false);
})