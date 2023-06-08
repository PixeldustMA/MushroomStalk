import { PageTitle, createButton, text } from "../../GIZMOS/SKELETON/Bones.js";
import { ReadFile, WelcomeSave } from "../../src/RenderFunctions.js";
import { CurrentStateStartScreen } from "../STARTSCREEN/DrawStartScreen.js";
import { createMessageObject } from "../../SETTINGS/USER/SyncObjects.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Draw Cogs Page             //
// ================================= //

// == STATE == // 
const State = async () => await CurrentStateStartScreen()
	.then(
		(state) => {
			console.log(state)
			return state}
	);
const phraseOptions = {
		save: false,
		PrimaryCategory: 'notset',
		SecondaryCategory: 'notset'
	};
const titlePanel = document.getElementById('titleSection');
const pathPanel = document.getElementById('addPhrase');
const namePanel = document.getElementById('userName');
const viewPanel = document.getElementById('viewScreen');
const WelcomeForm = document.getElementById('WelcomeForm');
let alteredmessage = {}

// == STRUCTURAL FUNCTIONS == //
async function getWelcomeMessage() {

	const Welcome = await createMessageObject().then(
		(result) => {
			return result;
		}
	)
	return Welcome;
}

function CogsHeaderPanel() {
	const containerDiv = document.createElement('div');
	containerDiv.append(...[
		PageTitle("COGS", "Header_Cogs", ["Empty"])
	]);
	return containerDiv;
}
function CogsPathPanel() {
	const containerDiv = document.createElement('div');
	containerDiv.append(... [
		createButton("PathButton", "empty", ["settingsButtons"], "Set Path"),
		text("Path Chosen", "pathChosen", ["Empty"])
	])
	return containerDiv;
}
function CogsNamePanel() {
	const containerDiv = document.createElement('div');
	containerDiv.append(... [
		createButton("nameButton", "None", ["settingsButtons"], "Set Name"),
		text("Name Chosen", "nameChosen", ["Empty"])
	])
	return containerDiv;
}
function CogsViewPanel() {
	const containerDiv = document.createElement('div');
	containerDiv.id = "View_Cube";
	containerDiv.classList.add('View');

	const titleCube = document.createElement('div');
	titleCube.id = "Title_Cube";
	titleCube.appendChild(... [
		PageTitle("Language", "Header_Language", ["TitleView"])
	])
	const Options = document.createElement('ul');
	Options.id = "OPTIONS_DISPLAY"
	containerDiv.append(... [
		titleCube,
		Options
	])
	console.log(Options)
	console.log("OPTIONS")
	return containerDiv;
}
function CogsForm() {

	const LanguageDiv = document.createElement('div');
		LanguageDiv.classList.add('layout');
	
	const LanguageAdjuster = document.createElement('div');
		LanguageAdjuster.classList.add('sizeAdjuster');

	const LanguageLabel = document.createElement('label');
		LanguageLabel.htmlFor = "LanguagePhrase";
		LanguageLabel.innerHTML = "LANGUAGE";

	const LanguageSelect = document.createElement('SELECT');
		LanguageSelect.name = "LanguagePhrase";
		LanguageSelect.classList.add('selectBox');
		LanguageSelect.id = "Language-select"

	var LanguageOption = document.createElement("option");
		LanguageOption.text = "LANGUAGE";
		LanguageSelect.add(LanguageOption);
		LanguageOption.disabled = true;
		LanguageOption.selected = true;

	const MoodDiv = document.createElement('div');
	MoodDiv.classList.add('layout');

	const MoodAdjuster = document.createElement('div');
		MoodAdjuster.classList.add('sizeAdjuster');

	const MoodLabel = document.createElement('label');
		MoodLabel.htmlFor = "MoodPhrase";
		MoodLabel.innerHTML = "MOOD";

	const MoodSelect = document.createElement('SELECT');
		MoodSelect.name = "MoodPhrase";
		MoodSelect.classList.add('selectBox');
		MoodSelect.id = "Mood-select"

	var MoodOption = document.createElement("option");
		MoodOption.text = "Mood";
		MoodSelect.add(MoodOption);
		MoodOption.disabled = true;
		MoodOption.selected = true;

		
	const PhraseDiv = document.createElement('div');
		PhraseDiv.id = "PHRASELABEL";
		PhraseDiv.classList.add('layout');

	const PhraseAdjuster = document.createElement('div');
		PhraseAdjuster.classList.add('sizeAdjuster');

	const PhraseLabel = document.createElement('label');
		PhraseLabel.htmlFor = "addaPhrase";
		PhraseLabel.innerHTML = "ADD A NEW PHRASE";

	const PhraseBox = document.createElement('input');
		PhraseBox.type = "text";
		PhraseBox.id = "phraseBox";
		PhraseBox.classList.add('textBox');
		PhraseBox.name = "addaPhrase";
		PhraseBox.placeholder = "MESSAGE";

		WelcomeForm.append(...[
			LanguageDiv,
			LanguageAdjuster,
			LanguageLabel,
			LanguageSelect,
			MoodDiv,
			MoodAdjuster,
			MoodLabel,
			MoodSelect,
			PhraseDiv,
			PhraseAdjuster,
			PhraseLabel,
			PhraseBox
	]);
	createDropDownMechanism()
	phrases()
}
async function createDropDownMechanism(){

	const WelcomeMessages = await getWelcomeMessage()
		.then((result) => {
			return result;
		})
	var LanguageArray = Object.keys(WelcomeMessages);
	var LanguageSelect = document.getElementById("Language-select");
	var MoodSelect = document.getElementById("Mood-select");

	for(let index in LanguageArray) {
		console.log(LanguageArray);
		console.log(LanguageSelect)
		LanguageSelect.options[LanguageSelect.options.length] = 
		new Option(LanguageArray[index], index);
	}
	LanguageSelect.addEventListener('change', LanguageEvent);
	MoodSelect.addEventListener('change', MoodEvent);
}
async function LanguageEvent(event) {

	const WelcomeMessages = await getWelcomeMessage()
	.then((result) => {
		return result;
	})
	var MoodSelect = document.getElementById("Mood-select");
	let MoodArray = ''
	let language = document.getElementById("Header_Language")
	if (event.target.value === "0") {
		MoodSelect.options.length = 1
		MoodArray = Object.keys(WelcomeMessages.ENGLISH)
		language.innerHTML = "ENGLISH";
		phraseOptions.PrimaryCategory = "ENGLISH"
	}
	else if (event.target.value = "1") {
		MoodSelect.options.length = 1
		MoodArray = Object.keys(WelcomeMessages.HAWAIIAN)
		language.innerHTML = "HAWAIIAN";
		phraseOptions.PrimaryCategory = "HAWAIIAN"
	}
	Mood(MoodArray)
}
async function MoodEvent(event) {
	const WelcomeMessages = await getWelcomeMessage()
		.then((result) => {
			return result;
		})
	let language = document.getElementById("Header_Language")
	if (event.target.value === "0") {
		let title = "POSITIVE";
		let accessMessages = WelcomeMessages[language.innerHTML][title];
		getValues(accessMessages)
		phraseOptions.save = true;
		phraseOptions.SecondaryCategory = "POSITIVE"
	}
	else if (event.target.value === "1") {
		let title = "NEGATIVE";
		let accessMessages = WelcomeMessages[language.innerHTML][title]
		getValues(accessMessages)
		phraseOptions.save = true;
		phraseOptions.SecondaryCategory = "NEGATIVE"
	}
	else if (event.target.value === "2") {
		let title = "MEMES";
		let accessMessages = WelcomeMessages[language.innerHTML][title]
		getValues(accessMessages);
		phraseOptions.save = true;
		phraseOptions.SecondaryCategory = "MEMES"
	}
}
function Mood(MoodArray) {

	var MoodSelect = document.getElementById("Mood-select");
	for(let MoodIndex in MoodArray) {
		MoodSelect.options[MoodSelect.options.length] =
		new Option(MoodArray[MoodIndex], MoodIndex);
	}
}
function getValues(valuearray) {
	let options = document.querySelector('#OPTIONS_DISPLAY');
	options.innerHTML = ''
	for (let index = 0; index < valuearray.length; index++) {
		let newlist = document.createElement('li');	
		newlist.classList.add('OP')
		newlist.innerHTML = valuearray[index];
		options.appendChild(newlist)
	}
}
async function createNewMessage(textinput) {
	const newMessage = await readSaveFile()
		.then((result) => {
			let PrimaryCategorySelection = phraseOptions.PrimaryCategory;
			let SecondaryCategorySelection = phraseOptions.SecondaryCategory;
			const relevantArray = result[PrimaryCategorySelection][SecondaryCategorySelection];
			relevantArray.push(textinput);
			result[PrimaryCategorySelection][SecondaryCategorySelection] = relevantArray;
			alteredmessage = result
			return alteredmessage
		});
	// let PrimaryCategorySelection = phraseOptions.PrimaryCategory;
	// let SecondaryCategorySelection = phraseOptions.SecondaryCategory;
	// const relevantArray = newMessage[PrimaryCategorySelection][SecondaryCategorySelection];
	// relevantArray.push(textinput);
	// newMessage[PrimaryCategorySelection][SecondaryCategorySelection] = relevantArray;
	// alteredmessage = newMessage
	console.log(alteredmessage)
	return alteredmessage;
}
function phrases(){
	const pathChosen = document.getElementById('pathChosen');
	const phraseBox = document.getElementById('phraseBox');
	const phrasebutton = document.getElementById('phraseButton');
	
	const Apply = document.getElementById('ApplyButton');
	Apply.addEventListener('click', save)
	phrasebutton.addEventListener("click", event => {
		let textinput = phraseBox.value
		const newMessage = createNewMessage(textinput);
		getObject(newMessage)
	})
	const user = document.getElementById('userButton');
	// user.addEventListener('click', userFunction);
}
const getObject = (Messages) => {
	createSaveObject(Messages);
	return Messages
}
const createSaveObject = (savableObject) => {
	let x = JSON.stringify(savableObject, null, 2);
	return x;
}
async function save() {
	console.log("SAVING SETTINGS")
	const saveMessage = await CurrentStateStartScreen().then(
		(result) => {
			return result.textFilePath}
	).then((textFile) => {
		WelcomeSave(textFile, alteredmessage);
		return "Data Saved";
	})
	return saveMessage
}
async function readSaveFile() {
	const saveSettings = await CurrentStateStartScreen()
		.then((result) => {
			return result.textFilePath})
	const readFile = await ReadFile(saveSettings)
		.then((object) => {
			return object;
		})
	return readFile
}
function drawCogsScreen() {
	titlePanel.append(CogsHeaderPanel());
	pathPanel.append(CogsPathPanel());
	namePanel.append(CogsNamePanel());
	viewPanel.append(CogsViewPanel());
	WelcomeForm.append(CogsForm());
}

drawCogsScreen();

// == FILE CHOOSER == // 
const pathButton = document.getElementById("PathButton");
pathButton.addEventListener("click", createFileChooser)
async function setStates(file) {

	let currentState = file;
	currentState.localPath = file[0].path;
	console.log(currentState);
	let pathChosen = document.getElementById("pathChosen");
	pathChosen.innerHTML = currentState.localPath;
	const save = await saveUserPath()
		.then((result) => {
			console.log("Save Successful");
			return result;
		})
	return save;
}

function createFileChooser() {
	let input = document.createElement('input');
	input.setAttribute('id', 'AD')
	input.type = 'file';
	input.click();
	input.onchange = event => {
		let files =  Array.from(input.files);
		setStates(files);
	};
}

async function saveUserPath() {
	let pathChosen = document.getElementById("pathChosen");
	const FilePaths = await State()
		.then((result) => {
			return result;
		});
	FilePaths.textFilePath = pathChosen.innerHTML;
	console.log(FilePaths)
	const savePaths = await WelcomeSave(FilePaths.userPath, FilePaths)
		.then((result) => {
			return result;
		})
}