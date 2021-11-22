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

// calling itself recursively
function thirdFibonacci(number) {
  {
    if (number === 0) {
      return [0];
    } else if (number === 1) {
      return [0, 1];
    } else {
      const s = thirdFibonacci(number - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
}

module.exports = { secondFibonacci, thirdFibonacci };
