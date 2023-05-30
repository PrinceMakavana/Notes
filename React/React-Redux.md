# **<p align="center"> React Redux </p>**

<br/>

## Introduction

- Redux is a State Management Library used to control state over the application using Action and reducers

- Redux Flow :

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/125016923/241633969-d3efed2f-dc93-4cb7-a8df-ec0b61539052.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230529%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230529T041543Z&X-Amz-Expires=300&X-Amz-Signature=59d8f7efbb595796c3a28add02ba20fb595df85011f0b4f4a334597483e054bf&X-Amz-SignedHeaders=host&actor_id=125016923&key_id=0&repo_id=602916407" />

## Action :

- Describe Something has happen, but doesn't specify how it should be done

```js
{
  type : 'CREATE_TODO',
  payload : 'Build my first Redux app'
}
```

## Reducer :

- Pure Function that takes that previous state and an action and return new state
- Reduers handle state transition but it must be done synchronously.
- Handle Async Task in Reducer :

- use Callbacks , Promise and Middleware to manage async/ side effects

  - **Callbacks**

    - ```js
      fetchSomeData((error, data) => {
        if (!error) {
          dispatch({ type: "HERES_IS_DATA", data });
        }
      });
      ```

  - **Promise**
    - Guranteed Future (Not Cancleable , every call get the response )
    - Immutable
    - Single Value (AJEX -> Request-Response)
    - Caching
    - ```js
      fetchSomeData(id).
        .then(data => {
          dispatch({type : 'HERE_THE_FIRST_CALL' , data})
          return fetchData(data.parentId)
        })
      ```

- What if We want to solve async opration correctly

  - **Observables**

- new State
  - `(state , action) => state + action.payload`

```js
  const counter = (state = 0 , action) {
    switch (action.type) {
      case 'INCREMENT':
          return state + 1;
      case 'DECREMENT' :
        return state - 1;
      default:
        return state;
    }
  };
```

## Redux Observable :

- Redux Observable is Middleware for Redux which handles cancellation , panding request and many other async side effict
- - **Observables**
  - stream of Zero (No value) , one (only one value) or More
  - streams are set, with a dimension of time
  - use **Rxjs** (lodas for async) for it
  - crating Observable :
    - of('hello')
    - from([1,2,3,4])
    - interval(1000)
    - ajax(API)
    - websocket('API')
    - and Many More
  - **Subscribe** :
    - ```js
        myObservables.subscribe(
          value => console.log(value)
          error => console.log(error)
          () => console.log('Complete!')
        )
      ```
  - Observable can be transformed => Map , filter , reduce
  - Observable can be Combined => Concat , merge , zip
  - Observable represent time => debounce, throttle , buffer

## Reactive Programming :

- Two inportant terms when it comes to reactive programming are observable and stream

- There are Two libraries to handle streams of actions in diffrent ways
  - Rxjs
  - Most.js

## Epic :

- A function that takes a stream of **all actions** dispatched and return a stream of **new actions** to dispatch
- Epic -> Action In Action Out
- It is a Primitive(Part) of Redux-Observable
- It is a Fucntion which takes a strem of actions and returns a stream of a actions

```js
const pingPongEpic = (action$) =>
  action$
    .filter((action) => action.type === "PING")
    .delay(1000)
    .map((action) => ({ type: "PONG" }));
```

- In RxJS

```js
function pingPongEpic($action, store) {
  return action.ofType("PING").map((action) => ({ type: "PONG" }));
}
```
