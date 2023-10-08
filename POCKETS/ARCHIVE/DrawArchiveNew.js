import { create } from "../../GIZMOS/UTILITY/Create.js";
import { code } from "../../DATABASE/CHARACTER/CodeController.js";
import { addCharacter } from "../../GEARS/PLATYPUS/DatabaseRender.js";
import { duck } from "../../GEARS/PLATYPUS/AskDuck.js";

const titleSection = document.getElementById('Section_TitleBar');
const formSection = document.getElementById('Section_Input_Form');
const Duck = new duck();

// == DRAW PANELS ==//
function drawTitlePanel() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let pageHeader = new create({
		tag: 'h1',
		elementText: 'ADD A NEW CHARACTER',
		classes: ['defaultTitle']
	}).init();

	wrapper.append(...[
		pageHeader
	])

	return wrapper;
};
function drawInputPanel(){

	let wrapper = new create({
		tag: 'div'
	}).init();

	let LabelFirstName = new create({
		tag: 'label',
		elementText: 'FIRST NAME: ',
		labelFor: 'firstNameInput',
		classes: ['defaultLabel']
	}).init();
	let LabelLastName = new create({
		tag: 'label',
		elementText: 'MAIN LAST NAME: ',
		labelFor: 'lastNameInput',
		classes: ['defaultLabel']
	}).init();
	let LabelMiddleName = new create({
		tag: 'label',
		elementText: 'MAIN MIDDLE NAME: ',
		labelFor: 'mainMiddleNameInput',
		classes: ['defaultLabel']
	}).init();
	let LabelBirthPlanet = new create({
		tag: 'label',
		elementText: 'BIRTH PLANET: ',
		labelFor: 'birthPlanetInput',
		classes: ['defaultLabel']
	}).init();
	let LabelBirthYear = new create({
		tag: 'label',
		elementText: 'BIRTH YEAR [Localised]: ',
		labelFor: 'birthYearInput',
		classes: ['defaultLabel']
	}).init();
	let LabelMainMother = new create({
		tag: 'label',
		elementText: 'MAIN MOTHER: ',
		labelFor: 'mainMotherInput',
		classes: ['defaultLabel']		
	}).init();

	let InputFirstName = new create({
		tag: 'input',
		boxName: 'firstNameInput',
		classes: ['defaultInput']
	}).init();
	let InputMiddleName = new create({
		tag: 'input',
		boxName: 'mainMiddleNameInput',
		classes: ['defaultInput']
	}).init();
	let InputlastName = new create({
		tag: 'input',
		boxName: 'lastNameInput',
		classes: ['defaultInput']
	}).init();
	let InputBirthPlanet = new create({
		tag: 'input',
		boxName: 'birthPlanetInput',
		classes: ['defaultInput']
	}).init();
	let InputBirthYear = new create({
		tag: 'input',
		boxName: 'birthYearInput',
		classes: ['defaultInput']
	}).init();
	let InputMainMother = new create({
		tag: 'input',
		boxName: 'mainMotherInput',
		classes: ['defaultInput']
	}).init();

	let submitButton = new create({
		tag: 'button',
		elementText: 'SUBMIT CHARARCTER',
		id: 'Button_Submit_Archive_New',
		classes: ['defaultButton']
	}).init();
	let backButton = new create({
		tag: 'button',
		elementText: 'BACK',
		id: 'Button_Submit_Archive_New',
		classes: ['defaultButton']
	}).init();

	submitButton.addEventListener('click', (submitEvent) => {
		const character = {
			FirstName: InputFirstName.value,
			MiddleName: InputMiddleName.value,
			LastName: InputlastName.value,
			BirthPlanet: InputBirthPlanet.value,
			BirthYear: InputBirthYear.value,
			MainMother: InputMainMother.value,
			CharacterSection: ""
		}

		const DragonPlanets = ["Melara", "Miokira"];
		const NightmarePlanets = ["Nimi", "Vrata"];

		// SET UP CHARACTER SECTION
		if (DragonPlanets.includes(character.BirthPlanet)) {
			character.CharacterSection = "DragonCode";
		}
		else if (character.BirthPlanet === "Kessya") {
			character.CharacterSection = "KessyaCode";
		}
		else if (character.BirthPlanet === "Terra" && character.BirthYear > 2015 && character.BirthYear < 2050) {
			character.CharacterSection = "WARCode";
		}
		else if (NightmarePlanets.includes(character.BirthPlanet)) {
			character.CharacterSection = "NightmareCode";
		}
		else {
			character.CharacterSection = "PrimaryPlanetCode";
		}

		characterCodes(character.FirstName, character.LastName, character.BirthYear, character.BirthPlanet, character.CharacterSection)
			.then((result) => {
				Duck.newCharacter(result);
				let codeGen = new code(character.FirstName, character.LastName, character.BirthYear, character.BirthPlanet)
					if (character.CharacterSection ==="DragonCode") {
						character.areaCode = codeGen.DragonCode(result.Mushroom);
					}
					else if (character.CharacterSection === "WARCode") {
						character.areaCode = codeGen.WARCode(result.Mushroom);
					}
					else if (character.CharacterSection === "KessyaCode") {
						character.areaCode = codeGen.KessyaCode(result.Mushroom);
					}
					else if (character.CharacterSection === "NightmareCode") {
						character.areaCode = codeGen.NightmareCode(result.Mushroom);
					}
					else {
						character.areaCode = codeGen.PlanetCode(result.Mushroom);
					}	
				Duck.areaTableInsert(result.Mushroom, character.areaCode, character.CharacterSection)
				Duck.newCharacterPersonalDetails(character, result.Personal, result.Mushroom, character.CharacterSection, codeGen.SurnameCode(result.Mushroom), codeGen.MiddleNameCode(result.Mushroom))
				return result});
	});

	backButton.addEventListener('click', (backEvent) => {
		window.location.href = "FrameworkArchive.html";
	});
	wrapper.append(...[
		LabelFirstName,
		InputFirstName,

		LabelMiddleName,
		InputMiddleName,

		LabelLastName,
		InputlastName,

		LabelBirthPlanet,
		InputBirthPlanet,

		LabelBirthYear,
		InputBirthYear,

		LabelMainMother,
		InputMainMother,

		submitButton,
		backButton

	]);

	return wrapper;
};

async function drawNewCharacterScreen() {
	titleSection.append(drawTitlePanel());
	formSection.append(drawInputPanel());
}

drawNewCharacterScreen()

// // const charactertest = {

// // 	PersonalDetails: {
// // 		Names: {
// // 		FirstName: InputFirstName.value,
// // 		MiddleNames: [InputMiddleName.value],
// // 		LastName: [InputlastName.value]
// // 		},
// // 		Birth: {
// // 			BirthPlanet: InputBirthPlanet.value,
// // 			BirthYear: InputBirthYear.value,
// // 		}
// // 	},
// // 	LocationDetails: {

// // 	},
// // 	FamilyDetails: {
// // 		BirthMother: "",
// // 		BirthFather: "",
// // 		MainMother: InputMainMother.value,
// // 		MainFather: "",
// // 		OtherMothers: [],
// // 		OtherFathers: []
// // 	}

// }

async function characterCodes(first, last, year, planet) {

	const characterCodes = new code(first, last, year, planet);

	const mushroom = await characterCodes.MushroomCode();
	const personal = await characterCodes.PersonalCode();
	const location = await characterCodes.LocationCode();
	const education = await characterCodes.EducationCode();
	const university = await characterCodes.UniversityCode();
	const activity = await characterCodes.ActivityCode();
	const organisation = await characterCodes.OrganisationCode();
	const pet = await characterCodes.PetCode();
	const employment = await characterCodes.EmploymentCode();
	const halex = await characterCodes.HalexCode();

	const alpa = await characterCodes.updateAlphabet();
	return {
		Mushroom: mushroom,
		Personal: personal,
		Location: location,
		Education: education,
		University: university,
		Activity: activity,
		Organisation: organisation,
		Pet: pet,
		Employment: employment,
		Halex: halex
	}
	
}