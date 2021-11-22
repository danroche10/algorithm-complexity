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

function thirdFindDuplicates(array) {
  const repeatingElements = [];
  const seenElements = {};
  array.forEach((element) => {
    seenElements[element]
      ? repeatingElements.push(element)
      : (seenElements[element] = true);
  });
  return repeatingElements.filter((v, i, a) => a.indexOf(v) === i);
}

module.exports = { secondFindDuplicates, thirdFindDuplicates };
