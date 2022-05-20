const incrementer = (n) =>
  n.map((e, i) => (e + i + 1 > 9 ? +`${e + i + 1}`.slice(-1) : e + i + 1));
