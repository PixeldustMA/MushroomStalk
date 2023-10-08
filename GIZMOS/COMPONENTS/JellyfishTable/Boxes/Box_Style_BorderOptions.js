import { create } from "../Utility/Creation.js"

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//       Last Updated - v0.8         //
//          COLOUR MENU              //
// ================================= //

function DrawBorderOptions() {

	let wrapper = new create({
		tag: 'div',
		id: 'borderWrapper'
	}).init();
	let dashButton = new create({
		tag: 'button',
		id: 'buttonDashed',
		elementText: 'DASHED'
	}).init();
	let solidButton = new create({
		tag: 'button',
		id: 'buttonSolid',
		elementText: 'SOLID'
	}).init();
	let dottedButton = new create({
		tag: 'button',
		id: 'buttonDotted',
		elementText: 'SOLID'
	}).init();
	let doubleButton = new create({
		tag: 'button',
		id: 'buttonDouble',
		elementText: 'SOLID'
	}).init();
	let grooveButton = new create({
		tag: 'button',
		id: 'buttonGroove',
		elementText: 'SOLID'
	}).init();
	let ridgeButton = new create({
		tag: 'button',
		id: 'buttonRidged',
		elementText: 'SOLID'
	}).init();
	let insetButton = new create({
		tag: 'button',
		id: 'buttonInset',
		elementText: 'SOLID'
	}).init();
	let outsetButton = new create({
		tag: 'button',
		id: 'buttonOutset',
		elementText: 'SOLID'
	}).init();

	wrapper.append(...[
		dashButton,
		solidButton,
		dottedButton,
		doubleButton,
		grooveButton,
		ridgeButton,
		insetButton,
		outsetButton
	]);

	return wrapper;
}