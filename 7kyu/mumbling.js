function accum(s) {
  return s
    .split("")
    .map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i - 1 >= 0 ? i : 0))
    .join("-");
}
