import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";

export default class Page_Desk {

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
            BEETLE_CONFIG_LOCATION: 'DrawDesk.js',
            BEETLE_CONFIG_SCRIPT: 'DESK',
            BEETLE_CONFIG_TEXT: 'LOADING DESK PAGE'
        });

        // ============= //
        // << SECTION >> //
        // ============= //

        this.SECTION_Title = document.getElementById('SECTION_Archive-New-Title');
        this.SECTION_Submit = document.getElementById('SECTION_Archive-New-Submit');
        this.SECTION_Button = document.getElementById('SECTION_Archive-New-Buttons');
        this.SECTION_Form = document.getElementById('SECTION_Archive-New-Form');

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

        // this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING DESK PAGE';
        // await this.INSTANCE_BEETLE.READ_MODE();

        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Submit.append(this.PANEL_SUBMIT());
        this.SECTION_Form.append(this.PANEL_FORM());
        this.SECTION_Button.append(this.PANEL_BUTTONS());
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
    PANEL_TITLE() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();
        WRAPPER_Page.classList.add('TITLE_PANEL');

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE
        ]);
        return WRAPPER_Page;
    };
    PANEL_FORM() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();
        WRAPPER_Page.classList.add('FORM_PANEL');

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        const COLLAPSIBLE_Required = new Collapsible(this.NewCharacterPanel, "REQUIRED", "REQUIRED");
        const PANEL_Required_Characters = COLLAPSIBLE_Required.DRAW();

        WRAPPER_Page.append(...[
            PANEL_Required_Characters
        ]);
        return WRAPPER_Page;
    };
    PANEL_BUTTONS() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    /**
     * ## INITIALISE THE DESK PAGE
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'INITIALISING DESK PAGE';
        this.INSTANCE_BEETLE.READ_MODE();

        await this.TEXT();

    };
    async TEXT () {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Desk-Title-Present',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['defaultTitle']
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'NEW CHARACTER'

    };
};

const Page = new Page_Desk();
await Page.INITIALISE();
await Page.DRAW_PAGE();
