import { changeBox } from "../Operations/DrawController.js";
import { readState } from "../Operations/StateController.js";
import { create } from "../Utility/Creation.js";
import { DefaultTheme } from "../ButtonTemplates/DefaultTemplates.js";
import { saveTemplate } from "../Operations/TemplateController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       ADD NEW THEME PRESET     //
// ================================= //


async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}
function DrawThemeCreate() {

	// == WRAPPERS == //
	let wrapper = new create(
		{
			tag: 'div'
		}).init();

	// == HEADERS == //
	let BoxHeader = new create({
		tag: 'h2',
		elementText: 'CREATE NEW THEME TEMPLATE',
		classes: ['Header_DisplayLabels']
	}).init();
	let defaultThemeLabel = new create({
		tag: 'label',
		id: 'Label_New_Theme_Default',
		elementText: 'Name New Theme',
		classes: ['jellyfishDefaultLabel'],	
		labelFor: 'chooseDefaultName'
	}).init();

	// == INPUT == //
	let nameDefaultTheme = new create({
		tag: 'input',
		id: 'Input_New_Theme_Default',
		classes: ['jellyfishDefaultInputBox'],
		boxName: 'chooseDefaultName'
	}).init();

	// == BUTTONS == //
	let submitDefaultTheme = new create({
		tag: 'button',
		elementText: 'DefaultTheme',
		classes: ['defaultButton']
	}).init();

	// == LISTENERS == //
	submitDefaultTheme.addEventListener('click', (submitThemeEvent) => {
		let ThemeObj = DefaultTheme();
		let ThemeName = nameDefaultTheme.value;
		saveTemplate(ThemeObj, ThemeName, 'ButtonTheme');
		changeBox('Display', 'centre')
	})

	// == ATTACH == //
	wrapper.append(...[
		BoxHeader,
		nameDefaultTheme,
		defaultThemeLabel,
		submitDefaultTheme
		]);
	return wrapper
}

export { DrawThemeCreate }