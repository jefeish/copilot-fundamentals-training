# Demo: First Copilot Interactions

### Description

This tour showcases essential Copilot features by leveraging a small React Calculator App.
> Note: Make sure you installed the NPM components and started the App

# Inline Help

- **Situation:** The React App does not use the `calculator` component!
  - Remember to start the App:

    ```
    npm install
    npm start
    ```

  - [Open Browser](command:vs-browser.start) (use port 3000)
  
#### 1. Test Copilot's Inline Suggestion

- After starting the App, you may not see the `calculator` component. Let's try to add it.
- Based on the file context, Copilot might already suggest the right thing.
- Click `Tab` to accept the suggestion.

#### 2. Go to the end of the comment line and press 'Enter'

- Give Copilot time to present you with a suggestion.
- **Optional:** If Copilot does not produce satisfying results, try using [Copilot Chat](command:workbench.panel.chatSidebar.copilot).

#### 4. Accept a Suggestion and Save the File

- With the correct suggestion `(<Calculator />)`, you should now see the calculator in the App.

# Completions Panel

- **Situation:** The calculator does not calculate.

#### 1. Test the use of the *Copilot Completions Panel*

#### 2. Go to the end of the comment line and press 'Enter', to trigger Copilot

#### 3. Open the [Copilot Completions Panel](command:github.copilot.generate) 

(**`Control^`** + **`Enter`**)

   - Note: Try not to use the 'Inline suggestions' (as they are still showing up).
   - Give Copilot time to present you with suggestions.
   - Choose one of the suggestions by clicking the `'Accept Solution'` link.
   - **Optional:** If Copilot does not produce satisfying results, try using [Copilot Chat](command:workbench.panel.chatSidebar.copilot).

#### 4. Save the file and continue

- Test the calculator in the browser (http://localhost:3000).

# Fix using Copilot

- **Situation:** Try to add an 'About' link to the header

#### 1. Insert this code...

  - Sample

    ```javascript
    <a href="#" className="Header-link">
    About
    <a>
    &nbsp; &nbsp; &nbsp;
    ```

    >Note: this code is broken, we will use Copilot to fix it.

- You should see the IDE giving you a syntax error.

- **Situation:** Use Copilot to fix the Error

#### 1. We highlight the section of the code that we want Copilot to focus on...

   - line 24-26 (the previously inserted code)

#### 2. You should see a lightbulb, click that and select the `Fix using Copilot` option. Copilot should suggest a code fix for you!

   - **Optional:** If Copilot does not produce satisfying results, try using [Copilot Chat](command:workbench.panel.chatSidebar.copilot) and use the command `/fix` (using the highlighted code). The fix that Copilt chat suggests can be added by clicking "Insert at Cursor", which will replace the existing (bad) code.

#### 3. Save the file and continue...

# Explain using Copilot

- **Situation:** Try using Copilot to `Explain the Code`

#### 1. We already highlighted a code section as an example (24-31)

   - You should see a little lightbulb, click that and select `Explain using Copilot`.
   - **Optional:** If Copilot does not produce satisfying results, try using [Copilot Chat](command:workbench.panel.chatSidebar.copilot) and use the command `/explain` (using the highlighted code). Copilot Chat will give a detailed description of the highlighted code.

### Conclusion

This concludes the GitHub Copilot operations demo!
