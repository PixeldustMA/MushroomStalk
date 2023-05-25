import { spinNumber } from "./KNOTS/Global.js";
import { WelcomeMessages } from "../SETTINGS/TEXTS/Message.js";

//-- VARIABLES --//
let LanguageObject = Language(WelcomeMessages);
let moodObject = Mood(WelcomeMessages, LanguageObject);
let randomMessage = MessageResult(moodObject);
let welcomeText = document.getElementById("header-startScreen");

//-- CHOOSE A RANDOM LANGUAGE  --//
function Language(MessageBucket) {
	let chooseLanguage = Object.keys(MessageBucket);
	let index = spinNumber(chooseLanguage.length);
	return chooseLanguage[index];
}

// -- CHOOSE A MOOD - // 
function Mood (MessageBucket, Language) {
	let ChosenMood = MessageBucket[`${Language}`];
	let MoodKeys = Object.values(ChosenMood);
	let index = spinNumber(MoodKeys.length);
	return MoodKeys[index];
}

// -- PROVIDE RESULT -- // 
function MessageResult (Mood) {
		console.log("RANDOMISING WELCOME MESSAGE...")
	let randomIndex = spinNumber(Mood.length)
	let MessageChoice = Mood[randomIndex];
		console.log("WELCOME MESSAGE IS: " + MessageChoice)
	return MessageChoice
}

//-- ALTER THE PAGE --//
welcomeText.innerHTML = randomMessage;





