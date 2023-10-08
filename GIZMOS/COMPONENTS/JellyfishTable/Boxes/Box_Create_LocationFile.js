import { changeBox} from "../Operations/DrawController.js";
import { readState } from "../Operations/StateController.js";
import { create } from "../Utility/Creation.js";
import { DefaultLocation } from "../ButtonTemplates/DefaultTemplates.js";
import { saveTemplate } from "../Operations/TemplateController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       ADD NEW LOCATION PRESET     //
// ================================= //


// STATE OBJECT
async function getState() {
	let state = await readState()
		.then((result) => {return result});
	return state;
}
function DrawLocationCreate() {

	// == WRAPPERS == //
	let wrapper = new create(
		{
			tag: 'div'
		}).init();
	
	// == HEADERS == //
	let BoxHeader = new create({
		tag: 'h2',
		elementText: 'CREATE NEW LOCATION TEMPLATE',
		classes: ['Header_DisplayLabels']
	}).init();
	let defaultLocationLabel = new create({
		tag: 'label',
		id: 'Label_New_Location_Default',
		elementText: 'Name New Location',
		classes: ['jellyfishDefaultLabel'],
		labelFor: 'chooseDefaultName'
	}).init();

	// == INPUT == //
	let nameDefaultLocation = new create({
		tag: 'input',
		id: 'Input_New_Location_Default',
		classes: ['jellyfishDefaultInputBox'],
		boxName: 'chooseDefaultName'
	}).init();

	// == BUTTONS == //
	let submitNewLocation = new create({
		tag: 'button',
	}).init();

	submitNewLocation.style.background="url('../../ASSETS/IMAGES/BUTTONS/save button.png')";
	submitNewLocation.style.width = "108px";
	submitNewLocation.style.height = "54px";
	submitNewLocation.style.border = "none";
	// == EVENT LISTENERS == //
	submitNewLocation.addEventListener('click', (LocationSubmitEvent) => {
		let locationObj = DefaultLocation();
		let locationName = nameDefaultLocation.value;
		saveTemplate(locationObj, locationName, 'ButtonLocation' )
		changeBox('Display', 'centre')
	})
	// == ATTACH == //
	wrapper.append(...[
		BoxHeader,
		nameDefaultLocation,
		defaultLocationLabel,
		submitNewLocation
	]);
	return wrapper
}

export { DrawLocationCreate };