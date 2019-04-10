const _ = require('lodash');
const add = _.curry(_.add);

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

const res = Maybe.of({ name: 'browser' })
  .map(_.property('person'))
  .map(add(10));

console.log(res);

const res1 = Maybe.of({ name: 'NodeJS', person: 21 })
  .map(_.property('person'))
  .map(add(10));

console.log(res1);
