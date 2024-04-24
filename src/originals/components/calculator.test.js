// create unit tests for the Calculator component using
// the following test cases:
// click on numbers 1-3
// click on the decimal point
// click on the clear button
// add two numbers ; subtract two numbers ; multiply two numbers ; divide two numbers


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';


test('renders the calculator', () => {
   const { getByTestId } = render(<Calculator />);
   const calculator = getByTestId('display');
   expect(calculator).toBeInTheDocument();
   });


test('clicking on numbers 1-9', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('1'));
   expect(display).toHaveTextContent('1');
   fireEvent.click(getByText('2'));
   expect(display).toHaveTextContent('12');
   fireEvent.click(getByText('3'));
   expect(display).toHaveTextContent('123');
});


test('clicking on the decimal point', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('.'));
   expect(display).toHaveTextContent('0.');
});


test('clicking on the clear button', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('C'));
   expect(display).toHaveTextContent('0');
});


test('adding two numbers', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('1'));
   fireEvent.click(getByText('+'));
   fireEvent.click(getByText('2'));
   fireEvent.click(getByText('='));
   expect(display).toHaveTextContent('3');
});


test('subtracting two numbers', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('3'));
   fireEvent.click(getByText('-'));
   fireEvent.click(getByText('1'));
   fireEvent.click(getByText('='));
   expect(display).toHaveTextContent('2');
});


test('multiplying two numbers', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('3'));
   fireEvent.click(getByText('*'));
   fireEvent.click(getByText('2'));
   fireEvent.click(getByText('='));
   expect(display).toHaveTextContent('6');
});


test('dividing two numbers', () => {
   const { getByText, getByTestId } = render(<Calculator />);
   const display = getByTestId('display');
   fireEvent.click(getByText('6'));
   fireEvent.click(getByText('/'));
   fireEvent.click(getByText('2'));
   fireEvent.click(getByText('='));
   expect(display).toHaveTextContent('3');
});
