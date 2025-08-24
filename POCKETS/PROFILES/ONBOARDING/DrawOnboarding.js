import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Lilypad from "../../../APPS/APP - LILYPAD/Lilypad.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Connector_Mycology from "../../../CONSOLE/ARTERIES/Connector_Mycology.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

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
export default class Page_Onboarding extends Stalk{

    /**
	 * ## ONBOARDING CONSTRUCTOR
	 */
    constructor(){

        super();

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_FORM = 'UNSET';

        // ============= //
        // << SECTION >> //
        // ============= //

        this.SECTION_Title = document.getElementById('SECTION_Onboarding-Section-Title');
        this.SECTION_Form =  document.getElementById('SECTION_Onboarding-Section-Details');

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_USERNAME = 'UNSET';
        this.LABEL_PASSWORD = 'UNSET';
        this.LABEL_OBSIDIAN = 'UNSET';

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
        this.BUTTON_OBSIDIAN = 'UNSET';

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_JELLYFISH = new Connector_Jellyfish();
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
    PANEL_TITLE() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE
        ]);
        return this.WRAPPER_TITLE;
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

        // ================ //
        // << CONTAINERS >> //
        // ================ //
        
        this.WRAPPER_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SAVE_PROFILE();
        this.ACTIVATE_OBSIDIAN();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FORM.append(...[
            this.LABEL_USERNAME,
			this.INPUT_USERNAME,

			this.LABEL_PASSWORD,
			this.INPUT_PASSWORD,

			this.BUTTON_OBSIDIAN,
			this.LABEL_OBSIDIAN,
            this.LABEL_DISPLAY_OBSIDIAN,

			this.BUTTON_APPLY,
			this.BUTTON_BACK
        ]);
        return this.WRAPPER_FORM;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_SAVE_PROFILE() {
        this.BUTTON_APPLY.addEventListener('click', (event) => {

            // =========== //
            // << NAMES >> //
            // =========== //

            let ACTIVE_USERNAME = this.INPUT_USERNAME.value;
            let ACTIVE_PASSWORD = this.INPUT_PASSWORD.value;

            // =========== //
            // << PATHS >> //
            // =========== //

            let ACTIVE_OBSIDIAN = this.LABEL_DISPLAY_OBSIDIAN.innerHTML;
            const INSTANCE_MYCOLOGY = new Connector_Mycology(this.SESSION, ACTIVE_USERNAME);

            INSTANCE_MYCOLOGY.MYCOLOGY_WAR().then((MYCO_RESULT) => {

                const INSTANCE_LILYPAD = new Lilypad({
                    LILYPAD_CONFIG_USERNAME: ACTIVE_USERNAME,
                    LILYPAD_CONFIG_PASSWORD: ACTIVE_PASSWORD,
                    LILYPAD_CONFIG_PATH_OBSIDIAN: ACTIVE_OBSIDIAN,
                    LILYPAD_CONFIG_LIST_USERS: this.SESSION.USERS.LIST.USERLIST,
                    LILYPAD_CONFIG_DATA_COUNT: this.SESSION.SETTINGS.MUSHROOM.USER_COUNT,
                    LILYPAD_CONFIG_DATA_LILYPAD: this.SESSION.USERS.DATA.LILYPAD
                }).RUN_LILYPAD('NEW').then((LILY_RES) => {return LILY_RES});
                return MYCO_RESULT;
            })


                // << CHANGE THE PAGE >> //
                this.LOAD('TITLE', 'WELCOME')

            });
    };
    ACTIVATE_OBSIDIAN() {
        this.BUTTON_OBSIDIAN.addEventListener('click', (event) => {
            this.INSTANCE_JELLYFISH.FOLDER_PICKER(this.LABEL_DISPLAY_OBSIDIAN);
        });
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

        await this.REQUEST_SESSION_PATHS();
        await this.REQUEST_SESSION_USERS();
        await this.REQUEST_SESSION_APP_SETTINGS();
        console.log(this.SESSION)

        await this.#HEADERS();
        await this.#LABELS();
        await this.INPUTS();
        await this.BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS () {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Onboarding-Title-Present',
        }).INIT();
        this.HEADER_PAGE.innerHTML = 'NEW FROG';
    };
    async #LABELS() {

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
        this.LABEL_OBSIDIAN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'p',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Onboarding-News-Label',
            CREATE_CONFIG_PERSONALITY_CLASSES: ["TEXT_DisplayPaths"]
        }).INIT();
        this.LABEL_DISPLAY_OBSIDIAN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'p',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Onboarding-News-Label',
            CREATE_CONFIG_PERSONALITY_CLASSES: ["TEXT_DisplayPaths"]
        }).INIT();
        this.LABEL_USERNAME.innerHTML = 'USERNAME';
        this.LABEL_PASSWORD.innerHTML = 'PASSWORD';
        this.LABEL_OBSIDIAN.innerHTML = 'Select Obsidian Vault';
        this.LABEL_DISPLAY_OBSIDIAN.innerHTML = '';
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
        this.BUTTON_OBSIDIAN = await new Create({
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

        this.BUTTON_OBSIDIAN.innerHTML = 'OBSIDIAN';
        this.BUTTON_APPLY.innerHTML = 'APPLY';
        this.BUTTON_BACK.innerHTML = 'BACK';
    };

};

const PAGE_Onboarding = new Page_Onboarding();
await PAGE_Onboarding.INITIALISE();
await PAGE_Onboarding.DRAW_PAGE();
