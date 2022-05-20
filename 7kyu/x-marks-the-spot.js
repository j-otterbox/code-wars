const xMarksTheSpot = (input) => {
  if (input.length === 0) return [];

  let coords;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === "x") {
        !coords ? (coords = [row, col]) : (coords = []);
      }
    }
  }
  return coords || [];
};
