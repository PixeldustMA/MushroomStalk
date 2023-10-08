import { DrawLocationCreate } from "../Boxes/Box_Create_LocationFile.js";
import { DrawThemeCreate } from "../Boxes/Box_Create_ThemeFile.js";
import { DrawTopLevelCreate } from "../Boxes/Box_Create_TopLevelFile.js";
import { DrawDisplayButtons } from "../Boxes/Box_Display_Buttons.js";
import { DrawDisplayPreset } from "../Boxes/Box_Display_PresetDetails.js";
import { DrawTemplateChoice } from "../Boxes/Box_Display_TemplateChoice.js";
import { DrawEditBox } from "../Boxes/Box_Edit_PresetFile.js";
import { DrawStylePicker } from "../Boxes/Box_Style_Base.js";
import { DrawStyleNav } from "../Boxes/Box_Style_Menu.js";
import { allowDrop, drop } from "../Functionality/JellyfishDrag.js";
import { backgroundStyle, fontStyles, borderStyles } from "../Functionality/Theme.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//           DRAW THINGS             //
// ================================= //

// == Structure == //
function drawButtons(givenTemplate, shadow) {
	let rowOne = Object.values(givenTemplate.rowOne);
	let rowTwo = Object.values(givenTemplate.rowTwo);
	let rowThree = Object.values(givenTemplate.rowThree);
	let rowFour = Object.values(givenTemplate.rowFour);

	drawRow(rowOne, shadow, 'One');
	drawRow(rowTwo, shadow, 'Two');
	drawRow(rowThree, shadow, 'Three');
	drawRow(rowFour, shadow, 'Four');
}
function drawRow(rowOne, shadow, num) {
	let row = shadow.getElementById(`Row${num}`);
	for (let index = 0; index < rowOne.length; index++) {
		let newButton = document.createElement('button');
			newButton.innerHTML = rowOne[index].replace('Button', '');
			newButton.type = 'button';
			newButton.classList.add('defaultButton')
			newButton.id = rowOne[index];
		row.appendChild(newButton);
	}
}
function getBoxType(wrapper, tag, currentPresetName) {

	switch (tag) {
		case 'WelcomeBox':
			return DrawTemplateChoice(currentPresetName, wrapper);
		case 'ExistingPresetBox':
			return NewTopLevelBox(wrapper);
		case 'NewPresetBox':
			break;
		case "StyleSelectBox":
			return StyleSelect(currentPresetName, wrapper);
		case "ColourSelectBox":
			return StyleColourBox(wrapper);
		default:
			break;
	}
}
function getButtonLocation(shadow) {
	const Numbers = ["One", "Two", "Three", "Four"];
	let ResultArray = [];
	let result = [];
	Numbers.forEach(Row => {
		let rowChildren = shadow.getElementById(`Row${Row}`).childNodes;
		rowChildren.forEach(button => {
			result.push(button.innerHTML + "Button");
		})
		ResultArray.push(result);
		result = []
	});
	return ResultArray;
}
// == Set up Functionality == // 
function prepareDrop(divElementArray) {
	divElementArray.forEach(divElement => {
		divElement.ondrop = drop;
		divElement.ondragover = allowDrop;
		divElement.classList.add('Dashed');
		return divElement;
	});
}
function setTemplateStyle() {
	let presetSelect = fetchShadow().querySelector('#Select_Choose_Template_Part');
	let template = presetSelect.options[presetSelect.selectedIndex].text;
	return template;
}
// == Style == // 
function applyColour(paintableObject) {
	if (paintableObject.Type = "HexCode") {
		return paintableObject.HexCode;
	}
	if (paintableObject.Type = "ThemeName") {
		return paintableObject.ThemeName;
	}
	if (paintableObject.Type = "ColourName") {
		return paintableObject.ColourName;
	}
}
function applyTheme(givenTemplate, shadow, nameOfButton) {

	let specificButton = shadow.getElementById(`${nameOfButton}Button`);
	let lowerName = nameOfButton.toLowerCase();
	let colourObject = givenTemplate[lowerName].Colour;
	let fontObject = givenTemplate[lowerName].FontStyle;
	let borderObject = givenTemplate[lowerName].Border;

	let colour = applyColour(colourObject);
	let borderColour = applyColour(borderObject.Colour);
	let fontColour = applyColour(fontObject.Colour);

	backgroundStyle(specificButton, colour);
	fontStyles(specificButton, fontObject, fontColour);
	borderStyles(specificButton, borderObject, borderColour);

}
// == Box Layout == //
function changeBox(tag, position) {
	switch (position) {
		case 'left':

			return drawLeftPanel(tag);
		case 'right':
			let rightchild = fetchShadow().getElementById('RightBoxPreset').firstChild;
			fetchShadow().getElementById('RightBoxPreset').removeChild(rightchild);
			return drawRightPanel(tag);
		case 'centre':
			let child = fetchShadow().getElementById('CentreBox').firstChild;
			fetchShadow().getElementById('CentreBox').removeChild(child);
			return drawCentrePanel(tag);
		default:
			break;
	}
}
function drawLeftPanel(tag, template = 0) {
	if (tag === 'Display') {
		fetchShadow().getElementById('LeftBox').append(DrawDisplayButtons());
	};
	if (tag === 'Edit') {
		drawButtons(template, fetchShadow());
	}
};
function drawCentrePanel(tag) {
	if (tag === 'Display') {
		fetchShadow().getElementById('CentreBox').append(DrawDisplayPreset());
	}
	if (tag === 'colours') {
		fetchShadow().getElementById('CentreBox').append(DrawStyleNav());
	};
	if (tag === 'fonts') {

	};
	if (tag === 'border') {

	};
	if (tag === 'Location') {
		fetchShadow().getElementById('CentreBox').append(DrawLocationCreate());
	};
	if (tag === 'Theme') {
		fetchShadow().getElementById('CentreBox').append(DrawThemeCreate());
	};
	if (tag === 'Top') {
		fetchShadow().getElementById('CentreBox').append(DrawTopLevelCreate());
	};
	if (tag === 'nav') {
		fetchShadow().getElementById('CentreBox').append(DrawStyleNav());
	};
	if (tag === 'Edit') {
		fetchShadow().getElementById('CentreBox').append(DrawEditBox());		
	}
};
function drawRightPanel(tag) {
	if(tag === 'colours') {
		console.log("Right")
		fetchShadow().getElementById('RightBoxPreset').append(DrawStylePicker());
	}
};
// == Helper Functions == //
function fetchShadow() {
	let panel = document.querySelector('jellyfish-buttons');
	let shadow = panel.shadowRoot;
	return shadow;
}

export {applyTheme, drawButtons, 
		prepareDrop, getBoxType,
		setTemplateStyle, getButtonLocation,
		changeBox, drawLeftPanel,
		drawCentrePanel, fetchShadow};