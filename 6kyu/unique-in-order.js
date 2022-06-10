var uniqueInOrder = function (iterable) {
  if (typeof iterable == "string") iterable = iterable.split("");
  let output = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i + 1] !== iterable[i]) output.push(iterable[i]);
  }

  return output;
};
