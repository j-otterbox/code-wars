const maxMultiple = (d, b) => {
  for (let i = b; i > 0; i--) {
    if (i % d === 0) {
      return i;
    }
  }
};
