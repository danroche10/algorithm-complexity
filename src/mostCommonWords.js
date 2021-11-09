// return two most common words
function mostCommonWords(array) {
  if (array.length <= 2) return array;
  else {
    let counts = {};
    for (const word of array) {
      counts[word] = counts[word] ? counts[word] + 1 : 1;
    }
    sortedCounts = [];
    for (word in counts) {
      sortedCounts.push([word, counts[word]]);
    }
    sortedCounts.sort(function (a, b) {
      if (b[1] > a[1]) {
        return 1;
      }
      if (b[1] < a[1]) {
        return -1;
      }
    });
    return [sortedCounts[0][0], sortedCounts[1][0]];
  }
}

module.exports = mostCommonWords;
