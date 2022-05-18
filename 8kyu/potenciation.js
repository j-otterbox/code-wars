function power(x, y) {
  if (x === 1 || y === 0) return 1;
  else {
    let output = x;
    while (y > 1) {
      output *= x;
      y--;
    }
    return output;
  }
}
