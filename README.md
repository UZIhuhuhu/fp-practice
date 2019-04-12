
![](./docs/header.jpg)

### 项目的一些说明

#### 安装依赖

Actually there is only one `lodash` :)

Oh, then I added a library named `folktale`

```bash
yarn install
```

#### NodeJS 中的模块化

主要遵循 CommonJS 规范 `require`, `module.exports`, `exports`

#### 项目文件

- `/docs` 文档

- `/src/application` 一些函数式实例，比如递归查找数组最大值，用 NodeJS 的 `fs` 模块递归遍历文件夹

- `/src/functor` 一些函子(Functor)的简单实现

- `/src/test` 一些测试代码

- `/src/tools` 一些辅助函数的实现比如 `curry`, `compose` 感兴趣的话可以去看看 `lodash` 的源码，涉及到上下文之类的，比自己实现的复杂很多

### 正文

>函数式编程关心数据的映射，命令式编程关心解决问题的步骤 -- nameoverflow

这里的映射就是数学上「函数」的概念——一种东西和另一种东西之间的对应关系。

这也是为什么「函数式编程」叫做「函数」式编程

[更具体的一些关于函数式的说明](./docs/functional.md)

[Monad 和 Promise](./docs/monad.md)

[React 中的函数式](./docs/about-react.md)

[SICP 的笔记](./docs/sicp.md)