function sumOfMinimums(arr) {
  return arr.map((e) => Math.min(...e)).reduce((p, c) => p + c);
}
