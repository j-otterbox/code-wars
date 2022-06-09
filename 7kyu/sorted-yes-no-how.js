function isSortedAndHow(array) {
  const sortedAsc = array
    .slice()
    .sort((a, b) => a - b)
    .join("");
  const sortedDsc = array
    .slice()
    .sort((a, b) => b - a)
    .join("");
  const arrayStr = array.join("");

  if (arrayStr === sortedAsc) return "yes, ascending";
  else if (arrayStr === sortedDsc) return "yes, descending";
  else return "no";
}
