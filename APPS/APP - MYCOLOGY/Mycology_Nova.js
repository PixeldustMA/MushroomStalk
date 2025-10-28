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



        // =========== //
        // << LISTS >> //
        // =========== //

    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## RUN NOVA VALIDATION
     * --------------------------
     */
    async RUN() {

        await this.#LOAD_PATHS();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        console.log(this.PATH_TOP)
        await this.EXISTANCE_CHECK(this.PATH_TOP);

        await this.#FOLDERS();

        // ================ //
        // << JSON FILES >> //
        // ================ //

        await this.EXISTANCE_FILE(this.PATH_LIST_BLUEPRINTS, []);
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
        await this.EXISTANCE_CHECK(this.PATH_BLUEPRINTS_ROOT);
        await this.EXISTANCE_CHECK(this.PATH_BLUEPRINTS_CONSOLE);
        await this.EXISTANCE_CHECK(this.PATH_BLUEPRINTS_BLUEPRINTS);
    };
    async #LOAD_PATHS() {
        await this.#LOAD_FOLDER_PATHS();
        await this.#LOAD_LIST_PATHS();
    };
    async #LOAD_FOLDER_PATHS() {
        this.PATH_TOP = this.SESSION_PATH.ROOT.NOVA.MAIN
        this.PATH_BLUEPRINTS_ROOT = `${this.PATH_TOP}/BLUEPRINTS`;
        this.PATH_BLUEPRINTS_CONSOLE = `${this.PATH_TOP}/BLUEPRINTS/CONSOLE`;
        this.PATH_BLUEPRINTS_BLUEPRINTS = `${this.PATH_TOP}/BLUEPRINTS/BLUEPRINTS`;
    };
    async #LOAD_LIST_PATHS() {
        this.PATH_LIST_BLUEPRINTS = `${this.PATH_TOP}/BLUEPRINTS/CONSOLE/BlueprintList.json`;
    };

    // ========================== //
    // ## MEDIA SPECIFIC FILES ## //
    // ========================== //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
};