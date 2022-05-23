function padIt(str, n) {
  while (n) {
    n % 2 ? (str = "*" + str) : (str += "*");
    n--;
  }
  return str;
}
