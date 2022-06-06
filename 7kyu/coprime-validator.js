function isCoprime(x, y) {
  for (let i = 1; i <= Math.min(x, y); i++) {
    if (x % i === 0 && y % i === 0 && i > 1) return false;
  }
  return true;
}
