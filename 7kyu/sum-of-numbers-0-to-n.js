var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count > 0) {
      const nums = [];
      for (let i = 0; i <= count; i++) {
        nums.push(i);
      }
      return nums.join("+") + " = " + nums.reduce((acc, c) => acc + c);
    } else if (count < 0) {
      return `${count}<0`;
    } else return "0=0";
  };

  return SequenceSum;
})();
