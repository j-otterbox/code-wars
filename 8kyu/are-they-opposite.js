function isOpposite(s1, s2) {
  const compStrs = (s1, s2) => {
    const toUp = (s) => s.toUpperCase();
    const toLo = (s) => s.toLowerCase();
    const s1Opposite = s1.replace(/./g, (x) =>
      x.charCodeAt(0) >= 97 ? toUp(x) : toLo(x)
    );
    return s1Opposite === s2;
  };

  return s1 && s2 ? compStrs(s1, s2) : false;
}
