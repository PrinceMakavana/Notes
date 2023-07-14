# **<p align="center"> React Js Testing </p>**

<br/>

## Introduction

- Testing , As a developer out primary goal is to build software that works , to ensure that our software works

- ### Manual Testing

  - An individual will open the website, interact with the website and ensure everything works as intende

  - Drawbacks
    - Time consuming
    - Complex repetitive tasks has a risk of human error

- ### Automated Testing

  - automated tesing are programs that automate the task of testing our software write code

- ### Jest vs RTL

  - Jest is javascript testing framework
  - Jest is test runner that finds tests, runs the testes, determines whether the test pass or failed

  - RTL

    - Javascript testing utility that provieds virtual DOM for testing REact Components
    - React Testing Library Provides a virtul DOM which we can use to interact with and verify behaviour of a components

    - The Core library is called DOM tesing library and RTL is simply a wrapper around this core library to test React application in a easier way

- ### Types of Test
  - Unit Test
  - Integration Test
  - end-2-end Test

---

<br />

## Unit Test

<br />

- Focus is on testing the individual bulding blocks of an application such as a class or fuction or components

- each unit or building block is tested is isolation, independent od other units

- Run in short amount of time and make it very easy to pinpoint failures

---

<br />

## Integration Test

<br />

- Focus is on testing the individual bulding blocks of an application such as a class or fuction or components

- each unit or building block is tested is isolation, independent od other units

- Run in short amount of time and make it very easy to pinpoint failures

---

<br />

---

## Steps to follow setup testing in React Project with ts

---

<br />

- ### Step 1 : install RTL and jest library

  - devDependencies :

  - ````js
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^14.0.0",
      "@testing-library/user-event": "^14.4.3",
      "jest": "^28.1.2",
      "jest-environment-jsdom": "^28.1.2",
    ````
  - dependencies

    - `"ts-jest": "^27.0.3",`

- ### Step 2 : create .babelrc

  - ```js
        {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
        }
    ```

  - install @babel/preset-env", "@babel/preset-react

- ### Step 3 : create testCase (App.test.jsx)

  - Example

    - ```js
      import { render, screen } from "@testing-library/react";
      import App from "./App";
      import React from "react";
      describe("Button Component", () => {
        it("should render the component", () => {
          const view = render(<App />);
          console.log(expect(screen.getByTestId("header")).toBeDefined());
        });
      });
      ```
