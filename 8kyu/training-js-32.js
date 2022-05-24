function roundIt(n) {
  const [int, dec] = n.toString().split(".");

  if (int.length === dec.length) return Math.round(n);
  else return int.length > dec.length ? Math.floor(n) : Math.ceil(n);
}
