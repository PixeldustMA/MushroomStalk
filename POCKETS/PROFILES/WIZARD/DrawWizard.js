import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Page_Wizard extends Stalk{

    constructor(){

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

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('WIZARD_Section-Title');
        this.SECTION_Question = document.getElementById('WIZARD_Section-Question');

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PAGE = 'UNSET';
        this.TEXT_INSTRUCTIONS = 'UNSET' 

        // ============ //
        // ## BUTTON ## //
        // ============ //

        this.BUTTON_TEMP_NO = 'UNSET';
        this.BUTTON_TEMP_YES = 'UNSET';
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING WIZARD PAGE';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();

        this.SECTION_Title.append(this.PANEL_Title());
        this.SECTION_Question.append(this.PANEL_QUESTION());
    };

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
    PANEL_QUESTION(){

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        const WRAPPER_Belly = new Connector_Jellyfish().INITIALISE_WRAPPER();
        const WRAPPERLeft = new Connector_Jellyfish().INITIALISE_WRAPPER();
        const WRAPPERRight = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================== //
        // ## ATTATCHMENTS ## //
        // ================== //

        WRAPPERLeft.append(...[this.BUTTON_TEMP_YES]);
        WRAPPERRight.append(...[this.BUTTON_TEMP_NO]);

            WRAPPER_Belly.append(...[
                this.TEXT_INSTRUCTIONS,
                WRAPPERLeft,
                WRAPPERRight
            ]);
            return WRAPPER_Belly;
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'INITIALISING WIZARD PAGE';
        this.INSTANCE_BEETLE.READ_MODE();

        await this.PATHS();
        await this.TEXT();
        // await this.IMAGES();
        await this.BUTTON();
    };
    async PATHS() {

    };
    async TEXT() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Title-Text',
        }).INIT();
        this.TEXT_INSTRUCTIONS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Wizard-Instructions',
        }).INIT();
        this.TEXT_INSTRUCTIONS.innerHTML = 'DO YOU HAVE DATA YOU WANT TO IMPORT?';
    };
    async IMAGES() {

        this.IMAGE_TURTLEYES_BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Wizard-Turtle-Yes',
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_TURTLE_YES
        }).INIT();
        this.IMAGE_TURTLENO_BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Wizard-Turtle-No',
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_TURTLE_NO
        }).INIT();
    };
    async BUTTON() {
        this.BUTTON_TEMP_YES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Temp-yes',
        }).INIT();
        this.BUTTON_TEMP_YES.innerHTML = 'YES'
        this.BUTTON_TEMP_NO = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Temp-no'
        }).INIT();
        this.BUTTON_TEMP_NO.innerHTML = 'NO';
    };
};
const titlePage = new Page_Wizard();
await titlePage.INITIALISE();
titlePage.DRAW_PAGE(); 