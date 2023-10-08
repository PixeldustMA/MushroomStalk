import { create } from "../Utility/Creation.js";
import { AccessFolder } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";
import { changeBox } from "../Operations/DrawController.js";
import { pathCreation } from "../Utility/Radar.js";
import { saveTemplate } from "../Operations/TemplateController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       ADD NEW PRESET              //
// ================================= //

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

function DrawTopLevelCreate(){

		// == WRAPPERS == //
	let wrapper = new create(
		{
			tag: 'div'
		}).init();

	// == HEADERS == //
	let BoxHeader = new create({
		tag: 'h2',
		elementText: 'CREATE NEW PRESET',
		classes: ['Header_DisplayLabels']
	}).init();

	// == SELECT BOXES == //
	let DropdownTheme = new create({
		tag: 'select',
		options: themeOptions
	}).init();
	let LocationTheme = new create({
		tag: 'select',
		options: locationOptions
	}).init();

	// == INPUT BOXES == //
	let NamePreset = new create({
		tag: 'input'
	}).init();

	// == BUTTONS == //
	let submitPreset = new create({
		tag: 'button',
		elementText: 'CREATE'
	}).init();

	// == EVENT LISTENERS == //
	submitPreset.addEventListener('click', (event) => {
		let loc = LocationTheme.options[LocationTheme.selectedIndex].text;
		let location = loc.replace('.json', '');
		let theme = DropdownTheme.options[DropdownTheme.selectedIndex].text;
		let themePrepared = theme.replace('.json', '')
		let newPreset = { 
			LOCATION: location, 
			THEME: themePrepared
		};
		saveTemplate(newPreset, NamePreset.value, 'ButtonTopLevel');
		changeBox('Display','centre');
	});

	// == ATTACH == //
	wrapper.append(...[
		BoxHeader,
		DropdownTheme,
		LocationTheme,
		NamePreset,
		submitPreset
	]);
	return wrapper;
}

export { DrawTopLevelCreate }