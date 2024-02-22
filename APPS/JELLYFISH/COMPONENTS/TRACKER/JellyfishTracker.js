import { Tracker } from "./Controller Tracker.js";
import { jelly } from "../../SETTINGS/Jellyfish.js";
import { create } from "../../CONSOLE/create.js";

import { JellyfishSideBar } from "../SIDEMENU/JellyfishSideMenu.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       ACTIVITY TRACKER             //
// ================================= //

class JellyfishTracker extends HTMLElement {

	constructor() {
		super ();
		this.mushroom = new jelly();
	};

	connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'})
		const trackerBody = document.createElement('div');
            trackerBody.classList.add('layout')

		customElements.whenDefined('jellyfish-tracker').then(() => {
            const tracker = new Tracker('Table', this.shadowRoot);
            tracker.loadTracker().then((result) => {return result});
		});
		trackerBody.innerHTML = this.#getStyle();
		SHADOW.appendChild(trackerBody);
	};

	/**
	 * ADD STYLE TO COMPONENT
	 * @returns CSS TEMPLATE
	 */
	#getStyle() {

		return `
		<style>
        @import "../../APPS/JELLYFISH/COMPONENTS/TRACKER/TrackerStyle.css";
        </style>

        <jellyfish-sidemenu id = "tt"></jellyfish-sidemenu>
        <jellyfish-buttons></jellyfish-buttons>
        <jellyfish-rainbow></jellyfish-rainbow>
        <div id="ColumnnContainer" class = "Container_JellyfishTable"></div>
		`
	}
    chunk(val) {

        const wrapper = new create({
            tag: 'div'
        }).init();

        const titlebar = new create({
            tag: 'jellyfish-titlebar'
        }).init();

        wrapper.append(...[
            titlebar
        ]);
        for (let index = 0; index < val; index++) {        
            let crumbBar = new create({
                tag: 'jellyfish-crumbbar'
                }).init();
            wrapper.appendChild(crumbBar);
        }
        return wrapper;
    }

    exists() {
        return this.shadowRoot.querySelector('jellyfish-sidemenu');
    }
}

window.customElements.define('jellyfish-tracker', JellyfishTracker);

export { JellyfishTracker };