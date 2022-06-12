const orderedCount = (text) => {
  const freq = new Map();
  const output = [];

  for (const char of text) {
    if (freq.has(char)) freq.set(char, freq.get(char) + 1);
    else freq.set(char, 1);
  }

  for (const [key, val] of freq) {
    output.push([key, val]);
  }

  return output;
};
