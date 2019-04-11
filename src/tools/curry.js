const curry = (f, args1 = []) => (...args2) => {
  const args = [...args1, ...args2];
  return f.length === args.length ? f(...args) : curry(f, args);
};

const add = curry((a, b) => a + b);

console.log(add(1)(2));
