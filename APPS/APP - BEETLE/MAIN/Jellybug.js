import Message from "./Message.js";

export default class Jellybug {

    /**
     * ## JELLYBUG CONSTRUCTOR
     */
    constructor({
        JELLYBUG_CONFIG_ELEMENT_NAME = 0,
        JELLYBUG_CONFIG_ELEMENT_TAG = 0,
        JELLYBUG_CONFIG_MODE_ERROR = 0,
        JELLYBUG_CONFIG_MODE_MISSING = 0
    }){
        // ====================== //
        // << ELEMENT SETTINGS >> //
        // ====================== //

        this.TAG = JELLYBUG_CONFIG_ELEMENT_TAG;
        this.ELEMENT_NAME = JELLYBUG_CONFIG_ELEMENT_NAME;

        // =========== //
        // << MODES >> //
        // =========== //

        this.CODE_ERROR = JELLYBUG_CONFIG_MODE_ERROR;
        this.CODE_MISSING = JELLYBUG_CONFIG_MODE_MISSING;
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## SET ERROR MODE
     */
    MODE(){
        switch (this.CODE_ERROR) {
            case 'MISSING':
                break;
            default:
                break;
        }
    };

    // =========== //
    // ## MODES ## //
    // =========== //

    /**
     * ## FILTER TYPE OF MISSING PROPERTY ERROR
     * 
     * -----------------------------------------
     * 
     * Handles errors relating to missing properties
     * 
     * Filters by mode, and activates the correct function
     */
    MISSING_MODE(){
        switch (this.CODE_MISSING) {
            case 'ID':
                new Message({
                    MESSAGE_CONFIG_COLOUR: 'RED',
                    MESSAGE_CONFIG_MESSAGE: this.MISSING_ID() 
                }).DISPLAY(); 
                break;
            case 'OPTIONS':
                new Message({
                    MESSAGE_CONFIG_COLOUR: 'RED',
                    MESSAGE_CONFIG_MESSAGE: this.MISSING_OPTIONS() 
                }).DISPLAY();
                break;
            default:
                break;
        }
    };

    // ============= //
    // ## MISSING ## //
    // ============= //

    /**
     * ## MISSING ID ERROR
     */
    MISSING_ID(){return `ID NOT SET FOR ELEMENT WITH DATA:: TYPE - ${this.TAG} // TAG - ${this.ELEMENT_NAME}` };
    /**
     * ## MISSING OPTIONS ERROR
     */
    MISSING_OPTIONS(){return `OPTIONS MISSING FOR SELECT WITH TAG:: ${this.TAG}`};
};