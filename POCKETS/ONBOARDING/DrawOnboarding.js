import { createRoute, route } from "../../GEARS/GNOME/Routes.js";
import { duck } from "../../GEARS/PLATYPUS/AskDuck.js";
import { NewDatabase } from "../../GEARS/PLATYPUS/DatabaseRender.js";
import { ReadFile, WelcomeSave } from "../../GEARS/PLATYPUS/RenderFunctions.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";

const memoryPath = await route("frogs");
const startScreenPath = await route("start");
let userPath = await route("userPaths");
const Duck = new duck();

function DrawOnboardingTitle() {
	let wrapper = document.getElementById('Onboarding_Section_Title');
	let pageTitle = new create({
		tag: 'h1',
		elementText: 'PRESENT YOUR PAPERS STRANGER'
	}).init();

	wrapper.append(...[
		pageTitle
	]);
};
function DrawOnboardingForm() {
	
	// == WRAPPERS == // 
	let wrapper = document.getElementById('Onboarding_Section_Details');

	// == INPUT BOXES == // 
	let userName = new create({
		tag: 'input',
		id: 'Onboarding_Input_Create_Name',
		boxName: 'usernameBox',
		classes: ['INPUT-Layout']
	}).init();
	let userPassword = new create({
		tag: 'input',
		id: 'Onboarding_Input_Create_Password',
		boxName: 'passwordBox',
		classes: ['INPUT-Layout']
	}).init();

	// == LABELS == // 
	let usernameLabel = new create({
		tag: 'label',
		labelFor: 'usernameBox',
		elementText: 'Username',
		classes: ['LABEL-Layout']
	}).init();
	let passwordLabel = new create({
		tag: 'label',
		labelFor: 'passwordBox',
		elementText: 'Password'
	}).init();
	let MessagesLabel = new create({
		tag: 'label',
		labelFor: 'messageBox',
		elementText: 'Save Path For Custom Welcome Messages'
	}).init();

	// == FILE CHOOSER == //
	let locationMessages = new create({
		tag: 'input',
		id: 'Onboarding_Input_Create_MessagePath',
		elementText: 'messageBox'
	}).init();

	// == BUTTONS == //
	let locationBundles = new create({
		tag: 'button',
		id: 'Onboarding_button_Create_BundlePath',
		elementText: 'BUNDLE'
	}).init();
	let locationNews = new create({
		tag: 'button',
		id: 'Onboarding_button_Create_NewsPath',
		elementText: 'NEWS'
	}).init();
	let locationSquirrels = new create({
		tag: 'button',
		id: 'Onboarding_button_Create_SquirrelsPath',
		elementText: 'SQUIRREL'
	}).init();
	let locationSpirits = new create({
		tag: 'button',
		id: 'Onboarding_button_Create_SpiritsPath',
		elementText: 'SPIRITS'
	}).init();
	let locationDoodle = new create({
		tag: 'button',
		id: 'Onboarding_button_Create_DoodlePath',
		elementText: 'DOODLE'
	}).init();

	// == TEXT == //
	let displayBundle = new create({
		tag: 'p',
		elementText: 'Bundle Path'
	}).init();
	let displayNews = new create({
		tag: 'p',
		elementText: 'News Path'
	}).init();
	let displaySquirrel = new create({
		tag: 'p',
		elementText: 'Squirrel Path'
	}).init();
	let displaySpirit = new create({
		tag: 'p',
		elementText: 'Spirit Path'
	}).init();
	let displayDoodle = new create({
		tag: 'p',
		elementText: 'Doodle Path'
	}).init();

	let applyButton = new create({
		tag: 'button',
		elementText: 'APPLY FOR ENTRY'
	}).init();

	locationBundles.addEventListener('click', (bundleEvent) => {
		chooseFolder("BUNDLEPATH", displayBundle);
	});
	locationNews.addEventListener('click', (newsEvent) => {
		chooseFolder("NEWSPATH", displayNews);
	});
	locationSquirrels.addEventListener('click', (squirrelEvent) => {
		chooseFolder("SQUIRRELPATH", displaySquirrel);
	});
	locationSpirits.addEventListener('click', (spiritEvent) => {
		chooseFolder("SPIRITPATH", displaySpirit);
	});
	locationDoodle.addEventListener('click', (doodleEvent) => {
		chooseFolder("DOODLEPATH", displayDoodle);
	});
	applyButton.onclick = saveUserDetails;
	chooseFile(locationMessages, "MESSAGEPATH");

	wrapper.append(...[
		usernameLabel,
		userName,

		passwordLabel,
		userPassword,

		MessagesLabel,
		locationMessages,

		locationBundles,
		displayBundle,

		locationNews,
		displayNews,
		
		locationSquirrels,
		displaySquirrel,

		locationSpirits,
		displaySpirit,

		locationDoodle,
		displayDoodle,

		applyButton
	]);
}

async function saveUserDetails() {

	let password = document.getElementById('Onboarding_Input_Create_Password').value;
	let username = document.getElementById('Onboarding_Input_Create_Name').value;

	let existingUsers = await ReadFile(memoryPath)
		.then((memoryObject) => {
		
		paths.NAME = username;
		paths.PASSWORD = password;
		
		let userNumber = Object.keys(memoryObject);
			NewDatabase();
			Duck.Table();
		memoryObject[userNumber.length + 1] = {
				NAME: username,
				PASSWORD: password,
		}

		userPath = userPath + username + ".json";
		const userData = paths;
		createRoute(username, "userPaths")
		.then((routeResult) => {
			WelcomeSave(routeResult, userData);
		})
		WelcomeSave(memoryPath, memoryObject);
		});
		updateResident(username)
			.then((resident) => {
				// window.location.href = startScreenPath;
				return resident;
			})

}

DrawOnboardingTitle();
DrawOnboardingForm();

let paths = {
	MESSAGEPATH: "",
	BUNDLEPATH: "",
	NEWSPATH: "",
	SQUIRRELPATH: "",
	SPIRITPATH: "",
	DOODLEPATH: ""
}



function chooseFolder(tag, display) {
	window.ipcRender.selectFolder().then((result) => {
		paths[tag] = result;
		display.innerHTML = result;
		return result;})

}
async function updateResident(user) {
	const frog = await route("resident");
	const frogData = await createRoute(user, "userPaths");
	const data = await ReadFile(frogData)
		.then((result) => {
			WelcomeSave(frog, result);
			return result;
		})
	return data;
}
function chooseFile(element, tag) {
	element.type = 'file'
	element.click();
	element.onchange = event => {
		let files =  Array.from(element.files);
		setStates(files, tag);
	};
	return element;
}
async function setStates(file, tag) {
	let currentState = file;
	currentState.localPath = file[0].path;
	console.log(currentState.localPath);
	paths[tag] = currentState.localPath;
	console.log(paths)
}