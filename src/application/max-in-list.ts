type Func = (Parameters: Array<number>) => number;

const findMax: Func = arr => {
  if (!Array.isArray(arr)) throw 'Not an array';
  if (arr.length === 0) return undefined;
  const [head, ...tail] = arr;
  if (arr.length === 1) return head;
  return head > findMax(tail) ? head : findMax(tail);
};

console.log(findMax([1, 2, 333]));
