import React, { useCallback, useContext, useState } from 'react';
import '../styles/Component.css';

function Component() {
  const [count, setCount] = useState(0);

  return (
    <div className="component-container">
      <h1>Understanding Components in React</h1>

      <h2>What is a Component?</h2>
      <p>
        A component in React is a reusable piece of the user interface. Components can be thought of as custom, reusable HTML elements that can be used to build complex interfaces out of simpler building blocks.
      </p>

      <h2>Types of Components</h2>
      <ul>
        <li>
          <strong>Functional Components:</strong> These are JavaScript functions that return JSX. They can accept props as arguments and return a React element. Functional components are also known as stateless components because they do not manage their own state.
          <pre>{`
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
            `}</pre>
        </li>
        <li>
          <strong>Class Components:</strong> These are ES6 classes that extend from React.Component. They can manage their own state and lifecycle methods. Class components are also known as stateful components.
          <pre>{`
  import React from 'react';

  export default class ClassCompo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: ''
      };
    }

    render() {
      return (
        <div>
          <form>
            <label>Name</label>
            <input type='text' onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
            <label>Age</label>
            <input type='number' onChange={(e) => { this.setState({ age: e.target.value }) }}></input>
            <input type='submit' value={'Submit'} onClick={(e) => {
              e.preventDefault();
              console.log("Name: " + this.  state.name);
              console.log("Age: " + this.state.age);
            }}></input>
          </form>
        </div>
      );
    }
  }
            `}</pre>
        </li>
        <li>
          <strong>Higher-Order Components (HOCs):</strong> These are functions that take a component and return a new component. HOCs are used for reusing component logic.
          <pre>{`
import React from 'react'

function HigherOrder() {
    return (
        <div>
            <h1> Thank you for visiting me </h1>
        </div>
    )
}

export default HigherOrder

export const HighOrderComponent = (HigherOrder) => {
    return (props) => (
        <>
           <h2>I am Higher order component</h2> 
            <HigherOrder {...props} />
        </>
    )
}

export const EnhancedOrder = HighOrderComponent(HigherOrder);
            `}</pre>
        </li>
        <li>
          <strong>Uncontrolled Components:</strong> These are components that maintain their own state and use refs to access the DOM.
          <pre>{`
  import React, { useRef } from 'react';

  function UncontrolledComponent() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(inputRef.current.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default UncontrolledComponent;
            `}</pre>
        </li>
      </ul>

      <h2>React Lifecycle Methods</h2>
      <pre>{`
Parent class Constructor
Parent class Render

  Child class 1 constructor 
  Child class 1 render

  Child class 2 constructor 
  Child class 2 render

  Child class 1 ComponentDidMount
  Child class 2 ComponentDidMount
  
Parent class ComponentDidMount
      `}</pre>
      <div>
        <iframe
          src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
          title="React Lifecycle Methods Diagram"
          width="100%"
          height="500px"
        />
      </div>

      <h2>What are Fragments in React?</h2>
      <p>
        It's a common pattern in React to return multiple elements from a component. Fragments let you group a list of children without adding extra nodes to the DOM.
      </p>
      <pre>{`
<React.Fragment>
  <h1>Title</h1>
  <p>Paragraph</p>
</React.Fragment>
      `}</pre>
      <p>We can also write in short:</p>
      <pre>{`
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
      `}</pre>

      <h2>JSX and Its Importance</h2>
      <p>
        JSX stands for JavaScript XML. It is a syntax extension for JavaScript, used with React to describe what the UI should look like. JSX may look like HTML, but it is transformed into JavaScript function calls by Babel.
      </p>
      <p>
        <strong>Importance of JSX:</strong>
        <ul>
          <li><strong>Declarative Syntax:</strong> JSX provides a clear and expressive syntax for defining UI components, making the code more readable and maintainable.</li>
          <li><strong>Integration with JavaScript:</strong> Since JSX is a syntactic sugar for React.createElement, it integrates seamlessly with JavaScript, allowing you to embed JavaScript expressions within the markup.</li>
          <li><strong>Prevents Injection Attacks:</strong> JSX automatically escapes any values embedded in the markup, preventing cross-site scripting (XSS) attacks.</li>
          <li><strong>Tooling Support:</strong> Tools like Babel can transform JSX into optimized JavaScript code, allowing you to use the latest features of JavaScript and React.</li>
        </ul>
      </p>

      <h2>Interview Questions</h2>
      <p>Here are some common interview questions related to JSX and components:</p>
      <ol>
        <li><strong>What is JSX, and why is it used in React?</strong><br />
          JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React to describe UI elements. JSX makes the code more readable and maintainable by providing a declarative syntax for defining UI components. It integrates seamlessly with JavaScript and prevents injection attacks by automatically escaping values embedded in the markup.
        </li>
        <li><strong>What is the difference between functional and class components?</strong><br />
          Functional components are JavaScript functions that return JSX. They are simpler and don't have their own state or lifecycle methods. Class components are ES6 classes that extend <code>React.Component</code>. They can manage their own state and have lifecycle methods.
        </li>
        <li><strong>How do you define a state in a functional component?</strong><br />
          You can define a state in a functional component using the <code>useState</code> hook provided by React. For example, <code>const [count, setCount] = useState(0);</code> initializes a state variable called <code>count</code> with an initial value of <code>0</code>, and <code>setCount</code> is a function used to update the <code>count</code> state.
        </li>
        <li><strong>Explain the <code>useState</code> hook and its purpose.</strong><br />
          The <code>useState</code> hook is a built-in React hook that allows functional components to manage state. It takes an initial state value as an argument and returns an array containing the current state value and a function to update that state value. It enables functional components to have local state without using class components.
        </li>
        <li><strong>What are props in React, and how do you pass them to components?</strong><br />
          Props (short for properties) are a way to pass data from parent to child components in React. They are read-only and help make components reusable and customizable. Props are passed as attributes to components in JSX. For example, <code>{"<MyComponent name='John' />"}</code> passes a prop called <code>name</code> with the value <code>'John'</code> to the <code>MyComponent</code> component.
        </li>
        <li><strong>Can you explain the concept of lifting state up in React?</strong><br />
          Lifting state up is a pattern in React where you move the state from a child component to its parent component. This allows multiple child components to share the same state and synchronize their state with each other through their parent component. It helps maintain a single source of truth for the shared state.
        </li>
        <li><strong>What are the lifecycle methods of a class component?</strong><br />
          Class components in React have several lifecycle methods, including <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>. These methods allow you to perform actions at different stages of a component's lifecycle, such as initializing state, fetching data, and cleaning up resources.
        </li>
        <li><strong>How do you handle events in React?</strong><br />
          In React, you can handle events using JSX syntax similar to HTML. You pass a function as the event handler to the <code>onEvent</code> attribute of the JSX element. For example, <code>{"<button onClick={handleClick}>Click me</button>"}</code> attaches a <code>click</code> event handler to the button element, calling the <code>handleClick</code> function when clicked.
        </li>
      </ol>
    </div>
  );
}

export default Component;
