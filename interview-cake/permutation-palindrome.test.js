import test from 'ava';

function isPalindrome(word) {
  const charSet = new Set();

  for (var i = 0; i < word.length; i++) {
    const char = word[i];
    if (charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char)
    }
  }
  
  const wordLength = word.length;
  if (wordLength % 2 === 1) {
    return charSet.size === 1;
  } else {
    return charSet.size === 0;
  }
  // return charSet.size <= 1;
}

test('should return true if any permutation is palindrome', t => {
  t.is(isPalindrome('civic'), true);
  t.is(isPalindrome('ivicc'), true);
  t.is(isPalindrome('racecar'), true);
  t.is(isPalindrome('rraceac'), true);
  t.is(isPalindrome('tacocat'), true);
  t.is(isPalindrome('ttccoaa'), true);
  t.is(isPalindrome('abbba'), true);
});

test('should return false if any permutation is NOT a palindrome', t => {
  t.is(isPalindrome('civil'), false);
  t.is(isPalindrome('livci'), false);
  t.is(isPalindrome('yabbadooby'), false);
  t.is(isPalindrome('hello'), false);
  t.is(isPalindrome('itsme'), false);
  t.is(isPalindrome('abbbaa'), false);
});
