import {
	PageTitle, SetImage,
	createButton, text
 } from "../../GIZMOS/KNOTS/Global.js";

 import { SetDay } from "../../GIZMOS/Calender.js";
import { randomImage } from "../../GIZMOS/Randomiser.js";
// -- VARIABLES-- //
const HeaderSection = document.getElementById("START-PAGE-section-header");
const ButtonSection = document.getElementById('START-PAGE-button-strip');
const DayButtonSection = document.getElementById('START-PAGE-section-buttons-day');
const DayLabelSection = document.getElementById('START-PAGE-section-day');

// -- APPEND THE CONTAINER DIVS -- //
HeaderSection.appendChild(StartHeaderPanel());
ButtonSection.appendChild(StartButtonPanel());
DayButtonSection.appendChild(StartDayPanel());
DayLabelSection.appendChild(StartDayLabel());

let ImagePath = "../../ASSETS/IMAGES/PIXIES/PixieFace.png"
let PanicPath = "";
let BucketPath = "";
let FridgePath = "";

// -- STRUCTURAL FUNCTIONS-- //
function StartHeaderPanel() {

	let ContainerDiv = document.createElement('div');
	console.log(__dirname)
	let imagePath = randomImage()
	ContainerDiv.append(... [
		PageTitle("WELCOME BACK GOBLIN", "header-startScreen", ["mainPageTitle"]),
		SetImage(`../../ASSETS/IMAGES/PIXIES/${imagePath}`, "image-goblin", "Empty"),
		SetImage(`../../ASSETS/IMAGES/COG.png`, "TestCog", "Empty")
	])

	return ContainerDiv;
}
function StartButtonPanel() {

	let ContainerDiv = document.createElement('div');
	ContainerDiv.append(... [
		createButton('button-goblin-bucket', "", ['stripButton'], 'GOBLIN BUCKET'),
		createButton('button-goblin-fridge', "", ['stripButton'], 'FRIDGE'),
		createButton('button-goblin-panic', "", ['stripButton'], 'PANIC')
	])
	return ContainerDiv;
}
function StartDayPanel() {

	let ContainerDiv = document.createElement('div');
	ContainerDiv.append(... [
		createButton('monButton', 'empty', ['dayButton', 'buttonRowOne'], 'MONDAY'),
		createButton('tueButton', 'empty', ['dayButton', 'buttonRowOne'], 'TUESDAY'),
		createButton('wedButton', 'empty', ['dayButton', 'buttonRowOne'], 'WEDNESDAY'),
		createButton('thurButton', 'empty', ['dayButton', 'buttonRowOne'], 'THURSDAY'),
		createButton('friButton', 'empty', ['dayButton', 'buttonRowOne'], 'FRIDAY'),
		createButton('satButton', 'empty', ['dayButton', 'buttonRowOne'], 'SATURDAY'),
		createButton('sunButton', 'empty', ['dayButton', 'buttonRowOne'], 'SUNDAY')
	])
	ContainerDiv.classList.add('buttonPanel');
	ContainerDiv.id = 'PanelOfButton';
	return ContainerDiv;
}
function StartDayLabel() {
	let ContainerDiv = document.createElement('div');
	ContainerDiv.append(... [
		text('Today is a day', 'text-day', 'empty')
	])
	return ContainerDiv;
}

window.addEventListener("load", (event) => {

	let day = SetDay();
	changeText(day);
})

function changeText(day) {
	let daytext = document.getElementById("text-day");
	daytext.innerHTML = day;
}

let settingsCog = document.getElementById('TestCog')
settingsCog.addEventListener('click', (event) => {

	console.log("Boop");
	window.location.replace('../COGS/CogsFramework.html')
})