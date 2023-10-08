import { createNewPath } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";

async function pathCreation(fileName, tag) {
	let pathString = ''
	switch (tag) {
		case "State":
			pathString = '/../../GIZMOS/COMPONENTS/JellyfishTable/Remember/State.json';
			break; 
		case "ButtonTopLevel":
			pathString = `../../GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates/TopLevel/${fileName}.json`
			break;
		case "ButtonLocation":
			pathString = `../../GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates/Locations/${fileName}.json`
			break;
		case "ButtonLocationFolder":
			pathString = '../../GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates/Locations'
			break;
		case "ButtonTopLevelFolder":
			pathString = `../../GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates/TopLevel`;
			break;
		case "ButtonTheme":
			pathString = `../../GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates/Themes/${fileName}.json`;
			break;
		case "ButtonThemeFolder":
			pathString = '../../GIZMOS/COMPONENTS/JellyfishTable/ButtonTemplates/Themes';
			break;
		case "TableTemplate":
			pathString = `../../GIZMOS/COMPONENTS/JellyfishTable/Templates/${fileName}.json`
			break;
		default:
			break;
	}
	let path = await createNewPath(pathString)
		.then((pathResult) => {return pathResult;});
	return path;
}

export { pathCreation };



