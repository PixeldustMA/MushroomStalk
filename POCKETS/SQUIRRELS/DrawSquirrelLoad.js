import { createNewPath, spreadsheetObject } from "../../GEARS/PLATYPUS/RenderFunctions.js";

const Title = document.getElementById('titleSection');
const Buttons = document.getElementById('buttonSection');



function drawTitlePanel() {

	let titlePanel = document.createElement('div');
	let titleText = document.createElement('h1');
	titleText.innerHTML = 'SQUIRREL VIEWER'
	titlePanel.append(titleText);
	return titlePanel;
}

function drawButtonPanel() {

	let runButton = document.createElement('button');
	runButton.innerHTML = "BEGIN";
	runButton.addEventListener('click', (event) => {
		window.location.href = "./FrameworkSquirrel.html"
	})
	return runButton;
}

let x = document.getElementById('testViewingHere');
let table = document.createElement('table');
x.append(table);
let spreadhseetPath = await createNewPath('test.ods')
	.then((x) => {
		console.log(x)
		return x
	});
let y = await spreadsheetObject(spreadhseetPath)
	.then((x) => {
		console.log(x)
		return x
	})


function drawSquirrelLoad() {

	Title.append(drawTitlePanel());
	Buttons.append(drawButtonPanel());

}

drawSquirrelLoad();