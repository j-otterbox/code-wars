function howManySmaller(arr, n) {
  return arr.filter((e) => e.toFixed(2) < n).length;
}
