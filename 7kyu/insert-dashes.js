function insertDash(num) {
  const arr = `${num}`.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      if (arr[i + 1] % 2 === 1) {
        arr.splice(i + 1, 0, "-");
        i++;
      }
    }
  }

  return arr.join("");
}
