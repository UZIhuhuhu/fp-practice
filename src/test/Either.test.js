const { Left, Right } = require('../functor/Either');

/**
 * Example1
 */

const rightDemo = Right.of(`Hello`).map(x => x + `Wynn`);
const leftDemo = Left.of(`Hello`).map(x => x + `Wynn`);

console.log(rightDemo, leftDemo);

/**
 * Example2
 */

const getPerson = obj => (obj.person ? Right.of(obj.person) : Left.of(`Error`));

const demo1 = getPerson({ name: 'NodeJS', person: 21 });

const demo2 = getPerson({ name: `Chrome` });

console.log(demo1, demo2);

/**
 * Example3
 * try...catch No return value, only warning⚠️
 */

const getPerson1 = obj => (obj.person ? obj.person : new Error(`Error`));

try {
  throw getPerson1({ name: `Chrome` });
  // throw getPerson1({ name: `NodeJS`, person: 21 });
} catch (err) {
  console.log(err);
}
