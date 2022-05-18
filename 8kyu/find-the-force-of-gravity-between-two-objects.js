solution = (arr_val, arr_unit) => {
  const G = 6.67e-11;
  const massConverter = (mass, unit) => {
    switch (unit) {
      case "μg":
        return mass / 1000000000;
      case "mg":
        return mass / 1000000;
      case "g":
        return mass / 1000;
      case "kg":
        return mass;
      case "lb":
        return mass * 0.453592;
    }
  };
  const distConverter = (dist, unit) => {
    switch (unit) {
      case "μm":
        return dist / 1000000;
      case "mm":
        return dist / 1000;
      case "cm":
        return dist / 100;
      case "m":
        return dist;
      case "ft":
        return dist * 0.3048;
    }
  };

  const mass1 = massConverter(arr_val[0], arr_unit[0]);
  const mass2 = massConverter(arr_val[1], arr_unit[1]);
  const dist = distConverter(arr_val[2], arr_unit[2]);

  return (G * mass1 * mass2) / Math.pow(dist, 2);
};
