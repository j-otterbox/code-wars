function numberToPower(number, power) {
  return Array(power)
    .fill(number)
    .reduce((a, c) => a * c, 1);
}
