import Pathways from "../../APPS/APP - PATHWAYS/Pathways.js";
import Mushroom_Cap from "./MushroomCap.js";

export default class Branches extends Mushroom_Cap {

    /**
     * ## BRANCH CONSTRUCTOR
     */
    constructor() {
        super();
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## FILTER BRANCH REQUEST BY MODE
     * 
     * ----------------------------
     * 
     * ### MODE
     * 
     * Can be set to 
     * - WINDOW
     * - ROUTE
     * - FILE
     * - FOLDER
     * 
     * #### SUB MODE
     * 
     * Set secondary mode depending on the previously set mode
     * 
     * #### POCKET TAG
     * 
     * Information to be passed to the ultimately requested function
     * 
     * #### ROUTE SETTINGS
     * 
     * Specifically the settings for a route if MODE is set to 'ROUTE
     * 
     */
    async READ_MODE({
            PARAMTER_BRANCH_MODE = 'UNSET',
            PARAMETER_SUB_MODE = 'UNSET',
            PARAMETER_TAG_POCKET = 'UNSET',
            PARAMETER_SETTINGS_ROUTE = 'UNSET',
            PARAMETER_CATEGORY_POCKET = 'UNSET'
        }){
    
        await this.REMEMBER();

        switch (PARAMTER_BRANCH_MODE) {
            case 'WINDOW':
                return await this.#MODE_WINDOW(PARAMETER_SUB_MODE, PARAMETER_TAG_POCKET, PARAMETER_CATEGORY_POCKET);
            case 'ROUTE':
                return await this.#MODE_ROUTE(PARAMETER_SETTINGS_ROUTE);
            default:
                break;
        };
    };

    // =========== //
    // ## MODES ## //
    // =========== //

    /**
     * ## ACCESS WINDOW FUNCTIONS
     * 
     * -----------------------------
     * 
     * Request window specfic functions
     */
    async #MODE_WINDOW(PARAMETER_REQUEST, PARAMETER_TAG, PARAMETER_CATEGORY) {

        if (PARAMETER_REQUEST === 'LOAD') {return await this.LOAD(PARAMETER_TAG, PARAMETER_CATEGORY)};
        if (PARAMETER_REQUEST === 'CHECK') {return await this.INSTANCE_WINDOW.CHECK_LOGIN();}
    };
    /**
     * ## REQUEST ROUTE SPECIFIC FUNCTIONS
     * 
     * ----------------------------------
     * 
     * Request Route specific functions
     */
    async #MODE_ROUTE(PARAMETER_ROUTE_SETTINGS) {

        if (PARAMETER_ROUTE_SETTINGS !== 0) {
            return await this.INIT_ROUTE({
                PARAMETER_TAG: PARAMETER_ROUTE_SETTINGS.TAG, 
                PARAMETER_MEMORY: PARAMETER_ROUTE_SETTINGS.MEMORY, 
                PARAMETER_SECTION: PARAMETER_ROUTE_SETTINGS.SECTION, 
                PARAMETER_SUBSECTION: PARAMETER_ROUTE_SETTINGS.SUBSECTION})
        };
    };

    // ===================== //
    // ## WINDOW SETTINGS ## //
    // ===================== //

    /**
     * ## LOAD NEW PAGE
     * 
     * -----------------
     * 
     * ### PARAMETERS
     * 
     * ----------------
     * 
     * @param {string} PARAMETER_PAGE_TAG {NAME OF PAGE TO BE LOADED}
     * 
     * ### DETAILS
     * 
     * -----------
     * 
     * Load a new page in the currently active window based on the tag
     * 
     * Page must exist in the app memory for this function to work 
     */
    async LOAD(PARAMETER_PAGE_TAG, PARAMETER_PAGE_CATEGORY) {  

        await this.REMEMBER();
        await this.SAVE_SESSION();
        window.location.href = this.SESSION.ROUTES.MEMORY[PARAMETER_PAGE_CATEGORY][PARAMETER_PAGE_TAG];
    };

    // ==================== //
    // ## ROUTE SETTINGS ## //
    // ==================== //

    /**
     * ## FETCH FORMATTED PATH FROM ROUTE FILES
     * 
     * --------------------------------------
     * 
     * @param {object} settingsObject {ROUTE SETTINGS OBJECT} 
     * 
     * #### SETTINGS OBJECT
     * - TAG:: TITLE OF ROUTE
     * - SECTION:: CATEGORY
     * - SUBSECTION :: SUB - CATEGORY
     * 
     * ### ROUTE SETTINGS (SET TO 1 TO ACCESS)
     * - CUSTOM:: A ROUTE THAT DOES NOT HAVE A ROUTE OBJECT
     * - PLANET:: EXPLORER ROUTES
     * - ASSET:: ASSETS ROUTES
     * - USER:: USER ROUTES
     * - FONT:: CUSTOM FONTS
     * 
     * -------------------------------------
     * ### RETURNS -->> {PROMISE} Formatted Path
     */
    async INIT_ROUTE({
        PARAMETER_TAG = 0,
        PARAMETER_SECTION = 0,
        PARAMETER_SUBSECTION = 0,
        PARAMETER_MEMORY = 0,
    }) {

        const INSTANCE_PATHWAY = new Pathways({
            PATHWAYS_CONFIG_MEMORY_SET: PARAMETER_MEMORY,
            PATHWAYS_CONFIG_TAG: PARAMETER_TAG,
            PATHWAYS_CONFIG_SUBSECTION: PARAMETER_SUBSECTION,
            PATHWAYS_CONFIG_SECTION: PARAMETER_SECTION
        });
        await INSTANCE_PATHWAY.INIT();
        return await INSTANCE_PATHWAY.ROUTE();
    };

    // ============ //
    // ## STATUS ## //
    // ============ //

    /**
     * ## CHECK IF A FOLDER OR A FILE EXISTS 
     * 
     * -------------------------------------
     * 
     * Use a given path to determine if a folder or file exists
     */
    async FOLDER_EXISTANCE(PARAMETER_PATHWAY) {
        this.RENDERER_PATH = PARAMETER_PATHWAY;
        return await this.PATH_STATUS();
    };
}