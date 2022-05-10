function bitMarch(n) {
  const bits = [...("0".repeat(8 - n) + "1".repeat(n))].map((e) => +e);
  const march = [];

  for (let i = 0; i < 9 - n; i++) {
    march.push(bits.slice());
    bits.shift();
    bits.push(0);
  }

  return march;
}
