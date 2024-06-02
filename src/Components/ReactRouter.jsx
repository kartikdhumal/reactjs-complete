import React from 'react';
import '../styles/router.css'; // Import your router styling here

function ReactRouter() {
  return (
    <div className="router-container">
      <h1 className="router-title">React Router Documentation</h1>

      <pre>
        npm i -D react-router-dom@latest
      </pre>
      <div className="router-section">
        <h2 className="router-subtitle">BrowserRouter</h2>
        <p className="router-description">
          The BrowserRouter component enables declarative routing in React applications by mapping specific
          routes to components. It utilizes the HTML5 history API to synchronize the UI with the URL, allowing
          users to navigate between different views without full page reloads.
        </p>
        <p className="router-description">
          It's essential to use the BrowserRouter component once at the top level of your application to enable
          routing functionality. This ensures that the routing context is available to all components within
          your application, allowing you to define and manage routes effectively.
        </p>
        <p className="router-description">
          To implement routing in your React application, you should wrap your root component with BrowserRouter
          as follows:
        </p>
        <pre>
          {`import { BrowserRouter } from 'react-router-dom';`}
          <br />
          {`ReactDOM.render(`}
          <br />
          {`  <BrowserRouter>`}
          <br />
          {`    <App />`}
          <br />
          {`  </BrowserRouter>,`}
          <br />
          {`  document.getElementById('root')`}
          <br />
          {`);`}
        </pre>
        <p className="router-description">
          This ensures that all child components of App have access to the routing context provided by BrowserRouter.
        </p>
      </div>


      <div className="router-section">
        <h2 className="router-subtitle">Route</h2>
        <p className="router-description">
          The Route component is used to define a mapping between a URL path and
          the component you want to render when the path matches the current URL.
        </p>
      </div>

      <div className="router-section">
        <h2 className="router-subtitle">Link</h2>
        <p className="router-description">
          The Link component is used to create hyperlinks for navigating between
          different routes in your application. It's similar to the anchor tag <code>{'<a>'}</code>
          but it prevents the browser from performing a full page refresh.
        </p>
        <ul>
          <li>
            A Link is a wrapper over anchor tag
          </li>
          <pre>
            {`<Link to="/login"> Login </Link>`}
          </pre>
        </ul>
      </div>

      <pre>
        <h2 className='router-subtitle'>Example 1</h2>
        {`
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import App from './App';
        import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
        import Package from './Components/Package';
        import Component from './Components/Component';
        import DOM from './Components/DOM';
        import HooksFAQ from './Components/Hooks';
        import ReactRouter from './Components/ReactRouter';
        
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
        },{
          path: '/router',
          element: <ReactRouter />,
        }])
        
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <RouterProvider router={myRouter} />
          </React.StrictMode>
        );        
        `}
      </pre>
      <pre>
        <h2 className='router-subtitle'>Example 2</h2>
        {`
        import ReactDOM from "react-dom/client";
        import { BrowserRouter, Routes, Route } from "react-router-dom";
        import Layout from "./pages/Layout";
        import Home from "./pages/Home";
        import Blogs from "./pages/Blogs";
        import Contact from "./pages/Contact";
        import NoPage from "./pages/NoPage";
        
        export default function App() {
          return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
        `}
      </pre>
      <div className="router-section">
        <h2 className="router-subtitle">Routes</h2>
        <p className="router-description">
          The Routes component is used to define multiple routes within your application.
          Each Route component specifies a path and the corresponding component to render when that path matches the URL.
        </p>
        <pre>
          {`             <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
             </Routes>`}
        </pre>
      </div>

      <div className="router-section">
        <h2 className="router-subtitle">Outlet</h2>
        <p className="router-description">
          The Outlet component is used to render nested routes inside parent route components.
          It acts as a placeholder where child routes are rendered.
        </p>
        <pre>
          {`import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default App;
`}
        </pre>
        <pre>
          {`
<Route path="/products" element={<Products />}>
  <Route path="product/:id" element={<ProductDetails />} />
</Route>
          `}
        </pre>
        <p className="router-description">
          In this example, ProductDetails component will be rendered inside the Outlet of the Products component
          when the path matches "/products/product/:id".
        </p>
      </div>

      <div className="router-section">
        <h2 className="router-subtitle">Send Params</h2>
        <p className="router-description">
          In React Router, you can send parameters (commonly referred to as URL params) within the URL path
          to dynamically render components based on the provided data. This is often used for scenarios where
          you need to display specific information or details for a particular resource.
        </p>
        <p className="router-description">
          The Route component is utilized to define a mapping between a URL path and the component you want to
          render when the path matches the current URL. To include parameters in the URL path, you can specify
          them using a colon followed by the parameter name (e.g., ":id").
        </p>
        <p className="router-description">
          For example, consider a scenario where you have a route for displaying product details with a dynamic
          product ID:
        </p>
        <pre>
          {`<Route path="product/:id" element={<ProductDetails />} />`}
        </pre>
        <p className="router-description">
          In this case, ":id" acts as a placeholder for the actual product ID value. When the URL matches the
          specified path pattern, React Router extracts the value of the "id" parameter from the URL and passes
          it as a prop to the ProductDetails component, allowing you to retrieve and utilize the product ID
          within the component.
        </p>
      </div>

    </div>
  );
}

export default ReactRouter;
