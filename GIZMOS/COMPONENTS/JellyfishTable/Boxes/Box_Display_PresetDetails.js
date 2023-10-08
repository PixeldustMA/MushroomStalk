import { create } from "../Utility/Creation.js";
import { readState } from "../Operations/StateController.js";
import { fetchTemplate } from "../Functionality/LoadTemplate.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       DISPLAY PRESET DATA         //
// ================================= //

async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}

function DrawDisplayPreset() {

	// == WRAPPERS AND BOXES == //
	let wrapper = new create({
		tag: 'div',
		id: 'wrapper_Button_Box'
	}).init();

	// == HEADERS == //
	let LabelPresetName = new create({
		tag: 'h3',
		id: 'Header_Title_Preset_Name',
		elementText: 'CURRENT ACTIVE PRESET IS:',
		classes: ['Header_DisplayLabels']
	}).init();
	let LabelLoadPresetName = new create({
		tag: 'h3',
		id: 'Header_Title_Preset_StateName',
		elementText: 'PlaceHolder for Preset Name',
		classes: ['Header_DisplayLabels']
	}).init();
	let LabelLocationName = new create({
		tag: 'h3',
		id: 'Header_Title_Location_Name',
		elementText: 'CURRENT ACTIVE Location IS:',
		classes: ['Header_DisplayLabels']
	}).init();
	let LabelLoadLocationName = new create({
		tag: 'h3',
		id: 'Header_Title_Location_StateName',
		elementText: 'PlaceHolder for Location Name',
		classes: ['Header_DisplayLabels']
	}).init();
	let LabelThemeName = new create({
		tag: 'h3',
		id: 'Header_Title_Theme_Name',
		elementText: 'CURRENT ACTIVE Theme IS:',
		classes: ['Header_DisplayLabels']
	}).init();
	let LabelLoadThemeName = new create({
		tag: 'h3',
		id: 'Header_Title_Theme_StateName',
		elementText: 'PlaceHolder for Theme Name',
		classes: ['Header_DisplayLabels']
	}).init();

	// == OPERATIONS = // 
	getState()
		.then((stateResult) => {
			LabelLoadPresetName.innerHTML = stateResult.Preset;
		});
	setTimeout(()=> {
		fetchTemplate(LabelLoadPresetName.innerHTML, "TopLevel")
		.then((result) => {
			LabelLoadLocationName.innerHTML = result.LOCATION
			LabelLoadThemeName.innerHTML = result.THEME})
	}, 2000)

	
	// == ATTACHMENTS == // 
	wrapper.append(...[
		LabelPresetName,
		LabelLoadPresetName,
		LabelLocationName,
		LabelLoadLocationName,
		LabelThemeName,
		LabelLoadThemeName
	]);
	return wrapper;
}

export { DrawDisplayPreset }