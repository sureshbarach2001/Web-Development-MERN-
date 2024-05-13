// Task 1
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Calculator App", () => {
  test("sums two numbers correctly", () => {
    render(<App />);
    const firstInput = screen.getByPlaceholderText("First Number");
    const secondInput = screen.getByPlaceholderText("Second Number");
    const sumButton = screen.getByText("SUM");

    fireEvent.change(firstInput, { target: { value: "5" } });
    fireEvent.change(secondInput, { target: { value: "7" } });
    fireEvent.click(sumButton);

    expect(screen.getByPlaceholderText("Final Result").value).toBe("12");
  });

  test("multiplies two numbers correctly", () => {
    render(<App />);
    const firstInput = screen.getByPlaceholderText("First Number");
    const secondInput = screen.getByPlaceholderText("Second Number");
    const multiplyButton = screen.getByText("MULTIPLY");

    fireEvent.change(firstInput, { target: { value: "5" } });
    fireEvent.change(secondInput, { target: { value: "7" } });
    fireEvent.click(multiplyButton);

    expect(screen.getByPlaceholderText("Final Result").value).toBe("35");
  });

  test("divides two numbers correctly", () => {
    render(<App />);
    const firstInput = screen.getByPlaceholderText("First Number");
    const secondInput = screen.getByPlaceholderText("Second Number");
    const divideButton = screen.getByText("DIVIDE");

    fireEvent.change(firstInput, { target: { value: "10" } });
    fireEvent.change(secondInput, { target: { value: "2" } });
    fireEvent.click(divideButton);

    expect(screen.getByPlaceholderText("Final Result").value).toBe("5");
  });

});


// Task 2
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// describe('UI Elements', () => {
//   test('renders h1 tag with correct text', () => {
//     render(<App />);
//     const h1Element = screen.getByText('Calculator Testing');
//     //const h1Element = screen.getByHTML("h1");
//     expect(h1Element).toBeInTheDocument();
//   });

//   test('renders h2 tag with correct text', () => {
//     render(<App />);
//     const h2Element = screen.getByText('Enter Numbers');
//     expect(h2Element).toBeInTheDocument();
//   });

//   test('renders h3 tag with correct text', () => {
//     render(<App />);
//     const h3Element = screen.getByText('Operation Buttons');
//     expect(h3Element).toBeInTheDocument();
//   });

//   test('renders img tag with correct alt attribute', () => {
//     render(<App />);
//     const imgElement = screen.getByAltText('Calculator');
//     expect(imgElement).toBeInTheDocument();
//   });
// });



// Task 3
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// describe('Input Boxes', () => {
//   test('renders input boxes with correct attributes and placeholders', () => {
//     render(<App />);
//     const firstInput = screen.getByPlaceholderText('Enter 1 Number');
//     expect(firstInput).toBeInTheDocument();
//     expect(firstInput).toHaveAttribute('type', 'number');
//     expect(firstInput).toHaveAttribute('id', 'userid');
//     expect(firstInput).toHaveAttribute('name', 'username');

//     const secondInput = screen.getByPlaceholderText('Enter 2 Number');
//     expect(secondInput).toBeInTheDocument();
//     expect(secondInput).toHaveAttribute('type', 'number');
//     expect(secondInput).toHaveAttribute('id', 'fid');
//     expect(secondInput).toHaveAttribute('name', 'first');

//     const thirdInput = screen.getByPlaceholderText('Enter 3 Number');
//     expect(thirdInput).toBeInTheDocument();
//     expect(thirdInput).toHaveAttribute('type', 'number');
//     expect(thirdInput).toHaveAttribute('id', 'sid');
//     expect(thirdInput).toHaveAttribute('name', 'second');
//   });
// });


// Task 4

