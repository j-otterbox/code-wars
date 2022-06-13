var findDigit = function (num, nth) {
  const numStr = Math.abs(num).toString();
  return nth > 0 ? +numStr[numStr.length - nth] || 0 : -1;
};
