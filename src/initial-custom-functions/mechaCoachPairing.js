function mechaCoachPairing(names) {
  if (names.length <= 1) {
    return names;
  }
  const pairs = [];
  for (i = names.length - 1; i >= 1; i--) {
    for (j = names.length - 2; j >= 0; j--) {
      pairs.push([names[i], names[j]]);
    }
    names.pop();
  }
  return pairs;
}

module.exports = mechaCoachPairing;
