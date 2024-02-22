import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Remember } from "../../../CONSOLE/PLATYPUS/AppMemory.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Welcome Screen     //
// ================================= //

// == INSTANCE == //
const MushroomStalk = new Stalk();
const memory = new Remember();

// == ROUTES == //
const Route_Invalid = await MushroomStalk.fetchAnimation("ANIMATION", "invalid");

// == DRAW == //
/**
 * DRAW OBJECTS FOR WELCOME SCREEN
 */
function DrawWelcomeScreen() {

	// == WRAPPERS == //
	let wrapper = document.getElementById('Welcome_Section_Form');

	// == INPUT == //
	let InputName = new create({
		tag: 'input',
		id: 'Welcome_Input_Name_Entry',
		classes: ['welcomeInput']
	}).init();
	let InputPassword = new create({
		tag: 'input',
		id: 'Welcome_Input_Password_Entry',
		classes: ['welcomeInput']
	}).init();

	// == BUTTONS == //
	let userSubmit = new create({
		tag: 'button',
		id: 'Welcome_Button_User_Submit',
		elementText: 'Analyse Me'
	}).init();
	let newUser = new create({
		tag: 'button',
		id: 'Welcome_Button_User_Create',
		elementText: 'New User'
	}).init();

	// == ACTIONS == //
	userSubmit.onclick = validateUser;
	newUser.onclick = loadOnboarding;

	// == ATTATCHMENT == //
	wrapper.append(...[
		InputName,
		InputPassword,
		userSubmit,
		newUser
	]);

    return wrapper;
};

// == ACTIONS == //
/**
 * CHECK IF USER EXISTS
 */
async function validateUser() {

	let userName = document.getElementById('Welcome_Input_Name_Entry').value;
	let userPassword = document.getElementById('Welcome_Input_Password_Entry').value;
	let users = await memory.frogList();
	let numberofUsers = Object.keys(users);
	let valid = false;
	console.log(users)
	UserCheckLoop: for (let index = 0; index < numberofUsers.length; index++) {
		if (users[numberofUsers[index]].NAME === userName) {
			memory.setUser(userName);
			valid = true;
			window.location.href = MushroomStalk.load("VALIDATION")
			break;
		}

	}
	if (!valid) {
			// TODO HANDLE ERROR - INVALID USER
			console.log("INVALID USER ERROR")
			let invalid = document.createElement('img');
			invalid.src = Route_Invalid;
			invalid.classList.add('position');
			document.body.append(invalid)
			setTimeout(() => {
				window.location.reload();				
			}, 2000);
	}
}
/**
 * CHECK IF FIRST TIME LOADING THE APP
 */
async function firstTimeLoaded() {
	let users = await memory.frogList();
	let numberofUsers = Object.keys(users);
	if (numberofUsers.length === 1) {
		window.location.href = MushroomStalk.load("NEWUSER");
	}
}
/**
 * LOAD ONBOARDING FRIEND
 */
function loadOnboarding() {
	window.location.href = MushroomStalk.load("ONBOARDING");
}

// == RUN SCRIPT == //
DrawWelcomeScreen();
firstTimeLoaded()