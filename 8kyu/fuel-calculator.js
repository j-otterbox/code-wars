function fuelPrice(litres, pricePerLitre) {
  let dRate;
  let totalD;

  switch (true) {
    case litres >= 10:
      dRate = 0.25;
      break;
    case litres >= 8:
      dRate = 0.2;
      break;
    case litres >= 6:
      dRate = 0.15;
      break;
    case litres >= 4:
      dRate = 0.1;
      break;
    case litres >= 2:
      dRate = 0.05;
      break;
    default:
      dRate = 0;
  }

  return +(litres * (pricePerLitre - dRate)).toFixed(2);
}
