## Test-Driven Development (TDD) 

TDD is a software development process where you write tests before you write the code that makes the tests pass. Let’s go through a simple example using Java to illustrate TDD.

We'll create a basic `Calculator` class that can perform addition, subtraction, multiplication, division and power of.

### Step 1: Write the Tests First

First, we need to create a test class for our `Calculator`. We’ll use JUnit, as our testing framework.

Here’s how you might write the tests using JUnit 5:

![](./copilot-chat.png)

```copilot
generate code scafolding for test driven develpoment for a Java calculator class
```

<details><summary>Click to see a code sample</summary>

```java
// File: CalculatorTest.java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    void testAddition() {
        Calculator calculator = new Calculator();
        assertEquals(5, calculator.add(2, 3), "2 + 3 should equal 5");
    }

    @Test
    void testSubtraction() {
        Calculator calculator = new Calculator();
        assertEquals(1, calculator.subtract(3, 2), "3 - 2 should equal 1");
    }
}
```

</details> 

### Step 2: Write the Code to Pass the Tests

Now, we’ll write the `Calculator` class to pass these tests.

```java
// File: Calculator.java
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }
}
```

### Step 3: Run the Tests

Run the tests using your IDE or a build tool like Maven or Gradle. In this example, both tests should pass since the `Calculator` class provides the correct implementation for addition and subtraction.

### Step 4: Refactor if Needed

If you need to refactor or enhance your `Calculator` class (e.g., adding new features or improving performance), you can do so while ensuring that the tests continue to pass.

### Example of Refactoring

Suppose we want to add multiplication and division:

1. **Update the Test Class**:

    ```java
    // File: CalculatorTest.java
    import org.junit.jupiter.api.Test;
    import static org.junit.jupiter.api.Assertions.assertEquals;

    public class CalculatorTest {

        @Test
        void testAddition() {
            Calculator calculator = new Calculator();
            assertEquals(5, calculator.add(2, 3), "2 + 3 should equal 5");
        }

        @Test
        void testSubtraction() {
            Calculator calculator = new Calculator();
            assertEquals(1, calculator.subtract(3, 2), "3 - 2 should equal 1");
        }

        @Test
        void testMultiplication() {
            Calculator calculator = new Calculator();
            assertEquals(6, calculator.multiply(2, 3), "2 * 3 should equal 6");
        }

        @Test
        void testDivision() {
            Calculator calculator = new Calculator();
            assertEquals(2, calculator.divide(6, 3), "6 / 3 should equal 2");
        }
    }
    ```

2. **Update the Calculator Class**:

    ```java
    // File: Calculator.java
    public class Calculator {

        public int add(int a, int b) {
            return a + b;
        }

        public int subtract(int a, int b) {
            return a - b;
        }

        public int multiply(int a, int b) {
            return a * b;
        }

        public int divide(int a, int b) {
            if (b == 0) {
                throw new ArithmeticException("Cannot divide by zero");
            }
            return a / b;
        }
    }
    ```

### Conclusion

In this TDD example, you started by writing tests for the `Calculator` class before implementing it. After writing the initial code, you refactored by adding new functionality and updating the tests accordingly. This approach ensures that your code meets the requirements and remains correct as you make changes.