
const OPEN = document.getElementById("FRIDGEOpenButton");
const CLOSE = document.getElementById("FRIDGECloseButton");
const SAVE = document.getElementById("FRIDGESaveButton");
const LOAD = document.getElementById("FRIDGELoadButton");

document.addEventListener("load", hear());
	
function hear() {
	OPEN.addEventListener('click', (event) => {

		console.log("Open Button")
		document.getElementById("FRIDGE-PAGE-Inventory").style.width = "250px";
		document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "250px";
		
	});
	
	CLOSE.addEventListener('click', (event) => {
	
		console.log("Close Button")
		document.getElementById("FRIDGE-PAGE-Inventory").style.width = "0";
    	document.getElementById("FRIDGE-PAGE-Taskboard").style.marginLeft = "0";
    
	
	});
	
	SAVE.addEventListener('click', (event) => {
	
		console.log("Save Button")
	
	});
	
	LOAD.addEventListener('click', (event) => {
	
		console.log("Load Button")
	
	});
}

