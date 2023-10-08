// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Renderer            //
// ================================= //

// == WRITE == // 
async function WelcomeSave (path, details) {
	const Write = await window.ipcRender.SaveData(path, details)
		.then((message) => {return message;})
		return Write;
}
async function createNewFile(path, details) {
	const writeNewFile = await window.ipcRender.SaveToNewFile(path, details)
		.then((result) => {return result;});
	return writeNewFile;
} 
// == READ == // 
async function AccessFolder(folder) {
	const FolderData = await window.ipcRender.ReadFolder(folder)
		.then((data) => {
			return data;
		});
	return FolderData 
}
async function ReadFile(pathName) {
	const notes = await window.ipcRender.ReadMessage(pathName)
	.then((Note) => {
		console.log("B")
		return JSON.parse(Note);
	})
	return notes;
}
// == PATH ==//
async function createNewPath(relativePath) {
	const path = await window.ipcRender.RetrievePath(relativePath)
		.then((result) => {
			return result;
		});
	return path;
}
// == WINDOWS == //
async function createNewWindow(path) {
	const drawNew = await window.ipcRender.DrawWindow(path)
	return drawNew
}

async function spreadsheetObject(path) {
	const data = await window.ipcRender.Libra(path)
		.then((result) => {return result;
		})
	return data;
}

async function Quack(request) {
	const quacking = await window.ipcRender.AskDuck(request)
		.then((result) => {
			console.log("Query Recieved");
			return result;
		});
	return quacking;
}

async function Rattlesnake(request) {
	const snek = await window.ipcRender.Rattle(request);
	console.log(snek)
	if (snek === "Check works!!!") {
		console.log("Check Check")
		return true
	}
	console.log("H")
	return snek
}
export { WelcomeSave, AccessFolder, ReadFile, 
		createNewPath, createNewWindow, spreadsheetObject,
		createNewFile, Quack, Rattlesnake}
