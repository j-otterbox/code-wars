function vertMirror(strng) {
  return strng
    .split("\n")
    .map((e) => e.split("").reverse().join(""))
    .join("\n");
}
function horMirror(strng) {
  return strng
    .split("\n")
    .map((e, i, a) => a[a.length - (1 + i)])
    .join("\n");
}
function oper(fct, s) {
  return fct(s);
}
