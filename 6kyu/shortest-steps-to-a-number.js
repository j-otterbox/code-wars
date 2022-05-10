function shortestStepsToNum(num) {
  let steps = 0;
  let i = num; // do not modify arg

  while (i > 1) {
    i % 2 === 0 ? (i /= 2) : i--;
    steps++;
  }

  return steps;
}
