import { popUpConnector } from "./ComponentConnector.js";
import { Panic } from "./Panic.js";

class GoblinTablePiece extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		// ====  STRUCTURE ==== //
		const SHADOW = this.attachShadow({mode: 'open'});
		const PieceContainer = document.createElement('div');
		PieceContainer.classList.add("PieceComponentBody");

		// ==== GATHER ATTRIBUTES ==== //
		let idName = this.getAttribute("PieceCat");
		let parentName = this.getAttribute("ArcCat");
		let num = this.getAttribute('num');
		let ArcNum = this.getAttribute('arcNum');
		let fullTitle = ArcNum + num + parentName + idName;

		// === DEFINE BEHAVIOUR === //
		customElements.whenDefined('goblin-piece').then(() => {

			// === HEADER == // 
			let Header = this.shadowRoot.getElementById('Category');
				Header.setAttribute("id", `${fullTitle}PieceHeader`);
				Header.classList.add(`${fullTitle}Fold`);
			this.shadowRoot.querySelector("slot[name=Title]").innerHTML = idName.toUpperCase()

			// CONNECT TO PANIC
			const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Piece");
			panicBase.DrawPanic().then(() => {})
			this.getGrapes(panicBase)
				.then((result) => {

					// == SET UP == //
					let PieceObject = result[ArcNum].Pieces[num]
					let PieceObjectName = PieceObject[0];
					
					// == ARC CAT == //
					this.setAttribute("ArcCat", `${PieceObjectName}`);
					let parentName = this.getAttribute("ArcCat");
					
					// == HEADER == //
					Header.setAttribute("id", `${fullTitle}PieceHeader`);
					Header.innerHTML = parentName
					
					// == CONNECTOR == //
					popUpConnector(this.shadowRoot, `${fullTitle}`, 'Piece', SHADOW, false)
					
					// == OBSERVER == //
					let elementRoot = this.shadowRoot
					let elementToObserve = elementRoot.getElementById(`${fullTitle}PieceHeader`)
					let observer = new MutationObserver((mutationList, observer) => {
					panicBase.getGrapefruitObject()
						.then((result) => {
						let originalarray = PieceObject;
						originalarray[0] = elementToObserve.innerHTML;
						result[ArcNum].Pieces[num] = originalarray;
						this.setFragments(result[num], PieceObjectName, originalarray[0])
						panicBase.saveObject(result)
							.then((result) => {return result;});									
						return result});
					let block = elementRoot.getElementById('createAPopBox')
					block.remove();
				})
				observer.observe(elementToObserve, {
							characterData: false, 
							childList: true, 
							attributes: false
				});
				return result;
			});
		});
		PieceContainer.innerHTML = `
	
			<style>

			.PieceComponentBody { font-size: 0; display: flex; flex-wrap: nowrap; 
				min-width: 2000px;  }
			.PieceComponentBody:hover .PieceCell { height: 60px; color: #F8449F;}
			.PieceCell { height: 50px; width:130px;
					display: inline-block; border-style: solid;
					vertical-align:top; text-align: justify !important;
					border-color: black; border-color: var(--pieceBar)}
			.PieceCellCat { width: 230px !important; border-color: black !important;
							font-size: 28px !important; font-family: "Lemon Milk";}

			.bar { background-color: var(--pieceBar);}
			.buttonCell { border-color: black;}

			</style>

			<div id = "Buttons" class = "PieceCell buttonCell"></div>
			<div id = "Category" class = "PieceCell PieceCellCat" part = "PieceCategory">
				<slot name = "Title"></slot>
			</div>
			<div id = "ColumnContainer" ></div>
			<button id='AddTitle'> Hi </button>
			`;
		SHADOW.appendChild(PieceContainer);
		};
		
	async getGrapes(panic) {
		const newTitle = await panic.getGrapefruitObject()
		.then((result) => {
			return result;});
		return newTitle
	}
	setFragments(grapefruit, piece, alteredPiece) {
		let fragmentarea = grapefruit.Fragment;
		let fragments = Object.keys(fragmentarea);
		for (let index = 0; index < fragments.length; index++) {
			let num = fragments[index];
			if (fragmentarea[num].PieceName === piece) {
				fragmentarea[num].PieceName = alteredPiece;
			}
		}
	}
}
window.customElements.define('goblin-piece', GoblinTablePiece);


export { GoblinTablePiece}