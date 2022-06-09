function countDevelopers(list) {
  return list.reduce(
    (acc, c) =>
      (acc += c.continent === "Europe" && c.language === "JavaScript" ? 1 : 0),
    0
  );
}
