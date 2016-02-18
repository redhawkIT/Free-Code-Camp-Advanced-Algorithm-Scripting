// Inventory Update.js

function inventory(arr1, arr2) {
  // itterate curInv

  for (var i = 0; i < arr1.length; i++) {
    var foundMatch = false;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i][1] === arr2[j][1]) {
        arr2[i][0] += arr1[j][0]; //Increase number of stock
        foundMatch = true;
      }
    }
    // if item was not found in arr1
    if (foundMatch === false) {
      arr2.push(arr1[i]); // add item to arr2
    }
  }

  return arr2.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
  });
}
function inventory(arr1, arr2) {

  arr2.forEach(function(item1) {
    var foundMatch = false;
    arr1.forEach(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] += item2[0];
        foundMatch = true;
      }
    });
    if (!foundMatch) {
      arr1.push(item1);
    }
  });
  return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

function inventory(arr1, arr2) {

  // Variable for location of product
  var index;

  // A helper method to return the index of a specified product (undefined if not found)
  var getProductIndex = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][1] === name) {
        return i;
      }
    }
    return undefined;
  }

  // For each item of the new Inventory
  for (var i = 0; i < arr2.length; i++) {

    // Invoke our helper function using arr1 as this
    index = getProductIndex.call(arr1, arr2[i][1]);

    // If the item doesn't exist
    if (index === undefined) {
      // Push the entire item
      arr1.push(arr2[i]);
    } else {
      // Add the new quantity of the current item
      arr1[index][0] += arr2[i][0];
    }

  }

  // Sort alphabetically, by the product name of each item
  arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return arr1;
}

function inventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurInvName = []; // Names of arr1's items
  var arrNeInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.map(function(item1) {
    return arr2.map(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; //Increase number of stock
      }
    });
  });

  // Get item's name for new Inventory
  arr2.map(function(item) {
    arrNeInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.map(function(item) {
    arrCurInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNeInvName.map(function(item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function(currItem, nextItem) {

    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

inventory(curInv, newInv);

// [ [ 88, 'Bowling Ball' ],
//   [ 2, 'Dirty Sock' ],
//   [ 3, 'Hair Pin' ],
//   [ 3, 'Half-Eaten Apple' ],
//   [ 5, 'Microphone' ],
//   [ 7, 'Toothpaste' ] ]
