import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Pathways from "../../../../APPS/APP - PATHWAYS/Pathways.js";

// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                 WELCOME                    == //
// ##                  TITLE                     ## //
// ==                App Menu                    == //
// ==                                            == //
// ================================================ //
// ================================================ //

/**
 * ## DRAW TITLE PAGE
 * 
 * ---------------------------
 * 
 * #### Draw the Title Page
 * 
 */
class Page_Title extends Stalk {

    /**
     * ## TITLE CONSTRUCTOR
     */
    constructor () {
        super();

        // ============= //
        // << SECTION >> //
        // ============= //

        this.SECTION_Title = document.getElementById('TITLE_Section-Title');
        this.SECTION_Belly = document.getElementById('TITLE_Section-Belly');
        this.SECTION_Feet = document.getElementById('TITLE_Section-Feet');

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PAGE = 'UNSET';
        this.WRAPPER_BELLY = 'UNSET';
        this.WRAPPER_AVATAR = 'UNSET';

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';
        this.TEXT_LOGGEDIN_USER = 'UNSET';

        // =============== //
        // << IMAGESE >> //
        // =============== //

        this.IMAGE_LOGIN_BUTTON = 'UNSET';
        this.IMAGE_MAP_BUTTON = 'UNSET';
        this.IMAGE_SETTINGS_BUTTON = 'UNSET';
        this.IMAGE_STALK_BUTTON = 'UNSET';

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_SETTINGS_BUTTON = 'UNSET'
        this.PATH_STALK_BUTTON = 'UNSET'
        this.PATH_LOGIN_BUTTON = 'UNSET'
        this.PATH_CHANGEUSER_BUTTON = 'UNSET'
        this.PATH_MAP_BUTTON = 'UNSET';

        // ==================== //
        // << ACTIVE PROFILE >> //
        // ==================== //

        this.ACTIVE_USER = '';
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
        this.SECTION_Title.append(this.PANEL_Title());
        this.SECTION_Belly.append(this.PANEL_Belly());
    };

    // ========== //
	// ## DRAW ## //
	// ========== //

    PANEL_Title() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        this.WRAPPER_PAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PAGE.append(...[
            this.HEADER_PAGE
        ]);
        return this.WRAPPER_PAGE;
    };
    PANEL_Belly() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        this.WRAPPER_BELLY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_AVATAR = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_AVATAR.classList.add('PICTURE_FRAME');    

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_LOAD_PAGE_LISTENER(this.IMAGE_LOGIN_BUTTON, 'WELCOME', 'WELCOME');
        this.ACTIVATE_LOAD_PAGE_LISTENER(this.IMAGE_MAP_BUTTON, 'MAP', 'WELCOME');
        this.ACTIVATE_LOAD_PAGE_LISTENER(this.IMAGE_SETTINGS_BUTTON, 'MENU', 'SETTINGS');
        this.ACTIVATE_LOAD_PAGE_LISTENER(this.IMAGE_STALK_BUTTON, 'MENU', 'STALK');

        // ================== //
        // ## ATTATCHMENTS ## //
        // ================== //

        this.WRAPPER_BELLY.append(...[
            this.TEXT_LOGGEDIN_USER,
            this.IMAGE_LOGIN_BUTTON,
            this.IMAGE_MAP_BUTTON,
            this.IMAGE_SETTINGS_BUTTON,
            this.IMAGE_STALK_BUTTON,
            this.WRAPPER_AVATAR
        ]);
        return this.WRAPPER_BELLY;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_LOAD_PAGE_LISTENER(PARAMETER_ELEMENT, PARAMETER_TAG, PARAMETER_CATEGORY) {
        PARAMETER_ELEMENT.addEventListener('click', (EVENT_LOAD) => {
            this.LOAD(PARAMETER_TAG, PARAMETER_CATEGORY).then((RESULT) => {return RESULT});
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

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_PATHS()

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.PATHS();
        await this.TEXT();
        await this.IMAGES();
    };
    async TEXT () {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Title-Text',
        }).INIT();
        this.TEXT_LOGGEDIN_USER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Title-UserName',
        }).INIT();
    }
    /**
     * ## CREATE PAGE IMAGES
     */
    async IMAGES() {
        this.IMAGE_SETTINGS_BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Title-Settings-Button',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['BOARD', 'SETTINGS_BUTTON'],
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_SETTINGS_BUTTON
        }).INIT();
        this.IMAGE_MAP_BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Title-Map-Button',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['BOARD', 'MAP_BUTTON'],
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_MAP_BUTTON
        }).INIT();
        this.IMAGE_LOGIN_BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Title-Login-Button',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['BOARD', 'LOGIN_BUTTON'],
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_LOGIN_BUTTON
        }).INIT();
        this.IMAGE_STALK_BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_ID: 'IMAGE_Title-Stalk-Button',
            CREATE_CONFIG_PERSONALITY_CLASSES: ['BOARD', 'STALK_BUTTON'],
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_STALK_BUTTON
        }).INIT();

    };
    /**
     * ## CREATE PAGE PATHS
     */
    async PATHS() {
        const PATH_SETTINGS = await new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: 'ASSETS',
            PATHWAYS_CONFIG_SECTION: 'IMAGES',
            PATHWAYS_CONFIG_SUBSECTION: 'FROG_BOARD',
            PATHWAYS_CONFIG_TAG: 'UNPRESSED_SETTINGS'
        });
        await PATH_SETTINGS.INIT();
        this.PATH_SETTINGS_BUTTON = await PATH_SETTINGS.ROUTE();

        const PATH_STALK = await new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: 'ASSETS',
            PATHWAYS_CONFIG_SECTION: 'IMAGES',
            PATHWAYS_CONFIG_SUBSECTION: 'FROG_BOARD',
            PATHWAYS_CONFIG_TAG: 'UNPRESSED_MAIN'
        });
        await PATH_STALK.INIT();
        this.PATH_STALK_BUTTON = await PATH_STALK.ROUTE(); 
        const PATH_LOGIN = await new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: 'ASSETS',
            PATHWAYS_CONFIG_SECTION: 'IMAGES',
            PATHWAYS_CONFIG_SUBSECTION: 'FROG_BOARD',
            PATHWAYS_CONFIG_TAG: 'UNPRESSED_LOGIN'
        });
        await PATH_LOGIN.INIT();
        this.PATH_LOGIN_BUTTON = await PATH_LOGIN.ROUTE();
        const PATH_CHANGE = await new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: 'ASSETS',
            PATHWAYS_CONFIG_SECTION: 'IMAGES',
            PATHWAYS_CONFIG_SUBSECTION: 'FROG_BOARD',
            PATHWAYS_CONFIG_TAG: 'UNPRESSED_CHANGE'
        });
        await PATH_CHANGE.INIT();
        this.PATH_CHANGEUSER_BUTTON = await PATH_CHANGE.ROUTE();
        const PATH_MAP = await new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: 'ASSETS',
            PATHWAYS_CONFIG_SECTION: 'IMAGES',
            PATHWAYS_CONFIG_SUBSECTION: 'FROG_BOARD',
            PATHWAYS_CONFIG_TAG: 'UNPRESSED_MAP'
        });
        await PATH_MAP.INIT();
        this.PATH_MAP_BUTTON = await PATH_MAP.ROUTE();
    };
};
const titlePage = new Page_Title();
await titlePage.INITIALISE();
titlePage.DRAW_PAGE();
