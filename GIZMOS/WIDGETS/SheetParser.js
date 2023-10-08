import { createNewPath, spreadsheetObject } from "../../GEARS/PLATYPUS/RenderFunctions.js";

async function chooseSpreadsheet() {
	const path = await createNewPath('./test.ods');
	const data = await spreadsheetObject(path);
		console.log(data)
		console.log("SPREASDSHEET")
	return data;
}
async function getWorksheets() {
	const worksheetList = await chooseSpreadsheet();
	return worksheetList.SheetNames;
}
async function processData() {
	const workbook = await chooseSpreadsheet()
	const worksheets = await getWorksheets()
	const workingObject = {};
	let sheet = worksheets[0];
	let dataObject = workbook.Sheets[sheet];
	let addresses = Object.keys(dataObject);
	addresses.forEach(key => {
		workingObject[key] = dataObject[key].v
		console.log(key)
	});
	for (const key in workingObject) {
		if (typeof workingObject[key]  === "string") {
			let validKey = workingObject[key]
			if (validKey.includes('News')) {
				console.log("News Event at " + key + ": " + validKey)
			}
			else if (validKey.includes("Birth")) {
				console.log("Birth Event at " + key + ": " + validKey)	
			}
			else {
				console.log("Story event at: " + key + ": " + validKey)
			}
		}
	}

}

export { chooseSpreadsheet, processData};