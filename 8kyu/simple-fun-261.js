function whoseMove(lastPlayer, win) {
  return win ? lastPlayer : { white: "black", black: "white" }[lastPlayer];
}
