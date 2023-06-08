import {
	PageTitle, SetImage,
	createButton, text
} from "../../GIZMOS/KNOTS/Global.js";
import { SetDay } from "../../GIZMOS/CLOCKS/Calender.js";
import { randomImage } from "../../GIZMOS/RANDOM/Randomiser.js";
import { getMessage } from "../../GIZMOS/WIDGETS/Welcome.js";
import { getObject } from "./LoadInformation.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Home Screen        //
// ================================= //

// PASS STATE OBJECTS
const getstate = async () => {
	const result = await getObject();
	return result
}
const CurrentStateStartScreen = async () => {
	const current = await getstate()
	.then((state) => {
		console.log("Current status -- start screen");
		console.log(state)
		return state
	});
	return current;
}

// -- SECTIONS-- //
const HeaderSection = document.getElementById("START-PAGE-section-header");
const ButtonSection = document.getElementById('START-PAGE-button-strip');
const DayButtonSection = document.getElementById('START-PAGE-section-buttons-day');
const DayLabelSection = document.getElementById('START-PAGE-section-day');

// -- PROCESSES -- //
async function getRandomImage() {
	try {
		const value = await randomImage();
		return value;
	}
	catch (err) {
		console.log(err)
	}
}
async function getTitleMessage () {
	let welcomeMessage = await getMessage()
	.then((Message) => {
		return Message
	});
	console.log(welcomeMessage + " This Is Message") 

	let title = document.getElementById('header-startScreen');
	title.innerHTML = welcomeMessage;
}
function changeText(day) {
	let daytext = document.getElementById("text-day");
	daytext.innerHTML = day;
}
// -- PANELS -- //

async function StartHeaderPanel() {
	const pathName = await getRandomImage();
		try {
			let ContainerDiv = document.createElement('div');
			ContainerDiv.append(... [
				PageTitle("WELCOME BACK GOBLIN", "header-startScreen", ["mainPageTitle"]),
				SetImage(`../../ASSETS/IMAGES/PIXIES/${pathName}`, "image-goblin", "Empty"),
				SetImage(`../../ASSETS/IMAGES/COG.png`, "TestCog", "Empty")	
			])
		return ContainerDiv
	} 
		catch (err) {
			console.log(err)
		}	
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
// Create page
async function drawStartScreen() {
	let day = SetDay();
	const head = await StartHeaderPanel()
	.then((panel) => {
		return HeaderSection.appendChild(panel);
	})
	ButtonSection.appendChild(StartButtonPanel());
	DayButtonSection.appendChild(StartDayPanel());
	DayLabelSection.appendChild(StartDayLabel());
	getTitleMessage()
	changeText(day);

	let settingsCog = document.getElementById('TestCog')
	settingsCog.addEventListener('click', (event) => {
		// TODO - Better way of changing page
		window.location.replace('../COGS/CogsFramework.html')
	})
}

// Run script
drawStartScreen();


export { CurrentStateStartScreen}