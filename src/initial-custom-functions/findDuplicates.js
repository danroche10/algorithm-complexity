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
  for (let i = array.length - 1; i >= 0; i--) {
    if (array.slice(0, i).includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

module.exports = findDuplicates;
