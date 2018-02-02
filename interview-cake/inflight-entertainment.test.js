import test from 'ava';

// Brute force solution = Runtime O(n^2) Space O(1)
// function hasTwoMoviesForFlight(flightLength, movieLengths) {
//   for (var i = 0; i < movieLengths.length; i++) {
//     for (var j = 0; j < movieLengths.length; j++) {
//       if ( j === i ) continue;
//       if (movieLengths[i] + movieLengths[j] === flightLength) {
//         return true;
//       } 
//     }
//   }
//   return false;
// }

//
function hasTwoMoviesForFlight(flightLength, movieLengths) {
  var movieLengthDifferences = {};
  for (var i = 0; i < movieLengths.length; i++) {
    if (movieLengthDifferences[movieLengths[i]]) {
      return true;
    } 
    var difference = flightLength - movieLengths[i];
    movieLengthDifferences[difference] = true;
  }
  return false;
}


test('should return true if there are two movie lengths that equal flight duration', t => {
  t.is(hasTwoMoviesForFlight(10, [1, 2, 5, 5, 3]), true);
});

test('should return false if there are no two movie lengths that equal flight duration', t => {
  t.is(hasTwoMoviesForFlight(10, [1, 2, 5, 3]), false);
});