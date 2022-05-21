decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split("   ")
    .map((e) => {
      return e
        .split(" ")
        .map((f) => MORSE_CODE[f])
        .join("");
    })
    .join(" ");
};
