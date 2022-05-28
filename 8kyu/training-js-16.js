function cutIt(arr) {
  const minLen = arr.slice().sort((a, b) => a.length - b.length)[0].length;
  return arr.map((e) => e.slice(0, minLen));
}
