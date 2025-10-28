import Pathways from "../../../../APPS/APP - PATHWAYS/Pathways.js";
import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                WELCOME                     == //
// ##                WELCOME                     ## //
// ==           Log in to a Profile              == //
// ==                                            == //
// ================================================ //
// ================================================ //

/**
 * ## DRAW WELCOME PAGE
 * 
 * ---------------------------
 * 
 * #### Draw the Welcome Page
 * 
 * This page will handle logging into an already existing user profile
 * 
 * - It should allow the user to access the app using their specific INSTANCE_MEMORY files
 * 
 * - It should verify that the password and username match
 * 
 * - If they match, it should verify and then allow access to the app
 * 
 * - If they do not match it should send to the no screen and give options for continuing
 */
class Page_Welcome extends Stalk {

    /**
	 * ## WELCOME CONSTRUCTOR
	 */
	constructor () {
		super();

        // ============= //
		// << SECTION >> //
		// ============= //

		this.SECTION_Form = document.getElementById('Welcome_Section_Form');

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_WELCOME = 'UNSET';

        // ============ //
        // << INPUTS >> //
        // ============ //

        this.INPUT_NAME = 'UNSET';
        this.INPUT_PASSWORD = 'UNSET';

        // =============== //
		// << ANIMATION >> //
		// =============== //

        this.IMAGE_EYES = 'UNSET';

        // ============= //
		// << BUTTONS >> //
		// ============= //

        this.BUTTON_NEW_USER = 'UNSET';
        this.BUTTON_SUBMITTING = 'UNSET';

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_IMAGE_EYES = 'UNSET';

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
    async DRAW_Page() {
        this.SECTION_Form.append(await this.PANEL_Welcome());	
    };

    // ========== //
	// ## DRAW ## //
	// ========== //

	/**
	 * ## DRAW THE WELCOME PANEL
	 * 
	 * -------------------
	 * 
	 * - Panel for page title
	 * - Attaches to welcome section of page
	 * 
	 * -------------------
     * #### --> RETURNS WRAPPER
	 */
	PANEL_Welcome() {

        // ============== //
		// << WRAPPERS >> //
		// ============== //

        this.WRAPPER_WELCOME = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
		// << LISTENERS >> //
		// =============== //

		this.ACTIVATE_BUTTON_SUBMIT(this.BUTTON_SUBMITTING);
		this.ACTIVATE_BUTTON_NEW_USER(this.BUTTON_USER);

		// ================= //
		// << ATTACHMENTS >> //
		// ================= //

		this.WRAPPER_WELCOME.append(...[
			this.INPUT_NAME,
			this.INPUT_PASSWORD,
			this.BUTTON_SUBMITTING,
			this.BUTTON_NEW_USER,
			this.IMAGE_EYES
		]);
		return this.WRAPPER_WELCOME;
    };

    // ============= //
	// ## BUTTONS ## //
	// ============= //

    /**
     * ## ADDING LISTENER TO USER BUTTON
     */
    ACTIVATE_BUTTON_NEW_USER(PARAMETER_BUTTON) {

        PARAMETER_BUTTON.addEventListener('click', (event) => {			
            this.ONBOARDING();
		});
    };
    /**
     * ## ADDING SUBMIT BUTTON LISTENER
     */
    ACTIVATE_BUTTON_SUBMIT(PARAMETER_BUTTON){
		PARAMETER_BUTTON.addEventListener('click', (event) => {
			this.VALIDATE(
                this.INPUT_NAME.value,
                this.INPUT_PASSWORD.value
            ).then((RESULT) => {
                this.LOAD('VALIDATION', 'PROFILE')
                return RESULT});
		});
	};

    // ============ //
	// ## SET UP ## //
	// ============ //

	/**
	 * ## INITIALISE THE WELCOME PAGE
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

        // ============== //
        // << SESSIONS >> //
        // ============== //

        await this.REQUEST_SESSION_PATHS();
        await this.REQUEST_SESSION_ROUTES();
        // await this.REQUEST_SESSION_TEMPLATES();
        await this.REQUEST_SESSION_USERS();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.PATHS();
        await this.INPUTS();
        await this.BUTTONS();
        await this.IMAGES();
    };
    /**
     * ## CREATE PAGE INPUTS
     * ----------------------
     * 
     * Generate all input elements needed for the page
     */
    async INPUTS(){

		this.INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'input',
            CREATE_CONFIG_ELEMENT_TAG: 'text',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Welcome-Name-Entry',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['welcomeInput', 'NameInput']
        }).INIT();
		this.INPUT_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'input',
            CREATE_CONFIG_ELEMENT_TAG: 'password',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Welcome-Password-Entry',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['welcomeInput', 'PasswordInput']
        }).INIT();
    };
    /**
     * ## CREATE PAGE BUTTONS
     */
    async BUTTONS() {

        this.BUTTON_SUBMITTING = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Welcome-User_Submit'
        }).INIT();
        this.BUTTON_USER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Welcome-User-Create'
        }).INIT();

        this.BUTTON_SUBMITTING.innerHTML = 'SUBMIT';
        this.BUTTON_USER.innerHTML = 'CREATE NEW USER';
    };
    /**
     * ## CREATE PAGE IMAGES
     */
    async IMAGES() {
		this.IMAGE_EYES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Eyes-Animation',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['EYES'],
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_Image_Eyes
        }).INIT();

    };
    /**
     * ## CREATE PAGE PATHS
     */
    async PATHS() {

        const INSTANCE_PATHS = await new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: 'ASSETS',
            PATHWAYS_CONFIG_SECTION: 'ANIMATIONS',
            PATHWAYS_CONFIG_SUBSECTION: 'MISC',
            PATHWAYS_CONFIG_TAG: 'EYES'
        });
        await INSTANCE_PATHS.INIT();
        this.PATH_IMAGE_EYES = await INSTANCE_PATHS.ROUTE(); 
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Welcome = new Page_Welcome();
await PAGE_Welcome.INITIALISE();
PAGE_Welcome.DRAW_Page();
