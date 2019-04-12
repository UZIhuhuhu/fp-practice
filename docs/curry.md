### Why we need curry?

- Delay calculation

- Parameter multiplexing

#### In React

```jsx
<div data-name="name" onClick={handleClick} />

<div onClick={handleClick.bind(null, data)} />

<div onClick={() => {handleClick()}} />

<div onClick={curry(handleClick)}/>
```

#### 单一化的参数输入，避免传入多个参数 => 根据不同的输入情况，有效获取数据

```js
const ZERO = 0;
const TWENTY = 20;

export const getHistoryUpList = (pageSize = TWENTY, pageNum = ZERO) =>
  axios.post(`/user/allHistory`, qs.stringify({ pageNum, pageSize }));
```

```js
const getHistoryUpList = curry((pageSize = TWENTY, pageNum = ZERO) =>
  axios.post(`/user/allHistory`, qs.stringify({ pageNum, pageSize }))
);

const getHistoryListTerm = getHistoryUpList(20);
export getHistoryListTerm;
```

#### “安全”的操作

下面这种写法不能保证所有的 `remove` 都是正确执行的

```js
const append = function(parent,child){
  parent.appendChild(child);
}
const remove = function(dom){
  dom.remove();
}
append(parent,child);  //插入
remove(child);  //删除
```

再来看看下面这种写法，想要删除的节点都是来自删除添加的节点

```js
const append = function(parent,child){
 parent.appendChild(child);
 return function(){
    child.remove();
 }
}
// point free
const append2 = function(parent,child){
  parent.appendChild(child);
  return child.remove.bind(child);
}

const remove = append(parent,child);// 插入一个节点，同时返回所插入的节点的删除操作
remove();  // 删除
```

简单的来总结一下，以函数作为主体，确保了函数之间不会相互干扰