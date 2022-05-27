function colorOf(r, g, b) {
  let vals = [r, g, b];
  return "#" + vals.map((e) => (e < 16 ? "0" : "") + e.toString(16)).join("");
}
