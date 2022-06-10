function sumEvenNumbers(input) {
  return input.reduce((acc, c) => acc + (c % 2 === 0 ? c : 0), 0);
}
