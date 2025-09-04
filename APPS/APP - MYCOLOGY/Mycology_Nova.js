import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## SETTINGS VALIDATION
 * ----------------------
 */
export default class NV_Mycology extends MYCOLOGY_Main{
    /**
     * ## MYCOLOGY NOVA CONSTRUCTOR
     */
    constructor({
        NOVA_CONFIG_PATHS = 0
    }){
        super();

        this.SESSION_PATH = NOVA_CONFIG_PATHS;

        // =========== //
        // ## PATHS ## //
        // =========== //

        // ============= //
        // << GENERAL >> //
        // ============= //

        this.PATH_TOP = 'UNSET';

        // ============ //
        // << FOLDERS >> //
        // ============ //

        this.PATH_FOLDER_HEADERS = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';
        this.PATH_FOLDER_SEGMENTS = 'UNSET';

        // =========== //
        // << LISTS >> //
        // =========== //

        this.PATH_LIST_HEADER = 'UNSET';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE(){
        await this.#GET_SESSIONS();
        await this.#LOAD_PATHS();
    };
    /**
     * ## RUN NOVA VALIDATION
     * --------------------------
     */
    async RUN() {

        await this.INITIALISE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        await this.EXISTANCE_CHECK(this.PATH_TOP);
        await this.#FOLDERS();

        // ================ //
        // << JSON FILES >> //
        // ================ //

        await this.#LIST_HEADER();
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
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SEGMENTS);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_CONSOLE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_HEADERS);
    };
    async #GET_SESSIONS() {
        await this.REQUEST_SESSION_TEMPLATES();
    };
    async #LOAD_PATHS() {
        await this.#LOAD_GENERAL_PATHS();
        await this.#LOAD_FOLDER_PATHS();
        await this.#LOAD_LIST_PATHS();
    };
    async #LOAD_GENERAL_PATHS() {
        this.PATH_TOP = this.SESSION_PATH.TOP.NOVA;
    };
    async #LOAD_FOLDER_PATHS() {
        this.PATH_FOLDER_HEADERS = this.SESSION_PATH.NOVA.HEADERS;
        this.PATH_FOLDER_CONSOLE = this.SESSION_PATH.NOVA.CONSOLE;
        this.PATH_FOLDER_SEGMENTS = this.SESSION_PATH.NOVA.SEGMENTS;
    };
    async #LOAD_LIST_PATHS() {
        this.PATH_LIST_HEADER = this.SESSION_PATH.NOVA.LISTS.HEADERS;
    }

    // ========================== //
    // ## MEDIA SPECIFIC FILES ## //
    // ========================== //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
    async #LIST_HEADER() {await this.EXISTANCE_FILE(this.PATH_LIST_HEADER, []);};
}