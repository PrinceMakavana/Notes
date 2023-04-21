# **<p align="center"> React Js </p>**

<br/>

## Introduction

- React is Ui Library -> From Facebook

- React give us a way to build websites & UIs with organized and resuable componetns

- Why use React

  - Organization
  - Reuseable
  - Flexiblity
    - Just Part Of Project,
    - Mobile Apps -> React Native ,
    - Desktop app -> Electron ,
    - server side render -> Next Js )
  - Performance
  - Declarative
    - Components
    - Props
    - State
    - Events

- ### Environment setup
  - Install Node
  - Text Editor -> Vs Code
  - Git
  - Postman

---

<br />

## Installation

<br />

- Don't use create-react-app because it's not updateing with community

- ### Basic React

  - <b>Use Node Version > 16</b>

  - `npm create vite@latest`
  - select -> react

- ### With Next.js

  - `npx create-next-app`

- ### With Remix

  - `npx create-remix`

- ### With Gatsby

  - `npx create-gatsby`

- ### Expo (for native apps)
  - `npx create-expo-app`

---

<br />

## About JSX

<br />

- Every return HTML is wrap in the single parent element

  - you can use specific `<div></div>` or fragment `<></>` => it will not create parent elemet in DOM

- ### With Js

```js
function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", {}, "My App")
  );
}
```

<br />

- ### With Jsx

```jsx
function App() {
  return (
    <div className='container'>
      <h1>This is My App </h1>
    </div>
  );
}
```

---

<br />

## Connect App.jsx with index.html using main.jsx or index.jsx

<br />

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

<br/>

## Components

- **Type 1 (Functional)**:

  ```js
  function Button(props) {
    return <button>{props.children}</button>;
  }

  // TypeScript Components
  type ButtonProps = {
    children: React.Reactnode,
  };

  function Button(props: ButtonProps) {
    return <button>{props.children}</button>;
  }
  ```

- **Type 2 (Function Expression)** :

  ```js
  const Button = function (props) {
    return <div>Hello</div>;
  };

  // TypeScript Components

  type ButtonProps = {
    children: React.ReactNode,
  };

  const Botton = function (props: ButtonProps) {
    return <div>{props.children}</div>;
  };
  ```

- **Type 3 (Arraow Function)** :

  ```js
  const Botton = (props) => {
    return <div>{props.children}</div>;
  };
  // TypeScript Components

  type ButtonProps = {
    children: React.ReactNode,
  };

  const Button = (props: ButtonProps) => {
    return <div>{props.children}</div>;
  };
  ```

- **Type 4 : (explicit return)** :

  ```js
  // Button.jsx
  let Button = (props) => <button>{props.children}</button>;
  // or
  const Button = (props) => <button>{props.children}</button>;

  // Button.tsx
  type ButtonProps = {
    children: React.ReactNode,
  };

  let Button = (props: ButtonProps) => <button>{props.children}</button>;
  ```

- **Type 5 : (Create Class)** :

  ````js

  import React from "react";
    var ComponentType1 = React.createClass({
    render: function () {
      return <h1>Hello , I am Components Type 1</h1>;
    },
  });

  ```

  ````

- **Type 6 : (Class Components)** :

  ```js
  class Button extends React.Component {
    render() {
      return <div>{this.props.children}</div>;
    }
  }

  type ButtonProps = {
    children: React.ReactNode,
  };

  class Button extends React.Component<ButtonProps> {
    render() {
      return <div>{this.props.children}</div>;
    }
  }
  ```

---

<br/>

## Statefull Vs StateLess Components :

- If Any component handle any state then it is a statefull component
- If any component doesn't handle any state and only render ui then it is a stateless components

## Props

- Props are the Pass to the Components , Properties of Componets
- Props are send Data Parent Components -> Children Components
- Pass props

```js
<Header text='Hello World' /> // text is Props
```

- Handle Props

```js
function Header(props) {
  return (
    <header>
      <div className='container'>
        <h2>{props.text} </h2>
      </div>
    </header>
  );
}
```

- Define Default props

```js
Header.defaultProps = {
  text: "Feedback UI",
};
```

- Props Validation (import PropTypes)

```js
Header.defaultProps = {
  text: "Feedback UI",
};
```

- Send Props Child to Parent

```js
Parent -> App.js;

function App() {
  const getHeaderData = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header HeaderData={getHeaderData} />
      <h1>My App</h1>
    </>
  );
}

Child -> Header.js;

function Header(props) {
  props.HeaderData("This is Going To Child To Parent");
  return (
    <header>
      <div className='container'>
        <h2>{props.text} </h2>
      </div>
    </header>
  );
}
```

---

<br/>

## Styling React Js

- Direct Connect .css file with Jsx File using import

- **Inline css** : `<header style={{ backgroundColor: "red", color: "green" }}>`

- **Variable Type Style**

```js
function Header(props) {
  props.HeaderData("This is Going To Child To Parent");

  const headerStyles = {
    backgroundColor: "blue",
    color: "red",
  };
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{props.text} </h2>
      </div>
    </header>
  );
}
```

- **Props Types Styling**

```js
<Header bgColor='green' textColor='red' />
```

```js
function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <header bgColor='red' style={headerStyles}>
      <div className='container'></div>
    </header>
  );
}
```

---

<br/>

## State & UseState

- **What is State** :
  - A components data which is varing over the time to handle this type of data need to use state.
  - You can create a state using a specific Hook (useState , useRef , etc..)
- **What is Hook** :

  - A hook is spical function that lets you "Hook into" react features.

- **When would use Hook** :

  - A Componets realize that need to handle state , at that time hook is used

- **Type of state** :
  - Component Level State
    - Specific State which is use only in the specific state (open/close navigation)
  - App Level State
    - which single state is used in multiple components , that is app lavel state
- **Create Hook for State** :

  - **Function Component** :

    ```js
    function FeedbackItem() {
      const [item, setItem] = useState("this is item"); // initlize Hook

      console.log(item); // Access Hook

      setItem("this is updated"); // Update Hook

      setItem((prev) => {
        // prev => gives old value of state
        return prev + "new item";
      }); // Update Hook
    }
    ```

    - const [name , setName] = hookName();
    - Eg : const [check , setCheck] = useState(true);

  - **Class Component** :

  ```js
  export default class FeedbackItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rating: 7,
        text: "This is item one",
      }; // Create State

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      // Note: Must bind method with constructor
      this.setState({ rating: this.state.rating + 1 }); // Update State
    }
    render() {
      return (
        <>
          <div className='card'>
            <div className='num-display'>{this.state.rating}</div>
            <div className='text-display'>{this.state.text}</div>
            <button onClick={this.handleClick}>Click</button>
          </div>
        </>
      );
    }
  }
  ```

- **Context API useContext()** :

  - Context provides a way to pass data through the component tree without having to pass down manually at every lavel
  - **Hook** : `useContext()`

- **useCallback()** :

  - Inhence performence of project
  - useCallback and useMemo hook are similar main difference is **useMemo returns a memoised value** where **useCallback returns a memoised function**

  - it prevents unused re-render

- **memo in React :**

  - using memo will cause React to skip rendering a component if its props have not changed
    - `js export default memo(Component)`

- **useTransition()** :

- **useEffect()** :

  - it is usefull for perform a sideEffect Task
  - side effect tasks :
    - settimeout()
    - setinterval()
    - DOM directly update
  - Life Cycle Method componet will use with use Effect :

    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount

  - It will run when any componet state will update

- **useRef()** :

  - use Reference , that reference a Element Reference that's render without Triggger the Re-render
  - `cosnt ref = useRef(initalValue)`

  - **_Parameter_** :
    i - the value you want the ref object's current property to be initially - any type of value can added

  - **_Return_** :

    - object with single property

  - **_Limits_** :

    - mutable Property `ref.current`
    - when we change the `ref.current` , it does not re-render your component
    - never read/write `ref.current` during rendering , expect for initialization , this makes your component's behaviour unpredictable

  - **_Usage_** :

    - Majorly , It will use for the Dom Manipulation
    - when we pass html Element in useRef it will retutn ref.current with html element

  - Example :

    ```js
    import "./App.css";
    import { useRef, useState } from "react";
    function App() {
      const refElement = useRef("");
      const [name, setName] = useState("Prince");
      console.log(refElement);
      const reset = () => {
        setName("Prince");
        refElement.current.focus();
      };
      return (
        <>
          <input
            type='text'
            value={name}
            ref={refElement}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={reset}>Reset</button>
        </>
      );
    }

    export default App;
    ```

  - here when we click on Reset it will automaticlly focus on input

- **useReducer()** :

  - it is used For complex function handling
  - use for State Management
  - alternative of useState
  - `const [state , dispatch] = useReducer(reducer , initalstate)`
  - `reducer(currentState , action)`
    <!-- useState : A components data which is varing over the time to handle this type of data need to use state.
    useContext : Context API , Handle Prop Drilling
    memo : skip render if not wanted
    useEffect : used for Handle LifeCycle (componentdidMount , componentDidUpdate , componentWillUnmount)
    useTransition : React Hook that lets you update the state without blocking the UI.
    useCallback : useCallback returns a memoised function, it prevents unused re-render -->

  ```

  ```

- **useMemo**

## LifeCycle :

- React will run in Two Phase

  1. Render Phase

     - in this Phase React desides what changes need to be made to the DOM
     - React Life Cycle Will Call in Render Phase
       - which includes: constructor, componentWillMount, componentWillReceiveProps, componentWillUpdate, getDerivedStateFromProps, shouldComponentUpdate, render, setState updater functions.

  2. Commit Phase
     - here React flushes the changes(addition , updates , removals) to the DOM
     - In this phase React also calls the componentDidMount and componentDidUpdate lifecycles

  - LifeCycle Phase

    1. Mounting
    2. Updating
    3. Unmounting

  - LifeCycle Methods
    1.  componentWillMount <!-- before Rendering -->
    2.  getDrivedStateFromProps
    3.  <del>componentWillMount</del> <!-- after Rendering  Deprecated -->
    4.  componentDidMount <!-- after Rendering  Deprecated -->
    5.  <s>componentWillReceiveProps</s> <!-- When Receive a New Props -->
    6.  shouldComponentUpdate <!--before rendering and after receiving new props and state -->
        - return fasle to prevent re-rendering
    7.  componentWillUpdate <!--before rendering and after receiving new props and state -->
    8.  componentdidUpdate <!--after component's updates and the actual DOM Updated -->
    9.  componentWillUnmount <!-- Immediately before removing component from DOM  -->

## Diffrence StrictMode & Fragment

- **StrictMode** :
  - StrictMode is a feature added in version 16.3
  - Aimed to help us in finding potential problems in an application
