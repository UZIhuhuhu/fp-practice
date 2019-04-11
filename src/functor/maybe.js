const Maybe = function(x) {
  this.value = x;
};

Maybe.of = function(x) {
  return new Maybe(x);
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.value));
};

Maybe.prototype.isNothing = function() {
  return this.value === null || this.value === undefined;
};

module.exports = {
  Maybe
};
