function slope([x1, y1, x2, y2]) {
  const slope = (y2 - y1) / (x2 - x1);
  return isFinite(slope) ? slope.toString() : "undefined";
}
