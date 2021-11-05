const array = [1, 3, 5, 10, 11, 23];

function shuffle(array) {
  const shuffledArray = [];
  for (let i = array.length; i > 0; i--) {
    const random = Math.floor(Math.random() * i);
    const test = array.splice(random, 1);
    shuffledArray.push(test);
  }
  console.log(shuffledArray.flat());
}

module.exports = shuffle;
