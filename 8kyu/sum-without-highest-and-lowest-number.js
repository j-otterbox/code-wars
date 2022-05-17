function sumArray(array) {
  if (array && array.length > 1) {
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((acc, c) => acc + c, 0);
  } else return 0;
}
