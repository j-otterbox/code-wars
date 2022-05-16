function duplicates(array) {
  const seen = {};
  let numPairs = 0;

  for (const elem of array) {
    seen[elem] ? seen[elem]++ : (seen[elem] = 1);
  }

  for (const value of Object.values(seen)) {
    if (value > 1) numPairs += Math.floor(value / 2);
  }

  return numPairs;
}
