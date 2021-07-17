// Time Complexity O(n^2)
// Space Complexity O(1)

// for educational purposes

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];

    array[min] = temp;
  }
  return array;
}

let nums = [1, 9, 0, 8, 3, 2, 7, 4, 5];
selectionSort(nums);

console.log(nums);
