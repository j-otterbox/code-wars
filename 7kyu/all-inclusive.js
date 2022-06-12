function containAllRots(str, arr) {
  const rots = [];

  for (let i = 0; i < str.length; i++) {
    rots.push(str.substring(i) + str.slice(0, i));
  }

  return rots.every((e) => arr.includes(e));
}
