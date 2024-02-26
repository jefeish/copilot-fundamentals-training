import React, { useState } from 'react';
import './calculator.css';

let number1 = 0;
let number2 = 0;
let operator = '';
let result = 0;
let isNewNumber = false;

function Calculator() {

    const [displayValue, setDisplayValue] = useState('0');

    const handleNumberClick = (number) => {
        const decimalRegex = /\./;
        let hasDecmal = decimalRegex.test(displayValue); // true

        // check if displayValue contains a '.'
        // if it does, don't add another '.'
        if (hasDecmal && number === '.') {
            return;
        }

        if (displayValue === '0' && number !== '.') {
            setDisplayValue(number.toString());
        } else if (!isNewNumber) {
            setDisplayValue(displayValue + number.toString());
        } else {
            setDisplayValue(number.toString());
            isNewNumber = false;
        }
    };

    const handleKeyClick = (char) => {
        const operatorRegex = /[\+\-\*\/\%\^]/;
        const isOperator = operatorRegex.test(char); // true

        // set the operator
        if (isOperator) {
            operator = char;
            if (operator === '^') {
                setDisplayValue(number1 * number1);
                isNewNumber = false;
            } else {
                number1 = parseFloat(displayValue);
                isNewNumber = true;
            }
            return
        }

        // calculate the result
        if (char === '=') {
            number2 = parseFloat(displayValue);

            // perform the calculation

            // round the result down to 2 decimal places
            result = Math.round(result * 100) / 100;
            setDisplayValue(parseFloat(result).toString());
            isNewNumber = true;
            return
        }

        // clear the calculator
        if (char === 'C') {
            setDisplayValue('0');
            number1 = 0;
            number2 = 0;
            result = 0;
            return;
        }

        if (isNewNumber) {
            setDisplayValue(char);
            isNewNumber = false;
        } else {
            setDisplayValue(displayValue + char);
        }
    };

    return (
        <div data-testid="calculator" className="calculator">
            <div className="display">{displayValue}</div>
            <div>
                <button className="key" onClick={() => handleNumberClick(1)}>1</button>
                <button className="key" onClick={() => handleNumberClick(2)}>2</button>
                <button className="key" onClick={() => handleNumberClick(3)}>3</button>
                <button className="operator" onClick={() => handleKeyClick('+')}>+</button>
                <button className="operator" onClick={() => handleKeyClick('/')}>/</button>
            </div>
            <div>
                <button className="key" onClick={() => handleNumberClick(4)}>4</button>
                <button className="key" onClick={() => handleNumberClick(5)}>5</button>
                <button className="key" onClick={() => handleNumberClick(6)}>6</button>
                <button className="operator" onClick={() => handleKeyClick('-')}>-</button>
                <button className="operator" onClick={() => handleKeyClick('*')}>*</button>
            </div>
            <div>
                <button className="key" onClick={() => handleNumberClick(7)}>7</button>
                <button className="key" onClick={() => handleNumberClick(8)}>8</button>
                <button className="key" onClick={() => handleNumberClick(9)}>9</button>
                <button className="operator" onClick={() => handleKeyClick('%')}>%</button>
                <button className="operator" onClick={() => handleKeyClick('^')}>^2</button>
            </div>
            <div>
                <button className="key" onClick={() => handleNumberClick('.')}>.</button>
                <button className="key" onClick={() => handleNumberClick(0)}>0</button>
                <button className="key" onClick={() => handleKeyClick('C')}>C</button>
                <button className="key, button-span-3" onClick={() => handleKeyClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;