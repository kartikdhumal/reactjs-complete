// PropsDrilling.js

import React, { useState } from 'react';
import '../styles/Component.css';

function PropsDrilling() {
  const [text, setText] = useState('');

  return (
    <div className="component-container">
      <h1>Props Drilling</h1>

      <p>
        Props drilling is a pattern in React where you pass down props from a parent component to a deeply nested child component.
        This can lead to unnecessary passing of props through intermediate components, making the code harder to maintain.
        While it's a simple and straightforward way to manage state and behavior in small applications, it can become cumbersome in larger applications.
      </p>

      <h2>Example</h2>
      <pre>
        {`
// Parent Component
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [text, setText] = useState('');

  return (
    <div>
      <ChildComponent text={text} setText={setText} />
    </div>
  );
}

export default ParentComponent;

// Child Component
import React from 'react';

function ChildComponent({ text, setText }) {
  return (
    <div>
      <GrandChildComponent text={text} setText={setText} />
    </div>
  );
}

export default ChildComponent;

// GrandChild Component
import React from 'react';

function GrandChildComponent({ text, setText }) {
  return (
    <div>
      <button onClick={() => setText('Hello, World!')}>Change Text</button>
    </div>
  );
}

export default GrandChildComponent;
        `}
      </pre>

      <hr />

      <h1>Lifting State Up</h1>

      <p>
        Lifting state up is another pattern in React where you move the state from a child component to its parent component.
        This allows multiple child components to share the same state and synchronize their state with each other through their parent component.
        It helps maintain a single source of truth for the shared state.
      </p>

      <h2>Example</h2>
      <pre>
        {`
// Parent Component
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

export default ParentComponent;

// Child Component
import React from 'react';

function ChildComponent({ count, setCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ChildComponent;
        `}
      </pre>
    </div>
  );
}

export default PropsDrilling;
