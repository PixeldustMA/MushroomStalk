import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       NAVIGATION MENU             //
// ================================= //

/**
 * CREATE JELLYFISH NAVIGATION COMPONENT
 */
class JellyfishNavigation extends HTMLElement {

	constructor() {
		super ();
        this.mushroom = new Stalk();
		this.buttons = {}
	};
	async connectedCallback() {

		this.buttons = await this.#READ_BUTTONS()
		const SHADOW = this.attachShadow({mode: 'open'});
		const navBody = new create({
            tag: 'div',
            id: 'WRAPPER_Navigation',
            classes: ['JELLYFISH_NAV-OuterWrapper']
        }).init();

		customElements.whenDefined('jellyfish-navigation').then(() => {
			navBody.append(this.#HEADER_BUTTONS());
			const scurry = this.shadowRoot.getElementById('ANCHOR_SCURRY-Box');
			scurry.classList.add('JELLYFISH_NAV-scurry')
			this.#CREATE_LISTENERS();
		});
		navBody.innerHTML = this.#GET_STYLE();
		SHADOW.appendChild(navBody);
	};

	/**
	 * ADD STYLE TO COMPONENT
	 * @returns CSS TEMPLATE
	 */
	#GET_STYLE() {
		return `
		<style>
		.JELLYFISH_NAV-OuterWrapper { 
    
			list-style-type: none; 
			position: relative; 
			top: 0;
			z-index: 10;
		
			margin: 0; 
			margin-top: 20px; 
			padding: 0;
		
			width: 100%; 
			min-width: 700px;
		
			text-align: center; 
		
			border-bottom-width: 3px;  
		
		}
		.JELLYFISH_NAV-Outer-List { 
			
			display: inline-block; 
			
			margin-top: 3px; 
			margin-bottom: 3px; 
			
			padding-bottom: 10px;
		
			width: 17%; 
		
			font-size: 2rem; 
			font-family: centralia; 
			font-weight: bold;
			color: white; 
		
			& a {
		
				text-decoration: none;
		
				padding: 8px;
			
				width: 20%; 
			
				background-color: pink;
			
				border-radius: 5%; 
				border-style: solid; 
		
				&:hover {
		
					background-color: purple;
		
				}
			}
			& a:hover {
				background-color: purple;
			}
		}
		.JELLYFISH_NAV-dropdown {
		
			position: relative; 
			display: inline-block;
		}
		.JELLYFISH_NAV-dropdown:hover .JELLYFISH_NAV-dropdownContent{
			display: block;
		}
		.JELLYFISH_NAV-dropdownContent {
		
			display: none; 
			position: fixed;
		
			min-width: 160px;
		
			box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		
			padding: 12px 12px;
		
		}
		.JELLYFISH_NAV-scurry {
		
			background-color: red !important;
		}
		.JELLYFISH_NAV-scurry:hover {
			background-color: black !important;
		}
		.JELLYFISH_NAV-verticalButtons {
		
			padding: 0px; 
			margin: 1rem 0 2rem 0;
		
		}
		
		</style>
		`
	};
	/**
	 * CREATE THE EVENT LISTENERS FOR BUTTONS
	 */
	#CREATE_LISTENERS() {
		const scurry = this.shadowRoot.getElementById('ANCHOR_SCURRY-Box');
		scurry.addEventListener("click", (event) => {
			event.preventDefault();
			this.mushroom.load("START");
		});
		let buttonArray = Object.keys(this.buttons);
		buttonArray.forEach(button => {
			if (this.buttons[button].HEADER !== "NONE") {
			this.#CREATE_LINK(button);}
		});
	}
	/**
	 * ATTACH ROUTES TO NAV BUTTONS
	 * @param {String} buttonName 
	 */
	#CREATE_LINK(buttonName){
		this.shadowRoot.getElementById(`ANCHOR_${this.buttons[buttonName]["NAME"].toUpperCase()}`).addEventListener('click', (e) => {
			e.preventDefault();
			this.mushroom.load(buttonName)
		});
	};
	/**
	 * CREATE HEADER BUTTONS
	 * @returns {HTMLElement} CONTAINER
	 */
	#HEADER_BUTTONS() {
		const container = new create({
            tag: 'div',
            id: 'CONTAINER_Navigation-Button-Header',
            classes: ['JELLYFISH_NAV-OuterWrapper']
        }).init();
		let headerButtons = [];
		for (const key in this.buttons) {
			if (Object.hasOwnProperty.call(this.buttons, key)) {
				const element = this.buttons[key];
				if (element.HEADER === "NONE") {
					headerButtons.push(element.NAME);
				};
			}
		};
		headerButtons.forEach((tab) => {
			let buttonList = [];
			let newContainer = new create({
                tag: 'ul',
                id: `UL_Container-${tab}`,
                classes: ['JELLYFISH_NAV-Outer-List']
            }).init();
			let listBlock = new create({
                tag: 'li',
                id: `LIST_${tab}`,
                classes: ['JELLYFISH_NAV-Outer-List']
            }).init();
			let textBlock = new create({
                tag: 'a',
                id: `ANCHOR_${tab}-Box`,
                elementText: tab.toUpperCase()
            }).init();

			for (const buttonKey in this.buttons) {
				if (Object.hasOwnProperty.call(this.buttons, buttonKey)) {
					const element = this.buttons[buttonKey];
					if(element.HEADER === tab) {
						buttonList.push(element.NAME);
					};
				}
			};
			if (buttonList[tab] !== "EMPTY") {				
                const dropDownBox = new create({
                    tag: 'div',
                    id: 'CONTAINER_Navigation-Dropdown',
                    classes: ['JELLYFISH_NAV-dropdown']
                }).init();

				dropDownBox.appendChild(this.#DROP_DOWN_MENUS(buttonList));
				dropDownBox.appendChild(textBlock);
				listBlock.appendChild(dropDownBox);
			}
			else {
				listBlock.appendChild(textBlock);				
			};
			newContainer.appendChild(listBlock);
			container.appendChild(newContainer);
		});
		return container;
	};
	/**
	 * ADD DROPDOWNS TO ELEMENT
	 * @param {Array} buttonList 
	 * @returns {HTMLElement} CONTAINER
	 */
	#DROP_DOWN_MENUS(buttonList) {
		const container = new create({
            tag: 'div',
            id: 'CONTAINER_Navigation-DropDown-Content',
            classes: ['JELLYFISH_NAV-dropdownContent']
        }).init();
		buttonList.forEach(button => {
			let newDiv = new create({
                tag: 'div',
                id: 'CONTAINER_Navigation-Vertical',
                classes: ['JELLYFISH_NAV-verticalButtons']
            }).init();
            let textBlock = new create({
                tag: 'a',
                id: `ANCHOR_${button.toUpperCase()}`,
                elementText: button.toUpperCase()
            }).init();

			newDiv.appendChild(textBlock);
			container.appendChild(newDiv);
		});

		return container;
	};
	/**
	 * RETRIEVE BUTTON LIST
	 * @returns --PROMISE -- BUTTON LIST
	 */
	async #READ_BUTTONS() {
		this.mushroom.path = await this.mushroom.initRoute('BUTTONS', 'MEMORY');
		console.log(this.mushroom.path)
		return await this.mushroom.Read();
	}
}

window.customElements.define('jellyfish-navigation', JellyfishNavigation);

export { JellyfishNavigation };