function arr2bin(arr) {
  const sum = arr.reduce((acc, c) => acc + (typeof c == "number" ? c : 0), 0);
  return sum.toString(2);
}
