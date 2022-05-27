function bloodAlcoholContent(drinks, weight, sex, time) {
  const r = { male: 0.73, female: 0.66 };
  const alcConsumed = drinks.ounces * drinks.abv;
  return +(alcConsumed * (5.14 / weight) * r[sex] - 0.015 * time).toFixed(4);
}
