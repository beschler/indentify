# Indentify

A [Visual Studio Code](https://code.visualstudio.com) [extension](https://marketplace.visualstudio.com/VSCode) to replace space indentation with tabs.

1. [Features](#features)
2. [Uneven Indentation](#uneven-indentation)
3. [Install](#install)
4. [Release](#release)

## Features

This extension, once installed, creates a new command in the VS Code [Command Palette](https://code.visualstudio.com/api/ux-guidelines/command-palette) called **Indentify: Replace space indentation with tabs**.

When this command is executed, it will convert the space indentation in the current file from 2 spaces to tabs.

For example, given the following code below, formatted with 2 space indentation:

```
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

This will be replaced with the following tab indentation:

```
<div>
	<ul>
		<li></li>
	</ul>
</div>
```

NOTE: This command will not replace multiple spaces _within the contents of a line_. The [regular expression](https://en.wikipedia.org/wiki/Regular_expression) only matches spaces at the _beginning of the line_.

## Uneven Indentation

In the event the file has uneven indentation (for example, 3 spaces of indentation on a line), the command will **round up**, and convert 3 spaces into 2 tabs, with the assumption that the single space was intended to be a full 2 space indentation (total 4 space indentation, or 2 tabs).

For example, given the following indentation:

```
<div>
  <ul>
   <li></li>
  </ul>
</div>
```

This will be replaced with:

```
<div>
	<ul>
		<li></li>
	</ul>
</div>
```

This ensures that all leading whitespace indentation is converted to tabs, and no space indentation remains whatsoever (no combination of spaces and tabs).

## Install

1. Clone this repository to your local machine.

2. Install [`vsce`](https://github.com/microsoft/vscode-vsce) globally on your local machine:

In Terminal:

```
npm install -g @vscode/vsce
```

3. Package this extension using `vsce`:

In Terminal, change directory to this repository:

```
cd path/to/indentify
```

Package this extension:

```
vsce package
```

This will create a `.vsix` file in the root directory of the repo.

4. [Install](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix) the `.vsix` file:

In VS Code, invoke the Command Palette, and execute command: **Extensions: Install from VSIX...**.

In the file browser, choose the `.vsix` file that was created in the previous step.

## Release

This extension was released on May 11, 2023, and is stable on VS Code version 1.78.0.
