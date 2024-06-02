import React from 'react';
import '../styles/Testing.css';

function Testing() {
    return (
        <div className="testing-container">
            <h2>Introduction to Testing in React</h2>
            <p>
                Testing in React is essential for ensuring that your application behaves as expected and remains stable
                across changes. Two popular tools used for testing React applications are React Testing Library and Jest.
            </p>

            <h2>React Testing Library</h2>
            <p>
                React Testing Library is a lightweight and simple testing utility for React applications. It focuses on
                enabling developers to write tests that closely resemble how users interact with the application. Instead
                of relying on implementation details or internal component structure, React Testing Library encourages
                testing from the perspective of the user. It provides utility functions to interact with React components
                and the DOM in a way that mimics real user behavior, making tests more robust and maintainable.
            </p>

            <h2>Jest</h2>
            <p>
                Jest is a JavaScript testing framework developed by Facebook. It is designed to be easy to set up and use,
                with a focus on simplicity and developer experience. Jest is commonly used for testing JavaScript code,
                including React applications. It comes bundled with everything needed for testing, including test runners,
                assertion libraries, and mocking capabilities. Jest provides features like snapshot testing, mocking modules,
                and parallel test execution, making it a versatile tool for testing JavaScript applications.
            </p>

            <h2>Types of Testing (Developer)</h2>
            <ul>
                <li>Unit Testing</li>
                <li>Integration testing</li>
                <li>End to End testing</li>
            </ul>

            <h2>Steps to Configure Testing</h2>
            <ul>
                <li>Install React testing library</li>
                <li>Install Jest</li>
                <li>Install Babel Configuration</li>
                <li>Configure Babel in <code>babel.config.js</code></li>
                <li>Configure Parcel Config file to disable default babel transpilation</li>
                <li>Jest Configuration - <code>npx jest --init</code></li>
                <li>Install Jsdom library</li>
                <li>Install <code>npm i @babel/preset-react</code> - to make JSX work in test cases</li>
                <li>Include <code>@babel/preset-react</code> inside your babel Configuration</li>
                <li>Install <code>@testing-library/jest-dom</code></li>
            </ul>

            <div>
                <h1>Screen Functions</h1>
                <ol>
                    <li>
                        <p><strong>getByAltText</strong> - Retrieves an element from the document by its `alt` attribute text. It returns the first matching element.</p>
                    </li>
                    <li>
                        <p><strong>getAllByAltText</strong> - Retrieves all elements from the document that have the specified `alt` attribute text. It returns an array of elements.</p>
                    </li>
                    <li>
                        <p><strong>queryByAltText</strong> - Retrieves an element from the document by its `alt` attribute text. It returns the first matching element or null if none is found.</p>
                    </li>
                    <li>
                        <p><strong>queryAllByAltText</strong> - Retrieves all elements from the document that have the specified `alt` attribute text. It returns an array of elements or an empty array if none are found.</p>
                    </li>
                    <li>
                        <p><strong>getByTestId</strong> - Retrieves an element from the document by its `data-testid` attribute value. It returns the first matching element.</p>
                    </li>
                    <li>
                        <p><strong>getAllByTestId</strong> - Retrieves all elements from the document that have the specified `data-testid` attribute value. It returns an array of elements.</p>
                    </li>
                    <li>
                        <p><strong>queryByTestId</strong> - Retrieves an element from the document by its `data-testid` attribute value. It returns the first matching element or null if none is found.</p>
                    </li>
                    <li>
                        <p><strong>queryAllByTestId</strong> - Retrieves all elements from the document that have the specified `data-testid` attribute value. It returns an array of elements or an empty array if none are found.</p>
                    </li>
                    <li>
                        <p><strong>getByText</strong> - Retrieves an element from the document by its visible text content. It returns the first matching element.</p>
                    </li>
                    <li>
                        <p><strong>getAllByText</strong> - Retrieves all elements from the document that have the specified visible text content. It returns an array of elements.</p>
                    </li>
                    <li>
                        <p><strong>queryByText</strong> - Retrieves an element from the document by its visible text content. It returns the first matching element or null if none is found.</p>
                    </li>
                    <li>
                        <p><strong>queryAllByText</strong> - Retrieves all elements from the document that have the specified visible text content. It returns an array of elements or an empty array if none are found.</p>
                    </li>
                </ol>
            </div>


            <div>
                <h1>Testing Examples</h1>

                <h2>1. Navbar Component Test</h2>
                <p>This test ensures that the Navbar component renders properly within a BrowserRouter.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';

test('Navbar should load', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
});`}
                    </code>
                </pre>

                <h2>2. Toggle Component Test</h2>
                <p>This test verifies the functionality of a Toggle component by simulating a click event and checking if the button changes from 'Login' to 'Logout'.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toggle from '../Toggle';

test('Change login to logout check', () => {
    render(<Toggle />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
});`}
                    </code>
                </pre>

                <h2>3. Component with Props Test</h2>
                <p>This test verifies the rendering of a component with props.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component from '../Component';

test('Should load Component with props', () => {
    render(<Component info={{ 1: "kartik", 2: "dhumal" }} />);
    const name = screen.getByText('My Name is Kartik');
    expect(name).toBeInTheDocument();
});`}
                    </code>
                </pre>

                <h2>4. Async Component Rendering Test</h2>
                <p>This test ensures the asynchronous rendering of a component.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Component from '../Component';

test('Should render the component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    ));
});`}
                    </code>
                </pre>

                <h2>5. Event Handling Test</h2>
                <p>This test verifies the event handling in a component.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toggle from '../Toggle';

test('Change login to logout check', () => {
    render(<Toggle />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
});`}
                    </code>
                </pre>

                <h2>6. Component with Props Test and Fetch Mock</h2>
                <p>This test verifies the rendering of a component with props and mocks a fetch call to simulate asynchronous data fetching.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component from '../Component';

test('Should load Component with props', async () => {
    const data = { 1: "kartik", 2: "dhumal" };
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(data);
            }
        })
    });

    render(<Component info={data} />);
    const name = await screen.findByText('My Name is Kartik');
    expect(name).toBeInTheDocument();
});`}
                    </code>
                </pre>

                <h2>7. SearchComponent Tests</h2>
                <p>These tests verify the functionality of the SearchComponent.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchComponent from './SearchComponent';

const items = [
    { name: 'Cheeseburger', rating: 4.6 },
    { name: 'Veggie Burger', rating: 4.7 },
    { name: 'Chicken Burger', rating: 4.8 },
    { name: 'Fish Burger', rating: 4.5 },
    { name: 'Pizza', rating: 4.0 },
    { name: 'Pasta', rating: 3.9 }
];

describe('SearchComponent', () => {
    beforeAll(() => {
        console.log('Running setup before all tests...');
    });

    beforeEach(() => {
        render(<SearchComponent items={items} />);
    });

    test('filters and displays 4 cards with "burger"', () => {
        const input = screen.getByPlaceholderText('Search');
        const button = screen.getByText('Search');
        fireEvent.change(input, { target: { value: 'burger' } });
        fireEvent.click(button);
        const cards = screen.getAllByText(/burger/i);
        expect(cards).toHaveLength(4);
    });

    test('filters and displays top-rated restaurants', () => {
        const topRatedButton = screen.getByText('Top Rated Restaurants');
        fireEvent.click(topRatedButton);
        const cards = screen.getAllByText(/burger/i);
        expect(cards).toHaveLength(4);
    });

    afterEach(() => {
        console.log('Cleaning up after each test...');
    });

    afterAll(() => {
        console.log('Running teardown after all tests...');
    });
});`}
                    </code>
                </pre>

                <h2>8. Cart Item Test</h2>
                <p>This test verifies that an item is added to the cart when the 'Add' button is clicked.</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';

test('adds item to cart when Add button is clicked', () => {
    render(<Product />);
    const addButton = screen.getByText('Add');
    expect(screen.getByText('Cart Item : 0')).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(screen.getByText('Cart Item : 1')).toBeInTheDocument();
});`}
                    </code>
                </pre>

            </div>
        </div>
    );
}

export default Testing;
