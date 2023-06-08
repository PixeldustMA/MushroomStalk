import { getObject } from "../../POCKETS/STARTSCREEN/LoadInformation.js";
import { ReadFile } from "../../src/RenderFunctions.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//     Sync welcome messages         //
//  	   from sources              //
// ================================= // 

// Recieve State Object
const getstate = async () => {
	const result = await getObject();
	return result
}

// Access Local Template File
async function getMessage() {
	const Message = await getstate().then((result) => {
		return result.appPath
	})
	return Message;
}
async function ReadMessage() {
	const path = await getMessage()
		.then((messagePath) => {
			return messagePath;
		})
	const Messages = await ReadFile(path)
		.then((object) => {
			return object;
		})
	return Messages;
}

// Access User File
async function getUser() {
	const User = await getstate().then((result) => {
		return result.textFilePath
	});
	if (User !== "") {
		console.log("USER FOUND")
		return User;
	}
	else {
		console.log("NO USER FOUND");
		return "UnsetUser"
	}
}
async function ReadUser() {
	const path = await getUser()
		.then((messagePath) => {
			return messagePath;
		})
	if (path !== "UnsetUser"){
	const Messages = await ReadFile(path)
		.then((object) => {
			return object;
		})
	return Messages;}
	else {return "UnsetUser"}
}

// Merge the two objects
async function MergeMessage() {

	const Base = await ReadMessage().then((Message) => {
		console.log(Message)
		return Message;
	})
	const Custom = await ReadUser().then((NewMessage) => {
		console.log(NewMessage)
		return NewMessage;
	})
	if (Custom !== "UnsetUser"){
	const MessageObject = {...Base}
	const CustomObject = {...Custom}

	let BaseEPArray = Object.values(MessageObject.ENGLISH.POSITIVE);
	let BaseENArray = Object.values(MessageObject.ENGLISH.NEGATIVE);
	let BaseEMArray = Object.values(MessageObject.ENGLISH.MEMES);
	let BaseHPArray = Object.values(MessageObject.HAWAIIAN.POSITIVE);
	let BaseHNArray = Object.values(MessageObject.HAWAIIAN.NEGATIVE);
	let BaseHMArray = Object.values(MessageObject.HAWAIIAN.MEMES);

	let CustomEPArray = Object.values(CustomObject.ENGLISH.POSITIVE);
	let CustomENArray = Object.values(CustomObject.ENGLISH.NEGATIVE);
	let CustomEMArray = Object.values(CustomObject.ENGLISH.MEMES);
	let CustomHPArray = Object.values(CustomObject.HAWAIIAN.POSITIVE);
	let CustomHNArray = Object.values(CustomObject.HAWAIIAN.NEGATIVE);
	let CustomHMArray = Object.values(CustomObject.HAWAIIAN.MEMES);

	let ENGLISHPOSITIVE = [...BaseEPArray, ...CustomEPArray];
	let ENGLISHNEGATIVE = [...BaseENArray, ...CustomENArray];
	let ENGLISHMEME = [...BaseEMArray, ...CustomEMArray];
	let HAWAIIANPOSITIVE = [...BaseHPArray, ...CustomHPArray];
	let HAWAIIANNEGATIVE = [...BaseHNArray, ...CustomHNArray];
	let HAWAIIANMEME = [...BaseHMArray, ...CustomHMArray];

	const SyncedObject = {
		ENGLISH: {
			POSITIVE: ENGLISHPOSITIVE,
			NEGATIVE: ENGLISHNEGATIVE,
			MEMES: ENGLISHMEME
		},
		HAWAIIAN: {
			POSITIVE: HAWAIIANPOSITIVE,
			NEGATIVE: HAWAIIANNEGATIVE,
			MEMES: HAWAIIANMEME
		}
	}

	let MergedObjectOne  = {
		...CustomObject,
		...SyncedObject
	}
	let MergedObject = {
		...MessageObject,
		...MergedObjectOne
	}
	return MergedObject }
	else {
		return Base;
	}
}

// Get new object
async function createMessageObject() {
	const WelcomeMessages = await MergeMessage().then((result) => {
		return result;
	})
	return WelcomeMessages
}


export { createMessageObject}