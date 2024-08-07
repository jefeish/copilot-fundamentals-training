# Copilot chat overview

- Answering coding questions

- Code refactoring and improvements

- Fix issues

- Jumpstart your project

- Generate unit test cases

- Generate code documentation

- Productivity improvements

---

## Chat view

With GitHub Copilot Chat you now have a new option in your IDE, the `Chat View`

### Code blocks

- Copy
- Insert
- Insert into new file
- Insert into terminal

### Generate a new workspace

#### Use slash commands `/`

#### Use chat participants `@`

- `@workspace /new express with typescript and pug` (combine `@` + `/`)

- `@vscode how can I change my vs code colors?`

---

## Quick chat

`shift + command + I`

Ask Copilot a quick question, don't start a full Chat view session

### Multi-turn conversations

Keep the chat conversation open and continue to iterate and prompt Copilot to improve the suggested solution.

- Chat history

### Add chat context

Reference a chat variable in your chat prompt by using the `#` symbol.

- **#codebase**: the contents of the current workspace. It includes information about the files and folders in your workspace, as well as any settings or configurations specific to that workspace.
- **#editor**: the code in the active editor. The editor content is implicitly included in the Chat view context.
- **#file**: include a specified file in your workspace as context with your chat prompt.
- **#git**: information about the current git repository, such as the workspace folder, branch name, remotes, and more.
- **#selection**: the visible source code in the active editor.
- **#terminalLastCommand**: the active terminal's last run command.
- **#terminalSelection**: the active terminal's selection.

---

## Inline chat

`command + I`

- Stay in the flow (Code)
- Terminal inline chat

---

## Use smart actions

Access the smart actions by selecting a block of code, right-clicking, and choosing Copilot.

- Fix using copilot
- Explain using copilot
