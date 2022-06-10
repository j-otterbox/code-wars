function averageString(str) {
  const numMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let sum = str
    .split(" ")
    .map((e) => numMap[e])
    .reduce((acc, c) => acc + c, 0);
  let avg = Math.floor(sum / str.split(" ").length);

  for (const [key, val] of Object.entries(numMap)) {
    if (val === avg) return key;
  }
  return "n/a";
}
