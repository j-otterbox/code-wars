function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const exchange = numbers.slice(3, 6).join("");
  const lineNum = numbers.slice(-4).join("");

  return `(${areaCode}) ${exchange}-${lineNum}`;
}
