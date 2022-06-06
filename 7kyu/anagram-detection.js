// write the function isAnagram
var isAnagram = function (test, original) {
  const a = test.toLowerCase().split("").sort().join("");
  const b = original.toLowerCase().split("").sort().join("");
  return a === b;
};
