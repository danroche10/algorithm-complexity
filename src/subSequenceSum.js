function subSequenceSum(array, target) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let k = i;
    sum = 0;
    while (k < array.length && sum <= target) {
      sum += array[k];
      k++;
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}

module.exports = subSequenceSum;
