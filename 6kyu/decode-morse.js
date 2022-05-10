function decode(str) {
  const dict = new Map();

  dict.set(".-", "a");
  dict.set("-...", "b");
  dict.set("-.-.", "c");
  dict.set("-..", "d");
  dict.set(".", "e");
  dict.set("..-.", "f");
  dict.set("--.", "g");
  dict.set("....", "h");
  dict.set("..", "i");
  dict.set(".---", "j");
  dict.set("-.-", "k");
  dict.set(".-..", "l");
  dict.set("--", "m");
  dict.set("-.", "n");
  dict.set("---", "o");
  dict.set(".--.", "p");
  dict.set("--.-", "q");
  dict.set(".-.", "r");
  dict.set("...", "s");
  dict.set("-", "t");
  dict.set("..-", "u");
  dict.set("...-", "v");
  dict.set(".--", "w");
  dict.set("-..-", "x");
  dict.set("-.--", "y");
  dict.set("--..", "z");
  dict.set(".----", "1");
  dict.set("..---", "2");
  dict.set("...--", "3");
  dict.set("....-", "4");
  dict.set(".....", "5");
  dict.set("-....", "6");
  dict.set("--...", "7");
  dict.set("---..", "8");
  dict.set("----.", "9");
  dict.set("-----", "0");
  dict.set("", "");

  return str
    .split("  ")
    .map((x) =>
      x
        .split(" ")
        .map((y) => dict.get(y))
        .join("")
    )
    .join(" ");
}
