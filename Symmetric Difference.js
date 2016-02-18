// Symmetric Difference.js

// sym(A, B, C) Translates to sym(sym(A,B),C)


// First find the Symmetric Difference of Set A and Set B. Then find the
// Symmetric Difference of this new set and Set C.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) === [1,4,5]
// sym(a, b) = [1, 3]
// sym([1, 3], c) = [1, 4, 5]



function sym() {
  var args = Array.prototype.slice.call(arguments);

  return args.reduce(function(previousValue, currentValue, currentIndex, array) {

    var pSort = previousValue.sort(function(a, b) { // [ 2, 3, 3, 3, 5 ]
      return a - b;
    });
    var cSort = currentValue.sort(function(a, b) { // [ 1, 2, 5, 7 ]
      return a - b;
    });

    // remove duplicates from both arrays
    function removeDuplicates(sortedArray) {
      var noDuplicates = [];

      for (var i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i + 1] == sortedArray[i]) {} else {
          noDuplicates.push(sortedArray[i]);
        }
      }
      return noDuplicates;
    }

    function removeDoubles(sortedArray) {
      var noDuplicates = [];

      for (var i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i + 1] == sortedArray[i]) {
          i++;
        } else {
          noDuplicates.push(sortedArray[i]);
        }
      }
      return noDuplicates;
    }

    // arrays with duplicates removed
    var pDupes = removeDuplicates(pSort); // [ 2, 3, 5 ]
    var cDupes = removeDuplicates(cSort); // [ 1, 2, 5, 7 ]

    // combine and sort both arrays
    var sortedPreAndCur = pDupes.concat(cDupes).sort(function(a, b) {
      return a - b;
    });
    // [ 1, 2, 2, 3, 5, 5, 7 ]

    // remove doubles from comibed array
    return removeDoubles(sortedPreAndCur); // [ 1, 2, 4, 5, 6, 7, 8, 9 ]
  });
}

function sym() {

  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        // Keep any items that are unique - the index of the current item === index of the first occurrence in the array
        return arr.indexOf(item) === idx;
      });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, [])
}

function sym() {
  
  return Array.prototype.slice.call(arguments)
    .reduce(function(arr1, arr2) {
      return arr1.filter(function(item) {
          return arr2.indexOf(item) === -1;
        })
        .concat(arr2.filter(function(item) {
          return arr1.indexOf(item) === -1;
        }))
        .filter(function(item, idx, arr) {
          return arr.indexOf(item) === idx;
        });
    });
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
//should return [1, 2, 4, 5, 6, 7, 8, 9]
