function persistence(num) {
  let count = 0;
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((acc, c) => acc * c, 1);
    count++;
  }
  return count;
}
