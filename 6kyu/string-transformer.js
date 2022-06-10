function stringTransformer(str) {
  return str
    .split(" ")
    .map((e) =>
      e
        .split("")
        .map((e) => toggleCase(e))
        .join("")
    )
    .reverse()
    .join(" ");
}

function toggleCase(c) {
  return c.charCodeAt(c) <= 90 ? c.toLowerCase() : c.toUpperCase();
}
