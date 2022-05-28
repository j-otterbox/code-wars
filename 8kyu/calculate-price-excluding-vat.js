function excludingVatPrice(price) {
  return typeof price === "number" ? +((price * 100) / 115).toFixed(2) : -1;
}
