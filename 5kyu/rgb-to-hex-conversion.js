function rgb(r, g, b) {
  return [r, g, b]
    .map((v) =>
      v < 255 ? (v >= 0 ? (v < 16 ? "0" : "") + v.toString(16) : "00") : "FF"
    )
    .join("")
    .toUpperCase();
}
