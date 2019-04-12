### 函数作为一等公民



### 纯函数的作用

"纯": 相同的输入只能得到相同的输出

```js
const xs = [1, 2, 3, 4, 5];

xs.slice(0, 3); // [1,2,3]
xs.slice(0, 3); // [1,2,3]
xs.slice(0, 3); // [1,2,3]

xs.splice(0, 3); // [1,2,3]
xs.splice(0, 3); // [4,5]
xs.splice(0, 3); // []
```

---

### 辅助函数的工具

#### 函数柯里化

一个接受 任意多个参数 的函数，如果执行的时候传入的参数不足，那么它会返回新的函数，新的函数会接受剩余的参数，直到所有参数都传入才执行操作。

```js
const f = (a,b,c,d) => {...}
const curried = curry(f);

curried(a, b, c, d)
curried(a, b, c)(d)
curried(a)(b, c, d)
curried(a, b)(c, d)
curried(a)(b, c)(d)
curried(a)(b)(c, d)
curried(a, b)(c)(d)
```

[柯里化的使用场景](./curry.md)

#### 函数组合

组合嘛，顾名思义，就是把几样东西给组合起来

```js
const toUpperCase = x => x.toUpperCase();
const exclaim = x => x + '!';

const shout = compose(
  toUpperCase,
  exclaim
);
shout('hello, green pomelo');
```

有个有趣的点就是这是和数学上的结合律很相似

```js
compose(toUpperCase, compose(head, reverse))
<->
compose(compose(toUpperCase, head), reverse)
```

这边具体的在 `/src/test/compose.test.js` 里有案例

