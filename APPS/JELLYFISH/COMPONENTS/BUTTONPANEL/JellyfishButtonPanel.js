import { Buttons } from "../BUTTON/Controller Button.js";

const ButtonInstance = new Buttons();
let ButtonCollection = await ButtonInstance.getButtons() 
const buttonKeyList = Object.keys(ButtonCollection);

class JellyfishButtonPanel extends HTMLElement {

	constructor() {
		super ();
	};

    connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'});
		const panelWrapper = document.createElement('div');
		panelWrapper.classList.add("buttonContainer");
		panelWrapper.id = "testID";

        customElements.whenDefined('jellyfish-buttonpanel').then(() => {
			this.generateButtons(buttonKeyList);
		});

		panelWrapper.innerHTML = this.getStyle();
		SHADOW.appendChild(panelWrapper);
    }

	/**
	 * GET BUTTON PANEL HTML
	 * @returns TEMPLATE
	 */
	getStyle() {
		return `
		<style>
			@import "../../APPS/JELLYFISH/COMPONENTS/BUTTONPANEL/ButtonPanelStyle.css";
		</style>

		<div id = "RowOne"></div>
		<div id = "RowTwo"></div>
		<div id = "RowThree"></div>
		`
	}
	/**
	 * GENERATE THE BUTTONS FOR THE PANEL
	 * @param {Array} ListOfButtons 
	 */
    async generateButtons (ListOfButtons) {

		let one = [];
		let two = [];
		let three = [];

		// TODO HANDLE BUTTON INDEXES

		for (const tab of ListOfButtons) {

			let buttonInstance = new Buttons(ButtonCollection[tab]['PATH'], tab);
			let newButton = await buttonInstance.build();
			let buttonInfo = await buttonInstance.getuserData();
			let buttonKey = tab.toUpperCase();

			if (Object.hasOwnProperty.call(buttonInfo, buttonKey)) {

				switch (buttonInfo[buttonKey].ROW) {
					case 'One':
						one.push(newButton);						
						break;
					case 'Two':
						two.push(newButton);
						break;
					case 'Three':
						three.push(newButton);
						break;				
					default:
						break;
				}
			}
		} 

		let rowOne = this.shadowRoot.getElementById('RowOne');
		let rowTwo = this.shadowRoot.getElementById('RowTwo');
		let rowThree = this.shadowRoot.getElementById('RowThree');


		one.forEach(button => {
			rowOne.append(button)
		});
		two.forEach(button => {
			rowTwo.append(button)
		});
		three.forEach(button => {
			rowThree.append(button)
		})
	}
}

window.customElements.define('jellyfish-buttonpanel', JellyfishButtonPanel);

export { JellyfishButtonPanel }
