import { Panic } from "../Utility/Panic.js";


// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Dynamic Title Bar           //
// ================================= //


class GoblinRainbow extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'});
		const Container = document.createElement('div');
			Container.classList.add("rainbowComponentBody");
			let plus = document.getElementsByClassName('ColumnContainer');
		let titleStyle = this.getAttribute("TitleStyle");
		this.id = "TableTitleBar"

		customElements.whenDefined('goblin-rainbow').then(() => {
			if(titleStyle === "sandbox") {
				setTimeout(() => {
					
				}, 2000);
				const panic = new Panic(this.shadowRoot, "Columns", "Title")
				panic.DrawTitleBar().then(() => {console.log("Panic Drawn");});
				let result = panic.readObject()
					.then((result) => {
						setTimeout( () => {
							console.log("Title bar Loaded...")
							let table = document.querySelector('goblin-rainbow');
							let rainbowShadowRoot = table.shadowRoot;
							let cells = rainbowShadowRoot.querySelectorAll('.TitleRow');
							cellLoop: for (let index = 0; index < cells.length; index++) {
								let getid = cells[index].id;
								
								if(getid !== 'buttoncell' && getid !== 'catcell') {
									let elementToObserve = rainbowShadowRoot.getElementById(getid);
									let holdData = elementToObserve.innerHTML;
								
									elementToObserve.addEventListener('keydown', (e) => {
										if (e.key === 'Enter') {
											let value = Object.keys(result);
											EditingLoop: for (let index = 0; index < value.length; index++) {
												let testingCell = result[value[index]];
												if (testingCell[1] === holdData){
													let fullCellTitle = elementToObserve.innerHTML;
													let splitTitle = fullCellTitle.split(',');
													console.log(splitTitle);
													let newarray = splitTitle
													result[value[index]] = newarray;
													panic.saveObject(result).then((test) => {return test})
												}
											}
										}
									})
								}
							}
						}, 2000);
						return result;
					})
				Container.innerHTML = `

				<style>
					@import "../../GIZMOS/COMPONENTS/JellyfishTable/Bars/RainbowTitleStyle.css";
				</style>

				<div id = "buttoncell" part = "Buttons" class="TitleRow x">
					<p> BUTTONS </p>
				</div>
				<div id = "catcell" part = "Category" class="TitleRow TitleCat">
					<p> CATEGORY </p>
				</div>
				<div id = "ColumnContainer"></div>
				<button id="PlusButton"> + </button>
				`
			}
			if (titleStyle === 'panic') {
				Container.innerHTML = `

		<style>
			@import "../../GIZMOS/COMPONENTS/JellyfishTable/Bars/RainbowTitleStyle.css";
		</style>

		<div id = "buttoncell" part = "Buttons" class="TitleRow x">
			<p> BUTTONS </p>
		</div>
		<div id = "catcell" part = "Category" class="TitleRow TitleCat">
			<p> CATEGORY </p>
		</div>
		<div id = "ColumnContainer"></div>
		<button id="PlusButton"> + </button>
				`
			}
		
	SHADOW.appendChild(Container);
		})
	}
}

window.customElements.define('goblin-rainbow', GoblinRainbow);


export {GoblinRainbow}