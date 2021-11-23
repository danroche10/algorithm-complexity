// function insertionSort(array) {
//   if (array.length <= 1) {
//     return array;
//   } else {
//     for (let i = 1; i < array.length; i++) {
//       let j = i - 1;
//       let temp = array[i];
//       while (j >= 0 && array[j] > temp) {
//         array[j + 1] = array[j];
//         j--;
//       }
//       array[j + 1] = temp;
//     }
//     return array;
//   }
// }

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

function mergeSort(arr) {
  const half = arr.length / 2;
  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }
  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  return _merge(mergeSort(left), mergeSort(right));
}

// quick sort

module.exports = { insertionSort, selectionSort, mergeSort };

// impementation methods
function _merge(left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}
