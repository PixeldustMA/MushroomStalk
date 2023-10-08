import { createButton } from "../../GIZMOS/KNOTS/Global.js";

let ButtonPanel = document.getElementById("FRIDGE-PAGE-Button-Panel");
ButtonPanel.appendChild(FridgeButtonPanel());
function FridgeButtonPanel() {

	let ContainerDiv = document.createElement('div');
	ContainerDiv.classList.add("fridgeShell")
	ContainerDiv.append(... [
		createButton("FRIDGEOpenButton", "empty", ["fridgeButton"], "OPEN DOOR"),
		createButton("FRIDGECloseButton", "empty", ["fridgeButton"], "CLOSE DOOR"),
		createButton("FRIDGESaveButton", "empty", ["fridgeButton"], "SAVE BOARD"),
		createButton("FRIDGELoadButton", "empty", ["fridgeButton"], "LOAD BOARD")
	])
	return ContainerDiv;
}


const OPEN = document.getElementById("FRIDGEOpenButton");
const CLOSE = document.getElementById("FRIDGECloseButton");
const SAVE = document.getElementById("FRIDGESaveButton");
const LOAD = document.getElementById("FRIDGELoadButton");
const board = document.getElementById("FRIDGE-PAGE-Taskboard")
document.addEventListener("load", hear());

function hear() {
	OPEN.addEventListener('click', (event) => {

		console.log("Open Button")
		document.getElementById("FRIDGE-PAGE-Inventory").style.width = "150px";
		document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "150px";
		ButtonPanel.style.float = "right";
	});
	
	CLOSE.addEventListener('click', (event) => {
	
		console.log("Close Button")
		document.getElementById("FRIDGE-PAGE-Inventory").style.width = "0";
    	document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "0";
		ButtonPanel.style.float = "left";
	
	});
	
	SAVE.addEventListener('click', (event) => {
	
		console.log("Save Button")
		var rect = board.getBoundingClientRect();
		console.log(rect.top, rect.right, rect.bottom, rect.left);
	});
	
	LOAD.addEventListener('click', (event) => {
	
		console.log("Load Button")
	
	});
}

// CATEGORIES BASED ON FOLDERS
// SEARCH FOLDER AND MAKE AN ARRAY FOR EACH CATEGORY
// DESIGN HOW BUTTONS BE


export { FridgeButtonPanel };
