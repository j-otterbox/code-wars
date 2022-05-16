function drawStairs(n) {
  let stairs = "";

  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      stairs += i < n ? "I\n" + " ".repeat(i) : "I";
    }
    return stairs;
  } else return "I";
}
