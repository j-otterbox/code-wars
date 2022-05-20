function spinningRings(innerMax, outerMax) {
  let inner = 0;
  let outer = 0;
  let turns = 0;

  do {
    inner--;
    outer++;
    turns++;
    if (inner < 0) inner = innerMax;
    if (outer > outerMax) outer = 0;
  } while (inner !== outer);
  return turns;
}
