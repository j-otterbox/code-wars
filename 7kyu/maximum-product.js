function adjacentElementsProduct(array) {
  return Math.max(...array.map((e, i, a) => e * (i > 0 ? a[i - 1] : a[i + 1])));
}
