// Time Complexity O(n^2)
// Space Complexity O(1)

// good for small data sets or data sets that are nearly sorted

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // move where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
let nums = [1, 9, 0, 8, 3, 2, 7, 4, 5];
insertionSort(nums);

console.log(nums);
