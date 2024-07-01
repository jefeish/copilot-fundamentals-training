# Prompting - Getting Started

<div class="container">
  <div class="column3">
    <p class="title1"">Limitations</p>
  </div>
</div>

<div class="container">
  <div class="column3 rounded-box-gradient">
    <h4>Training data impacts suggestions</h4>
    <p class="subtitle">The <a>quality of code</a> suggestions depends on training data, popular languages like JavaScript yield better recommendations than less common ones</p>
  </div>

  <div  class="column3 rounded-box-gradient">
    <h4>GitHub Copilot != Compiler</h4>
    <p class="subtitle">Copilot does not guarantee it will deliver compilable code, especially with partial results</p>
  </div>
  
  <div  class="column3 rounded-box-gradient">
    <h4>The AI can’t read your mind</h4>
    <p class="subtitle">Copilot does not anticipate what you are trying to do. You need to <a>be as declarative as possible</a> in your requests and provide as much context as possible</p>
  </div>
</div>

<div class="container">
  <div class="column3">
    <p class="title1"">Good Code Begets Good Code</p>
  </div>
</div>

<div class="container">
  <div class="column2 rounded-box-gradient">
    <p class="title">Use good names</p>
    <p class="subtitle">GitHub Copilot understands natural language</p>
  </div>

  <div class="column2 rounded-box-gradient">
    <p class="title">Spell out variable names</p>
    <p class="subtitle">Single letter variables and abbreviations are ambiguous</p>
  </div>
    
  <div class="column2 rounded-box-gradient">
    <p class="title">Keep functions functional</p>
    <p class="subtitle">Follow strong principles when creating named blocks</p>
  </div>

  <div class="column2 rounded-box-gradient">
    <p class="title">Be consistent</p>
    <p class="subtitle">Generated code follows contextual patterns</p>
  </div>
</div>

<div class="container">
  <div class="column3">
    <p class="title1"">Patterns</p>
  </div>
</div>

<div class="container">
  <div class="column3 rounded-box-gradient">
    <p class="title">Use Cases</p>
    <p class="subtitle">Code Suggestion / Translation<br>Unit Test Development<br>Code Refactoring<br>RegEx Pattern Matching<br>Documentation</p>
  </div>

  <div class="column3 rounded-box-gradient">
    <p class="title">Anti Patterns</p>
    <p class="subtitle">Non Coding Tasks<br>Production Data Generation<br>Natural Language Generation</p>
  </div>
</div>

<br><br><br><br>

<!-- Add some speaker notes -->
Note:

**The definition of a prompt:** A prompt is the collection of code and supporting contextual information that the GitHub Copilot extension sends to GitHub to generate suggestions.

The GitHub Copilot extension sends a prompt  when the user pauses typing while working on a file or use a designated keyboard shortcut to request a suggestion.

- **Let's review some prompting strategies for working with GitHub Copilot:**

1. **Understand Limitations and Leverage Capabilities:** GitHub Copilot's generated code is directly influenced by its training data. It's essential to provide precise prompts since Copilot doesn't function like a traditional compiler and cannot anticipate user intentions.

2. **Context is Key:** Language models like Copilot thrive on clear and understandable context.

3. **Focus on Code Tasks:** GitHub Copilot is designed primarily for coding tasks. Whether it's suggesting algorithms, refactoring code, or generating unit tests, it thrives when the prompt is centered around programming challenges.