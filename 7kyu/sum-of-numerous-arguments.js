function findSum(...arr) {
  return arr.length > 0
    ? arr.every((e) => e >= 0)
      ? arr.reduce((a, c) => a + c, 0)
      : -1
    : 0;
}
