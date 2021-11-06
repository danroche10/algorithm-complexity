const shuffle = require("./src/shuffle");
const reverse = require("./src/reverse");
const findDuplicates = require("./src/findDuplicates");

let newArr = [];
for (let i = 0; i <= 100; i++) {
  newArr.push(Math.floor(Math.random() * 100));
}
console.log(newArr);

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
findDuplicates(newArr);

// time elapsed
const millis = Date.now() - start;

console.log(`milliseconds elapsed = ${Math.floor(millis)}`);
