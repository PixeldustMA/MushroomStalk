// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Renderer            //
// ================================= //
 
// == WRITE == // 
async function WelcomeSave (path, details) {
	const Write = await window.ipcRender.SaveData(path, details)
		.then((message) => {
			return message;
		})
		return Write;
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

export { WelcomeSave, AccessFolder, ReadFile, createNewPath }












		// getPathName: () => ipcRenderer.invoke('path'),
        // setTitle: (givenPath) => ipcRenderer.send('STPTH', givenPath),
        // recievePathName: (givenPath) => ipcRenderer.invoke('bouncePath', givenPath),
        // writeToText: (details) => ipcRenderer.invoke('writeToFile', details),


// Write Message to Message.json
// async function WriteToMessage(Notes) {
// 	const write = await window.ipcRender.MessagePath();
// 	console.log("Write Successful");
// 	return write;
// }
// General write function

// async function readMessageFile() {
// // 	const Welcomes = await window.ipcRender.WelcomeMessage()
// // 		.then((note) => {
// // 			return note;
// // 		});
// // 	return Welcomes;
// // }

// // == PATH == //
// // Get Appdata Path
// async function getAppDataPath() {
// 	const appData = await window.ipcRender.getPath()
// 		.then((path) => {
// 			return path;
// 		});
// 	return appData;
// }

// Read User Settings File
// async function ReadPixel() {
// 	const readData = await window.ipcRender.readSettings()
// 		.then((data) => {
// 			return data;
// 		});
// 	return readData;
// }
// Read A Folder