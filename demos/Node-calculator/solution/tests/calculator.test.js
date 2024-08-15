/**
 * @description Test cases for calculator.js
 * This class provides unit tests for all the operations 
 * in my calculator.js file.
 */

// import the calculator function
const Calculator = require('../calculator');

describe('Calculator', () => {
	let calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	test('should add two numbers correctly', () => {
		expect(calculator.add(1, 2)).toBe(3);
	});

	test('should subtract two numbers correctly', () => {
		expect(calculator.subtract(5, 3)).toBe(2);
	});

	test('should multiply two numbers correctly', () => {
		expect(calculator.multiply(2, 3)).toBe(6);
	});

	test('should modulo two numbers correctly', () => {
		expect(calculator.modulo(5, 2)).toBe(1);
	});

	test('should exponentiate two numbers correctly', () => {
		expect(calculator.exponent(2, 3)).toBe(8);
	});

	test('should divide two numbers correctly', () => {
		expect(calculator.divide(6, 2)).toBe(3);
	});

	test('should throw error when dividing by zero', () => {
		expect(() => calculator.divide(6, 0)).toThrow('Division by zero');
	});

	test('should calculate addition correctly', () => {
		expect(calculator.calculate(1, 2, '+')).toBe(3);
	});

	test('should calculate subtraction correctly', () => {
		expect(calculator.calculate(5, 3, '-')).toBe(2);
	});

	test('should calculate multiplication correctly', () => {
		expect(calculator.calculate(2, 3, '*')).toBe(6);
	});

	test('should calculate modulo correctly', () => {
		expect(calculator.calculate(5, 2, '%')).toBe(1);
	});

	test('should calculate exponentiation correctly', () => {
		expect(calculator.calculate(2, 3, '^')).toBe(8);
	});

	test('should calculate division correctly', () => {
		expect(calculator.calculate(6, 2, '/')).toBe(3);
	});

	test('should throw error for invalid operator', () => {
		expect(() => calculator.calculate(6, 2, 'invalid')).toThrow('Invalid operator');
	});
});

describe('Calculator Edge Cases', () => {
    let calculator;

	beforeEach(() => {
		calculator = new Calculator();
    });
    
	test('should add negative numbers correctly', () => {
		expect(calculator.add(-1, -2)).toBe(-3);
	});

	test('should subtract negative numbers correctly', () => {
		expect(calculator.subtract(-5, -3)).toBe(-2);
	});

	test('should multiply by zero correctly', () => {
		expect(calculator.multiply(0, 3)).toBe(0);
		expect(calculator.multiply(3, 0)).toBe(0);
	});

	test('should handle large numbers correctly', () => {
		expect(calculator.add(1e10, 1e10)).toBe(2e10);
		expect(calculator.subtract(1e10, 1e9)).toBe(9e9);
		expect(calculator.multiply(1e5, 1e5)).toBe(1e10);
		expect(calculator.divide(1e10, 1e5)).toBe(1e5);
		expect(calculator.exponent(10, 6)).toBe(1e6);
		expect(calculator.modulo(1e10, 1e9)).toBe(0);
	});

	test('should handle floating point numbers correctly', () => {
		expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3, 5);
		expect(calculator.subtract(0.5, 0.3)).toBeCloseTo(0.2, 5);
		expect(calculator.multiply(0.2, 0.3)).toBeCloseTo(0.06, 5);
		expect(calculator.divide(0.3, 0.1)).toBeCloseTo(3, 5);
		expect(calculator.exponent(0.2, 3)).toBeCloseTo(0.008, 5);
		expect(calculator.modulo(0.5, 0.2)).toBeCloseTo(0.1, 5);
	});
});

