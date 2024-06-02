import React from 'react';
import '../styles/contextAPI.css';
import Context from './Context';

function ContextAPI() {
    const codeexample2 =`
import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import ContextAPI from './Components/ContextAPI';

export const todoContext = createContext();

const myRouter = createBrowserRouter([
  {
    path: '/context',
    element: <ContextAPI />
  }
]);

const Root = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Provider store={appStore}>
      <todoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
        <React.StrictMode>
          <RouterProvider router={myRouter} />
        </React.StrictMode>
      </todoContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
    `
  const todoExampleCode = `import React, { useContext, useState } from 'react';

function TodoApp() {
  const { todos, addTodo, toggleTodo, removeTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <div className="todo-app">
      <h2>TODO App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`;

  return (
    <div className="context-api-container">
      <Context />
      <div className="context-api-info">
        <h2>What is Context and Context API</h2>
        <p>
          Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </p>
        <h2>When to Use Context</h2>
        <p>
          Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
        </p>
        <h2>Difference between Context API and Redux</h2>
        <p>
          While Context API provides a way to share global data in a React component tree, Redux is a state management library that helps manage global application state more efficiently, especially for larger applications with complex data flows. Redux also provides features like time-travel debugging and middleware for handling asynchronous actions, making it a more comprehensive solution for state management in large-scale applications.
        </p>
        <h2>Example: TODO App using Context</h2>
        <p> ContextAPI.jsx</p>
        <pre className="code-example">{todoExampleCode}</pre>
        <p> index.js</p>
        <pre className="code-example">{codeexample2}</pre>
      </div>
    </div>
  );
}

export default ContextAPI;
