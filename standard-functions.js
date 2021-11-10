const shuffle = require("./src/shuffle");
const reverse = require("./src/reverse");
const findDuplicates = require("./src/findDuplicates");
const mostCommonWords = require("./src/mostCommonWords");
const sort = require("./src/sorting");
const fullSort = require("./src/fullSort");

let newArr = [];
for (let i = 0; i <= 100000; i++) {
  newArr.push(Math.floor(Math.random() * 100));
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }

// start timer
const start = Date.now();

console.log("starting timer...");

// functions

// return last array element
// newArr.slice(-1);

// reverse array
// newArr.reverse();

// shuffle array
// shuffleArray(newArr);

// sort array
// newArr.sort();

// My custom functions

// Shuffle
// shuffle(newArr);

// Shuffle
// reverse(newArr);

// findDuplicates
// findDuplicates(newArr);

// find two most common words
// mostCommonWords(newArr);

// sorts 0s and 1s
// sort(newArr);

// sort array
fullSort(newArr);

// time elapsed
const millis = Date.now() - start;

console.log(`milliseconds elapsed = ${Math.floor(millis)}`);
