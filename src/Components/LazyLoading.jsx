import React from 'react';
import '../styles/LazyLoading.css';

function LazyLoading() {
    return (
        <div className="lazy-loading-container">
            <h1>Lazy Loading in React</h1>

            <h2>Introduction</h2>
            <p>
                Lazy loading, also known as code splitting or chunking, is a performance optimization technique that delays the loading of resources until they are needed. In React, this is particularly useful for splitting the application into smaller chunks, which can be loaded on demand, reducing the initial load time.
            </p>

            <h2>Why Use Lazy Loading?</h2>
            <ul>
                <li><strong>Improved Performance:</strong> Reduces the initial bundle size, resulting in faster load times.</li>
                <li><strong>Better User Experience:</strong> Loads components as needed, providing a smoother user experience.</li>
                <li><strong>Efficient Resource Utilization:</strong> Loads only the necessary parts of the application, saving bandwidth and resources.</li>
            </ul>

            <h2>How Lazy Loading Works in React</h2>
            <p>
                React provides built-in support for lazy loading through the <code>React.lazy</code> function and <code>Suspense</code> component. <code>React.lazy</code> allows you to dynamically import a component, and <code>Suspense</code> helps in handling the loading state.
            </p>

            <h3>Steps to Implement Lazy Loading</h3>
            <ol>
                <li><strong>Dynamic Import with React.lazy:</strong> Use <code>React.lazy</code> to dynamically import the component.</li>
                <li><strong>Handle Loading State with Suspense:</strong> Wrap the lazy-loaded component with <code>Suspense</code> to handle the loading state.</li>
            </ol>

            <h2>Example</h2>
            <p>Here's an example demonstrating how to implement lazy loading in a React application:</p>
            <pre>
                {`
import React, { Suspense, lazy } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div className="App">
      <h1>React Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
        `}
            </pre>
        </div>
    );
}

export default LazyLoading;
