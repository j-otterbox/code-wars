function bump(x) {
  return x.replace(/[^n]/g, "").length <= 15 ? "Woohoo!" : "Car Dead";
}
