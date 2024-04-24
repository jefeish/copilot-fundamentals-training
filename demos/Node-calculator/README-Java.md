# Copilot Calculator Exercise (Java)

- **Intent:** Give Directions
- **Context:** Provide Examples
- **Clarity:** Easy to Understand
- **Specificity:** Precision in Detail

A small demo project to exercise the basic capabilities of Copilot in your IDE. In this demo you should create a Java based `Calculator` class that you can access from the command-line via an `Index.java` entry-point. We use copilot to help us with the content creation of the `Calculator.java`, `Index,java` and some Node packaging settings. Enjoy !

>Note: The demo/workshop only uses **Copilot** features to complete the solution.

## Pre-Requisits

- Make sure to have...

<img width="10%" src="images/copilot.png">

...correctly installed in your IDE

----
### Steps
- create a project folder (eg.: `myCalulator/`, either in side this Repo or in a new project)
- create an `Index.java` file
- create a `Calculator.java` file

#### Here are some example instructions

```bash
mkdir myCalculator
cd myCalculator
touch Index.java
touch Calculator.java
mkdir test
touch CalculatorTest.java
```

---

# Let's start

## 1. Write content for the `Calculator.java` file

### 1.1 Open the `Calculator.java` file and add a description comment, explaining to Copilot what this file is for

<details><summary>Help</summary>
<p>

```node
/**
 * @desciption: A Calculator class that can add, subtract, multiply, modulo, 
 *              exponent and divide by taking in two numbers and an operator.
 *              It throws an error if the operator is invalid or if the second
 *              number is zero and the operator is division.  
 *  
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * 
 * @returns {number} result of the operation
 */
```

</p>
</details>

---

### 1.2 Open the Copilot code suggestion tab

<img width="48px" src="images/copilot.png"> 

![control](images/control-key.png)
![return](images/return-key.png)

Choose any of the suggested code samples and press `Accept Solution`, this will copy the code to the file.

---

### 1.3 Last step, have a look at the generated code.

---

## 2. Complete the `Index.java` file

### 2.1 Open the `Index.java` file and add a description comment, describing what this files itended use.

<details><summary>Help</summary>
<p>

```node
/**
 * @description This is a simple class that takes in two numbers, an operator
 * and uses the calculator class to compute the results.
 * Usage:
 * java Index 1 + 2
 * java Index 1 - 2
 * java Index 1 * 2
 * java Index 1 / 2
 * 
 * Note: The * and ^ operators need to be escaped with a backslash, to prevent the shell from interpreting them.
 * Example: java Index 1 \* 2
 * 
 */
 ```

</p>
</details>

### 2.2 Use the Copilt completions panel

<img width="48px" src="images/copilot.png">

![control](images/control-key.png)
![return](images/return-key.png)

Choose any of the suggested code samples and press `Accept Solution`, this will copy the code to the file.

---

## 3. Run the program

```java
javac Index.java
java Index 2 + 3
```

---

## 4. Test the solution (optional)

This section is open to your imagination, try to "challenge" the code. See if you find use-cases that "break it".


