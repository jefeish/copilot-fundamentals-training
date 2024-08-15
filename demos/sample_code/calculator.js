/**
 * @description: A calculator class that can add, subtract, multiply, modulo, 
 *              exponent and divide by taking in two numbers. It throws an error 
 *              if the operator is invalid or if the second number is zero and 
 *              the operator is division.  
 *  
 * @param {number} num1
 * @param {number} num2
 * 
 * @returns {number} result of the operation
 */

class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    modulo(num1, num2) {
        return num1 % num2;
    }

    exponent(num1, num2) {
        return num1 ** num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error('Division by zero');
        }
        return num1 / num2;
    }

    calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return this.add(num1, num2);
            case '-':
                return this.subtract(num1, num2);
            case '*':
                return this.multiply(num1, num2);
            case '%':
                return this.modulo(num1, num2);
            case '^':
                return this.exponent(num1, num2);
            case '/':
                return this.divide(num1, num2);
            default:
                throw new Error('Invalid operator');
        }
    }
}

// export the Calculator class
module.exports = Calculator;