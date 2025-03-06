import Daisy from "../../APPS/APP - BEETLE/MAIN/Daisy.js";
import Jellybug from "../../APPS/APP - BEETLE/MAIN/Jellybug.js";
import Branches from "../LUNGS/Branches.js";

export default class Connector_Beetle extends Branches {

    /**
     * ## BEETLE CONNECTOR
     */
    constructor({
        BEETLE_CONFIG_MODE = 0,
        BEETLE_CONFIG_DAISY_MODE = 0,
        BEETLE_CONFIG_CATEGORY = 0,
        BEETLE_CONFIG_SCRIPT = 0,
        BEETLE_CONFIG_DATA = 0,
        BEETLE_CONFIG_TYPE = 0,
        BEETLE_CONFIG_LOCATION = 0,
        BEETLE_CONFIG_TEXT = 0,
        BEETLE_CONFIG_TIME = 0,
        BEETLE_CONFIG_ELEMENT_DESCRIPTOR = 0,
        BEETLE_CONFIG_ERROR_MODE = 0,
        BEETLE_CONFIG_MISSING_MODE = 0,
        BEETLE_CONFIG_ELEMENT = 0,
    }){
        super();

        // ============== //
        // ## SETTINGS ## //
        // ============== //

        this.BEETLE_MODE = BEETLE_CONFIG_MODE;
        this.DAISY_DATA = BEETLE_CONFIG_DATA;
        this.DAISY_TYPE = BEETLE_CONFIG_TYPE;
        this.DAISY_TEXT = BEETLE_CONFIG_TEXT;

        // ============ //
        // ## TIMING ## //
        // ============ //

        this.DAISY_TIME = BEETLE_CONFIG_TIME;

        // ============== //
        // ## LOCATION ## //
        // ============== //

        this.DAISY_CATEGORY = BEETLE_CONFIG_CATEGORY;
        this.DAISY_SCRIPT = BEETLE_CONFIG_SCRIPT;
        this.DAISY_LOCATION = BEETLE_CONFIG_LOCATION;

        // ====================== //
        // ## GENERAL SETTINGS ## //
        // ====================== //

        this.DAISY_MODE = BEETLE_CONFIG_DAISY_MODE;

        // ==================== //
        // << ERROR SETTINGS >> //
        // ==================== //

        this.JELLYBUG_ELEMENT = BEETLE_CONFIG_ELEMENT;
        this.JELLYBUG_ERROR_CODE = BEETLE_CONFIG_ERROR_MODE;
        this.JELLYBUG_DESCRIPTION = BEETLE_CONFIG_ELEMENT_DESCRIPTOR;
        this.JELLYBUG_MISSING_CODE = BEETLE_CONFIG_MISSING_MODE;

    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## ACTIVATE BEETLE MODE
     * 
     * -----------------------
     * 
     * REQUEST SPECIFIC BEETLE MODE
     * 
     * SHOULD BE SET TO EITHER DEBUG OR ERROR
     */
    async READ_MODE(){
        switch (this.BEETLE_MODE) {
            case 'DEBUG':
                return await this.#DEBUG_MODE();
            case 'ERROR':
                return await this.#ERROR_MODE();
            default:
                break;
        }
    };

    // =========== //
    // ## MODES ## //
    // =========== //

    /**
     * ## LOAD DEBUG MODE
     * 
     * ---------------------------------
     * 
     * Run the beetle in debug mode
     */
    async #DEBUG_MODE() {
        if (await this.#DEBUG_CHECK()) {
            return new Daisy(this.DAISY_MODE, {
                DAISY_CONFIG_DATA: this.DAISY_DATA,
                DAISY_CONFIG_TYPE: this.DAISY_TYPE,
                DAISY_CONFIG_LOCATION: this.DAISY_LOCATION,
                DAISY_CONFIG_TEXT: this.DAISY_TEXT,
                DAISY_CONFIG_TIME: this.DAISY_TIME
            }).ACTIVATE_DAISY();
        }
    };
    /**
     * ## LOAD ERROR MODE
     * 
     * ---------------------------------
     * 
     * Run the beetle in error mode
     */
    async #ERROR_MODE() {
        return await new Jellybug({
            JELLYBUG_CONFIG_MODE_ERROR: this.JELLYBUG_ERROR_CODE,
            JELLYBUG_CONFIG_ELEMENT_TAG: this.JELLYBUG_ELEMENT,
            JELLYBUG_CONFIG_ELEMENT_NAME: this.JELLYBUG_DESCRIPTION,
            JELLYBUG_CONFIG_MODE_MISSING: this.JELLYBUG_MISSING_CODE
        }).MODE();
    };

    // =========== //
    // ## FLAGS ## //
    // =========== //

    /**
     * ## CHECK DEBUG STATUS
     * 
     * ----------------------
     * 
     * Find out if debugging is on or not for the requested file
     */
    async #DEBUG_CHECK() {
        return await this.DEBUG(this.DAISY_CATEGORY, this.DAISY_SCRIPT);
    };
}