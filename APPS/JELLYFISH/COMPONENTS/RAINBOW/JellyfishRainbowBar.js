import { Tracker } from "../TRACKER/Controller Tracker.js";

class JellyfishRainbow extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

        const SHADOW = this.attachShadow({mode: 'open'});
		const rainbowWrapper = document.createElement('div');
            rainbowWrapper.classList.add("container");
            rainbowWrapper.classList.add("xx");

            customElements.whenDefined('jellyfish-rainbow').then(() => {

                    const tracker = new Tracker('Title', this.shadowRoot);
                    tracker.loadTracker().then((result) => {return result});

                    const button = this.shadowRoot.getElementById('PlusButton');
                    button.addEventListener('click', (event) => {
                        tracker.AddColumn();
                    })
            })

            
            rainbowWrapper.innerHTML = this.getStyle();
            SHADOW.appendChild(rainbowWrapper);
    }

    getStyle() {
        return `

        <style>

        @import "../../APPS/JELLYFISH/COMPONENTS/TRACKER/TrackerStyle.css";
        @import "../../APPS/JELLYFISH/COMPONENTS/RAINBOW/RainbowTitleStyle.css";

        </style>

        <div id = "buttoncell" part = "Buttons" class = "buttonCell"></div>
        <div id = "catcell" part = "Category" class = "catCell"></div>
        <div id = "ColumnContainer" class = "WRAPPER_Bar"></div>
        <button id="PlusButton"> + </button>
        `
    }
}
window.customElements.define('jellyfish-rainbow', JellyfishRainbow);


export {JellyfishRainbow}