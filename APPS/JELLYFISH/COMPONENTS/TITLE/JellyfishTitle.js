
class JellyfishTitleBar extends HTMLElement {

	constructor() {
		super ();
	};

    connectedCallback() {
		const SHADOW = this.attachShadow({mode: 'open'});
		const barWrapper = document.createElement('div');
		barWrapper.classList.add("container");

		customElements.whenDefined('jellyfish-tracker').then(() => {
			this.setAttribute('barName', this.shadowRoot.getElementById('JELLYFISH_Wrapper-Title-Cat-Cell').innerHTML);
		});
		barWrapper.innerHTML = this.getStyle();
		SHADOW.appendChild(barWrapper);
    }

	getStyle() {
		return `
		<style>
        	@import "../../APPS/JELLYFISH/COMPONENTS/TRACKER/TrackerStyle.css";
		</style>

		<div id = "JELLYFISH_Wrapper-Title-Task-Cell" class = "buttonCell">
			<button id = "JELLYFISH_Button-Title-Task">
				TASK
			</button>
		</div>
		<div id = "JELLYFISH_Wrapper-Title-Cat-Cell" class = "catCell">
			<p>HI</p>
		</div>
		<div id = "ColumnnContainer" class = "bar"></div>
		`
	}
}

window.customElements.define('jellyfish-titlebar', JellyfishTitleBar);

export { JellyfishTitleBar }
