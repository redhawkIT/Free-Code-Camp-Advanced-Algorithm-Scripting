// Pairwise.js

// Remember that arrays start at index 0 and go from there so from [1,4,2,3,0,5]
// if we switch to their indices it would be [0,1,2,3,4,5] then we add indices
// 1 + 2 + 3 + 5 and we get 11. That is what we need to return.

function pairwise(arr, arg) {
  //Set sum of indices to zero
  var sum = 0;
  //looping from first element
  for (i = 0; i < arr.length; i++) {
    //Looping from second element by setting first element  constant
    for (j = i + 1; j < arr.length; j++) {
      //Check whether the sum is equal to arg
      if (arr[i] + arr[j] == arg) {
        //Add the indices
        sum += i + j;
        //Set the indices to NaN so that they can't be used in next iteration
        arr[i] = arr[j] = NaN;
      }
    }
  }
  return sum;
}
pairwise([1, 4, 2, 3, 0, 5], 7); // 11
