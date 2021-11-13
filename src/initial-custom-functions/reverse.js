function reverse(array) {
  if (array.length <= 1) {
    return array;
  }
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

module.exports = reverse;
