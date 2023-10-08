import { ReadFile, WelcomeSave, createNewPath } from "../../GEARS/PLATYPUS/RenderFunctions.js";
import { PageTitle, createButton } from "../../GIZMOS/SKELETON/Bones.js";
import { CurrentStateStartScreen } from "../STARTSCREEN/DrawStartScreen.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//           Customisable            //
//            Panic Table            //
// ================================= //

// STATE
// const State = async () => await CurrentStateStartScreen()
// 	.then(
// 		(state) => {
// 			return state}
// 	);

const TitlePanel = document.getElementById('Panic_Title_Section');
const TablePanel = document.getElementById('Panic_Table_Section');
const buttonPanel = document.getElementById('PanicButtonPanel');
const foldPanel = document.getElementById('PanicFoldButtonPanel');
let holdObject = {};
let inputValues = {};

function DrawPanicButtonPanel() {
	let ContainerDiv = document.createElement('div');
	ContainerDiv.append(...[
		createButton('PanicFormButton', '', ['panicButtonPanel'], "Input Form"),
		createButton('PanicClearButton', '', ['panicButtonPanel'], "Clear Form"),
		createButton('PanicUndoButton', '', ['panicButtonPanel'], 'Restore Form'),
		createButton('PanicSaveButton', '', ['panicButtonPanel'], 'Save Form'),
		createButton('PanicLoadButton', '', ['panicButtonPanel'], 'Load Form')
	])
	return ContainerDiv;
}
function DrawPanicFoldPanel() {
	let ContainerDiv = document.createElement('div');
	ContainerDiv.append(...[
		createButton('PanicStretchButton', '', ['panicButtonPanel'], "Expand"),
		createButton('PanicShrinkButton', '', ['panicButtonPanel'], "Contract"),
		createButton('PanicPlanButton', '', ['panicButtonPanel'], "Plan")
	])
	return ContainerDiv;
}
function DrawForm() {

	let backgroundDiv = document.createElement('div');
		backgroundDiv.id = "PanicForm";
		backgroundDiv.classList.add('formBackground');
	let arcInputBox = document.createElement('input');
		arcInputBox.type = 'text';
		arcInputBox.placeholder = 'Add New Arc';
	let sphinxInputBox = document.createElement('input');
		sphinxInputBox.type = 'text';
		sphinxInputBox.placeholder = "Add New Sphinx";
	let pieceInputBox = document.createElement('input');
		pieceInputBox.type = 'text';
		pieceInputBox.placeholder = "Add New Piece";
	let fragmentInputBox = document.createElement('input');
		fragmentInputBox.type = 'text';
		fragmentInputBox.placeholder = "Add New Fragment";
	let crumbInputBox = document.createElement('input');
		crumbInputBox.type = 'text';
		crumbInputBox.placeholder = "Add New Crumb";
	let submitButton = document.createElement('button');
		submitButton.innerHTML = 'Submit';
		submitButton.type = 'submit';
		submitButton.addEventListener('click', (event) => {
			inputValues.Arc = arcInputBox.value;
			inputValues.Sphinx = sphinxInputBox.value
			inputValues.Piece = pieceInputBox.value;
			inputValues.Fragment = fragmentInputBox.value;
			inputValues.Crumb = crumbInputBox.value;
			submitNewArc(inputValues);
		});

	backgroundDiv.append(...[
		arcInputBox,
		sphinxInputBox,
		pieceInputBox,
		fragmentInputBox,
		crumbInputBox,
		submitButton
	]);
	return backgroundDiv
}
function DrawPanicHeader() {
	let ContainerDiv = document.createElement('div');
	ContainerDiv.append(...[
		PageTitle("PANIC!!!", "Panic_Title", ["Panic"])
	])
	return ContainerDiv;
}
function DrawPanicScreen() {
	TitlePanel.append(DrawPanicHeader());
	buttonPanel.append(DrawPanicButtonPanel());
	foldPanel.append(DrawPanicFoldPanel());
	let formButton = document.getElementById('PanicFormButton')
		formButton.type = 'button';
		formButton.onclick = createTable;
	let clearButton = document.getElementById('PanicClearButton');
		clearButton.type = 'button';
		clearButton.onclick = clear;
	let undoButton = document.getElementById('PanicUndoButton');
		undoButton.type = 'button';
		undoButton.onclick = undo;
	let saveButton = document.getElementById('PanicSaveButton');
		saveButton.type = 'button';
		saveButton.onclick = save;
	let loadButton = document.getElementById('PanicLoadButton');
		loadButton.type = 'button';
		loadButton.onclick = loadSelected;
	let planButton = document.getElementById('PanicPlanButton');
		planButton.type = 'button';
		planButton.onclick = loadPlanPage;
	let tableSection = document.getElementById('Panic_Table_Section');
		let drawTableTitle = document.createElement('goblin-rainbow');
			drawTableTitle.setAttribute('TitleStyle', 'panic')
			tableSection.appendChild(drawTableTitle);
		let drawTable = document.createElement('goblin-panic');
			drawTable.setAttribute('PageStyle', 'Panic');
			tableSection.appendChild(drawTable);
}
function createTable() {
	if (document.getElementById('PanicForm') === null) {
		buttonPanel.append(DrawForm())
	}
	else {
		buttonPanel.removeChild(document.getElementById('PanicForm'))
	}
}
function loadPlanPage() {
	console.log("ActivateEdit Mode");
	window.location.href = 'PanicPlan.html'
	// let tableSection = document.getElementById('Panic_Table_Section');
	// let table = document.getElementById('TabTab');
	// let title = document.querySelector('goblin-rainbow');
	// tableSection.removeChild(table);
	// tableSection.removeChild(title);

	// let drawTableTitle = document.createElement('goblin-rainbow');
	// 	drawTableTitle.setAttribute('TitleStyle', 'panic')
	// 	tableSection.appendChild(drawTableTitle);
	// 	console.log("Table Title")
	// let drawTable = document.createElement('goblin-panic');
	// 	drawTable.setAttribute('PageStyle', 'Edit');
	// 	tableSection.appendChild(drawTable);
	// 	console.log("Table Body")
}
async function clear() {
	console.log("Clear Function Under Constructoin");
	let container = document.getElementById('Panic_Table_Section');
	const createMemory = await rememberObject();
	const panicpath = await createNewPath("../../GIZMOS/BLOX/PanicBlox.json")
	.then((result) => {
		return result;
	});
	const clearedObject = {};
	const clearObject = await WelcomeSave(panicpath, clearedObject);
	container.remove('goblin-panic');
};
async function undo() {
	console.log('Undo Button Pressed');
	const panicpath = await createNewPath("../../GIZMOS/BLOX/PanicBlox.json")
	.then((result) => {
		return result;
	});
	const fixPanic = await WelcomeSave(panicpath, holdObject);
	let panic = document.createElement('goblin-panic');
	document.body.append(panic);
}

async function rememberObject() {
	const path = await createNewPath("../../GIZMOS/BLOX/PanicBlox.json")
	.then((result) => {
		return result;
	});
	const Grapefruit = await ReadFile(path)
	.then((GrapefruitResult) => {
		holdObject = GrapefruitResult;
		return GrapefruitResult;
	})
	return Grapefruit;
}

async function save() {
	let activecells = [];
		// SEARCH FOR THE CELLS WITH THE RIGHT CLASS
		let table = document.querySelector('goblin-panic')
		let crumbs = table.shadowRoot.querySelectorAll('goblin-crumb');
		for (let index = 0; index < crumbs.length; index++) {
			let x = crumbs[index];
			let selectedCellList = x.shadowRoot.querySelectorAll(".selected");
			console.log(selectedCellList)
			selectedCellList.forEach(cell => {
				let cellid = cell.getAttribute("id");
				activecells.push(cellid);
			});			
		}
		console.log(activecells);
		let saveObject = {
			active: activecells
		}
		const path = await createNewPath('../../SETTINGS/USER/PANICWEEK/PanicMonday.json')
		.then((result) => {
			console.log(result);
			console.log("Boop")
			return result})
		const saveactive = await WelcomeSave(path, saveObject)
			.then((result) => {
				console.log("SAVED")
				return result;
			})
		
}

async function loadSelected() {
	const path = await createNewPath('../../SETTINGS/USER/PANICWEEK/PanicMonday.json')
	.then((result) => {
		console.log(result);
		console.log("Boop")
		return result})
	const readActive = await ReadFile(path)
		.then((result) => {
			const classSelections = ["activeRed", "activeOrange", "activeYellow", "activeGreen", "activeBlue", "activeIndigo", "activeViolet", "activePink"]
			let ac = Object.values(result)
			let aca = ac[0]
			let table = document.querySelector('goblin-panic')
			let crumbs = table.shadowRoot.querySelectorAll('goblin-crumb');

			for (let index = 0; index < crumbs.length; index++) {
				let x = crumbs[index];
				let y = x.shadowRoot.querySelectorAll('.CrumbCell');
				for (let yIndex = 0; yIndex < y.length; yIndex++) {
					for (let activeIndex = 0; activeIndex < aca.length; activeIndex++) {
						console.log(aca[activeIndex]);
						if(y[yIndex].id === aca[activeIndex]) {
							console.log("THIS IS ACTIVE")
							y[yIndex].classList.add('selected')
							if (y[yIndex].id !== 'Buttons' && y[yIndex].classList.contains('CrumbCellCat') === false) {
								console.log(y[yIndex])
								let colouredCell = y[yIndex].classList[1];
								console.log(colouredCell)
								let colour = colouredCell.replace("Title", "")
								if (y[yIndex].classList.contains(`${colouredCell}`) && y[yIndex].classList.contains('selected')) {
									y[yIndex].classList.add(`active${colour}`)
							}
						}

					}

				}}
			}
		})
	return readActive;
}
let template = {
        Arc: "TemplateArc",
        Sphinx: [
            "TemplateSphinx"
        ],
		Pieces: {
			1: [
				"TemplatePiece",
				"TemplateSphinx"
			]
		},
		Fragment: {
			1: {
				PieceName: "TemplatePiece",
                Name: "TemplateFragment",
                Crumbs: [
                    "TemplateCrumb"
                ]
			}
		}
}
async function submitNewArc() {
	console.log("Submitted")
	console.log(inputValues);
	const path = await createNewPath("../../GIZMOS/BLOX/PanicBlox.json")
	.then((result) => {
		return result;
	});
	const Grapefruit = await ReadFile(path)
	.then((GrapefruitResult) => {
		let count = Object.keys(GrapefruitResult);
		let newnum = count.length += 1;
		GrapefruitResult[newnum] = structuredClone(template);
		GrapefruitResult[newnum].Arc = inputValues.Arc;
		GrapefruitResult[newnum].Sphinx = [inputValues.Sphinx];
		console.log(GrapefruitResult)
		GrapefruitResult[newnum]["Pieces"]["1"] = [inputValues.Piece, inputValues.Sphinx];
		GrapefruitResult[newnum]["Fragment"]["1"].PieceName = inputValues.Piece;
		GrapefruitResult[newnum]["Fragment"]["1"].Name = inputValues.Fragment;
		GrapefruitResult[newnum]["Fragment"]["1"].Crumb = [inputValues.Crumb];
		return GrapefruitResult;
	})
	const newPanic = await WelcomeSave(path, Grapefruit);
	// LET'S ADD THE ARC TO THE END
}


DrawPanicScreen();


