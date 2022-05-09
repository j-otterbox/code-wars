function high(x) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");
  let max = 0;
  let highScoreWord;

  for (const word of words) {
    let score = 0;

    for (const letter of word) {
      score += alpha.indexOf(letter) + 1;
    }

    if (max < score) {
      max = score;
      highScoreWord = word;
    }
  }

  return highScoreWord;
}
