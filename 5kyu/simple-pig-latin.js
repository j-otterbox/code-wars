function pigIt(str) {
  return str
    .split(" ")
    .map((w) => (/\w/g.test(w) ? w.slice(1) + w[0] + "ay" : w))
    .join(" ");
}
