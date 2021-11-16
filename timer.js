const shuffle = require("./src/initial-custom-functions/shuffle");
const reverse = require("./src/initial-custom-functions/reverse");
const findDuplicates = require("./src/initial-custom-functions/findDuplicates");
const secondFindDuplicates = require("./src/improved-custom-functions/secondFindDuplicates");
const mostCommonWords = require("./src/initial-custom-functions/mostCommonWords");
const sort = require("./src/initial-custom-functions/sorting");
const fullSort = require("./src/initial-custom-functions/fullSort");
const fibonacci = require("./src/initial-custom-functions/fibonacci");
const secondFibonacci = require("./src/improved-custom-functions/secondFibonacci");
const mechaCoachPairing = require("./src/initial-custom-functions/mechaCoachPairing");
const subSequenceSum = require("./src/initial-custom-functions/subSequenceSum");

let newArr = [];
for (let i = 0; i <= 2000000; i++) {
  newArr.push(Math.floor(Math.random() * 100));
}

// start timer
const start = Date.now();

console.log("starting timer...");

// Standard functions

// return last array element
// newArr.slice(-1);

// reverse array
// newArr.reverse();

// shuffle array
/* Randomize array in-place using Durstenfeld shuffle algorithm since there is no Javascript standard method*/
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }
// shuffleArray(newArr);

// sort array
// newArr.sort();

// My custom functions

// Shuffle
// shuffle(newArr);

// Shuffle
// reverse(newArr);

// findDuplicates
//findDuplicates(newArr);
secondFindDuplicates(newArr);

// find two most common words
// mostCommonWords(newArr);

// sorts 0s and 1s
// sort(newArr);

// sort array
// fullSort(newArr);

// fibonacci sequence
// fibonacci(newArr.length);
// secondFibonacci(newArr.length);

// mechaCoachPairing
// mechaCoachPairing(newArr);

// subSequenceSum
// subSequenceSum(newArr, 1000000000);

// time elapsed
const millis = Date.now() - start;

console.log(`milliseconds elapsed = ${Math.floor(millis)}`);
