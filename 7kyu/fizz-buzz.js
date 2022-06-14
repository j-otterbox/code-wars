function fizzbuzz(n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    const isMultOf3 = i % 3 === 0;
    const isMultOf5 = i % 5 === 0;

    if (isMultOf3 && isMultOf5) output.push("FizzBuzz");
    else if (isMultOf3) output.push("Fizz");
    else if (isMultOf5) output.push("Buzz");
    else output.push(i);
  }
  return output;
}
