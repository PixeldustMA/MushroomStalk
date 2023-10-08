import { Planet } from "../../DATABASE/PLANET/PlanetController.js";
import { Sunflower } from "../../DATABASE/PLANET/SunflowerController.js";
import { route } from "../../GEARS/GNOME/Routes.js";
import { Rattlesnake, ReadFile } from "../../GEARS/PLATYPUS/RenderFunctions.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";
import { getWeekday } from "../../GIZMOS/WIDGETS/Weekday.js";

// ======================= //
//  MUSHROOM NOTEBOOK     //
// ======================// 

// == SECTIONS == //
const Title = document.getElementById('Section_Notebook_Title');
const Display = document.getElementById('Section_Notebook_Display');
const Navigation = document.getElementById('Section_Notebook_Navigation');
const Scribble = document.getElementById('Section_Notebook_Scribble_Box');

// == ROUTES == //
const PantryRoute = await route("pantry");
const FrogRoute = await route("resident");
const activeCharacters = await ReadFile(PantryRoute);

// == STATES == //
let pantry = {}
const Resident = await ReadFile(FrogRoute);
const BundlePath = Resident.BUNDLEPATH;
const holdDetails = {
	CHAPTERNUMBER: 0,
	DETAILS: "Details Placeholder",
	DATE: [],
	TIMEZONE: "XX"
}
const fetchPantry = async () => {
	const pantryState = await ReadFile(PantryRoute);
	pantry = pantryState;
	return pantry;
}

// == DRAW == //
function drawTitlePanel() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let notebookTitle = new create({
		tag: 'h1',
		elementText: 'THE NOTEBOOK'
	}).init();
	wrapper.append(...[
		notebookTitle
	]);
	return wrapper;
}
function drawDisplayPanel() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div'
	}).init();

	// == TEXT == //
	let nameLabel = new create({
		tag: 'H3',
		elementText: 'CHARACTER NAME'
	}).init(); 

	// == BUTTONS ==//
	let charDraft = new create({
		tag: 'button',
		id: 'Button-Notebook-Choose-Draft',
		elementText: 'DRAFT'
	}).init();
	let charBundle = new create({
		tag: 'button',
		id: 'Button-Notebook-Choose-Bundle',
		elementText: 'BUNDLE'
	}).init();
	let charChrono = new create({
		tag: 'button',
		id: 'Button-Notebook-Choose-Chrono',
		elementText: 'CHRONO'
	}).init();
	let changeBooks = new create({
		tag: 'button',
		id: 'Button-Notebook-Change-Characters',
		elementText: 'CHANGE BOOKS'
	}).init();

	// == EVENTS == //
	fetchPantry();
	charDraft.addEventListener('click', (DRAFTEVET) => {
		pantry.ACTIVE = "Draft";
		nameLabel.innerHTML = pantry.DRAFT_CHARACTER;
	});
	charChrono.addEventListener('click', (CHRONOEVET) => {
		pantry.ACTIVE = "Chrono";
		nameLabel.innerHTML = pantry.CHRONO_CHARACTER;
	});
	charBundle.addEventListener('click', (BUNDLEEVET) => {
		pantry.ACTIVE = "Bundle";
		nameLabel.innerHTML = pantry.BUNDLE_CHARACTER;
	});
	changeBooks.addEventListener('click', (CHANGEBOOKEVENT) => {
		// TODO CHANGE PAGE TO SEARCH FORM;
		console.log("Not Implemeneted")
	})

	// == ATTATCH == // 
	wrapper.append(...[
		charDraft,
		charBundle,
		charChrono,
		changeBooks,
		nameLabel
	]);

	return wrapper;
}
function drawNavigationPanel() {

	let wrapper = new create({
		tag: 'div'
	}).init();
	let bundleButton = new create({
		tag: 'button',
		elementText: 'UPDATE BUNDLES',
		id: 'Button-Notebook-Update-Bundles',
		classes: ['menuButton']
	}).init();
	let newsButton = new create({
		tag: 'button',
		elementText: 'UPDATE NEWS',
		id: 'Button-Notebook-Update-News',
		classes: ['menuButton']
	}).init();
	let characterButton = new create({
		tag: 'button',
		elementText: 'ADD CHARACTER',
		id: 'Button-Notebook-Add-Character',
		classes: ['menuButton']
	}).init();
	let updateActiverButton = new create({
		tag: 'button',
		elementText: 'UPDATE CHARACTER',
		id: 'Button-Notebook-Update-Character',
		classes: ['menuButton']
	}).init();
	let planetButton = new create({
		tag: 'button',
		elementText: 'UPDATE PLANETS',
		id: 'Button-Notebook-Update-Planets',
		classes: ['menuButton']
	}).init();
	let newPlanetButton = new create({
		tag: 'button',
		elementText: 'NEW PLANET',
		id: 'Button-Notebook-New-Planet',
		classes: ['menuButton']
	}).init();
	let gotoMenuButton = new create({
		tag: 'button',
		elementText: 'GO TO PAGES',
		id: 'Button-Notebook-Goto-Menu',
		classes: ['menuButton']
	}).init();

	bundleButton.addEventListener('click', (e) => {
		console.log(pantry.ACTIVE)
		modifyScribbleBox('Bundle');
	});
	newsButton.addEventListener('click', (e) => {
		modifyScribbleBox('News');
	});
	characterButton.addEventListener('click', (e) => {
		modifyScribbleBox('Character');
	});
	updateActiverButton.addEventListener('click', (e) => {
		modifyScribbleBox('Active');
	});
	planetButton.addEventListener('click', (e) => {
		modifyScribbleBox('Planet');
	});
	newPlanetButton.addEventListener('click', (e) => {
		modifyScribbleBox('NewPlanet');
	});
	gotoMenuButton.addEventListener('click', (e) => {
		modifyScribbleBox('GoTo');
	});

	wrapper.append(...[
		bundleButton,
		newsButton,
		characterButton,
		updateActiverButton,
		planetButton,
		newPlanetButton,
		gotoMenuButton
	]);

	return wrapper;
}
function drawScribblePanel() {

	let wrapper = new create({
		tag: 'div',
		id: 'Wrapper-Notebook-Scribble'
	}).init();
	let scribbleBox = new create({
		tag: 'div',
		id: 'Button-Notebook-Scribble-Box'
	}).init();

	wrapper.append(...[
		scribbleBox
	]);

	return wrapper;
}
function drawNotebook() {

	Title.append(drawTitlePanel());
	Display.append(drawDisplayPanel());
	Navigation.append(drawNavigationPanel());
	Scribble.append(drawScribblePanel());

}
drawNotebook();

// == FUNCTIONS == //
function modifyScribbleBox(tag) {
	let currentMenu;
	switch (tag) {
		case "Bundle":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(bundleBox());
			break;
		case "News":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(newsBox());
			break;
		case "Character":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(characterBox());
			break;
		case "Active":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(activeCharacterBox());
			break;
		case "Planet":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(planetBox());
			break;
		case "NewPlanet":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(newPlanetBox());
			break;
		case "GoTo":
			currentMenu = document.getElementById('Wrapper-Notebook-Scribble').firstChild;
			document.getElementById('Wrapper-Notebook-Scribble').removeChild(currentMenu);
			document.getElementById('Wrapper-Notebook-Scribble').append(gotoBox());
			break;
		default:
			break;
	}
}
async function fetchBundle(state) {
	let x = await Rattlesnake([state.CHAPTERNUMBER, state.DETAILS, BundlePath, state.DATE, state.TIMEZONE, "None", state.CHARACTERNAME, state.TAG, state.UHX, state.WEEKDAY ]);
	if (x === true) {
		let container = document.getElementById('duplicateWrapper');
		let lab = new create({
			tag: 'label',
			elementText: 'DUPLICATE FOUND'
		}).init();
		let but = new create({
			tag: 'button',
			elementText: 'ALLOW DUPLICATE?',
			id: 'duplicateButton'
		}).init();
		but.addEventListener('click', (event) => {
				Rattlesnake([holdDetails.CHAPTERNUMBER, holdDetails.DETAILS, BundlePath, holdDetails.DATE, holdDetails.TIMEZONE, "Confirm", state.CHARACTERNAME, state.TAG, state.UHX ])
					.then((rattleResult) => {return rattleResult})
		});
		container.append(...[lab, but])
	}
}

// == BOXES == // 
function bundleBox() {

	// WRAPPERS
	let wrapper = new create({
		tag: 'div',
		id: 'Wrapper_Bundle_Form'
	}).init();

	// TITLES
	let bundleHeader = new create({
		tag: 'h2',
		id: 'Header_Bundle_Form',
		elementText: 'BUNDLE BOX'
	}).init();

	// INPUTS
	let pageNumberInput = new create({
		tag: 'input',
		id: 'Input_Bundle_Chapter_Number',
		boxName: 'Box_pageNumber'
	}).init();
	let detailsInput = new create({
		tag: 'input',
		id: 'Input_Bundle_Detail',
		boxName: 'Box_details'
	}).init();
	let yearInput = new create({
		tag: 'input',
		id: 'Input_Bundle_Year',
		boxName: 'Box_year'
	}).init();
	let dayInput = new create({
		tag: 'input',
		id: 'Input_Bundle_Day',
		boxName: 'Box_day'
	}).init();
	let monthInput = new create({
		tag: 'input',
		id: 'Input_Bundle_Month',
		boxName: 'Box_month'
	}).init();
	let timezoneInput = new create({
		tag: 'input',
		id: 'Input_Bundle_TimeZone',
		boxName: 'Box_timeZone'
	}).init();

	// LABELS
	let pageNumberLabel = new create({
		tag: 'label',
		id: 'Label_Bundle_Chapter_Number',
		elementText: 'Declare Chapter Number',
		labelFor: 'Box_pageNumber'
	}).init();
	let detailsLabel = new create({
		tag: 'label',
		id: 'Label_Bundle_Detail',
		elementText: 'Declare Details',
		labelFor: 'Box_details'
	}).init();
	let yearLabel = new create({
		tag: 'label',
		id: 'Label_Bundle_Year',
		elementText: 'Declare Year',
		labelFor: 'Box_year'
	}).init();
	let dayLabel = new create({
		tag: 'label',
		id: 'Label_Bundle_Day',
		elementText: 'Declare Day',
		labelFor: 'Box_day'
	}).init();
	let monthLabel = new create({
		tag: 'label',
		id: 'Label_Bundle_Month',
		elementText: 'Declare Month',
		labelFor: 'Box_month'
	}).init();
	let timezoneLabel = new create({
		tag: 'label',
		id: 'Input_Bundle_TimeZone',
		elementText: 'Declare Time Zone',
		labelFor: 'Box_timeZone'
	}).init();
	let dupcheckDiv = new create({
		tag: 'div',
		id: 'duplicateWrapper'
	}).init();
	// BUTTONS
	let submitBundle = new create({
		tag: 'button',
		elementText: 'SUBMIT'
	}).init();

	wrapper.append(...[ 
		bundleHeader,

		pageNumberLabel,
		pageNumberInput,
		
		detailsLabel,
		detailsInput,

		yearLabel,
		yearInput,

		monthLabel,
		monthInput,

		dayLabel,
		dayInput,

		timezoneLabel,
		timezoneInput,
		submitBundle,
		dupcheckDiv
	]);
	submitBundle.addEventListener('click', (EVENT) => {

		let bundleState = {
			PAGENUMBER: parseInt(pageNumberInput.value),
			DETAILS: detailsInput.value,
			DATE: [yearInput.value, monthInput.value, dayInput.value],
			TIMEZONE: timezoneInput.value,
			CHARACTERNAME: "characterName",
			UHX: 0,
			TAG: "Bundle",
			WEEKDAY: "NONE"
		}
		if (pantry.ACTIVE === "Bundle") {
			console.log("Bundle Option Chosen")

			bundleState.CHARACTERNAME = activeCharacters["BUNDLE_CHARACTER"].replace(" ", "#");
			bundleState.TAG = "Bundle"
			holdDetails.CHAPTERNUMBER = parseInt(pageNumberInput.value);
			holdDetails.DETAILS = detailsInput.value;
			holdDetails.DATE = [yearInput.value, monthInput.value, dayInput.value];
			holdDetails.TIMEZONE = timezoneInput.value;

			let spreadsheetData = fetchBundle(bundleState).then((x) => {return x});
		};

		if (pantry.ACTIVE === "Chrono") {
			console.log("Chrono Option Chosen");

			bundleState.CHARACTERNAME = activeCharacters["CHRONO_CHARACTER"].replace(" ", "#");
			bundleState.TAG = "Chrono"
			const sun = new Sunflower(bundleState.TIMEZONE.toUpperCase(), "UHX", bundleState.DATE[0]);
			let y = sun.UHXTime().then((result) => {
				bundleState.UHX = result				
				return result});

			let weekday = getWeekday(bundleState.DATE[0], bundleState.DATE[1], bundleState.DATE[2]);
			const dayNames = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
			bundleState.WEEKDAY = dayNames[weekday];

			console.log(bundleState)

			holdDetails.CHAPTERNUMBER = parseInt(pageNumberInput.value);
			holdDetails.DETAILS = detailsInput.value;
			holdDetails.DATE = [yearInput.value, monthInput.value, dayInput.value];
			holdDetails.TIMEZONE = timezoneInput.value;

			let spreadsheetData = fetchBundle(bundleState).then((x) => {return x});

		};
		if (pantry.ACTIVE === "Draft") {
			console.log("Draft Option Chosen");
		}
	});
	return wrapper;
};
function newsBox() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let newsHeader = new create({
		tag: 'h2',
		elementText: 'NEWS BOX'
	}).init();
	wrapper.append(...[ newsHeader]);
	return wrapper;
};
function characterBox() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let newCharacterHeader = new create({
		tag: 'h2',
		elementText: 'NEW CHARACTER BOX'
	}).init();
	wrapper.append(...[ newCharacterHeader]);
	return wrapper;
};
function activeCharacterBox() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let activeCharacterHeader = new create({
		tag: 'h2',
		elementText: 'UPDATE ACTIVE CHARACTER BOX'
	}).init();
	wrapper.append(...[ activeCharacterHeader]);
	return wrapper;
};
function planetBox() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let planetHeader = new create({
		tag: 'h2',
		elementText: 'UPDATE PLANET BOX'
	}).init();
	wrapper.append(...[ planetHeader]);
	return wrapper;
};
function newPlanetBox() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let newPlanetHeader = new create({
		tag: 'h2',
		elementText: 'NEW PLANET BOX'
	}).init();
	wrapper.append(...[ newPlanetHeader]);
	return wrapper;
};
function gotoBox() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let gotoHeader = new create({
		tag: 'h2',
		elementText: 'GOTO BOX'
	}).init();
	wrapper.append(...[ gotoHeader]);
	return wrapper;
}
