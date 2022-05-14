function datingRange(age) {
  const min = (age) => Math.floor(age >= 14 ? age / 2 + 7 : age - 0.1 * age);
  const max = (age) => Math.floor(age >= 14 ? (age - 7) * 2 : age + 0.1 * age);

  return `${min(age)}-${max(age)}`;
}
