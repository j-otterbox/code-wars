function fiveLine(s) {
  s = s.trim();
  return [1, 2, 3, 4, 5].map((e) => s.repeat(e)).join("\n");
}
