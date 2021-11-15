function findDuplicates(array) {
  if (array.length <= 1) {
    return [];
  }
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
      array.splice(i, 1);
    }
  }
  return array.filter((v, i, a) => a.indexOf(v) === i);
}

module.exports = findDuplicates;
