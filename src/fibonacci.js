function fibonacci(number) {
  if (number === 0) {
    return [];
  }
  if (number === 1) {
    return [0];
  }
  let fibArray = [0, 1];
  for (let i = 0; i < number - 2; i++) {
    fibArray.push(fibArray[i] + fibArray[i + 1]);
  }
  return fibArray;
}

module.exports = fibonacci;
