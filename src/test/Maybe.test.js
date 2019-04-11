const _ = require('lodash');
const add = _.curry(_.add);
const { Maybe } = require('../functor/Maybe');

const res = Maybe.of({ name: 'browser' })
  .map(_.property('person'))
  .map(add(10));

console.log(res);

const res1 = Maybe.of({ name: 'NodeJS', person: 21 })
  .map(_.property('person'))
  .map(add(10));

console.log(res1);

/**
 * We can use folktale
 */

const maybe = require('folktale/maybe');
const find = (list, predicate) => {
  for (let i = 0; i < list.length; ++i) {
    const item = list[i];
    if (predicate(item)) {
      return maybe.Just(item);
    }
  }
  return maybe.Nothing();
};
console.log(find([1, 2, 3], x => x > 2));
console.log(find([1, 2, 3], x => x > 3));
