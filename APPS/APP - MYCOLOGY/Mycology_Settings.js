import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## SETTINGS VALIDATION
 * ----------------------
 */
export default class ST_Mycology extends MYCOLOGY_Main{
    /**
     * ## MYCOLOGY SETTINGS CONSTRUCTOR
     */
    constructor({
        SETTINGS_CONFIG_PATHS = 0
    }){
        super();

        this.SESSION_PATH = SETTINGS_CONFIG_PATHS;

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_CHARACTER = 'UNSET';
        this.PATH_APP_STATUS = 'UNSET';
        this.PATH_TOP = 'UNSET';

        // ========== //
        // << DATA >> //
        // ========== //

    };
    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE(){
        await this.#GET_SESSIONS();
        await this.#LOAD_PATHS();
    };
    /**
     * ## RUN CUPBOARD VALIDATION
     * --------------------------
     */
    async RUN() {

        await this.INITIALISE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================ //
        // << JSON FILES >> //
        // ================ //

        await this.#CHARACTER();
        await this.#STATUS();
    };
    // ============= //
    // ## UTILITY ## //
    // ============= //

    /**
     * ## VALIDATE SETTING FOLDERS
     * ----------------------------
     * 
     * Check existance of individual folders
     */
    async #FOLDERS() {

    };
    async #GET_SESSIONS() {
        await this.REQUEST_SESSION_TEMPLATES();
    };
    async #LOAD_PATHS() {
        this.PATH_CHARACTER = this.SESSION_PATH.SETTINGS.CHARACTER;
        this.PATH_APP_STATUS = this.SESSION_PATH.SETTINGS.STATUS;
        this.PATH_TOP = this.SESSION_PATH.TOP.SETTINGS;
    };

    // ============================= //
    // ## SETTINGS SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
    async #CHARACTER() {await this.EXISTANCE_FILE(this.PATH_CHARACTER, {});};
    async #STATUS() {await this.EXISTANCE_FILE(this.PATH_APP_STATUS, this.SESSION.TEMPLATES.MYCOLOGY.SETTINGS.STATUS);};
}