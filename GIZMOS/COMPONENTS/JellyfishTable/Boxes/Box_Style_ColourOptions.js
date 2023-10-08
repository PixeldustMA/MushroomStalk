import { create } from "../Utility/Creation.js"
import { createTheme } from "../../../../SETTINGS/Colours/ThemeWrangler.js";
import { fetchTemplate } from "../Functionality/LoadTemplate.js";
import { SaveTopLevelTheme } from "../Operations/TemplateController.js";
import { readState } from "../Operations/StateController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//       Last Updated - v0.8         //
//          COLOUR MENU              //
// ================================= //

let imageSourceTag = ''
async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
};
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

function DrawColourOptions() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div'
	}).init();
	let colourBlockDiv = new create({
		tag: 'div'
	}).init(); 

	// == BUTTONS == //
	let eyeDropperButton = new create({
		tag: 'button',
		id: 'eyeDropper',
		elementText: 'EYEBALL',
		classes: ['defaultButton']
	}).init();
	let byColourButton = new create({
		tag: 'button',
		elementText: 'COLOUR NAME'
	}) .init();
	let chooseThemeButton = new create({
		tag: 'button',
		elementText: 'CHANGE THEME'
	}).init();
	let saveThemeButton = new create({
		tag: 'button',
		elementText: 'SAVE'
	}).init();

	// == DROP DOWNS == //
	const colourOptions = ['red', 'blue', 'green', 'black', 'white', 'pink', 'purple', 'orange', 'yellow']

	let dropDownColour = new create({
		tag: 'select',
		id: 'SelectDropDownColour',
		options: colourOptions
	}).init();

	// == LISTENERS == //
	chooseThemeButton.addEventListener('click', (SELECT_THEME_EVENT) => {
		if (colourBlockDiv.hasChildNodes) {
			dropDownColour.remove();
		}
		colourBlockDiv.append(dropDownTheme);
	});
	byColourButton.addEventListener('click', (SELECT_COLOUR_EVENT) => {
		if (colourBlockDiv.hasChildNodes) {
			dropDownTheme.remove();
		}
		colourBlockDiv.append(dropDownColour);
	});
	dropDownTheme.onchange = changePalette;
	saveThemeButton.addEventListener('click', (SAVE_THEME_EVENT) => {
		getState()
			.then((state) => {
				fetchTemplate(state.Preset, "TButtonopLevel")
					.then((template) => {
						let ObjectInUse = template['Theme'];
						let buttonPanel = document.querySelector('jellyfish-buttons');
						let shadow = buttonPanel.shadowRoot;
						let buttonArray = ['BoopButton', 'ExpandButton', 'ContractButton', 'EditButton', 'SaveButton', 'LoadButton', 'ClearButton'];
						buttonArray.forEach(button => {
							let changeColours = shadow.getElementById(button);
							let buttonTag = button.replace('Button', '').toLowerCase();
							let valueFormat = changeColours.style.backgroundColor.replace('rgb', '').split(',');
							let r = parseInt(valueFormat[0].replace('(', ''));
							let g = parseInt(valueFormat[1]);
							let b = parseInt(valueFormat[2].replace(')', ''));
							let hex = rgbToHex(r, g, b);
							ObjectInUse[buttonTag].Colour.HexCode = hex;
						});
						fetchTemplate(state.Preset, "ButtonTopLevel")
							.then((result) => {
								SaveTopLevelTheme(ObjectInUse, result.THEME);
							});
					})

				return state;
			})
	});
	eyeDropperButton.addEventListener('click', (EYE_DROPPER_EVENT) => {
		const eyeDropper = new EyeDropper();
		eyeDropper
			.open()
			.then((result) => {
				let buttonPanel = document.querySelector('jellyfish-buttons');
				let shadow = buttonPanel.shadowRoot;
				getState()
				.then((stateObject) => {
					let changeColours = shadow.getElementById(stateObject.ActiveButton);
					changeColours.style.backgroundColor = result.sRGBHex;
				})
			})	
			.catch((e) => {});
	});

	// == ATTACH == //
	colourBlockDiv.append(paletteImage);
	wrapper.append(...[
		colourBlockDiv,
		eyeDropperButton,
		byColourButton,
		chooseThemeButton,
		saveThemeButton,
		dropDownColour
	]);
	return wrapper;
}

function changePalette() {
	paletteImage.src = '../../ASSETS/IMAGES/PALETTES/' + dropDownTheme.options[dropDownTheme.selectedIndex].text;
}
const rgbToHex = (r, g, b) => "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);


export { DrawColourOptions }