import test from 'ava';

function getProductExceptIndex (array) {
  
}


test('should return array of product of all numbers except the index', t => {
  const array = [5, 1, 10, 2];
  t.deepEqual(getProductExceptIndex(array), [20, 100, 10, 50]);
})

