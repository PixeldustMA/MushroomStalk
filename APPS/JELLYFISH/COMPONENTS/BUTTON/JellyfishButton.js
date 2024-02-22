class JellyfishButton extends HTMLElement {

	constructor() {
		super ();
	};

    connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'});
		const buttonWrapper = document.createElement('button');
		buttonWrapper.classList.add("JellyfishButton");

        customElements.whenDefined('jellyfish-button').then(() => {
			this.shadowRoot.getElementById('textTag').innerHTML = this.id
		});

		buttonWrapper.innerHTML = this.getStyle();
		SHADOW.appendChild(buttonWrapper);
    }

    getStyle() {
		return `
		<style>
			@import "../../APPS/JELLYFISH/COMPONENTS/BUTTONPANEL/ButtonPanelStyle.css";
		</style>

		<a id = "textTag">"H"</a>
		`
	}
}

window.customElements.define('jellyfish-button', JellyfishButton);

export { JellyfishButton }
