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

我们可以实现一个简单的对象 P,然后将 A B 分开来传入这个对象 P,从而可以把回调拆分开

A(B) => P(A).then(B)

经过包装后，P 已经有 Promise 的雏形了

但是它还没有这样的能力

P(A).then(B).then(C).then(D)

那么 Monad 就是一个增强的对象 P，支持链式调用

在每次 Resolve 一个 Promise 时，我们需要判断两种情况：

- 如果被 Resolve 的内容仍然是 Promise（即所谓的 `thenable`），那么**递归 Resolve** 这个 Promise。

- 如果被 Resolve 的内容不是 Promise，那么根据内容的具体情况（如对象、函数、基本类型等），去 `fulfill` 或 `reject` 当前 Promise。

```js
Promise.resolve(1).then(console.log);

Promise.resolve(
  Promise.resolve(
    Promise.resolve(
      Promise.resolve(1)
    )
  )
).then(console.log)
```

这也就是披着 Promise 外衣的 Monad 的核心功能：

对于一个 P 这样装着某种内容的容器，我们能够递归地把容器一层层拆开，直接取出最里面装着的值。（就像洋葱一样）
之后我们就可以实现了**链式调用**的能力

```js
Promise(A).then(B).then(C).then(D)
```

额外的好处是不管同步还是异步，都是一致处理，最后的结果也会是相同的。

```js
const add = x => x + 1;

Promise.resolve(1)
  .then(add)
  .then(add)
  .then(console.log)

const add = (x) => 
  new Promise(resolve => setTimeout(() => resolve(x + 1), 1000))

Promise.resolve(1)
  .then(add)
  .then(add)
  .then(console.log)
```

- 最简单的 `P(A).then(B)` 实现里，它的 `P(A)` 相当于 Monad 中的 `unit` 接口，能够把任意值包装到 Monad 容器里。

- 支持嵌套的 Promise 实现中，它的 then 背后其实是 FP 中的 `join` 概念，在容器里还装着容器的时候，递归地把内层容器拆开，返回最底层装着的值。

- Promise 的链式调用背后，其实是 Monad 中的 `bind` 概念。你可以扁平地串联一堆 `.then()`，往里传入各种函数，Promise 能够帮你抹平同步和异步的差异，把这些函数逐个应用到容器里的值上。

说到这里，Monad 就是：

- 可以把值包装为**容器**

- 对于容器中的值，可以把函数应用在值上面（包括容器中嵌套容器，需要递归将函数应用到值上）

### 总结一下

Promise 消除回调地狱的关键（为什么可以和 Monad 联系起来）

- 拆分 `A(B)` 为 `P(A).then(B)` 的形式。这其实是 Monad 来构建容器的 `unit`

- 不分同步还是异步，都能写 `P(A).then(B).then(C)` 的形式，这是 Monad 的 `bind`
