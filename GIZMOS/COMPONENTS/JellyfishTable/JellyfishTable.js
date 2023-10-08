import { GoblinRainbow } from "./Bars/RainbowTitle.js";
import { fetchTableTemplate } from "./Functionality/LoadTemplate.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Dynamic Table               //
// ================================= //

class JellyfishTable extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		// == CREATION OF ELEMENTS == //

		const SHADOW = this.attachShadow({mode: 'open'});
		const TableContainer = document.createElement('div');
		
		// == CLASSES AND ATTRIBUTES == //
		this.setAttribute('id', "jellyfishTable");
		this.setAttribute('loadTemplate', 'test');

		TableContainer.classList.add("TableComponentBody");
		let PageStyle = this.getAttribute("PageStyle");
		let pageTemplate = this.getAttribute("loadTemplate");

		customElements.whenDefined('jellyfish-table').then(() => {
			// this.loadTemplate(pageTemplate);
		});
		TableContainer.innerHTML = `
		<style>
			.TableComponentBody { background-color: red; color: white;}
			.Temporary { color: white; font-size: 14px;}
		</style>
		<h2 class = "Temporary"> The TablE Exists </h2>
		`
		SHADOW.appendChild(TableContainer);
	};
	// async loadTemplate(template) {
	// 	console.log('...Loading Template');
	// 	let loadedTemplate = await fetchTemplate(template)
	// 		.then((templateResult) => {
	// 			console.log(templateResult)
	// 			return templateResult;
	// 		});
	// 	return loadedTemplate;
	// }
}
window.customElements.define('jellyfish-table', JellyfishTable);

export { JellyfishTable }