import { spinNumber } from "../RANDOM/Spinner.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Process welcome messages       //
// ================================= //

/**
 * GET A RANDOM MESSAGE
 * @param {string} activeUser 
 * @returns MESSAGE
 */
async function getMessage(activeUser) {
	return await MessageResult(activeUser);
};
/**
 * CALCULATE THE RANDOM MESSAGE
 * @param {string} activeUser 
 * @returns {string}Message
 */
async function MessageResult (activeUser) {
	const Mood = await moodObject(activeUser);
	let language = Mood[0];
	let mood = Mood[1];
	let MessageObject = activeUser[language]
	let MoodObject = MessageObject[mood];
	let randomIndex = spinNumber(MoodObject.length)
	let MessageChoice = MoodObject[randomIndex];
	return MessageChoice;
};
/**
 * CREATE AN OBJECT BASED ON A RANDOM MOOD
 * @param {string} activeUser 
 * @returns {object}MOOD OBJECT
 */
const moodObject = async (activeUser) => {
	const Language = await key(activeUser);
	let moodArray = activeUser[`${Language}`];
	let moodKeys = Object.keys(moodArray);
	let index = spinNumber(moodKeys.length);
	let moodMessages = [Language, moodKeys[index]];
	return moodMessages;
}
/**
 * GET A KEY
 * @param {object} messages 
 * @returns {string} MESSAGE
 */
let key = async (messages) => {
	let chosenKey = Object.keys(messages);
	let index = spinNumber(chosenKey.length);
	return chosenKey[index]
}

export { getMessage}




