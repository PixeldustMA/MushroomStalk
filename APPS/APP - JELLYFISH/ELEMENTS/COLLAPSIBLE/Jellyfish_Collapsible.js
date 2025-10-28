import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";

// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                 CREATE                     == //
// ##               COLLAPSIBLE                  ## //
// ==        Draw a Collapsible button           == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class JELLYFISH_Collapsible {

    constructor({
        COLLAPSIBLE_CONFIG_CONTENT = 0,
        COLLAPSIBLE_CONFIG_TITLE = 0
        // COLLAPSIBLE_CONFIG_TAG = 0,
        // COLLAPSIBLE_CONFIG_CHARACTER = 0
    }) {

        this.DATA_CONTENT = COLLAPSIBLE_CONFIG_CONTENT;
        this.DATA_TITLE = COLLAPSIBLE_CONFIG_TITLE;
        // this.DATA_TAG = COLLAPSIBLE_CONFIG_TAG;
        // this.DATA_CHARACTER = COLLAPSIBLE_CONFIG_CHARACTER

        this.BUTTON_COLLAPSIBLE = 'UNSET';
    };

    /**
     * ## DRAW THE ELEMENT
     * 
     * ---------------------
     * 
     * Create a button connected to a collapsible panel
     * 
     * Clicking on the button will show or hide the given content
     * 
     * Element is returned as a div
     * 
     * ---------------------------------
     * ## RETURNS -->> {WRAPPER}
     * @returns {HTMLElement} WRAPPER
     */
    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //
        
        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();
            WRAPPER_Page.id = 'COLLAPSIBLEBUTTON'
        const WRAPPER_Content = new Connector_Jellyfish().INITIALISE_WRAPPER();
            WRAPPER_Content.classList.add('content');
            WRAPPER_Content.id = 'WRAPPER_Collapsible-Content'

        this.BUTTONS.then((RESULT) => {return RESULT});

        // ============= //
        // << ACTIONS >> //
        // ============= //

        setTimeout(() => {
            this.BUTTON_COLLAPSIBLE.addEventListener("click", (e) => {
                this.SHOW_HIDE_CONTENT(this.DATA_TITLE);
            });
        }, 1000);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Content.appendChild(this.DATA_CONTENT);
        WRAPPER_Page.append(...[
            this.BUTTON_COLLAPSIBLE,
            WRAPPER_Content
        ]);
        return WRAPPER_Page;

    }
    /**
     * ## DISPLAY OR HIDE
     * 
     * --------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_CATEGORY_TAG {Name of the button being clicked}
     * 
     * ### DETAILS
     * 
     * If the panel is visible, hide it
     * 
     * If the panel is hidden, display it
     * 
     * ------------------------------
     * ### RETURNS -->> {DISPLAY CHANGE}
     */
    SHOW_HIDE_CONTENT(PARAMETER_CATEGORY_TAG) {
        var BUTTON_COLLAPSIBLE = document.getElementById(`BUTTON_Collapsible-${this.DATA_TITLE}`);
        const WRAPPER_Button = BUTTON_COLLAPSIBLE;
        if (WRAPPER_Button.innerHTML === PARAMETER_CATEGORY_TAG) {
            WRAPPER_Button.classList.toggle('active');
            var DATA_Content = WRAPPER_Button.nextElementSibling;

            if (DATA_Content.style.display === "block") {DATA_Content.style.display = "none";} 
            else {DATA_Content.style.display = "block";}
    };
    }
    async BUTTONS(){

        this.BUTTON_COLLAPSIBLE = new create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: `BUTTON_Collapsible-${this.title}`,
            CREATE_CONFIG_PERSONALITY_CLASSES: ['collapsible'],
        }).init();
        this.BUTTON_COLLAPSIBLE.innerHTML = this.DATA_TITLE;
    }

}