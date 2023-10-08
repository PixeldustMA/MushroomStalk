// == SECTIONS == //

import { character } from "../../DATABASE/CHARACTER/Character.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";

const titleSection = document.getElementById('Section_TitleBar');
const mainDetailsSection = document.getElementById('Section_Main_Details');
const additionalDetailsSection = document.getElementById('Section_Additional_Details')

let sectionDisplayMode = "Dragon";
const char = new character();
const details = await char.readCurrent();

// == DRAW PLANET PANELS ==//

function drawPlanetTitlePanel() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let meatTitle = new create({
		tag: 'h1',
		elementText: "NAME: "
	}).init();
	let characterName = new create({
		tag: 'h1',
		elementText: 'Name goes here'
	}).init();

	characterName.innerHTML = details.First + " " + details.Last;

	wrapper.append(...[
		meatTitle,
		characterName
	]);

	return wrapper;
}
function drawDragonTitlePanel() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let meatTitle = new create({
		tag: 'h1',
		elementText: "DRAGON NAME: "
	}).init();
	let characterName = new create({
		tag: 'h1',
		elementText: 'Name goes here'
	}).init();

	characterName.innerHTML = details.First + " " + details.Last;

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

	// let birthYearTitle = new create({
	// 	tag: 'h2',
	// 	elementText: 'Birth Year: '
	// }).init();
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