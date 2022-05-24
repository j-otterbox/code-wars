Math.roundTo = function (number, precision) {
  const pow10 = Math.pow(10, precision);
  return Math.round(number * pow10) / pow10;
};
