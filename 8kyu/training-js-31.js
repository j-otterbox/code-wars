function blackAndWhite(arr) {
  if (Array.isArray(arr)) {
    const has5and13 = arr.includes(5) && arr.includes(13);
    return `It's a ${has5and13 ? "black" : "white"} array`;
  }
  return "It's a fake array";
}
