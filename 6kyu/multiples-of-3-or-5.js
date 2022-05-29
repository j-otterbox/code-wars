function solution(number) {
  const nums = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
  }
  return nums.reduce((acc, c) => acc + c, 0);
}
