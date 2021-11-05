const shuffle = require("./src/shuffle");

let newArr = [];
for (let i = 0; i <= 100000; i++) {
  newArr.push(Math.floor(Math.random() * 100));
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

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
shuffle(newArr);

// time elapsed
const millis = Date.now() - start;

console.log(`milliseconds elapsed = ${Math.floor(millis)}`);

slice = [7, 8, 7, 8, 9, "....", 8, 9];

reverse = [8, 8, 9, 8, 8, 8, 7, 8, 9, 8, 8, 9, 8, "...", 8];

shuffleArray = [
  14, 16, 18, 16, 24, 23, 27, 25, 32, 40, 40, 45, 50, 53, 55, 54, 57, 59, 62,
  67, 66, 67,
];

sort = [
  26, 46, 43, 81, 100, 117, 136, 167, 153, 172, 187, 201, 210, 223, 243, 261,
  278, 300, 329, 347, 358,
];
