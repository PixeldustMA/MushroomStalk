
import { Picker } from "../../../APPS/JELLYFISH/PICKER/Picker.js";
import { User } from "../../../APPS/USERS/User.js";
import { Mould } from "../../../CONSOLE/CONTROLLERS/ErrorController.js";
import { Language } from "../../../CONSOLE/CONTROLLERS/LanguageController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Remember } from "../../../CONSOLE/PLATYPUS/AppMemory.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Create A  New User Profile     //
// ================================= //

class Page_Onboarding extends Stalk {

	constructor() {
		super();

		this.SECTION_Title = document.getElementById('Onboarding_Section_Title');
		this.SECTION_Form =  document.getElementById('Onboarding_Section_Details');
		this.memory = new Remember();
		this.mould = new Mould();
		this.picking = new Picker();
		this.thesaurus = new Language();
		this.user = new User();
		this.thesaurus.LOAD(); 
		this.pathObject = {
			MESSAGEPATH: "",
			BUNDLEPATH: "",
			NEWSPATH: "",
			SQUIRRELPATH: "",
			SPIRITPATH: "",
			DOODLEPATH: ""
		};
	};
	DRAW_PAGE() {
		this.SECTION_Title.append(this.PANEL_TITLE());
		this.SECTION_Form.append(this.PANEL_FORM());
	};
	PANEL_TITLE() {

		// == WRAPPERS == //
		const wrapperOnboarding = new create({
			tag: 'div'
		}).init();

		// == TEXT == //
		const headerPage = new create({
			tag: 'h1',
			id: "ONBOARDING_Title_Present",
			elementText: ['FROG', 'SWAMP', 'FROG_QUESTION']
		}).init();
	
		// == ATTACHMENTS == //
		wrapperOnboarding.append(...[
			headerPage
		]);
		return wrapperOnboarding;
	};
	PANEL_FORM() {

		// == WRAPPERS == //
		const wrapperForm = new create({
			tag: 'div'
		}).init();

		// == INPUT == //
		let userName = new create({
			tag: 'input',
			id: 'ONBOARDING-Name-Label',
			placeholder: ['USEFUL', 'USER', 'USERNAME'],
			boxName: 'usernameBox',
			classes: ['INPUT-Layout', 'INPUT-Style']
		}).init();
		let userPassword = new create({
			tag: 'input',
			id: 'ONBOARDING-Password-Input',
			placeholder:  ['USEFUL', 'USER', 'STARS'],
			boxName: 'passwordBox',
			classes: ['INPUT-Layout', 'INPUT-Style']
		}).init();

		// == TEXT == // 
		let usernameLabel = new create({
			tag: 'label',
			id: 'ONBOARDING-Username-Label',
			labelFor: 'usernameBox',
			elementText: ['USEFUL', 'USER', 'USERNAME'],
			classes: ['LABEL-Layout']
		}).init();
		let passwordLabel = new create({
			tag: 'label',
			id: 'ONBOARDING-Password-Label',
			labelFor: 'passwordBox',
			elementText: ['USEFUL', 'USER', 'PASSWORD'],
		}).init();
		let MessagesLabel = new create({
			tag: 'label',
			id: 'ONBOARDING-Message-Label',
			labelFor: 'messageBox',
			elementText: ['ONBOARDING', 'LABELS', 'MESSAGE_PATH'],
		}).init();
		let displayBundle = new create({
			tag: 'p',
			id: "ONBOARDING_Bundle-Label",
			classes: ["TEXT_DisplayPaths"],
			elementText: ['ONBOARDING', 'LABELS', 'BUNDLE'],
		}).init();
		let displayNews = new create({
			tag: 'p',
			id: "ONBOARDING_News-Label",
			classes: ["TEXT_DisplayPaths"],
			elementText: ['ONBOARDING', 'LABELS', 'NEWS'],
		}).init();
		let displaySquirrel = new create({
			tag: 'p',
			id: "ONBOARDING_Squirrel-Label",
			classes: ["TEXT_DisplayPaths"],
			elementText: ['ONBOARDING', 'LABELS', 'SQUIRREL'],
		}).init();
		let displaySpirit = new create({
			tag: 'p',
			id: "ONBOARDING_Spirit-Label",
			classes: ["TEXT_DisplayPaths"],
			elementText: ['ONBOARDING', 'LABELS', 'SPIRIT'],
		}).init();
		let displayDoodle = new create({
			tag: 'p',
			id: "ONBOARDING_Doodle-Label",
			classes: ["TEXT_DisplayPaths"],
			elementText: ['ONBOARDING', 'LABELS', 'DOODLE'],
		}).init();

		// == FILE CHOOSER == //
		let locationMessages = new create({
			tag: 'input',
			id: 'ONBOARDING-Message-FileChooser',
			elementText: ['ONBOARDING', 'LABELS', 'LOCATION'],
			classes: ['FILECHOOSER-Style']
		}).init();

			// == BUTTONS == //
		let locationBundles = new create({
			tag: 'button',
			id: 'ONBOARDING_Bundle-Path',
			elementText: ['ONBOARDING', 'LABELS', 'BUNDLE'],
			classes: ['BUTTON-FilePath']
		}).init();
		let locationNews = new create({
			tag: 'button',
			id: 'ONBOARDING_News-Path',
			elementText: ['ONBOARDING', 'LABELS', 'NEWS'],
			classes: ['BUTTON-FilePath']
		}).init();
		let locationSquirrels = new create({
			tag: 'button',
			id: 'ONBOARDING_Squirrel-Path',
			elementText: ['ONBOARDING', 'LABELS', 'SQUIRREL'],
			classes: ['BUTTON-FilePath']
		}).init();
		let locationSpirits = new create({
			tag: 'button',
			id: 'ONBOARDING_Spirit-Path',
			elementText: ['ONBOARDING', 'LABELS', 'SPIRIT'],
			classes: ['BUTTON-FilePath']
		}).init();
		let locationDoodle = new create({
			tag: 'button',
			id: 'ONBOARDING_Doodle-Path',
			elementText: ['ONBOARDING', 'LABELS', 'DOODLE'],
			classes: ['BUTTON-FilePath']
		}).init();
		let applyButton = new create({
			tag: 'button',
			id: "ONBOARDING_Apply-Button",
			elementText: ['ONBOARDING', 'BUTTONS', 'APPLY'],
			classes: ["BUTTON-Apply"]
		}).init();
		let backButton = new create({
			tag: 'button', 
			elementText: ['ONBOARDING', 'BUTTONS', 'BACK'],
			classes: ['BACK'],
			id: 'ONBOARDING_Button-Back'
		}).init();

		// == LISTENERS == //
		locationBundles.addEventListener('click', (bundleEvent) => {
			this.pathObject.BUNDLEPATH = this.picking.CHOOSE_FOLDER(displayBundle)
				.then((RESULT) => {
					
					return RESULT});
					
		});
		locationNews.addEventListener('click', (newsEvent) => {
			this.pathObject.NEWSPATH = this.picking.CHOOSE_FOLDER(displayNews)
			.then((RESULT) => {
				this.pathObject.NEWSPATH = RESULT;
				console.log(this.pathObject)
				return RESULT});
		});
		locationSquirrels.addEventListener('click', (squirrelEvent) => {
			this.pathObject.SQUIRRELPATH = this.picking.CHOOSE_FOLDER(displaySquirrel)
			.then((RESULT) => {return RESULT});
		});
		locationSpirits.addEventListener('click', (spiritEvent) => {
			this.pathObject.SPIRITPATH = this.picking.CHOOSE_FOLDER(displaySpirit)
			.then((RESULT) => {RESULT});
		});
		locationDoodle.addEventListener('click', (doodleEvent) => {
			this.pathObject.DOODLEPATH = this.picking.CHOOSE_FOLDER(displayDoodle)
			.then((RESULT) => {RESULT});
		});
		applyButton.addEventListener('click', (event) => {
			this.user.userName = document.getElementById('ONBOARDING-Name-Label').value;
			this.user.password = document.getElementById('ONBOARDING-Password-Input').value;
			this.pathObject = {
				MESSAGEPATH: displayBundle.innerHTML,
				BUNDLEPATH: displayBundle.innerHTML,
				NEWSPATH: displayNews.innerHTML,
				SQUIRRELPATH: displaySquirrel.innerHTML,
				SPIRITPATH: displaySpirit.innerHTML,
				DOODLEPATH: displayDoodle.innerHTML,
				NAME: document.getElementById('ONBOARDING-Name-Label').value,
				PASSWORD: document.getElementById('ONBOARDING-Password-Input').value
			}
			this.user.userData = this.pathObject;
			this.user.SAVE_USER(true).then((RESULT) => {
				console.log("TEST")
				this.LOAD(['TITLE', 'MAINPAGES', 'WELCOME'])
				return RESULT});
		});
		this.pathObject.MESSAGEPATH = this.picking.CHOOSE_FILE(locationMessages, "MESSAGEPATH");
		backButton.addEventListener('click', (BACKEVENT) => {
			this.LOAD(["WELCOME", 'MAINPAGES', 'WELCOME']);
		});

		// == APPENDING == //
		wrapperForm.append(...[
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
		return wrapperForm;
	};

};

// == RUN SCRIPT == //
const onboardingPage = new Page_Onboarding();
onboardingPage.DRAW_PAGE();
