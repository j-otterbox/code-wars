function openOrSenior(arr) {
  return arr.map((e) => (e[0] >= 55 && e[1] > 7 ? "Senior" : "Open"));
}
