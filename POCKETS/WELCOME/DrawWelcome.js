import { route } from "../../GEARS/GNOME/Routes.js";
import { ReadFile } from "../../GEARS/PLATYPUS/RenderFunctions.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";


const startScreenPath = await route("start");
const onboardingPatth = await route("newUser");

function DrawWelcomeScreen() {

	let wrapper = document.getElementById('Welcome_Section_Form');
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

	userSubmit.onclick = validateUser;
	newUser.onclick = loadOnboarding;

	wrapper.append(...[
		InputName,
		InputPassword,
		userSubmit,
		newUser
	])
};

async function validateUser() {
	let userName = document.getElementById('Welcome_Input_Name_Entry').value;
	let userPassword = document.getElementById('Welcome_Input_Password_Entry').value;
	console.log(userName + userPassword);
	let path = await route("frogs");
	let users = await ReadFile(path)
		.then((userList) => {return userList});
	let numberofUsers = Object.keys(users);
	for (let index = 0; index < numberofUsers.length; index++) {
		if (users[numberofUsers[index]].NAME === userName) {
			console.log("NOT SUSPICIOUS");
			window.location.href = startScreenPath;
		}
	}
}
function loadOnboarding() {
	console.log("New User Sighted")
	window.location.href = onboardingPatth;
}


DrawWelcomeScreen();
