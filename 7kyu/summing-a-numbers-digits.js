function sumDigits(number) {
  return ("" + Math.abs(number)).split("").reduce((acc, c) => acc + +c, 0);
}
