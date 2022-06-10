function duplicateEncode(word) {
  word = word.toLowerCase();
  let output = "";

  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) output += ")";
    else output += "(";
  }

  return output;
}
