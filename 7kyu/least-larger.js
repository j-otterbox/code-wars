function leastLarger(a, i) {
  let thresh = a[i];
  let minLg = Infinity;
  let minIndex = -1;

  for (const [index, num] of a.entries()) {
    if (num > thresh && num < minLg) {
      minLg = num;
      minIndex = index;
    }
  }
  return minIndex;
}
