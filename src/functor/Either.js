const Left = function(x) {
  this.value = x;
};

Left.of = function(x) {
  return new Left(x);
};

Left.prototype.map = function(f) {
  return this;
};

const Right = function(x) {
  this.value = x;
};

Right.of = function(x) {
  return new Right(x);
};

Right.prototype.map = function(f) {
  return Right.of(f(this.value));
};

module.exports = {
  Left,
  Right
};
