
import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Pathways from "../../../APPS/APP - PATHWAYS/Pathways.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Connector_Mycology from "../../../CONSOLE/ARTERIES/Connector_Mycology.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

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

        // =============== //
		// << DEBUGGING >> //
		// =============== /

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'WELCOME',
            BEETLE_CONFIG_LOCATION: 'DrawWelcome.js',
            BEETLE_CONFIG_SCRIPT: 'WELCOME',
            BEETLE_CONFIG_TEXT: 'LOADING WELCOME PAGE'
        });

        // ============= //
		// << SECTION >> //
		// ============= //

		this.SECTION_Form = document.getElementById('Welcome_Section_Form');

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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING WELCOME PAGE';
        await this.INSTANCE_BEETLE.READ_MODE();

        // await this.REMEMBER();
        // const INSTANCE_MYCOLOGY = new Connector_Mycology(this.SESSION);
        // await INSTANCE_MYCOLOGY.NO_USERNAME_MYCOLOGY()

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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING WELCOME PANEL';
        this.INSTANCE_BEETLE.READ_MODE().then((BEETLE_RESULT) => {return BEETLE_RESULT});

        // ============== //
		// << WRAPPERS >> //
		// ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
		// << LISTENERS >> //
		// =============== //

		this.ACTIVATE_BUTTON_SUBMIT(this.BUTTON_SUBMITTING);
		this.ACTIVATE_BUTTON_NEW_USER(this.BUTTON_USER);

		// ================= //
		// << ATTACHMENTS >> //
		// ================= //

		WRAPPER_Page.append(...[
			this.INPUT_NAME,
			this.INPUT_PASSWORD,
			this.BUTTON_SUBMITTING,
			this.BUTTON_NEW_USER,
			this.IMAGE_EYES
		]);
		return WRAPPER_Page;
    };

    // ============= //
	// ## BUTTONS ## //
	// ============= //

    /**
     * ## ADDING LISTENER TO USER BUTTON
     */
    ACTIVATE_BUTTON_NEW_USER(PARAMETER_BUTTON) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'LOADING NEW USER BUTTON';
        this.INSTANCE_BEETLE.READ_MODE().then((BEETLE_RESULT) => {return BEETLE_RESULT});

        PARAMETER_BUTTON.addEventListener('click', (event) => {			
            this.ONBOARDING();
		});
    };
    /**
     * ## ADDING SUBMIT BUTTON LISTENER
     */
    ACTIVATE_BUTTON_SUBMIT(PARAMETER_BUTTON){

        this.INSTANCE_BEETLE.DAISY_TEXT = 'LOADING SUBMIT BUTTON';
        this.INSTANCE_BEETLE.READ_MODE().then((BEETLE_RESULT) => {return BEETLE_RESULT});

		PARAMETER_BUTTON.addEventListener('click', (event) => {
			this.VALIDATE(
                document.getElementById('INPUT_Welcome-Name-Entry').value,
                document.getElementById('INPUT_Welcome-Password-Entry').value
            ).then((RESULT) => {return RESULT});
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'INITIALISING WELCOME PAGE';
        this.INSTANCE_BEETLE.READ_MODE();

        await this.PATHS();
        await this.INPUTS();
        await this.BUTTONS();
        await this.IMAGES();
    };
    /**
     * ## CREATE PAGE INPUTS
     */
    async INPUTS(){

        this.INSTANCE_BEETLE.DAISY_TEXT = 'GENERATING INPUTS';
        await this.INSTANCE_BEETLE.READ_MODE();

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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'GENERATING BUTTONS';
        await this.INSTANCE_BEETLE.READ_MODE();

        this.BUTTON_SUBMITTING = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Welcome-User_Submit'
        }).INIT();
        this.BUTTON_USER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Welcome-User-Create'
        }).INIT();
    };
    /**
     * ## CREATE PAGE IMAGES
     */
    async IMAGES() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'GENERATING IMAGES';
        await this.INSTANCE_BEETLE.READ_MODE();

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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'GENERATING PATHS';
        await this.INSTANCE_BEETLE.READ_MODE();

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
