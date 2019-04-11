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
