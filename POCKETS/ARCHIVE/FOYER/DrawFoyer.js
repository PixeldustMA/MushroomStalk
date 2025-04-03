import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";

export default class Page_Foyer {

    constructor(){

        super();

        // =============== //
        // << DEBUGGING >> //
        // =============== /

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'WELCOME',
            BEETLE_CONFIG_LOCATION: 'DrawFoyer.js',
            BEETLE_CONFIG_SCRIPT: 'FOYER',
            BEETLE_CONFIG_TEXT: 'LOADING FOYER PAGE'
        });

        // ============= //
        // << SECTION >> //
        // ============= //

        this.SECTION_Title = document.getElementById('SECTION_Foyer-Section-Title');

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';

        // =========== //
        // << INPUT >> //
        // =========== //

        // ============ //
        // << BUTTON >> //
        // ============ //

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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING FOYER PAGE';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();

        this.SECTION_Title.append(this.PANEL_TITLE());
    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    /**
     * ## DRAW THE TITLE PANEL
     * 
     * -------------------
     * 
     * - Panel for page title
     * - Attaches to title section of page
     * 
     * -------------------
     * #### --> RETURNS WRAPPER
     */
    PANEL_Title() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE
        ]);
        return WRAPPER_Page;
    };
    // ============ //
    // ## SET UP ## //
    // ============ //

    /**
     * ## INITIALISE THE SANDBOX PAGE
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'INITIALISING SANDBOX PAGE';
        this.INSTANCE_BEETLE.READ_MODE();

        await this.TEXT();

    };
    async TEXT () {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Foyer-Title-Present',
        }).INIT();
    };
};

const Page = new Page_Foyer();
await Page.INITIALISE();
await Page.DRAW_PAGE();
