function firstToLast(str, c) {
  let count = 0;
  let lastIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === c) {
      count++;
      lastIndex = i;
    }
  }
  return count > 1 ? lastIndex - str.indexOf(c) : count ? 0 : -1;
}
