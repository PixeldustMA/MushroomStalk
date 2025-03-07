import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";

// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                WELCOME                     == //
// ##              ONBOARDING                    ## //
// ==        Create a new user profile           == //
// ==                                            == //
// ================================================ //
// ================================================ //

/**
 * ## DRAW ONBOARDING PAGE
 * 
 * ---------------------------
 * 
 * #### Draw the Onboarding Page
 * 
 * This page will handle creating a new user profile when none currently exist
 * 
 * It should allow the user to set up save paths and personal information
 */
export default class Page_Onboarding {

    /**
	 * ## ONBOARDING CONSTRUCTOR
	 */
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
            BEETLE_CONFIG_LOCATION: 'DrawTitle.js',
            BEETLE_CONFIG_SCRIPT: 'TITLE',
            BEETLE_CONFIG_TEXT: 'LOADING TITLE PAGE'
        });

        // ============= //
        // << SECTION >> //
        // ============= //

        this.SECTION_Title = document.getElementById('SECTION_Onboarding-Section-Title');
        this.SECTION_Form =  document.getElementById('SECTION_Onboarding-Section-Details');

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';
        this.LABEL_USERNAME = 'UNSET';
        this.LABEL_PASSWORD = 'UNSET';
        this.LABEL_NEWS = 'UNSET';

        // =========== //
        // << INPUT >> //
        // =========== //

        this.INPUT_PASSWORD = 'UNSET';
        this.INPUT_USERNAME = 'UNSET';

        // ============ //
        // << BUTTON >> //
        // ============ //

        this.BUTTON_APPLY = 'UNSET';
        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_NEWS = 'UNSET';
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING ONBOARDING PAGE';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();

        this.SECTION_Title.append(this.PANEL_TITLE());
		this.SECTION_Form.append(this.PANEL_FORM());
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
    /**
	 * ## DRAW THE FORM PANEL
	 * -------------------
	 * 
	 * - Panel for onboarding form
	 * - Attaches to belly section of page
	 * 
	 * -------------------
     * #### --> RETURNS WRAPPER
	 * @returns {HTMLElement}
	 */
	PANEL_FORM() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING ONBOARDING FORM PANEL';
        this.INSTANCE_BEETLE.READ_MODE();

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        const WRAPPER_Form = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //



        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Form.append(...[
            this.LABEL_USERNAME,
			this.INPUT_USERNAME,

			this.LABEL_PASSWORD,
			this.LABEL_PASSWORD,

			this.BUTTON_NEWS,
			this.LABEL_NEWS,

			this.BUTTON_APPLY,
			this.BUTTON_BACK
        ]);
        return WRAPPER_Form;
    };
    // ============ //
    // ## SET UP ## //
    // ============ //

    /**
     * ## INITIALISE THE ONBOARDING PAGE
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'INITIALISING ONBOARDING PAGE';
        this.INSTANCE_BEETLE.READ_MODE();

        await this.TEXT();
        await this.INPUTS();
        await this.BUTTONS();

    };
    async TEXT () {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Onboarding-Title-Present',
        }).INIT();
        this.LABEL_USERNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Onboarding-Username-Label',
            CREATE_CONFIG_TAGGING_BOXNAME: 'usernameBox',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['TEXT-Layout']
        }).INIT();
        this.LABEL_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Onboarding-Password-Label',
            CREATE_CONFIG_TAGGING_BOXNAME: 'passwordBox',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['TEXT-Layout']
        }).INIT();
        this.LABEL_NEWS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'p',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Onboarding-News-Label',
            CREATE_CONFIG_PERSONALITY_CLASSES: ["TEXT_DisplayPaths"]
        }).INIT();
    };
    async INPUTS () {
        this.INPUT_USERNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Onboarding-Name-Label',
            CREATE_CONFIG_TAGGING_BOXNAME: 'usernameBox',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['INPUT-Layout', 'INPUT-Style']
        }).INIT();
        this.INPUT_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Onboarding-Password-Input',
            CREATE_CONFIG_TAGGING_BOXNAME: 'passwordBox',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['INPUT-Layout', 'INPUT-Style']
        }).INIT();
    };
    async BUTTONS() {
        this.BUTTON_NEWS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Onboarding-News-Path',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['BUTTON-FilePath']
        }).INIT();
        this.BUTTON_APPLY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Onboarding-Apply-Button',
            CREATE_CONFIG_PERSONALITY_CLASSES: ["BUTTON-Apply"]
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Onboarding-Button-Back',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['BUTTON-Back']
        }).INIT();
    };

};

const onboardingPage = new Page_Onboarding();
await onboardingPage.INITIALISE();
await onboardingPage.DRAW_PAGE();
