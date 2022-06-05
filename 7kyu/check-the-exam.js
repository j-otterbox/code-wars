function checkExam(a1, a2) {
  const result = a2.reduce(
    (acc, c, i) => acc + (c ? (a1[i] === a2[i] ? 4 : -1) : 0),
    0
  );
  return result > 0 ? result : 0;
}
