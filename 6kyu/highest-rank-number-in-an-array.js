function highestRank(arr) {
  const freq = {};

  arr.forEach((e) => (freq[e] ? freq[e]++ : (freq[e] = 1)));

  let maxCount = 0;
  let output;

  for (const [num, count] of Object.entries(freq)) {
    if (maxCount < count) {
      maxCount = count;
      output = +num;
    } else if (maxCount == count) {
      output = Math.max(maxCount, num);
    }
  }

  return output;
}
