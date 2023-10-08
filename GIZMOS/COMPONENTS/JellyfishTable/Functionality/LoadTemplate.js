import { AccessFolder, ReadFile } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";
import { pathCreation } from "../Utility/Radar.js";

// READ THE TEMPLATE

async function readTemplateFromPath(templatePath) {
	let template = await ReadFile(templatePath)
		.then((templateResult) => {return templateResult;});
	return template;
}

// ACCESS POINT
async function fetchTemplate(templateName, tag) {
	if (tag === 'Location') {
		let templatePath = await pathCreation(templateName, "ButtonLocation")
			.then((pathResult) => {return pathResult;});
		let template = readTemplateFromPath(templatePath)
			.then((templateResult) => {return templateResult;});
		return template;
	}
	if (tag === 'Theme') {
		let templatePath = await pathCreation(templateName, "ButtonTheme")
			.then((pathResult) => {return pathResult;});
		let template = readTemplateFromPath(templatePath)
			.then((templateResult) => {return templateResult;});
			return template;
		}
	if (tag === 'TopLevel') {
		let templatePath = await pathCreation(templateName, 'ButtonTopLevel')
			.then((pathResult) => { return pathResult});
		let template = readTemplateFromPath(templatePath)
			.then((templateResult) => {return templateResult});
		return template;
	}
	if (tag === 'FullPresetObject') {
		let template = await createPresetObject(templateName)
			.then((topLevelResult) => {return topLevelResult});
		return template;
	}
	return template;
}

async function createPresetObject(nameOfPreset) {
	let resultObject = {};
	let topLevel = await fetchTemplate(nameOfPreset, "TopLevel")
		.then((result) => { return result });
	let location = await fetchTemplate(topLevel.LOCATION, "Location")
		.then((locationResult) => { return locationResult});
	let theme = await fetchTemplate(topLevel.THEME, "Theme")
		.then((themeResult) => { return themeResult});
	resultObject.Location = location;
	resultObject.Theme = theme;
	return resultObject;
}

async function readPresetList() {
	let presetList = await AccessFolder("GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates")
		.then((presets) => {return presets});
	return presetList;
}

// == TABLE TEMPLATES == //
async function fetchTableTemplate(templateName) {
	let templatePath = await pathCreation(templateName, "TableTemplate")
		.then((pathResult) => {return pathResult;});
	let template = readTemplateFromPath(templatePath)
		.then((templateResult) => {return templateResult;});
	return template;
}

export {fetchTableTemplate, readPresetList, fetchTemplate};
