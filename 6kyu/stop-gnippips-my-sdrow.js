function spinWords(string) {
  return string
    .split(" ")
    .map((w) => (w.length > 4 ? w.split("").reverse().join("") : w))
    .join(" ");
}
