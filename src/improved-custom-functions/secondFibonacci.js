function secondFibonacci(number) {
  if (number === 0) {
    return [];
  }
  if (number === 1) {
    return [0];
  }
  const fibNumbers = [0, 1];
  for (let i = 2; i < number; i++) {
    fibNumbers[i] = fibNumbers[i - 2] + fibNumbers[i - 1];
  }
  return fibNumbers;
}

module.exports = secondFibonacci;
