function checkParity(parity, bin) {
  const numOnes = bin.replace(/0/g, "").length;

  if (parity === "even") return numOnes % 2 !== 0 ? 1 : 0;
  else return numOnes % 2 === 0 ? 1 : 0;
}
