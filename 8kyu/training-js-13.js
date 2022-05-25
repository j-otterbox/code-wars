function whatNumberIsIt(n) {
  let str;

  switch (n || "NaN") {
    case Number.MAX_VALUE:
      str = "Number.MAX_VALUE";
      break;
    case Number.MIN_VALUE:
      str = "Number.MIN_VALUE";
      break;
    case "NaN":
      str = "Number.NaN";
      break;
    case Number.NEGATIVE_INFINITY:
      str = "Number.NEGATIVE_INFINITY";
      break;
    case Number.POSITIVE_INFINITY:
      str = "Number.POSITIVE_INFINITY";
      break;
    default:
      str = n.toString();
  }

  return "Input number is " + str;
}
