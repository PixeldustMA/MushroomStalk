import { SetDay } from "../../GIZMOS/WIDGETS/Calender.js";
import { getMessage } from "../../GIZMOS/WIDGETS/Welcome.js";
import { route } from "../../GEARS/GNOME/Routes.js"
import { createTheme } from "../../SETTINGS/Colours/ThemeWrangler.js";
import { randomImage } from "../../GIZMOS/UTILITY/Spinner.js";
import { create } from "../../GIZMOS/UTILITY/Create.js";
import { user } from "../../GIZMOS/UTILITY/LoadInformation.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Home Screen        //
// ================================= //

const getstate = user;

const CurrentStateStartScreen = async () => {
	console.log(getstate.User)
}

let pictureFramePath = async () => {
	const picture = await getRandomImage()
		.then((path) => {
			let completePath = route('welcomeImage')
				.then((welcomeImage) => {
					let createPath = welcomeImage + "\\" + path;
					return createPath});
			return completePath;})
	return picture;
};
let cogImagePath = async () => {
	const cog = await route("ImageCog")
	.then((cogPath) => {return cogPath})
	return cog;
};
let doorImagePath = async () => {
	const door = await route("ButtonDoor")
	return door;
};
let panicPath = await route("panic")
let archivePath = await route("archive")
let gamePath = await route("game");
let notebookPath = await route("notebook")
// -- SECTIONS-- //
const HeaderSection = document.getElementById("START-PAGE-section-header");
const DayButtonSection = document.getElementById('START-PAGE-section-buttons-day');
const DayLabelSection = document.getElementById('START-PAGE-section-day');

// -- PROCESSES -- //
async function getRandomImage() {
	try {
		const value = await randomImage()
			.then((x) => {return x});
		return value;
	}
	catch (err) {
		console.log(err)
	}
}
async function getTitleMessage () {
	let messages = getstate.createMessageObject()
		.then((mResult) => {
			let welcomeMessage = getMessage(mResult)
				.then((Message) => {
					let title = document.getElementById('Header_StartScreen');
					title.innerHTML = Message;
					return Message});
	})
	return messages;
}

// == DRAW == //

function drawHeaderPanel() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let pageTitle = new create({
		tag: 'h1',
		id: 'Header_StartScreen',
		elementText: 'WELCOME BACK GOBLIN',
		classes: ['mainPageTitle']
	}).init();
	let pictureFrameImage = new create({
		tag: 'img',
		id: 'Image_Goblin',
		classes: ['imageWithBorder']
	}).init();
	let settingsImage = new create ({ 
		tag: 'img',
		id: 'Image_Settings'
	}).init();

	 pictureFramePath().then((result) => {
		pictureFrameImage.src = result;
		return result});
	cogImagePath().then((result) => {
		cogImagePath.src = result
		return result});

	wrapper.append(...[
		pageTitle,
		pictureFrameImage,
		settingsImage
	])
	return wrapper;
};
function DrawDayPanel() {
	let wrapper = new create({
		tag: 'div'
	}).init();
	let leftDoor = new create ({
		tag: 'img',
		classes: ['doorButtonLeft']
	}).init();
	let organiseButton = new create ({
		tag: 'button',
		elementText: 'ORGANISE'
	}).init();
	let rightDoor = new create ({
		tag: 'img',
		classes: ['doorButtonRight']
	}).init();
	let bookButton = new create ({
		tag: 'button',
		elementText: 'BOOK',
		classes: ['rightSideLayout']
	}).init();

	doorImagePath().then((path) => {
		leftDoor.src = path;
		rightDoor.src = path;
		return path;})

	leftDoor.onclick = testclick;
	
	wrapper.append(...[
		leftDoor,
		rightDoor,
		organiseButton,
		bookButton
	]);

	return wrapper;
};
function testclick() {
	console.log("Door Clicked")
}
function DrawDayLabel() {
	let day = SetDay();
	let wrapper = new create({
		tag: 'div'
	}).init();
	let dayText = new create({
		tag: 'p',
		id: 'Header_Current_Day',
		elementText: 'Today Is A Day'
	}).init();
	let archiveButton = new create({
		tag: 'button',
		elementText: 'ARCHIVE',
		classes: ['positionBottomLeft']
	}).init();
	let gizmoButton = new create({
		tag: 'button',
		elementText: 'GAMES AND GIZMOS',
	}).init();
	let panicButton = new create({
		tag: 'button',
		elementText: 'PANIC',
		classes: ['positionBottomRight']
	}).init();
	let notebookButton = new create({
		tag: 'button',
		elementText: 'NOTEBOOK'
	}).init();
	panicButton.addEventListener('click', (panicEvent) => {
		window.location.href = panicPath;
	});
	archiveButton.addEventListener('click', (archiveEvent) => {
		window.location.href = archivePath;
	});
	gizmoButton.addEventListener('click', (gizmoEvent)=> {
		window.location.href = gamePath;
	});
	notebookButton.addEventListener('click', (NOTEBOOKEVENT) => {
		window.location.href = notebookPath;
	})
	dayText.innerHTML = day;
	wrapper.append(...[
		dayText,
		archiveButton,
		gizmoButton,
		notebookButton,	
		panicButton
	]);

	return wrapper;
}

async function drawStartScreen() {

	const cogRoute = await route("cogs")
	.then((result) => {
		return result;
	})
	const panicRoute = await route("panic")
	.then((result) => {
		return result;
	})
	HeaderSection.appendChild(drawHeaderPanel());
	DayButtonSection.appendChild(DrawDayPanel());
	DayLabelSection.appendChild(DrawDayLabel());
	getTitleMessage()

	let settingsCog = document.getElementById('Image_Settings')
	settingsCog.addEventListener('click', (event) => {
		document.location.href = cogRoute
	})

} 

if (window.location.href.includes("StartScreen")) {
	createTheme();
	drawStartScreen();
}

export { CurrentStateStartScreen}