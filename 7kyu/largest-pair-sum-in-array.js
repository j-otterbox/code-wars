function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((p, v) => p + v);
}
