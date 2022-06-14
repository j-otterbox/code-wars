function incrementString(str) {
  const addOne = (numStr) => {
    let numPlusOne = (parseInt(numStr) + 1).toString();
    return /^0/.test(numStr)
      ? numPlusOne.padStart(numStr.length, "0")
      : numPlusOne;
  };

  return /\d$/.test(str) ? str.replace(/\d+$/, (m) => addOne(m)) : (str += "1");
}
