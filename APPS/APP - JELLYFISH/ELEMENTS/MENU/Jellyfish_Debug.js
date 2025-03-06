import Connector_Beetle from "../../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Branches from "../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../CREATE/Create.js";

// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                 CREATE                     == //
// ##                 DEBUG                      ## //
// ==         Draw a debug for the app           == //
// ==                                            == //
// ================================================ //
// ================================================ //

/**
 * ## DRAW DEBUG MENU
 * 
 * ------------------------
 * 
 * Draw a menu that is activated by a keypress that has buttons to other pages in the app
 * 
 */
class JELLYFISH_DebugMenu extends HTMLElement{

    /**
     * ## DEBUG MENU CONSTRUCTOR
     */
    constructor() {
		super ();

        // =========== //
        // ## DEBUG ## //
        // =========== //

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'CREATE',
            BEETLE_CONFIG_LOCATION: 'JELLYFISH_Debug.js',
            BEETLE_CONFIG_SCRIPT: 'DEBUG_MENU',
            BEETLE_CONFIG_TEXT: 'INITIALISING FUNCTIONALITY FOR JELLYFISH DEBUG MENU'
        });

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_BRANCH = new Branches();

        // =========== //
        // ## PATHS ## //
        // =========== //

        // ============== //
        // ## ELEMENTS ## //
        // ============== //

        this.WRAPPER_ELEMENT = '';
    };

    /**
     * ## FRAME ACTIONS
     * 
     * ------------------------
     * 
     * Activate button functions for the frame element
     */
	connectedCallback() {

        const SHADOW = this.attachShadow({mode: 'open'});
		this.WRAPPER_ELEMENT = document.createElement('div');
        this.WRAPPER_ELEMENT.classList.add('Menu');
        this.WRAPPER_ELEMENT.id = 'WRAPPER_Debug-Box';

        customElements.whenDefined('jellyfish-debugmenu').then(() => {

            // =================== //
            // << LOAD ELEMENTS >> //
            // =================== //

            this.WRAPPER_ELEMENT.innerHTML = this.#FETCH_STYLE();
            SHADOW.appendChild(this.WRAPPER_ELEMENT);

            // ==================== //
            // << MENU FUNCTIONS >> //
            // ==================== //

            window.addEventListener('keydown', (event) => {
                if (event.ctrlKey && event.key === 't') {
                    this.OPEN_MENU();
                };
            });
            this.shadowRoot.getElementById('BUTTON_Close').addEventListener('click', (event) => {
                this.CLOSE_MENU();
            });
            this.BUTTONS();
        });
    };

    /**
     * ## OPEN DEBUG MENU
     * 
     * -------------------
     * 
     * Change style settings to make debug menu visible
     */
    OPEN_MENU() {
        this.shadowRoot.getElementById("mySidebar").style.width = "250px";
    };
    /**
     * ## CLOSE DEBUG MENU
     * 
     * -------------------
     * 
     * Change style settings to make debug menu invisible
     */
    CLOSE_MENU() {
        this.shadowRoot.getElementById("mySidebar").style.width = "0";
    };
    /**
     * ## LOAD CHOSEN PAGE
     * -------------------
     * 
     * @param {string} PARAMETER_POCKET_TAG {NAME OF PAGE}
     * 
     * Load the requested page in the current window, bypassing all other requirements
     */
    LOAD_PAGE(PARAMETER_POCKET_TAG){
        return this.INSTANCE_BRANCH.LOAD(PARAMETER_POCKET_TAG).then((RESULT) => {return RESULT});
    };
    BUTTONS() {
        this.shadowRoot.getElementById('BUTTON_Splash').addEventListener('click', (event) => {
            this.LOAD_PAGE('SPLASH');
        });
        this.shadowRoot.getElementById('BUTTON_Welcome').addEventListener('click', (event) => {
            this.LOAD_PAGE('WELCOME');
        });
        this.shadowRoot.getElementById('BUTTON_Title').addEventListener('click', (event) => {
            this.LOAD_PAGE('TITLE');
        });
        this.shadowRoot.getElementById('BUTTON_Map').addEventListener('click', (event) => {
            this.LOAD_PAGE('MAP');
        });
    }
    /**
     * 
     * -----------------------
     * ## -->> {STYLE TEMPLATE}
     */
    #FETCH_STYLE() {
        return `

        <style>
            .sidebar {
                height: 100%; 
                width: 0; 
                position: fixed;
                z-index: 1; 
                top: 0;
                left: 0;
                background-color: #111;
                overflow-x: hidden; 
                padding-top: 60px; 
                transition: 0.5s; 
            }

            .sidebar a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
            }

            .sidebar a:hover {
                color: #f1f1f1;
            }

            .sidebar .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
            }

            .openbtn {
                font-size: 20px;
                cursor: pointer;
                background-color: #111;
                color: white;
                padding: 10px 15px;
                border: none;
            }

            .openbtn:hover {
                background-color: #444;
            }

            #main {
                transition: margin-left .5s; /* If you want a transition effect */
                padding: 20px;
            }

            @media screen and (max-height: 450px) {
                .sidebar {padding-top: 15px;}
                .sidebar a {font-size: 18px;}
            }

        </style>

        <div id = "WRAPPER_Debug-Box" class = "mainBox">
            <div id="mySidebar" class="sidebar">
                <a id = "BUTTON_Close">x</a>
                <a id = "BUTTON_Splash">SPLASH</a>
                <a id = "BUTTON_Welcome">WELCOME</a>
                <a id = "BUTTON_Title">TITLE</a>
                <a id = "BUTTON_Map">MAP</a>
            </div>
        </div>
        `
    };
};

window.customElements.define('jellyfish-debugmenu', JELLYFISH_DebugMenu);
export {JELLYFISH_DebugMenu};