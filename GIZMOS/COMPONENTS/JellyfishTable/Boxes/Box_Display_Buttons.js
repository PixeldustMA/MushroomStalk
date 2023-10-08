import { create } from "../Utility/Creation.js";
import { readState} from "../Operations/StateController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       DISPLAY BUTTONS             //
// ================================= //

async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}

function DrawDisplayButtons() {

	// == WRAPPERS AND BOXES == //
	let wrapper = new create({
		tag: 'div',
		id: 'wrapper_Button_Box'
	}).init();
	let RowOne = new create({
		tag: 'div',
		id: 'RowOne'
	}).init();
	let RowTwo = new create({
		tag: 'div',
		id: 'RowTwo'
	}).init();	
	let RowThree = new create({
		tag: 'div',
		id: 'RowThree'
	}).init();	
	let RowFour = new create({
		tag: 'div',
		id: 'RowFour'
	}).init();	
	let RowFive = new create({
		tag: 'div',
		id: 'RowFive'
	}).init();
	let editDiv = new create({
		tag: 'div',
		id: 'EditRow',
		classes: ['hideMe']
	}).init();

	// == BUTTONS == //
	let savePresetButton = new create({
		tag: 'button',
		id: 'SavePresetButton',
		classes: ['defaultButton'],
		elementText: 'SAVE PRESET'
	}).init();
	let changeStyleButton = new create({
		tag: 'button',
		id: 'ChangeStyleButton',
		classes: ['defaultButton'],
		elementText: 'CHANGE STYLE'
	}).init();

	// == EVENT LISTENERS == //
	savePresetButton.addEventListener('click', (event) => {
		console.log("Click")
	});
	// ATTACH THINGS
	editDiv.append(...[
		savePresetButton,
		changeStyleButton
	]);
	RowFive.append(editDiv);
	wrapper.append(...[
		RowOne,
		RowTwo,
		RowThree,
		RowFour,
		RowFive
	]);
	return wrapper;
}

export { DrawDisplayButtons };