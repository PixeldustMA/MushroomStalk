import { route } from "../../GEARS/GNOME/Routes.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";

// == SECTIONS == //

const titleSection = document.getElementById('Section_TitleBar');
const choicesSection = document.getElementById('Section_ChoiceBar');

// == ROUTES == //

const newCharacterPath = await route('archiveNew')
	.then((newChar) => {return newChar});
const searchArchivePath = await route('archiveSearch')
	.then((search) => { return search});

// == DRAW PANELS ==//

function drawTitlePanel() {

	let wrapper = new create({
		tag: 'div'
	}).init();
	let archiveHeader = new create({
		tag: 'h1',
		elementText: 'ARCHIVE'
	}).init();

	wrapper.append(...[
		archiveHeader
	]);

	return wrapper;
}
function drawChoicesPanel(){

	let wrapper = new create({
		tag: 'div'
	}).init();
	let newCharacterButton = new create({
		tag: 'button',
		elementText: 'CREATE A NEW CHARACTER'
	}).init();
	let searchArchiveButton = new create({
		tag: 'button',
		elementText: 'SEARCH THE ARCHIVE'
	}).init();
	let inputCode = new create({
		tag: 'input',
		id: 'Input_Code_Quick_Access'
	}).init();

	
	newCharacterButton.addEventListener('click', (newCharacterEvent) => {
		window.location.href = newCharacterPath;
	});
	searchArchiveButton.addEventListener('click', (newCharacterEvent) => {
		window.location.href = searchArchivePath;
	});

	wrapper.append(...[
		newCharacterButton,
		searchArchiveButton,
		inputCode
	]);

	return wrapper;
}

function drawArchiveFoundation() {
	titleSection.append(drawTitlePanel());
	choicesSection.append(drawChoicesPanel());
}

drawArchiveFoundation();