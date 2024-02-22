import { create } from "../../CONSOLE/PLATYPUS/create.js";


// == ELEMENTS == //
const ButtonPanel = document.getElementById("FRIDGE-PAGE-Button-Panel");
const board = document.getElementById("FRIDGE-PAGE-Taskboard");

function DrawFridgeButtonsPanel() {

	const wrapper = new create({
		tag: 'div',
		id: 'WRAPPER_Fridge-Buttons',
		classes: ['fridgeShell']
	}).init();

	// == BUTTONS == //

	const openButton = new create({
		tag: 'button',
		id: 'FRIDGEOpenButton',
		classes: ['fridgeButton'],
		elementText: 'OPEN DOOR'
	}).init();
	const CloseButton = new create({
		tag: 'button',
		id: 'FRIDGECloseButton',
		classes: ['fridgeButton'],
		elementText: 'CLOSE DOOR'
	}).init();
	const SaveButton = new create({
		tag: 'button',
		id: 'FRIDGESaveButton',
		classes: ['fridgeButton'],
		elementText: 'SAVE BOARD'
	}).init();
	const loadButton = new create({
		tag: 'button',
		id: 'FRIDGELoadButton',
		classes: ['fridgeButton'],
		elementText: 'LOAD BOARD'
	}).init();

	openButton.addEventListener('click', (event) => {

		console.log("Open Button")
		document.getElementById("FRIDGE-PAGE-Inventory").style.width = "150px";
		document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "150px";
		ButtonPanel.style.float = "right";
	});
	CloseButton.addEventListener('click', (event) => {
	
		console.log("Close Button")
		document.getElementById("FRIDGE-PAGE-Inventory").style.width = "0"
		document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "0";
		ButtonPanel.style.float = "left";
	
	});
	SaveButton.addEventListener('click', (event) => {
	
		console.log("Save Button")
		var rect = board.getBoundingClientRect();
		console.log(rect.top, rect.right, rect.bottom, rect.left);
	});
	
	loadButton.addEventListener('click', (event) => {
	
		console.log("Load Button")
	
	});
	// == ATTACHMENTS == //
	wrapper.append(...[
		openButton,
		CloseButton,
		SaveButton,
		loadButton
	]);

	return wrapper
}



// const OPEN = document.getElementById("FRIDGEOpenButton");
// const CLOSE = document.getElementById("FRIDGECloseButton");
// const SAVE = document.getElementById("FRIDGESaveButton");
// const LOAD = document.getElementById("FRIDGELoadButton");

// document.addEventListener("load", hear());

function hear() {
	// OPEN.addEventListener('click', (event) => {

	// 	console.log("Open Button")
	// 	document.getElementById("FRIDGE-PAGE-Inventory").style.width = "150px";
	// 	document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "150px";
	// 	ButtonPanel.style.float = "right";
	// });
	
	// CLOSE.addEventListener('click', (event) => {
	
	// 	console.log("Close Button")
	// 	document.getElementById("FRIDGE-PAGE-Inventory").style.width = "0";
    // 	document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "0";
	// 	ButtonPanel.style.float = "left";
	
	// });
	
	// SAVE.addEventListener('click', (event) => {
	
	// 	console.log("Save Button")
	// 	var rect = board.getBoundingClientRect();
	// 	console.log(rect.top, rect.right, rect.bottom, rect.left);
	// });
	
	// LOAD.addEventListener('click', (event) => {
	
	// 	console.log("Load Button")
	
	// });
}

// CATEGORIES BASED ON FOLDERS
// SEARCH FOLDER AND MAKE AN ARRAY FOR EACH CATEGORY
// DESIGN HOW BUTTONS BE

ButtonPanel.appendChild(DrawFridgeButtonsPanel());


