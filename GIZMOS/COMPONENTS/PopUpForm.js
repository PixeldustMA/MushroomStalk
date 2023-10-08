import { getCrumb } from "../SKELETON/Tendons.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       TEXT CHANGE FORM            //
// ================================= //

class GoblinPopUp extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'});
		const ArcContainer = document.createElement('div');
		let EditableDiv = this.getAttribute("AttachedID");
		let CurrentRootTag = this.getAttribute('RootTag');
		let slotStatus = this.getAttribute('slot_status');
		customElements.whenDefined('goblin-pop').then(() => {		
			let submitButton = this.shadowRoot.getElementById('Button_Arc_Submit')
				submitButton.addEventListener('click', (event) => {
					this.getInput(CurrentRootTag, EditableDiv, slotStatus);
				})
		})

		ArcContainer.innerHTML = `

			<style>
				.popUpBox { background-color: black;
							color: white; border-style: solid;
							border-color: white; width: 100px; height: 100px;}
				.popUpTitle { color: white; font-family: "Lemon Milk"
							font-size: 20px;}
				.submitPopUpButton { width: 50px; height: 50px;
									background-color: black; color: white;
									font-family: "centralia"; font-size; 20px;}
			</style>

			<div id = "PopUpForm class = "popUpBox">
				<h1 id = "Header_Pop_Up" class = "popUpTitle">
					Add Title
				</h1> 
				<input id = "Input_New_Title" type="text">
				<button id = "Button_Arc_Submit" class = "submitPopUpButton">
					Submit
				</button>
			</div>

			`;	
		SHADOW.appendChild(ArcContainer);
	}

	getInput(root, parentDivId, slot) {

	let messageBox = this.shadowRoot.getElementById('Input_New_Title');
	let newtitle = messageBox.value;
	console.log(parentDivId)
	let getRoot = getCrumb(root);
	getRoot.some((v) => {
		let ex = v.getElementById(parentDivId);
		if (ex != null) {
			// TODO problem with duplicate names?
			ex.innerHTML = newtitle;
			return true;
		}
	})
}
}

window.customElements.define('goblin-pop', GoblinPopUp);
