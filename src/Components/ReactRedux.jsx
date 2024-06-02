import React from 'react';
import Redux from './Redux';
import '../styles/ReactRedux.css';

function ReactRedux() {
    return (
        <div className="component-container">
            <h1>React Redux</h1>
            <Redux />
            <div className="documentation">
                <h2>What is Redux?</h2>
                <p>Redux is a predictable state container for JavaScript apps, most commonly used with libraries like React or Angular for managing application state.</p>

                <h2>Concepts in Redux:</h2>
                <ul>
                    <li><strong>Action:</strong> Plain JavaScript objects that represent what happened. They are dispatched to the store.</li>
                    <li><strong>Reducer:</strong> Functions that specify how the application's state changes in response to actions. They calculate the new state based on the previous state and the action dispatched.</li>
                    <li><strong>Dispatch:</strong> A function used to send actions to the Redux store.</li>
                    <li><strong>Payload:</strong> The data associated with an action. It is a property of the action object.</li>
                    <li><strong>Provider:</strong> A React component that provides the Redux store to its child components.</li>
                    <li><strong>Initial State:</strong> The initial state of the Redux store when the application starts.</li>
                </ul>

                <h2>How Redux Works:</h2>
                <p>When an action is dispatched, it flows through all the reducers, which determine how the state should change. The reducers then return a new state object, which updates the store. This triggers the React components connected to the store to re-render.</p>
                <p>When we click at something it Dispatches the action that calls the reducers function that updates the state</p>

                <h2>Redux Toolkit (RTK):</h2>
                <p>Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux tasks, such as store setup, defining reducers, and writing immutable update logic.</p>

                <h2>Example: Cricketer List</h2>
                <p>Below is an example of a React Redux application that allows users to add, remove, update, and clear a list of cricketers using Redux state management.</p>

                <h3>appStore.js</h3>
                <pre>
                        {`import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;`}
                </pre>

                <h3>cartSlice.js</h3>
                <pre>
                    {`import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {}
    },
    reducers: {
        addItem: (state, action) => {
            const index = Object.keys(state.items).length;
            state.items[index] = action.payload;
        },
        removeItem: (state, action) => {
            delete state.items[action.payload];
        },
        updateItem: (state, action) => {
            const { key, value } = action.payload;
            if (state.items[key] !== undefined) {
                state.items[key] = value;
            }
        },
        clearItem: (state) => {
            state.items = {};
        }
    }
});

export const { addItem, removeItem, updateItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;`}
                </pre>

                <h3>index.js</h3>
                <pre>
                    {`import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Package from './Components/Package';
import Component from './Components/Component';
import DOM from './Components/DOM';
import HooksFAQ from './Components/Hooks';
import { createContext } from 'react';
import ReactRouter from './Components/ReactRouter';
import PropsDrilling from './Components/PropsDrilling';
import Context from './Components/Context';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import ReactRedux from './Components/ReactRedux';
import Redux from './Components/Redux';

const LazyLoading = lazy(() => import('./Components/LazyLoading'));
// Lazy Loading. that's how we can import for Lazy Loading / Dynamic Bundling / Chunking

export const userContext = createContext();


const myRouter = createBrowserRouter([{
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
  element: <Context />
}, {
  path: 'redux',
  element: <ReactRedux />
}, {
  path: "/lazyloading",
  element:
    <Suspense fallback={<h1> Loading... </h1>}>
      <LazyLoading />
    </Suspense>
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <userContext.Provider value={{ name: 'Kartik Dhumal', info: 'This is my React info' }}>
      <React.StrictMode>
        <RouterProvider router={myRouter} />
      </React.StrictMode>
    </userContext.Provider>
  </Provider>
);`}
                </pre>

                <h3>Redux.jsx</h3>
                <pre>
                    {`import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearItem, removeItem, updateItem } from '../utils/cartSlice';
import '../styles/Redux.css';

function Redux() {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateValue, setUpdateValue] = useState('');
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        if (newItem.trim() !== '') {
            dispatch(addItem(newItem));
            setNewItem('');
        }
    };

    const handleRemove = (index) => {
        dispatch(removeItem(index));
    };

    const handleUpdate = () => {
        if (updateValue.trim() !== '') {
            dispatch(updateItem({ key: updateIndex, value: updateValue }));
            setUpdateIndex(null);
            setUpdateValue('');
        }
    };

    const handleClear = () => {
        dispatch(clearItem());
    };

    return (
        <div className="container">
            <h1>Cricketer List</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Enter the name of the cricketer"
                />
                <button onClick={handleAdd}>Add Cricketer</button>
            </div>
            <div className="buttons">
                <button onClick={handleClear}>Clear All</button>
            </div>
            <h1>{Object.keys(cartItems).length > 0 ? 'Total Players : ' + Object.keys(cartItems).length : "No Players"}</h1>
            <ul>
                {Object.entries(cartItems).map(([key, item]) => (
                    <li key={key} className="item">
                        <span>{item}</span>
                        <div>
                            <button onClick={() => setUpdateIndex(key)}>Update</button>
                            <button onClick={() => handleRemove(key)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            {updateIndex !== null && (
                <div className="update-section">
                    <input
                        type="text"
                        value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)}
                        placeholder="Enter new value"
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>
    );
}

export default Redux;`}
                </pre>
            </div>
        </div>
    );
}

export default ReactRedux;
