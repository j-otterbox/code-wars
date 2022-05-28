function Cube(n = 0) {
  var side = Math.abs(n);

  this.getSide = function () {
    return side;
  };
  this.setSide = function (n = 0) {
    side = Math.abs(n);
  };
}
