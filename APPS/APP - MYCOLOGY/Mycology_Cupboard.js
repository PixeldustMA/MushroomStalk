import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## CUPBOARD VALIDATION
 * ----------------------
 */
export default class Myco_Cupboard extends MYCOLOGY_Main{

    /**
     * ## MYCOLOGY CUPBOARD CONSTRUCTOR
     */
    constructor({
        CUPBOARD_CONFIG_PATHS_FOLDERS = 0,
        CUPBOARD_CONFIG_TOP = 0,
        CUPBOARD_CONFIG_PATHS_USERS = 0,
        CUPBOARD_CONFIG_PATHS_TEXT = 0,
        CUPBOARD_CONFIG_PATHS_ROUTES= 0,
        CUPBOARD_CONFIG_PATHS_PANTRY= 0,
        CUPBOARD_CONFIG_PATHS_MEMORY= 0,
        CUPBOARD_CONFIG_PATHS_SETTINGS = 0,
        CUPBOARD_CONFIG_TEMPLATES = 0
    }){
        super();

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_TOP = CUPBOARD_CONFIG_TOP;
        this.PATH_FOLDERS = CUPBOARD_CONFIG_PATHS_FOLDERS;
        this.PATH_USERS = CUPBOARD_CONFIG_PATHS_USERS;
        this.PATH_TEXT = CUPBOARD_CONFIG_PATHS_TEXT;
        this.PATH_ROUTES = CUPBOARD_CONFIG_PATHS_ROUTES;
        this.PATH_PANTRY = CUPBOARD_CONFIG_PATHS_PANTRY;
        this.PATH_MEMORY = CUPBOARD_CONFIG_PATHS_MEMORY;
        this.PATH_SETTINGS = CUPBOARD_CONFIG_PATHS_SETTINGS;

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA_TEMPLATES = CUPBOARD_CONFIG_TEMPLATES.CUPBOARD;
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## RUN CUPBOARD VALIDATION
     * --------------------------
     */
    async RUN() {

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //
        await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================= //
        // << SUB FOLDERS >> //
        // ================= //
        await this.#FOLDERS();

        // ================ //
        // << JSON FILES >> //
        // ================ //
        await this.#RESIDENT();
        await this.#FROGS();
        await this.#USER();
        await this.#LIST();
        await this.#SETTINGS();

        console.log(this.PATH_USERS)
        // ================ //
        // << TEXT FILES >> //
        // ================ //
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    /**
     * ## VALIDATE CUPBOARD FOLDERS
     * ----------------------------
     * 
     * Check existance of individual folders
     */
    async #FOLDERS() {
        let KEYS = Object.keys(this.PATH_FOLDERS);
        for (let INDEX_Folders = 0; INDEX_Folders < KEYS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[KEYS[INDEX_Folders]];
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
        await this.EXISTANCE_CHECK(this.PATH_USERS.LILYPAD);
    };

    // ============================= //
    // ## CUPBOARD SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
    /**
     * ## VALIDATE FROG FILE
     * ---------------------
     */
    async #FROGS() {await this.EXISTANCE_FILE(this.PATH_USERS.FROGS, this.DATA_TEMPLATES.USERS_FROGS);};
    /**
     * ## VALIDATE RESIDENT FILE
     * ---------------------
     */
    async #RESIDENT() {await this.EXISTANCE_FILE(this.PATH_USERS.RESIDENT, this.DATA_TEMPLATES.USERS_RESIDENT);};
    /**
     * ## VALIDATE USER FILE
     * ---------------------
     */
    async #USER() {await this.EXISTANCE_FILE(this.PATH_ROUTES.USER, this.DATA_TEMPLATES.ROUTES_USER);};
    async #SETTINGS() {await this.EXISTANCE_FILE(this.PATH_SETTINGS, this.DATA_TEMPLATES.SETTINGS);};
    async #LIST() {await this.EXISTANCE_FILE(this.PATH_USERS.LIST, []);};
    /**
     * ## VALIDATE WELCOME BUTTON TEXT FILE
     * ---------------------
     */
    async #BUTTON() {await this.EXISTANCE_FILE(this.PATH_FILES.WELCOME.BUTTON, {});};
    /**
     * ## VALIDATE WELCOME INPUT TEXT FILE
     * ---------------------
     */
    async #INPUT() {await this.EXISTANCE_FILE(this.PATH_FILES.WELCOME.INPUT, {})};
};