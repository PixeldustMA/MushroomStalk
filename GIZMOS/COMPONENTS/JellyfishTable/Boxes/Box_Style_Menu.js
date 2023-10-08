import { create } from "../Utility/Creation.js"
import { DrawColourOptions } from "./Box_Style_ColourOptions.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//       Last Updated - v0.8         //
//          COLOUR MENU              //
// ================================= //

function DrawStyleNav() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div'
	}).init();
	let menuDiv = new create({
		tag: 'div'
	}).init();

	// == BUTTONS == //
	let ColourButton = new create({
		tag: 'button',
		elementText: 'COLOUR'
	}).init();
	let fontButton = new create({
		tag: 'button',
		elementText: 'FONT'
	}).init();
	let borderButton = new create({
		tag: 'button',
		elementText: 'BORDER'
	}).init();

	// == LISTENERS == //
	ColourButton.addEventListener('click', (DRAW_MENU_EVENT) => {
		menuDiv.append(DrawColourOptions())
	});

	// == ATTACH == //
	wrapper.append(...[
		ColourButton,
		fontButton,
		borderButton,
		menuDiv
	]);
	return wrapper;
}

export { DrawStyleNav }