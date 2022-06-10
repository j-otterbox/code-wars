function encode(string) {
  return string.replace(
    /[aeiou]/g,
    (m) => ({ a: 1, e: 2, i: 3, o: 4, u: 5 }[m])
  );
}

function decode(string) {
  return string.replace(
    /\d/g,
    (m) => ({ 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" }[m])
  );
}
