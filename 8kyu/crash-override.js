function aliasGen(first, last) {
  const fChar = first.charAt(0);
  const lChar = last.charAt(0);

  if (/[a-z]/i.test(fChar) && /[a-z]/i.test(lChar)) {
    return `${firstName[fChar.toUpperCase()]} ${surname[lChar.toUpperCase()]}`;
  }
  return "Your name must start with a letter from A - Z.";
}
