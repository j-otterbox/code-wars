var hotpo = function (n) {
  let count = 0;
  while (n > 1) {
    n = n % 2 ? n * 3 + 1 : n / 2;
    count++;
  }
  return count;
};
