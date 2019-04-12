### Why we need curry?

- Delay calculation

- Parameter multiplexing

In React

```jsx
<div data-name="name" onClick={handleClick} />

<div onClick={handleClick.bind(null, data)} />

<div onClick={() => {handleClick()}} />

<div onClick={curry(handleClick)}/>
```

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

getHistoryUpList(20)(0);
```
