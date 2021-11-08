// return two most common words
function mostCommonWords(array) {
  if (array.length <= 2) return array;
  else {
    return array.filter((element, index, array) => {
      return array.indexOf(element) === index;
    });
  }
}

module.exports = mostCommonWords;
