import { changeBox} from "../Operations/DrawController.js";
import { readState } from "../Operations/StateController.js";
import { create } from "../Utility/Creation.js";
import { DefaultLocation } from "../ButtonTemplates/DefaultTemplates.js";
import { SaveTopLevelTheme, saveTemplate } from "../Operations/TemplateController.js";
import { fetchTemplate } from "../Functionality/LoadTemplate.js";
import { pathCreation } from "../Utility/Radar.js";
import { AccessFolder } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       EDIT EXISTING PRESET        //
// ================================= //

async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}
let themeOptions = await getThemeOptions();
let locationOptions = await getLocationOptions();

async function getLocationOptions() {
	let locPath = await pathCreation('None', "ButtonLocationFolder")
		.then((result) => {return result});
	let fileArray = await AccessFolder(locPath)
		.then((result) => {return result});
	return fileArray;
}
async function getThemeOptions() {
	let locPath = await pathCreation('None', "ButtonThemeFolder")
	.then((result) => {return result});
let fileArray = await AccessFolder(locPath)
	.then((result) => {return result});
return fileArray;
}
let displayLocation = new create({
	tag: 'h3',
	id: 'HeaderDisplayLocation',
	classes: ['Header_DisplayLabels']
}).init();
let dropDownLocation  = new create({
	tag: 'select',
	id: 'selectLocation',
	options: locationOptions
}).init();
let displayTheme = new create({
	tag: 'h3',
	id: 'HeaderDisplayTheme',
	classes: ['Header_DisplayLabels']
}).init();
let dropDownTheme  = new create({
	tag: 'select',
	id: 'selectTheme',
	options: themeOptions
}).init();
function DrawEditBox() {

	let wrapper = new create({
		tag: 'div',
		id: 'WrapperEditBox'
	}).init();
	let presetheader = new create({
		tag: 'h2',
		id: 'HeaderPresetInUse',
		elementText: 'CHANGE PRESET TEMPLATE',
		classes: ['Header_DisplayLabels']
	}).init();

	let editButton = new create({
		tag: 'button',
		id: 'ButtonEdit',
		elementText: 'SAVE'
	}).init()

	dropDownTheme.onchange = changeDisplayTheme;
	dropDownLocation.onchange = changeDisplayLocation;
	getState()
	.then((stateResult) => {
		let boxTitle = stateResult.Preset;
		setTimeout(()=> {
			fetchTemplate(boxTitle, "TopLevel")
			.then((result) => {
				displayLocation.innerHTML = result.LOCATION
				displayTheme.innerHTML = result.THEME})
			}, 1000)
			
	});

	editButton.addEventListener('click', (SAVE_EVENT) => {

		getState()
		.then((stateResult) => {
			let boxTitle = stateResult.Preset;
			fetchTemplate(boxTitle, "TopLevel")
			.then((result) => {
				result.LOCATION = displayLocation.innerHTML.replace('.json', "");
				result.THEME = displayTheme.innerHTML.replace('.json', "");
				saveTemplate(result, boxTitle, 'ButtonTopLevel')
			
			})
		})
			// REPLACE BASED ON INNER HTML
	})
	wrapper.append(...[
		presetheader,
		displayLocation,
		dropDownLocation,
		displayTheme,
		dropDownTheme,
		editButton
	])

	return wrapper
}


function changeDisplayTheme() {
	let themeString = dropDownTheme.options[dropDownTheme.selectedIndex].text
	let stripped = themeString.replace('.json', '');
	console.log(stripped)
	displayTheme.innerHTML = stripped;

}

function changeDisplayLocation() {
	displayLocation.innerHTML = dropDownLocation.options[dropDownLocation.selectedIndex].text
}
export { DrawEditBox }