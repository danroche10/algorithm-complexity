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

// merge sort
// quick sort

module.exports = { insertionSort, selectionSort };
