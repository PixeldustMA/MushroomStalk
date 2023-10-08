import { popUpConnector } from "./ComponentConnector.js";
import { Panic } from "./Panic.js";

class GoblinTableFragment extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		// ====  STRUCTURE ==== //
		const SHADOW = this.attachShadow({mode: 'open'});
		const FragmentContainer = document.createElement('div');
			FragmentContainer.classList.add("FragmentComponentBody");

		// ==== GATHER ATTRIBUTES ==== //
			let title = this.getAttribute("Title");
			let idName = this.getAttribute("FragmentCat");
			let pieceName = this.getAttribute("PieceCat");
			let arcName = this.getAttribute("ArcCat");
			let colourScheme = parseInt(this.getAttribute("ColourScheme"));
			let num = this.getAttribute('num');
			let arcNum = this.getAttribute('arcNum');
			let fullTitle =  arcNum + num + arcName + pieceName + idName;

		// === DEFINE BEHAVIOUR === //
		customElements.whenDefined('goblin-fragment').then(() => {

			// === HEADER == // 
			this.shadowRoot.querySelector("slot[name=Title]").innerHTML = title.toUpperCase();
			let Header = this.shadowRoot.getElementById('Category');
				Header.setAttribute("id", `${fullTitle}FragmentHeader`);
				Header.classList.add(`${fullTitle}Fold`);
				Header.classList.add(`${arcName}Sub`);
				Header.classList.add(`${pieceName}Sub`);

			// CONNECT TO PANIC
			const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Fragment");
			panicBase.DrawPanic().then(() => {})
			this.getGrapes(panicBase)
				.then((result) => {

					// === SET UP == // 
					this.setAttribute("ArcCat", `${result[arcNum].Fragment[num].Name}`);
					let parentName = this.getAttribute("ArcCat");
					
					// === HEADER === //
					Header.setAttribute("id", `${fullTitle}FragmentHeader`);
						Header.innerHTML = parentName
					
					// === CONNECTOR === //
					popUpConnector(this.shadowRoot, `${fullTitle}`, 'Fragment', SHADOW, true)

					// === OBSERVER === //
					let elementRoot = this.shadowRoot
					let elementToObserve = elementRoot.getElementById(`${fullTitle}FragmentHeader`);
					let observer = new MutationObserver((mutationList, observer) => {
						panicBase.getGrapefruitObject()
							.then((result) => {
								result[arcNum].Fragment[num].Name = elementToObserve.innerHTML;	
								panicBase.saveObject(result)
									.then((result) => {return result;});									
								return result});
							let block = elementRoot.getElementById('createAPopBox')
							block.remove();;
						})
					observer.observe(elementToObserve, {
						characterData: false, 
						childList: true, 
						attributes: false
					});
				return result;
			});
		});
			const colour = [ "bar", "barAlt", "bar", "barAlt" ];
			FragmentContainer.innerHTML = `

			<style>

			.FragmentComponentBody { font-size: 0; display: flex; flex-wrap: nowrap; 
				min-width: 2000px;  }
			.FragmentCell { height: 30px; width:130px;
							display: inline-block; border-style: solid;
							vertical-align:top; text-align: center;
							border-color: white;}
			.FragmentCellCat { width: 230px !important;	font-size: 28px !important; 
								font-family: "Lemon Milk";}
			.bar { background-color: var(--fragmentBar);}
			.barAlt { background-color: var(--fragmentAltBar);}
			.test {background-color: red;}
			.borderless {border-color: black !important;}
			</style>

			<div id = "Buttons" class = "FragmentCell borderless"></div>
			<div id = "Category" class = "FragmentCell FragmentCellCat" part = "FragmentCategory">
				<slot name = "Title"></slot>
			</div>
			<div id = "ColumnContainer"></div>
			<button id='AddTitle'> Hi </button>
			`;
			SHADOW.appendChild(FragmentContainer);
		};
		async getGrapes(panic) {
			const newTitle = await panic.getGrapefruitObject()
			.then((result) => {
				return result;});
			return newTitle
		}
	}
window.customElements.define('goblin-fragment', GoblinTableFragment);


export {GoblinTableFragment}