function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi, "")
    .split("")
    .map((e) => e.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}
