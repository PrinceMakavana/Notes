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

- Use given Config file for typescript

  - [**tsconfig.json**](./../unique_files/tsconfig.json)

---

<br />

## JS Vs JSX

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

- **About StrictMode** :

  - enable additional development behaviors and warnings for the component tree
  - Behaviors which is enable :
    - re-render an extra time to find a bugs caused by impure rendering
    - re-run Effects an extra time to find bugs caused by missing Effect cleanup.
    - be checked for usage of deprecated APIs.

- **About Profiler** :

  - measure rendering performance of a React tree programmatically.

  ```js
  <Profiler id='App' onRender={onRender}>
    <App />
  </Profiler>;

  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    // Aggregate or log render timings...
  }
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

- **Type 2 : (Class Components)** :

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

- **Type 3 : (Pure Components)** :

  - pure functional component refers to a functional component that receives props as input and returns JSX to define its structure. It does not have any internal state or lifecycle methods. (stateless component)
  - Component doesn't have state and any lifeCycleMethod that it is known as pureComponent

  ```js
  class MyComponent extends React.PureComponent {
    render() {
      return <div>Hello, World!</div>;
    }
  }

  const MyComponent = (props) => {
    return <div>Hello, {props.name}!</div>;
  };
  ```

- **Type 4 : (Higher Order Components)** :

  - Higher-Order Component (HOC) is a pattern that allows you to reuse component logic by wrapping a component with another component.
  - HOCs are not built-in components but rather functions that take a component as input and return an enhanced version of that component.

  ```js
  import React from "react";
  const withLogger = (WrappedComponent) => {
    class WithLogger extends React.Component {
      componentDidMount() {
        console.log("Component has mounted");
      }

      componentWillUnmount() {
        console.log("Component is about to unmount");
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return WithLogger;
  };

  export default withLogger;
  ```

  ```js
  import React from "react";
  import withLogger from "./withLogger";

  class MyComponent extends React.Component {
    render() {
      return <div>Hello, World!</div>;
    }
  }

  export default withLogger(MyComponent);
  ```

---

<br/>

## Statefull Vs StateLess Components :

- If Any component handle any state then it is a statefull component
- If any component doesn't handle any state and only render ui then it is a stateless components

---

<br/>

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

- Send Props Child to Parent (props Drilling)

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

- **Type 1 : (Inline Css)** : `<header style={{ backgroundColor: "red", color: "green" }}>`

- **Type 2 : (Custom Variable Styling)** :

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

- **Type 3 : (Module Css)** :

  - Create style.module.css File

  ```css
  /* styles.module.css */
  .myComponent {
    color: red;
  }

  .myButton {
    background-color: blue;
  }
  ```

  - import in specific component where you want to use

  ```js
  import styles from "./styles.module.css";
  ```

  - Advantages : Not clash css with another components

- **Type 4 : (Styled Css/ Css-in-Js)** :
  - It allows you to encapsulate styles within the component and provides a more seamless integration between styles and component logic.
  - Install the library: `npm install styled-components`
  - Import styled : `import styled from 'styled-components';`
  - Define style in component :
    ```js
    const Wrapper = styled.div`
      background-color: #f0f0f0;
      padding: 20px;
    `;
    const Button = styled.button`
      background-color: blue;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    `;
    ```
    - Use Define Style
    ````js
    const MyComponent = () => {
    return (
     <Wrapper>
       <h1>Hello, World!</h1>
       <Button>Click me</Button>
     </Wrapper>
    );
    };
     ```
    ````

---

<br/>

## React LifeCylce

- **Phase - 1 (Mounting Phase)** :

  - constructor()
  - static getDerivedStateFromProps()
  - render()
  - componentDidMount()

- **Phase - 2 (Updating Phase)** :

  - satic getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - ComponentDidUpdate()

- **Phase - 3 (UnMounting Phase)** :
  - componentDidUnmount()

```js
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("I am constructor");
    this.state = {
      fullName: "Prince",
      state1: false,
      state2: false,
    };
    this.Hello = this.Hello.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps");
    console.log(props, state);
    if (props.fullName != state.fullName) {
      console.log("Name Update from getDrivedStateFromProps");
      return {
        fullName: props.fullName,
      };
    }
    return null; // it will return object
  }
  handleChange() {
    // this.setState({ fullName: "Vatsal" });
    this.setState({ state1: true });
  }

  render() {
    // console.log(this.props,);
    console.log(this.state);
    console.log("render");

    return <button onClick={this.handleChange.bind(this)}>Change</button>;
  }

  componentDidMount() {
    console.log("componentDidMount ");
  }
  Hello() {
    console.log("i am Here ");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextState);
    if (nextState.state1 != this.state.state1) {
      console.log("I am Updating");
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Use foull for get static styles
    console.log("getSnapshotBeforeUpdate");
    console.log(prevProps, prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.Hello();
    this.setState({ state2: this.state.state1 });
    console.log("componentDidUpdate");
    // console.log(prevProps, prevState);
    // console.log("snapshot", snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
```

## Hooks in Functional Component

- We can not able to use react lifecycle method in functional component because of that hook are introduce in react js (16.8v)

- **What is State** :

  - A components data which is varing over the time to handle this type of data need to use state.
  - You can create a state using a specific Hook (useState , useRef , etc..)

- Hooks provide a more concise and flexible way to manage state and side effects in React applications.
- with hooks, functional components gained the ability to have their own state and handle lifecycle events

- **List of main Hooks** :
  - **`useState`**: Allows functional components to have local state.
  - **`useEffect`**: Handles side effects and lifecycle events such as component mounting, updating, and unmounting.
  - **`useContext`**: Provides access to the nearest ancestor Context object.
  - **`useReducer`**: Manages state through a reducer function, similar to how Redux works.
  - **`useCallback`** and **`useMemo`**: Optimizes performance by memoizing functions and values.
  - **`useRef`**: Provides a mutable object that persists across re-renders.

## Error Boundary

- if your application throws an error during rendering, React will remove its UI from the screen. To prevent this, you can wrap a part of your UI into an error boundary.

- [**Error Boundary Code**](./../unique_files/ErrorBoundary.tsx)

## State & UseState

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
