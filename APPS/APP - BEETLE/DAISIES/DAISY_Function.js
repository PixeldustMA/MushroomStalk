export default class DAISY_Function {

    /**
     * ## DAISY -- FUNCTION CONSTRUCTOR
     * --------------------------------
     * 
     * ### TYPE
     * 
     * -----------------
     * 
     * The type of function being requested
     * 
     * ### TEXT
     * 
     * ----------------------
     * 
     * The message that will be displayed
     */
    constructor({
        DAISY_CONFIG_TYPE = 0,
        DAISY_CONFIG_TEXT = 0
    }){

        // ================== //
        // << CLASS CONFIG >> //
        // ================== //

        this.DAISY_FUNCTION_TYPE = DAISY_CONFIG_TYPE;
        this.DAISY_FUNCTION_TEXT = DAISY_CONFIG_TEXT;
    
        // ========== //
        // << TEXT >> //
        // ========== //

        this.DAISY_MESSAGE = 'UNSET';
        this.MESSAGE_STANDARD = 'RUNNING THE FOLLOWING FUNKTION';

        // =========== //
        // << STYLE >> //
        // =========== //

        this.STYLE_BORDER = 'UNSET';
        this.STYLE_COLOUR = 'UNSET';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## SET MODE
     * 
     * -----------
     * 
     * Set the function mode for the debug message
     * 
     * This will return a different message set depending on the mode
     */
    MODE() {
        switch (this.DAISY_FUNCTION_TYPE) {
            case 'STANDARD':
                this.DAISY_MESSAGE = this.#STANDARD();
                this.STYLE_BORDER = 'EQUALS';
                this.STYLE_COLOUR = 'RED';
                break;
            default:
                break;
        }; 
        return [
            ['SET',this.STYLE_BORDER],
            [this.STYLE_COLOUR, this.DAISY_MESSAGE],
        ];
    };

    // ============ //
    // ## STYLES ## //
    // ============ //

    /**
     * ## STANDARD MESSAGE
     * ------------------
     * 
     * Return a standard function message
     */
    #STANDARD() {return `${this.MESSAGE_STANDARD}:: ${this.DAISY_FUNCTION_TEXT}`;};
}