import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         main Archive Screen       //
// ================================= //

// == SECTIONS == //

const titleSection = document.getElementById('Section_TitleBar');
const choicesSection = document.getElementById('Section_ChoiceBar');
const update = document.getElementById('updateButton');

// == ROUTES AND INSTANCES == //
const mushroomStalk = new Stalk();

// == LISTENERS == //
update.addEventListener('click', (event) => {
	mushroomStalk.load("ARCHIVEUPDATE");
})
// == DRAW PANELS ==//

/**
 * DRAW TITLE PANEL OF THE ARCHIVE PAGE
 * @returns {HTMLElement}HTML ELEMENTS 
 * */
function drawTitlePanel() {

    // == WRAPPER == //
	let wrapper = new create({
		tag: 'div'
	}).init();

    // == TEXT == //
	let archiveHeader = new create({
		tag: 'h1',
		elementText: 'ARCHIVE'
	}).init();

    // == ATTACHMENT == //
	wrapper.append(...[
		archiveHeader
	]);

	return wrapper;
}
/**
 * DRAW THE FORM SECTION OF THE PAGE
 * @returns {HTMLElement} HTML Elements
 */
function drawChoicesPanel(){

    // == WRAPPER == //
	let wrapper = new create({
		tag: 'div'
	}).init();

    // == BUTTONS == //
	let newCharacterButton = new create({
		tag: 'button',
		elementText: 'CREATE A NEW CHARACTER'
	}).init();
	let searchArchiveButton = new create({
		tag: 'button',
		elementText: 'SEARCH THE ARCHIVE'
	}).init();

    // == INPUTS == //
	let inputCode = new create({
		tag: 'input',
		id: 'Input_Code_Quick_Access'
	}).init();

	// == LISTENERS == //
	newCharacterButton.addEventListener('click', (newCharacterEvent) => {
		mushroomStalk.load("ARCHIVENEW");
	});
	searchArchiveButton.addEventListener('click', (newCharacterEvent) => {
		mushroomStalk.load("ARCHIVESEARCH");
	});

    // == ATTACHMENTS == //
	wrapper.append(...[
		newCharacterButton,
		searchArchiveButton,
		inputCode
	]);

	return wrapper;
}

// == CREATE THE PAGE == //
/**
 * CREATE THE ARCHIVE PAGE
 */
function drawArchiveFoundation() {
	titleSection.append(drawTitlePanel());
	choicesSection.append(drawChoicesPanel());
}

// == RUN SCRIPT == //
drawArchiveFoundation();