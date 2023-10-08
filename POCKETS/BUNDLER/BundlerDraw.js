import { spreadsheetObject } from "../../GEARS/PLATYPUS/RenderFunctions.js";

let viewBox = document.getElementById('bundleViewerBox');
await spreadsheetObject("Rejenni.xlsx")
	.then((result) => {
		document
		.getElementById('bundleViewerBox')
		.setHTML(result);
		return result});


