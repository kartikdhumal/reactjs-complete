import React, { StrictMode } from 'react';
import '../styles/Package.css'

const Package = () => {
    return (
        <div className="container">
            <h1>Project Dependencies and Tools</h1>
            <ul>
                <li>
                    <strong>@testing-library/jest-dom:</strong> Provides custom jest matchers that make it easier to test DOM nodes. It allows you to write more expressive tests for your React components.
                </li>
                <li>
                    <strong>@testing-library/react:</strong> Offers utilities for testing React components, making it simpler to find elements, fire events, and verify outcomes.
                </li>
                <li>
                    <strong>@testing-library/user-event:</strong> Simulates user interactions like typing, clicking, and other events to make tests more accurate and comprehensive.
                </li>
                <li>
                    <strong>react:</strong> The core library for building user interfaces. React components let you split the UI into independent, reusable pieces.
                </li>
                <li>
                    <strong>react-dom:</strong> The package that provides DOM-specific methods for React, enabling the rendering of React components in the browser.
                </li>
                <li>
                    <strong>react-scripts:</strong> Part of Create React App, this package provides a set of scripts to help you develop, build, and test your React applications.
                </li>
                <li>
                    <strong>web-vitals:</strong> A library for measuring essential web performance metrics, which helps you understand and improve the performance of your web app.
                </li>
                <li>
                    Note : The all installed packages will be showing in dependency in package.json
                </li>
            </ul>

            <h2>NPM and NPX</h2>
            <p>
                <strong>NPM (Node Package Manager):</strong> NPM is a package manager for JavaScript, used to install, share, and manage dependencies in your project. You can install packages using the command <code>npm install package-name</code>.
            </p>
            <p>
                <strong>NPX (Node Package Execute):</strong> NPX is a tool that comes with NPM (version 5.2.0 and later) and allows you to run Node.js packages without having to install them globally. You can use it to execute commands directly from the npm registry. For example, <code>npx create-react-app my-app</code> runs the Create React App tool without needing to install it globally.
            </p>

            <h2>Project File Structure</h2>
            <p>
                <strong>node_modules:</strong> This directory contains all the installed npm packages. It is generated automatically when you run <code>npm install</code> and should not be modified manually.
            </p>
            <p>
                <strong>package.json:</strong> This file contains metadata about your project, including its dependencies, scripts, version, and more. It's essential for managing project dependencies and scripts.
            </p>
            <p>
                <strong>package-lock.json:</strong> Automatically generated file that locks the versions of dependencies installed in your project, ensuring consistent installs across different environments.
            </p>
            <p>
                <strong>src/:</strong> The source directory where your application's code resides. Typically includes subdirectories like components, assets, and styles.
            </p>
            <p>
                <strong>public/:</strong> Contains static files such as the HTML file, images, and other assets that do not require processing by Webpack.
            </p>
            <h2> {`<StrictMode></StrictMode>`} </h2>
            <p><strong>{`<StrictMode>`} </strong>lets you find common bugs in your components early during development.</p>
            <p>Use StrictMode to enable additional development behaviors and warnings for the component tree inside:</p>
            <h2>Parcel</h2>
            <p>
                <strong>Parcel:</strong> Parcel is a web application bundler, similar to Webpack, but designed to be simpler to configure. It takes care of bundling JavaScript, CSS, HTML, and more, with minimal setup. Parcel uses smart defaults to infer your build setup, so you can start building right away without having to configure a build process manually.
            </p>
            <ul>
                <li>Dev Build</li>
                <li>Local Server</li>
                <li>HMR (Hot Module Replacement)</li>
                <li>File Watching Algorithm written in C++</li>
                <li>Caching</li>
                <li>Faster Builds</li>
                <li>Image Optimization</li>
                <li>Minification</li>
                <li>Bundling</li>
                <li>Compression</li>
                <li>Consistent Hashing</li>
                <li>Code Splitting</li>
                <li>Differential Bundling support for older browsers</li>
                <li>Diagnostics</li>
                <li>Error Handling</li>
                <li>HTTPS</li>
                <li>Tree Shaking (removes unused code)</li>
                <li>Different dev and prod bundles</li>
            </ul>
        </div>
    );
}

export default Package;
