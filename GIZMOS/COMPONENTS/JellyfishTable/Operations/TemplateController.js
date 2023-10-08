import { WelcomeSave, ReadFile } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";
import { pathCreation } from "../Utility/Radar.js";


async function fetchTemplate(templateName, tag) {
	if (tag === 'Location') {
		let templatePath = await fetchTemplateLocationPath(templateName)
			.then((pathResult) => {return pathResult;});
		let template = readTemplateFromPath(templatePath)
			.then((templateResult) => {return templateResult;});
		return template;
	}
	if (tag === 'Theme') {
		let templatePath = await fetchTemplateThemePath(templateName)
			.then((pathResult) => {return pathResult;});
		let template = readTemplateFromPath(templatePath)
			.then((templateResult) => {return templateResult;});
			return template;
		}
	return template;
}

async function fetchTemplateLocationPath(templateName) {
	let templatePath = await pathCreation(templateName, "ButtonLocation")
		.then((pathResult) => {console.log(pathResult); return pathResult;});
	return templatePath;
};
async function fetchTemplateThemePath(templateName) {
	let templatePath = await pathCreation(templateName, "ButtonTheme")
		.then((pathResult) => {return pathResult;});
	return templatePath;
};

async function TopLevelLocation(templateToplevelName) {
	let top = await fetchButtonTemplate(templateToplevelName)
		.then((topResult) => {return topResult});
	let TopLevelLocation = fetchTemplate(top.LOCATION, "Location")
		.then((TopLevelObject) => {return TopLevelObject;});
	return TopLevelLocation;
}
async function TopLevelTheme(templateToplevelName) {
	let top = await fetchButtonTemplate(templateToplevelName)
	.then((topResult) => {return topResult});
	let TopLevelLocation = fetchTemplate(top.THEME, "Theme")
	.then((TopLevelObject) => {return TopLevelObject;});
return TopLevelLocation;
}
async function fetchButtonTemplate(templateName) {
	let templatePath = await pathCreation(templateName, 'ButtonTopLevel')
		.then((pathResult) => {return pathResult;});
	let template = readTemplateFromPath(templatePath)
		.then((templateResult) => {return templateResult;});
	return template;
}

async function SaveTopLevelTheme(theme, location) {
	let savePath = await pathCreation(location, 'ButtonTheme')
		.then((result) => {
			WelcomeSave(result, theme);
		})
}
async function readTemplateFromPath(templatePath) {
	let template = await ReadFile(templatePath)
		.then((templateResult) => {return templateResult;});
	return template;
}

function createButtonPresetObject(one, two, three, four) {

	const PresetObject = {
		rowOne: {},
		rowTwo: {},
		rowThree: {},
		rowFour: {}
	}
	if (one.length !== 0) {
		one.forEach(button => {
			let titleOfButton = button.replace('Button', '').toLowerCase();
			PresetObject.rowOne[titleOfButton] = button;
		});
	}
	if (two.length !== 0) {
		two.forEach(button => {
			let titleOfButton = button.replace('Button', '').toLowerCase();
			PresetObject.rowTwo[titleOfButton] = button;
		});
	}
	if (three.length !== 0) {
		three.forEach(button => {
			let titleOfButton = button.replace('Button', '').toLowerCase();
			PresetObject.rowThree[titleOfButton] = button;
		});
	}
	if (four.length !== 0) {
		four.forEach(button => {
			let titleOfButton = button.replace('Button', '').toLowerCase();
			PresetObject.rowFour[titleOfButton] = button;
		});
	}
	return PresetObject;
}

// async function getObject(presetName) {
// 	const PresetHold = await pathCreation(presetName, 'ButtonTopLevel')
// 	.then((pathResult) => {return pathResult;});
// 	const PresetObject = ReadFile(PresetHold)
// 	.then((templateResult) => {return templateResult;});
// 	return PresetObject;
// }

async function saveTemplate(ButtonObject, presetName, tag) {
	const path = await pathCreation(presetName, tag)
		.then((pathString) => {return pathString});
	const Saved = await WelcomeSave(path, ButtonObject)
		.then((result) => {return result});
}
export { TopLevelTheme, SaveTopLevelTheme, fetchButtonTemplate,
		createButtonPresetObject, saveTemplate }