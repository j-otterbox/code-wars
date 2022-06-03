function reverseNumber(n) {
  return +("" + n).replace(/\d+/, (m) => m.split("").reverse().join(""));
}
