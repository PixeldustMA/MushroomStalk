import { popUpConnector } from "./ComponentConnector.js";
import { Panic } from "./Panic.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Dynamic Subtitle (Sphinx)   //
//                Row                //
// ================================= //

class GoblinTableSphinx extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

	// ====  COLOUR THEME ==== //
	const theme = {
		blue: 'Blue',
		pink: 'Pink',
		teal: 'Teal',
		green: 'Green',
		purple: 'Purple',
		orange: 'Orange',
		indigo: 'BlueDark'
	}
	let givenSphinxColour = this.getAttribute("GivenColour");
	let sphinxColour = this.getTheme(theme, givenSphinxColour);

	// ====  STRUCTURE ==== //
	const SHADOW = this.attachShadow({mode: 'open'});
	const SphinxContainer = document.createElement('div');
		SphinxContainer.classList.add("SphinxComponentBody")

	// ==== GATHER ATTRIBUTES ==== //
	let PageStyle = this.getAttribute("PageStyle");
	let SphinxName = this.getAttribute("SphinxCat");
	let ArcName = this.getAttribute("ArcCat");
	let arcNumber = this.getAttribute('num');
	let sphinxIndex = this.getAttribute('index');
	let fullTitle = "ArcNumber" + arcNumber + "_" + "SphinxIndex" + sphinxIndex + "_" + ArcName + SphinxName;

	// === DEFINE BEHAVIOUR === //
	customElements.whenDefined('goblin-sphinx').then(() => {

		// == FOLD BUTTON == //
		let sphinxClickButton = this.shadowRoot.getElementById('foldButtonClicker');
		sphinxClickButton.addEventListener('click', (e) => {
		console.log("Sphinx Fold Button Clicked");
	})

		// == HEADER == // 
		let Header = this.shadowRoot.getElementById('Category');
			Header.setAttribute("id", `${fullTitle}SphinxHeader`);
		
		// == CATEGORY TITLE == //
		this.shadowRoot.querySelector("slot[name=Title]").innerHTML = SphinxName.toUpperCase();

		if(PageStyle === "panic") {
		
			// == SET UP PANIC OBJECT == //
			const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Sphinx");
			panicBase.DrawPanic().then(() => {})
			this.getGrapes(panicBase)
				.then((result) => {

					// == ARC CAT == //
					this.setAttribute("ArcCat", `${result[arcNumber].Sphinx[sphinxIndex]}`);
					const ArcName = this.getAttribute("ArcCat");
					const originalName = ArcName;

					// === HEADER == // 
					Header.setAttribute("id", `${fullTitle}SphinxHeader`);
					Header.innerHTML = ArcName;

					// === CONNECTOR === //
					popUpConnector(this.shadowRoot, `${fullTitle}`, 'Sphinx', SHADOW, false)

					// === OBSERVER === //
					let elementRoot = this.shadowRoot
					let elementToObserve = elementRoot.getElementById(`${fullTitle}SphinxHeader`)
					let observer = new MutationObserver((mutationList, observer) => {
					panicBase.getGrapefruitObject()
						.then((result) => {
							result[num].Sphinx[index] = elementToObserve.innerHTML;	
							this.searchObject(result[num], originalName, result[num].Sphinx[index])
							panicBase.saveObject(result)
								.then((result) => {return result;});									
							return result});
							let block = elementRoot.getElementById('createAPopBox')
							block.remove();;
					});
					observer.observe(elementToObserve, {
							characterData: false, 
							childList: true, 
							attributes: false
					});
					return result;
				})
			}

		});

		if(PageStyle === "panic") {
			SphinxContainer.innerHTML = `
				<style>
					.SphinxComponentBody { font-size: 0; display: flex; flex-wrap: nowrap; 
						min-width: 2000px; }
					.SphinxComponentBody:hover .SphinxCell { height: 60px; color: var(--novaBlue);}
					.SphinxCell { height: 50px; width:130px; display: inline-block;
							vertical-align:top; text-align: justify !important;
							border-color: var(--novaBlue); border-style: solid;}
					.SphinxCellCat { width: 230px !important; border-color: var(--novaBlue) !important;
									font-size: 28px !important; background-color: var(--nova${sphinxColour}); 
									font-family: "Lemon Milk";}

					.bar { background-color: var(--novaBlue);}
					.buttonCell { border-color: var(--nova${sphinxColour}); background-color: var(--nova${sphinxColour})}
					.FoldButton {height: 48px; width: 88px; font-size: 40px;
						font-family: 'LEMON MILK'; background-color: var(--frogLearnLight);
						color: white;}
				</style>

				<div id = "Buttons" class = "SphinxCell buttonCell">
					<button id = "foldButtonClicker" class = "FoldButton">^</button>
				</div>
				<div id = "Category" class = "SphinxCell SphinxCellCat" part = "SphinxCategory">
					<slot name = "Title"></slot>
				</div>
				<div id = "ColumnContainer" ></div>
				<button id='AddTitle'> Hi </button>
				`;
			}
		SHADOW.appendChild(SphinxContainer);
	};
	
	getTheme(themeObject, colour) {

			let themeColour;
			let loops = Object.values(themeObject);
			for (let index = 0; index < loops.length; index++) {
				if (loops[index] === colour) {
					themeColour = loops[index];
				}
			}
			return themeColour;
	}
	async getGrapes(panic) {
		const newTitle = await panic.getGrapefruitObject()
		.then((result) => {
			return result;});
		return newTitle
	}
	searchObject(object, original, alteredSphinx) {
		let piece = object.Pieces;
		let indexes = Object.keys(piece)
		for (let index = 0; index < indexes.length; index++) {
			let num = indexes[index]
			let current = piece[num];
			if (current[1] === original) {
				current[1] = alteredSphinx;
			};
		};
	}
}


window.customElements.define('goblin-sphinx', GoblinTableSphinx);


export { GoblinTableSphinx}