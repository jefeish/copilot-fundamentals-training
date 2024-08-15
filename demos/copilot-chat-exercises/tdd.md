# TDD approach to a Java Calculator

NOTE: Start the session with a standard `/test` approach ...to show what Copilot does.

## Requirements

- Project
- Project src/ folder
- Maven build support (pom.xml)

## TDD Command

![copilot](images/copilot-chat.png)

```
create test cases for a java calculator class with basic operations, this is for a TDD approach
```

:warning: **Note:** To effectively use a TDD approach with Copilot, avoid using the `/test` command, as it relies on an existing implementation class to generate tests.

### Sample outcome

<details><summary>Details</summary>
<p>

Sure, let's start by outlining the test cases for a basic calculator class. We'll assume the calculator has methods for addition, subtraction, multiplication, and division. Here's the pseudocode for the test cases:

**1. Addition Test Cases**

- Test addition of two positive numbers.
- Test addition of two negative numbers.
- Test addition of a positive and a negative number.
- Test addition of zero.

**2. Subtraction Test Cases**

- Test subtraction of two positive numbers.
- Test subtraction of two negative numbers.
- Test subtraction of a positive and a negative number.
- Test subtraction of zero.

**3. Multiplication Test Cases**

- Test multiplication of two positive numbers.
- Test multiplication of two negative numbers.
- Test multiplication of a positive and a negative number.
- Test multiplication by zero.

**4. Division Test Cases**

- Test division of two positive numbers.
- Test division of two negative numbers.
- Test division of a positive and a negative number.
- Test division by one.
- Test division by zero (should handle exception).
- Now, let's write the test cases in Java using JUnit.

Now, let's write the test cases in Java using JUnit.

```java
package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    @Test
    public void testAddition() {
        Calculator calculator = new Calculator();
        assertEquals(5, calculator.add(2, 3));
        assertEquals(-5, calculator.add(-2, -3));
        assertEquals(1, calculator.add(2, -1));
        assertEquals(2, calculator.add(2, 0));
    }

    @Test
    public void testSubtraction() {
        Calculator calculator = new Calculator();
        assertEquals(1, calculator.subtract(3, 2));
        assertEquals(1, calculator.subtract(-2, -3));
        assertEquals(3, calculator.subtract(2, -1));
        assertEquals(2, calculator.subtract(2, 0));
    }

    @Test
    public void testMultiplication() {
        Calculator calculator = new Calculator();
        assertEquals(6, calculator.multiply(2, 3));
        assertEquals(6, calculator.multiply(-2, -3));
        assertEquals(-2, calculator.multiply(2, -1));
        assertEquals(0, calculator.multiply(2, 0));
    }

    @Test
    public void testDivision() {
        Calculator calculator = new Calculator();
        assertEquals(2, calculator.divide(6, 3));
        assertEquals(2, calculator.divide(-6, -3));
        assertEquals(-2, calculator.divide(6, -3));
        assertEquals(2, calculator.divide(2, 1));
        assertThrows(ArithmeticException.class, () -> calculator.divide(2, 0));
    }
}
```

These test cases cover the basic operations of a calculator class. You can now implement the `Calculator` class to pass these tests.
</p>
</details>

---

Copilot Chat will give you some sample test code that you can copy into a `CalculatorTest` class.

- run `mvn clean install` ... it should fail since there is no implementation class

## Create the Test Case implementation

![copilot](images/copilot-chat.png)

```text
implement the calculator methods for the calculator test cases
```

- this should give you some code to handle integer numbers (only) 

- run `mvn clean install` ... it could succeed, or maybe fail with in the division by 0
- if it fails, fix the `Calculator.class` (in the chat window)
  - `/fix #terminalSelection`

- Add some edgecases to the tests
  - `@workspace add a testcase for edgecases such as large numbers and floating point input`

  - run `mvn test` ...it should fail because the Calculator only handles Integer.

  - fix it with
    - `@workspace /fix the #file:Calculator.java to be compliant`
