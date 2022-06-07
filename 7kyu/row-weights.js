function rowWeights(array) {
  let sumOdd = 0,
    sumEven = 0;
  array.forEach((e, i) => (i % 2 ? (sumOdd += e) : (sumEven += e)));
  return [sumEven, sumOdd];
}
