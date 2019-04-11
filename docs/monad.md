```js
const getB = a => new Promise((resolve, reject) => fetch(a, resolve))
const getC = b => new Promise((resolve, reject) => fetch(b, resolve))
const getD = c => new Promise((resolve, reject) => fetch(c, resolve))

getB(a)
  .then(getC)
  .then(getD)
  .then(console.log)
```