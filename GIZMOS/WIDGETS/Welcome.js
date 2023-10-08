import { spinNumber } from "../UTILITY/Spinner.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Process welcome messages       //
// ================================= //

async function getMessage(activeUser) {
	const randomMessage = await MessageResult(activeUser)
		.then((messageResult) => {return messageResult;})
	return randomMessage;
}
async function MessageResult (activeUser) {
	const Mood = await moodObject(activeUser)
		.then((mood) => {return mood;})
	let language = Mood[0];
	let mood = Mood[1];
	let MessageObject = activeUser[language]
	let MoodObject = MessageObject[mood];
	let randomIndex = spinNumber(MoodObject.length)
	let MessageChoice = MoodObject[randomIndex];
	return MessageChoice;
}
const moodObject = async (activeUser) => {
	const Language = await key(activeUser)
		.then((key) => {return key});
	let moodArray = activeUser[`${Language}`]
	let moodKeys = Object.keys(moodArray);
	let index = spinNumber(moodKeys.length);
	let moodMessages = [Language, moodKeys[index]];
	return moodMessages;
}
let key = async (messages) => {
	let chosenKey = Object.keys(messages);
	let index = spinNumber(chosenKey.length);
	return chosenKey[index]
}

export { getMessage}




