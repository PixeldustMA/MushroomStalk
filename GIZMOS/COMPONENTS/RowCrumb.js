import { popUpConnector } from "./ComponentConnector.js";
import { Panic } from "./Panic.js";

class GoblinTableCrumb extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		// ====  STRUCTURE ==== //
		const SHADOW = this.attachShadow({mode: 'open'});
		const CrumbContainer = document.createElement('div');
			CrumbContainer.classList.add("CrumbComponentBody")

		// ==== GATHER ATTRIBUTES ==== //
			const idName = this.getAttribute("CrumbCat");
			const fragmentName = this.getAttribute("FragmentCat");
			const pieceName = this.getAttribute("PieceCat");
			const arcName = this.getAttribute("ArcCat");
			const crumbNumber = this.getAttribute('num');
			const arcNumber = this.getAttribute('arcNum');
			const colourScheme = parseInt(this.getAttribute("ColourScheme"));
			const fragNum = this.getAttribute('frag');
			const fragmentSub = this.getAttribute('fragmentSub');
			const pieceSub = this.getAttribute('pieceSub');
			const sphinxSub = this.getAttribute('sphinxSub');
			const arcSub = this.getAttribute('arcSub');

		// === DEFINE BEHAVIOUR === //
		customElements.whenDefined('goblin-crumb').then(() => {

			this.shadowRoot.querySelector("slot[name=Title]").innerHTML = idName.toUpperCase();
			this.setHeader(arcName, pieceName, fragmentName, idName, arcNumber);	

			const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Crumb");
			panicBase.DrawPanic().then(() => {})
			this.getGrapes(panicBase)
				.then((result) => {
					try {

						// === VARIABLES == // 
						const fullTitle = arcName + pieceName + fragmentName + idName;
						let crumbBlox = result[arcNumber].Fragment[fragNum].Crumbs[crumbNumber];




						// === HEADER === //

						let Xeader = this.shadowRoot.getElementById(`${arcNumber}${fullTitle}CrumbHeader`);
						this.setAttribute("CrumbCat", `${crumbBlox}`);
						this.setHeaderAttributes(this, Xeader, crumbBlox, fullTitle, arcNumber);
						Xeader.innerHTML = this.getAttribute('CrumbCat');
						Xeader.classList.add(`${fragmentSub}Sub`, `${pieceSub}Sub`, `${sphinxSub}Sub`, `${arcSub}Sub`);

						// === CONNECTOR === //
						popUpConnector(this.shadowRoot, `${arcNumber}${fullTitle}`, 'Crumb', SHADOW, true)

						// === OBSERVER === //
						let elementRoot = this.shadowRoot
						let elementToObserve = this.shadowRoot.getElementById(`${arcNumber}${fullTitle}CrumbHeader`);
						let observer = new MutationObserver((mutationList, observer) => {
							panicBase.getGrapefruitObject()
								.then((result) => {
									let originalCrumb = crumbBlox;
									crumbBlox = elementToObserve.innerHTML;

									let crumbArray = result[arcNumber].Fragment[fragNum].Crumbs
									for (let index = 0; index < crumbArray.length; index++) {
										if (crumbArray[index] === originalCrumb) {
											crumbArray[index] = crumbBlox;
											console.log(crumbBlox);
										}
									}
									panicBase.saveObject(result)
										.then((result) => {
											return result;});									
									return result});
								let block = elementRoot.getElementById('createAPopBox');
								block.remove();
							})
							observer.observe(elementToObserve, {
								characterData: false, 
								childList: true, 
								attributes: false
							});
						return result;}
					catch (err) {}
			});
			setTimeout( () => {
				let classArray = this.shadowRoot.querySelectorAll(".CrumbCell")
				let num = 1
				classArray.forEach(element => {
					if (element.id !== 'Buttons' && element.classList.contains('CrumbCellCat') === false){
					element.id = `${num}crumb${fragmentSub}${pieceSub}${sphinxSub}${arcSub}`
					}
					num += 1;
				});
				console.log("Loaded")
			}, 4000);
		});

		const colour = [ "crumbColour", "crumbColourAlt"];
		CrumbContainer.innerHTML = `

			<style>
			.CrumbComponentBody { font-size: 0; display: flex; flex-wrap: nowrap; 
				min-width: 2000px; }
			.CrumbComponentBody:hover { background-color: blue; }
			.CrumbCell { height: 30px; width:130px;
						text-align: center;  display:inline-block;
						border-style: solid; vertical-align:top;
						border-color: white;
			}
			.activeRed  { background-color: var(--goblinRed); }
			.activeOrange { background-color: var(--goblinOrange); }
			.activeYellow { background-color: var(--goblinYellow); }
			.activeGreen { background-color: var(--goblinGreen); }
			.activeBlue { background-color: var(--goblinBlue); }
			.activeIndigo {	background-color: var(--goblinIndigo); }
			.activeViolet { background-color: var(--goblinViolet); }
			.activeRaspberry { background-color: var(--goblinPink); }
			.CrumbCellCat { width: 230px !important;
							color: white; font-family: "LEMON MILK";
							font-size: 28px;}
			a { font-family: "Lemon Milk"; font-size: 20px;
				background-color: aqua; line-height: 30px;
				display: inline-block; width: 40px;
				height: 30px; margin: 0;
				padding: 0;}
			.task:hover { width: 45px; height: 35px; background-color: purple;}
			.information:hover { width: 45px; height: 35px; background-color: purple;}
			.crumbColour { background-color: var(--tabLearnLanguageDark);}
			.crumbColourAlt { background-color: var(--tabLearnLanguageLight);}
			.CrumbCell:hover { background-color: white;}
			</style>
			
			<div id = "Buttons" class = "CrumbCell">
			<a class = "task"> T </a>
			<a class = "information"> I </a>
			</div>
			<div id = "Category" class = "CrumbCell CrumbCellCat" part = "CrumbCategory">
				<slot name = "Title"></slot>
			</div>
			<div id = "ColumnContainer"></div>
			<button id='AddTitle'> Hi </button>
			`;
			SHADOW.appendChild(CrumbContainer);
		};
	async getGrapes(panic) {
		const newTitle = await panic.getGrapefruitObject()
			.then((result) => {
				return result;});
		return newTitle
	}
	setHeader(arc, piece, fragment, crumb, num) {
		let Header = this.shadowRoot.getElementById('Category');
		Header.setAttribute("id", `${num}${arc}${piece}${fragment}${crumb}CrumbHeader`);
			// Header.classList.add(`${arc}Sub`);
			// Header.classList.add(`${piece}Sub`);
			// Header.classList.add(`${fragment}Sub`);
			
		return Header;
	}
	setHeaderAttributes(mainObject, Header, crumbBlox, fullTitle, num) {
		mainObject.setAttribute("ArcCat", `${crumbBlox}`);
		Header.setAttribute("id", `${num}${fullTitle}CrumbHeader`);
	}
}
window.customElements.define('goblin-crumb', GoblinTableCrumb);


export {GoblinTableCrumb}