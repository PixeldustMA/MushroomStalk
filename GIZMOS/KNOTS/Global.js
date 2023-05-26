import { addClasses } from "../SKELETON/Tendons.js";
import {
		PageTitle, SetImage, 
		createButton, text
} from "../SKELETON/Bones.js"
import { spinNumber } from "../SKELETON/Feets.js";

const fs = require('fs');
const ipc = window.require("electron").ipcRenderer;
const path = require('path');
export { 
	addClasses, PageTitle,
	SetImage, createButton,
	text, fs, ipc,
	spinNumber, path
}