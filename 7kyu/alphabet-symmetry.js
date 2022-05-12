function solve(arr) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  return arr.map((str) => {
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i] === alpha[i]) count++;
    }

    return count;
  });
}
