import { Character } from "../../../CONSOLE/CONTROLLERS/CharacterController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        View Meat Character        //
// ================================= //

// TODO FIX THIS PAGE. IT'S ALL SORTS OF MESSED UP AND INEFFICIENT

// == SECTIONS == //

const titleSection = document.getElementById('Section_TitleBar');
const mainDetailsSection = document.getElementById('Section_Main_Details');
const additionalDetailsSection = document.getElementById('Section_Additional_Details')

// == VARIABLES AMD INSTANCES == //

let sectionDisplayMode = "Dragon";
const char = new Character();
const details = await char.readCurrent();

// == DRAW PLANET PANELS ==//

/**
 *  DRAW MEAT VIEWER PLANET TITLE PANEL
 * @returns {HTMLElement} PANEL
 */
function drawPlanetTitlePanel() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div'
	}).init();

	// == TEXT == //
	let meatTitle = new create({
		tag: 'h1',
		elementText: "NAME: "
	}).init();
	let characterName = new create({
		tag: 'h1',
		elementText: 'Name goes here'
	}).init();

	// == ACTIONS AND LISTENERS == //
	characterName.innerHTML = details.First + " " + details.Last;

	// == ATTACHMENTS == //
	wrapper.append(...[
		meatTitle,
		characterName
	]);

	return wrapper;
}
/**
 *DRAW MEAT VIEWER DRAGON TITLE PANEL
 * @returns {HTMLElement}
 */
function drawDragonTitlePanel() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div'
	}).init();

	// == TEXT == //
	let meatTitle = new create({
		tag: 'h1',
		elementText: "DRAGON NAME: "
	}).init();
	let characterName = new create({
		tag: 'h1',
		elementText: 'Name goes here'
	}).init();

	// == ACTIONS AND LISTENERS == //
	characterName.innerHTML = details.First + " " + details.Last;

	// == ATTACHMENTS == //
	wrapper.append(...[
		meatTitle,
		characterName
	]);

	return wrapper;
}

function drawMainDetailsPanel(){
	let wrapper = new create({
		tag: 'div'
	}).init();

	let updateButton = new create({
		tag: 'button',
		elementText: 'UPDATE DETAILS'
	}).init();
	let viewChange = new create({
		tag: 'button',
		elementText: 'Change View'
	}).init();
	let AddSection = new create({
		tag: 'button',
		elementText: 'Add Section'
	}).init();
	wrapper.append(...[
		updateButton,
		viewChange,
		AddSection
	]);
	return wrapper;
}
function drawAdditionalDetailsPanel(){}

function PrepareDraw() {
	let MODE = details.Mode;
	switch (MODE) {
		case "PrimaryPlanetCode":
			titleSection.append(drawPlanetTitlePanel());			
			break;
		case "DragonCode":
			titleSection.append(drawDragonTitlePanel());
			break;
		default:
			break;
	};
	mainDetailsSection.append(drawMainDetailsPanel());
}

PrepareDraw();

function addSection() {
	
}