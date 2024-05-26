import { Mould } from "../../../CONSOLE/CONTROLLERS/ErrorController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Remember } from "../../../CONSOLE/PLATYPUS/AppMemory.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Welcome Screen     //
// ================================= //

class Page_Welcome extends Stalk {
	constructor () {
		super();
		this.SECTION_Form = document.getElementById('Welcome_Section_Form');
		this.mould = new Mould();
		this.memory = new Remember();
		this.pathImageEyes = "";
	};
	DRAW_Page() {
		this.SECTION_Form.append(this.PANEL_Welcome());	
	};
	PANEL_Welcome() {

		let wrapper = new create({
			tag: 'div'
		}).init();

		// == INPUT == //
		let InputName = new create({
			tag: 'input',
			id: 'Welcome_Input_Name_Entry',
			placeholder: ["USEFUL", "USER", "USERNAME"],
			classes: ['welcomeInput', 'NameInput']
		}).init();
		let InputPassword = new create({
			tag: 'input',
			id: 'Welcome_Input_Password_Entry',
			placeholder: ["USEFUL", "USER", "STARS"],
			classes: ['welcomeInput', 'PasswordInput']
		}).init();

		// == ANIMATION == //
		let imageEyes = new create({
			tag: 'img',
			source: this.pathImageEyes,
			classes: ['EYES']
		}).init();

		// == BUTTONS == //
		let userSubmit = new create({
			tag: 'button',
			id: 'Welcome_Button_User_Submit',
			elementText: ["WELCOME", "BUTTONS", "ANALYSE"]
		}).init();
		let newUser = new create({
			tag: 'button',
			id: 'Welcome_Button_User_Create',
			elementText: ["WELCOME", "BUTTONS", "NEW"]
		}).init();

		// == LISTENERS == //
		userSubmit.addEventListener('click', (event) => {
			this.VALIDATE().then((RESULT) => {return RESULT});
		});
		newUser.addEventListener('click', (event) => {
			this.ONBOARDING();
		});

		// == ATTATCHMENT == //
		wrapper.append(...[
			InputName,
			InputPassword,
			userSubmit,
			newUser,
			imageEyes
		]);

		return wrapper;
	};
	async VALIDATE() {

		let userName = document.getElementById('Welcome_Input_Name_Entry').value;
		let userPassword = document.getElementById('Welcome_Input_Password_Entry').value;
		let users = await this.memory.READ_FROG_LIST();
		let numberofUsers = Object.keys(users);
		let valid = false;
		UserCheckLoop: for (let index = 0; index < numberofUsers.length; index++) {
			console.log(userName)
			if (users[numberofUsers[index]].NAME === userName && users[numberofUsers[index]].PASSWORD === userPassword) {
				this.memory.SET_ACTIVE_USER(userName);
				valid = true;
				console.log("HELLO");
				this.LOAD(["VALIDATION", 'MAINPAGES', 'WELCOME']);
				break;
			};
		};
		if (!valid) {
			let invalid = await this.mould.INVALID_ROUTE();
			invalid.classList.add('position');
			document.body.append(invalid)
			setTimeout(() => {
				window.location.reload();				
			}, 2000);
		};
	};
	ONBOARDING() {
		this.LOAD(["ONBOARDING", 'MAINPAGES', 'WELCOME']);
	};
	async FIRST() {
		let users = await this.memory.READ_FROG_LIST();
		let numberofUsers = Object.keys(users);
		console.log(numberofUsers)
		if (numberofUsers.length === 1) {
			console.log("NUMBER OF USERS")
			// this.LOAD(["WIZARD", 'MAINPAGES', 'WELCOME']);
		};
	};
};

// == DRAW == //
const welcomePage = new Page_Welcome();
welcomePage.pathImageEyes = await welcomePage.INIT_ROUTE({
	TAG: 'EYES',
	SECTION: 'ANIMATIONS',
	SUBSECTION: 'MISC',
	ASSET: 1
});
welcomePage.DRAW_Page();
await welcomePage.FIRST();
