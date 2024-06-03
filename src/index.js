import React, { createContext, useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import App from './App';
import Package from './Components/Package';
import Component from './Components/Component';
import DOM from './Components/DOM';
import HooksFAQ from './Components/Hooks';
import ReactRouter from './Components/ReactRouter';
import PropsDrilling from './Components/PropsDrilling';
import Context from './Components/Context';
import ReactRedux from './Components/ReactRedux';
import ContextAPI from './Components/ContextAPI';
import TemplateLiteral from './Components/TemplateLiteral';
import Testing from './Components/Testing';
import QNA from './Components/QNA';

const LazyLoading = lazy(() => import('./Components/LazyLoading'));

export const userContext = createContext();
export const todoContext = createContext();

export const myRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
}, {
  path: '/package',
  element: <Package />,
}, {
  path: '/component',
  element: <Component />,
}, {
  path: '/dom',
  element: <DOM />,
}, {
  path: '/hooks',
  element: <HooksFAQ />,
}, {
  path: '/router',
  element: <ReactRouter />,
}, {
  path: '/propsdrilling',
  element: <PropsDrilling />
}, {
  path: '/context',
  element: <ContextAPI />
}, {
  path: '/templateliteral',
  element: <TemplateLiteral />
}, {
  path: 'redux',
  element: <ReactRedux />
}, {
  path: 'testing',
  element: <Testing />
}, {
  path: '/qna',
  element: <QNA />
}, {
  path: "/lazyloading",
  element:
    <Suspense fallback={<h1> Loading... </h1>}>
      <LazyLoading />
    </Suspense>
}])

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
        <userContext.Provider value={{ name: 'Kartik Dhumal', info: 'This is my React info' }}>
          <React.StrictMode>
            <RouterProvider router={myRouter} />
          </React.StrictMode>
        </userContext.Provider>
      </todoContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
