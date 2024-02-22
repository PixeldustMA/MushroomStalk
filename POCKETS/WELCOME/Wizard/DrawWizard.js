import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Remember } from "../../../CONSOLE/PLATYPUS/AppMemory.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Draw Wizard Screen        //
// ================================= //

// == ATTACHMENT POINTS == //

const titleSection = document.getElementById('Section_Wizard_Title');
const questionSection = document.getElementById('Section_Wizard_Question');

// == ROUTES AND INSTANCES == //
const stalk = new Stalk
const MEMORY = new Remember();
const Route_Start = await stalk.machete("START");
const Route_Onboarding = await stalk.machete("ONBOARDING");

// == DRAW == //
/**
 * DRAW ELEMENTS FOR TITLE SECTION
 */
function drawTitle() {

	// == CONTAINER == //
	let wrapper = new create({
		tag: 'div',
        id: "WIZARD_Title-Wrapper"
	}).init();

	// == LABELS == //
	let titleText = new create({
		tag: 'h1',
        id: "WIZARD_Title-Text",
		elementText: 'HAVE YOU BEEN HERE BEFORE STRANGER?'
	}).init();

    // == ATTACHMENTS == //
	wrapper.append(...[
		titleText
	]);
	return wrapper;
}
/**
 * DRAW ELEMENTS FOR QUESTION SECTION
 */
function drawQuestion() {

	// == CONTAINER == //
	let wrapper = new create({
		tag: 'div',
        id: 'WIZARD_Question-Wrapper'
	}).init();

	// == BUTTON == //
	let welcomeScreenButton = new create({
		tag: 'button',
        id: 'WIZARD_New-Button',
		elementText: 'No Im totally new'
	}).init();

	// == FILE CHOOSER == //
	let backUpPathFileChooser = new create({
		tag: 'input',
		id: 'WIZARD_Onboarding-FileChooser',
		elementText: 'messageBox',
		classes: ['FILECHOOSER-Style']
	}).init();

	// == LABEL == //
	let fileChoiceStyleLabel = new create({
		tag: 'label',
        id: 'WIZARD_File-Label',
		elementText: 'Prove Identity'
	}).init();

	// == ACTIONS == //
	fileChoiceStyleLabel.htmlFor = 'WIZARD_Onboarding-FileChooser';
	welcomeScreenButton.addEventListener('click', (NOEVENT) => {
		window.location.href = Route_Onboarding;
	});
	chooseFile(backUpPathFileChooser);
	
	// == ATTACHMENTS == //
	wrapper.append(...[
		welcomeScreenButton,
		fileChoiceStyleLabel,
		backUpPathFileChooser
	]);
	return wrapper;
}

// == BUILD == //
/**
 * DRAW PAGE
 */
function drawWizardPage() {
	titleSection.append(drawTitle());
	questionSection.append(drawQuestion());
};

// == ACTIONS == //
/**
 * CREATE A FILE CHOOSER
 * @returns FILE INPUT ELEMENT
 */
function chooseFile(element) {
	element.type = 'file'
	element.click();
	element.onchange = event => {
		let files =  Array.from(element.files);
		setStates(files);
	};
	return element;
}
/**
 * SET USER BACK UP PATH;
 */
async function setStates(file) {
	let currentState = file;
	currentState.localPath = file[0].path;
	await MEMORY.loadLostData(currentState.localPath);
	window.location.href = Route_Start;
}

// == RUN SCRIPT == //
drawWizardPage();

