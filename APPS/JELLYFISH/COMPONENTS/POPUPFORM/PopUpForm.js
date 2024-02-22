import { Tracker } from "../TRACKER/Controller Tracker.js";

class JellyfishForm extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

        const SHADOW = this.attachShadow({mode: 'open'});
		const formWrapper = document.createElement('div');
		formWrapper.classList.add("formWrapper");

        customElements.whenDefined('jellyfish-form').then(() => {

            var modall = this.shadowRoot.getElementById('modalWrapper');
            window.onclick = function(event) {
                if (event.composedPath()[0] == modall) {
                    modall.style.display = "none";
            }};
            const inputs = this.shadowRoot.getElementById('parent');
            const nn = this.shadowRoot.getElementById('nnn')
            const tracker = new Tracker();
            const f = this.shadowRoot.getElementById('ff');
            console.log(f)
            f.addEventListener('click', (event) => {
                tracker.addBars(nn.value, inputs.value);
            })

		});

        formWrapper.innerHTML = `
            <style>
            @import "../../APPS/JELLYFISH/COMPONENTS/POPUPFORM/JellyfishFormStyle.css";
            </style>

            <div id="modalWrapper" class="modal">

                <span onclick="this.hideMenu"class="close" title="Close Modal">&times;</span>
                <form class="modal-content animate" id = "ff>

                    <div class="imgcontainer"></div>
                    <div class="container">

                        <label for="locationBox"><b>CHOOSE LOCATION</b></label>
                        <input placeholder="ENTER PARENT BOX TEXT" name="locationBox" id = "parent">

                        <label for="newBoxName"><b>NEW BOX NAME</b></label>
                        <input type="text" placeholder="ENTER NEW TITLE" name="newBoxName" id = "nnn">
                        <button type="submit" id="ff">APPLY</button>

                        <label>
                            <input type="checkbox" checked="checked" name="CrumbOrTitle"> CRUMB?
                        </label>

                    </div>
            </form>
        </div>
		`
        SHADOW.appendChild(formWrapper);
    }

    hideMenu() {
        this.shadowRoot.getElementById('modalWrapper').style.display = 'none';
    }
}

window.customElements.define('jellyfish-form', JellyfishForm);

export { JellyfishForm }
