const { compose } = require('../tools/compose');
const _ = require('lodash');


/**
 *
 * Example 1
 */
const toUpperCase = x => x.toUpperCase();
const exclaim = x => x + '!';

const shout = compose(
  toUpperCase,
  exclaim
);
console.log(shout('hello, green pomelo'));



/**
 * Example 2
 */
const arr = ['chrome', 'safari', 'NodeJS'];
const head = x => x[0];
const reverse = x => _.reverse(x);
const last = compose(
  head,
  reverse
);
console.log(last(arr));


/**
 * Example3
 * 很随意，想用什么就拎过来丢一起就好了
 */
const lastUpper = compose(
  toUpperCase,
  exclaim,
  head,
  reverse
);
console.log(lastUpper(arr));
