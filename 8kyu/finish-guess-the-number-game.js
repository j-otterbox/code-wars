class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives) {
      if (n === this.number) return true;
      else this.lives--;
      return false;
    } else throw "error already dead";
  }
}
