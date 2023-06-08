import { newUser } from "../../SETTINGS/USER/LoadUser.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Run On Start              //
// ================================= //


// sync files on start
const appUser = newUser();
const initialised = async() => {
	const use = await appUser.Init()
	.then((result) => {
		return result;
	});
	return use;
}

// get necessary paths
async function getAppPath() {
	const Message = await initialised()
	.then((result) => {
		const path = result.MessagePath;
		return path;
	})
	return Message;
}
async function getUserPath() {
	const Bounce = await initialised()
	.then((result) => {
		const user = result.localPath;
		return user;
	})
	return Bounce;
}
async function getTextPath() {
	const text = await initialised()
	.then((result) => {
		const textpath = result.DesktopPath;
		return textpath;
	})
	return text;
}
// create an object
async function getObject() {
	const appPath = await getAppPath().then((x) => {
		return x;
	});
	const userPath = await getUserPath().then((x) => {
		return x
	})
	const textPath = await getTextPath().then((x) => {
		return x
	})
	const settings = {
		appPath: appPath,
		userPath: userPath,
		textFilePath: textPath
	}
	console.log("SETTINGS");
	console.log(settings)
	return settings;
}

// // get all welcome messages
// async function LoadMessages() {
// 	const path = await getObject().then((x) => {
// 		const file = x.textFilePath;
// 		return file
// 	})
// 	const message = await getMessage(path).then((x) => {
// 		return x
// 	})
// 	return message
// };
// // copy messages to message.json
// async function writeWelcome() {
// 	const load = await LoadMessages().then((x) => {
// 		window.ipcRender.MessagePath(x)
// 		return x
// 	}) 
// 	return load
// }
// writeWelcome();

// Access welcome messages
// async function getMessage(path) {

// 	const n = await window.ipcRender.MessageRead(path).then((x) => {
// 		return x;
// 	})
// 	return n
// } 



export {getObject};