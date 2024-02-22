import { JellyfishForm } from "../POPUPFORM/PopUpForm.js";

class JellyfishSideBar extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

        const SHADOW = this.attachShadow({mode: 'open'});
		const sideMenuWrapper = document.createElement('div');
		sideMenuWrapper.classList.add("barWrapper");

        customElements.whenDefined('jellyfish-sidemenu').then(() => {

            window.addEventListener('keypress', (e) => {

                // e.preventDefault();
                let menu = this.shadowRoot.getElementById("mySidenav")

                if (e.key === 'Enter' ) {

                    if (menu.classList.contains('big')) {
                        this.removeMenu(menu);
                    }

                    else {
                        this.loadMenu(menu);
                    }

                }
            }); 

            const x = this.shadowRoot.getElementById('ButtonHideTable');
            x.onclick = hideTable;
            const hideTableButton = this.shadowRoot.getElementById('ButtonAddSegment');
            hideTableButton.onclick = addSegment;
		});

        sideMenuWrapper.innerHTML = `
            <style>
            @import "../../APPS/JELLYFISH/COMPONENTS/SIDEMENU/JellyfishSideMenuStyle.css";
            </style>

            <div id="mySidenav" class="sidenav">
                <button>EDIT TABLE</button>
                <button>EDIT BUTTON PANEL</button>
                <a id = "ButtonAddSegment"> ADD SEGMENT </a>
                <a id = "ButtonHideTable">HIDE TABLE</a>
            </div>
		`

        SHADOW.appendChild(sideMenuWrapper);
    }
    loadMenu(barWrapper) {
        barWrapper.classList.remove('small');
        barWrapper.classList.add('big');
    }
    removeMenu(barWrapper) {
        barWrapper.classList.add('small');
        barWrapper.classList.remove('big');
    }
}

window.customElements.define('jellyfish-sidemenu', JellyfishSideBar);

function hideTable () {
    if (document.body.querySelector('jellyfish-tracker').style.display !== 'none') {

        document.body.querySelector('jellyfish-tracker').style.display = 'none';
        document.body.querySelector('jellyfish-sidemenu')
            .shadowRoot
            .getElementById('ButtonHideTable')
            .innerHTML = "SHOW TABLE";
    }
    else {
        document.body.querySelector('jellyfish-sidemenu')
            .shadowRoot
            .getElementById('ButtonHideTable')
            .innerHTML = "HIDE TABLE";
            document.body.querySelector('jellyfish-tracker').style.display = 'block';
            
    }
}
function addSegment() {
    console.log("ADDING SEGMENT");
    const form = document.createElement('jellyfish-form');
    document.body.appendChild(form);
}
export { JellyfishSideBar }
