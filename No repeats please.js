// No repeats please.js
// https://en.wikipedia.org/wiki/Heap%27s_algorithm

// return number of Permutations that dont have repeating letters
function permAlone(str) {

  var arr = str.split(''),
    var permutations = [];

  // Function to swap variables' content.
  function swap(a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(n) {
    if (n == 1) {
      permutations.push(arr.join(""));
    } else {
      for (var i = 0; i != n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }

  generate(arr.length);
  // The match() method retrieves the matches when matching a string against a regular expression.

  // Filter the array of repeated permutations. Return the length of filtered array
  return permutations.filter(function(string) {
    return !string.match(/(.)\1+/);
  }).length;
}
permAlone("abcdefa"); // should return 3600.
