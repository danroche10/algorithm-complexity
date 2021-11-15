function secondFindDuplicates(array) {
  const repeatingElements = [];
  for (let i = 0; i < array.length; i++) {
    let absValue = Math.abs(array[i]);
    array[absValue] >= 0
      ? (array[absValue] = -array[absValue])
      : repeatingElements.push(absValue);
  }
  return repeatingElements.filter((v, i, a) => a.indexOf(v) === i);
}

module.exports = secondFindDuplicates;
