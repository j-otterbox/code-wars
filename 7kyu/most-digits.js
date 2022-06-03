function findLongest(array) {
  return +array.reduce(
    (acc, c) => (acc.length < String(c).length ? String(c) : acc),
    ""
  );
}
