// /**
//  *
//  * example1
//  */

// const add = x => x + 1;

// Promise.resolve(0)
//   .then(add)
//   .then(add)
//   .then(console.log);

// /**
//  * example2
//  */

// Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(1)))).then(
//   console.log
// );

// /**
//  * example3
//  */

// const add = x =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(x + 1), 1000));

// Promise.resolve(0)
//   .then(add)
//   .then(add)
//   .then(console.log);

/**
 * example4
 */

const value = 4;
const f = x => Promise.resolve(x + 4);

const left = Promise.resolve(value).then(f);
const right = f(value);

console.log(left, right);
