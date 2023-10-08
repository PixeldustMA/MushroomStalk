import { AccessFolder } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";
import { changeBox, setTemplateStyle } from "../Operations/DrawController.js";
import { readState, saveState } from "../Operations/StateController.js";
import { create } from "../Utility/Creation.js";
import { pathCreation } from "../Utility/Radar.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    DISPLAY TEMPLATE CHOICES       //
// ================================= //

async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}

let presetOptions = await getPresetOptions();
async function getPresetOptions() {
	let presetPath = await pathCreation('None', "ButtonTopLevelFolder")
	.then((result) => {return result});
let fileArray = await AccessFolder(presetPath)
	.then((result) => {return result});
return fileArray;
}
let editChoice = new create(
	{
		tag: 'select',
		id: "Select_Choose_Template_Part",
		classes: ['jellyfishSelect', 'focus'],
		options: ['CHOOSE TYPE', 'PRESET FILE', 'LOCATION FILE', 'THEME FILE']
	}).init();
let presetDropDown = new create({
		tag: 'select',
		options: presetOptions
	}).init();

function DrawTemplateChoice (presetName, wrapper) {

	// == WRAPPERS == //
	let presetBoxDiv = new create(
		{
			tag: 'div',
			classes: ["container"]
		}).init();
	let miniWrapper = new create(
		{
			tag: 'div',
			id: "Wrapper_Select"
		}).init();

	// == BUTTONS == //
	let stylePresetButton = new create(
			{
				tag: 'button',
				id: 'Button_style_Preset',
				classes: ['Buttons_Edit'],
				elementText: 'STYLE'
		}).init();
	let newPresetButton = new create(
		{
			tag: 'button',
			id: 'Button_New_Preset',
			classes: ['Buttons_Edit'],
			elementText: 'EDIT PRESET'
		}).init();

	// == TEXT == //
	let selectedButton = new create ({
		tag: 'h3',
		elementText: 'SELECTED BUTTON'
	}).init();
	let presetBoxHeader = new create(
		{
			tag: 'h3',
			id: "Header_Current_Preset", 
			classes: ['presetDisplayText'],
			elementText: presetName
		}).init();

	// == EVENT LISTENERS == //
	stylePresetButton.addEventListener('click', (CHANGE_STYLE_EVENT) => {
		changeBox('colours', 'right');
		changeBox('nav', 'centre');
	});
	newPresetButton.addEventListener('click', (CREATE_NEW_PRESET_EVENT) => {
		readState()
			.then((result) => {
				result.Template = setTemplateStyle();
				changeBox('Edit', 'centre')
				return result;
			});
	});
	editChoice.onchange = changeBoxDisplay;
	presetDropDown.onchange = changePresetInUse;

	// == BUILD == //
	miniWrapper.appendChild(editChoice);
	presetBoxDiv.append(... [
		presetBoxHeader,
		miniWrapper,
		stylePresetButton,
		newPresetButton,
		selectedButton,
		presetDropDown
	])
	wrapper.append(presetBoxDiv);
	return wrapper;
};
function changeBoxDisplay() {
	switch (editChoice.options[editChoice.selectedIndex].text) {
		case 'PRESET FILE':
			changeBox('Top', 'centre')			
			break;
		case 'LOCATION FILE':
			changeBox('Location', 'centre')
			break;
		case 'THEME FILE':
			changeBox('Theme', 'centre');
			break;
		default:
			break;
	}
};
async function changePresetInUse() {
	let activePreset = await getState().then((stateResult) => {
		let boxOption = presetDropDown.options[presetDropDown.selectedIndex].text
		let boxOptionStripped = boxOption.replace('.json', '');
		stateResult.Preset = boxOptionStripped;
		saveState(stateResult);
		return stateResult});
		window.location.reload();
	return activePreset;
}

export { DrawTemplateChoice }