# Demo: Prompt Engineering 1 

## Prompt Techniques & Neighboring Tabs

### GOAL: Practice Zero-shot, One-shot prompting etc.

### Step 1: Requirements


- Open the `copilot-fundamentals-training` Repo
- Go to the `/demos/Node-calculator/solutions` folder and run `npm install`
- Go to the `/demos/Node-calculator/solutions/tests` folder and open the `calculator.test.js` file 
> NOTE: make sure that THIS IS THE ONLY TAB OPEN in your IDE

### Step 2

- Add a comment to the `calculator.test.js` file

  Example
  ```
  // Write me unit tests for all the operations in my calculator.js file
  ```

- Examine the results, include the best match in your code and run the unit test

  ```
  npm test
  ```

### Step 3

- Delete the content from the `calculator.test.js` file
- Add a new comment to the `calculator.test.js` file

  Example

  ```
  Write me unit tests for all the operations in my calculator.js file
  Use the following example: 
  test(‘adds 1 + 2 to equal 3’, () => ( expect(calculator(1, 2 ‘+’)).toBe(3); });
  ```

- Examine the results, include the best match in your code and run the unit test

  ```
  npm test
  ```

### Step 4

- Repeat the above steps but have the `calculator.js` file open in a Tab!

> NOTE: you might want to clear the previus content from the `claculator.test.js` file