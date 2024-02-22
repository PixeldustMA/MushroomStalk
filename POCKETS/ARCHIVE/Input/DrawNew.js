import { Quack } from "../../../APPS/ARCHIVE/QUERIES/Quack.js";
import { Character } from "../../../CONSOLE/CONTROLLERS/CharacterController.js";
import { Duck } from "../../../CONSOLE/CONTROLLERS/DuckController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Sunflower } from "../../../CONSOLE/CONTROLLERS/SunflowerController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";
import { Panel } from "../Segments/DrawPanels.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         ADD A NEW CHARACTER        //
// ================================= //

// == SECTIONS == //
const titleSection = document.getElementById('Section_TitleBar');
const formSection = document.getElementById('Section_Input_Form');

// == INSTANCES == //
const mushroomStalk = new Stalk();
const panel = new Panel();
const duck = new Duck();

// == DRAW PANELS ==//
/**
 * DRAW TITLE
 * @returns HTML ELEMENTS
 */
function drawTitlePanel() {

    // == WRAPPERS == //
	let wrapper = new create({
		tag: 'div'
	}).init();

    // == TEXT == //
	let pageHeader = new create({
		tag: 'h1',
		elementText: 'ADD A NEW CHARACTER',
		classes: ['defaultTitle']
	}).init();

    // == ATTACHMENTS == //
	wrapper.append(...[
		pageHeader
	])

	return wrapper;
}
/**
 * DRAW FORM
 * @returns HTML ELEMENTS
 */
function drawInputPanel(){

	const boxes = panel.addNew();
	return boxes;
};
/**
 * DRAW FEATURES TO SCREEN
 */
function drawNewCharacterScreen() {
	titleSection.appendChild(drawTitlePanel());
	formSection.appendChild(drawInputPanel());
	EVENTSubmit();
}

// == LOGICAL FUNCTIONS == //
/**
 * GENERATE ALL UNIQUE KEYS FOR THE NEW CHARACTER
 * @param {String} first 
 * @param {String} last 
 * @param {String} year 
 * @param {String} planet 
 * @returns OBJECT 
 */
async function characterCodes(first, last, year, planet) {
	const character = new Character(first, last, year, planet);
	return await character.codes.generateUniqueCodes();
}
/**
 * SUMBIT DATA FROM FORM
 */
function EVENTSubmit () {

	// == ELEMENT == //
	const InputFirstName = document.getElementById('INPUT_First-Name');
	const InputMiddleName = document.getElementById('INPUT_Middle-Name');
	const InputLastName = document.getElementById('INPUT_Last-Name');
	const InputBirthPlanet = document.getElementById('INPUT_Birth-Planet');
	const InputBirthYear = document.getElementById('INPUT_Birth-Year');
	const InputMainMother = document.getElementById('INPUT_Main-Mother');
	const InputCharacterTag = document.getElementById('INPUT_Check-Tag');


	setTimeout(() => {

		const submitButton = document.getElementById("Button_Submit_Archive_New");

		let TagType;
		InputCharacterTag.addEventListener('change', function() {
			if (this.checked) {
				TagType = "MEAT"
			} else {
				TagType = "BREAD"
			}
		});

		submitButton.addEventListener('click', (SUBMIT) => {
			const character = {
				FirstName: InputFirstName.value,
				MiddleName: InputMiddleName.value,
				LastName: InputLastName.value,
				BirthPlanet: InputBirthPlanet.value,
				BirthYear: InputBirthYear.value,
				MainMother: InputMainMother.value,
				CharacterSection: ""
			}

		characterCodes(character.FirstName, character.LastName, character.BirthYear, character.BirthPlanet)
			.then((CHARACTER_DATA) => {
				
				CHARACTER_DATA["CharacterTag"] = TagType;
				duck.addCharacter(CHARACTER_DATA);

				const quack = new Quack(CHARACTER_DATA.MUSHROOM)
				quack.setTag(TagType);

				let codeGen = new Character(character.FirstName, character.LastName, character.BirthYear, character.BirthPlanet);
				const DragonPlanets = ["Melara", "Miokira"];
				const NightmarePlanets = ["Nimi", "Vrata", "Pepper"];

				if (character.BirthPlanet === "Kessya") {
					let kessyaCode = codeGen.codes.sectionCode("KESSYA", CHARACTER_DATA.MUSHROOM);
					console.log(kessyaCode)
					character.CharacterSection = ["KESSYA", kessyaCode];
				}
				else if (DragonPlanets.includes(character.BirthPlanet)) {
					let dragonCode = codeGen.codes.sectionCode("DRAGON", CHARACTER_DATA.MUSHROOM);
					console.log(dragonCode)
					character.CharacterSection = ["DRAGON", dragonCode];
				}
				else if (character.BirthPlanet === "Terra" && character.BirthYear > 2015 && character.BirthYear < 2050) {
					let WARCode = codeGen.codes.sectionCode("WAR", CHARACTER_DATA.MUSHROOM);
					character.CharacterSection = ["WAR", WARCode];
				}
				else if (NightmarePlanets.includes(character.BirthPlanet)) {
					let nightmareCode = codeGen.codes.sectionCode("NIGHTMARE", CHARACTER_DATA.MUSHROOM);
					character.CharacterSection = ["NIGHTMARE", nightmareCode];
				}
				else {
					let planetCode = codeGen.codes.sectionCode("PLANET", CHARACTER_DATA.MUSHROOM);
					character.CharacterSection = ["FINALTIMELINECODE", planetCode];
				}
				quack.addSectionCode(character.CharacterSection);
				let nameCodes = codeGen.codes.fetchNameCodes(CHARACTER_DATA.MUSHROOM);
				let Namedata = {
					PERSONALCODE: CHARACTER_DATA.PERSONAL,
					SECTIONCODE: character.CharacterSection[1],
					MIDDLECODE: nameCodes.MIDDLE,
					TITLECODE: nameCodes.TITLE,
					SURNAMECODE: nameCodes.SURNAME,
					FIRST: character.FirstName,
					PARENTAL: character.MiddleName,
					SURNAME: character.LastName
				};
				quack.InsertNames(Namedata);

				let birthData = {}

				let HelianDateObject = callSunflower(character.BirthPlanet, character.BirthYear, "Ekstera")
					.then((H) => {
						birthData["HELIANYEAR"] = (H.targetObject["EKSTERA"]).toString();
						birthData["UHXYEAR"] = (H.planetObject.UHX).toString();
						birthData["PERSONALCODE"] = Namedata.PERSONALCODE;
						birthData["SECTIONCODE"] = character.CharacterSection;
						birthData["PLANET"] = character.BirthPlanet;
						birthData["LOCALYEAR"] = character.BirthYear;
	
						quack.InsertBirth(birthData);					
					});
			})
		})
	})
};
/**
 * ACCESS SUNFLOWER APP
 * @param {String} origin 
 * @param {} date 
 * @param {String} target 
 * @returns CONVERSION DETAILS
 */
async function callSunflower(origin, date, target) {
	const sun = new Sunflower(origin, target, date); 
	return await sun.convert();
}

// == RUN SCRIPT == //
drawNewCharacterScreen();

