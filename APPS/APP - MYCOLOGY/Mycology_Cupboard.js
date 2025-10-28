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
        CUPBOARD_CONFIG_PATHS_LILYPAD = 0,
        CUPBOARD_CONFIG_PATHS_ROUTE_FILES = 0,
        CUPBOARD_CONFIG_PATHS_SETTINGS_FILES = 0
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
        this.PATH_LILYPAD = CUPBOARD_CONFIG_PATHS_LILYPAD;
        this.PATH_ROUTE_FILES = CUPBOARD_CONFIG_PATHS_ROUTE_FILES;
        this.PATH_SETTINGS_FILES = CUPBOARD_CONFIG_PATHS_SETTINGS_FILES

        // ========== //
        // << DATA >> //
        // ========== //

        // this.DATA_TEMPLATES = CUPBOARD_CONFIG_TEMPLATES.CUPBOARD;
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
        console.log([this.PATH_LILYPAD])
        for (let INDEX_Folders = 0; INDEX_Folders < KEYS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[KEYS[INDEX_Folders]];
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
        console.log(this.PATH_LILYPAD)
        await this.EXISTANCE_CHECK(this.PATH_LILYPAD.FOLDERS.LILYPAD);
    };

    // ============================= //
    // ## CUPBOARD SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
    /**
     * ## VALIDATE FROG FILE
     * ---------------------
     */
    async #FROGS() {await this.EXISTANCE_FILE(this.PATH_LILYPAD.FILES.FROG, {});};
    /**
     * ## VALIDATE RESIDENT FILE
     * ---------------------
     */
    async #RESIDENT() {await this.EXISTANCE_FILE(this.PATH_LILYPAD.FILES.RESIDENT, this.#TEMPLATE_RESIDENT());};
    /**
     * ## VALIDATE USER FILE
     * ---------------------
     */
    async #USER() {await this.EXISTANCE_FILE(this.PATH_ROUTE_FILES.FILES.USERS, {});};
    async #SETTINGS() {await this.EXISTANCE_FILE(this.PATH_SETTINGS_FILES.FILES.MUSHROOM, this.#TEMPLATE_MUSHROOM());};
    async #LIST() {await this.EXISTANCE_FILE(this.PATH_LILYPAD.LISTS.USER, []);};
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

    #TEMPLATE_RESIDENT(){
        return {
            "MESSAGEPATH": "BUNDLE",
            "BUNDLEPATH": "BUNDLE",
            "NEWSPATH": "NEWS",
            "SQUIRRELPATH": "SQUIRRELS",
            "SPIRITPATH": "SPIRITS",
            "DOODLEPATH": "DOODLES",
            "NAME": "TESTING",
            "PASSWORD": "debugging",
            "OBSIDIAN": "OBSIDIAN",
            "LOGGED": false
        }
    };
    #TEMPLATE_MUSHROOM(){
        return {
            USER_COUNT: 0
        }
    }
};