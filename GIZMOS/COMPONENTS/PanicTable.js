import { popUpConnector, arcConnector, sphinxConnector, 
		pieceConnector, fragmentConnector,
		crumbConnector } from "./ComponentConnector.js";
import { fetchTemplate } from "./JellyfishTable/Functionality/LoadTemplate.js";
import { Panic } from "./Panic.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Dynamic Table               //
// ================================= //

const Grapefruit = {}
class GoblinPanicTable extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {
		// CREATION OF ELEMENTS
		const SHADOW = this.attachShadow({mode: 'open'});
		const TableContainer = document.createElement('div');
		this.setAttribute('id', "TabTab")
		// CLASSES AND ATTRIBUTES
		TableContainer.classList.add("TableComponentBody")
		// this.setAttribute('PageStyle', 'Panic');
		let PageStyle = this.getAttribute("PageStyle");

		customElements.whenDefined('goblin-arc').then(() => {

		if (PageStyle === 'Panic') {
			const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Table");
			panicBase.DrawPanic().then(() => {})
				this.GrapefruitModule(panicBase, this.shadowRoot, PageStyle);
			}
		if (PageStyle === 'Edit') {
			const panicBase = new Panic(this.shadowRoot, "Grapefruit", "Table");
			panicBase.DrawPanic().then(() => {})
				this.GrapefruitModule(panicBase, this.shadowRoot, PageStyle);
			}
		})
		TableContainer.innerHTML = `
		<style>
		.TableComponentBody { background-color: red; color: white;}
		goblin-arc:hover {
			background-color: white;
		}
		</style>
		`
		SHADOW.appendChild(TableContainer);
	};

	async loadGrapefruits(panic) {
		const grapes = await panic.getGrapefruitObject()
			.then((result) =>{
				return result;
			})
		return grapes;
	}
	async GrapefruitModule(root, shadow, PageStyle) {
		const GrapefruitObejct = await this.loadGrapefruits(root)
			.then((result) => {

				// == STRUCTURE == // 
				let containment = document.createElement('div');
				let BloxKeys = Object.keys(result);

				// == LOOP THROUGH OBJECT == //
				for (let index = 0; index < BloxKeys.length; index++) {

					let key = BloxKeys[index];
					if (key === 'Template') {
						console.log('Ignore me im a template');
					} 
					else {

						// == CREATE ARC == //
						let CurrentBlockDetails = result[key];
						let Arc = CurrentBlockDetails.Arc;
						let thisDiv = document.createElement('div');
						thisDiv.innerHTML = Arc;
						arcConnector(containment, key, PageStyle);

						// == CREATE SPHINX == //
						let SphinxArray = CurrentBlockDetails.Sphinx;						
						SphinxArray.forEach(sphinx => {
							let index = SphinxArray.indexOf(sphinx);
							sphinxConnector(sphinx, containment, key, index, Arc);

								let PieceArray = CurrentBlockDetails.Pieces;
								let PieceKeys = Object.keys(PieceArray)
								PieceKeys.forEach(piece => {
									let sphinxName = CurrentBlockDetails.Pieces[piece][1];
									if(sphinxName === sphinx) {
										pieceConnector(containment, piece, key);

										let fragmentArray = Object.keys(CurrentBlockDetails.Fragment);
										fragmentArray.forEach(fragment => {
											let parentPiece = CurrentBlockDetails.Fragment[fragment].PieceName;
											let index = fragment;
											let comparison = CurrentBlockDetails.Pieces[piece][0]
											if (parentPiece === comparison) {
												fragmentConnector(containment, index, key);

												let fragmentCrumbers = CurrentBlockDetails.Fragment[fragment].Crumbs;
												fragmentCrumbers.forEach(crumb => {
													let index = fragmentCrumbers.indexOf(crumb);
													let CrumbName = CurrentBlockDetails.Fragment[fragment].Crumbs[index];
													let foldSubObject = {
														FragmentSub: CurrentBlockDetails.Fragment[fragment].Name,
														PieceSub: CurrentBlockDetails.Fragment[fragment].PieceName,
														SphinxSub: sphinxName,
														ArcSub: CurrentBlockDetails.Arc
													}
													crumbConnector(containment, index, key, CrumbName, fragment, foldSubObject);
												}); // CRUMB CREATION ENDS
											}
										});// FRAGMENT CREATION ENDS
									}
								});	// PIECE CREATION ENDS
						}); // SPHINX CREATION ENDS
					}
				} // ARC CREATION ENDS
					shadow.append(containment)
			})
	}

}

window.customElements.define('goblin-panic', GoblinPanicTable);

export { GoblinPanicTable }