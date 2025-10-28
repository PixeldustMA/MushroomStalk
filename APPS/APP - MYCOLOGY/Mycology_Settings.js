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

        // await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================ //
        // << JSON FILES >> //
        // ================ //

        await this.#MEDIA();
        await this.#LAVALAMPS();
    };
    // ============= //
    // ## UTILITY ## //
    // ============= //

    async #GET_SESSIONS() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
    };
    async #LOAD_PATHS() {
        this.PATH_MEDIA = this.SESSION.PATHS.SETTINGS.SETTINGS.FILES.MEDIA;
        this.PATH_LAVALAMP = this.SESSION.PATHS.SETTINGS.SETTINGS.FILES.LAVALAMPS;
    };

    // ============================= //
    // ## SETTINGS SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE

    async #MEDIA() {await this.EXISTANCE_FILE(this.PATH_MEDIA, this.TEMPLATE_MEDIA())};
    async #LAVALAMPS() {await this.EXISTANCE_FILE(this.PATH_LAVALAMP, this.TEMPLATE_LAVALAMPS())};

    // =============== //
    // ## TEMPLATES ## //
    // =============== //

    TEMPLATE_MEDIA() {
        return {
            BOOKS: []
        }
    };
    TEMPLATE_LAVALAMPS() {
        return {
            POKEMON: {
                ONE: {},
                TWO: {},
                THREE: {},
                FOUR: {},
                FIVE: {},
                SIX: {}
            }
        }
    };
}
