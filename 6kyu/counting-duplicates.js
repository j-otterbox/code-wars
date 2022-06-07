function duplicateCount(text) {
  const count = {};
  let numDupl = 0;

  for (let char of text) {
    char = char.toLowerCase();
    if (count[char]) count[char]++;
    else count[char] = 1;
  }

  for (const val of Object.values(count)) {
    if (val > 1) numDupl++;
  }

  return numDupl;
}
