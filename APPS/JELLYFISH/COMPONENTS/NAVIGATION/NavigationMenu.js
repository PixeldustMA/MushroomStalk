import { jelly } from "../../SETTINGS/Jellyfish.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       NAVIGATION MENU             //
// ================================= //

class JellyfishNavigation extends HTMLElement {

	constructor() {
		super ();
		this.mushroom = new jelly();
	};

	connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'})
		const navBody = document.createElement('div');
			navBody.classList.add('JELLYFISH_NAV-OuterWrapper');
		// this.appendChild(navBody);

		customElements.whenDefined('jellyfish-navigation').then(() => {

			navBody.append(this.#addHeaderButtons(this.NAVIGATION));
			let scurry = this.shadowRoot.getElementById('ANCHOR_Scurry-Box');
			scurry.classList.add('JELLYFISH_NAV-scurry')
			this.#createListeners();

		});
		navBody.innerHTML = this.#getStyle();
		SHADOW.appendChild(navBody);
	};

	/**
	 * ADD STYLE TO COMPONENT
	 * @returns CSS TEMPLATE
	 */
	#getStyle() {

		return `
		<style>
			@import "../../APPS/JELLYFISH/COMPONENTS/NAVIGATION/NavigationStyle.css";	
		</style>
		`
	}
	/**
	 * CREATE THE EVENT LISTENERS FOR BUTTONS
	 */
	#createListeners() {
		const scurry = this.shadowRoot.getElementById('ANCHOR_Scurry-Box');
		scurry.addEventListener("click", (event) => {
			event.preventDefault();
			this.mushroom.load("START");
		});
		let buttonArray = ['Pickle', 'Mumblies', 'TvTracker', 'PixelPage', 
							'Sketch', 'Archive', 'Balloons', 'Squirrel',
							'Explorer', 'Fireflies', 'Bundler', 'Fridge']
		buttonArray.forEach(button => {
			this.#createLink(button);
		});
	}
	/**
	 * ATTACH ROUTES TO NAV BUTTONS
	 * @param {String} buttonName 
	 */
	#createLink(buttonName){
		this.shadowRoot.getElementById(`ANCHOR_${buttonName}`).addEventListener('click', (e) => {
			e.preventDefault();
			this.mushroom.load(buttonName.toUpperCase())})
	} 
	/**
	 * CREATE HEADER BUTTONS
	 * @param {Object} buttonList 
	 * @returns {HTMLElement} CONTAINER
	 */
	#addHeaderButtons(buttonList) {

		const container = document.createElement('div');
		container.classList.add('JELLYFISH_NAV-OuterWrapper')
		const topTitles = Object.keys(buttonList);

		topTitles.forEach((tab) => {

			let newContainer = document.createElement('ul');
				newContainer.classList.add('JELLYFISH_NAV-Outer-List');
				newContainer.id = `UL_Container_${tab}`;

			let listBlock = document.createElement('li');
				listBlock.classList.add('JELLYFISH_NAV-Outer-List');
				listBlock.id = `LIST_${tab}`;

			let textBlock = document.createElement('a');
				textBlock.id = `ANCHOR_${tab}-Box`;
				textBlock.innerHTML = tab.toUpperCase();

			if (buttonList[tab] !== "EMPTY") {
				
				let dropDownBox = document.createElement('div');
				dropDownBox.classList.add('JELLYFISH_NAV-dropdown');
				dropDownBox.appendChild(this.#addDropDownMenus(buttonList[tab]));
				dropDownBox.appendChild(textBlock);
				listBlock.appendChild(dropDownBox);
			}
			else {
				listBlock.appendChild(textBlock);				
			}
			newContainer.appendChild(listBlock);
			container.appendChild(newContainer);

		});
		return container;

	}
	/**
	 * ADD DROPDOWNS TO ELEMENT
	 * @param {Array} buttonList 
	 * @returns {HTMLElement} CONTAINER
	 */
	#addDropDownMenus(buttonList) {
		const container = document.createElement('div');
			container.classList.add('JELLYFISH_NAV-dropdownContent')

		buttonList.forEach(button => {
			let newDiv = document.createElement('div');
			newDiv.classList.add('JELLYFISH_NAV-verticalButtons');			
			
			let textBlock = document.createElement('a');
			textBlock.id = `ANCHOR_${button}`;
			textBlock.innerHTML = button.toUpperCase();

			newDiv.appendChild(textBlock);
			container.appendChild(newDiv);
		});

		return container;
	};
}

window.customElements.define('jellyfish-navigation', JellyfishNavigation);

export { JellyfishNavigation };