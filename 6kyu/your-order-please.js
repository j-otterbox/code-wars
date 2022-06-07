function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      const indexA = a.match(/\d/)[0];
      const indexB = b.match(/\d/)[0];
      return indexA - indexB;
    })
    .join(" ");
}
