function validParentheses(parens) {
  const stack = [];
  const map = { ")": "(" };

  for (const char of parens) {
    if (!map[char]) {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false;
    }
  }

  return stack.length === 0;
}
