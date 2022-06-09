function alphabetWar(fight) {
  const leftMap = { w: 4, p: 3, b: 2, s: 1 };
  const rightMap = { m: 4, q: 3, d: 2, z: 1 };

  const leftPoints = fight
    .split("")
    .reduce((acc, c) => acc + (leftMap[c] || 0), 0);
  const rightPoints = fight
    .split("")
    .reduce((acc, c) => acc + (rightMap[c] || 0), 0);

  if (leftPoints > rightPoints) return "Left side wins!";
  else if (rightPoints > leftPoints) return "Right side wins!";
  else return "Let's fight again!";
}
