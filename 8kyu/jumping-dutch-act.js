function sc(floor) {
  const buildStr = (floor) => {
    let str = "Aa~ ".repeat(floor - 1) + "Pa!";
    if (floor <= 6) str += " Aa!";
    return str;
  };

  return floor > 1 ? buildStr(floor) : "";
}
