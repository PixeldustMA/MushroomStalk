// CREATE A DROP DOWN FOR ARCS

// CREATE A DROP DOWN FOR SPHINX

// CREATE A DROP DOWN FOR PIECE

// CREATE A DROP DOWN FOR FRAGMENT

// == HOLDING OBJECT == //

const holdValues = {}
// == TOGGLE BUTTONS == //
showExisting = document.getElementById('showExistingButton');
showNew = document.getElementById('showNewButton');

// == SECTIONS == //
existingSection = document.getElementById('container_existing');
newSection = document.getElementById('container_new');
newArcSection = document.getElementById('container_New_Arc');
buttonPanel = document.getElementById('ButtonPanel');
arcButton = document.getElementById('ArcButton');
sphinxButton = document.getElementById('SphinxButton');
pieceButton = document.getElementById('PieceButton');
fragmentButton = document.getElementById('FragmentButton');
crumbButton = document.getElementById('CrumbButton');

// == EVENT LISTENERS == //
showExisting.addEventListener('click', (event) => {
	showAndHide(existingSection)
})
showNew.addEventListener('click', (event) => {
	showAndHide(newSection)
})
arcButton.addEventListener('click', (event) => {
	createBlock('Arc');
	let submitbutton = document.createElement('button');
		submitbutton.type = 'button';
		submitbutton.innerHTML = 'Submit Arc';
		submitbutton.onclick = createArc;
	newArcSection.append(submitbutton);
})
sphinxButton.addEventListener('click', (event) => {
	createBlock('Sphinx');
})
pieceButton.addEventListener('click', (event) => {
	createBlock('Piece');
})
fragmentButton.addEventListener('click', (event) => {
	createBlock('Fragment');
})
crumbButton.addEventListener('click', (event) => {
	createBlock('Crumb');
})
// == HELPER FUNCTIONS == //
function showAndHide(section) {
	if (section.style.display === 'none') {
		console.log('show')
		section.style.display = 'block';
	}
	else {
		console.log('hide')
		section.style.display = 'none';
	}
}

// == STRUCTURE FUNCTIONS == //


function createBlock(tag) {
	let containerDiv = document.createElement('div');
	let generateLabel = document.createElement('label');
		generateLabel.htmlFor = `${tag}Name`;
		generateLabel.innerHTML = `ENTER ${tag} NAME...`
	let generateInput = document.createElement('input');
		generateInput.type = 'text';
		generateInput.name = `${tag}Name`;
		generateInput.id = `${tag}InputBox`;
	let generateButton = createButton(tag);

	console.log("Hi")
	newArcSection.append(...[
		containerDiv,
		generateLabel,
		generateInput,
		generateButton
	])

	return newArcSection;
}

function createButton(tag) {

	switch (tag) {
		case 'Arc':
			buttonTitle = 'Sphinx'
			break;
		case 'Sphinx':
			buttonTitle = 'Piece'
		case 'Piece':
			buttonTitle = 'Fragment'
		case 'Fragment':
		case 'Crumb':	
			buttonTitle = 'Crumb'
		default:
			break;
	}
	let addNewButton = document.createElement('button');
	addNewButton.type = 'button'; 
	addNewButton.innerHTML = `Add ${buttonTitle} to this ${tag}`
	addNewButton.id = `${buttonTitle}${tag}Button`;
	return addNewButton;
} 

// function drawPanicForm() {



// }

// drawPanicForm();

// NEED TO ATTACH TO  A BUTTON AND OBJECT
function createArc() {
	let arcInput = document.getElementById('ArcInputBox')
	let arcTitle = arcInput.value;
	holdValues[arcTitle] = {Name: arcTitle};
	console.log(holdValues);

	if (document.getElementById('SphinxInputBox') !== null) {
		let sphinxInput = document.getElementById('SphinxInputBox');
		let sphinxTitle = sphinxInput.value;
	}
}
const frog = document.getElementById('SphinxArcButton');
console.log(frog)
frog.addEventListener('click', (e) => {
	console.log("Frog")
	createBlock('Sphinx');
})

// TO ADD A NEW ARC...

// open the arc form using a button
	// == ACHIEVED == // 
// Add the levels of arc that are needed
	// == cascading button thing - achieved == //
// Submit this new Arc to the holding object
	// == get value of each input using a submit button == //
// Submit everything in the holding object to the grapefruit
