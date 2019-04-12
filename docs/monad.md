### 我们从 Promise 来讲 Monad 是个啥

**Promise is Monad**

```js
const getB = a => new Promise((resolve, reject) => fetch(a, resolve));
const getC = b => new Promise((resolve, reject) => fetch(b, resolve));
const getD = c => new Promise((resolve, reject) => fetch(c, resolve));

getB(a)
  .then(getC)
  .then(getD)
  .then(console.log);
```



### 所以 Monad 是个啥

A(B) => P(A).then(B)

但是没有这样的能力

P(A).then(B).then(C).then(D)

```js
/**
 *
 * example1
 */

const add = x => x + 1;

Promise.resolve(0)
  .then(add)
  .then(add)
  .then(console.log);

/**
 * example2
 */

Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(1)))).then(
  console.log
);

/**
 * example3
 */

const add = x =>
  new Promise((resolve, reject) => setTimeout(() => resolve(x + 1), 1000));

Promise.resolve(0)
  .then(add)
  .then(add)
  .then(console.log);
```

- 最简单的 P(A).then(B) 实现里，它的 P(A) 相当于 Monad 中的 unit 接口，能够把任意值包装到 Monad 容器里。

- 支持嵌套的 Promise 实现中，它的 then 背后其实是 FP 中的 join 概念，在容器里还装着容器的时候，递归地把内层容器拆开，返回最底层装着的值。

- Promise 的链式调用背后，其实是 Monad 中的 bind 概念。你可以扁平地串联一堆 .then()，往里传入各种函数，Promise 能够帮你抹平同步和异步的差异，把这些函数逐个应用到容器里的值上。

说到这里，Monad 就是：

- 可以把值包装为**容器**

- 对于容器中的值，可以把函数应用在值上面（包括容器中嵌套容器，需要递归将函数应用到值上）

### 总结一下

Promise 消除回调地狱的关键（为什么可以和 Monad 联系起来）

- 拆分 `A(B)` 为 `P(A).then(B)` 的形式。这其实是 Monad 来构建容器的 `unit`

- 不分同步还是异步，都能写 `P(A).then(B).then(C)` 的形式，这是 Monad 的 `bind`