import { createMessageObject } from "../../SETTINGS/USER/SyncObjects.js";
import { spinNumber } from "../KNOTS/Global.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Process welcome messages       //
// ================================= //

// == ACCESS OBJECT == // 

async function getWelcomeMessage() {

	const Welcome = await createMessageObject().then(
		(result) => {
			return result;
		}
	)
	return Welcome;
}

// == CHOOSE MESSAGE ==//
let key = async () => {
	const key = await getWelcomeMessage().then((messages) => {
		let chosenKey = Object.keys(messages);
		let index = spinNumber(chosenKey.length);
		return chosenKey[index]
	})
	console.log("LANGUAGE KEY FOUND");
	console.log(key);
	return key
}
const moodObject = async () => {
	const Language = await key()
	.then((key) => {
		return key
	});
	const messages = await getWelcomeMessage()
	.then((message) => {	
		return message
	});

	let moodArray = messages[`${Language}`]
	let moodKeys = Object.keys(moodArray);
	let index = spinNumber(moodKeys.length);
	let passValue = [Language, moodKeys[index]];
	console.log("MOOD KEY FOUND");
	console.log(passValue);
	return passValue;
}
// -- PROVIDE RESULT -- // 
async function MessageResult () {
	const Mood = await moodObject()
	.then((result) => {
		return result;
	})
	const Messages = await getWelcomeMessage().then((messages) => {
		return messages;
	})
	let language = Mood[0];
	let mood = Mood[1];

	let MessageObject = Messages[language]
	let MoodObject = MessageObject[mood];
	let randomIndex = spinNumber(MoodObject.length)
	let MessageChoice = MoodObject[randomIndex];
	return MessageChoice;
// 	console.log("RANDOMISING WELCOME MESSAGE...")
// 	console.log("WELCOME MESSAGE IS: " + Mood)
// return Mood
}
async function getMessage() {
	const randomMessage = await MessageResult()
	.then((result) => {
		console.log("RANDOM MESSAGE: " + result)
		return result;
	})
	return randomMessage;
}

//-- ALTER THE PAGE --//
export { getMessage}




