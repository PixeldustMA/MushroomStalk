import { arcConnector, popUpConnector } from "./ComponentConnector.js";
import { Panic } from "./Panic.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Dynamic Header (Arc) Row    //
// ================================= //

class GoblinTableArc extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {
		// ====  COLOUR THEME ==== //
			// TODO - Add Colour Scheme

		// ====  STRUCTURE ==== //
		const SHADOW = this.attachShadow({mode: 'open'});
			this.id = "Attach";	
		const ArcContainer = document.createElement('div');
			ArcContainer.classList.add("ArcComponentBody");

		// ==== GATHER ATTRIBUTES ==== //
		let PageStyle = this.getAttribute("PageStyle");
		let arcNumber = this.getAttribute('num');

		// === DEFINE BEHAVIOUR === //
		customElements.whenDefined('goblin-arc').then(() => {

			// == FOLD BUTTON == //
			// let arcClickButton = this.shadowRoot.getElementById('effectButton');
			// arcClickButton.addEventListener('click', (e) => {
			// 	console.log("Arc Effect Button Clicked");
			// })

			if(PageStyle === "Panic") {

				// == SET UP PANIC OBJECT == //
				const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Arc");
				panicBase.DrawPanic().then(() => {})

				this.getGrapes(panicBase)
					.then((result) => {

						// == ATTRIBUTES == //
						this.setAttribute("ArcCat", `${result[arcNumber].Arc}`);
						let ArcName = this.getAttribute("ArcCat");
						let fullTitle = "ArcNumber" + arcNumber + "_" + ArcName;

						// == CATEGORY TITLE == // 
						this.shadowRoot.querySelector('slot[name=Title').innerHTML = ArcName.toUpperCase(); 

						// === HEADER == // 
						let Header = this.shadowRoot.getElementById('Category');
							Header.setAttribute("id", `${fullTitle}ArcHeader`);

						// === CONNECTOR === //
						popUpConnector(this.shadowRoot, fullTitle, 'Arc', SHADOW, false)

						// === OBSERVER === //
						let elementRoot = this.shadowRoot
						let elementToObserve = elementRoot.getElementById(`${fullTitle}ArcHeader`)
						let observer = new MutationObserver((mutationList, observer) => {
							let elementToObserve = elementRoot.getElementById(`${ArcName}ArcHeader`);
							panicBase.getGrapefruitObject()
								.then((result) => {
									result[arcNumber].Arc = elementToObserve.innerHTML;	
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
			};
			if (PageStyle === "Edit") {

				// == SET UP PANIC OBJECT == //
				const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Arc");
				panicBase.DrawPanic().then(() => {})
				this.getGrapes(panicBase)
				.then((result) => {

					// == ATTRIBUTES == //
					this.setAttribute("ArcCat", `${result[arcNumber].Arc}`);
					let ArcName = this.getAttribute("ArcCat");
					let fullTitle = "ArcNumber" + arcNumber + "_" + ArcName;

					// == CATEGORY TITLE == // 
					this.shadowRoot.querySelector('slot[name=Title').innerHTML = ArcName.toUpperCase(); 

					// === HEADER == // 
					let Header = this.shadowRoot.getElementById('Category');
						Header.setAttribute("id", `${fullTitle}ArcHeader`);

					// === CONNECTOR === //
					popUpConnector(this.shadowRoot, fullTitle, 'Arc', SHADOW, false)

					// === OBSERVER === //
					let elementRoot = this.shadowRoot
					let elementToObserve = elementRoot.getElementById(`${fullTitle}ArcHeader`)
					let observer = new MutationObserver((mutationList, observer) => {
						let elementToObserve = elementRoot.getElementById(`${ArcName}ArcHeader`);
						panicBase.getGrapefruitObject()
							.then((result) => {
								result[arcNumber].Arc = elementToObserve.innerHTML;	
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
			}
			// if (PageStyle === "Daily") {

			// }
			// if (PageStyle === "Weekly") {

			// }
		});

		if(PageStyle === "Panic") {
			ArcContainer.innerHTML = `

			<style>

				.ArcComponentBody {font-size: 0; display: flex; flex-wrap: nowrap; 
									min-width: 2000px;}
				.ArcComponentBody:hover .ArcCell { height: 60px; color: #F8449F;}
				.ArcCell {  height: 50px; width:130px;
							display: inline-block;
							vertical-align:top; text-align: center;
							border-style: solid; border-color: white;}

				.ArcCellCat{ background-color: var(--frogLearn) !important; width: 230px !important; 
							color: white; font-family: "LEMON MILK";
							font-size: 36px; text-align: center;}

				.bar { background-color: var(--frogLearnLight); border-left-color: var(--frogLearnLight);
						border-right-color: var(--frogLearnLight); }

				.firstcell { border-left-color: white;}
				.FoldButton {height: 48px; width: 88px; font-size: 40px;
							font-family: 'LEMON MILK'; background-color: var(--frogLearnLight);
							color: white;}
			</style>

			<div id = "Buttons" class = "ArcCell">
				<button id = "effectButton" class = "FoldButton">^</button>
			</div>
			<div id = "Category" class = " ArcCell ArcCellCat" part ="ArcCategory">
				<slot name = "Title"></slot>
			</div>
			<div id = "ColumnContainer"> </div>
			<button id='AddTitle'> CHANGE TITLE </button>
			`;				
		}
		if(PageStyle === "Edit") {
			ArcContainer.innerHTML = `

			<style>

				.ArcComponentBody {font-size: 0; display: flex; flex-wrap: nowrap; 
									min-width: 2000px;}
				.ArcComponentBody:hover .ArcCell { height: 60px; color: #F8449F;}
				.ArcCell {  height: 50px; width:130px;
							display: inline-block;
							vertical-align:top; text-align: center;
							border-style: solid; border-color: white;}

				.ArcCellCat{ background-color: var(--frogLearn) !important; width: 230px !important; 
							color: white; font-family: "LEMON MILK";
							font-size: 36px; text-align: center;}

				.bar { background-color: var(--frogLearnLight); border-left-color: var(--frogLearnLight);
						border-right-color: var(--frogLearnLight); }

				.firstcell { border-left-color: white;}
				.AddNew {height: 48px; width: 88px; font-size: 20px;
							font-family: 'LEMON MILK'; background-color: var(--frogLearnLight);
							color: white;}
			</style>

			<div id = "Buttons" class = "ArcCell">
				<button id = "effectButton" class = "AddNew">ADD NEW</button>
			</div>
			<div id = "Category" class = " ArcCell ArcCellCat" part ="ArcCategory">
				<slot name = "Title"></slot>
			</div>
			<div id = "ColumnContainer"> </div>
			<button id='AddTitle'> ADD SUBTITLE </button>
			`;				
		}

		SHADOW.appendChild(ArcContainer);
	};

	async getGrapes(panic) {
		const newTitle = await panic.getGrapefruitObject()
		.then((result) => {
			return result;});
		return newTitle
	}
}

window.customElements.define('goblin-arc', GoblinTableArc);

export { GoblinTableArc }