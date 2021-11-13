function sort(array) {
  if (array.length <= 1) return array;
  else {
    const sortedArray = [];
    array.forEach((number) => {
      number === 1
        ? sortedArray.push(number)
        : sortedArray.splice(0, 0, number);
    });
    return sortedArray;
  }
}

module.exports = sort;
