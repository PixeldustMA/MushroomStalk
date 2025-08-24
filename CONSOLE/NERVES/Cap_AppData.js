import { Renderer } from "../LUNGS/Renderer.js";

// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                MEMORY                      == //
// ##                APP DATA                    ## //
// << ------------------------------------------ >> //
// ==       Generate the Session Users           == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class Cap_AppData extends Renderer{
    /**
     * ## MEMORY CONSTRUCTOR -- APP DATA
     */
    constructor({
        SETTINGS_CONFIG_PATH_ROOT = 0,
        SETTINGS_CONFIG_PATH_SETTINGS = 0
    }){

        // ========== //
        // ## LOAD ## //
        // ========== //

        super();

        // =========== //
        // ## PATHS ## //
        // =========== // 

        this.PATH_FILE_ROOT = SETTINGS_CONFIG_PATH_ROOT;
        this.PATH_FILE_SETTINGS = SETTINGS_CONFIG_PATH_SETTINGS;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.SETTINGS = {};
    };

    // ======================== //
    // ## INITIALISE AND RUN ## //
    // ======================== //

    async INITIALISE(){

        // =========== //
        // << FILES >> //
        // =========== //

        await this.#GENERATE_SETTINGS();

        // ============ //
        // << RESULT >> //
        // ============ //

        return this.SETTINGS;
    };

    // ===================== //
    // ## LOAD FROM FILES ## //
    // ===================== //

    async #GENERATE_SETTINGS(){
        this.RENDERER_PATH = this.PATH_FILE_SETTINGS;
        this.SETTINGS = JSON.parse(await this.READ());
    };
};
