const solution = (
  molarMass1,
  molarMass2,
  givenMass1,
  givenMass2,
  volume,
  temp
) => {
  const kelvin = temp + 273.15;
  const r = 0.082;

  return (
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * r * kelvin) / volume
  );
};
