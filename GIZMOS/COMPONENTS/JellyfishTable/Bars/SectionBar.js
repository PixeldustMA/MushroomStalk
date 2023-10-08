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
		const barWrapper = document.createElement('div');
		barWrapper.classList.add("barWrapper");
	}
}