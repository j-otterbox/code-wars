function partlist(arr) {
  const output = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const arr1 = [];
    const arr2 = [];

    for (let j = 0; j < arr.length; j++) {
      if (j <= i) arr1.push(arr[j]);
      else arr2.push(arr[j]);
    }

    output.push([arr1.join(" "), arr2.join(" ")]);
  }

  return output;
}
