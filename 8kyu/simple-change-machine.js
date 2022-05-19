function changeMe(moneyIn) {
  switch (moneyIn) {
    case "10p":
      return "10p";
    case "20p":
      return "10p 10p";
    case "50p":
      return "20p 20p 10p";
    case "£1":
      return "20p ".repeat(5).slice(0, -1);
    case "£2":
      return "20p ".repeat(10).slice(0, -1);
    case "£5":
      return "20p ".repeat(25).slice(0, -1);
    default:
      return moneyIn;
  }
}
