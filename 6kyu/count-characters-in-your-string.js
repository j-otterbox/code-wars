function count(string) {
  const freq = {};

  for (const char of string) {
    if (freq[char]) freq[char]++;
    else freq[char] = 1;
  }

  return freq;
}
