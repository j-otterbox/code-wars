function wordsToMarks(string) {
  const dict = "abcdefghijklmnopqrstuvwxyz";
  return string.split("").reduce((acc, c) => acc + (dict.indexOf(c) + 1), 0);
}
