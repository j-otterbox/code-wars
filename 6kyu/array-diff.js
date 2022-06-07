function arrayDiff(a, b) {
  while (b.length) {
    const comp = b.pop();
    a = a.filter((e) => e !== comp);
  }
  return a;
}
