import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Navbar from "../Navbar"
import { BrowserRouter, json } from "react-router-dom"
import Toggle from '../Toggle'
import { Component, act } from "react"

// const sum = (a, b) => {
//     return a + b
// }

// test('sum', () => {
//     expect(sum(12, 32)).toBe(44); // This line isknown as Assertion
// })

// You can also use it or test. "It" is just alias of test. Both are same
// test('Should load hooks componet', () => {
//     render(<Home />); // Render
//     const heading = screen.getByRole("heading");  // Query
//     expect(heading).toBeInTheDocument(); // Assertion
// })

// test('Should show Kartik in Home', () => {
//     render(<Home />); // Render
//     const heading = screen.getByText("Submit");  // Query
//     expect(heading).toBeInTheDocument(); // Assertion
// })

// it("Navbar should load", () => {
//     render(
//         <BrowserRouter>
//             <Navbar />
//         </BrowserRouter>
//     );
// })

// When any components contains <Link> then we have to wrap with <BrowserRouter>
// Same as if any components contains Redux we have to wrap with <Provider> with store props

// how to get any Element

// const heading = screen.getByText("button");

// const button = screen.getByRole("button");

// const nameBybutton = screen.getByRole("button" , {name : "Submit"}); // get By Role element name

// test('Change login to logout check', () => {
//     render(<Toggle />);
//     const loginbutton = screen.getByRole("button", { name: "Login" });
//     fireEvent.click(loginbutton);
//     const logoutbutton = screen.getByRole("button", { name: "Logout" });
//     expect(logoutbutton).toBeInTheDocument();
// })

// test('SHould load Component with props', () => {
//     render(<Component info={data} />);
//     const name = screen.getByText('My Name is Kartik');
//     name.toBeInTheDocument();
// })
// data = {
//     1: "kartik",
//     2: "dhumal"
// };

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(data);
//         }
//     })
// })

// it('Should render the component', async () => {
//     await act(async () => render(
//         <BrowserRouter>
//             <Component />
//         </BrowserRouter>
//     ))
// })

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import SearchComponent from './SearchComponent';

// const items = [
//     { name: 'Cheeseburger', rating: 4.6 },
//     { name: 'Veggie Burger', rating: 4.7 },
//     { name: 'Chicken Burger', rating: 4.8 },
//     { name: 'Fish Burger', rating: 4.5 },
//     { name: 'Pizza', rating: 4.0 },
//     { name: 'Pasta', rating: 3.9 }
// ];

// describe('SearchComponent', () => {
//     beforeAll(() => {
//         console.log('Running setup before all tests...');
//     });

//     beforeEach(() => {
//         render(<SearchComponent items={items} />);
//     });

//     test('filters and displays 4 cards with "burger"', () => {
//         const input = screen.getByPlaceholderText('Search');
//         const button = screen.getByText('Search');
//         fireEvent.change(input, { target: { value: 'burger' } });
//         fireEvent.click(button);
//         const cards = screen.getAllByText(/burger/i);
//         expect(cards).toHaveLength(4);
//     });

//     test('filters and displays top-rated restaurants', () => {
//         const topRatedButton = screen.getByText('Top Rated Restaurants');
//         fireEvent.click(topRatedButton);
//         const cards = screen.getAllByText(/burger/i);
//         expect(cards).toHaveLength(4);
//     });

//     afterEach(() => {
//         console.log('Cleaning up after each test...');
//     });

//     afterAll(() => {
//         console.log('Running teardown after all tests...');
//     });
// });

// test('adds item to cart when Add button is clicked', () => {
//     render(<Product />);
//     const addButton = screen.getByText('Add');
//     expect(screen.getByText('Cart Item : 0')).toBeInTheDocument();
//     fireEvent.click(addButton);
//     expect(screen.getByText('Cart Item : 1')).toBeInTheDocument();
// });