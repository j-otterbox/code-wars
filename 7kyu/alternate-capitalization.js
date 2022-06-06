function capitalize(s) {
  const even = s
    .split("")
    .map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e))
    .join("");
  const odd = s
    .split("")
    .map((e, i) => (i % 2 === 1 ? e.toUpperCase() : e))
    .join("");
  return [even, odd];
}
