import { readState, saveState } from "../Operations/StateController.js";
import { create } from "../Utility/Creation.js"
import { fetchTemplate } from "../Functionality/LoadTemplate.js";
import { createTheme } from "../../../../SETTINGS/Colours/ThemeWrangler.js";
// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       COLOUR DETAIL DISPLAY       //
// ================================= //

let imageSourceTag = ''
async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}
async function getColourPalette() {
	let state = await getState()
		.then((stateResult) => {
			let nameOfPreset = stateResult.Preset;
			let template = fetchTemplate(nameOfPreset, "FullPresetObject")
				.then((result) => {
					let buttonThemes = result.Theme.colourPalette;
					imageSourceTag += buttonThemes;
					return result;
				});
			return stateResult;
		})
};
async function generateThemesList() {
	let themeList = createTheme()
		.then((result) => {return result;})
	return themeList;
}
function getSquareSource() {
	setTimeout(() => {
	paletteImage.src = '../../ASSETS/IMAGES/PALETTES/' + imageSourceTag;
}, 2000);}

getColourPalette();
getSquareSource();

const jellyfishOptions = await generateThemesList();
let paletteImage = new create({
	tag: 'img',
	id: 'RAINBOW_PALETTE'
}).init();
let dropDownTheme = new create({
	tag: 'select',
	id: 'Select_DropDownTheme',
	options: jellyfishOptions
}).init();

function DrawStylePicker() {

	// == WRAPPER == //
	let wrapper = new create({
		tag: 'div'
	}).init();
	let colourBlockDiv = new create({
		tag: 'div'
	}).init(); 
	// == HEADERS == //
	let buttonHeader = new create({
		tag: 'h3',
		id: 'Header_Current_Button',
		classes: ['presetDisplayText'],
		elementText: 'Currently Selected Button'
		}).init();

	// == BUTTONS == //
	let selectButton = new create({
		tag: 'button',
		id: 'Button_Select_ActiveButton',
		classes: ['defaultButton'],
		elementText: 'SELECT'
	}).init();
	dropDownTheme.onchange = changePalette;
	// == EVENT LISTENERS == //
	selectButton.addEventListener('click', (event) => {
		window.addEventListener('click', clicked);
		document.addEventListener("keyup", function(event) {
			if (event.code === 'Enter') {
				window.removeEventListener("click", clicked);
				selectButton.innerHTML = 'SELECT';
			}
		})
	});
	colourBlockDiv.append(paletteImage);
	// == ATTACHMENTS == //
	wrapper.append(...[
		buttonHeader,
		selectButton,
		colourBlockDiv,
		dropDownTheme
	]);
	return wrapper;
}

function clicked() {
	let panel = document.querySelector('jellyfish-buttons');
	let shadow = panel.shadowRoot;
	let button = shadow.getElementById('Button_Select_ActiveButton');
	button.innerHTML = 'SELECTING';
	if (event.composedPath()[0].id !== 'Button_Select_ActiveButton') {
		const newLabel = shadow.getElementById('Header_Current_Button');
		newLabel.innerHTML = event.composedPath()[0].id;
		getState()
			.then((result) => {
				result.ActiveButton = newLabel.innerHTML
				saveState(result);
			});
	}
};
function changePalette() {
	paletteImage.src = '../../ASSETS/IMAGES/PALETTES/' + dropDownTheme.options[dropDownTheme.selectedIndex].text;
}
export { DrawStylePicker}