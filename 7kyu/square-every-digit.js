function squareDigits(num) {
  return +String(num)
    .split("")
    .map((e) => e ** 2)
    .join("");
}
