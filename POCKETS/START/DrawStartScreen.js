import { SetDay } from "../../APPS/CLOCK/Calender.js";
import { getMessage } from "../../APPS/MESSAGE/Welcome.js";
import { randomImage } from "../../APPS/RANDOM/Spinner.js";
import { Mould } from "../../CONSOLE/CONTROLLERS/ErrorController.js";
import { Frogs } from "../../CONSOLE/CONTROLLERS/FrogController.js";
import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Home Screen        //
// ================================= //

// == ROUTES AND INSTANCES == //
const MushroomStalk = new Stalk();
const frog = new Frogs();
const mould = new Mould();

// == ROUTES == //
const picture = await getRandomImage();
const Route_CogImage = await MushroomStalk.fetchImage('COG');
const Route_Picture = await MushroomStalk.machete('WELCOMEFOLDER');
const Route_FrameImage = await MushroomStalk.fetchImage('FRAME')
const fullPictureFramePath = Route_Picture + "\\" + picture;
const Route_BookPile = await MushroomStalk.fetchImage('BOOKPILE');
const Route_SwampBook = await MushroomStalk.fetchImage('SWAMPBOOK');
const Route_PanicButton =  await MushroomStalk.fetchImage('PANICBUTTON');
const Route_BagImage = await MushroomStalk.fetchImage('BAG');
const Route_Door = await MushroomStalk.fetchImage('DOORS');

// -- SECTIONS-- //
const HeaderSection = document.getElementById("START-PAGE-section-header");
const BellySection = document.getElementById('START-PAGE-section-belly');
const BaseSection = document.getElementById('START-PAGE-section-base');

// -- PROCESSES -- //
/**
 * FETCH A RANDOM IMAGE
 * @returns PICTURE NAME
 */
async function getRandomImage() {
	try {
		return await randomImage()
	}
	catch (err) {
		mould.Image();
	}
}
/**
 * GET A RANDOM WELCOME MESSAGE
 * @returns {string} TITLE MESSAGE
 */
async function getTitleMessage () {
	let messages = frog.FetchMessage()
		.then((mResult) => {
			let welcomeMessage = getMessage(mResult)
				.then((Message) => {
					let title = document.getElementById('TEXT_Text-Header');
					title.innerHTML = Message;
					return Message});
	})
	return messages;
}

// == DRAW == //
/**
 * DRAW THE HEADER PANEL FOR THE START SCREEN
 * @returns HTML ELEMENT
 */
function drawHeaderPanel() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div',
		id: 'WRAPPER_Start-Header',
		classes: ['WRAPPER-Layout']
	}).init();
	let TopLeftCornerBox = new create ({
		tag: 'div',
		id: 'WRAPPER_Start-TopLeft',
		classes: ['WRAPPER-Layout-Top-Left']
	}).init();
	let TitleBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-TopMiddle',
		classes: ['WRAPPER-Layout-Top-Middle']
	}).init();
	let SettingsBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-TopRight',
		classes: ['WRAPPER-Layout-Top-Right']
	}).init();	

	// == IMAGES == //
	let settingsImage = new create ({ 
		tag: 'img',
		id: 'IMAGE_Start-Settings',
		classes: ['IMAGE-Settings']
	}).init();
	let bagImage = new create ({ 
		tag: 'img',
		id: 'IMAGE_Start-Bag',
	}).init();

	settingsImage.src = Route_CogImage;
	bagImage.src = Route_BagImage;

	// == TEXT == //
	let pageTitle = new create({
		tag: 'h1',
		id: 'TEXT_Text-Header',
		elementText: 'WELCOME BACK GOBLIN',
		classes: ['mainPageTitle']
	}).init();

	// == LISTENERS == //
	bagImage.addEventListener('click', (archiveEvent) => {
		MushroomStalk.load("ARCHIVE");
	});
	settingsImage.addEventListener('click', (event) => {
		MushroomStalk.load("SETTINGS");
	})

	// == ATTACHMENTS == //
	TitleBox.append(pageTitle);
	SettingsBox.append(settingsImage);
	TopLeftCornerBox.append(bagImage);

	wrapper.append(...[
		TopLeftCornerBox,
		TitleBox,
		SettingsBox
	]);

	return wrapper;
};
/**
 * DRAW THE BELLY PANEL FOR THE START SCREEN
 * @returns HTML ELEMENT
 */
function DrawBellyPanel() {

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div',
		id: 'WRAPPER_Start-Belly',
		classes: ['WRAPPER-Layout']
	}).init();
	let leftBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-Left',
		classes: ['WRAPPER-Layout-Middle-Left']
	}).init();
	let centreBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-Centre',
		classes: ['WRAPPER-Layout-Middle-Centre']
	}).init();
	let rightBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-Right',
		classes: ['WRAPPER-Layout-Middle-Right']
	}).init();

	// == IMAGES == //
	let pictureFrame = new create({
		tag: 'img',
		id: 'IMAGE_Start-Frame',
		classes: ['imageWithBorder']
	}).init();
	let leftDoor = new create ({
		tag: 'img',
		id: 'IMAGE_Start-LeftDoor',
		classes: ['doorButtonLeft']
	}).init();
	let rightDoor = new create ({
		tag: 'img',
		id: 'IMAGE_Start-RightDoor',		
		classes: ['doorButtonRight']
	}).init();
	let frames = new create ({
		tag: 'img',
		id: 'IMAGE_Start-Frames',
	}).init();

	leftDoor.src = Route_Door;
	rightDoor.src = Route_Door;
	pictureFrame.src = fullPictureFramePath;
	frames.src = Route_FrameImage;

	// == LISTENERS AND CLICKS == //
	leftDoor.onclick = openLeftDoor;
	rightDoor.onclick = openRightDoor;

	// == ATTACHMENTS == //
	centreBox.append(...[
		frames,
		pictureFrame
	]);
	leftBox.append(leftDoor);
	rightBox.append(rightDoor);

	wrapper.append(...[
		leftBox,
		centreBox,
		rightBox
	]);

	return wrapper;
};

// == USEFUL FUNCTIONS == //
/**
 * GO TO TRACKER PAGE
 */
function openLeftDoor() {
	MushroomStalk.load("TRACKER");
};
/**
 * GO TO OFFICE
 */
function openRightDoor() {
	MushroomStalk.load("OFFICE");
};
/**
 * DRAW THE CURRENT DAY TO THE LOWER PANEL
 * @returns HTML ELEENT
 */
function DrawDayLabel() {

	// == VARIABLES == //
	let day = SetDay();

	// == WRAPPERS == //
	let wrapper = new create({
		tag: 'div',
		id: 'WRAPPER_Start-Day',
		classes: ['WRAPPER-Layout']
	}).init();
	let leftBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-LeftBottom',
		classes: ['WRAPPER-Layout-Base-Left']
	}).init();
	let centreBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-CentreBottom',
		classes: ['WRAPPER-Layout-Base-Centre']
	}).init();
	let rightBox = new create({
		tag: 'div',
		id: 'WRAPPER_Start-RightBottom',
		classes: ['WRAPPER-Layout-Base-Right']
	}).init();

	// == TEXT == //
	let dayText = new create({
		tag: 'p',
		id: 'WRAPPER_Start-DayLabel',
		elementText: 'Today Is A Day'
	}).init();

	dayText.innerHTML = day;

	// == IMAGES == //
	let buttonPileImage = new create({
		tag: 'img',
		id: 'WRAPPER_Start-ButtonImage',
		classes: ['BUTTON_Notebook_Layout']
	}).init();
	let swampBookImage = new create({
		tag: 'img',
		id: 'WRAPPER_Start-SwampImage'
	}).init();
	let PanicButtonImage = new create({
		tag: 'img',
		id: 'WRAPPER_Start-PanicImage',
		classes: ['BUTTON_Panic_Layout']
	}).init();

	buttonPileImage.src = Route_BookPile;
	swampBookImage.src = Route_SwampBook;
	PanicButtonImage.src = Route_PanicButton;

	// == LISTENERS == //
	PanicButtonImage.addEventListener('click', (panicEvent) => {
		MushroomStalk.load("PANIC")
	});
	swampBookImage.addEventListener('click', (gizmoEvent)=> {
		MushroomStalk.load("LIBRARY")
	});
	buttonPileImage.addEventListener('click', (NOTEBOOKEVENT) => {
		MushroomStalk.load("NOTEBOOK")
	})

	// == ATTACHMENT == //

	leftBox.append(buttonPileImage);
	centreBox.append(...[
		dayText,
		swampBookImage
	])
	rightBox.append(PanicButtonImage);

	wrapper.append(...[
		leftBox,
		centreBox,
		rightBox
	]);

	return wrapper;
}
/**
 * CREATE THE PAGE
 */
function drawStartScreen() {

	HeaderSection.appendChild(drawHeaderPanel());
	BellySection.appendChild(DrawBellyPanel());
	BaseSection.appendChild(DrawDayLabel());
	getTitleMessage();

} 

// == RUN SCRIPT
if (window.location.href.includes("Start")) {
	drawStartScreen();
};
