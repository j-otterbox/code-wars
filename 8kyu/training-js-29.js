function bigToSmall(arr) {
  return arr
    .reduce((acc, c) => acc.concat(c))
    .sort((a, b) => b - a)
    .join(">");
}
