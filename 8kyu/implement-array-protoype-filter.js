Array.prototype.filter = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) continue;
    else {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
