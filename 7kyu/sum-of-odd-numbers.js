function rowSumOddNumbers(n) {
  let row = 1;
  for (let i = 0; i < n; i++) {
    // get first num of row
    row += 2 * i;
  }

  let sum = row;
  for (let i = 1; i < n; i++) {
    // calc sum of odd nums
    sum += row + 2 * i;
  }

  return sum;
}
