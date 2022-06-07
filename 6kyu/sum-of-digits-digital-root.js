function digital_root(n) {
  let numStr = String(n);

  while (numStr.length > 1) {
    numStr = String(numStr.split("").reduce((acc, c) => acc + +c, 0));
  }

  return +numStr;
}
