import DAISY_Function from "../DAISIES/DAISY_Function.js";
import DAISY_Time from "../DAISIES/Daisy_Time.js";
import Message from "./Message.js";

export default class Daisy {

    /**
     * ## DAISY CONSTRUCTOR
     */
    constructor(DAISY_CONFIG_MODE, {
        DAISY_CONFIG_DATA = 0, 
        DAISY_CONFIG_TYPE = 0, 
        DAISY_CONFIG_CATEGORY = 0,
        DAISY_CONFIG_SCRIPT = 0,
        DAISY_CONFIG_LOCATION = 0,
        DAISY_CONFIG_TEXT = 0,
        DAISY_CONFIG_TIME = 0
    }) {

        // ================= //
        // << CLASS DATA >> //
        // ================ //

        this.DAISY_TEXT = DAISY_CONFIG_TEXT;
        this.DAISY_DATA = DAISY_CONFIG_DATA;
        this.DAISY_TIME = DAISY_CONFIG_TIME;

        // ==================== //
        // << CLASS SETTINGS >> //
        // ==================== //

        this.DAISY_TYPE = DAISY_CONFIG_TYPE;
        this.DAISY_CATEGORY = DAISY_CONFIG_CATEGORY;
        this.DAISY_SCRIPT = DAISY_CONFIG_SCRIPT;
        this.DAISY_LOCATION = DAISY_CONFIG_LOCATION;
        this.DAISY_MODE = DAISY_CONFIG_MODE;
    };

    // ========== //
    // ## MAIN ## //
    // ========== //

    /**
     * ## READ SPECIFIC MODE
     * 
     * --------------------
     * 
     * Read the specific type of Daisy message that has been requested and filter
     */
    ACTIVATE_DAISY(){
        switch (this.DAISY_MODE) {
            case 'FUNCTION':
                return this.#DAISY_FUNCTTION();
            case 'TIME':
                return this.#DAISY_TIME();
            default:
                break;
        }
    };

    // ============ //
    // ## STYLES ## //
    // ============ //

    /**
     * ## DISPLAY FUNCTION MESSAGE
     * 
     * ---------------------------
     * 
     * Display a message specifically based around a function, using the 
     * Function Script
     */
    #DAISY_FUNCTTION() {
        let DATA = new DAISY_Function({
            // DAISY_CONFIG_DATA: this.DAISY_DATA, 
            DAISY_CONFIG_TYPE: this.DAISY_TYPE, 
            // DAISY_CONFIG_PARAMS: this.DAISY_PARAMS,
            // DAISY_CONFIG_LOCATION: this.DAISY_LOCATION,
            DAISY_CONFIG_TEXT: this.DAISY_TEXT
        }).MODE();
        return this.#DISPLAY(DATA);
    };
    /**
     * ## DISPLAY TIME MESSAGE
     * 
     * ---------------------------
     * 
     * Display a message specifically based around an interval, using the 
     * Time Script
     */
    #DAISY_TIME() {
        let DATA = new DAISY_Time({
            DAISY_CONFIG_TIME: this.DAISY_TIME}).MODE();
        return this.#DISPLAY(DATA);
    };

    // ============== //
    // ## MESSAGES ## //
    // ============== //

    /**
     * ## GENERATE THE MESSAGE
     * 
     * ------------------------
     * 
     * Generate the message based on the settings
     */
    #DISPLAY(PARAMETER_MESSAGE_SETTINGS) {

        let FLAG_Set_Message = false;
        let HOLD_Set = [];

        for (let INDEX_MESSAGE = 0; INDEX_MESSAGE < PARAMETER_MESSAGE_SETTINGS.length; INDEX_MESSAGE++) {
            const BLOCK_MESSAGE = PARAMETER_MESSAGE_SETTINGS[INDEX_MESSAGE];
            if (BLOCK_MESSAGE[0] === 'SET') {
                FLAG_Set_Message = true;
                this.#SET_MESSAGE(BLOCK_MESSAGE[1]);
                HOLD_Set = BLOCK_MESSAGE[1];
            }
            else {
                new Message({
                    MESSAGE_CONFIG_COLOUR: BLOCK_MESSAGE[0],
                    MESSAGE_CONFIG_MESSAGE: BLOCK_MESSAGE[1]
                }).DISPLAY();
            }
        };
        if(FLAG_Set_Message){this.#SET_MESSAGE(HOLD_Set);}
    };
    /**
     * ## SET THE SPECIFIC MESSAGE 
     */
    #SET_MESSAGE(PARAMATER_MESSAGE){
        return new Message({
            MESSAGE_CONFIG_COLOUR: 'CYAN',
            MESSAGE_CONFIG_SET: PARAMATER_MESSAGE
        }).DISPLAY();
    };
}