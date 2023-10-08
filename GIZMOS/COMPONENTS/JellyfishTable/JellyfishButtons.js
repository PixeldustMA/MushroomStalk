// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Dynamic Table               //
// ================================= //

import { drag } from "./Functionality/JellyfishDrag.js";
import { fetchTemplate } from "./Functionality/LoadTemplate.js";
import { applyTheme, drawCentrePanel, drawLeftPanel, getBoxType, getButtonLocation, prepareDrop } from "./Operations/DrawController.js";
import { readState, saveState } from "./Operations/StateController.js";
import { createButtonPresetObject, saveTemplate } from "./Operations/TemplateController.js";

class JellyfishButtonPanel extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {
		const SHADOW = this.attachShadow({mode: 'open'});
		const classReference = this;
		const ButtonContainer = document.createElement('div');
			ButtonContainer.classList.add('Wrapper_Button_Panel');

		customElements.whenDefined('jellyfish-buttons').then(() => {
			const state = readState().then((result) => {
				drawLeftPanel('Display');
				classReference.setAttribute('Mode', result.Mode);
				let CURRENTMODE = classReference.getAttribute('Mode');

				if (CURRENTMODE === 'Sandbox') {
					let buttonPreset = fetchTemplate(result.Preset, "FullPresetObject")
					.then((buttonResult) => {
						drawLeftPanel('Edit', buttonResult.Location);
						applyTheme(buttonResult.Theme, SHADOW, "Expand");
						applyTheme(buttonResult.Theme, SHADOW, "Load");
						applyTheme(buttonResult.Theme, SHADOW, "Boop");
						applyTheme(buttonResult.Theme, SHADOW, "Save");
						applyTheme(buttonResult.Theme, SHADOW, "Edit");
						applyTheme(buttonResult.Theme, SHADOW, "Clear");
						applyTheme(buttonResult.Theme, SHADOW, "Contract");
						const EditButton = classReference.shadowRoot.querySelector('#LoadButton');
						EditButton.addEventListener('click', (e) => {
							result.Mode = 'Edit'
							saveState(result);
							window.location.reload();
						});
					});
				}
				if (CURRENTMODE === 'Edit') {

					const rowFive = this.shadowRoot.getElementById('EditRow');
						rowFive.classList.remove('hideMe')
					const editBox = this.shadowRoot.getElementById('RightBoxPreset');
						editBox.classList.remove('hideMe');
					const centre = this.shadowRoot.getElementById('CentreBox');
						getBoxType(editBox, 'WelcomeBox', result.Preset);
					drawCentrePanel('Display');
					const formatBox = this.shadowRoot.getElementById('RightBoxDefault');
						formatBox.classList.add('hideMe');
					const presetLabel = this.shadowRoot.getElementById('Header_Current_Preset');
						presetLabel.innerHTML = `Preset in use is: ${result.Preset}`;
					let buttonPreset = fetchTemplate(result.Preset, "FullPresetObject")
					.then((buttonResult) => {

						drawLeftPanel('Edit', buttonResult.Location);
						classReference.setAttribute('Mode', 'Edit');
						applyTheme(buttonResult.Theme, SHADOW, "Expand");
						applyTheme(buttonResult.Theme, SHADOW, "Load");
						applyTheme(buttonResult.Theme, SHADOW, "Boop");
						applyTheme(buttonResult.Theme, SHADOW, "Save");
						applyTheme(buttonResult.Theme, SHADOW, "Edit");
						applyTheme(buttonResult.Theme, SHADOW, "Clear");
						applyTheme(buttonResult.Theme, SHADOW, "Contract");
						console.log(this.shadowRoot.getElementById("ContractButton").style.backgroundColor);
						let One = classReference.shadowRoot.getElementById('RowOne');
						let Two = classReference.shadowRoot.getElementById('RowTwo');
						let Three = classReference.shadowRoot.getElementById('RowThree');
						let Four = classReference.shadowRoot.getElementById('RowFour');
						prepareDrop([One, Two, Three, Four])

						let allTheButtons = this.shadowRoot.querySelectorAll('button');
							allTheButtons.forEach(clicker => {
								clicker.draggable = true;
								clicker.ondragstart = drag;
							});
						const savePreset = this.shadowRoot.getElementById('SavePresetButton');
							savePreset.addEventListener('click', (e) => {
								let ButtonLocations = getButtonLocation(this.shadowRoot);
								let ButtonLocationObject = createButtonPresetObject(ButtonLocations[0], ButtonLocations[1], ButtonLocations[2], ButtonLocations[3]);
								console.log(result.Preset)
								let locationName = fetchTemplate(result.Preset, 'TopLevel')
									.then((locName) => {
										saveTemplate(ButtonLocationObject, locName.LOCATION, 'ButtonLocation');
									});
								result.Mode = 'Sandbox'
								saveState(result);
								window.location.reload();
							});
						const changeStyle = this.shadowRoot.getElementById('ChangeStyleButton');
							changeStyle.addEventListener('click', (e) => {
								console.log('Change Style Button Clicked');
							})
					});
				}
			return result;});
		});

		ButtonContainer.innerHTML = this.getInnerHTML();
		SHADOW.appendChild(ButtonContainer);
	}

	getInnerHTML() {
			return `
			<style>
				.Wrapper_Button_Panel { display: flex; position: relative}
				.Header_EditBox { color: white; font-size: 20px; font-family: 'LEMON MILK';
								text-align: center;}
				.defaultButton { font-size: 24px; font-family: 'Lemon Milk';
					border-radius: 10%; margin-bottom: 20px;}
				.Button_StyleElements { width: 100px; height: 30px; background-color: #CC59D2;
									font-family: 'nugo sans' font-size: 20px; color: white;}
				.Dashed {border-style: dotted; border-color: red; height: 50px;}
				.hideMe {display: None;}
				.wrapper { border: 1px solid white; width: 100%;}
				.Right {float: right; background-color: #9046CF; width: 33% !important; overflow: hidden;
				}
				.RightForceSize {min-width: 400px; min-height: 1px;}
				.Left {float: left; width: 33% !important; min-width: 400px;}

				.presetDisplayText {color: white; font-family: 'LEMON MILK'; text-align: center; }
				.Input_Label {color: white; font-family: 'nugo sans'}
				select { display: block;}

				.jellyfishDefaultLabel { font-size: 20px; color: white; font-family: 'nugo sans';}

				.Buttons_Edit { width: 100px; height: 50px;
								color: white; font-family: 'LEMON MILK'; font-size: 18px;
								background-color: black;
								justify-content: center; display: flex; align-items: center; margin-left: 100px; float: left;
								border-style: solid; border-width: 1px; border-color: white; border-radius: 10%;}
				.Buttons_Edit:hover { background-color: red;}

				.Header_Small_Helpful { font-style: italic; font-family: 'Monofur NF'; font-size: 20px;
										padding-top: 0px; display: inline-block;}
				.Header_DisplayLabels { color: white; font-size: 12px; font-family: 'LEMON MILK';
								text-align: center;}

				.jellyfishDefaultInputBox { box-sizing: border-box; padding: 5px; margin: 8px 0;
											background-color: black;
											color: white;
											border: 2px solid red; border-radius: 4px;}
				.jellyfishDefaultInputBox:focus {background-color: lightblue;}

				.jellyfishSelect {   width: 100%; 
									border: 1px solid black; border-radius: 5%;
									padding: 0.25em 0.5em; line-height: 1.1; position: relative;
									font-size: 1.25rem; font-family: 'Lemon Milk';
									cursor: pointer; appearance: none; outline: none;
									background-color: #fff; grid-area: select;}
				#Wrapper_Select {  display: grid; align-items: center;	grid-template-areas: "select";}
				#Wrapper_Select::after { width: 0.8em; height: 0.5em;
								background-color: black; justify-self: end;	
								content: ""; align-items: center; display: grid;
								grid-template-areas: "select"; grid-area: select;
								clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);}
				.container { position: relative;}
				
				select:focus { border-style: solid; border-width: 2px; border-color: red;}
				
				img { display: block; 
					margin-left: auto; margin-right: auto;
					width: 50%; width: 100px; height: 100px;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}}
				.headerTextTemp{ color: white;}
				#CentreBox { float: left; width: 33% !important; min-width: 400px;}
				</style>

				<div class = "wrapper">
					<div id = "LeftBox" class = "Left"></div>
					<div id = "CentreBox"></div>
					<div id = "RightBox" class = "Right hideMe"></div>
					<div id = "RightBoxDefault" class = "Input_New_Box_New_Presetight RightForceSize"></div>
					<div id = "RightBoxPreset" class = "Right hideMe"></div>

				</div>
			`
		}
}


window.customElements.define('jellyfish-buttons', JellyfishButtonPanel);
export { JellyfishButtonPanel }