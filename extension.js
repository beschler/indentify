// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "indentify" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('indentify.replace', function(textEditor, edit) {
		const document = textEditor.document;
		for(let lineNumber = 0, lineCount = document.lineCount; lineNumber < lineCount; lineNumber++) {
			const line = document.lineAt(lineNumber).text;
			edit.replace(
				new vscode.Range(lineNumber, 0, lineNumber, line.length),
				indentifyReplace(line)
			);
		}
	}));
}

// This method is called when your extension is deactivated
function deactivate() {}

function indentifyReplace(line) {
	let regex = /^\ */;
	let indent = line.match(regex)[0];
	let indent_size = Math.ceil(indent.length / 2);
	let new_indent = "";
	for(let i = 1; i <= indent_size; i++) {
		new_indent += "\t";
	}
	let line_replaced = line.replace(regex, new_indent);
	return line_replaced;
}

module.exports = {
	activate,
	deactivate,
	indentifyReplace
};