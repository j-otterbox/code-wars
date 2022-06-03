const sequenceSum = (b, e, s) => {
  let sum = 0;

  if (e > b) {
    for (let i = b; i <= e; i = i + s) sum += i;
  }

  return sum;
};
