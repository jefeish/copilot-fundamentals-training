# Copilot Calculator Exercise (NodeJS)

- **Intent:** Give Directions
- **Context:** Provide Examples
- **Clarity:** Easy to Understand
- **Specificity:** Precision in Detail

A small demo project to exercise the basic capabilities of Copilot in your IDE. In this demo you should create a Node based calculator Module that you can access from the command-line via an `index.js` entry-point. We use copilot to help us with the content creation of the `calculator.js`, `index,js` and some Node packaging settings. Enjoy !

>Note: The demo/workshop only uses **Copilot** features to complete the solution.


## Pre-Requisits

- Make sure to have **Copilot**, correctly installed & working in your IDE !

### NOTE:
:warning: If you need help with the exercise prompts, click on the **':arrow_forward: Help'**, to get some additonal information.

---
### Steps
- create a project folder (eg.: `myCalulator/`, either in side this Repo or in a new project)
- initialize the npm project (create package.json) 
- create an `index.js` file
- create a `calculator.js` file

#### Here are some example instructions

```bash
mkdir myCalculator
cd myCalculator
npm init
touch index.js
touch calculator.js
mkdir test
touch test/calculator.test.js
```

---

# Let's start

## 1. Write content for the `calculator.js` file

### 1.1 Open the `calculator.js` file and add a description comment, explaining to Copilot what this file is for

<details><summary>Help</summary>
<p>

```node
/**
 * @desciption: A calculator module that can add, subtract, multiply, modulo, 
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

## 2. Complete the `index.js` file

### 2.1 Open the `index.js` file and add a description comment, describing what this files itended use.

<details><summary>Help</summary>
<p>

```node
/**
 * @description This is a simple function that takes in two numbers, an operator
 * and uses the calculator module to compute the results.
 * Usage:
 * node index2.js 1 + 2
 * node index2.js 1 - 2
 * node index2.js 1 * 2
 * node index2.js 1 / 2
 * 
 * Note: The * and ^ operators need to be escaped with a backslash, to prevent the shell from interpreting them.
 * Example: node index2.js 1 \* 2
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

```node
node index.js
```
or
```node
node index.js 2 + 3
```

---

## 4. Test the solution (optional)

This section is open to your imagination, try to "challenge" the code. See if you find use-cases that "break it".


