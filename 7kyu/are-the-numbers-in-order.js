function inAscOrder(arr) {
  return arr.every((e, i, a) => (i < a.length - 1 ? e < a[i + 1] : true));
}
