import { Picker } from "../../../APPS/JELLYFISH/PICKER/Picker.js";
import { Mould } from "../../../CONSOLE/CONTROLLERS/ErrorController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Remember } from "../../../CONSOLE/PLATYPUS/AppMemory.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
import { Dissolve } from "../../../CONSOLE/PLATYPUS/Dissolver.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Draw Wizard Screen        //
// ================================= //

class Page_Wizard extends Stalk {
	constructor() {
		super();
		this.SECTION_Title = document.getElementById('Section_Wizard_Title');
		this.SECTION_Question = document.getElementById('Section_Wizard_Question');

		this.memory = new Remember();
		this.picking = new Picker();
		this.mould = new Mould();
		this.dissolving = new Dissolve()
		this.turtleNoUnpressedPath = "";
		this.turtleYesUnpressedPath = "";

	};

	DRAW_PAGE() {
		this.SECTION_Title.append(this.PANEL_TITLE());
		this.SECTION_Question.append(this.PANEL_QUESTION());
	};
	PANEL_TITLE() {
		
	// == CONTAINER == //
	let wrapper = new create({
		tag: 'div',
        id: "WIZARD_Title-Wrapper"
	}).init();

	// == LABELS == //
	let headerTitle = new create({
		tag: 'h1',
        id: "WIZARD_Title-Text",
		elementText: ["FROG","SWAMP", "RECOGNISE"]
	}).init();

    // == ATTACHMENTS == //
	wrapper.append(...[
		headerTitle
	]);
	return wrapper;
	};
	PANEL_QUESTION() {

		// == CONTAINER == //
		let wrapper = new create({
			tag: 'div',
			id: 'WIZARD_Question-Wrapper'
		}).init();
		let wrapperFileChoice = new create({
			tag: 'div',
		}).init();

		// == BUTTON == //
		let buttonWelcomeScreen = new create({
			tag: 'img',
			id: 'WIZARD_New-Button',
			classes: ['IMAGE_BUTTON', 'NO'],
			source: this.turtleNoUnpressedPath
		}).init();
		let imageYesTurtle = new create({
			tag: 'img',
			classes: ['IMAGE_BUTTON', 'YES'],
			source: this.turtleYesUnpressedPath
		}).init();

		// == FILE CHOOSER == //
		let fileChooserBackup = new create({
			tag: 'input',
			id: 'WIZARD_Onboarding-FileChooser',
			elementText: ["WIZARD", "LABELS", "MESSAGE"],
			classes: ['FILECHOOSER-Style']
		}).init();

		// == LABEL == //
		let labelFileChooser = new create({
			tag: 'label',
			id: 'WIZARD_File-Label',
			elementText: ["WIZARD", "LABELS", "PROOF"],
			labelFor: 'WIZARD_Onboarding-FileChooser'
		}).init();

		// == ACTIONS == //
		buttonWelcomeScreen.addEventListener('click', (NOEVENT) => {
			this.LOAD(['ONBOARDING', 'MAINPAGES', 'WELCOME'])
		});
		imageYesTurtle.addEventListener('click', (event) => {
			const t = this.picking.CHOOSE_FILE(fileChooserBackup);
			setTimeout(() => {
				this.path = this.picking.filePath;
				this.READ().then((FILEDATA) => {
					this.dissolving.DISSOLVE(FILEDATA);
					setTimeout(() => {
						this.LOAD(['WELCOME', 'MAINPAGES', 'WELCOME'])
					}, 2000);
				});
			}, 5000);


			this.path = this.picking.CHOOSE_FILE(labelFileChooser)

		});

		
		// == ATTACHMENTS == //
		wrapper.append(...[
			buttonWelcomeScreen,
			imageYesTurtle,
			wrapperFileChoice,
			labelFileChooser	
		]);
		return wrapper;
	};
}

// == RUN SCRIPT == //
const pageWizard = new Page_Wizard();
pageWizard.turtleNoUnpressedPath = await pageWizard.INIT_ROUTE({
	TAG: 'UNPRESSED_NO',
	SUBSECTION: 'TURTLE',
	SECTION: 'IMAGES',
	ASSET: 1
});
pageWizard.turtleYesUnpressedPath = await pageWizard.INIT_ROUTE({
	TAG: 'UNPRESSED_YES',
	SUBSECTION: 'TURTLE',
	SECTION: 'IMAGES',
	ASSET: 1
});
pageWizard.DRAW_PAGE();