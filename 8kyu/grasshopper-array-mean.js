var findAverage = function (nums) {
  return nums.reduce((acc, c) => acc + c) / nums.length;
};
