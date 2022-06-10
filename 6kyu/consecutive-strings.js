function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return "";
  strarr = strarr.map((e, i, a) =>
    i <= a.length - k ? a.slice(i, i + k).join("") : e
  );

  let max = 0;
  let index;

  strarr.forEach((e, i) => {
    if (e.length > max) {
      max = e.length;
      index = i;
    }
  });

  return strarr[index];
}
