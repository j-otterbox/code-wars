function findOutlier(integers){
  let evens = integers.slice(0,3).filter(e => !(e % 2));
  return integers.filter(e => Math.abs(e % 2) == evens.length > 1 ? 1 : 0)[0]
}