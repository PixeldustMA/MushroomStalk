import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
// import Connector_Rainbow from "../../../CONSOLE/ARTERIES/Connector_Rainbow.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";


export default class DrawPenPot extends Stalk{

    constructor() {
        super()
        
        // =============== //
        // << DEBUGGING >> //
        // =============== /

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'WELCOME',
            BEETLE_CONFIG_LOCATION: 'DrawTitle.js',
            BEETLE_CONFIG_SCRIPT: 'TITLE',
            BEETLE_CONFIG_TEXT: 'LOADING TITLE PAGE'
        });

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        // this.INSTANCE_M_CHUNK = new Connector_Rainbow()

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_PenPot-Section-Title');
        this.SECTION_PENS = document.getElementById('SECTION_PenPot-Section-Pens');

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_CHANCEAUX = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    /**
     * ## DRAW THE PAGE
     * 
     * -------------------
     * 
     * #### *CLASS MUST BE INITIALISED FIRST*
     * 
     * Run all functions associated with drawing the welcome page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW_PAGE() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING PEN POT PAGE';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();

        this.SECTION_TITLE.append(this.PANEL_Title());
    };
    PANEL_Title() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ============== //
        // << LISTENER >> //
        // ============== //

        this.ACTIVATE_LISTENER_PEN_CHECK(this.BUTTON_CHANCEAUX, 'CHANCEAUX');

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.BUTTON_CHANCEAUX
        ]);
        return WRAPPER_Page;
    };

    ACTIVATE_LISTENER_PEN_CHECK(PARAMETER_BUTTON, PARAMETER_BUTTON_NAME){
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            this.SESSION.CHUNK.PEN = PARAMETER_BUTTON_NAME;
        })
    };

    /**
     * ## INITIALISE THE WIZARD PAGE
     * 
     * -------------------
     * 
     * #### === ASYNC FUNCTION ==
     * Generate all paths for images on welcome page
     * 
     * -------------------------
     * #### --> RETURNS PROMISE {Formatted paths}
     */
    async INITIALISE() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'INITIALISING PENPOT PAGE';
        this.INSTANCE_BEETLE.READ_MODE();

        console.log('CHUNK SESSION');
        await this.REMEMBER();
        console.log(this.SESSION)
        await this.BUTTON();
    };
    async BUTTON(){
        this.BUTTON_CHANCEAUX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Chanceaux'
        }).INIT();
        this.BUTTON_CHANCEAUX.innerHTML = 'CHANCEAUX'
    }
};
const titlePage = new DrawPenPot();
await titlePage.INITIALISE();
titlePage.DRAW_PAGE(); 