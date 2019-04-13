### 函数作为一等公民

用函数作为主要载体的编程模式，用函数拆解，抽象一般的表达式。

#### 从命令式和声明式的区别开始

**题外话：关于 const:**

常量不是对这个值本身的限制，而是对赋值的那个变量的限制。换句话说，这个值并没有因为 `const` 不可变，只是赋值本身不可变。比如值是个复杂值，内容仍然可以修改。

```js
const a = [1,2,3];
a = [...a,4]; // TypeError: Assignment to constant variable.
a.push(4);
```

命令式：编写一条条命令去让计算机执行这些动作

声明式：我们写一写表达式，而不是一步步的具体指示

除了函数，递归其实是一个描述表达式的很好的方法。

好！我们以 SICP 上的一些🌰来看

[推荐去看看 SICP](./sicp.md)

看完这边，然后再看看递归在前端中的应用,其实场景还挺少的鹅。

说了这么多函数是第一公民，声明式，我们来看看函数到底有什么值得我们去用的地方。

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

#### 更强大的 Functor

[这边是关于 Monad 和 Promsie](./monad.md)

...

---

### 函数式在 JavaScript(前端) 中的实践

[实践](./real-use.md)

---

### 总结

讲函数式和一些数学上的定理联系起来还是挺有趣的，比如 `SICP` 里的那个把求和的过程抽象出来。

用递归去写写函数也是很有趣的，把自己从命令式的一步步中解放出来。递归有趣在写出来不知道是对不对的，嘛，交给上帝就好了。

前端业务中的用到的函数式编程说多也不算多。

- 比如递归其实用的很少
- 那个柯里化的使用场景，其实是我找了很久才找到的（：我很多时候其实也并不能说服自己为什么要这么用呢
- 但是处理副作用去封装一些东西还是需要的
- 嗯，接着就是 `Promise` 吧，其实就是 `Monad` 的一个典型的实践嘛
- React 和 Redux 的一些设计理念，比较贴近函数式的思想吧。
- 还有类型推导这些？可以试试 `TypeScript` 嘛，我也还没正式的去学

大概就先写这么多叭。