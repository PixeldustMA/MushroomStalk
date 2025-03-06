export default class DAISY_Time {
    /**
     * ## TIME CONSTRUCTOR
     * 
     * -------------------
     */
    constructor({
        DAISY_CONFIG_TIME = 0
    }){

        // ========== //
        // << TEXT >> //
        // ========== //

        this.MESSAGE_POPPED = 'TIMEOUT BUBBLE POPPED';
        this.MESSAGE_TIMEOUT = 'TIMEOUT HAS BEEN SET AS: ';

        // ================== //
        // << CLASS CONFIG >> //
        // ================== //

        this.TIMEOUT_INTERVAL = DAISY_CONFIG_TIME;
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    MODE(){

        this.DAISY_MESSAGE = `${this.MESSAGE_POPPED}! ${this.MESSAGE_TIMEOUT} ${this.TIMEOUT_INTERVAL}`;
        this.STYLE_BORDER = 'HATS';
        this.STYLE_COLOUR = 'RED';

        return [
            ['SET', this.STYLE_BORDER],
            [this.STYLE_COLOUR, this.DAISY_MESSAGE],
        ];
    };

}