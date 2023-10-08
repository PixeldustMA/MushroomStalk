import { character } from "../../DATABASE/CHARACTER/Character.js";
import { route } from "../../GEARS/GNOME/Routes.js";
import { duck } from "../../GEARS/PLATYPUS/AskDuck.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";

const TitleSection = document.getElementById('Section_Search_Title');
const FilterSection = document.getElementById('Section_Search_Filter');
const Duck = new duck();
const meatRoute = await route("meatPage");


let searchByLetter = new create({
	tag: 'select',
	options: [
		"A", "B", "C",
		"D", "E", "F",
		"G", "H", "I",
		"J", "K", "L",
		"M", "N", "O",
		"P", "Q", "R",
		"S", "T", "U",
		"V", "W", "X",
		"Y", "Z"
	]
}).init();
let displayOptions = new create({
	tag: 'div'
}).init();

function drawSearchTitle() {

	let wrapper = new create({
		tag: 'div'
	}).init();
	let searchHeader = new create({
		tag: 'h1',
		elementText: 'SEARCH THE ARCHIVE'
	}).init();

	searchByLetter.onchange = SearchLetter;
	wrapper.append(...[
		searchHeader,
		searchByLetter,
		displayOptions
	]);
	return wrapper;
}
function drawSearch() {
	TitleSection.append(drawSearchTitle());
}
function SearchLetter(w) {
	let Letter = searchByLetter.options[searchByLetter.selectedIndex].text;
	Duck.letter = Letter;
	const codesByLetter = Duck.searchLetter()
		.then((databaseEntry) => {
			console.log(databaseEntry)
			let results = Object.keys(databaseEntry.message);
			results.forEach(record => {
				let note = document.createElement('p');
				let meatButton = document.createElement('button');
				let textString;

				let y = Duck.fetchName(databaseEntry.message[record].MushroomCode)
				.then((e) => {
					if (e.message.length > 0) {
						textString = databaseEntry.message[record].MushroomCode + e.message[0].FirstName + " " + e.message[0].Family;
					}
					else {
						textString = databaseEntry.message[record].MushroomCode;
					}
					note.innerHTML = textString;
					meatButton.innerHTML = "View Character";
					meatButton.addEventListener('click', (meatEvent) => {
						meat(databaseEntry.message[record].MushroomCode)
					})
					displayOptions.append(...[note, meatButton]);
					return e});
			});
			return databaseEntry;
		});
}
drawSearch()


function meat(MushroomCode) {
	let char = new character(MushroomCode);
	console.log(char.LAST.then((e) => {console.log(e)}));
	char.saveCurrent();
	window.location.href = meatRoute;

	// CREATE CHARACTER OBJECT
	// save character to current
}
