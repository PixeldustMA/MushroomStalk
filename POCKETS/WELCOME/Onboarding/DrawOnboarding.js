import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Remember } from "../../../CONSOLE/PLATYPUS/AppMemory.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Create A  New User Profile     //
// ================================= //

// == INSTANCE == //
const MushroomStalk = new Stalk();
const Memory = new Remember();

// == ROUTES AND PATHS == //

let paths = {
	MESSAGEPATH: "",
	BUNDLEPATH: "",
	NEWSPATH: "",
	SQUIRRELPATH: "",
	SPIRITPATH: "",
	DOODLEPATH: ""
};

// == DRAW == //

/**
 * DRAW TITLE SEGMENT OF PAGE
 */
function DrawOnboardingTitle() {
	let wrapper = document.getElementById('Onboarding_Section_Title');
	let pageTitle = new create({
		tag: 'h1',
        id: "ONBOARDING_Title_Present",
		elementText: 'PRESENT YOUR PAPERS STRANGER'
	}).init();

	wrapper.append(...[
		pageTitle
	]);
};
/**
 * CREATE ONBOARDING FORM SEGMENT
 * @returns HTML Element
 */
function DrawOnboardingForm() {
	
	// == WRAPPERS == // 
	let wrapper = document.getElementById('Onboarding_Section_Details');

	// == INPUT BOXES == // 
	let userName = new create({
		tag: 'input',
        id: 'ONBOARDING-Name-Label',
		boxName: 'usernameBox',
		classes: ['INPUT-Layout', 'INPUT-Style']
	}).init();
	let userPassword = new create({
		tag: 'input',
        id: 'ONBOARDING-Password-Input',
		boxName: 'passwordBox',
		classes: ['INPUT-Layout', 'INPUT-Style']
	}).init();

	// == LABELS == // 
	let usernameLabel = new create({
		tag: 'label',
        id: 'ONBOARDING-Username-Label',
		labelFor: 'usernameBox',
		elementText: 'Username',
		classes: ['LABEL-Layout']
	}).init();
	let passwordLabel = new create({
		tag: 'label',
        id: 'ONBOARDING-Password-Label',
		labelFor: 'passwordBox',
		elementText: 'Password'
	}).init();
	let MessagesLabel = new create({
		tag: 'label',
        id: 'ONBOARDING-Message-Label',
		labelFor: 'messageBox',
		elementText: 'Save Path For Custom Welcome Messages'
	}).init();

	// == FILE CHOOSER == //
	let locationMessages = new create({
		tag: 'input',
		id: 'ONBOARDING-Message-FileChooser',
		elementText: 'messageBox',
		classes: ['FILECHOOSER-Style']
	}).init();

	// == BUTTONS == //
	let locationBundles = new create({
		tag: 'button',
		id: 'ONBOARDING_Bundle-Path',
		elementText: 'BUNDLE',
		classes: ['BUTTON-FilePath']
	}).init();
	let locationNews = new create({
		tag: 'button',
		id: 'ONBOARDING_News-Path',
		elementText: 'NEWS',
		classes: ['BUTTON-FilePath']
	}).init();
	let locationSquirrels = new create({
		tag: 'button',
		id: 'ONBOARDING_Squirrel-Path',
		elementText: 'SQUIRREL',
		classes: ['BUTTON-FilePath']
	}).init();
	let locationSpirits = new create({
		tag: 'button',
		id: 'ONBOARDING_Spirit-Path',
		elementText: 'SPIRITS',
		classes: ['BUTTON-FilePath']
	}).init();
	let locationDoodle = new create({
		tag: 'button',
		id: 'ONBOARDING_Doodle-Path',
		elementText: 'DOODLE',
		classes: ['BUTTON-FilePath']
	}).init();
	let applyButton = new create({
		tag: 'button',
        id: "ONBOARDING_Apply-Button",
		elementText: 'APPLY FOR ENTRY',
		classes: ["BUTTON-Apply"]
	}).init();
	let backButton = new create({
		tag: 'button', 
		elementText: 'BACK',
		id: 'ONBOARDING_Button-Back'
	}).init();

	// == TEXT == //
	let displayBundle = new create({
		tag: 'p',
        id: "ONBOARDING_Bundle-Label",
		classes: ["TEXT_DisplayPaths"],
		elementText: 'Bundle Path'
	}).init();
	let displayNews = new create({
		tag: 'p',
        id: "ONBOARDING_News-Label",
		classes: ["TEXT_DisplayPaths"],
		elementText: 'News Path'
	}).init();
	let displaySquirrel = new create({
		tag: 'p',
        id: "ONBOARDING_Squirrel-Label",
		classes: ["TEXT_DisplayPaths"],
		elementText: 'Squirrel Path'
	}).init();
	let displaySpirit = new create({
		tag: 'p',
        id: "ONBOARDING_Spirit-Label",
		classes: ["TEXT_DisplayPaths"],
		elementText: 'Spirit Path'
	}).init();
	let displayDoodle = new create({
		tag: 'p',
        id: "ONBOARDING_Doodle-Label",
		classes: ["TEXT_DisplayPaths"],
		elementText: 'Doodle Path'
	}).init();

    // == LISTENERS == //
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
	backButton.addEventListener('click', (BACKEVENT) => {
		MushroomStalk.load("WELCOME");
	});

    // == APPENDING == //
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

		applyButton,
		backButton
	]);
    return wrapper;
};

// == ACTIONS == //

/**
 * SAVE DETAILS GIVEN BY USER TO CREATE PROFILE
 */
async function saveUserDetails() {

	let password = document.getElementById('ONBOARDING-Password-Input').value;
	let username = document.getElementById('ONBOARDING-Username-Input').value;

	let existingUsers = await Memory.frogList()
		.then((memoryObject) => {

			paths.NAME = username;
			paths.PASSWORD = password;

			let userNumber = Object.keys(memoryObject);
			memoryObject[userNumber.length + 1] = {
					NAME: username,
					PASSWORD: password
			}
			const userData = paths;
			createRoute(username, "USER")
                .then((routeResult) => {

                    MushroomStalk.path = routeResult;
                    MushroomStalk.data = userData;
                    MushroomStalk.Save();

                });
			Memory.saveUserList(memoryObject);
		});
	updateResident(username)
		.then((resident) => {
				return resident;
		})

};
/**
 * SELECT A SPECIFIC FOLDER
 * @param {String} tag 
 * @param {Element} display 
 */
function chooseFolder(tag, display) {

	fetchFolder().then((result) => {
		paths[tag] = result;
		display.innerHTML = result;
		return result;})

};
/**
 * UPDATE THE RESIDENT FILE TO THE ONE IN USE
 * @param {String} user 
 * @returns USER OBJECT
 */
async function updateResident(user) {

	const frogData = await createRoute(user, "USER");
    MushroomStalk.path = frogData;
	const data = await MushroomStalk.Read()
		.then((FrogDataResult) => {
			Memory.saveResident(FrogDataResult);
		})
	return data;
};
/**
 * CREATES A POP UP TO CHOOSE A FILE
 * @param {Element} element 
 * @param {String} tag 
 * @returns 
 */
function chooseFile(element, tag) {
	element.type = 'file'
	element.click();
	element.onchange = event => {
		let files =  Array.from(element.files);
		setStates(files, tag);
	};
	return element;
};
/**
 * GET LOCAL PATH FOR THE GIVEN FILE
 * @param {Array} file 
 * @param {String} tag 
 */
function setStates(file, tag) {
	let currentState = file;
	currentState.localPath = file[0].path;
	paths[tag] = currentState.localPath;
}

// == RUN SCRIPT == //
DrawOnboardingTitle();
DrawOnboardingForm();
