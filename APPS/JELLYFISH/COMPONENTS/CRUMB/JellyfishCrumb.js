class JellyfishCrumbBar extends HTMLElement {

	constructor() {
		super ();
	};

    connectedCallback() {

		const SHADOW = this.attachShadow({mode: 'open'});
		const crumbWrapper = document.createElement('div');
		crumbWrapper.classList.add("container");

        customElements.whenDefined('jellyfish-crumbbar').then(() => {
			
			this.setAttribute('crumbName', this.shadowRoot.getElementById('JELLYFISH_Wrapper-Title-Cat-Cell').innerHTML);
			window.addEventListener('click', (e) => {

				let requestedCell = e.composedPath();

				if (requestedCell[0].classList.contains('clickable')) {
					
					let cell = this.shadowRoot.getElementById(requestedCell[0].id);
					console.log(`The item you have clicked has the following ID: ${cell.id}`);
					if (cell.classList.contains('Selected')) {
						cell.classList.remove('Selected');
					}
					else {
						cell.classList.add('Selected');
					}
				}
				else {
					console.log('You clicked something, hooray! But its not on the clickable list. Sorry about that. Try clicking again');
				}
			})
		});


		crumbWrapper.innerHTML = this.getStyle();
		SHADOW.appendChild(crumbWrapper);
    }

	/**
	 * GET THE STYLE TEMPLATE FOR THE CRUMB
	 * @returns STYLE TEMPLATE
	 */
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
		<div id = "JELLYFISH_Wrapper-Title-Cat-Cell" class = "catCell"></div>
		<div id = "CrumbColumnContainer" class = "WRAPPER_Bar"></div>
		`
	}
}

window.customElements.define('jellyfish-crumbbar', JellyfishCrumbBar);

export { JellyfishCrumbBar }
