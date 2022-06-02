var number = function (busStops) {
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
};
